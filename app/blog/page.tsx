import { fetchManifest } from '@lib/fetch-manifest'
import type { Post } from '@lib/types'
import type { Metadata } from 'next'
import Listing from './Listing'

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
