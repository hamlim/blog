import * as React from 'react'
import RouterLink from 'next/link'
import { Link as StyledLink } from '@matthamlin/component-library'

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
