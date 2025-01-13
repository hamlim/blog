import type { Post } from '@/lib/types'
import Mentions from '@lib/Mentions'
import { PostWrapper } from '@lib/PostWrapper'
import { fetchManifest } from '@lib/fetch-manifest'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { Link } from '@recipes/link'
import { Time } from '@recipes/mdx-components'
import { Stack } from '@recipes/stack'
import Image from 'next/image'

type FileMeta = null | {
  date: string
}

async function getFileMeta(post: Post): Promise<FileMeta> {
  let filePath = `app/blog/(blog-posts)/${post.year}/${post.month}/${post.slug}/page.mdx`

  let ghAPIURL = new URL(`https://api.github.com/repos/hamlim/blog/commits`)
  ghAPIURL.searchParams.set('path', filePath)

  let [results] = await Promise.allSettled([
    fetch(ghAPIURL.toString()).then((r) => r.json()),
  ])

  if (results.status === 'fulfilled') {
    let commit = results.value[0]
    return {
      date: commit.commit.committer.date as string,
    }
  }

  return null
}

let formatDate = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format

export default async function Blog({ id, children }) {
  let manifest = await fetchManifest()
  let post = manifest.posts.find((post) => post.uuid === id)

  let postPublishedDate = new Date(post.publishedDate)

  let fileMeta = await getFileMeta(post)

  let updatedDate: Date | null = null

  if (fileMeta) {
    updatedDate = new Date(fileMeta.date)
  }

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
        {postPublishedDate ? (
          <>
            <Box
              is="span"
              className="text-slate-500 italic"
            >
              Published{' '}
              <Time suppressHydrationWarning>
                {formatDate(postPublishedDate)}
              </Time>
              {updatedDate ? (
                <>
                  <br />
                  Last updated{' '}
                  <Time suppressHydrationWarning>
                    {formatDate(updatedDate)}
                  </Time>
                </>
              ) : null}
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
