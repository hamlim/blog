import { Box, Link as StyledLink, TwitterMention } from '@ds-pack/components'
import NextLink from 'next/link'

export function Spacer() {
  return <Box is="marquee" marginBottom="$4" />
}

export function Link(props) {
  return <StyledLink is={NextLink} {...props} />
}

export function ExternalLink(props) {
  return <StyledLink is="a" {...props} />
}

export { TwitterMention }
