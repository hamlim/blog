// cachebuster - v19
import postData from /* preval */ './scripts/collect-post-data'

let highlights = postData.filter((p) => p.frontMatter.highlight)

export interface Post {
  frontMatter: {
    date: string
    timeToRead: string
    title: string
    tags: Array<string>
    [key: string]: any
  }
  month: string
  year: number
  title: string
  absolute: string
}

export let topPosts = highlights as Array<Post>

/*
[
  {
    to: 'theme-first-ui-development',
    title: 'Theme First UI Development',
    absolute: '/posts/2019/july/theme-first-ui-development',
  },
  {
    to: 'draft-pull-requests',
    title: 'Draft Pull Requests',
    absolute: '/posts/2020/march/draft-pull-requests',
  },
  {
    to: 'maintenance-costs',
    title: 'Maintenance Costs',
    absolute: '/posts/2019/may/maintenance-costs',
  },
  {
    to: 'testing-software',
    title: 'Testing Software',
    absolute: '/posts/2018/december/testing-software',
  },
]

*/

export let allPosts = postData as Array<Post>

/* 

let oldAllPosts = [
  {
    date: 'February 8th, 2021',
    to: 'yw',
    title: 'yw',
    absolute: '/posts/2021/february/yw',
  },
  {
    date: 'January 19th, 2021',
    to: 'hack-sprint',
    title: 'Hack Sprint',
    absolute: '/posts/2021/january/hack-sprint',
  },
  {
    date: 'January 18th, 2021',
    to: 'simple-props',
    title: 'Simple Props',
    absolute: '/posts/2021/january/simple-props',
  },
  {
    date: 'January 9th, 2021',
    to: 'computed-theme',
    title: 'Computed Design Tokens',
    absolute: '/posts/2021/january/computed-theme',
  },
  {
    date: 'January 1st, 2020',
    to: '2021-resolutions',
    title: '2021: Resolutions',
    absolute: '/posts/2021/february/2021',
  },
  {
    date: 'December 30th, 2020',
    to: '2020-year-in-review',
    title: '2020: Year in Review',
    absolute: '/posts/2020/december/2020',
  },
  {
    date: 'December 21st, 2020',
    to: 'sandbox-part-1',
    title: 'Building a Web Sandbox: Part 1',
    absolute: '/posts/2020/december/sandbox-part-1',
  },
  {
    date: 'December 19th, 2020',
    to: 'literate-programming',
    title: 'Literate (web) Programming',
    absolute: '/posts/2020/december/literate-programming',
  },
  {
    date: 'December 13th, 2020',
    to: 'nextjs-analytics-with-airtable',
    title: 'NextJS Analytics with Airtable',
    absolute: '/posts/2020/december/nextjs-analytics-with-airtable',
  },
  {
    date: 'December 2nd, 2020',
    to: 'pair-code-reviews',
    title: 'Pair Code Reviews',
    absolute: '/posts/2020/december/pair-code-reviews',
  },
  {
    date: 'July 8th, 2020',
    to: 'enhancing-slack',
    title: 'Enhancing Slack',
    absolute: '/posts/2020/july/enhancing-slack',
  },
  {
    date: 'May 31st, 2020',
    to: 'a-note-on-consistency',
    title: 'A Note On Consistency',
    absolute: '/posts/2020/may/a-note-on-consistency',
  },
  {
    to: 'a-note-on-anti-patterns',
    title: 'A Note On Anti-Patterns',
    absolute: '/posts/2020/april/a-note-on-anti-patterns',
  },
  {
    to: 'a-note-on-meetings',
    title: 'A Note On Meetings',
    absolute: '/posts/2020/april/a-note-on-meetings',
  },
  {
    to: 'the-rabbit-hole',
    title: 'The Rabbit Hole',
    absolute: '/posts/2020/april/the-rabbit-hole',
  },
  {
    to: 'stateful-providers',
    title: 'Stateful Providers',
    absolute: '/posts/2020/march/stateful-providers',
  },
  {
    to: 'draft-pull-requests',
    title: 'Draft Pull Requests',
    absolute: '/posts/2020/march/draft-pull-requests',
  },
  {
    to: 'february-20-2020',
    title: 'February 20, 2020',
    absolute: '/posts/2020/february/back-bay-fens',
  },
  {
    to: 'bend-2019',
    title: 'Summer 2019 - Bend Oregon',
    absolute: '/posts/2019/july/bend',
  },
  {
    to: 'theme-first-ui-development',
    title: 'Theme First UI Development',
    absolute: '/posts/2019/july/theme-first-ui-development',
  },
  {
    to: 'deploying-via-github-actions',
    title: 'Deploying Automatically using GitHub Actions',
    absolute: '/posts/2019/june/deploying-with-github-actions',
  },
  {
    to: 'simpler-and-smaller',
    title: 'Simpler and Smaller',
    absolute: '/posts/2019/june/simpler-and-smaller',
  },
  {
    to: 'maintenance-costs',
    title: 'Maintenance Costs',
    absolute: '/posts/2019/may/maintenance-costs',
  },
  {
    to: 'snapshot-testing',
    title: 'Snapshot Testing',
    absolute: '/posts/2019/march/snapshot-testing',
  },
  {
    to: 'hooks-tips-2',
    title: 'Hooks Tips Ep. 2 - Migrating Instance Variables',
    absolute: '/posts/2019/february/hooks-tips-instance-variables',
  },
  {
    to: 'start-small-accept-change',
    title: 'Start Small, Accept Change',
    absolute: '/posts/2019/february/start-small',
  },
  {
    to: 'usereducer-do-not-usestate',
    title: "useReducer, don't useState",
    absolute: '/posts/2019/february/why-you-should-useReducer',
  },
  {
    to: 'hooks-tips-1',
    title: 'Hooks Tips Ep. 1 - The Dependency Array',
    absolute: '/posts/2019/february/hooks-tips-dependency-array',
  },
  {
    to: 'building-a-live-editor',
    title: 'Building a Live Editor',
    absolute: '/posts/2019/february/building-a-live-editor',
  },
  {
    to: 'react-error-boundaries',
    title: 'React Error Boundaries',
    absolute: '/posts/2019/january/react-error-boundaries',
  },
  {
    to: 'testing-software',
    title: 'Testing Software',
    absolute: '/posts/2018/december/testing-software',
  },
  {
    to: 'starting-fresh',
    title: 'Starting Fresh',
    absolute: '/posts/2018/december/starting-fresh',
  },
  {
    to: 'october-4th',
    title: 'October 4th',
    absolute: '/posts/2016/october/october-4th',
  },
  {
    to: 'css-debate',
    title: 'CSS Debate',
    absolute: '/posts/2016/october/css-debate',
  },
  {
    to: 'links',
    title: 'Links',
    absolute: '/posts/2016/november/links',
  },
  {
    to: 'my-first-project-of-2016',
    title: 'My First Project of 2016',
    absolute: '/posts/2016/january/my-first-project-of-2016',
  },
  {
    to: 'dji-vs-gopro',
    title: 'DJI vs GoPro',
    absolute: '/posts/2016/january/dji-vs-gopro',
  },
  {
    to: 'clientside',
    title: 'Clientside',
    absolute: '/posts/2016/january/clientside',
  },
  {
    to: 'building-in-2016',
    title: 'Building in 2016',
    absolute: '/posts/2016/january/building-in-2016',
  },
  {
    to: 'afraid',
    title: 'Afraid',
    absolute: '/posts/2016/january/afraid',
  },
  {
    to: '10,000-characters',
    title: '10,000 Characters',
    absolute: '/posts/2016/january/10000-charcters',
  },
  {
    to: 'redesign-v5',
    title: 'Redesign V5',
    absolute: '/posts/2016/august/redesign-v5',
  },
  {
    to: 'pull-quotes',
    title: 'Pull Quotes',
    absolute: '/posts/2016/august/pull-quotes',
  },
  {
    to: 'my-new-website',
    title: 'My New Website',
    absolute: '/posts/2016/august/my-new-website',
  },
  {
    to: 'august',
    title: 'August',
    absolute: '/posts/2016/august/august',
  },
  {
    to: 'attribute-selectors',
    title: 'Attribute Selectors',
    absolute: '/posts/2016/august/attribute-selectors',
  },
  {
    to: 'redesign',
    title: 'Redesign',
    absolute: '/posts/2016/april/redesign',
  },
  {
    to: '2016',
    title: '2016',
    absolute: '/posts/2015/december/2016',
  },
  {
    to: 'blogging-vs-working',
    title: 'Blogging vs Working',
    absolute: '/posts/2015/december/blogging-vs-working',
  },
  {
    to: '2015',
    title: '2015',
    absolute: '/posts/2015/december/2015',
  },
  {
    to: 'family-time',
    title: 'Family Time',
    absolute: '/posts/2015/november/family-time',
  },
  {
    to: 'a-new-resume',
    title: 'A New Resume',
    absolute: '/posts/2015/november/a-new-resume',
  },
  {
    to: 'thanksgiving',
    title: 'Thanksgiving',
    absolute: '/posts/2015/november/thanksgiving',
  },
  {
    to: 'the-social-max',
    title: 'The Social Max',
    absolute: '/posts/2015/december/the-social-max',
  },
  {
    to: 'powerpoint',
    title: 'Powerpoint',
    absolute: '/posts/2015/december/powerpoint',
  },
  {
    to: 'weekend-projects',
    title: 'Weekend Projects',
    absolute: '/posts/2015/november/weekend-projects',
  },
  {
    to: 'message',
    title: 'Message',
    absolute: '/posts/2015/november/message',
  },
  {
    to: 'a-new-look',
    title: 'A New Look',
    absolute: '/posts/2015/november/a-new-look',
  },
]
*/
