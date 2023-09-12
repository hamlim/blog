/**
 * Workflow:
 *
 * - Create a new notebook entry
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
 * - New markdown file in `public/notebook/<year>/<month>/<slug>.md`
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import originalManifest from '../public/feed.json' assert { type: 'json' }

let currentDate = new Date()

let formatter = new Intl.DateTimeFormat('en', {
  month: 'long',
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
})

let res = formatter.format(currentDate)

let [dayOfWeek, monthAndDate, year, time] = res.split(', ')

let [month, date] = monthAndDate.split(' ')

let ordinal = (() => {
  if ([1, 21, 31].includes(Number(date))) {
    return 'st'
  } else if ([2, 22].includes(Number(date))) {
    return 'nd'
  } else if ([3, 23].includes(Number(date))) {
    return 'rd'
  } else {
    return 'th'
  }
})()

let publishDate = `${month} ${date}${ordinal}, ${year}`

let args = process.argv.slice(2).reduce((acc, curr) => {
  if (curr.includes('=')) {
    let [name, val] = curr.split('=')
    return {
      ...acc,
      [name]: val,
    }
  }
  return {
    ...acc,
    [curr]: true,
  }
}, {})

if (args.help) {
  console.log('')
  console.log('bun new-note ...')
  console.log('')
  console.log(' help            Prints this dialog!')
  console.log(' debug           Logs out debugging info')
  console.log(' title="<title>" sets the title')
  console.log(' slug="<slug>"   sets the slug')
  console.log(' tags="<tags>"   sets the tags')
  console.log('')
  process.exit(1)
}

if (args.debug) {
  console.log(args)
}

function missingArg(args) {
  console.log('')
  console.log(
    `Error: Missing ${args.map((name) => `\`${name}\``).join(', ')} argument${
      args.length > 1 ? 's' : ''
    }.`,
  )
  console.log('')
  console.log(`Try re-running the command and provide: ${args.join(', ')}`)
  console.log('')
}

if (!args.title || !args.slug || !args.tags) {
  missingArg(
    [
      { val: args.title, name: 'title' },
      { val: args.slug, name: 'slug' },
      { val: args.tags, name: 'tags' },
    ]
      .filter(({ val }) => !val)
      .map(({ name }) => name),
  )
  process.exit(1)
}

if (/[^a-zA-Z0-9|-]/.exec(args.slug)) {
  console.log('')
  console.log(
    `Error: \`slug\` argument is malformed. Only use alphanumeric characters and dashes.`,
  )
  console.log('')
  console.log(`You provided:\n\t\t\`slug="${args.slug}"\``)
  console.log('')
  process.exit(1)
}

// mkdirp
let folderPath = path.join(
  './public/notebook/',
  `${year}`,
  `${month.toLowerCase()}`,
)

fs.mkdirSync(folderPath, { recursive: true })

let template = `> Note: This post is a draft.

<Spacer />

START_HERE
`

fs.writeFileSync(path.join(folderPath, `${args.slug}.md`), template)

let newManifest = {
  ...originalManifest,
  notebookEntries: [
    ...originalManifest.notebookEntries,
    {
      id: originalManifest.notebookEntries.length,
      title: args.title,
      path: `/notebook/${year}/${month.toLowerCase()}/${args.slug}.md`,
      slug: args.slug,
      date: publishDate,
      time,
      year,
      month,
      tags: args.tags.split(','),
      status: 'draft',
    },
  ],
}

fs.writeFileSync('./public/feed.json', JSON.stringify(newManifest))

execSync(`bun format`)
