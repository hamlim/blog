import * as React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import { useTheme } from '@matthamlin/component-library'

export default function Code({ children, className }) {
  let lang = className.split('-')[1] || 'jsx'
  let theme = useTheme()
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlLight}
      code={children}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: theme.space[3],
            overflow: 'auto',
            marginTop: theme.space[3],
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
