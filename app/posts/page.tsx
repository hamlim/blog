import NextLink from 'next/link'
import { Link } from '@ds-pack/components'
import type { Manifest } from '@lib/types'

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
      {feed.posts.map((post) => {
        return (
          <Link
            key={post.slug}
            is={NextLink}
            href={`/${post.year}/${post.month}/${post.slug}`}
          >
            {post.title}
          </Link>
        )
      })}
    </div>
  )
}
