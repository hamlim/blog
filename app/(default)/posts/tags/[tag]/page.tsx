import type { Metadata } from 'next'
import type { Post } from '@lib/types'
import { getTags, upperCase, idToTag } from '../getTags'
import { Box, Heading, Text, List, ListItem } from '@ds-pack/daisyui'
import { LocalLink as Link } from '@lib/LocalLink'
import { formatPostLink } from '@lib/format-post-link'

export async function generateMetadata({ params: { tag } }): Promise<Metadata> {
  return {
    title: `${idToTag(tag)} blog posts`,
  }
}

function AllPosts({ posts }) {
  return (
    <List variant="base" is="ol">
      {posts.map((post: Post) => (
        <ListItem key={post.title} className="mt-6">
          <Link href={formatPostLink(post)}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  )
}

export default async function Tag({ params }) {
  let { postsByTag } = await getTags()

  let tag = idToTag(params.tag)

  return (
    <Box>
      <Heading is="h1" variant="h1">
        Blog posts related to{' '}
        <Text is="em" fontStyle="italic">
          {tag}
        </Text>
        :
      </Heading>
      <AllPosts posts={postsByTag[tag].reverse()} />
      <div className="divider" />
      <Box className="flex flex-row items-center justify-evenly">
        <Link href="/posts/tags">See all tags</Link>
        <div className="divider divider-vertical">or</div>
        <Link href="/posts">See all posts</Link>
      </Box>
    </Box>
  )
}
