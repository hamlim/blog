import { Code } from 'bright'
import type { BrightProps, Extension } from 'bright'
import { collapse } from './extensions/collapse-extension'
import { CopyCode } from './extensions/copy-code'
import { getThemeCookie } from '../lib/theme-cookie'
import { themeToCodeTheme } from '../lib/themes'
import LiveCode from '../lib/LiveCode'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

interface Props extends Partial<BrightProps> {
  children: string
}

let defaultExtensions: Array<Extension> = [collapse]

let metaComments = {
  live: `// ==live==`,
  highlight: `// ==highlight==`,
}

export async function CodeBlock(props: Props) {
  let theme = getThemeCookie()

  let codeTheme = themeToCodeTheme.light.includes(theme) ? 'light' : 'dark'

  let lang = props.className ? props.className.split('-')[1] : 'typescript'
  if (lang === 'tsx' || lang === 'jsx' || lang === 'js') {
    lang = 'typescript'
  } else if (lang === 'sh') {
    lang = 'bash'
  }

  let codeToHighlight = props.children

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
    <div className="relative overflow-scroll" data-theme={codeTheme}>
      {/* @ts-expect-error Server Component */}
      <Code
        extensions={defaultExtensions}
        lineNumbers
        lang={lang}
        {...props}
        style={{ margin: 0, ...props.style }}
      >
        {codeToHighlight}
      </Code>
      <CopyCode code={props.children} />
    </div>
  )
}
