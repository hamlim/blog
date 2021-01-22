const frontmatter = require('./utils/frontmatter')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [frontmatter],
  },
})
module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
  experimental: {
    reactRefresh: true,
    modern: true,
    reactMode: 'concurrent',
  },
})
