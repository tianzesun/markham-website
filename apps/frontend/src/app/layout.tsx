import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { VoiceWakeWord } from '../components/VoiceWakeWord'
import { MouseSpotlight } from '../components/MouseSpotlight'

export { metadata, viewport } from './metadata'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: theme-init.js may add the "dark" class before React hydrates
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script src="/theme-init.js" />
      </head>
      <body className={`${inter.className} relative overflow-x-hidden`}>
        {/* Skip Navigation Link for Accessibility */}
        <a 
          href="#main-content" 
          className="fixed top-0 left-0 z-[10000] bg-sky-600 text-white px-4 py-3 -translate-y-full focus:translate-y-0 transition-transform"
        >
          Skip to main content
        </a>

        {/* Grain Overlay - 2026 Premium Effect */}
        <div 
          className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Mouse Following Spotlight */}
        <MouseSpotlight />

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
