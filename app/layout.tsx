import '@styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

export default function Layout({ children }) {
  let cookieJar = cookies()
  return (
    <html lang="en-US">
      <body className="h-screen flex flex-col">
        <main className="flex grow flex-col min-h-screen">{children}</main>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Matt 👋',
  icons: [
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
  ],
  description: `Matt Hamlin's Personal Website`,
  keywords: [
    'Matt Hamlin',
    'blog',
    'portfolio',
    'web developer',
    'software engineer',
  ],
  authors: [
    {
      name: 'Matt Hamlin',
      url: 'https://matthamlin.me',
    },
  ],
  creator: 'Matt Hamlin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matthamlin.me',
    title: 'Matt Hamlin',
    description: `Matt Hamlin's Personal Website`,
    siteName: `Matt's Website`,
    // images: [
    //   {
    //     url: 'https://matthamlin.me/icon-512.png',
    //     width: 512,
    //     height: 512,
    //     alt: `Matt Hamlin's Personal Website`,
    //   },
    // ],
    // images: [
    //   {
    //     url: siteConfig.ogImage,
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Matt's Website`,
    description: `Matt Hamlin's personal website`,
    // images: ['https://feijoa-ui.vercel.app/icon-512.png'],
    creator: '@immatthamlin',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  // @TODO - add support for dark mode eventually
  colorScheme: 'light',
}
