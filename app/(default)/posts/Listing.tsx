import { formatPostLink } from '@lib/format-post-link';
import type { Post } from '@lib/types';
import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { BaseLink, Link } from '@recipes/link';
import { List, ListItem } from '@recipes/list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@recipes/tabs';
import { Text } from '@recipes/text';

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
};

function capitalCase(word: string): string {
  let [first, ...rest] = word.split('');
  return `${first.toUpperCase()}${rest.join('')}`;
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
      };
    }, {}),
  )
    .sort(([aKey], [bKey]) => {
      if (aKey > bKey) {
        return -1;
      } else if (bKey > aKey) {
        return 1;
      }
      return 0;
    })
    .map((entry) => {
      return [
        entry[0],
        Object.entries(entry[1]).sort(([monthA], [monthB]) => {
          let aNum = monthToNumber[monthA];
          let bNum = monthToNumber[monthB];
          if (aNum > bNum) {
            return -1;
          } else if (bNum > aNum) {
            return 1;
          }
          return 0;
        }),
      ];
    });
}

function groupByTags(posts: Array<Post>) {
  return Object.entries(
    posts.reduce((grouped, post) => {
      let { tags } = post;
      return tags.reduce((fin, tag) => {
        return {
          ...fin,
          [tag]: fin[tag] ? [...fin[tag], post] : [post],
        };
      }, grouped);
    }, {}),
  ).sort(([tagA], [tagB]) => {
    return tagA < tagB ? -1 : tagB < tagA ? 1 : 0;
  });
}

function AllPosts({ posts }) {
  return (
    <List is='ul'>
      {posts.map((post, i) => (
        <ListItem key={post.title} className={i !== 0 ? 'mt-6' : null}>
          <Link href={formatPostLink(post)}>{post.title}</Link>
        </ListItem>
      ))}
    </List>
  );
}

function Timeline({ groupedByYear }) {
  return (
    <>
      <Box className='mb-4 flex justify-evenly'>
        {groupedByYear.map(([year]: [string]) => (
          <BaseLink key={year} href={`#${year}`}>
            {year}
          </BaseLink>
        ))}
      </Box>
      <List is='ul'>
        {groupedByYear.map(([year, months]: [string, any[]], i) => (
          <ListItem key={year} className={i !== 0 ? 'mt-6' : null}>
            <Heading
              is='h3'
              id={year}
              // TODO:
              // _target={{ boxShadow: '$focusShadow' }}
            >
              {year}
            </Heading>
            <Box className='pl-3'>
              <List is='ul'>
                {months.map(([month, posts]) => (
                  <ListItem key={month} className='mt-6'>
                    <Heading is='h4'>{month}</Heading>
                    <Box className='pl-3'>
                      <List is='ul'>
                        {posts.map((post: Post) => (
                          <ListItem key={post.title} className='mt-6'>
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
  );
}

function Tagged({ groupedByTag }) {
  return (
    <List is='ul'>
      {groupedByTag.map(([tag, posts]: [string, Array<Post>], i) => (
        <ListItem key={tag} className={i !== 0 ? 'mt-6' : null}>
          <Heading
            is='h3'
            id={tag}
            // TODO:
            // _target={{ boxShadow: '$focusShadow' }}
          >
            {tag}
          </Heading>
          <Box className='pl-3'>
            <List is='ul'>
              {posts.map((post: Post) => (
                <ListItem key={post.title} className='mt-6'>
                  <Link href={formatPostLink(post)}>{post.title}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default function Listing({ posts, gallaryPosts }) {
  let groupedByYear = groupByYearAndMonth(posts);
  let groupedByTag = groupByTags(posts);
  return (
    <>
      <Heading is='h1' className='mb-3'>
        Blog
      </Heading>
      <Text className='text-lg mb-2'>
        Welcome to my Blog! Many of these posts are rough drafts that I work on here and there.
      </Text>
      <Heading is='h3' className='my-4'>
        Popular posts:
      </Heading>
      <Box className='my-5'>
        <List is='ol'>
          {gallaryPosts.map((post, i) => (
            <ListItem key={post.title} className={i !== 0 ? 'mt-6' : null}>
              <Link href={formatPostLink(post)}>{post.title}</Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Heading is='h3' className='py-7'>
        All Posts:
      </Heading>
      <Tabs defaultValue='all' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='all'>All Posts</TabsTrigger>
          <TabsTrigger value='timeline'>Timeline</TabsTrigger>
          <TabsTrigger value='tags'>By Tag</TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          <AllPosts posts={posts} />
        </TabsContent>
        <TabsContent value='timeline'>
          <Timeline groupedByYear={groupedByYear} />
        </TabsContent>
        <TabsContent value='tags'>
          <Tagged groupedByTag={groupedByTag} />
        </TabsContent>
      </Tabs>
    </>
  );
}
