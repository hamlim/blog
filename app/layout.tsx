import { themeClass } from '@ds-pack/components'
import '@ds-pack/components/dist/index.css'

export default function Layout({ children }) {
  return (
    <html lang="en-US" className={themeClass}>
      <head>
        <title>Matt Hamlin's Personal Site</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
