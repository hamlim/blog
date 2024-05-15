import { fetchManifest } from '@lib/fetch-manifest';
import { formatPostLink } from '@lib/format-post-link';
import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { Link } from '@recipes/link';
import { List, ListItem } from '@recipes/list';
import { Text } from '@recipes/text';
import { Suspense } from 'react';
import { projects } from './project-list';

async function getTopPosts() {
  let manifest = await fetchManifest();
  return manifest.posts.reduce((acc, post) => {
    if (manifest.gallery.includes(post.id)) {
      return [...acc, post];
    }
    return acc;
  }, []);
}

function LoadingTopPosts() {
  return (
    <Box className='my-4 h-[152px]'>
      <Text>Loading top posts...</Text>
      <Text>
        <Link href='/blog'>See all posts</Link>
      </Text>
    </Box>
  );
}

async function TopPosts() {
  let topPosts = await getTopPosts();

  return (
    <Box className='my-4'>
      <List is='ol'>
        {topPosts.map((post, i) => (
          <ListItem key={post.title} className={i !== 0 ? 'mt-2' : ''}>
            <Link href={formatPostLink(post)}>
              {post.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

let topProjects: Array<{
  link: string;
  title: React.ReactNode;
  description: React.ReactNode;
}> = projects.slice(0, 5);

export default async function Page() {
  return (
    <Box>
      <Heading is='h1' className='mb-4'>
        Hey 👋
      </Heading>
      <Text className='text-xl'>
        Hey there, I'm Matt. I currently live and work in Boston as a software engineer. In my free time I like to work
        on several different <Link href='/projects'>projects</Link>
        , and somehow find time to write some{' '}
        <Link className='text-xl' href='/posts'>
          blog posts
        </Link>{' '}
        as well.
      </Text>

      <Heading is='h3' className='my-3'>
        Popular blog posts:
      </Heading>
      <Suspense fallback={<LoadingTopPosts />}>
        {/* @ts-ignore */}
        <TopPosts />
      </Suspense>

      <Heading is='h3' className='my-3'>
        Recent Side Projects
      </Heading>
      <Text className='mb-4'>
        I work on a variety of side projects in my free time, below are a few of them.
      </Text>
      <List is='ul' className='mt-2'>
        {topProjects.map((project) => (
          <ListItem
            key={project.link}
            className='[&:not(:first-of-type)]:mt-3'
          >
            <Link
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {project.title}
              <span className='sr-only'>(opens in new window)</span>
            </Link>{' '}
            {project.description}
          </ListItem>
        ))}
      </List>
      <Text className='mb-4'>
        Check out the rest <Link href='/projects'>here</Link>.
      </Text>

      <Heading is='h3' className='my-3'>
        Notebook
      </Heading>
      <Text className='mb-2'>
        For content that I am still working on, and that I haven't published fully to my blog yet, I store in my
        Notebook. These are rough thoughts that I haven't had the time to fully piece together, or might not even
        represent complete concepts yet!
      </Text>
      <Link href='/notebook'>Give them a read</Link>

      <Heading is='h3' className='my-3'>
        Bookshelf
      </Heading>
      <Text className='mb-2'>
        I don't read too many books these days, however I'm loosely tracking the ones I've read and the ones I want to
        read next here!
      </Text>
      <Link href='/bookshelf'>See them here</Link>

      <Heading is='h3' className='my-3'>
        Tools
      </Heading>
      <Text className='mb-2'>
        I sometimes like to share a bit about the software and hardware that I'm using daily.
      </Text>
      <Link href='/tools'>See them here</Link>

      <Heading is='h3' className='my-3'>
        Snippets
      </Heading>
      <Text className='mb-2'>
        A small collection of useful code snippets that I often reference!
      </Text>
      <Link href='/snippets'>See them here</Link>
    </Box>
  );
}
