import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import * as defaultComponents from '@recipes/mdx-components'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import { fetchManifest } from '@lib/fetch-manifest'
import { Heading } from '@recipes/heading'
import { Box } from '@recipes/box'
import { PostWrapper } from '@lib/PostWrapper'
import { Stack } from '@recipes/stack'

let { Time, Mentions } = defaultComponents

interface Params {
  slug: string
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

async function getNotebookEntries({ slug }: Params) {
  let manifest = await fetchManifest()

  let notebookEntry = manifest.notebookEntries.find((entry) => {
    return entry.slug === slug
  })

  let postContent = await fetch(
    `http://${process.env.VERCEL_URL}${notebookEntry.path}`,
  ).then((r) => r.text())

  let { default: MDXContent } = await evaluate(postContent, {
    ...extendedRuntime,
    remarkPlugins: [remarkFrontmatter, remarkGfm],
  })

  return {
    meta: { manifest },
    content: MDXContent({
      // @ts-expect-error
      components: defaultComponents,
    }),
    post: notebookEntry,
  }
}

export default async function Notebook({ params: { slug } }) {
  let { content, post } = await getNotebookEntries({
    slug,
  })

  return (
    <Box className="prose lg:prose-xl">
      <Stack gap={4}>
        <Heading is="h1">{post.title}</Heading>
        {post.date ? (
          <>
            <Box is="span" className="text-slate-500 italic">
              Published <Time>{post.date}</Time>
            </Box>{' '}
          </>
        ) : null}
        <Mentions />
      </Stack>
      <PostWrapper>{content}</PostWrapper>
      {post.tags ? (
        <Box className="mt-4">
          <Heading is="h4">Tags:</Heading>
          <Box className="flex justify-start gap-4 mt-4">
            {post.tags.map((tag: string) => (
              <Box key={tag} is="span" className="inline-flex italic">
                {tag}
              </Box>
            ))}
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
