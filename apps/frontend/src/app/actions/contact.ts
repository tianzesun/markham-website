'use server';

import { randomUUID } from 'crypto';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().trim().email('Invalid email address').max(254),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000),
});

export async function submitContactForm(
  formData: FormData
) {
  // Validate
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Please fix the errors in the form',
    };
  }

  // Delivery endpoint is injected by the hosting platform's secret store, never committed
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const correlationId = randomUUID();

  if (!webhookUrl) {
    console.error(`[contact ${correlationId}] CONTACT_WEBHOOK_URL is not configured`);
    return {
      success: false,
      error: `We couldn't send your message. Please email info@aydenait.com instead. (Ref: ${correlationId})`,
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validatedFields.data, correlationId }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`status ${response.status}`);
    }
  } catch (err) {
    // Log the failure reason only; the submission contains personal information
    console.error(`[contact ${correlationId}] Delivery failed: ${err instanceof Error ? err.message : 'unknown error'}`);
    return {
      success: false,
      error: `We couldn't send your message. Please try again later. (Ref: ${correlationId})`,
    };
  }

  return {
    success: true,
    error: null,
  };
}
