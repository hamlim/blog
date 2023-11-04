export default {
  experimental: {
    serverComponentsExternalPackages: ['shiki', 'vscode-oniguruma'],
  },
  modularizeImports: {
    '@ds-pack/daisyui': {
      transform: '@ds-pack/daisyui/dist/{{member}}',
    },
  },
}
