import { themeClass } from '@ds-pack/components'
import '@ds-pack/components/dist/index.css'

import { body } from '@styles/app/RootLayout'

export default function Layout({ children }) {
  return (
    <html lang="en-US" className={themeClass}>
      <body className={body}>{children}</body>
    </html>
  )
}
