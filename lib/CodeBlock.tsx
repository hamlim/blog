import { Box } from '@ds-pack/daisyui'
import { Code } from 'bright'
import { getThemeCookie } from './theme-cookie'
import { themeToCodeTheme } from './themes'
import LiveCode from './LiveCode'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

let metaComments = {
  live: `// ==live==`,
  highlight: `// ==highlight==`,
}

export default async function CodeBlock({ children, className }) {
  let theme = getThemeCookie()

  let codeTheme = themeToCodeTheme.light.includes(theme) ? 'light' : 'dark'

  let lang = className ? className.split('-')[1] : 'typescript'
  if (lang === 'tsx' || lang === 'jsx' || lang === 'js') {
    lang = 'typescript'
  } else if (lang === 'sh') {
    lang = 'bash'
  }

  let codeToHighlight = children

  if (codeToHighlight.startsWith(metaComments.live)) {
    let [meta, ...rest] = codeToHighlight.split('\n')
    let entries = meta
      .replace(metaComments.live, '')
      .trim()
      .split(' ')
      .filter(Boolean)
      .map((opt) => {
        let [key, val] = opt.split('=')
        return [key, JSON.parse(val)]
      })
    let metaProps = Object.fromEntries(entries)
    return (
      <LiveCode
        code={rest.join('\n').slice(0, -1)}
        {...metaProps}
        theme={codeTheme}
      />
    )
  }

  let highlight
  if (codeToHighlight.startsWith(metaComments.highlight)) {
    let [meta, ...lines] = codeToHighlight.split('\n')
    highlight = meta.replace(metaComments.highlight, '')
    highlight = highlight.split(',').map((hl) => {
      if (hl.includes('-')) {
        return hl.split('-').map(Number)
      }
      return Number(hl)
    })
    codeToHighlight = lines.join('\n')
  }
  codeToHighlight = codeToHighlight
    // Remove the last new line character
    .slice(0, -1)

  return (
    <Box data-theme={codeTheme}>
      {/* @ts-expect-error Server Component */}
      <Code lang={lang}>{codeToHighlight}</Code>
    </Box>
  )
}
