import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import * as defaultComponents from '@lib/MDXComponents'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import { fetchManifest } from '@lib/fetch-manifest'
import { Heading, Box, Stack } from '@ds-pack/daisyui'
import { PostWrapper } from '@lib/PostWrapper'

let { Time, Mentions, Spacer } = defaultComponents

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

export const revalidate = 0
export const dynamic = 'force-dynamic'

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
      <Heading variant="lead" is="h1">
        {post.title}
      </Heading>
      {post.date ? (
        <>
          <Box is="span" className="text-slate-500 italic">
            Published <Time>{post.date}</Time>
          </Box>{' '}
        </>
      ) : null}
      <Mentions />
      <Spacer />
      <PostWrapper>{content}</PostWrapper>
      {post.tags ? (
        <Box className="mt-3">
          <Heading variant="subhead" is="h4">
            Tags:
          </Heading>
          <Stack inline gap="4">
            {post.tags.map((tag: string) => (
              <Box key={tag} is="span" className="inline-flex italic">
                {tag}
              </Box>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
