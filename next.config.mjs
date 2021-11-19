import frontmatter from './utils/frontmatter.mjs'

import createWithMdx from '@next/mdx'

let withMDX = createWithMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [frontmatter],
  },
})

export default withMDX({
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
  experimental: {
    reactRefresh: true,
    modern: true,
    reactRoot: 'concurrent',
  },
})
