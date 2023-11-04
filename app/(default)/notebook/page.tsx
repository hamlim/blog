import { Heading } from '@recipes/heading'
import { Box } from '@recipes/box'
import { Text } from '@recipes/text'
import { Link } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { fetchManifest } from '@lib/fetch-manifest'
import { formatNotebookLink } from '@lib/format-post-link'

export default async function Notebook() {
  let { notebookEntries } = await fetchManifest()
  return (
    <Box>
      <Heading is="h1" className="mb-5">
        Notebook
      </Heading>
      <Text className="text-lg mb-2">
        Welcome to my Notebook! Many of these posts are rough drafts that I work
        on here and there. For (slightly) more fully formed posts, checkout my{' '}
        <Link href="/posts">Blog</Link>.
      </Text>
      <Box className="my-5">
        <List is="ul">
          {notebookEntries.map((entry, i) => (
            <ListItem key={entry.title} className={i !== 0 ? 'mt-3' : null}>
              <Link href={formatNotebookLink(entry)}>{entry.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}
