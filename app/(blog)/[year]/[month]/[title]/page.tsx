import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import * as defaultComponents from '@ui/MDXComponents'
import type { Manifest } from '@lib/types'

import remarkFrontmatter from 'remark-frontmatter'

interface Params {
  title: string
}

let jsxRuntime = runtime as {
  Fragment: any
  jsx: any
  jsxs: any
}

let extendedRuntime = {
  ...jsxRuntime,
  jsxDEV: jsxRuntime.jsx,
} as {
  Fragment: any
  jsx: any
  jsxs: any
  jsxDEV: any
}

export const revalidate = 0
export const dynamic = 'force-dynamic'

async function getPost({ title: titleSlug }: Params) {
  let manifest = (await fetch(
    `http://${process.env.VERCEL_URL}/feed.json`,
  ).then((r) => r.json())) as Manifest

  let postData = manifest.posts.find((post) => {
    return post.slug === titleSlug
  })

  let postContent = await fetch(
    `http://${process.env.VERCEL_URL}${postData.path}`,
  ).then((r) => r.text())

  let { default: MDXContent } = await evaluate(postContent, {
    ...extendedRuntime,
    remarkPlugins: [remarkFrontmatter],
  })

  return {
    meta: { manifest },
    content: MDXContent({
      components: defaultComponents,
    }),
  }
}

export default async function Blog({ params: { title } }) {
  let { content } = await getPost({
    title,
  })

  return <div>{content}</div>
}
