'use client'
import { useState } from 'react'
import {
  Box,
  Text,
  List,
  ListItem,
  Heading,
  RadioInput,
  Button,
  Stack,
  Link as StyledLink,
} from '@ds-pack/daisyui'
import type { Post } from '@lib/types'
import { formatPostLink } from '@lib/format-post-link'
import { LocalLink as Link } from '@lib/LocalLink'

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

function capitalCase(word: string): string {
  let [first, ...rest] = word.split('')
  return `${first.toUpperCase()}${rest.join('')}`
}

function groupByYearAndMonth(posts: Array<Post>) {
  return Object.entries(
    posts.reduce((grouped, post: Post) => {
      return {
        ...grouped,
        [post.year]: {
          ...(grouped[post.year] || {}),
          [capitalCase(post.month)]: [
            ...(grouped[post.year]
              ? grouped[post.year][capitalCase(post.month)] || []
              : []),
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
      let { tags } = post
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

function Control({ value, checked, onChange, children }) {
  return (
    <Button variant={checked ? 'primary' : 'outline'} is="label">
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
    <Stack inline gap="2">
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

function AllPosts({ posts }) {
  return (
    <List variant="base" is="ol">
      {posts.map((post, i) => (
        <ListItem key={post.title} className={i !== 0 ? 'mt-6' : null}>
          <Link href={formatPostLink(post)}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  )
}

function Timeline({ groupedByYear }) {
  return (
    <>
      <Stack inline gap="2" className="mb-4">
        {groupedByYear.map(([year]: [string]) => (
          <StyledLink is="a" key={year} href={`#${year}`}>
            {year}
          </StyledLink>
        ))}
      </Stack>
      <List variant="base" is="ol">
        {groupedByYear.map(([year, months]: [string, any[]], i) => (
          <ListItem key={year} className={i !== 0 ? 'mt-6' : null}>
            <Heading
              is="h3"
              id={year}
              variant="h2"
              // TODO:
              // _target={{ boxShadow: '$focusShadow' }}
            >
              {year}
            </Heading>
            <Box className="pl-3">
              <List variant="base" is="ol">
                {months.map(([month, posts]) => (
                  <ListItem key={month} className="mt-6">
                    <Heading is="h4" variant="subhead">
                      {month}
                    </Heading>
                    <Box className="pl-3">
                      <List variant="base" is="ol">
                        {posts.map((post: Post) => (
                          <ListItem key={post.title} className="mt-6">
                            <Link href={formatPostLink(post)}>
                              {post.title}
                            </Link>
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

function Tagged({ groupedByTag }) {
  return (
    <List variant="base" is="ol">
      {groupedByTag.map(([tag, posts]: [string, Array<Post>], i) => (
        <ListItem key={tag} className={i !== 0 ? 'mt-6' : null}>
          <Heading
            is="h3"
            id={tag}
            variant="h2"
            // TODO:
            // _target={{ boxShadow: '$focusShadow' }}
          >
            {tag}
          </Heading>
          <Box className="pl-3">
            <List variant="base" is="ol">
              {posts.map((post: Post) => (
                <ListItem key={post.title} className="mt-6">
                  <Link href={formatPostLink(post)}>{post.title}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </ListItem>
      ))}
    </List>
  )
}

export default function Listing({ posts, gallaryPosts }) {
  let groupedByYear = groupByYearAndMonth(posts)
  let groupedByTag = groupByTags(posts)
  let [value, setValue] = useState('all')
  return (
    <>
      <Heading variant="lead" is="h1" className="mb-3">
        Blog
      </Heading>
      <Text className="text-lg mb-2">
        Welcome to my Blog! Many of these posts are rough drafts that I work on
        here and there.
      </Text>
      <Heading variant="h3" is="h3" className="text-lg mb-2">
        Popular posts:
      </Heading>
      <Box className="my-5">
        <List variant="base" is="ol">
          {gallaryPosts.map((post, i) => (
            <ListItem key={post.title} className={i !== 0 ? 'mt-6' : null}>
              <Link href={formatPostLink(post)}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading variant="h3" is="h3" className="text-lg py-7">
        All Posts:
      </Heading>

      <SegmentedControl value={value} onChange={setValue} />

      <Box className="my-5">
        {value === 'all' ? (
          <AllPosts posts={posts} />
        ) : value === 'timeline' ? (
          <Timeline groupedByYear={groupedByYear} />
        ) : (
          <Tagged groupedByTag={groupedByTag} />
        )}
      </Box>
    </>
  )
}
