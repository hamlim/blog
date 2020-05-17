import * as React from 'react'
import {
  H1,
  H3,
  Box,
  Text,
  List,
  ListItem,
} from '@matthamlin/component-library'
import { topPosts, allPosts } from '../posts'
import { Breadcrumbs, Crumb } from '../components/breadcrumbs'
import Link from '../components/Link'

export default function Blog() {
  return (
    <>
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb>
      </Breadcrumbs>
      <H1>Blog</H1>
      <Text fontSize={2} mb={2}>
        Welcome to my Blog! Many of these posts are rough drafts that I work on
        here and there.
      </Text>
      <H3 fontSize={2} mb={2}>
        Popular posts:
      </H3>
      <Box my={5}>
        <List variant="base" as="ol">
          {topPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? 6 : null}>
              <Link to={post.absolute}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <H3 fontSize={2} py={7}>
        All Posts:
      </H3>
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
