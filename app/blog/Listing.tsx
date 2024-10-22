import { formatPostLink } from '@lib/format-post-link'
import type { Post } from '@lib/types'
import { Box } from '@recipes/box'
import { Heading } from '@recipes/heading'
import { BaseLink, Link } from '@recipes/link'
import { List, ListItem } from '@recipes/list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@recipes/tabs'
import { Text } from '@recipes/text'

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
      grouped[post.year] = grouped[post.year] || {}
      grouped[post.year][capitalCase(post.month)] =
        grouped[post.year][capitalCase(post.month)] || []
      grouped[post.year][capitalCase(post.month)].push(post)
      return grouped
    }, {}),
  )
    .sort(([aKey], [bKey]) => {
      if (aKey > bKey) {
        return -1
      }
      if (bKey > aKey) {
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
          }
          if (bNum > aNum) {
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
        fin[tag] = fin[tag] || []
        fin[tag].push(post)
        return fin
      }, grouped)
    }, {}),
  ).sort(([tagA], [tagB]) => {
    return tagA < tagB ? -1 : tagB < tagA ? 1 : 0
  })
}

function AllPosts({ posts }) {
  return (
    <List is="ul">
      {posts.map((post, i) => (
        <ListItem
          key={post.title}
          className={i !== 0 ? 'mt-6' : null}
        >
          <Link href={formatPostLink(post)}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  )
}

function Timeline({ groupedByYear }) {
  return (
    <>
      <Box className="mb-4 flex justify-evenly">
        {groupedByYear.map(([year]: [string]) => (
          <BaseLink
            key={year}
            href={`#${year}`}
          >
            {year}
          </BaseLink>
        ))}
      </Box>
      <List is="ul">
        {groupedByYear.map(([year, months]: [string, any[]], i) => (
          <ListItem
            key={year}
            className={i !== 0 ? 'mt-6' : null}
          >
            <Heading
              is="h3"
              id={year}
              // TODO:
              // _target={{ boxShadow: '$focusShadow' }}
            >
              {year}
            </Heading>
            <Box className="pl-3">
              <List is="ul">
                {months.map(([month, posts]) => (
                  <ListItem
                    key={month}
                    className="mt-6"
                  >
                    <Heading is="h4">{month}</Heading>
                    <Box className="pl-3">
                      <List is="ul">
                        {posts.map((post: Post) => (
                          <ListItem
                            key={post.title}
                            className="mt-6"
                          >
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
    <List is="ul">
      {groupedByTag.map(([tag, posts]: [string, Array<Post>], i) => (
        <ListItem
          key={tag}
          className={i !== 0 ? 'mt-6' : null}
        >
          <Heading
            is="h3"
            id={tag}
            // TODO:
            // _target={{ boxShadow: '$focusShadow' }}
          >
            {tag}
          </Heading>
          <Box className="pl-3">
            <List is="ul">
              {posts.map((post: Post) => (
                <ListItem
                  key={post.title}
                  className="mt-6"
                >
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

// Thanks chatGPT!
function dateDifference(date1: Date, date2: Date) {
  // Calculate the time difference in milliseconds
  // @ts-ignore
  let difference = Math.abs(date1 - date2)

  // Define constants for time units
  let millisecondsPerSecond = 1000
  let millisecondsPerMinute = 60 * millisecondsPerSecond
  let millisecondsPerHour = 60 * millisecondsPerMinute
  let millisecondsPerDay = 24 * millisecondsPerHour
  let millisecondsPerWeek = 7 * millisecondsPerDay
  let millisecondsPerMonth = 30.44 * millisecondsPerDay // Average days per month
  let millisecondsPerYear = 365.25 * millisecondsPerDay // Average days per year

  // Calculate the differences in each time unit
  let years = Math.floor(difference / millisecondsPerYear)
  difference %= millisecondsPerYear
  let months = Math.floor(difference / millisecondsPerMonth)
  difference %= millisecondsPerMonth
  let weeks = Math.floor(difference / millisecondsPerWeek)
  difference %= millisecondsPerWeek
  let days = Math.floor(difference / millisecondsPerDay)
  difference %= millisecondsPerDay
  let hours = Math.floor(difference / millisecondsPerHour)
  difference %= millisecondsPerHour
  let minutes = Math.floor(difference / millisecondsPerMinute)
  difference %= millisecondsPerMinute
  let seconds = Math.floor(difference / millisecondsPerSecond)

  // Create an object to store the result
  let result = {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
  }

  return result
}

let startDate = new Date('Thu, 31 Dec 2015 08:00:00 GMT')

function plural(amount) {
  return amount > 1 || amount === 0 ? 's' : ''
}

function totalPostsEachYear(months: Array<[string, Array<Post>]>) {
  return months.reduce((acc, month) => {
    return acc + month[1].length
  }, 0)
}

function postsByMonth(
  groupedByYear: Array<[string, Array<[string, Array<Post>]>]>,
) {
  let count = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  }
  for (let year of groupedByYear) {
    for (let month of year[1]) {
      count[month[0]] += month[1].length
    }
  }
  return count
}

function BlogStats({ posts, groupedByYear }) {
  let nowIsh = new Date()

  let diff = dateDifference(startDate, nowIsh)
  return (
    <>
      <Heading
        className="mb-3"
        id="stats"
        is="h3"
      >
        Blog Stats:
      </Heading>
      <Text>
        I've been semi-consistently writing blog posts since 2015,
        approximately:
        <br />
        <time suppressHydrationWarning>
          {`${diff.years} years, ${diff.months} month${plural(diff.months)}, ${diff.weeks} week${plural(
            diff.weeks,
          )}, ${diff.days} day${plural(diff.days)}, ${diff.hours} hour${plural(diff.hours)}, ${diff.minutes} minute${plural(
            diff.minutes,
          )} and ${diff.seconds} second${plural(diff.seconds)}`}
        </time>
        ,
        <br /> over that time I've published{' '}
        <Text is="strong">{posts.length}</Text> posts!
      </Text>
      <Text>With the following distribution:</Text>
      <List is="ul">
        {groupedByYear.map(([year, months]) => {
          return (
            <ListItem key={year}>
              <Text>
                {year} - {totalPostsEachYear(months)} posts
              </Text>
              <List is="ul">
                {months.map((month) => (
                  <ListItem key={month[0]}>
                    {month[0]} - {month[1].length} posts
                  </ListItem>
                ))}
              </List>
            </ListItem>
          )
        })}
      </List>
      <Text>Here's my lifetime count of posts per month:</Text>
      <List is="ul">
        {Object.entries(postsByMonth(groupedByYear)).map(([month, count]) => (
          <ListItem key={month}>
            {month} - {count} posts
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default function Listing({ posts, gallaryPosts }) {
  let groupedByYear = groupByYearAndMonth(posts)
  let groupedByTag = groupByTags(posts)
  return (
    <>
      <Heading
        is="h1"
        className="mb-3"
      >
        Blog
      </Heading>
      <Text className="text-lg mb-2">
        Welcome to my Blog! Many of these posts are rough drafts that I work on
        here and there.
      </Text>
      <Heading
        is="h3"
        className="my-4"
      >
        Popular posts:
      </Heading>
      <Box className="my-5">
        <List is="ol">
          {gallaryPosts.map((post, i) => (
            <ListItem
              key={post.title}
              className={i !== 0 ? 'mt-6' : null}
            >
              <Link href={formatPostLink(post)}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading
        is="h3"
        className="py-7"
      >
        All Posts:
      </Heading>
      <Tabs
        defaultValue="all"
        className="w-[400px]"
      >
        <TabsList>
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="tags">By Tag</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <AllPosts posts={posts} />
        </TabsContent>
        <TabsContent value="timeline">
          <Timeline groupedByYear={groupedByYear} />
        </TabsContent>
        <TabsContent value="tags">
          <Tagged groupedByTag={groupedByTag} />
        </TabsContent>
      </Tabs>
      <BlogStats
        posts={posts}
        groupedByYear={groupedByYear}
      />
    </>
  )
}
