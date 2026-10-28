import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How HeyMarkham handles your information: what we collect, why, and your choices.',
  alternates: { canonical: '/privacy' },
}

const LAST_UPDATED = 'October 27, 2026'

const EMAIL = 'info@aydenait.com'
const PHONE = '289-859-9523'

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Last updated: {LAST_UPDATED}</p>

        <Section title="Who we are">
          <p>
            HeyMarkham is operated by Aydenait Solutions. It is an independent service and is not
            affiliated with or endorsed by the City of Markham. Questions about this policy can be emailed
            to <a href={`mailto:${EMAIL}`} className="text-primary-600 dark:text-primary-400 underline">{EMAIL}</a> or
            asked by phone at <a href="tel:+12898599523" className="text-primary-600 dark:text-primary-400 underline">{PHONE}</a>.
          </p>
        </Section>

        <Section title="What we collect">
          <h3 className="font-semibold text-slate-900 dark:text-white mt-2 mb-2">Contact form</h3>
          <p className="mb-4">
            When you send a message through the contact form, we receive your name, email address,
            subject and message. We use this only to reply to you, and we don&rsquo;t sell it or share it
            for marketing. The form is delivered to us by Formspree, Inc., a form-delivery service that
            uses technical infrastructure in the United States, so your message is processed and stored
            outside Canada and may be accessible to authorities there under US law. A copy of each
            message is kept in our Formspree account and in our email inbox.
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

          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Visit counts</h3>
          <p className="mb-4">
            We use Vercel Web Analytics to count visits and see which pages are useful. It doesn&rsquo;t use
            cookies and doesn&rsquo;t track you across other websites. For each page view it records the
            page address, the site that linked you here, your approximate location (country, region
            and city), your device type, and your browser and operating system. Visitors are told apart
            only by a hash of the request, which is discarded after 24 hours, and we see the results only
            as totals. It does not record what you type into the demo, the FAQ search or the contact
            form. See{' '}
            <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">Vercel&rsquo;s Web Analytics privacy information</a>{' '}
            for details.
          </p>

          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Hosting</h3>
          <p>
            The site is hosted by Vercel, which keeps standard technical logs, such as IP addresses and
            browser type, to deliver and secure the site. We do not use advertising or tracking cookies.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep contact messages only as long as needed to respond and follow up. When they are no
            longer needed, or when you ask us to, we delete them from both our inbox and our Formspree
            account. Formspree may keep its own technical logs under its{' '}
            <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">privacy policy</a>.
          </p>
        </Section>

        <Section title="Your choices and rights">
          <p className="mb-4">
            You can ask to see, correct or delete the personal information we hold about you, or
            withdraw your consent, by emailing <a href={`mailto:${EMAIL}`} className="text-primary-600 dark:text-primary-400 underline">{EMAIL}</a> or
            calling <a href="tel:+12898599523" className="text-primary-600 dark:text-primary-400 underline">{PHONE}</a>. We will respond within 30 days.
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
