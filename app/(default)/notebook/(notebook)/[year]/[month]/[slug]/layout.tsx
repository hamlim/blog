import { Box } from '@recipes/box'
import { fetchManifest } from '@lib/fetch-manifest'

export default function Layout({ children }) {
  return <Box>{children}</Box>
}

async function resolveTitle({ title: titleSlug }) {
  let manifest = await fetchManifest()
  let note = manifest.notebookEntries.find((note) => {
    return note.slug === titleSlug
  })

  return note.title
}

// @ts-ignore
export async function generateMetadata({ params }) {
  const title = await resolveTitle({ title: params.slug })

  return {
    title: title || params.title || "Matt's Notebook",
    icons: [
      {
        rel: 'shortcut icon',
        url: '/favicon.ico',
      },
    ],
  }
}
