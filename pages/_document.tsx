import { Html, Head, Main, NextScript } from 'next/document'
import { themeClass } from '@ds-pack/components'

export default function Document() {
  return (
    <Html className={themeClass}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
