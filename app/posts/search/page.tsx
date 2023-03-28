import type { Post } from '@lib/types'
import { fetchManifest } from '@lib/fetch-manifest'
// import Listing from './Listing'

async function getPosts(): Promise<{
  posts: Array<Post & { content: string }>
}> {
  let { posts } = await fetchManifest()

  let results = await Promise.all(
    posts.map((post) =>
      fetch(`http://${process.env.VERCEL_URL}${post.path}`)
        .then((r) => r.text())
        .then((content) => ({
          ...post,
          content,
        })),
    ),
  )

  return {
    posts: results.reverse(),
  }
}

export default async function Search() {
  let { posts } = await getPosts()
  return <div>Yo!</div>
  // return <Listing posts={posts} gallaryPosts={galleryPosts} />
}

export let metadata = {
  title: "Search Matt's Blog",
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
