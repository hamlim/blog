// Source: https://gist.github.com/sudkumar/70834062f9243558846249f2c2f98902
// From: https://github.com/vercel/next.js/issues/10337

// helps us in parsing the frontmatter from text content
import matter from 'gray-matter'
// helps us safely stringigy the frontmatter as a json object
import stringifyObject from 'stringify-object'
// helps us in getting the reading time for a given text
import readingTime from 'reading-time'

// please make sure you have installed these dependencies
// before proceeding further, or remove the require statements
// that you don't use

/**
 * This is a plugin for remark in mdx.
 * This should be a function that may take some options and
 * should return a function with the following signature
 * @param tree - the MDXAST
 * @param file - the file node
 * @return void - it should mutate the tree if needed
 */
export default () => (tree, file) => {
  // we will get the frontMatter using `gray-matter`
  const { data: frontMatter, content } = matter(file.contents)
  // the frontMatter holds the json object of the frontmatter
  // the content holds the text of markdown except frontmatter

  // we can do whatever we want with the frontmatter
  // like, adding the time to read, formatting the date to display,
  // adding a short description using the content
  const { text } = readingTime(content)
  frontMatter.timeToRead = text

  // finally we will add a `export` node to the tree
  tree.children.push({
    type: 'export',
    value: `export const frontMatter = ${stringifyObject(frontMatter)}`,
  })
  // Assign as a static so we can read from it in `_app.tsx`
  tree.children.push({
    type: 'export',
    value: `MDXContent.frontMatter = frontMatter;`,
  })
  // now `frontMatter` will be available to use in our codebase
  // we essentically changed the frontmatter of yml form to a
  // constant and exported it

  // now we need to remove the frontmatter from the tree
  // because it has already been processed by mdx and nodes
  // have been created for it assuming it was a markdown content
  //
  // remove the thematicBreak "<hr />" to next immediate thematicBreak
  // --- => thematicBreak
  // title: this
  // date: 2020-12-12 => becomes heading
  // ---
  if (tree.children[0].type === 'thematicBreak') {
    const nextThematicBreak = tree.children.findIndex(
      (t, i) => i > 0 && t.type === 'thematicBreak',
    )
    if (nextThematicBreak !== -1) {
      // we will mutate the tree.children by removing these nodes
      tree.children.splice(0, nextThematicBreak + 1)
    }
  }
}
