export default {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['shiki', 'vscode-oniguruma'],
  },
  modularizeImports: {
    '@ds-pack/components': {
      transform: '@ds-pack/components/dist/{{member}}',
      skipDefaultConversion: true,
    },
  },
}
