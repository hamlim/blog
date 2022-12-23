export default {
  experimental: {
    appDir: true,
    runtime: 'edge', // 'node.js' (default) | 'experimental-edge'
  },
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
  },
}
