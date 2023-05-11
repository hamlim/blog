import { Heading, Text, Box, List, ListItem, Link } from '@ds-pack/daisyui'
import NextLink from 'next/link'
import { fetchManifest } from '@lib/fetch-manifest'
import { Suspense } from 'react'

function LocalLink({ href, ...props }) {
  return <Link is={NextLink} href={href} {...props} />
}

async function getTopPosts() {
  let manifest = await fetchManifest()
  return manifest.posts.reduce((acc, post) => {
    if (manifest.gallery.includes(post.id)) {
      return [...acc, post]
    }
    return acc
  }, [])
}

function LoadingTopPosts() {
  return (
    <Box className="my-4 h-[152px]">
      <Text>Loading top posts...</Text>
      <Text>
        <LocalLink href="/posts">See all posts</LocalLink>
      </Text>
    </Box>
  )
}

async function TopPosts() {
  let topPosts = await getTopPosts()

  return (
    <Box className="my-4">
      <List variant="base" is="ol">
        {topPosts.map((post, i) => (
          <ListItem key={post.title} className={i !== 0 ? 'mt-2' : ''}>
            <LocalLink href={`/${post.year}/${post.month}/${post.slug}`}>
              {post.title}
            </LocalLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default async function Page() {
  return (
    <Box>
      <Heading variant="lead" is="h1" className="mb-4">
        Hey 👋
      </Heading>
      <Text className="text-xl">
        Hey there, I'm Matt. I currently live and work in Boston as a software
        engineer working on Wayfair's Frontend Platform team. In my free time I
        like to work on several different{' '}
        <LocalLink href="/projects">projects</LocalLink>, and somehow find time
        to write some{' '}
        <LocalLink className="text-xl" href="/posts">
          blog posts
        </LocalLink>{' '}
        as well.
      </Text>

      <Heading variant="h3" is="h3" className="my-3">
        Popular blog posts:
      </Heading>
      <Suspense fallback={<LoadingTopPosts />}>
        {/* @ts-ignore */}
        <TopPosts />
      </Suspense>

      <Heading variant="h3" is="h3" className="my-3">
        Recent Side Projects
      </Heading>
      <Text className="mb-4">
        I work on a variety of side projects in my free time, below are a few of
        them.
      </Text>
      <List variant="base" is="ul" className="mt-2">
        <ListItem className="mb-4">
          <Link is="a" href="https://github.com/ds-pack/simple-props">
            Simple Props
          </Link>{' '}
          A minimal, CSS variable backed style-prop library
        </ListItem>
        <ListItem className="mb-4">
          <Link
            is="a"
            href="https://github.com/hamlim/projects/tree/master/packages/reroute-core"
          >
            Reroute
          </Link>{' '}
          A React router package built for Suspense using hooks
        </ListItem>
        <ListItem className="mb-4">
          <Link is="a" href="https://github.com/hamlim/inline-mdx.macro">
            inline-mdx.macro
          </Link>{' '}
          A babel macro for converting inline{' '}
          <Link is="a" href="https://mdxjs.com">
            MDX
          </Link>{' '}
          in JavaScript files.
        </ListItem>
        <ListItem className="mb-2">
          <Link is="a" href="https://github.com/hamlim/notedo">
            Notedo
          </Link>{' '}
          A note and todo list web application using plain text
        </ListItem>
      </List>
      <Text className="mb-4">
        Check out the rest <LocalLink href="/projects">here</LocalLink>.
      </Text>

      <Heading variant="h3" is="h3" className="my-3">
        Notebook
      </Heading>
      <Text className="mb-2">
        For content that I am still working on, and that I haven't published
        fully to my blog yet, I store in my Notebook. These are rough thoughts
        that I haven't had the time to fully piece together, or might not even
        represent complete concepts yet!
      </Text>
      <LocalLink href="/notebook">Give them a read</LocalLink>

      <Heading variant="h3" is="h3" className="my-3">
        Random
      </Heading>
      <Text className="mb-2">
        I sometimes hack on random ideas that don't really need their own domain
        or might not really be worth throwing in their own repo, you can find
        some of those in my Random part of the site.
      </Text>
      <LocalLink href="/random">Check them out</LocalLink>

      <Heading variant="h3" is="h3" className="my-3">
        Bookshelf
      </Heading>
      <Text className="mb-2">
        I don't read too many books these days, however I'm loosely tracking the
        ones I've read and the ones I want to read next here!
      </Text>
      <LocalLink href="/bookshelf">See them here</LocalLink>

      <Heading variant="h3" is="h3" className="my-3">
        Tools
      </Heading>
      <Text className="mb-2">
        I sometimes like to share a bit about the software and hardware that I'm
        using daily.
      </Text>
      <LocalLink href="/tools">See them here</LocalLink>
    </Box>
  )
}
