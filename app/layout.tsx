import '@styles/globals.css'
import type { Metadata } from 'next'

export default function Layout({ children }) {
  return (
    <html data-theme="corporate" lang="en-US">
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
