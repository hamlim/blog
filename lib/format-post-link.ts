import { Post } from './types'

export function formatPostLink(post: Post) {
  return `/${post.year}/${post.month}/${post.slug}`
}

export function formatNotebookLink(post: Post) {
  return `/notebook/${post.year}/${post.month}/${post.slug}`
}
