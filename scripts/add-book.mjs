import { execSync } from 'child_process'
import fs from 'fs'
import originalBookshelf from '../public/bookshelf.json' assert { type: 'json' }

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
  console.log('yarn add-book ...')
  console.log('')
  console.log(' help                              Prints this dialog!')
  console.log(' debug                             Logs out debugging info')
  console.log(' title="<title>"                   Title of the Book')
  console.log(' author="<slug>"                   Author of the book')
  console.log(' url="<tags>"                      URL to the book on GoodReads')
  console.log(
    ' status="<reading|read|to-read>"   Status of the book (optional, defaults to "to-read")',
  )
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

if (!args.status) {
  args.status = 'to-read'
}

if (!args.title || !args.author || !args.url) {
  missingArg(
    [
      { val: args.title, name: 'title' },
      { val: args.author, name: 'author' },
      { val: args.url, name: 'url' },
    ]
      .filter(({ val }) => !val)
      .map(({ name }) => name),
  )
  process.exit(1)
}

let newBookshelf = [
  ...originalBookshelf,
  {
    title: args.title,
    author: args.author,
    url: args.url,
    status: args.status,
  },
]

fs.writeFileSync('./public/bookshelf.json', JSON.stringify(newBookshelf))

execSync(`yarn format`)
