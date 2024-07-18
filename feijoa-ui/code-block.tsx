import { Code } from 'bright'
import type { BrightProps, Extension } from 'bright'
import LiveCode from '../lib/LiveCode'
import { collapse } from './extensions/collapse-extension'
import { CopyCode } from './extensions/copy-code'
import { ThemeWrapper } from './extensions/theme-wrapper'

Code.theme = {
  dark: 'github-dark-dimmed',
  light: 'github-light',
}

// I have committed serious crimes
type Props = (
  | {
      children: {
        props: {
          className?: string
          children?: string
          style?: Record<string, unknown>
        }
      }
    }
  | { children: string; className?: string }
) &
  Partial<BrightProps>

let defaultExtensions: Array<Extension> = [collapse]

let metaComments = {
  live: `// ==live==`,
  highlight: `// ==highlight==`,
}

export async function CodeBlock(props: Props) {
  let code: string
  let className: string
  if (typeof props.children === 'string') {
    code = props.children
    className = props.className
  } else {
    code = props.children.props.children
    className = props.children.props.className
  }

  if (className.split(' ').length > 1) {
    className = className.split(' ').find((c) => c.startsWith('lang-'))
  }

  let lang = className ? className.split('-')[1] : 'typescript'
  if (lang === 'tsx' || lang === 'jsx' || lang === 'js') {
    lang = 'typescript'
  } else if (lang === 'sh' || lang === 'shell') {
    lang = 'bash'
  }

  let codeToHighlight = code
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
    return <LiveCode code={rest.join('\n').slice(0, -1)} {...metaProps} />
  }

  let highlight: string | Array<unknown>
  if (codeToHighlight.startsWith(metaComments.highlight)) {
    let [meta, ...lines] = codeToHighlight.split('\n')
    highlight = meta.replace(metaComments.highlight, '') as string
    highlight = highlight.split(',').map((hl) => {
      if (hl.includes('-')) {
        return hl.split('-').map(Number)
      }
      return Number(hl)
    })
    codeToHighlight = lines.join('\n')
  }
  codeToHighlight = codeToHighlight.endsWith('\n')
    ? // Remove the last new line character
      codeToHighlight.slice(0, -1)
    : codeToHighlight

  return (
    <ThemeWrapper className="relative overflow-scroll">
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
      <CopyCode code={code} />
    </ThemeWrapper>
  )
}
