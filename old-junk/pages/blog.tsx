import React, { useState } from 'react'
import {
  Box,
  Text,
  List,
  ListItem,
  Heading,
  Stack,
  RadioInput,
  Button,
  Link as StyledLink,
} from '@ds-pack/components'
import { topPosts, allPosts, Post } from '../posts'
import Link from '../components/Link'

const monthToNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

function groupByYearAndMonth(posts: Array<Post>) {
  return Object.entries(
    posts.reduce((grouped, post: Post) => {
      return {
        ...grouped,
        [post.year]: {
          ...(grouped[post.year] || {}),
          [post.month]: [
            ...(grouped[post.year] ? grouped[post.year][post.month] || [] : []),
            post,
          ],
        },
      }
    }, {}),
  )
    .sort(([aKey], [bKey]) => {
      if (aKey > bKey) {
        return -1
      } else if (bKey > aKey) {
        return 1
      }
      return 0
    })
    .map((entry) => {
      return [
        entry[0],
        Object.entries(entry[1]).sort(([monthA], [monthB]) => {
          let aNum = monthToNumber[monthA]
          let bNum = monthToNumber[monthB]
          if (aNum > bNum) {
            return -1
          } else if (bNum > aNum) {
            return 1
          }
          return 0
        }),
      ]
    })
}

function groupByTags(posts: Array<Post>) {
  return Object.entries(
    posts.reduce((grouped, post) => {
      let {
        frontMatter: { tags },
      } = post
      return tags.reduce((fin, tag) => {
        return {
          ...fin,
          [tag]: fin[tag] ? [...fin[tag], post] : [post],
        }
      }, grouped)
    }, {}),
  ).sort(([tagA], [tagB]) => {
    return tagA < tagB ? -1 : tagB < tagA ? 1 : 0
  })
}

let groupedByYear = groupByYearAndMonth(allPosts)
let groupedByTag = groupByTags(allPosts)

function Control({ value, checked, onChange, children }) {
  return (
    <Button variant={checked ? 'primary' : 'ghost'} is="label">
      <RadioInput
        name="posts-by"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </Button>
  )
}

function SegmentedControl({ value, onChange }) {
  return (
    <Stack inline gap="$2">
      <Control value="all" onChange={onChange} checked={value === 'all'}>
        All Posts
      </Control>
      <Control
        value="timeline"
        onChange={onChange}
        checked={value === 'timeline'}
      >
        Timeline
      </Control>
      <Control value="tag" onChange={onChange} checked={value === 'tag'}>
        By Tag
      </Control>
    </Stack>
  )
}

function AllPosts() {
  return (
    <List variant="base" is="ol">
      {allPosts.map((post, i) => (
        <ListItem key={post.title} mt={i !== 0 ? '$6' : null}>
          <Link to={post.absolute}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  )
}

function Timeline() {
  return (
    <>
      <Stack inline gap="$2" mb="$4">
        {groupedByYear.map(([year]: [string]) => (
          <StyledLink is="a" key={year} href={`#${year}`}>
            {year}
          </StyledLink>
        ))}
      </Stack>
      <List variant="base" is="ol">
        {groupedByYear.map(([year, months]: [string, any[]], i) => (
          <ListItem key={year} mt={i !== 0 ? '$6' : null}>
            <Heading
              is="h3"
              id={year}
              variant="h2"
              // TODO:
              // _target={{ boxShadow: '$focusShadow' }}
            >
              {year}
            </Heading>
            <Box pl="$3">
              <List variant="base" is="ol">
                {months.map(([month, posts], i) => (
                  <ListItem key={month} mt="$6">
                    <Heading is="h4" variant="subhead">
                      {month}
                    </Heading>
                    <Box pl="$3">
                      <List variant="base" is="ol">
                        {posts.map((post: Post, i: number) => (
                          <ListItem key={post.title} mt="$6">
                            <Link to={post.absolute}>{post.title}</Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  )
}

function Tagged() {
  return (
    <List variant="base" is="ol">
      {groupedByTag.map(([tag, posts]: [string, Array<Post>], i) => (
        <ListItem key={tag} mt={i !== 0 ? '$6' : null}>
          <Heading
            is="h3"
            id={tag}
            variant="h2"
            // TODO:
            // _target={{ boxShadow: '$focusShadow' }}
          >
            {tag}
          </Heading>
          <Box pl="$3">
            <List variant="base" is="ol">
              {posts.map((post: Post) => (
                <ListItem key={post.title} mt="$6">
                  <Link to={post.absolute}>{post.title}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </ListItem>
      ))}
    </List>
  )
}

export default function Blog() {
  let [value, setValue] = useState('all')
  return (
    <>
      <Heading variant="lead" is="h1" mb="$3">
        Blog
      </Heading>
      <Text fontSize="$2" mb="$2">
        Welcome to my Blog! Many of these posts are rough drafts that I work on
        here and there.
      </Text>
      <Heading variant="h3" is="h3" fontSize="$2" mb="$2">
        Popular posts:
      </Heading>
      <Box my="$5">
        <List variant="base" is="ol">
          {topPosts.map((post, i) => (
            <ListItem key={post.title} mt={i !== 0 ? '$6' : null}>
              <Link to={post.absolute}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading variant="h3" is="h3" fontSize="$2" py="$7">
        All Posts:
      </Heading>

      <SegmentedControl value={value} onChange={setValue} />

      <Box my="$5">
        {value === 'all' ? (
          <AllPosts />
        ) : value === 'timeline' ? (
          <Timeline />
        ) : (
          <Tagged />
        )}
      </Box>
    </>
  )
}
