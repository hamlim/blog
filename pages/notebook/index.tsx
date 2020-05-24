import * as React from 'react'
import { Breadcrumbs, Crumb } from '../../components/breadcrumbs'
import {
  H1,
  H3,
  Box,
  Text,
  List,
  ListItem,
} from '@matthamlin/component-library'
import LocalLink from '../../components/Link'
import notebook from '../../notebook'

export default function Notebook() {
  return (
    <>
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb>
      </Breadcrumbs>
      <H1>Notebook</H1>
      <Text fontSize={2} mb={2}>
        Welcome to my Notebook! Many of these posts are rough drafts that I work
        on here and there. For (slightly) more fully formed posts, checkout my{' '}
        <LocalLink to="/blog">Blog</LocalLink>.
      </Text>
      <Box my={5}>
        <List variant="base" as="ol">
          {notebook.map((link, i) => (
            <ListItem key={link.title} mt={i !== 0 ? 6 : null}>
              <LocalLink to={link.link}>{link.title}</LocalLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}
