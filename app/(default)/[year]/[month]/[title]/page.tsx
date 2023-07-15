import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import * as defaultComponents from '@lib/MDXComponents'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import { fetchManifest } from '@lib/fetch-manifest'
import { Heading, Box, Stack } from '@ds-pack/daisyui'
import { PostWrapper } from '@lib/PostWrapper'
import { LocalLink } from '@lib/LocalLink'

let { Time, Mentions } = defaultComponents

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

async function getPost({ title: titleSlug }: Params) {
  let manifest = await fetchManifest()

  let postData = manifest.posts.find((post) => {
    return post.slug === titleSlug
  })

  let postContent = await fetch(
    `http://${process.env.VERCEL_URL}${postData.path}`,
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
    post: postData,
  }
}

export default async function Blog({ params: { title } }) {
  let { content, post } = await getPost({
    title,
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
      <PostWrapper>{content}</PostWrapper>
      {post.tags ? (
        <Box>
          <Heading variant="subhead" is="h4">
            Tags:
          </Heading>
          <Stack inline gap="4">
            {post.tags.map((tag: string) => (
              <Box key={tag} is="span" className="inline-flex italic">
                <LocalLink href={`/posts/tags/${tag}`}>{tag}</LocalLink>
              </Box>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
