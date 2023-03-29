import type { Post } from '@lib/types'
import { fetchManifest } from '@lib/fetch-manifest'
import Listing from './Listing'
import type { Metadata } from 'next'

async function getPosts(): Promise<{
  posts: Array<Post>
  galleryPosts: Array<Post>
}> {
  let { posts, gallery } = await fetchManifest()

  return {
    posts: [...posts].reverse(),
    galleryPosts: posts.reduce((acc, post) => {
      if (gallery.includes(post.id)) {
        return [...acc, post]
      }
      return acc
    }, []),
  }
}

export default async function Blog() {
  let { posts, galleryPosts } = await getPosts()
  return <Listing posts={posts} gallaryPosts={galleryPosts} />
}

export let metadata: Metadata = {
  title: "Matt's Blog",
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
