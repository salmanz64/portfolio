import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects and expertise',
  keywords: ['developer', 'portfolio', 'full stack', 'web development', 'software engineer'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development projects and expertise',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer Portfolio',
    description: 'Professional portfolio showcasing full-stack development projects and expertise',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

