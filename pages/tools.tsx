import React from 'react'
import {
  Heading,
  Box,
  Text,
  Stack,
  Link as ExternalLink,
} from '@ds-pack/components'

export default function Tools() {
  return (
    <>
      <Heading variant="lead" forwardedAs="h1">
        Tools
      </Heading>
      <Text>
        I use a variety of hardware and software each and everyday, so I figured
        I'd try to catalog those tools here, and I'm also going to try and keep
        this up to date every so often and see how it changes over time.
      </Text>
      <Box my={5}>
        <Heading forwardedAs="h3" variant="h2">
          November, 2020
        </Heading>
        <Stack gap={2}>
          <Heading forwardedAs="h4" variant="subhead">
            Hardware
          </Heading>
          <Box>
            <Text mb={2}>
              <Text forwardedAs="strong" fontWeight="bold">
                Phone
              </Text>{' '}
              <Text forwardedAs="em" fontStyle="italics">
                Google Pixel 5
              </Text>
            </Text>
            <Text>
              I've been using the Pixel 5 for a few weeks at the time of writing
              now (end of November 2020) and it's really exceeded my
              expectations. This was probably one of the few times in recent
              memory where Google released a phone that I wasn't excited about,
              I've owned all of the "premium" variants of the pixel phones, and
              several Nexus phones before that also, but this phone seemed like
              it was going to be more of a downgrade compared to my 4xl, however
              it's really been a nice device to use!
            </Text>
          </Box>
          <Box>
            <Text mb={2}>
              <Text forwardedAs="strong" fontWeight="bold">
                Laptop
              </Text>{' '}
              <Text forwardedAs="em" fontStyle="italics">
                MacBook Pro (early 2020) 13"
              </Text>
            </Text>
            <Text>
              Previous to this laptop I had been using a 2016 15" MacBook Pro
              that had begun to show it's age, not only was I realizing that the
              15" form factor wasn't really that nice to use but the battery was
              also beginning to expand noticably. I was a bit hopeful for a 14"
              model that was rumored but went for a fairly well spec'd 13" when
              it dropped and I've loved it since.
            </Text>
          </Box>
          <Heading forwardedAs="h4" variant="subhead">
            Software
          </Heading>
          <Box>
            <Text mb={2}>
              <Text forwardedAs="strong" fontWeight="bold">
                Notes / Todos
              </Text>{' '}
              <Text forwardedAs="em" fontStyle="italics">
                Roam Research
              </Text>
            </Text>
            <Text>
              For some reason I happened to sign up for{' '}
              <ExternalLink
                forwardedAs="a"
                target="_blank"
                rel="noopener"
                href="https://roamresearch.com"
              >
                Roam
              </ExternalLink>{' '}
              around March or so of this year when it was briefly free and open
              for anyone to sign up, and used it off and on until about mid to
              late July. I've since adopted it as a go to daily use piece of
              software that I always have open on my computer and on my phone.
            </Text>
          </Box>
          <Box>
            <Text mb={2}>
              <Text forwardedAs="strong" fontWeight="bold">
                Code
              </Text>{' '}
              <Text forwardedAs="em" fontStyle="italics">
                VS Code (Insiders)
              </Text>
            </Text>
            <Text>
              For the few times that I do get to write some code I reach for VS
              Code, I've tried out a few alternatives over the years but this
              tool seems to do everything I want out of an editor. I mostly use
              the defaults within the editor but I do setup Prettier integration
              and thats about it.
            </Text>
          </Box>
          <hr />
          <Text>
            Interested in any particular part of setup? Feel free to ask me on{' '}
            <ExternalLink
              forwardedAs="a"
              rel="noopener"
              target="_blank"
              href="https://twitter.com/immatthamlin"
            >
              Twitter
            </ExternalLink>{' '}
            and I'll add it here!
          </Text>
        </Stack>
      </Box>
    </>
  )
}
