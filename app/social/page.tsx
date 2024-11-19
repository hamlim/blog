import { Bluesky } from '@/components/bluesky'
import { GitHub } from '@/components/github'
import { LinkedIn } from '@/components/linkedin'
import { Threads } from '@/components/threads'
import { Twitter } from '@/components/twitter'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { BaseLink } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Text } from '@recipes/text'

export default function Social() {
  return (
    <Box>
      <Heading
        is="h1"
        className="mb-4"
      >
        Social
      </Heading>
      <Text>
        I don't use social media much, but you can connect with me on a few
        different platforms:
      </Text>
      <Box className="my-5">
        <List is="ul">
          <ListItem className="mb-2">
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://bsky.app/profile/matthamlin.me"
              className="inline-flex items-center gap-2"
            >
              <Bluesky
                height={16}
                width={16}
                fill="currentColor"
              />
              matthamlin.me
              <span className="sr-only">Opens in new tab</span>
            </BaseLink>
          </ListItem>
          <ListItem className="mb-2">
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://github.com/hamlim"
              className="inline-flex items-center gap-2"
            >
              <GitHub
                height={16}
                width={16}
                fill="currentColor"
              />
              hamlim
              <span className="sr-only">Opens in new tab</span>
            </BaseLink>
          </ListItem>
          <ListItem>
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://www.linkedin.com/in/hamlim/"
              className="inline-flex items-center gap-2"
            >
              <LinkedIn
                height={16}
                width={16}
                fill="currentColor"
              />
              hamlim
              <span className="sr-only">Opens in new tab</span>
            </BaseLink>
          </ListItem>
          {/* <ListItem className="mb-2">
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://x.com/immatthamlin"
              className="inline-flex items-center gap-2"
            >
              <Twitter
                height={16}
                width={16}
                fill="currentColor"
              />
              immatthamlin
              <span className="sr-only">Opens in new tab</span>
            </BaseLink>
          </ListItem>
          <ListItem className="mb-2">
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://www.threads.net/@immatthamlin"
              className="inline-flex items-center gap-2"
            >
              <Threads
                height={16}
                width={16}
                fill="currentColor"
              />
              immatthamlin
              <span className="sr-only">Opens in new tab</span>
            </BaseLink>
          </ListItem> */}
          {/* No real icon for this one - plus I really only want to connect with friends here */}
          {/* <ListItem className="mb-2">
            <BaseLink
              target="_blank"
              rel="noopener"
              href="https://retro.app/@matthamlin"
              className="inline-flex items-center gap-2"
            >

              matthamlin
              <span className="sr-only">Opens in new tab</span>
            </BaseLink>
          </ListItem> */}
        </List>
      </Box>
    </Box>
  )
}
