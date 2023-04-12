import NextLink from 'next/link'
import { Link } from '@ds-pack/daisyui'

export function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}
