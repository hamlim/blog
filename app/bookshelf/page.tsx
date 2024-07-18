import { fetchBookshelf } from '@lib/fetch-bookshelf'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { BaseLink } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Text } from '@recipes/text'

export default async function Bookshelf() {
  let { reading, read, toRead } = await fetchBookshelf()
  return (
    <>
      <Heading is="h1" className="mb-4">
        Bookshelf
      </Heading>
      <Text className="mb-2">
        In the rare time that I find not in front of some kind of display, I
        like to read books! Here is a short collection of books I've recently
        read as well as a few books from my to read list.
      </Text>
      <Text>
        Feel free to reach out{' '}
        <BaseLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/immatthamlin"
        >
          on twitter
          <span className="sr-only">(opens in new window)</span>
        </BaseLink>{' '}
        if you have book recommendations!
      </Text>
      <Heading className="my-5" is="h3">
        What I'm Currently Reading:
      </Heading>
      <Box className="my-5">
        <List is="ul">
          {reading.map((book, idx) => (
            <ListItem className={idx !== 0 ? 'mt-6' : null} key={book.title}>
              <BaseLink
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
                <span className="sr-only">(opens in new window)</span>
              </BaseLink>{' '}
              by {book.author}
              {book.dateStarted ? (
                <>
                  <br />
                  <Text className="text-sm italic" is="em">
                    Started: {book.dateStarted}
                  </Text>
                </>
              ) : null}
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading className="my-5" is="h3">
        Books I Want to Read Soon:
      </Heading>
      <Box className="my-5">
        <List is="ul">
          {toRead.map((book, idx) => (
            <ListItem className={idx !== 0 ? 'mt-6' : null} key={book.title}>
              <BaseLink
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
                <span className="sr-only">(opens in new window)</span>
              </BaseLink>{' '}
              by {book.author}
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading className="my-5" is="h3">
        Books I've Recently Read:
      </Heading>
      <Box className="my-5">
        <List is="ul">
          {read.map((book, idx) => (
            <ListItem className={idx !== 0 ? 'mt-6' : null} key={book.title}>
              <BaseLink
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
                <span className="sr-only">(opens in new window)</span>
              </BaseLink>{' '}
              by {book.author}
              {book.dateStarted && book.dateFinished ? (
                <>
                  <br />
                  <Text className="text-sm italic" is="em">
                    {book.dateStarted} - {book.dateFinished}
                  </Text>
                </>
              ) : null}
            </ListItem>
          ))}
        </List>
      </Box>
      <Text is="small" className="italic">
        Last Updated: April 2023
      </Text>
    </>
  )
}

export let metadata = {
  title: "Matt's Bookshelf",
  description:
    "A (minimal) view of the books I've read, am reading, and want to read!",
}
