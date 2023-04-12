import NextLink from 'next/link'
import {
  Box,
  Link,
  Text,
  TwitterMention,
  GitHubMention,
} from '@ds-pack/daisyui'
import { Container } from '@lib/Container'
import { LocalLink } from '@lib/LocalLink'

export default function DefaultLayout({ children }) {
  return (
    <>
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
    </>
  )
}
