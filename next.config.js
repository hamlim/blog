const withMDX = require('@next/mdx')()
module.exports = withMDX({
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  experimental: {
    reactRefresh: true,
    modern: true,
    reactMode: 'concurrent',
  },
})
