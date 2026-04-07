"use client";

"use client";

import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useEffect, useRef } from 'react'

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
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mouse following spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return
      spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`)
      spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative overflow-x-hidden`}>
        {/* Grain Overlay - 2026 Premium Effect */}
        <div 
          className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Mouse Following Spotlight */}
        <div 
          ref={spotlightRef}
          className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.06), transparent 40%)`,
          }}
        />

        <Header />
        <main className="pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
