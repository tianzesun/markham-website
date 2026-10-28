import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How HeyMarkham handles your information: what we collect, why, and your choices.',
  alternates: { canonical: '/privacy' },
}

const LAST_UPDATED = 'October 27, 2026'

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Last updated: {LAST_UPDATED}</p>

        <Section title="Who we are">
          <p>
            HeyMarkham is operated by Aydenait Solutions. It is an independent service and is not
            affiliated with or endorsed by the City of Markham. Questions about this policy can be sent
            to <a href="mailto:info@aydenait.com" className="text-primary-600 dark:text-primary-400 underline">info@aydenait.com</a>.
          </p>
        </Section>

        <Section title="What we collect">
          <h3 className="font-semibold text-slate-900 dark:text-white mt-2 mb-2">Contact form</h3>
          <p className="mb-4">
            When you send a message through the contact form, we receive your name, email address,
            subject and message. We use this only to reply to you. The form is delivered to us through
            Formspree, a form-delivery service based in the United States, so your message may be
            processed and stored outside Canada.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Demo questions</h3>
          <p className="mb-4">
            Questions you type into the demo are answered entirely in your browser. They are not sent to
            us or stored by us.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Voice</h3>
          <p className="mb-4">
            Voice features are off until you turn them on, and your browser will ask for microphone
            permission first. Speech is converted to text by your browser&rsquo;s built-in speech
            recognition. Depending on your browser, the browser maker (for example Google for Chrome or
            Apple for Safari) may process that audio under its own privacy policy. We do not receive or
            store your audio or transcripts.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Preferences</h3>
          <p className="mb-4">
            If you choose light or dark mode, that choice is saved in your browser&rsquo;s local storage so
            the site remembers it. It never leaves your device.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Hosting</h3>
          <p>
            The site is hosted by Vercel, which keeps standard technical logs, such as IP addresses and
            browser type, to deliver and secure the site. We do not use analytics, advertising or
            tracking cookies.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep contact messages only as long as needed to respond and follow up, and delete them
            when they are no longer needed or when you ask us to.
          </p>
        </Section>

        <Section title="Your choices and rights">
          <p className="mb-4">
            You can ask to see, correct or delete the personal information we hold about you by
            emailing <a href="mailto:info@aydenait.com" className="text-primary-600 dark:text-primary-400 underline">info@aydenait.com</a>.
            We will respond within 30 days.
          </p>
          <p>
            We handle personal information in line with Canada&rsquo;s Personal Information Protection and
            Electronic Documents Act (PIPEDA). If you are not satisfied with our response, you can
            contact the <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">Office of the Privacy Commissioner of Canada</a>.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If we change how we handle information, we will update this page and the date at the top.
          </p>
        </Section>

        <p className="mt-12">
          <Link href="/" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">&larr; Back to HeyMarkham</Link>
        </p>
      </article>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      {children}
    </section>
  )
}
