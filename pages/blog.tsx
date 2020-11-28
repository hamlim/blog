import * as React from 'react'
import { Box, Text, List, ListItem, Heading } from '@ds-pack/components'
import { topPosts, allPosts } from '../posts'
import { Breadcrumbs, Crumb } from '../components/breadcrumbs'
import Link from '../components/Link'

export default function Blog() {
  return (
    <>
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb>
      </Breadcrumbs>
      <Heading variant="h1" forwardedAs="h1">
        Blog
      </Heading>
      <Text fontSize={2} mb={2}>
        Welcome to my Blog! Many of these posts are rough drafts that I work on
        here and there.
      </Text>
      <Heading variant="h3" forwardedAs="h3" fontSize={2} mb={2}>
        Popular posts:
      </Heading>
      <Box my={5}>
        <List variant="base" as="ol">
          {topPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? 6 : null}>
              <Link to={post.absolute}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading variant="h3" forwardedAs="h3" fontSize={2} py={7}>
        All Posts:
      </Heading>
      <Box my={5}>
        <List variant="base" as="ol">
          {allPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? 6 : null}>
              <Link to={post.absolute}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}