import { Heading, Box, Text, Link, List, ListItem } from '@ds-pack/daisyui'
import NextLink from 'next/link'
import { fetchManifest } from '@lib/fetch-manifest'
import { formatNotebookLink } from '@lib/format-post-link'

function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}

export default async function Notebook() {
  let { notebookEntries } = await fetchManifest()
  return (
    <Box>
      <Heading variant="h1" is="h1" className="mb-5">
        Notebook
      </Heading>
      <Text className="text-lg mb-2">
        Welcome to my Notebook! Many of these posts are rough drafts that I work
        on here and there. For (slightly) more fully formed posts, checkout my{' '}
        <LocalLink href="/posts">Blog</LocalLink>.
      </Text>
      <Box className="my-5">
        <List variant="unordered" is="ul">
          {notebookEntries.map((entry, i) => (
            <ListItem key={entry.title} className={i !== 0 ? 'mt-3' : null}>
              <LocalLink href={formatNotebookLink(entry)}>
                {entry.title}
              </LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export const dynamic = 'force-dynamic'
