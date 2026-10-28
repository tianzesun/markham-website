import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white dark:bg-slate-950">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">Page not found</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          We couldn&rsquo;t find that page
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The link may be out of date. Try the demo instead, or ask a question in the FAQ.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/#demo" className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-colors">
            Try the Demo
          </Link>
          <Link href="/#faq" className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg font-medium text-sm transition-colors">
            Browse the FAQ
          </Link>
        </div>
      </div>
    </div>
  )
}
