import type { Post } from '@lib/types';

let monthToNumber = {
  january: '01',
  february: '02',
  march: '03',
  april: '04',
  may: '05',
  june: '06',
  july: '07',
  august: '08',
  september: '09',
  october: '10',
  november: '11',
  december: '12',
};

let newPosts: Array<Post> = [
  {
    title: 'Understanding React 16.3 Updates',
    slug: 'understanding-react-16-3-updates',
    path: '/posts/2018/april/understanding-react-16-3-updates.md',
    date: 'April 8th, 2018',
    time: '5:54:00 PM',
    month: 'april',
    year: '2018',
    tags: ['React', 'JavaScript', 'Web Development'],
    status: 'public',
    id: NaN,
    description: 'A quick overview of the new lifecycle methods introduced in React 16.3',
  },
  {
    id: NaN,
    title: '2018',
    path: '/posts/2018/january/2018.md',
    slug: '2018',
    date: 'January 16th, 2018',
    time: '12:00:00 PM',
    month: 'january',
    year: '2018',
    tags: ['Recap', 'Looking Ahead'],
    status: 'public',
    description: 'A recap and update on some of the projects I am working on at the start of 2018',
  },
  {
    id: NaN,
    title: 'Taking a Break',
    path: '/posts/2018/july/taking-a-break.md',
    slug: 'taking-a-break',
    date: 'July 4th, 2018',
    time: '9:07:00 AM',
    month: 'july',
    year: '2018',
    tags: ['Burnout', 'Web Development', 'Development'],
    status: 'public',
    description: 'A few quick thoughts on burn out and taking a break',
  },
  {
    id: NaN,
    title: 'Summer 2018 Trip',
    path: '/posts/2018/july/summer-2018-trip.md',
    slug: 'summer-2018-trip',
    date: 'July 21st, 2018',
    time: '1:23:00 PM',
    month: 'july',
    year: '2018',
    tags: ['Vacation', 'Trip', 'Photos'],
    status: 'public',
    description: 'A few photos from my summer trip!',
  },
  {
    id: NaN,
    title: 'Managing Complex UI Component State',
    path: '/posts/2018/may/complex-ui-components.md',
    slug: 'complex-ui-components',
    date: 'May 28th, 2018',
    time: '12:00:00 PM',
    month: 'may',
    year: '2018',
    tags: ['React', 'Web Development', 'Components'],
    status: 'public',
    description: 'A few thoughts on managing complex UI component state within React',
  },
  {
    id: NaN,
    title: 'Missing Detail',
    path: '/posts/2018/november/missing-detail.md',
    slug: 'missing-detail',
    date: 'November 4th, 2018',
    time: '6:30:00 PM',
    month: 'november',
    year: '2018',
    tags: ['Reading', 'Article'],
    status: 'public',
    description: 'A few thoughts on the article "Reality has a surprising amount of detail"',
  },
  {
    id: NaN,
    title: 'Suspense Plus GraphQL',
    path: '/posts/2018/november/suspense-plus-graphql.md',
    slug: 'suspense-plus-graphql',
    date: 'November 11th, 2018',
    time: '3:04:00 PM',
    month: 'november',
    year: '2018',
    tags: ['React', 'GraphQL', 'Suspense', 'Web Development'],
    status: 'public',
    description: 'A few thoughts on using Suspense with GraphQL to optimize application data loading',
  },
  {
    id: NaN,
    title: "Matt's Log - October",
    path: '/posts/2018/october/matts-log-october.md',
    slug: 'matts-log-october',
    date: 'October 2nd, 2018',
    time: '9:11:00 PM',
    month: 'october',
    year: '2018',
    tags: ['Log', 'Personal'],
    status: 'public',
    description: 'A quick log of what I have been up to in October',
  },
  {
    id: NaN,
    title: "You've Launched, Now What?",
    path: '/posts/2018/october/youve-launched-now-what.md',
    slug: 'youve-launched-now-what',
    date: 'September 23rd, 2018',
    time: '3:06:00 PM',
    month: 'september',
    year: '2018',
    tags: ['Web Development', 'Launch'],
    status: 'public',
    description: 'A few thoughts on what to do after you launch a new project',
  },
  {
    id: NaN,
    title: 'CSS in JS',
    path: '/posts/2017/april/css-in-js.md',
    slug: 'css-in-js',
    date: 'April 1st, 2017',
    time: '12:00:00 PM',
    month: 'april',
    year: '2017',
    tags: ['CSS', 'JavaScript', 'Web Development'],
    status: 'public',
    description: 'A few thoughts and patterns for using styled-jsx or other CSS-in-JS solutions',
  },
  {
    id: NaN,
    title: 'Calendar',
    path: '/posts/2017/march/calendar.md',
    slug: 'calendar',
    date: 'March 10th, 2017',
    time: '12:00:00 PM',
    month: 'march',
    year: '2017',
    tags: ['Calendar', 'Web Development'],
    status: 'public',
    description: 'Building a calendar web application',
  },
  {
    id: NaN,
    title: 'JavaScript Weirdness',
    path: '/posts/2017/march/javascript-weirdness.md',
    slug: 'javascript-weirdness',
    date: 'March 11th, 2017',
    time: '12:00:00 PM',
    month: 'march',
    year: '2017',
    tags: ['JavaScript', 'Web Development'],
    status: 'public',
    description: 'A few weird things about JavaScript',
  },
  {
    id: NaN,
    title: 'Redesign v6',
    path: '/posts/2017/march/redesign-v6.md',
    slug: 'redesign-v6',
    date: 'March 15th, 2017',
    time: '12:00:00 PM',
    month: 'march',
    year: '2017',
    tags: ['Redesign', 'Personal Site', 'Next.js', 'Web Development'],
    status: 'public',
    description: 'A few thoughts on the redesign of my personal site, adopting Next.js and deploying via Now',
  },
];

let existingFeed = await Bun.file('./public/feed.json').json();

let gallerySlugs = existingFeed.posts.filter(post => existingFeed.gallery.includes(post.id)).map(post => post.slug);

let allPosts = [...existingFeed.posts, ...newPosts];

function toDate(post: Post): Date {
  let [month, day, year] = post.date.split(' ');
  month = month.toLowerCase();
  day = day.replace(/(st|nd|rd|th),/, '');
  let dayStr = `${day.length === 1 ? '0' : ''}${day}`;
  let splitTime = post.time.split(' ');
  let shouldShiftHour = splitTime[1] === 'PM' && splitTime[0].split(':')[0] !== '12';
  let [hour, minutes, seconds] = splitTime[0].split(':');
  let time = `${shouldShiftHour ? Number(hour) + 12 : hour.length === 1 ? `0${hour}` : hour}:${minutes}:${
    seconds.length === 1 ? '0' : ''
  }${seconds}`;
  let dateStr = `${year}-${monthToNumber[month]}-${dayStr}T${time}.000-05:00`;
  return new Date(dateStr);
}

allPosts = allPosts.sort((a, b) => {
  let aDate = toDate(a);
  let bDate = toDate(b);
  return aDate.getTime() < bDate.getTime() ? -1 : 1;
});

allPosts = allPosts.map((post, index) => {
  post.id = index;
  return post;
});

existingFeed.posts = allPosts;

existingFeed.gallery = existingFeed.posts.filter(post => gallerySlugs.includes(post.slug)).map(post => post.id);

await Bun.write('./local.json', JSON.stringify(existingFeed, null, 2));
