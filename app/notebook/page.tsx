import { Heading, Box, Text, Link, List, ListItem } from '@ds-pack/components'
import NextLink from 'next/link'
import { fetchManifest } from '@lib/fetch-manifest'
import { formatNotebookLink } from '@lib/format-post-link'

function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}

export default async function Notebook() {
  let { notebookEntries } = await fetchManifest()
  return (
    <>
      <Heading variant="h1" is="h1">
        Notebook
      </Heading>
      <Text fontSize="$2" mb="$2">
        Welcome to my Notebook! Many of these posts are rough drafts that I work
        on here and there. For (slightly) more fully formed posts, checkout my{' '}
        <LocalLink href="/posts">Blog</LocalLink>.
      </Text>
      <Box my="$5">
        <List variant="base" is="ol">
          {notebookEntries.map((entry, i) => (
            <ListItem key={entry.title} mt={i !== 0 ? '$6' : null}>
              <LocalLink href={formatNotebookLink(entry)}>
                {entry.title}
              </LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
