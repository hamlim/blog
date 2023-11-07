import { Box } from '@recipes/box'
import { Container } from '@recipes/container'
import { Link } from '@recipes/link'

export default function Layout({ children }) {
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
            <Link href="/projects">🧪 Projects</Link>{' '}
            <Link href="/bookshelf">📚 Bookshelf</Link>{' '}
            <Link href="/social">🗣 Social</Link>
          </Box>
        </Container>
      </header>
      {children}
    </>
  )
}
