/**
 * Workflow:
 *
 * - Create a new post
 *
 * Key data we need:
 * - title
 * - slug
 * - status
 * - tags
 *
 * Data we can import:
 * - feed.json
 *   - for id usecase
 *
 * What do we output:
 * - Changes to `public/feed.json`
 * - New markdown file in `public/posts/<year>/<month>/<slug>.md`
 */

if (typeof Bun === 'undefined') {
  throw new Error(`This script is meant to be run with Bun.`);
}

import { execSync } from 'child_process';
import { mkdir } from 'node:fs/promises';
import path from 'path';
import originalManifest from '../public/feed.json' assert { type: 'json' };

let currentDate = new Date();

let formatter = new Intl.DateTimeFormat('en', {
  month: 'long',
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

let res = formatter.format(currentDate);

let [dayOfWeek, monthAndDate, yearAndTime] = res.split(', ');

let [year, time] = yearAndTime.split(' at ');

let [month, date] = monthAndDate.split(' ');

let ordinal = (() => {
  if ([1, 21, 31].includes(Number(date))) {
    return 'st';
  } else if ([2, 22].includes(Number(date))) {
    return 'nd';
  } else if ([3, 23].includes(Number(date))) {
    return 'rd';
  } else {
    return 'th';
  }
})();

let publishDate = `${month} ${date}${ordinal}, ${year}`;

let args = process.argv.slice(2).reduce((acc, curr) => {
  if (curr.includes('=')) {
    let [name, val] = curr.split('=');
    return {
      ...acc,
      [name]: val,
    };
  }
  return {
    ...acc,
    [curr]: true,
  };
}, {});

if (args.help) {
  console.log('');
  console.log('bun new-post ...');
  console.log('');
  console.log(' help                          Prints this dialog!');
  console.log(' debug                         Logs out debugging info');
  console.log(' title="<title>"               sets the title');
  console.log(' slug="<slug>"                 sets the slug');
  console.log(' tags="<tags>"                 sets the tags');
  console.log(' description="<description>"   sets the description');
  console.log('');
  process.exit(1);
}

if (args.debug) {
  console.log(args);
}

function missingArg(args) {
  console.log('');
  console.log(
    `Error: Missing ${args.map((name) => `\`${name}\``).join(', ')} argument${args.length > 1 ? 's' : ''}.`,
  );
  console.log('');
  console.log(`Try re-running the command and provide: ${args.join(', ')}`);
  console.log('');
}

if (!args.title || !args.slug || !args.tags || !args.description) {
  missingArg(
    [
      { val: args.title, name: 'title' },
      { val: args.slug, name: 'slug' },
      { val: args.tags, name: 'tags' },
      { val: args.description, name: 'description' },
    ]
      .filter(({ val }) => !val)
      .map(({ name }) => name),
  );
  process.exit(1);
}

if (/[^a-zA-Z0-9|-]/.exec(args.slug)) {
  console.log('');
  console.log(
    `Error: \`slug\` argument is malformed. Only use alphanumeric characters and dashes.`,
  );
  console.log('');
  console.log(`You provided:\n\t\t\`slug="${args.slug}"\``);
  console.log('');
  process.exit(1);
}

// mkdirp
let folderPath = path.join(
  process.cwd(),
  './app/blog/(blog-posts)',
  `${year}`,
  `${month.toLowerCase()}`,
);

await mkdir(folderPath, { recursive: true });

let postMeta = {
  id: originalManifest.posts.length,
  title: args.title,
  path: `/posts/${year}/${month.toLowerCase()}/${args.slug}.md`,
  slug: args.slug,
  date: publishDate,
  time,
  month: month.toLowerCase(),
  year,
  tags: args.tags.split(',').map((tag) => tag.trim()),
  status: 'draft',
};

let uuid = Bun.hash(JSON.stringify(postMeta));
postMeta.uuid = `${uuid}`;

let template = `Start writing`;
let pageTemplate = `import BlogPage from 'app/blog/BlogPage';
import Content from './content.mdx';
import { fetchManifest } from '@lib/fetch-manifest';
import {formatBlogPostMetadata} from 'lib/formatMetadata';

let id = "${postMeta.uuid}";

export default function Page() {
  return (
    // @ts-expect-error - RSC
    <BlogPage id={id}>
      <Content />
    </BlogPage>
  );
}

export async function generateMetadata() {
  let mainfest = await fetchManifest();
  let post = mainfest.posts.find(p => p.uuid === id);

  return formatBlogPostMetadata({meta: post});
};
`;

await Bun.write(path.join(folderPath, `${args.slug}/content.mdx`), template);
await Bun.write(path.join(folderPath, `${args.slug}/page.tsx`), pageTemplate);

let newManifest = {
  ...originalManifest,
  posts: [
    ...originalManifest.posts,
    postMeta,
  ],
};

await Bun.write('./public/feed.json', JSON.stringify(newManifest));

execSync(`bun run format`);
