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
import { Breadcrumbs, Crumb } from '../components/breadcrumbs'

export default function Projects() {
  return (
    <>
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb>
      </Breadcrumbs>
      <Heading variant="lead" forwardedAs="h1">
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
          forwardedAs="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hamlim"
        >
          GitHub
          <VisuallyHidden forwardedAs="span">
            (opens in new window)
          </VisuallyHidden>
        </Link>
        .
      </Text>
      <Box my={5}>
        <List variant="base" forwardedAs="ul">
          <ListItem>
            <Link
              forwardedAs="a"
              href="https://github.com/hamlim/projects/tree/master/packages/reroute-core"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reroute
              <VisuallyHidden forwardedAs="span">
                (opens in new window)
              </VisuallyHidden>
            </Link>{' '}
            A React router package built for Suspense using hooks
          </ListItem>
          <ListItem mt={6}>
            <Link
              forwardedAs="a"
              href="https://github.com/hamlim/inline-mdx.macro"
              target="_blank"
              rel="noopener noreferrer"
            >
              inline-mdx.macro
              <VisuallyHidden forwardedAs="span">
                (opens in new window)
              </VisuallyHidden>
            </Link>{' '}
            A babel macro for converting inline{' '}
            <Link forwardedAs="a" href="https://mdxjs.com">
              MDX
            </Link>{' '}
            in JavaScript files.
          </ListItem>
          <ListItem mt={6}>
            <Link
              forwardedAs="a"
              href="https://github.com/hamlim/notedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notedo
              <VisuallyHidden forwardedAs="span">
                (opens in new window)
              </VisuallyHidden>
            </Link>{' '}
            A note and todo list web application using plain text.
          </ListItem>
          <ListItem mt={6}>
            <Link
              forwardedAs="a"
              href="https://github.com/ds-pack/components"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ds-pack/components
              <VisuallyHidden forwardedAs="span">
                (opens in new window)
              </VisuallyHidden>
            </Link>{' '}
            A component library built on Styled-System, Styled-Components,
            React, and Typescript.
          </ListItem>
          <ListItem mt={6}>
            <Link
              forwardedAs="a"
              href="https://github.com/ds-pack/babel-plugin-docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ds-pack/babel-plugin-docs
              <VisuallyHidden forwardedAs="span">
                (opens in new window)
              </VisuallyHidden>
            </Link>{' '}
            A collection of babel utilities (plugins, visitors) for transforming
            code related to design systems.
          </ListItem>
        </List>
      </Box>
    </>
  )
}
