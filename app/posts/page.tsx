import NextLink from 'next/link'
import { Link } from '@ds-pack/components'
import type { Manifest } from '@lib/types'
import { List, ListItem } from '@ds-pack/components'

async function getFeed() {
  let feed = (await fetch(`http://${process.env.VERCEL_URL}/feed.json`).then(
    (r) => r.json(),
  )) as Manifest

  return feed
}

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
