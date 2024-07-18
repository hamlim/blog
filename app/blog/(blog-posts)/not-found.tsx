import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { Text } from '@recipes/text'

export default function NotFound() {
  return (
    <Box>
      <Heading is="h1">Not Found</Heading>
      <Text>Sorry, this page does not exist.</Text>
    </Box>
  )
}
