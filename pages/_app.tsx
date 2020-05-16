import * as React from 'react'
import * as comps from '@matthamlin/component-library'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Breadcrumbs, Crumb, Spacer } from '../components/breadcrumbs'
import Code from '../components/Code'
import posts from '../posts'
import Head from 'next/head'

let { ThemeProvider, Box, H1 } = comps

let { useMemo } = React

let Img = styled('img')`
  max-width: 100%;
  height: auto;
`

let components = {
  ...comps,
  p: (props: any) => <comps.Text fontSize={2} mt={6} {...props} />,
  h2: (props: any) => <comps.H2 mt={6} {...props} />,
  h3: (props: any) => <comps.H3 mt={6} {...props} />,
  h4: (props: any) => <comps.H4 mt={6} {...props} />,
  ul: (props: any) => (
    <Box mt={6}>
      <comps.List variant="unordered" as="ul" {...props} />
    </Box>
  ),
  li: (props: any) => <comps.ListItem {...props} />,
  ol: (props: any) => (
    <Box mt={6}>
      <comps.List variant="ordered" as="ol" {...props} />
    </Box>
  ),
  pre({ children }) {
    return <>{children}</>
  },
  code: Code,
  img: Img,
  Spacer: (props: any) => <Box mb={6} {...props} />,
  blockquote: (props: any) => (
    <Box
      borderLeft="solid 2px"
      color="gray.8"
      pl={6}
      mx={3}
      forwardedAs="blockquote"
      {...props}
    />
  ),
}

function PostLayout({ children, post }) {
  return (
    <MDXProvider components={components}>
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb>
        <Spacer />
        <Crumb to="/blog">Blog</Crumb>
      </Breadcrumbs>
      <H1>{post.title}</H1>
      {children}
    </MDXProvider>
  )
}

function Layout({ children, title = "Matt Hamlin's Blog" }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          maxWidth={['94vw', '80vw', '70ch']}
          minWidth={['94vw', '80vw', '70ch']}
          p={[3, , 7, 10]}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function MyApp({ Component, pageProps, router }) {
  let { pathname } = router
  let post = useMemo(() => {
    let isBlogPost = pathname.startsWith('/posts/')
    if (!isBlogPost) {
      return undefined
    }
    let post = posts.find((post) => post.absolute === pathname)
    return post
  }, [pathname])

  if (post) {
    return (
      <Layout title={post?.title}>
        <PostLayout post={post}>
          <Component {...pageProps} />
        </PostLayout>
      </Layout>
    )
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
