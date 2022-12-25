import HeadTags from '@ui/HeadTags'
import { fetchManifest } from '@lib/fetch-manifest'

async function resolveTitle({ slug }) {
  let manifest = await fetchManifest()
  let notebookEntry = manifest.notebookEntries.find((entry) => {
    return entry.slug === slug
  })

  return notebookEntry.title
}

export default async function Head({ params }) {
  const title = await resolveTitle({ slug: params.slug })
  return (
    <>
      <title>{title || params.slug || "Matt's Notebook"}</title>
      <HeadTags />
      <script src="https://platform.twitter.com/widgets.js" async />
    </>
  )
}
