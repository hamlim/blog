import frontmatter from './utils/frontmatter.mjs'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import createWithMdx from '@next/mdx'

let withVanillaExtract = createVanillaExtractPlugin()

let withMDX = createWithMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [frontmatter],
  },
})

export default withVanillaExtract(
  withMDX({
    pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
    experimental: {
      reactRefresh: true,
      modern: true,
      reactRoot: 'concurrent',
    },
  }),
)
