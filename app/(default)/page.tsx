import { fetchManifest } from '@lib/fetch-manifest';
import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { Link } from '@recipes/link';
import { List, ListItem } from '@recipes/list';
import { Text } from '@recipes/text';
import { Suspense } from 'react';

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
        <Link href='/posts'>See all posts</Link>
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
            <Link href={`/${post.year}/${post.month}/${post.slug}`}>
              {post.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default async function Page() {
  return (
    <Box>
      <Heading is='h1' className='mb-4'>
        Hey 👋
      </Heading>
      <Text className='text-xl'>
        Hey there, I'm Matt. I currently live and work in Boston as a software engineer working on Wayfair's Frontend
        Platform team. In my free time I like to work on several different <Link href='/projects'>projects</Link>
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
        <ListItem className='mb-4'>
          <Link is='a' href='https://github.com/ds-pack/simple-props'>
            Simple Props
          </Link>{' '}
          A minimal, CSS variable backed style-prop library
        </ListItem>
        <ListItem className='mb-4'>
          <Link
            is='a'
            href='https://github.com/hamlim/projects/tree/master/packages/reroute-core'
          >
            Reroute
          </Link>{' '}
          A React router package built for Suspense using hooks
        </ListItem>
        <ListItem className='mb-4'>
          <Link is='a' href='https://github.com/hamlim/inline-mdx.macro'>
            inline-mdx.macro
          </Link>{' '}
          A babel macro for converting inline{' '}
          <Link is='a' href='https://mdxjs.com'>
            MDX
          </Link>{' '}
          in JavaScript files.
        </ListItem>
        <ListItem className='mb-2'>
          <Link is='a' href='https://github.com/hamlim/notedo'>
            Notedo
          </Link>{' '}
          A note and todo list web application using plain text
        </ListItem>
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
        Random
      </Heading>
      <Text className='mb-2'>
        I sometimes hack on random ideas that don't really need their own domain or might not really be worth throwing
        in their own repo, you can find some of those in my Random part of the site.
      </Text>
      <Link href='/random'>Check them out</Link>

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
