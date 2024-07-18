import { formatPostLink } from '@lib/format-post-link'
import type { Post } from '@lib/types'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { Link } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Text } from '@recipes/text'
import type { Metadata } from 'next'
import { getTags, idToTag, upperCase } from '../getTags'

export async function generateMetadata({ params: { tag } }): Promise<Metadata> {
  return {
    title: `${idToTag(tag)} blog posts`,
  }
}

function AllPosts({ posts }) {
  return (
    <List is="ol">
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
      <Heading is="h1">
        Blog posts related to{' '}
        <Text is="em" className="italic">
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
