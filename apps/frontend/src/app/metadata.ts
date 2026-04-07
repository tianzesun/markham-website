export const runtime = 'edge';

export const metadata = {
  metadataBase: new URL('https://heymarkham.ai'),
  title: {
    default: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    template: '%s | HeyMarkham',
  },
  description: 'Get instant answers about Markham city services using natural voice commands. Available 24/7 with 90%+ accuracy. Garbage collection, parks, events, and more.',
  keywords: 'Markham, AI, voice assistant, municipal services, smart city, Markham garbage collection, Markham parks, city services',
  authors: [{ name: 'HeyMarkham' }],
  creator: 'HeyMarkham',
  publisher: 'HeyMarkham',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    description: 'Get instant answers about Markham city services 24/7',
    url: 'https://heymarkham.ai',
    siteName: 'HeyMarkham',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyMarkham - Voice-Enabled AI Assistant for Markham Residents',
    description: 'Get instant answers about Markham city services 24/7',
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
  verification: {
    google: 'not yet verified',
  },
};