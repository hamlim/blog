import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'
import fastGlob from 'fast-glob'

let cssJSFiles = fastGlob
  .sync('**/*.css.ts')
  .filter((path) => !path.includes('node_modules'))
  .filter((path) => !path.includes('old-junk'))

/**
 * @type import('rollup').RollupOptions
 */
export default {
  plugins: [
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [
          {
            name: 'empty-css-imports',
            setup(build) {
              build.onLoad({ filter: /\.css$/ }, () => ({ contents: '' }))
            },
          },
        ],
      },
    }),
  ],
  input: cssJSFiles,
  output: {
    dir: './styles',
    preserveModules: true,
    // banner: "'use client';",
    entryFileNames({ name }) {
      if (name) {
        return name.replace('.css', '.js')
      }
      return ''
    },
    assetFileNames({ name }) {
      if (name) {
        if (name.endsWith('.css.ts.vanilla.css')) {
          return name.replace('.css.ts.vanilla.css', '.css')
        }
      }
      return ''
    },
  },
}
