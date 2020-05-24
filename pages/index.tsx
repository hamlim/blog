import * as React from 'react'
import {
  H1,
  Link,
  Box,
  Text,
  VisuallyHidden,
  H3,
  List,
  ListItem,
} from '@matthamlin/component-library'
import LocalLink from '../components/Link'
import { topPosts } from '../posts'

export default function Landing() {
  return (
    <>
      <H1 mb={8}>Hey 👋🏼</H1>
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

      <H3 my={3}>Popular blog posts:</H3>
      <Box my={5}>
        <List variant="base" as="ol">
          {topPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? 6 : null}>
              <LocalLink to={post.absolute}>{post.title}</LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>

      <H3 my={3}>Recent Side Projects</H3>
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
    </>
  )
}
