// @TODO: Line highlighting!

import { Box } from '@ds-pack/components'
import shiki from 'shiki'

import { code } from '@styles/ui/CodeBlock'

export default async function CodeBlock({ children, className, ...props }) {
  let lang = className ? className.split('-')[1] : 'javascript'
  if (lang === 'tsx' || lang === 'jsx') {
    lang = 'typescript'
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

  let highlighter = await shiki.getHighlighter({
    themes: ['github-dark-dimmed', 'github-light'],
    langs: ['typescript', 'markdown', 'css', 'diff', 'bash', 'json'],
  })

  let html

  if (highlight) {
    let tokens = highlighter.codeToThemedTokens(codeToHighlight, lang)

    html = shiki.renderToHtml(tokens, {
      fg: highlighter.getForegroundColor(),
      bg: highlighter.getBackgroundColor(),
      // Specified elements override the default elements.
      elements: {
        line({ children: line, index }) {
          let shouldHighlightLine = highlight.some((hl) => {
            if (Array.isArray(hl)) {
              return hl[0] < index < hl[1]
            }
            return hl === index
          })
          if (shouldHighlightLine) {
            return `<span class="line" style="background-color: var(--line-highlight);">${line}</span>`
          }
          return `<span class="line">${line}</span>`
        },
      },
    })
  } else {
    html = highlighter.codeToHtml(codeToHighlight, { lang })
  }

  return (
    <Box
      is="code"
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
      className={className ? `${className} ${code}` : `${code}`}
    />
  )
}
