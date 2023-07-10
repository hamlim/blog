export default {
  experimental: {
    serverComponentsExternalPackages: ['shiki', 'vscode-oniguruma'],
    serverActions: true,
  },
  modularizeImports: {
    '@ds-pack/daisyui': {
      transform: '@ds-pack/daisyui/dist/{{member}}',
    },
  },
}
