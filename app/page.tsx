import NextLink from 'next/link'
import { Link } from '@ds-pack/components'

export default function Page() {
  return (
    <div>
      <Link is={NextLink} href="/posts">
        Go to posts!
      </Link>
    </div>
  )
}
