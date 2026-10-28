import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://heymarkham.vercel.app'),
  title: {
    default: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    template: '%s | HeyMarkham',
  },
  description: 'Quick, accurate answers about Markham city services, drawn from official City information with links to the source. Ask by voice or text, 24/7: garbage collection, parking, permits, recreation and more.',
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
    description: 'Quick, accurate answers about Markham city services 24/7, with links to official sources. Just say "Hey Markham".',
    url: 'https://heymarkham.vercel.app',
    siteName: 'HeyMarkham',
    locale: 'en_CA',
    type: 'website',
    // Image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    description: 'Quick, accurate answers about Markham city services 24/7, with links to official sources. Just say "Hey Markham".',
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
  category: 'Technology',
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
  themeColor: '#0f172a',
};
