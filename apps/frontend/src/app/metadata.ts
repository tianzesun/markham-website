export const runtime = 'edge';

export const metadata = {
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
  publisher: 'City of Markham',
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HeyMarkham - Voice Assistant for City of Markham',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    description: 'Get instant answers about Markham city services 24/7. Just say "Hey Markham".',
    creator: '@heymarkham',
    images: ['/og-image.png'],
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
  verification: {
    google: 'not yet verified',
  },
  category: 'Government',
  applicationName: 'HeyMarkham',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'HeyMarkham',
  },
  themeColor: '#0ea5e9',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};
