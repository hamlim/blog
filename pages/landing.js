import * as React from 'react'
import {
  H1,
  Link,
  Box,
  Text,
  VisuallyHidden,
} from '@matthamlin/component-library'
import LocalLink from '../components/Link'

export default function Landing() {
  return (
    <>
      <H1 mb={8}>Hey 👋🏼</H1>
      <Text fontSize={2}>
        Hey there, I'm Matt. I'm currently living and working in Boston. I am a
        Staff Software Engineer working on the Frontend Design Systems team at
        Wayfair. In my free time I like to work on several different{' '}
        <Link as="a" href="https://github.com/hamlim">
          side projects
          <VisuallyHidden forwardedAs="span">
            (opens in new window)
          </VisuallyHidden>
        </Link>
        , and somehow find time to write some blog posts as well.
      </Text>
      <Text pt={8}>
        <LocalLink fontSize={2} to="/blog">
          Go to Blog Posts
        </LocalLink>
      </Text>
    </>
  )
}
