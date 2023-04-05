import NextLink from 'next/link'
import {
  Box,
  Link,
  Text,
  TwitterMention,
  GitHubMention,
  cx,
} from '@ds-pack/daisyui'
import '@styles/globals.css'

import { Metadata } from 'next'

function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}

function Container(props) {
  return (
    <Box
      {...props}
      className={cx({
        'p-4 my-0 mx-auto grow flex justify-between flex-col container max-w-prose':
          true,
        [props.className]: !!props.className,
      })}
    />
  )
}

export default function Layout({ children }) {
  return (
    <html data-theme="corporate" lang="en-US">
      <body className="h-screen flex flex-col">
        <main className="flex grow flex-col min-h-screen">
          <header className="flex-shrink bg-base-200">
            <Container is="nav">
              <Box className="flex items-center mb-2">
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
            </Container>
          </header>
          <Container is="section">{children}</Container>
          <footer className="flex-shrink bg-base-200">
            <Container>
              <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
              <Text>
                🐦 <TwitterMention>immatthamlin</TwitterMention> 👨‍💻{' '}
                <GitHubMention>hamlim</GitHubMention>
              </Text>
            </Container>
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
