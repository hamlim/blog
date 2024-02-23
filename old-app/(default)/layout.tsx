import { Box } from '@recipes/box';
import { Container } from '@recipes/container';
import { GitHubMention } from '@recipes/github-mention';
import { Link } from '@recipes/link';
import { Text } from '@recipes/text';
import { ThemeToggle } from '@recipes/theme-toggle';
import { TwitterMention } from '@recipes/twitter-mention';

export default function DefaultLayout({ children }) {
  return (
    <>
      <header className='flex-shrink bg-base-200'>
        <Container is='nav'>
          <Box className='flex items-center mb-2'>
            <Link href='/' className='flex items-center'>
              🏡 Home
            </Link>
          </Box>
          <Box>
            <Link href='/posts'>📝 Blog</Link> <Link href='/projects'>🧪 Projects</Link>{' '}
            <Link href='/bookshelf'>📚 Bookshelf</Link> <Link href='/feed'>🧵 Feed</Link>
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
                💼 <Link href='/resume'>Resume</Link> 🐦 <TwitterMention>immatthamlin</TwitterMention> 👨‍💻{' '}
                <GitHubMention>hamlim</GitHubMention> 🗣 <Link href='/social'>All socials</Link>
              </Text>
            </Box>
            <ThemeToggle />
          </Box>
        </Container>
      </footer>
    </>
  );
}
