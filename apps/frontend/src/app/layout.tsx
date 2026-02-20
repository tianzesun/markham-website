import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
  description: 'Get instant answers about Markham city services using natural voice commands. Available 24/7 with 90%+ accuracy. Garbage collection, parks, events, and more.',
  keywords: 'Markham, AI, voice assistant, municipal services, smart city, Markham garbage collection, Markham parks, city services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}