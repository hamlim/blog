import { useEffect, useState } from 'react'
import { Link } from '@ui/components'

export default function Mentions() {
  let [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <Link
      is="a"
      target="_blank"
      rel="noopener"
      href={`https://twitter.com/search?q=${encodeURIComponent(url)}`}
    >
      See discussion on Twitter
    </Link>
  )
}
