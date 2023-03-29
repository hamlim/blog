import {
  Heading,
  Box,
  Text,
  List,
  ListItem,
  GitHubMention,
  TwitterMention,
  Link as ExternalLink,
} from '@ds-pack/daisyui'

export default function Social() {
  return (
    <Box>
      <Heading variant="lead" is="h1">
        Social
      </Heading>
      <Text>
        I don't use social media much, but you can connect with me on a few
        different platforms:
      </Text>
      <Box className="my-5">
        <List variant="base" is="ul">
          <ListItem className="mb-2">
            <Text is="strong" fontWeight="bold">
              Twitter:{' '}
            </Text>
            <TwitterMention>immatthamlin</TwitterMention>
          </ListItem>
          <ListItem className="mb-2">
            <Text is="strong" fontWeight="bold">
              GitHub:{' '}
            </Text>
            <GitHubMention>hamlim</GitHubMention>
          </ListItem>
          <ListItem>
            <Text is="strong" fontWeight="bold">
              LinkedIn:{' '}
            </Text>
            <ExternalLink
              is="a"
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/hamlim/"
            >
              hamlim
            </ExternalLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
