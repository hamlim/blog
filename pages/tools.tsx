import React from 'react'
import { Heading, Box, Text, Stack, Link as ExternalLink } from '@ui/components'
import Link from '../components/Link'

export default function Tools() {
  return (
    <>
      <Heading variant="lead" is="h1">
        Tools
      </Heading>
      <Text>
        I use a variety of hardware and software each and everyday, so I figured
        I'd try to catalog those tools here, and I'm also going to try and keep
        this up to date every so often and see how it changes over time.
      </Text>
      <Box my="5">
        <Heading is="h3" variant="h2">
          January, 2022
        </Heading>
        <Stack gap="2">
          <Heading is="h4" variant="subhead">
            Hardware
          </Heading>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Phone
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                iPhone 13 Pro Max
              </Text>
            </Text>
            <Text>
              I've{' '}
              <Link to="/posts/2022/january/switching-to-iphone">
                recently switched to using an iPhone
              </Link>{' '}
              as an experiment after using Android phones for the past 12 years
              (7 of which have been with Google made devices) and so far I've
              been enjoying it!
            </Text>
          </Box>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Laptop
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                MacBook Pro (early 2020) 13"
              </Text>
            </Text>
            <Text>
              I've continued to use this laptop for nearly everything I do
              outside of work. It continues to be a great resource.
            </Text>
          </Box>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                E-Reader
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                Kindle Paperlight (Signature Edition)
              </Text>
            </Text>
            <Text>
              I recently picked this up to help fuel my growing interest in
              reading that I got back into late last year. So far it's been an
              amazing piece of hardware!
            </Text>
          </Box>
          <Heading is="h4" variant="subhead">
            Software
          </Heading>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Notes / Todos
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                Obsidian
              </Text>
            </Text>
            <Text>
              I've continued to use Obsidian, however I haven't yet figured out
              how to setup my own sync across a variety of devices!
            </Text>
          </Box>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Code
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                VS Code (Insiders)
              </Text>
            </Text>
            <Text>
              I've been writing a bit more code outside of work, but it's still
              fairly limited.
            </Text>
          </Box>
        </Stack>
      </Box>
      <hr />
      <Heading is="h2" variant="h1">
        Old Updates:
      </Heading>
      <Box my="5">
        <Heading is="h3" variant="h2">
          August, 2021
        </Heading>
        <Stack gap="2">
          <Heading is="h4" variant="subhead">
            Hardware
          </Heading>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Phone
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                Google Pixel 5
              </Text>
            </Text>
            <Text>
              I've continued to use the Pixel 5 over the past few months and
              I've really come to enjoy using it. After seeing some of the news
              about the new Pixel 6 phones coming out later this year I'm not
              sure how I'll adjust to having a larger phone again.
            </Text>
          </Box>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Laptop
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                MacBook Pro (early 2020) 13"
              </Text>
            </Text>
            <Text>
              I've continued to use this laptop for nearly everything I do
              outside of work. It continues to be a great resource.
            </Text>
          </Box>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Tablet / Laptop
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                Pixel Slate
              </Text>
            </Text>
            <Text>
              I've had an on-again/off-again relationship with my Pixel Slate, I
              got it fairly late in it's supported release window, maybe only a
              few months before the new pixelbook go devices were announced,
              however as of late I've found the slate to serve well as a media
              consumption device for reading, and watching, but also useful as a
              temporary writing station with Obsidian and a syncing service.
            </Text>
          </Box>
          <Heading is="h4" variant="subhead">
            Software
          </Heading>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Notes / Todos
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                Obsidian
              </Text>
            </Text>
            <Text>
              This is one of the larger notable changes from my previous update
              here in{' '}
              <ExternalLink is="a" href="#november-2020">
                November
              </ExternalLink>{' '}
              - I have switched fully over to{' '}
              <ExternalLink
                is="a"
                rel="noopener"
                target="_blank"
                href="https://obsidian.md/"
              >
                Obsidian
              </ExternalLink>{' '}
              from Roam. In between I used Google Keep for a bit, but found that
              I really wanted more markdown support within my note taking
              application. I should write a bit about my Obsidian setup, but for
              now it's still very early in using it for me.
            </Text>
          </Box>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Code
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                VS Code (Insiders)
              </Text>
            </Text>
            <Text>
              This pick hasn't changed all that much from my last update,
              however I haven't really been writing much code over the past few
              months outside of work.
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box my="5">
        <Heading is="h3" variant="h2" id="november-2020">
          November, 2020
        </Heading>
        <Stack gap="2">
          <Heading is="h4" variant="subhead">
            Hardware
          </Heading>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Phone
              </Text>{' '}
              <Text is="em" fontStyle="italics">
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
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Laptop
              </Text>{' '}
              <Text is="em" fontStyle="italics">
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
          <Heading is="h4" variant="subhead">
            Software
          </Heading>
          <Box>
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Notes / Todos
              </Text>{' '}
              <Text is="em" fontStyle="italics">
                Roam Research
              </Text>
            </Text>
            <Text>
              For some reason I happened to sign up for{' '}
              <ExternalLink
                is="a"
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
            <Text mb="2">
              <Text is="strong" fontWeight="bold">
                Code
              </Text>{' '}
              <Text is="em" fontStyle="italics">
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
              is="a"
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
