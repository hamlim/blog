import { Box, Text, TwitterMention, GitHubMention } from '@ds-pack/daisyui'
import { Container } from '@lib/Container'
import { LocalLink } from '@lib/LocalLink'
import ThemeSelect from '@lib/ThemeSelect'
import { getThemeCookie } from '@lib/theme-cookie'

export default function DefaultLayout({ children }) {
  let theme = getThemeCookie()
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
            <LocalLink href="/resume">💼 Resume</LocalLink>{' '}
            <LocalLink href="/projects">🧪 Projects</LocalLink>{' '}
            <LocalLink href="/bookshelf">📚 Bookshelf</LocalLink>{' '}
            <LocalLink href="/social">🗣 Social</LocalLink>
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
            <ThemeSelect initialTheme={theme} />
          </Box>
        </Container>
      </footer>
    </>
  )
}
