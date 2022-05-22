// cachebuster - v34
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

export let allPosts = postData as Array<Post>
