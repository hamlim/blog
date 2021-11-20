// Not Finished!

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

let titles = []

let stubs = {
  drafts: [],
  missingPosts: [],
}

// this doesn't work
// TODO: find a better way to match on [[page links]]
let titleRegex = /\[\[(.*)\]\]/g

mdxes.forEach((postPath) => {
  let content = fs.readFileSync(postPath, 'utf-8')
  let { data: { title, draft } = {} } = matter(content)
  titles.push(title)
  if (draft) {
    stubs.drafts.push({ postPath, title })
  }
})
