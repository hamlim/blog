import '@styles/globals.css'
import type { Metadata } from 'next'
import { getThemeCookie } from '@lib/theme-cookie'

export default function Layout({ children }) {
  let theme = getThemeCookie()
  return (
    <html data-theme={theme} lang="en-US">
      <body className="h-screen flex flex-col">
        <main className="flex grow flex-col min-h-screen">{children}</main>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Matt Hamlin's Personal Site",
  icons: [
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
  ],
}
