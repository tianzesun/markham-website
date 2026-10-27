import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://heymarkham.ai'),
  title: {
    default: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    template: '%s | HeyMarkham',
  },
  description: 'Get instant answers about Markham city services using natural voice commands. Just say "Hey Markham". Available 24/7 with 90%+ accuracy. Garbage collection, parks, events, permits and more.',
  keywords: [
    'Markham', 'AI assistant', 'voice assistant', 'Markham garbage collection', 'Markham recycling',
    'Markham parks', 'Markham events', 'city services', 'smart city', 'Markham Ontario',
    'municipal services', 'Hey Markham', 'Markham AI', 'City of Markham', 'Markham permits'
  ],
  authors: [{ name: 'HeyMarkham' }],
  creator: 'HeyMarkham',
  publisher: 'Aydenait Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    description: 'Get instant answers about Markham city services 24/7. Just say "Hey Markham".',
    url: 'https://heymarkham.ai',
    siteName: 'HeyMarkham',
    locale: 'en_CA',
    type: 'website',
    // Image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    description: 'Get instant answers about Markham city services 24/7. Just say "Hey Markham".',
    creator: '@heymarkham',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Government',
  applicationName: 'HeyMarkham',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'HeyMarkham',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};
