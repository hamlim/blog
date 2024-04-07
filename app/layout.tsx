import '@styles/globals.css';
import { Box } from '@recipes/box';
import { GitHubMention } from '@recipes/github-mention';
import { Text } from '@recipes/text';
import { ThemeProvider } from '@recipes/theme-provider';
import { ThemeToggle } from '@recipes/theme-toggle';
import { TwitterMention } from '@recipes/twitter-mention';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Github, Twitter } from 'lucide-react';
import type { Metadata, Viewport } from 'next';
import { NavigationHeader, NavigationList } from './Navigation';

export let dynamic = 'force-dynamic';

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body className='h-screen flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex grow flex-col min-h-screen'>
            <header className='flex-shrink bg-base-200'>
              <NavigationHeader />
            </header>
            <Box className='flex'>
              <NavigationList />
              <section className='px-4 my-0 grow flex justify-between flex-col container max-w-prose mx-[initial] main-content'>
                {children}
                <footer className='flex-shrink pt-6'>
                  <Box className='flex justify-between'>
                    <Box>
                      <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
                      <Text>
                        <span className='inline-flex items-center gap-2'>
                          <Twitter size={16} />
                          <TwitterMention>immatthamlin</TwitterMention>
                        </span>{' '}
                        <span className='inline-flex items-center gap-2'>
                          <Github size={16} />
                          <GitHubMention>hamlim</GitHubMention>
                        </span>
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
      </body>
    </html>
  );
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'light dark',
};
