import { Box } from '@ds-pack/daisyui'
import { Container } from '@lib/Container'
import { LocalLink } from '@lib/LocalLink'

export default function Layout({ children }) {
  return (
    <>
      <header className="flex-shrink bg-base-200">
        <Container is="nav">
          <Box className="flex items-center mb-2">
            <LocalLink href="/" className="flex items-center">
              🏡 Home
            </LocalLink>
          </Box>
          <Box>
            <LocalLink href="/posts">📝 Blog</LocalLink>{' '}
            <LocalLink href="/projects">🧪 Projects</LocalLink>{' '}
            <LocalLink href="/bookshelf">📚 Bookshelf</LocalLink>{' '}
            <LocalLink href="/social">🗣 Social</LocalLink>
          </Box>
        </Container>
      </header>
      {children}
    </>
  )
}
