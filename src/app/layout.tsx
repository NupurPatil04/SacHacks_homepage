import type { Metadata } from 'next'
import './globals.css'
import ClientProvider from './client-provider'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'SacHacks',
  description: 'SacHacks homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <ScrollToTop />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
