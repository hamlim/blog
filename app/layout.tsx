import { themeClass } from '@ds-pack/components'
import NextLink from 'next/link'

import {
  Box,
  Link,
  Text,
  TwitterMention,
  GitHubMention,
} from '@ds-pack/daisyui'

import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'
import '@styles/globals.css'

import {
  body,
  main,
  header,
  footer,
  container,
  section,
} from '@styles/app/RootLayout'
import { Metadata } from 'next'

function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}

export default function Layout({ children }) {
  return (
    <html data-theme="corporate" lang="en-US" className={themeClass}>
      <body className={body}>
        <main className={main}>
          <header className={header}>
            <nav className={container}>
              <Box className="flex items-center">
                <LocalLink href="/" className="flex items-center">
                  🏡 Home
                </LocalLink>
                <Box id="breadcrumbs-portal" />
              </Box>
              <Box>
                <LocalLink href="/posts">📝 Blog</LocalLink>{' '}
                <LocalLink href="/projects">🧪 Projects</LocalLink>{' '}
                <LocalLink href="/bookshelf">📚 Bookshelf</LocalLink>{' '}
                <LocalLink href="/social">🗣 Social</LocalLink>
              </Box>
            </nav>
          </header>
          <section className={section}>{children}</section>
          <footer className={footer}>
            <Box className={container}>
              <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
              <Text>
                🐦 <TwitterMention>immatthamlin</TwitterMention> 👨‍💻{' '}
                <GitHubMention>hamlim</GitHubMention>
              </Text>
            </Box>
          </footer>
        </main>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Matt Hamlin's Personal Site",
  icons: [
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
  ],
}
