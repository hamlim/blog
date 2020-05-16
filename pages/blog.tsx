import * as React from 'react'
import { H1, Box, Text, List, ListItem } from '@matthamlin/component-library'
import posts from '../posts'
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
        Welcome to my Blog!
      </Text>
      <Box pt={6}>
        <Text fontSize={2} pb={7}>
          All Posts:
        </Text>
        <List variant="base" as="ol">
          {posts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? 6 : null}>
              <Link to={post.absolute}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}
