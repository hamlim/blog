import { Box } from '@ds-pack/components'
// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// import typescript from 'highlight.js/lib/languages/typescript'
// import markdown from 'highlight.js/lib/languages/markdown'
// import diff from 'highlight.js/lib/languages/diff'
// import bash from 'highlight.js/lib/languages/bash'
// import css from 'highlight.js/lib/languages/css'
// import json from 'highlight.js/lib/languages/json'

import shiki from 'shiki'

import { code } from '@styles/ui/CodeBlock'
// import 'highlight.js/styles/github-dark-dimmed.css'

// hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('typescript', typescript)
// hljs.registerLanguage('markdown', markdown)
// hljs.registerLanguage('css', css)
// hljs.registerLanguage('diff', diff)
// hljs.registerLanguage('bash', bash)
// hljs.registerLanguage('json', json)

export default async function CodeBlock({ children, className, ...props }) {
  let lang = className ? className.split('-')[1] : 'javascript'
  if (lang === 'tsx') {
    lang = 'typescript'
  }

  let highlighter = await shiki.getHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['typescript', 'markdown', 'css', 'diff', 'bash', 'json'],
  })

  // let html = hljs.highlight(children, {
  //   language: lang,
  // }).value

  let html = highlighter.codeToHtml(children, { lang })

  return (
    <Box
      is="code"
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
      className={className ? `${className} ${code}` : `${code}`}
    />
  )
}
