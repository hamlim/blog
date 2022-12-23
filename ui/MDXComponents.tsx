import {
  Box,
  Link as StyledLink,
  TwitterMention,
  List,
  ListItem,
} from '@ds-pack/components'
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

export function a(props) {
  return <ExternalLink {...props} />
}

export function ul(props) {
  return <List variant="ul" {...props} />
}

export function ol(props) {
  return <List variant="ol" {...props} />
}

export function li(props) {
  return <ListItem {...props} />
}

export { TwitterMention }
