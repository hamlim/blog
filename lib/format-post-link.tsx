import { Post } from './types'

export function formatPostLink(post: Post) {
  return `/${post.year}/${post.month}/${post.slug}`
}
