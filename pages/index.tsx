import { Heading, Link, Box, Text, List, ListItem } from '@ui/components'
import LocalLink from '../components/Link'
import { topPosts } from '../posts'

export default function Landing() {
  return (
    <>
      <Heading variant="lead" is="h1" mb="$8">
        Hey 👋
      </Heading>
      <Text fontSize="$2">
        Hey there, I'm Matt. I currently live and work in Boston as a software
        engineer working on Wayfair's Storefront Frontend Platform team. In my
        free time I like to work on several different{' '}
        <LocalLink to="/projects">projects</LocalLink>, and somehow find time to
        write some{' '}
        <LocalLink fontSize="$2" to="/blog">
          blog posts
        </LocalLink>{' '}
        as well.
      </Text>

      <Heading variant="h3" is="h3" my="$3">
        Popular blog posts:
      </Heading>
      <Box my="$5">
        <List variant="base" is="ol">
          {topPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? '$4' : null}>
              <LocalLink to={post.absolute}>{post.title}</LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>

      <Heading variant="h3" is="h3" my="$3">
        Recent Side Projects
      </Heading>
      <Text mb="$4">
        I work on a variety of side projects in my free time, below are a few of
        them.
      </Text>
      <List variant="base" is="ul" mt="$2">
        <ListItem mb="$4">
          <Link is="a" href="https://github.com/ds-pack/simple-props">
            Simple Props
          </Link>{' '}
          A minimal, CSS variable backed style-prop library
        </ListItem>
        <ListItem mb="$4">
          <Link
            is="a"
            href="https://github.com/hamlim/projects/tree/master/packages/reroute-core"
          >
            Reroute
          </Link>{' '}
          A React router package built for Suspense using hooks
        </ListItem>
        <ListItem mb="$4">
          <Link is="a" href="https://github.com/hamlim/inline-mdx.macro">
            inline-mdx.macro
          </Link>{' '}
          A babel macro for converting inline{' '}
          <Link is="a" href="https://mdxjs.com">
            MDX
          </Link>{' '}
          in JavaScript files.
        </ListItem>
        <ListItem mb="$2">
          <Link is="a" href="https://github.com/hamlim/notedo">
            Notedo
          </Link>{' '}
          A note and todo list web application using plain text
        </ListItem>
      </List>
      <Text mb="$4">
        Check out the rest <LocalLink to="/projects">here</LocalLink>.
      </Text>

      <Heading variant="h3" is="h3" my="$3">
        Notebook
      </Heading>
      <Text mb="$2">
        For content that I am still working on, and that I haven't published
        fully to my blog yet, I store in my Notebook. These are rough thoughts
        that I haven't had the time to fully piece together, or might not even
        represent complete concepts yet!
      </Text>
      <LocalLink to="/notebook">Give them a read</LocalLink>

      <Heading variant="h3" is="h3" my="$3">
        Random
      </Heading>
      <Text mb="$2">
        I sometimes hack on random ideas that don't really need their own domain
        or might not really be worth throwing in their own repo, you can find
        some of those in my Random part of the site.
      </Text>
      <LocalLink to="/aside">Check them out</LocalLink>

      <Heading variant="h3" is="h3" my="$3">
        Bookshelf
      </Heading>
      <Text mb="$2">
        I don't read too many books these days, however I'm loosely tracking the
        ones I've read and the ones I want to read next here!
      </Text>
      <LocalLink to="/bookshelf">See them here</LocalLink>

      <Heading variant="h3" is="h3" my="$3">
        Tools
      </Heading>
      <Text mb="$2">
        I sometimes like to share a bit about the software and hardware that I'm
        using daily.
      </Text>
      <LocalLink to="/tools">See them here</LocalLink>
    </>
  )
}
