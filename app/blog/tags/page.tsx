import { formatPostLink } from '@lib/format-post-link'
import type { Post } from '@lib/types'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { BaseLink, Link } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Stack } from '@recipes/stack'
import type { Metadata } from 'next'
import { Fragment } from 'react'
import { getTags, tagToID } from './getTags'

export let metadata: Metadata = {
  title: "Matt's Blog Tags",
}

function upperCase(str: string): string {
  return str
    .split(' ')
    .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
    .join(' ')
}

function AllPosts({ posts }) {
  return (
    <List is="ol">
      {posts.map((post: Post, i: number) => (
        <ListItem key={post.title} className={i !== 0 ? 'mt-4' : ''}>
          <Link href={formatPostLink(post)}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  )
}

export default async function Tags() {
  let { tags, postsByTag } = await getTags()

  return (
    <Box>
      <Heading is="h1">Blog tags:</Heading>
      <Box>
        {tags.map((t) => (
          <BaseLink className="inline-flex mr-2" href={`#${tagToID(t)}`}>
            {t}
          </BaseLink>
        ))}
      </Box>
      <div className="divider" />
      <Stack gap={5} className="mt-10">
        {Object.entries(postsByTag).map(([tag, posts]) => (
          <Fragment key={tag}>
            <Heading is="h3" id={tagToID(tag)}>
              {tag}:
            </Heading>
            <AllPosts posts={posts} />
          </Fragment>
        ))}
      </Stack>
      <div className="divider" />
      <Box className="flex flex-row items-center justify-evenly">
        <Link href="/posts">See all posts</Link>
      </Box>
    </Box>
  )
}
