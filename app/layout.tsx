import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingCTA } from '@/components/cta-buttons'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Nubara Medical | Female Hair Transplant Turkey 2026',
    template: '%s | Nubara Medical',
  },
  description: 'Expert female hair transplant services in Turkey. DHI & FUE techniques with comprehensive care. Trusted by international patients. Free consultation available.',
  keywords: ['female hair transplant turkey', 'female hair transplant cost 2026', 'female hairline restoration turkey', 'DHI hair transplant', 'FUE hair transplant'],
  authors: [{ name: 'Nubara Medical' }],
  creator: 'Nubara Medical',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://nubaramedical.com',
    siteName: 'Nubara Medical',
    title: 'Nubara Medical | Female Hair Transplant Turkey',
    description: 'Expert female hair transplant services in Turkey. DHI & FUE techniques with comprehensive care.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nubara Medical - Female Hair Transplant Turkey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nubara Medical | Female Hair Transplant Turkey',
    description: 'Expert female hair transplant services in Turkey. DHI & FUE techniques with comprehensive care.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2d5a47',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
