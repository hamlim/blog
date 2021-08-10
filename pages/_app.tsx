import * as React from 'react'
import * as comps from '@ds-pack/components'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import Link from '../components/Link'
import Code from '../components/Code'
import { allPosts as posts } from '../posts'
// this data is collected at build time
import notebook from /* preval */ '../notebook'
import Head from 'next/head'
import Router from 'next/router'
import recordPageVisit from '../components/record-page'
import Image from 'next/image'

let { ThemeProvider, Reset, Box, Heading, Text, theme, Stack } = comps

let { useMemo, useEffect, useState } = React

let Img = styled('img')`
  max-width: 100%;
  height: auto;
`

function Ref({ id }) {
  return (
    <Text is="sup" fontSize="$0">
      <comps.Link id={`ref-${id}`} is="a" href={`#fn-${id}`}>
        [{id}]
      </comps.Link>
    </Text>
  )
}

function Footnote({ id, children }) {
  return (
    <Box id={`fn-${id}`} _target={{ boxShadow: '$focusShadow' }}>
      <comps.Link is="a" href={`#ref-${id}`}>
        [{id}]
      </comps.Link>{' '}
      - {children}
    </Box>
  )
}

function Time(props) {
  return <Text is="time" {...props} />
}

function TwitterButton() {
  useEffect(() => {
    const s = document.createElement('script')
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    s.setAttribute('async', 'true')
    document.head.appendChild(s)
  }, [])
  return (
    <>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size="large"
        data-via="immatthamlin"
        data-show-count="true"
      >
        Tweet
      </a>
    </>
  )
}

function Mentions() {
  let [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(window.location.href)
  }, [])
  return (
    <comps.Link
      is="a"
      target="_blank"
      rel="noopener"
      href={`https://twitter.com/search?q=${encodeURIComponent(url)}`}
    >
      See discussion on Twitter
    </comps.Link>
  )
}

let components = {
  ...comps,
  Link,
  ExternalLink: (props: any) => (
    <comps.Link {...props} is="a" target="_blank" rel="noopener" />
  ),
  a: (props: any) => (
    <comps.Link {...props} is="a" target="_blank" rel="noopener" />
  ),
  p: (props: any) => <comps.Text fontSize="$2" mt="$6" {...props} />,
  h2: (props: any) => <Heading variant="h2" is="h2" mt="$6" {...props} />,
  h3: (props: any) => <Heading variant="h3" is="h3" mt="$6" {...props} />,
  h4: (props: any) => <Heading variant="subhead" is="h4" mt="$6" {...props} />,
  ul: (props: any) => (
    <Box mt="$6">
      <comps.List variant="unordered" is="ul" {...props} />
    </Box>
  ),
  li: (props: any) => <comps.ListItem fontSize="$2" mt="$2" {...props} />,
  ol: (props: any) => (
    <Box mt="$6">
      <comps.List variant="ordered" is="ol" {...props} />
    </Box>
  ),
  'li.ul': (props: any) => (
    <Box mt="$2" ml="$4">
      <comps.List variant="unordered" is="ul" {...props} />
    </Box>
  ),
  'li.ol': (props: any) => (
    <Box mt="$2" ml="$4">
      <comps.List variant="ordered" is="ol" {...props} />
    </Box>
  ),
  pre({ children }) {
    return <>{children}</>
  },
  inlineCode: comps.InlineCode,
  code: Code,
  img: Img,
  Spacer: (props: any) => <Box mb="$6" {...props} />,
  blockquote: comps.Blockquote,
  // Fig: ({ src, alt, caption }) => (
  //   <figure>
  //     <Img src={src} alt={alt} />
  //     <Box is="figcaption" color="gray.7" mx={4}>
  //       {caption}
  //     </Box>
  //   </figure>
  // ),
  Fig: comps.Figure,
  Image(props) {
    return (
      <Box mt="$6">
        <Image
          sizes="
        94vw
        (min-width: 40em) 80vw
        (min-width: 80em) 70ch
      "
          {...props}
        />
      </Box>
    )
  },
  Figure({ src, alt, caption, width, height, layout, ...props }) {
    return (
      <Box is="figure" mt={4}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout={layout}
          sizes="
          94vw
          (min-width: 40em) 80vw
          (min-width: 80em) 70ch
        "
          {...props}
        />
        <Box
          is="figcaption"
          color="$gray-7"
          px="$4"
          mt="$4"
          borderLeftStyle="solid"
          borderLeftWidth={4}
          borderLeftColor="$gray-4"
        >
          {caption}
        </Box>
      </Box>
    )
  },
  Time,
  TwitterButton,
  Mentions,
  Footnote,
  Ref,
  Tweet(props) {
    return (
      <Box my={6}>
        <blockquote className="twitter-tweet tw-align-center " {...props} />
      </Box>
    )
  },
  TLDR(props: { children: React.ReactNode }) {
    return (
      <Box
        is="details"
        p="$2"
        borderStyle="solid"
        borderWidth="2px"
        borderColor="$green-6"
        mt="$4"
        {...props}
      >
        <summary>
          <Text is="strong" fontWeight="bold">
            TL;DR:
          </Text>
        </summary>
        {props.children}
      </Box>
    )
  },
}

