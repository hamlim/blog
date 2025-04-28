import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, dirname, join, relative } from 'node:path'
import { glob } from 'glob'

let feedData = JSON.parse(await readFile('./public/feed.json', 'utf-8'))

function extractFrontmatter(post: any) {
  let timestamp = new Date(post.publishedDate).getTime()
  let cleanPath = post.path.replace(/\.md$/, '').replace(/^\/posts/, '')

  return `---
title: "${post.title}"
slug: "${post.slug}"
path: "${cleanPath}"
date: ${timestamp}
status: "${post.status}"
type: "blog-post"
tags: ${JSON.stringify(post.tags)}
description: "${post.description || ''}"
month: "${post.month}"
year: ${post.year}
---
`
}

function isUniqueComponentImport(line: string) {
  return (
    line.includes('import') &&
    !line.includes('BlogPage') &&
    !line.includes('fetchManifest') &&
    !line.includes('formatMetadata')
  )
}

async function transformMdxFile(sourcePath: string, targetPath: string) {
  let content = await readFile(sourcePath, 'utf-8')
  let lines = content.split('\n')
  let transformedLines = []
  let id = ''

  // Extract the id from the file
  for (let line of lines) {
    if (line.includes('export let id')) {
      // More robust regex that handles whitespace and different quote types
      let match = line.match(/export\s+let\s+id\s*=\s*["']([^"']+)["']/)
      if (match) {
        id = match[1]
        console.log(`Found ID in file ${sourcePath}: ${id}`)
        break
      }
    }
  }

  if (!id) {
    console.error(`No ID found in file: ${sourcePath}`)
    // Let's read the first few lines of the file to debug
    console.error('First 10 lines of file:')
    for (let line of lines.slice(0, 10)) {
      console.error(line)
    }
    return
  }

  // Find the post in feed.json
  let post = feedData.posts.find((p: any) => p.uuid === id)
  if (!post) {
    console.error(
      `Could not find post with id ${id} in feed.json for file: ${sourcePath}`,
    )
    // Log some sample UUIDs from feed.json for comparison
    console.error('Sample UUIDs from feed.json:')
    for (let p of feedData.posts.slice(0, 5)) {
      console.error(`- ${p.uuid} (${p.title})`)
    }
    console.error(`\nTotal posts in feed.json: ${feedData.posts.length}`)
    return
  }

  console.log(`Found matching post: "${post.title}" (${post.uuid})`)

  // Add frontmatter
  transformedLines.push(extractFrontmatter(post))

  // Process the content
  let inBlogPage = false
  let contentStarted = false
  for (let line of lines) {
    // Skip imports unless they're unique components
    if (line.startsWith('import')) {
      if (isUniqueComponentImport(line)) {
        transformedLines.push(line)
      }
      continue
    }

    // Skip id and generateMetadata exports
    if (
      line.startsWith('export let id =') ||
      line.startsWith('export async function generateMetadata')
    ) {
      continue
    }

    // Handle BlogPage component
    if (line.includes('<BlogPage')) {
      inBlogPage = true
      contentStarted = true
      continue
    }
    if (inBlogPage && line.includes('</BlogPage>')) {
      inBlogPage = false
      continue
    }
    if (inBlogPage) {
      transformedLines.push(line)
    }
  }

  // Ensure target directory exists
  await mkdir(dirname(targetPath), { recursive: true })

  // Write transformed content
  await writeFile(targetPath, transformedLines.join('\n'))
}

async function main() {
  // Find all MDX files in the blog posts directory
  let files = await glob('app/blog/(blog-posts)/**/*.mdx')
  let processedCount = 0
  let errorCount = 0

  console.log(`Found ${files.length} MDX files to process`)
  console.log(`Feed.json contains ${feedData.posts.length} posts\n`)

  for (let file of files) {
    // Get the parent directory path without the last segment
    let relativePath = relative('app/blog/(blog-posts)', dirname(file))
    let parentDirPath = dirname(relativePath)
    let filename = basename(dirname(file))
    let targetPath = join('export', parentDirPath, `${filename}.mdx`)

    console.log(`\nProcessing ${file} to ${targetPath}`)
    try {
      await transformMdxFile(file, targetPath)
      processedCount++
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
      errorCount++
    }
  }

  console.log(`\nProcessing complete!`)
  console.log(`Successfully processed: ${processedCount} files`)
  console.log(`Errors encountered: ${errorCount} files`)
}

main().catch(console.error)
