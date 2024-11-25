'use client'
import { BaseLink } from '@recipes/link'
import { useEffect, useState } from 'react'

export default function Mentions({ title }: { title: string }) {
  let [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <div className="flex gap-4">
      <BaseLink
        target="_blank"
        href={`https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}: ${url}`)}`}
      >
        Share this post on Bluesky
      </BaseLink>
      <BaseLink
        target="_blank"
        rel="noopener"
        href={`https://bsky.app/search?q=${encodeURIComponent(url)}`}
      >
        See discussion on Bluesky
      </BaseLink>
    </div>
  )
}
