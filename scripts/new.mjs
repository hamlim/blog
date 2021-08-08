import fs from 'fs'
import path from 'path'

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
  let [name, val] = curr.split('=')
  return {
    ...acc,
    [name]: val,
  }
}, {})

console.log(args)

if (!args.title || !args.slug) {
  if (!args.title && !args.slug) {
    console.log('')
    console.log(`Error: Missing both \`title\` and \`slug\` arguments.`)
    console.log('')
    console.log(
      'Try re-running and adding:\n\n\t\ttitle="your title" slug="your-slug"',
    )
    console.log('')
    process.exit(1)
  } else if (!args.title) {
    console.log('')
    console.log(`Error: Missing \`title\` argument.`)
    console.log('')
    console.log('Try re-running and adding:\n\n\t\ttitle="your title"')
    console.log('')
    process.exit(1)
  } else {
    console.log('')
    console.log(`Error: Missing \`slug\` argument.`)
    console.log('')
    console.log('Try re-running and adding:\n\n\t\tslug="your-slug"')
    console.log('')
    process.exit(1)
  }
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
  './pages/posts/',
  `${year}`,
  `${month.toLowerCase()}`,
)

fs.mkdirSync(folderPath, { recursive: true })

let template = `---
title: '${args.title}'
date: ${publishDate}
time: ${time}
tags:
  - TODO
draft: false
highlight: false
---

`

fs.writeFileSync(path.join(folderPath, `${args.slug}.md`), template)
