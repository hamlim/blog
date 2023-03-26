// @TODO: Line highlighting!

import { Box } from '@ds-pack/components'
import shiki from 'shiki'

import { code } from '@styles/ui/CodeBlock'
import githubDarkDimmed from 'shiki/themes/github-dark-dimmed.json'
import githubLight from 'shiki/themes/github-light.json'
import tsxGrammar from 'shiki/languages/tsx.tmLanguage.json'
import mdGrammar from 'shiki/languages/markdown.tmLanguage.json'
import cssGrammar from 'shiki/languages/css.tmLanguage.json'
import diffGrammar from 'shiki/languages/diff.tmLanguage.json'
import bashGrammar from 'shiki/languages/shellscript.tmLanguage.json'
import jsonGrammar from 'shiki/languages/json.tmLanguage.json'

export default async function CodeBlock({ children, className, ...props }) {
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

  let highlighter = await shiki.getHighlighter({
    // @ts-ignore
    themes: [githubDarkDimmed, githubLight],
    langs: [
      // @ts-ignore
      { id: 'tsx', scopeName: 'source.tsx', grammar: tsxGrammar },
      // @ts-ignore
      { id: 'typescript', scopeName: 'source.tsx', grammar: tsxGrammar },
      // @ts-ignore
      { id: 'md', scopeName: 'text.html.markdown', grammar: mdGrammar },
      // @ts-ignore
      { id: 'css', scopeName: 'source.css', grammar: cssGrammar },
      // @ts-ignore
      { id: 'diff', scopeName: 'source.diff', grammar: diffGrammar },
      // @ts-ignore
      { id: 'bash', scopeName: 'source.shell', grammar: bashGrammar },
      // @ts-ignore
      { id: 'json', scopeName: 'source.json', grammar: jsonGrammar },
    ],
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
