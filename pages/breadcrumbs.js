import * as React from 'react'
import { Box, List, ListItem, Link, Text } from '@matthamlin/component-library'
import { Link as RouterLink } from '@matthamlin/reroute-browser'

export function Breadcrumbs({ children }) {
  return (
    <Box as="nav">
      <List variant="base" as="ul" display="inline-flex">
        {children}
      </List>
    </Box>
  )
}

export function Crumb({ children, to }) {
  return (
    <ListItem>
      <Link fontSize={2} as={RouterLink} to={to}>
        {children}
      </Link>
    </ListItem>
  )
}

export function Spacer() {
  return (
    <ListItem mx={4}>
      <Text fontSize={2}>></Text>
    </ListItem>
  )
}
