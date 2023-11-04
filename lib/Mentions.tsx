'use client'
import { useEffect, useState } from 'react'
import { BaseLink } from '@recipes/link'

export default function Mentions() {
  let [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <BaseLink
      target="_blank"
      rel="noopener"
      href={`https://twitter.com/search?q=${encodeURIComponent(url)}`}
    >
      See discussion on Twitter
    </BaseLink>
  )
}
