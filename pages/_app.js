import * as React from 'react'
import { ThemeProvider } from '@matthamlin/component-library'
import { BrowserRouter } from '@matthamlin/reroute-browser'
import { createMemoryHistory } from 'history'
import { Router as BaseRouter } from '@matthamlin/reroute-core'

function ServerRouter(props) {
  return (
    <BaseRouter
      createHistory={() => createMemoryHistory({ initialEntries: ['/'] })}
      {...props}
    />
  )
}

export default function MyApp({ Component, pageProps }) {
  let Router = ServerRouter
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    Router = BrowserRouter
  }

  return (
    <Router>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Router>
  )
}
