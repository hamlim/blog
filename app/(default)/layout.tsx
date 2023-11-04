import { Box } from '@recipes/box'
import { Text } from '@recipes/text'
import { TwitterMention } from '@recipes/twitter-mention'
import { GitHubMention } from '@recipes/github-mention'
import { Link } from '@recipes/link'
import { Container } from '@recipes/container'
import { ThemeToggle } from '@recipes/theme-toggle'

export default function DefaultLayout({ children }) {
  // let theme = getThemeCookie()
  return (
    <>
      <header className="flex-shrink bg-base-200">
        <Container is="nav">
          <Box className="flex items-center mb-2">
            <Link href="/" className="flex items-center">
              🏡 Home
            </Link>
          </Box>
          <Box>
            <Link href="/posts">📝 Blog</Link>{' '}
            <Link href="/resume">💼 Resume</Link>{' '}
            <Link href="/projects">🧪 Projects</Link>{' '}
            <Link href="/bookshelf">📚 Bookshelf</Link>{' '}
            <Link href="/social">🗣 Social</Link>
          </Box>
        </Container>
      </header>
      <Container is="section">{children}</Container>
      <footer className="flex-shrink bg-base-200">
        <Container>
          <Box className="flex justify-between">
            <Box>
              <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
              <Text>
                🐦 <TwitterMention>immatthamlin</TwitterMention> 👨‍💻{' '}
                <GitHubMention>hamlim</GitHubMention>
              </Text>
            </Box>
            <ThemeToggle />
          </Box>
        </Container>
      </footer>
    </>
  )
}
