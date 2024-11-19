'use client'
import { BaseLink } from '@recipes/link'
import { useEffect, useState } from 'react'

export default function Mentions() {
  let [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <BaseLink
      target="_blank"
      rel="noopener"
      href={`https://bsky.app/search?q=${encodeURIComponent(url)}`}
    >
      See discussion on Bluesky
    </BaseLink>
  )
}
