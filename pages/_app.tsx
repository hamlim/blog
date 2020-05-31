import * as React from 'react'
import * as comps from '@ds-pack/components'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Breadcrumbs, Crumb, Spacer } from '../components/breadcrumbs'
import Code from '../components/Code'
import { allPosts as posts } from '../posts'
// this data is collected at build time
import notebook from /* preval */ '../notebook'
import Head from 'next/head'

let { ThemeProvider, Reset, Box, Heading } = comps

let { useMemo } = React

let Img = styled('img')`
  max-width: 100%;
  height: auto;
`

let components = {
  ...comps,
  p: (props: any) => <comps.Text fontSize={2} mt={6} {...props} />,
  h2: (props: any) => (
    <Heading variant="h2" forwardedAs="h2" mt={6} {...props} />
  ),
  h3: (props: any) => (
    <Heading variant="h3" forwardedAs="h3" mt={6} {...props} />
  ),
  h4: (props: any) => (
    <Heading variant="subhead" forwardedAs="h4" mt={6} {...props} />
  ),
  ul: (props: any) => (
    <Box mt={6}>
      <comps.List variant="unordered" forwardedAs="ul" {...props} />
    </Box>
  ),
  li: (props: any) => <comps.ListItem {...props} />,
  ol: (props: any) => (
    <Box mt={6}>
      <comps.List variant="ordered" forwardedAs="ol" {...props} />
    </Box>
  ),
  pre({ children }) {
    return <>{children}</>
  },
  inlineCode: comps.InlineCode,
  code: Code,
  img: Img,
  Spacer: (props: any) => <Box mb={6} {...props} />,
  blockquote: comps.Blockquote,
  Mention: ({ children }) => (
    <comps.Link
      rel="noopener noreferrer"
      target="_blank"
      forwardedAs="a"
      href={`https://twitter.com/${children}`}
    >
      {children}
    </comps.Link>
  ),
  Fig: ({ src, alt, caption }) => (
    <figure>
      <Img src={src} alt={alt} />
      <Box forwardedAs="figcaption" color="gray.7" mx={4}>
        {caption}
      </Box>
    </figure>
  ),
}

function PostLayout({
  children,
  post,
  section = 'Blog',
  sectionLink = '/blog',
}) {
  return (
    <MDXProvider components={components}>
      <Breadcrumbs>
        <Crumb to="/">Home</Crumb>
        <Spacer />
        <Crumb to={sectionLink}>{section}</Crumb>
      </Breadcrumbs>
      <Heading variant="lead" forwardedAs="h1">
        {post.title}
      </Heading>
      {children}
    </MDXProvider>
  )
}

function Layout({ children, title = "Matt Hamlin's Blog" }) {
  return (
    <ThemeProvider>
      <Reset />
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

  let notebookEntry = useMemo(() => {
    let isNotebookEntry = pathname.startsWith('/notebook/')
    if (!isNotebookEntry) {
      return undefined
    }
    let entry = notebook.find((entry) => entry.link === pathname)
    return entry
  }, [pathname])

  if (post) {
    return (
      <Layout title={post?.title}>
        <PostLayout post={post}>
          <Component {...pageProps} />
        </PostLayout>
      </Layout>
    )
  } else if (notebookEntry) {
    return (
      <Layout title={notebookEntry?.title}>
        <PostLayout
          post={notebookEntry}
          section="Notebook"
          sectionLink="/notebook"
        >
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
