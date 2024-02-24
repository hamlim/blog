import { Post } from './types';

export function formatPostLink(post: Post) {
  return `/blog/${post.year}/${post.month}/${post.slug}`;
}

export function formatNotebookLink(post: Post) {
  return `/notebook/${post.year}/${post.month}/${post.slug}`;
}
