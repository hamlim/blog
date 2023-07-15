import type { Metadata } from 'next'
import { getTags, tagToID } from './getTags'
import type { Post } from '@lib/types'
import {
  Box,
  Heading,
  Stack,
  List,
  ListItem,
  Link as StyledLink,
} from '@ds-pack/daisyui'
import { LocalLink as Link } from '@lib/LocalLink'
import { formatPostLink } from '@lib/format-post-link'
import { Fragment } from 'react'

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
    <List variant="base" is="ol">
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
      <Heading is="h1" variant="h1">
        Blog tags:
      </Heading>
      <Box>
        {tags.map((t) => (
          <StyledLink
            is="a"
            className="inline-flex mr-2"
            href={`#${tagToID(t)}`}
          >
            {t}
          </StyledLink>
        ))}
      </Box>
      <div className="divider" />
      <Stack gap="5" className="mt-10">
        {Object.entries(postsByTag).map(([tag, posts]) => (
          <Fragment key={tag}>
            <Heading is="h3" variant="h3" id={tagToID(tag)}>
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
