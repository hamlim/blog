import * as React from 'react'
import { Heading, Box, Text, List, ListItem } from '@ds-pack/components'
import LocalLink from '../../components/Link'
// this data is collected at build time - hashbuster - v1
import notebook from /* preval */ '../../scripts/collect-notebook-entries'

export default function Notebook() {
  return (
    <>
      <Heading variant="h1" is="h1">
        Notebook
      </Heading>
      <Text fontSize="$2" mb="$2">
        Welcome to my Notebook! Many of these posts are rough drafts that I work
        on here and there. For (slightly) more fully formed posts, checkout my{' '}
        <LocalLink to="/blog">Blog</LocalLink>.
      </Text>
      <Box my="$5">
        <List variant="base" is="ol">
          {notebook.map((link, i) => (
            <ListItem key={link.title} mt={i !== 0 ? '$6' : null}>
              <LocalLink to={link.link}>{link.title}</LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}
