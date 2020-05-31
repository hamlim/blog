import * as React from 'react'
import { Box, List, ListItem, Text } from '@ds-pack/components'
import Link from './Link'

export function Breadcrumbs({ children }: { children: any }) {
  return (
    <Box as="nav">
      <List variant="base" as="ul" display="inline-flex">
        {children}
      </List>
    </Box>
  )
}

export function Crumb({ children, to }: { children: any; to: string }) {
  return (
    <ListItem>
      <Link fontSize={2} to={to}>
        {children}
      </Link>
    </ListItem>
  )
}

export function Spacer() {
  return (
    <ListItem mx={4}>
      <Text fontSize={2}>{'>'}</Text>
    </ListItem>
  )
}
