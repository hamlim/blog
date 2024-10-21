import { ErrorBoundary } from '@lib/ErrorBoundary'
import { Box } from '@recipes/box'
import { BaseLink, Link } from '@recipes/link'
import { Stack } from '@recipes/stack'
import { Text } from '@recipes/text'
import { Suspense } from 'react'

let pageSize = 10

let byTimezone = {}

let format = (time: Date, timeZone: string): string => {
  if (!byTimezone[timeZone]) {
    byTimezone[timeZone] = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone,
    }).format
  }

  return byTimezone[timeZone](time)
}

type Fibre = {
  body: string
  id: number
  updated_time: null | string
  updated_timezone: string
  created_time: string
  created_timezone: string
  location: string
  media?: Array<{ url: string; title?: string; type: 'image' | 'video' }>
}

async function Feed({ searchParams }) {
  let page = Number(searchParams.page ?? '0')

  let endpoint: string
  if (process.env.NODE_ENV === 'development') {
    endpoint = 'http://127.0.0.1:8787/v1/posts'
  } else {
    endpoint = 'https://microfibre-api.mhamlin.workers.dev/v1/posts'
  }

  endpoint += `?pageSize=${pageSize}&page=${page}`

  let resp = await fetch(endpoint, {
    headers: new Headers({
      'x-auth-token': 'yolo-swag',
    }),
  })

  let totalPosts = Number(resp.headers.get('X-Total-Count') ?? '0')

  let isAtEnd = pageSize * page >= totalPosts

  let posts = (await resp.json()).posts as Array<Fibre>

  return (
    <>
      <Stack gap={6}>
        {posts?.length ? (
          posts.map((post) => (
            <Box key={post.id}>
              <Text>📢 {post.body}</Text>
              {post.location ? <Text>📍 {post.location}</Text> : null}
              <Text>
                ⌚{' '}
                {format(
                  new Date(post.created_time),
                  post.created_timezone || 'America/New_York',
                )}
              </Text>
              {post.updated_time ? (
                <Text className="italic">
                  Updated:{' '}
                  {format(
                    new Date(post.updated_time),
                    post.updated_timezone || 'America/New_York',
                  )}
                </Text>
              ) : null}
            </Box>
          ))
        ) : (
          <Text>No posts found!</Text>
        )}
      </Stack>
      <Box className="flex justify-evenly">
        {page > 1 ? (
          <Link href={`/feed?page=${page - 1}`}>Previous</Link>
        ) : (
          <span />
        )}
        {!isAtEnd ? (
          <Link href={`/feed?page=${page + 1}`}>Next</Link>
        ) : (
          <span />
        )}
      </Box>
    </>
  )
}

export default async function FeedPage(props) {
  const searchParams = await props.searchParams;
  return (
    <Box>
      <ErrorBoundary
        fallback={
          <Text>
            Failed to load posts! Please report to Matt via{' '}
            <BaseLink href="mailto:matthewjameshamlin@gmail.com">
              email
            </BaseLink>{' '}
            or{' '}
            <BaseLink href="https://twitter.com/immatthamlin">Twitter</BaseLink>
            .
          </Text>
        }
      >
        <Suspense fallback={<Text>Loading posts...</Text>}>
          {/* @ts-expect-error */}
          <Feed searchParams={searchParams} />
        </Suspense>
      </ErrorBoundary>
    </Box>
  )
}
