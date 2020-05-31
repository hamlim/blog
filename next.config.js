const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
  experimental: {
    reactRefresh: true,
    modern: true,
    reactMode: 'concurrent',
  },
})
