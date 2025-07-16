import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shyam Arora - Software Developer',
  description: 'Full-stack developer passionate about creating exceptional digital experiences.',
  keywords: 'software developer, full-stack, react, node.js, typescript',
  authors: [{ name: 'Shyam Arora' }],
  openGraph: {
    title: 'Shyam Arora - Software Developer',
    description: 'Full-stack developer passionate about creating exceptional digital experiences.',
    url: 'https://shyarora.github.io/portfolio',
    siteName: 'Shyam Arora Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shyam Arora - Software Developer',
    description: 'Full-stack developer passionate about creating exceptional digital experiences.',
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
        {children}
      </body>
    </html>
  )
}
