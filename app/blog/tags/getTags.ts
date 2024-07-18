import { fetchManifest } from '@lib/fetch-manifest'
import type { Post } from '@lib/types'
import { cache } from 'react'

export let getTags = cache(async function getTags(): Promise<{
  tags: Array<string>
  postsByTag: Record<string, Array<Post>>
}> {
  let { posts } = await fetchManifest()

  let tags: Set<string> = new Set()
  let postsByTag: Record<string, Array<Post>> = {}
  for (let post of posts) {
    let postTags = post.tags
    for (let tag of postTags) {
      tags.add(tag)
      if (postsByTag[tag]) {
        postsByTag[tag].push(post)
      } else {
        postsByTag[tag] = [post]
      }
    }
  }

  return {
    tags: [...tags.values()],
    postsByTag,
  }
})

export function tagToID(tag: string): string {
  return encodeURIComponent(tag)
}

export function idToTag(id: string): string {
  return decodeURIComponent(id)
}

export function upperCase(str: string): string {
  return str
    .split(' ')
    .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
    .join(' ')
}
