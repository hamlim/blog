import { Heading, Box, List, ListItem, Link } from '@ds-pack/daisyui'
import NextLink from 'next/link'

function LocalLink(props) {
  return <Link is={NextLink} {...props} />
}

export default function Random() {
  return (
    <Box>
      <Heading className="mb-4" is="h2" variant="lead">
        Random Things:
      </Heading>
      <List variant="base" is="ul">
        <ListItem>
          <LocalLink href="/random/colors">Colors</LocalLink>
        </ListItem>
        <ListItem>
          <LocalLink href="/random/sandbox">Sandbox</LocalLink>
        </ListItem>
      </List>
    </Box>
  )
}

export const revalidate = 0
export const dynamic = 'force-dynamic'
