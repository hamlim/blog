import * as React from 'react'
import * as comps from '@ds-pack/components'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Breadcrumbs, Crumb, Spacer } from '../components/breadcrumbs'
import Link from '../components/Link'
import Code from '../components/Code'
import { allPosts as posts } from '../posts'
// this data is collected at build time
import notebook from /* preval */ '../notebook'
import Head from 'next/head'

let { ThemeProvider, Reset, Box, Heading, Text, theme } = comps

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
  li: (props: any) => <comps.ListItem fontSize={2} {...props} />,
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
      {/* <Breadcrumbs>
        <Spacer />
        <Crumb to={sectionLink}>{section}</Crumb>
      </Breadcrumbs> */}
      <Heading variant="lead" forwardedAs="h1">
        {post.title}
      </Heading>
      {children}
    </MDXProvider>
  )
}

function Layout({ children, title = "Matt Hamlin's Blog" }) {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        headings: {
          ...theme.headings,
          lead: {
            ...theme.headings.lead,
            fontSize: theme.fontSizes[3],
          },
        },
      }}
    >
      <Reset />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box
          flexShrink={1}
          forwardedAs="nav"
          backgroundColor="gray.0"
          color="black"
        >
          <Box
            maxWidth={['94vw', '80vw', , '70ch']}
            minWidth={['94vw', '80vw', , '70ch']}
            p={4}
            m="0 auto"
            display="flex"
            flexDirection={['column', , 'row']}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Link to="/" display="flex" alignItems="center">
                <Text mr={2} forwardedAs="span" aria-label="Wave" role="img">
                  👋
                </Text>{' '}
                Home
              </Link>
              <Box id="breadcrumbs-portal" />
            </Box>
            <Box>
              <Link to="/blog">Blog</Link> <Link to="/projects">Projects</Link>{' '}
              <Link to="/tools">Tools</Link> <Link to="/social">Social</Link>
            </Box>
          </Box>
        </Box>
        <Box
          maxWidth={['94vw', '80vw', , '70ch']}
          minWidth={['94vw', '80vw', , '70ch']}
          p={[3, , 7, 10]}
          m="0 auto"
          flexGrow={1}
        >
          {children}
        </Box>
        <Box flexShrink={1} backgroundColor="gray.0" forwardedAs="footer">
          <Box
            maxWidth={['94vw', '80vw', , '70ch']}
            minWidth={['94vw', '80vw', , '70ch']}
            p={4}
            m="0 auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text>Matt Hamlin - {new Date().getFullYear()}</Text>
            <Text>
              🐦 <comps.TwitterMention>immatthamlin</comps.TwitterMention> 👨‍💻{' '}
              <comps.GitHubMention>hamlim</comps.GitHubMention>
            </Text>
          </Box>
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

  let title

  if (pathname.includes('/projects')) {
    title = 'Projects'
  } else if (pathname.includes('/tools')) {
    title = 'Tools'
  } else if (pathname.includes('/social')) {
    title = 'Social'
  }

  return (
    <Layout title={title}>
      <Component {...pageProps} />
    </Layout>
  )
}
