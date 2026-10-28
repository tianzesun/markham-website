'use client';

import { useState } from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import { submitContactForm } from '../app/actions/contact';

export const ContactForm = () => {
  // Optimistic update for contact form
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [optimisticContact, setOptimisticContact] = useState<{ status: 'idle' | 'success' | 'error'; error: string | null }>(
    { status: 'idle', error: null }
  );

  return (
    <div data-reveal style={{ transitionDelay: '0.2s' }}>
      <form 
        onSubmit={async (e) => {
          e.preventDefault();
          if (isSubmittingContact) return;
          const form = e.currentTarget;
          const formData = new FormData(form);
          setIsSubmittingContact(true);
          try {
            const result = await submitContactForm(formData);
            if (result.success) {
              setOptimisticContact({ status: 'success', error: null });
              form.reset();
            } else {
              setOptimisticContact({ status: 'error', error: result.error || 'Failed to send' });
            }
          } catch {
            setOptimisticContact({ status: 'error', error: 'Failed to send message' });
          } finally {
            setIsSubmittingContact(false);
          }
        }}
        className="space-y-5 bg-white/10 p-6 rounded-xl border border-white/20"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="your@email.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary-100 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="How can we help?"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-2">
            Message
          </label>
           <textarea
             id="message"
             name="message"
             rows={4}
             className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
             placeholder="Tell us more about your needs..."
             required
           />
        </div>
        
        <div>
          <button 
            type="submit"
            disabled={isSubmittingContact}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 text-primary-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmittingContact ? 'Sending...' : 'Send Message'}
            <ArrowRight size={18} />
          </button>
        </div>
        
         {/* Status message */}
         <div className="text-center text-sm min-h-[20px]">
          {optimisticContact.status === 'idle' && (
            <p className="text-primary-200">
              We'll reply by email as soon as we can
            </p>
          )}
          {optimisticContact.status === 'success' && (
            <p className="text-green-300">
              Message sent! We'll get back to you shortly.
            </p>
          )}
          {optimisticContact.status === 'error' && (
            <p className="text-red-300">
              {optimisticContact.error || 'Failed to send message'}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
