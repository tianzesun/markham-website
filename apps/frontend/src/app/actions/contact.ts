'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real app, you would send to your backend here
  // await fetch('/api/contact', {
  //   method: 'POST',
  //   body: JSON.stringify(validatedFields.data),
  // });

  return {
    success: true,
    error: null,
  };
}