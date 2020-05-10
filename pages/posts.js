import { lazy } from 'react'

export default [
  {
    to: 'a-note-on-consistency',
    title: 'A Note On Consistency',
    component: lazy(() => import('./posts/2020/may/a-note-on-consistency.mdx')),
  },
  {
    to: 'a-note-on-anti-patterns',
    title: 'A Note On Anti-Patterns',
    component: lazy(() =>
      import('./posts/2020/april/a-note-on-anti-patterns.mdx'),
    ),
  },
  {
    to: 'a-note-on-meetings',
    title: 'A Note On Meetings',
    component: lazy(() => import('./posts/2020/april/a-note-on-meetings.mdx')),
  },
  {
    to: 'the-rabbit-hole',
    title: 'The Rabbit Hole',
    component: lazy(() => import('./posts/2020/april/the-rabbit-hole.mdx')),
  },
  {
    to: 'stateful-providers',
    title: 'Stateful Providers',
    component: lazy(() => import('./posts/2020/march/stateful-providers.mdx')),
  },
  {
    to: 'draft-pull-requests',
    title: 'Draft Pull Requests',
    component: lazy(() => import('./posts/2020/march/draft-pull-requests.mdx')),
  },
  {
    to: 'february-20-2020',
    title: 'February 20, 2020',
    component: lazy(() => import('./posts/2020/february/back-bay-fens.mdx')),
  },
  {
    to: 'bend-2019',
    title: 'Summer 2019 - Bend Oregon',
    component: lazy(() => import('./posts/2019/july/bend.mdx')),
  },
  {
    to: 'theme-first-ui-development',
    title: 'Theme First UI Development',
    component: lazy(() =>
      import('./posts/2019/july/theme-first-ui-development.mdx'),
    ),
  },
  {
    to: 'deploying-via-github-actions',
    title: 'Deploying Automatically using GitHub Actions',
    component: lazy(() =>
      import('./posts/2019/june/deploying-with-github-actions.mdx'),
    ),
  },
  {
    to: 'simpler-and-smaller',
    title: 'Simpler and Smaller',
    component: lazy(() => import('./posts/2019/june/simpler-and-smaller.mdx')),
  },
  {
    to: 'maintenance-costs',
    title: 'Maintenance Costs',
    component: lazy(() => import('./posts/2019/may/maintenance-costs.mdx')),
  },
  {
    to: 'snapshot-testing',
    title: 'Snapshot Testing',
    component: lazy(() => import('./posts/2019/march/snapshot-testing.mdx')),
  },
  {
    to: 'hooks-tips-2',
    title: 'Hooks Tips Ep. 2 - Migrating Instance Variables',
    component: lazy(() =>
      import('./posts/2019/february/hooks-tips-instance-variables.mdx'),
    ),
  },
  {
    to: 'start-small-accept-change',
    title: 'Start Small, Accept Change',
    component: lazy(() => import('./posts/2019/february/start-small.mdx')),
  },
  {
    to: 'usereducer-do-not-usestate',
    title: "useReducer, don't useState",
    component: lazy(() =>
      import('./posts/2019/february/why-you-should-useReducer.mdx'),
    ),
  },
  {
    to: 'hooks-tips-1',
    title: 'Hooks Tips Ep. 1 - The Dependency Array',
    component: lazy(() =>
      import('./posts/2019/february/hooks-tips-dependency-array.mdx'),
    ),
  },
  {
    to: 'building-a-live-editor',
    title: 'Building a Live Editor',
    component: lazy(() =>
      import('./posts/2019/february/building-a-live-editor.mdx'),
    ),
  },
  {
    to: 'react-error-boundaries',
    title: 'React Error Boundaries',
    component: lazy(() =>
      import('./posts/2019/january/react-error-boundaries.mdx'),
    ),
  },
  {
    to: 'testing-software',
    title: 'Testing Software',
    component: lazy(() => import('./posts/2018/december/testing-software.mdx')),
  },
  {
    to: 'starting-fresh',
    title: 'Starting Fresh',
    component: lazy(() => import('./posts/2018/december/starting-fresh.mdx')),
  },
  {
    to: 'october-4th',
    title: 'October 4th',
    component: lazy(() => import('./posts/2016/october/october-4th.mdx')),
  },
  {
    to: 'css-debate',
    title: 'CSS Debate',
    component: lazy(() => import('./posts/2016/october/css-debate.mdx')),
  },
  {
    to: 'links',
    title: 'Links',
    component: lazy(() => import('./posts/2016/november/links.mdx')),
  },
  {
    to: 'my-first-project-of-2016',
    title: 'My First Project of 2016',
    component: lazy(() =>
      import('./posts/2016/january/my-first-project-of-2016.mdx'),
    ),
  },
  {
    to: 'dji-vs-gopro',
    title: 'DJI vs GoPro',
    component: lazy(() => import('./posts/2016/january/dji-vs-gopro.mdx')),
  },
  {
    to: 'clientside',
    title: 'Clientside',
    component: lazy(() => import('./posts/2016/january/clientside.mdx')),
  },
  {
    to: 'building-in-2016',
    title: 'Building in 2016',
    component: lazy(() => import('./posts/2016/january/building-in-2016.mdx')),
  },
  {
    to: 'afraid',
    title: 'Afraid',
    component: lazy(() => import('./posts/2016/january/afriad.mdx')),
  },
  {
    to: '10,000-characters',
    title: '10,000 Characters',
    component: lazy(() => import('./posts/2016/january/10000-charcters.mdx')),
  },
  {
    to: 'redesign-v5',
    title: 'Redesign V5',
    component: lazy(() => import('./posts/2016/august/redesign-v5.mdx')),
  },
  {
    to: 'pull-quotes',
    title: 'Pull Quotes',
    component: lazy(() => import('./posts/2016/august/pull-quotes.mdx')),
  },
  {
    to: 'my-new-website',
    title: 'My New Website',
    component: lazy(() => import('./posts/2016/august/my-new-website.mdx')),
  },
  {
    to: 'august',
    title: 'August',
    component: lazy(() => import('./posts/2016/august/august.mdx')),
  },
  {
    to: 'attribute-selectors',
    title: 'Attribute Selectors',
    component: lazy(() =>
      import('./posts/2016/august/attribute-selectors.mdx'),
    ),
  },
  {
    to: 'redesign',
    title: 'Redesign',
    component: lazy(() => import('./posts/2016/april/redesign.mdx')),
  },
  {
    to: '2016',
    title: '2016',
    component: lazy(() => import('./posts/2015/december/2016.mdx')),
  },
  {
    to: 'blogging-vs-working',
    title: 'Blogging vs Working',
    component: lazy(() =>
      import('./posts/2015/december/blogging-vs-working.mdx'),
    ),
  },
  {
    to: '2015',
    title: '2015',
    component: lazy(() => import('./posts/2015/december/2015.mdx')),
  },
  {
    to: 'family-time',
    title: 'Family Time',
    component: lazy(() => import('./posts/2015/november/family-time.mdx')),
  },
  {
    to: 'a-new-resume',
    title: 'A New Resume',
    component: lazy(() => import('./posts/2015/november/a-new-resume.mdx')),
  },
  {
    to: 'thanksgiving',
    title: 'Thanksgiving',
    component: lazy(() => import('./posts/2015/november/thanksgiving.mdx')),
  },
  {
    to: 'the-social-max',
    title: 'The Social Max',
    component: lazy(() => import('./posts/2015/december/the-social-max.mdx')),
  },
  {
    to: 'powerpoint',
    title: 'Powerpoint',
    component: lazy(() => import('./posts/2015/december/powerpoint.mdx')),
  },
  {
    to: 'weekend-projects',
    title: 'Weekend Projects',
    component: lazy(() => import('./posts/2015/november/weekend-projects.mdx')),
  },
  {
    to: 'message',
    title: 'Message',
    component: lazy(() => import('./posts/2015/november/message.mdx')),
  },
  {
    to: 'a-new-look',
    title: 'A New Look',
    component: lazy(() => import('./posts/2015/november/a-new-look.mdx')),
  },
]
