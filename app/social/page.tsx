import { Box } from '@recipes/box'
import { GitHubMention } from '@recipes/github-mention'
import { Heading } from '@recipes/heading'
import { BaseLink } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Text } from '@recipes/text'
import { TwitterMention } from '@recipes/twitter-mention'

export default function Social() {
  return (
    <Box>
      <Heading is="h1" className="mb-4">
        Social
      </Heading>
      <Text>
        I don't use social media much, but you can connect with me on a few
        different platforms:
      </Text>
      <Box className="my-5">
        <List is="ul">
          <ListItem className="mb-2">
            <Text is="strong" className="font-bold">
              Twitter:{' '}
            </Text>
            <TwitterMention>immatthamlin</TwitterMention>
          </ListItem>
          <ListItem className="mb-2">
            <Text is="strong" className="font-bold">
              Bluesky:{' '}
            </Text>
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://bsky.app/profile/matthamlin.bsky.social"
            >
              matthamlin.bsky.social
            </BaseLink>
          </ListItem>
          <ListItem className="mb-2">
            <Text is="strong" className="font-bold">
              Threads:{' '}
            </Text>
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://www.threads.net/@immatthamlin"
            >
              immatthamlin
            </BaseLink>
          </ListItem>
          <ListItem className="mb-2">
            <Text is="strong" className="font-bold">
              Retro:{' '}
            </Text>
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://retro.app/@matthamlin"
            >
              matthamlin
            </BaseLink>
          </ListItem>
          <ListItem className="mb-2">
            <Text is="strong" className="font-bold">
              GitHub:{' '}
            </Text>
            <GitHubMention>hamlim</GitHubMention>
          </ListItem>
          <ListItem>
            <Text is="strong" className="font-bold">
              LinkedIn:{' '}
            </Text>
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/hamlim/"
            >
              hamlim
            </BaseLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
