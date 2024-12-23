import Mentions from '@lib/Mentions'
import { PostWrapper } from '@lib/PostWrapper'
import { fetchManifest } from '@lib/fetch-manifest'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { Link } from '@recipes/link'
import { Time } from '@recipes/mdx-components'
import { Stack } from '@recipes/stack'
import Image from 'next/image'
export default async function Blog({ id, children }) {
  let manifest = await fetchManifest()
  let post = manifest.posts.find((post) => post.uuid === id)
  return (
    <Box className="prose lg:prose-xl">
      <Image
        src={`/api/og/${id}`}
        width={1200}
        height={630}
        // purely decorative image!
        alt=""
      />
      <Stack
        gap={4}
        className="mb-4"
      >
        <Heading is="h1">{post.title}</Heading>
        {post.date ? (
          <>
            <Box
              is="span"
              className="text-slate-500 italic"
            >
              Published <Time>{post.date}</Time>
            </Box>{' '}
          </>
        ) : null}
        <Mentions title={post.title} />
      </Stack>
      <PostWrapper>{children}</PostWrapper>
      {post.tags ? (
        <Box className="mt-4">
          <Heading is="h4">Tags:</Heading>
          <Box className="flex flex-wrap justify-start gap-4 mt-4">
            {post.tags.map((tag: string) => (
              <Box
                key={tag}
                is="span"
                className="inline-flex italic"
              >
                <Link href={`/posts/tags/${tag}`}>{tag}</Link>
              </Box>
            ))}
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}
