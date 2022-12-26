import HeadTags from '@ui/HeadTags'
import { fetchManifest } from '@lib/fetch-manifest'

async function resolveTitle({ title: titleSlug }) {
  let manifest = await fetchManifest()
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
