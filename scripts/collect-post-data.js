// This file is prevaled where imported
// @ts-ignore
let fs = require('fs')
let path = require('path')
let matter = require('gray-matter')
const readingTime = require('reading-time')

function getMonth(date) {
  return {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }[date.getMonth()]
}

function searchRecursive(dir, pattern) {
  // This is where we store pattern matches of all files inside the directory
  let results = []

  // Read contents of directory
  fs.readdirSync(dir).forEach(function (dirInner) {
    // Obtain absolute path
    dirInner = path.resolve(dir, dirInner)

    // Get stats to determine if path is a directory or a file
    let stat = fs.statSync(dirInner)

    // If path is a directory, scan it and combine results
    if (stat.isDirectory()) {
      results = results.concat(searchRecursive(dirInner, pattern))
    }

    // If path is a file and ends with pattern then push it onto results
    if (stat.isFile() && dirInner.endsWith(pattern)) {
      results.push(dirInner)
    }
  })

  return results
}

let mdxes = searchRecursive('./pages/posts', '.md')

module.exports = mdxes
  .map((filepath) => {
    let filename = filepath
      .split('/')
      [filepath.split('/').length - 1].split('.')[0]
    filename = filename
      .replace(/-/g, ' ')
      .split(' ')
      .map((hunk) => hunk[0].toUpperCase() + hunk.slice(1))
      .join(' ')

    let fileContent = fs.readFileSync(filepath, 'utf8')

    const { data: frontMatter = {}, content } = matter(fileContent)
    const { text } = readingTime(content)
    frontMatter.timeToRead = text

    let postDate = new Date(frontMatter.date.replace(/,|th|st|rd/g, ''))

    let month = getMonth(postDate)

    let year = postDate.getFullYear()

    return {
      absolute: `/posts/${filepath.split('pages/posts/')[1].split('.md')[0]}`,
      title: frontMatter.title || filename,
      frontMatter,
      month,
      year,
    }
  })
  .sort((a, b) => {
    let aDate = a.frontMatter.date
      ? new Date(a.frontMatter.date.replace(/,|th|st|rd/g, ''))
      : 0
    let bDate = b.frontMatter.date
      ? new Date(b.frontMatter.date.replace(/,|th|st|rd/g, ''))
      : 0
    return aDate > bDate ? -1 : bDate > aDate ? 1 : 0
  })
