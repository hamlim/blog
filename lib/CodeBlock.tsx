import { Box } from '@ds-pack/daisyui'
import { Code } from 'bright'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

export default async function CodeBlock({ children, className }) {
  let lang = className ? className.split('-')[1] : 'typescript'
  if (lang === 'tsx' || lang === 'jsx' || lang === 'js') {
    lang = 'typescript'
  } else if (lang === 'sh') {
    lang = 'bash'
  }

  let codeToHighlight = children

  let highlight
  if (children.startsWith('// ==highlight:')) {
    let [highlightHint, ...lines] = codeToHighlight.split('\n')
    highlight = highlightHint.replace('// ==highlight:', '')
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
    <Box>
      {/* @ts-expect-error Server Component */}
      <Code lang={lang}>{codeToHighlight}</Code>
    </Box>
  )
}
