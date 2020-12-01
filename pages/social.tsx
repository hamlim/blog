import React from 'react'
import {
  Heading,
  Box,
  Text,
  List,
  ListItem,
  GitHubMention,
  TwitterMention,
  Link as ExternalLink,
} from '@ds-pack/components'

export default function Tools() {
  return (
    <>
      <Heading variant="lead" forwardedAs="h1">
        Social
      </Heading>
      <Text>
        I don't use much social media, but if you can follow me on a few
        different platforms:
      </Text>
      <Box my={5}>
        <List variant="base" forwardedAs="ul">
          <ListItem mb={2}>
            <Text forwardedAs="strong" fontWeight="bold">
              Twitter:{' '}
            </Text>
            <TwitterMention>immatthamlin</TwitterMention>
          </ListItem>
          <ListItem mb={2}>
            <Text forwardedAs="strong" fontWeight="bold">
              GitHub:{' '}
            </Text>
            <GitHubMention>hamlim</GitHubMention>
          </ListItem>
          <ListItem>
            <Text forwardedAs="strong" fontWeight="bold">
              LinkedIn:{' '}
            </Text>
            <ExternalLink
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/hamlim/"
            >
              hamlim
            </ExternalLink>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
