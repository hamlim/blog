import * as React from 'react'
import RouterLink from 'next/link'
import { Link as StyledLink } from '@ds-pack/components'

export default function Link({
  to,
  as,
  ...props
}: {
  as?: any
  to: string
  [key: string]: any
}) {
  return (
    <RouterLink href={to} as={as} passHref>
      <StyledLink {...props} forwardedAs="a" />
    </RouterLink>
  )
}