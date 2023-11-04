// import { Box, Text, TwitterMention, GitHubMention } from '@ds-pack/daisyui'
import { Box } from '@recipes/box'
import { Text } from '@recipes/text'
import { TwitterMention } from '@recipes/twitter-mention'
import { GitHubMention } from '@recipes/github-mention'
import { Link } from '@recipes/link'
// import { Container } from '@lib/Container'
import { Container } from '@recipes/container'
// import { LocalLink } from '@lib/LocalLink'
// import ThemeSelect from '@lib/ThemeSelect'
// import { getThemeCookie } from '@lib/theme-cookie'

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
            <Box id="breadcrumbs-portal" />
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
            {/* <ThemeSelect initialTheme={theme} /> */}
          </Box>
        </Container>
      </footer>
    </>
  )
}
