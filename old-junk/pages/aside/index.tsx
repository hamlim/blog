import { Heading, Box, List, ListItem } from '@ds-pack/components'
import LocalLink from '../../components/Link'

export default function Random() {
  return (
    <Box>
      <Heading mb="$4" is="h2" variant="lead">
        Random Things:
      </Heading>
      <List variant="unordered" is="ul">
        <ListItem>
          <LocalLink to="/aside/colors">Colors</LocalLink>
        </ListItem>
      </List>
    </Box>
  )
}
