import '@styles/globals.css'
import { Bluesky } from '@/components/bluesky'
import { GitHub } from '@/components/github'
import { Box } from '@recipes/box'
import { GitHubMention } from '@recipes/github-mention'
import { Link } from '@recipes/link'
import { Text } from '@recipes/text'
import { ThemeProvider } from '@recipes/theme-provider'
import { ThemeToggle } from '@recipes/theme-toggle'
import { Toaster } from '@recipes/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Github, Twitter } from 'lucide-react'
import type { Metadata, Viewport } from 'next'
import { NavigationHeader, NavigationList } from './Navigation'

export let dynamic = 'force-dynamic'

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex grow flex-col min-h-screen">
            <header className="flex-shrink bg-base-200">
              <NavigationHeader />
            </header>
            <Box className="flex">
              <NavigationList />
              <section className="px-4 my-0 grow flex justify-between flex-col container max-w-prose mx-[initial] main-content">
                {children}
                <footer className="flex-shrink pt-6">
                  <Box className="flex justify-between">
                    <Box>
                      <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
                      <Text className="flex flex-row gap-2">
                        <Link
                          href="https://bsky.app/profile/matthamlin.me"
                          target="_blank"
                          className="inline-flex items-center gap-2"
                        >
                          <Bluesky
                            height={16}
                            width={16}
                            fill="currentColor"
                          />
                          @matthamlin.me
                          <span className="sr-only">Opens in new tab</span>
                        </Link>{' '}
                        <Link
                          href="https://github.com/hamlim"
                          target="_blank"
                          className="inline-flex items-center gap-2"
                        >
                          <GitHub
                            height={16}
                            width={16}
                            fill="currentColor"
                          />
                          hamlim
                          <span className="sr-only">Opens in new tab</span>
                        </Link>
                      </Text>
                    </Box>
                    <ThemeToggle />
                  </Box>
                </footer>
              </section>
            </Box>
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
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
  metadataBase: new URL('https://matthamlin.me'),
  creator: 'Matt Hamlin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matthamlin.me',
    title: 'Matt Hamlin',
    siteName: "Matt's Website",
    description: `Matt Hamlin's Personal Website`,
    images: [
      {
        url: 'https://matthamlin.me/me.png',
        width: 384,
        height: 512,
        alt: `Matt Hamlin's Personal Website`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    site: '@immatthamlin',
    card: 'summary_large_image',
    title: `Matt's Website`,
    description: `Matt Hamlin's personal website`,
    creator: '@immatthamlin',
    images: [
      {
        url: 'https://matthamlin.me/me.png',
        width: 384,
        height: 512,
        alt: `Matt Hamlin's Personal Website`,
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light dark',
}
