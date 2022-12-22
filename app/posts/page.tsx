import NextLink from 'next/link'
import { Link } from '@ds-pack/components'

export default async function Blog() {
  return (
    <div>
      Blog!
      <Link is={NextLink} href="/2022/may/moving-to-pnpm">
        Go to Moving to PNPM!
      </Link>
    </div>
  )
}
