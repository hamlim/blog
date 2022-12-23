import {
  themeClass,
  Box,
  Link,
  Text,
  TwitterMention,
  GitHubMention,
} from '@ds-pack/components'
import NextLink from 'next/link'
import '@ds-pack/components/dist/vars.css'
import '@ds-pack/components/dist/reset.css'

import {
  body,
  main,
  header,
  nav,
  footer,
  container,
} from '@styles/app/RootLayout'

function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}

export default function Layout({ children }) {
  return (
    <html lang="en-US" className={themeClass}>
      <body className={body}>
        <main className={main}>
          <header className={header}>
            <Box
              is="nav"
              className={nav}
              maxWidth={{ small: '94vw', medium: '80vw', large: '70ch' }}
              minWidth={{ small: '94vw', medium: '80vw', large: '70ch' }}
              flexDirection={{ small: 'column', large: 'row' }}
            >
              <Box display="flex" alignItems="center">
                <LocalLink href="/" display="flex" alignItems="center">
                  <Text mr="$2" is="span" aria-label="Home" role="img">
                    🏡
                  </Text>{' '}
                  Home
                </LocalLink>
                <Box id="breadcrumbs-portal" />
              </Box>
              <Box>
                <LocalLink href="/posts">📝 Blog</LocalLink>{' '}
                <LocalLink href="/projects">🧪 Projects</LocalLink>{' '}
                <LocalLink href="/bookshelf">📚 Bookshelf</LocalLink>{' '}
                <LocalLink href="/social">🗣 Social</LocalLink>
              </Box>
            </Box>
          </header>
          <Box
            maxWidth={{ small: '94vw', medium: '80vw', large: '70ch' }}
            minWidth={{ small: '94vw', medium: '80vw', large: '70ch' }}
            p={{ small: '$3', medium: '$7', large: '$10' }}
            m="0 auto"
            flexGrow="1"
          >
            {children}
          </Box>
          <footer className={footer}>
            <Box
              className={container}
              maxWidth={{ small: '94vw', medium: '80vw', large: '70ch' }}
              minWidth={{ small: '94vw', medium: '80vw', large: '70ch' }}
              flexDirection={{ _: 'column', large: 'row' }}
            >
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