function PostLayout({ children, post }) {
  return (
    <MDXProvider components={components}>
      <Heading variant="lead" is="h1">
        {post.title}
      </Heading>
      {post.date ? (
        <>
          <Text is="span" color="$gray-8" fontStyle="italic">
            Published <Time>{post.date}</Time>
          </Text>{' '}
        </>
      ) : null}
      <Mentions />
      {children}
      {post.tags ? (
        <Box mt="$3">
          <Heading variant="subhead" is="h4">
            Tags:
          </Heading>
          <Stack inline gap="$4">
            {post.tags.map((tag: string, index: number) => (
              <Box key={tag}>
                <Box color="primary" is="span">
                  {tag}
                </Box>
                {index < post.tags.length - 1 ? ', ' : null}
              </Box>
            ))}
          </Stack>
        </Box>
      ) : null}
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
      <Box is="main" display="flex" flexDirection="column" minHeight="100vh">
        <Box flexShrink={1} is="nav" backgroundColor="$gray-0" color="$black">
          <Box
            maxWidth={{ '20em': '94vw', '40em': '80vw', '80em': '70ch' }}
            minWidth={{ '20em': '94vw', '40em': '80vw', '80em': '70ch' }}
            p="$4"
            m="0 auto"
            display="flex"
            flexDirection={{ '20em': 'column', '60em': 'row' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <Link to="/" display="flex" alignItems="center">
                <Text mr="$2" is="span" aria-label="Wave" role="img">
                  👋
                </Text>{' '}
                Home
              </Link>
              <Box id="breadcrumbs-portal" />
            </Box>
            <Box>
              <Link to="/blog">Blog</Link> <Link to="/projects">Projects</Link>{' '}
              <Link to="/bookshelf">Bookshelf</Link>{' '}
              <Link to="/tools">Tools</Link> <Link to="/social">Social</Link>
            </Box>
          </Box>
        </Box>
        <Box
          maxWidth={{ '20em': '94vw', '40em': '80vw', '80em': '70ch' }}
          minWidth={{ '20em': '94vw', '40em': '80vw', '80em': '70ch' }}
          p={{ '20em': '$3', '60em': '$7', '80em': '$10' }}
          m="0 auto"
          flexGrow={1}
        >
          {children}
        </Box>
        <Box flexShrink={1} backgroundColor="$gray-0" is="footer">
          <Box
            maxWidth={{ '20em': '94vw', '40em': '80vw', '80em': '70ch' }}
            minWidth={{ '20em': '94vw', '40em': '80vw', '80em': '70ch' }}
            p="$4"
            m="0 auto"
            display="flex"
            flexDirection={['column', , 'row']}
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

let hasAddedListener = false

if (!hasAddedListener) {
  Router.events.on('routeChangeComplete', () => {
    recordPageVisit()
  })
  hasAddedListener = true
}

export default function MyApp({ Component, pageProps, router }) {
  let { pathname } = router

  useEffect(() => {
    recordPageVisit()
  }, [])

  let post = useMemo(() => {
    let isBlogPost = pathname.startsWith('/posts/')
    if (!isBlogPost) {
      return undefined
    }
    let post = posts.find((post) => post.absolute === pathname) || {}
    return { ...post, ...(Component.frontMatter || {}) }
  }, [pathname])

  let notebookEntry = useMemo(() => {
    let isNotebookEntry = pathname.startsWith('/notebook/')
    if (!isNotebookEntry) {
      return undefined
    }
    let entry = notebook.find((entry) => entry.link === pathname)
    return { ...entry, ...(Component.frontMatter || {}) }
  }, [pathname])

  if (post) {
    return (
      <Layout title={post?.title}>
        <PostLayout post={post}>
          <Component {...pageProps} />
          <Box mb={6} />
          <Box mb={6} />
          <div>
            <TwitterButton />
          </div>
        </PostLayout>
      </Layout>
    )
  } else if (notebookEntry) {
    return (
      <Layout title={notebookEntry?.title}>
        <PostLayout post={notebookEntry}>
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
  } else if (pathname.includes('/colors')) {
    title = 'Colors'
  }

  return (
    <Layout title={title}>
      <Component {...pageProps} />
    </Layout>
  )
}
