import '@styles/globals.css';
import { Box } from '@recipes/box';
import { Container } from '@recipes/container';
import { GitHubMention } from '@recipes/github-mention';
import { Link } from '@recipes/link';
import { Text } from '@recipes/text';
import { ThemeProvider } from '@recipes/theme-provider';
import { ThemeToggle } from '@recipes/theme-toggle';
import { TwitterMention } from '@recipes/twitter-mention';
import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';

export default function Layout({ children }) {
  let cookieJar = cookies();
  return (
    <html lang='en-US'>
      <body className='h-screen flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex grow flex-col min-h-screen'>
            <header className='flex-shrink bg-base-200'>
              <Container is='nav'>
                <Box className='flex items-center mb-2'>
                  <Link href='/' className='flex items-center'>
                    🏡 Home
                  </Link>
                </Box>
                <Box>
                  <Link href='/posts'>📝 Blog</Link> <Link href='/projects'>🧪 Projects</Link>{' '}
                  <Link href='/bookshelf'>📚 Bookshelf</Link> <Link href='/resume'>💼 Resume</Link>
                </Box>
              </Container>
            </header>
            <Container is='section'>{children}</Container>
            <footer className='flex-shrink bg-base-200'>
              <Container>
                <Box className='flex justify-between'>
                  <Box>
                    <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
                    <Text>
                      <Link href='/feed'>🧵 Feed</Link> <TwitterMention>immatthamlin</TwitterMention>{' '}
                      <GitHubMention>hamlim</GitHubMention> <Link href='/social'>🗣 All socials</Link>
                    </Text>
                  </Box>
                  <ThemeToggle />
                </Box>
              </Container>
            </footer>
          </main>
        </ThemeProvider>
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
