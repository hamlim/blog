import * as React from 'react'
import {
  Heading,
  Link,
  Box,
  Text,
  VisuallyHidden,
  List,
  ListItem,
} from '@ds-pack/components'
import LocalLink from '../components/Link'
import { topPosts } from '../posts'

export default function Landing() {
  return (
    <>
      <Heading variant="lead" forwardedAs="h1" mb={8}>
        Hey 👋🏼
      </Heading>
      <Text fontSize={2}>
        Hey there, I'm Matt. I currently live and work in Boston as a software
        engineer working on design systems at Wayfair. In my free time I like to
        work on several different{' '}
        <Link forwardedAs="a" href="https://github.com/hamlim">
          open source projects
          <VisuallyHidden forwardedAs="span">
            (opens in new window)
          </VisuallyHidden>
        </Link>
        , and somehow find time to write some{' '}
        <LocalLink fontSize={2} to="/blog">
          blog posts
        </LocalLink>{' '}
        as well.
      </Text>

      <Heading variant="h3" forwardedAs="h3" my={3}>
        Popular blog posts:
      </Heading>
      <Box my={5}>
        <List variant="base" as="ol">
          {topPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? 6 : null}>
              <LocalLink to={post.absolute}>{post.title}</LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>

      <Heading variant="h3" forwardedAs="h3" my={3}>
        Recent Side Projects
      </Heading>
      <Text mb={2}>
        I work on a variety of side projects in my free time, below are a few of
        them. Check out the rest on{' '}
        <Link forwardedAs="a" href="https://github.com/hamlim">
          GitHub
        </Link>
        .
      </Text>
      <List variant="unordered" forwardedAs="ul" mt={2}>
        <ListItem mb={2}>
          <Link
            forwardedAs="a"
            href="https://github.com/hamlim/projects/tree/master/packages/reroute-core"
          >
            Reroute
          </Link>{' '}
          A React router package built for Suspense using hooks
        </ListItem>
        <ListItem mb={2}>
          <Link
            forwardedAs="a"
            href="https://github.com/hamlim/inline-mdx.macro"
          >
            inline-mdx.macro
          </Link>{' '}
          A babel macro for converting inline{' '}
          <Link forwardedAs="a" href="https://mdxjs.com">
            MDX
          </Link>{' '}
          in JavaScript files.
        </ListItem>
        <ListItem mb={2}>
          <Link forwardedAs="a" href="https://github.com/hamlim/notedo">
            Notedo
          </Link>{' '}
          A note and todo list web application using plain text
        </ListItem>
      </List>

      <Heading variant="h3" forwardedAs="h3" my={3}>
        Notebook
      </Heading>
      <Text mb={2}>
        For content that I am still working on, and that I haven't published
        fully to my blog yet, I store in my Notebook. These are rough thoughts
        that I haven't had the time to fully piece together, or might not even
        represent complete concepts yet!
      </Text>
      <LocalLink to="/notebook">Check them out</LocalLink>
    </>
  )
}
