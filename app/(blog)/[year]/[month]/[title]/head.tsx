import HeadTags from '@ui/HeadTags'
import type { Manifest } from '@lib/types'

async function resolveTitle({ title: titleSlug }) {
  let manifest = (await fetch(
    `http://${process.env.VERCEL_URL}/feed.json`,
  ).then((r) => r.json())) as Manifest
  let postData = manifest.posts.find((post) => {
    return post.slug === titleSlug
  })

  return postData.title
}

export default async function Head({ params }) {
  const title = await resolveTitle({ title: params.title })
  return (
    <>
      <title>{title || params.title || "Matt's Blog"}</title>
      <HeadTags />
      <script src="https://platform.twitter.com/widgets.js" async />
    </>
  )
}
