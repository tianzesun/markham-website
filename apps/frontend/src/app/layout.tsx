import { Source_Sans_3, Merriweather } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { VoiceWakeWord } from '../components/VoiceWakeWord'

export { metadata, viewport } from './metadata'

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: theme-init.js may add the "dark" class before React hydrates
    <html lang="en-CA" className={`scroll-smooth ${sourceSans.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" />
      </head>
      <body className="font-sans relative overflow-x-hidden">
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main-content" 
          className="fixed top-0 left-0 z-[10000] bg-primary-600 text-white px-4 py-3 -translate-y-full focus:translate-y-0 transition-transform"
        >
          Skip to main content
        </a>


        <Header />
        <main id="main-content" className="pt-16 relative z-10" role="main">
          {children}
        </main>
        <Footer />
        <VoiceWakeWord />
      </body>
    </html>
  )
}
