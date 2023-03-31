let path = require('path')

module.exports = {
  content: [
    './app/**/*.tsx',
    './lib/**/*.tsx',
    './ui/**/*.tsx',
    path.join(path.dirname(require.resolve('@ds-pack/daisyui')), '/**/*.js'),
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    logs: false,
  },
}
