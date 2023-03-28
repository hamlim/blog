import Script from 'next/script'
import { fetchManifest } from '@lib/fetch-manifest'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Script src="https://platform.twitter.com/widgets.js" async />
    </>
  )
}

async function resolveTitle({ title: titleSlug }) {
  let manifest = await fetchManifest()
  let postData = manifest.posts.find((post) => {
    return post.slug === titleSlug
  })

  return postData.title
}

// @ts-ignore
export async function generateMetadata({ params }) {
  const title = await resolveTitle({ title: params.title })

  return {
    title: title || params.title || "Matt's Blog",
    icons: [
      {
        rel: 'shortcut icon',
        url: '/favicon.ico',
      },
    ],
  }
}
