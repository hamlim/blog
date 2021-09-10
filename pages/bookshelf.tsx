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
        Bookshelf
      </Heading>
      <Text mb="$2">
        In the rare time that I find not in front of some kind of display, I
        like to read books! Here is a short collection of books I've recently
        read as well as a few books from my to read list.
      </Text>
      <Text>
        Feel free to reach out{' '}
        <Link
          is="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hamlim"
        >
          on twitter
          <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
        </Link>{' '}
        if you have book recommendations!
      </Text>
      <Heading my="$5" variant="subhead" is="h3">
        What I'm Currently Reading:
      </Heading>
      <Box my="$5">
        <List variant="base" is="ul">
          <ListItem>
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/7670.The_Andromeda_Strain"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Andromeda Strain
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Michael Crichton
          </ListItem>
        </List>
      </Box>
      <Heading my="$5" variant="subhead" is="h3">
        Books I've Recently Read:
      </Heading>
      <Box my="$5">
        <List variant="base" is="ul">
          <ListItem>
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/54493401-project-hail-mary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Hail Mary
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Andy Weir
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/44767458-dune"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dune
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Frank Herbert
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/70535.2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              2001: A Space Odyssey
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Arthur C. Clarke
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/70401.On_the_Road"
              target="_blank"
              rel="noopener noreferrer"
            >
              On The Road
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Jack Kerouac
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/76778.The_Martian_Chronicles"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Martian Chronicles
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Ray Bradbury
          </ListItem>
        </List>
      </Box>
      <Heading my="$5" variant="subhead" is="h3">
        Books I Want to Read Soon:
      </Heading>
      <Box my="$5">
        <List variant="base" is="ul">
          <ListItem mt="$6">
            <Link
              is="a"
              href="https://www.goodreads.com/book/show/112537.Rendezvous_with_Rama"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rendezvous with Rama
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Arthur C. Clarke
          </ListItem>
          <ListItem mt="$6">
            <Link
              is="a"
              href="hhttps://www.goodreads.com/book/show/29579.Foundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Foundation
              <VisuallyHidden is="span">(opens in new window)</VisuallyHidden>
            </Link>{' '}
            by Isaac Asimov
          </ListItem>
        </List>
      </Box>
      <Text is="small" color="$gray-8">
        Last Updated: August 2021
      </Text>
    </>
  )
}
