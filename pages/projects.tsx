import * as React from 'react'
import {
  Heading,
  Link,
  Box,
  Text,
  VisuallyHidden,
  List,
  ListItem,
} from '@ds-pack/components'

export default function Projects() {
  return (
    <>
      <Heading variant="lead" is="h1">
        Projects
      </Heading>
      <Text>
        Outside of work, I generally try to spend some time writing code on some
        open source projects. Some of these are really just hacks on ideas that
        I threw together in thirty minutes, others are a bit more involved.
      </Text>
      <Text>
        You can find all of my open source projects on{' '}
        <Link
          is="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hamlim"
        >
          GitHub
          <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
        </Link>
        .
      </Text>
      <Box my="$5">
        <List variant="base" is="ul">
          <ListItem>
            <Link
              is="a"
              href="https://github.com/ds-pack/simple-props"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simple Props
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            A minimal, CSS variable backed style-prop library
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://github.com/hamlim/inline-mdx.macro"
              target="_blank"
              rel="noopener noreferrer"
            >
              inline-mdx.macro
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            A babel macro for converting inline{' '}
            <Link is="a" href="https://mdxjs.com">
              MDX
            </Link>{' '}
            in JavaScript files.
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://github.com/ds-pack/components"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ds-pack/components
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            A component library built on Styled-System, Styled-Components,
            React, and Typescript.
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://github.com/ds-pack/babel-plugin-docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ds-pack/babel-plugin-docs
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            A collection of babel utilities (plugins, visitors) for transforming
            code related to design systems.
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://github.com/ds-pack/use-refs"
              target="_blank"
              rel="noopener noreferrer"
            >
              use-refs
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            Helpers and utilities for working with refs in React
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://github.com/hamlim/notedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notedo
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            A note and todo list web application using plain text.
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://github.com/hamlim/projects/tree/master/packages/reroute-core"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reroute
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            A React router package built for Suspense using hooks
          </ListItem>
        </List>
      </Box>
    </>
  )
}
