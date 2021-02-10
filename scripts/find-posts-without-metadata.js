// This file is prevaled where imported
// @ts-ignore
let fs = require('fs')
let path = require('path')
let matter = require('gray-matter')
const readingTime = require('reading-time')

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

    const { data: frontMatter } = matter(fileContent)
    return {
      filepath,
      hasFrontmatter: Object.keys(frontMatter).length > 0,
    }
  })
  .filter((post) => !post.hasFrontmatter)
