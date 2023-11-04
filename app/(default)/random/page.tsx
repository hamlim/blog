import { Heading } from '@recipes/heading'
import { Box } from '@recipes/box'
import { List, ListItem } from '@recipes/list'
import { Link } from '@recipes/link'

export default function Random() {
  return (
    <Box>
      <Heading className="mb-4" is="h2">
        Random Things:
      </Heading>
      <List is="ul">
        <ListItem>
          <Link href="/random/colors">Colors</Link>
        </ListItem>
        <ListItem>
          <Link href="/random/sandbox">Sandbox</Link>
        </ListItem>
      </List>
    </Box>
  )
}
