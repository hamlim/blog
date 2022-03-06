import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import { code } from './Code.css'
import { vars } from '@ui/components/src/vars.css'

export default function Code({ children, className, ...props }) {
  let highlight = null
  if (props.highlight) {
    // props.highlight can look like:
    // highlight=1-10, 14, 25
    highlight = props.highlight
      .split(',')
      .map((part) => part.trim())
      .map((part) => part.split('-').map((part) => Number(part)))
      .map((high) => {
        if (high.length <= 1) {
          return high
        }
        let res = []
        for (let i = high[0]; i <= high[1]; i++) {
          res.push(i)
        }
        return res
      })
      .reduce((lines, line) => [...lines, ...line], [])
  }
  let lang = className.split('-')[1] || 'jsx'
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlLight as any}
      code={children.trim()}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + ' ' + code} style={style}>
          {tokens.map((line, i) => (
            <div
              {...getLineProps({
                line,
                key: i,
                style: {
                  paddingLeft: vars.space[3],
                  paddingRight: vars.space[3],
                  paddingTop: i === 0 ? vars.space[3] : null,
                  paddingBottom: i === tokens.length - 1 ? vars.space[3] : null,
                  ...(highlight
                    ? highlight.includes(i)
                      ? { backgroundColor: vars.colors.gray100 }
                      : { opacity: 0.3 }
                    : {}),
                },
              })}
            >
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
