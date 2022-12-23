import NextLink from 'next/link'
import { Link } from '@ds-pack/components'
import type { Manifest } from '@lib/types'
import { List, ListItem } from '@ds-pack/components'
import { fetchManifest } from '@lib/fetch-manifest'

async function getFeed(): Promise<Manifest> {
  let feed: Manifest
  try {
    feed = await fetchManifest()
  } catch (error) {
    console.log(error)
    return {
      gallery: [],
      posts: [],
    }
  }

  return feed
}

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function Blog() {
  let feed = await getFeed()
  return (
    <div>
      Blog!
      <List variant="base" is="ul">
        {feed.posts.map((post) => {
          return (
            <ListItem key={post.slug}>
              <Link
                is={NextLink}
                href={`/${post.year}/${post.month}/${post.slug}`}
              >
                {post.title}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
