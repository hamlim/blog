// @ts-expect-error
import { createServerContext, useContext } from 'react'
import {
  Box,
  Link as StyledLink,
  TwitterMention,
  List,
  ListItem,
  Text,
  Blockquote,
  InlineCode as BaseInlineCode,
  Heading,
  Image,
  Figure,
  GitHubMention,
} from '@ds-pack/daisyui'
import NextLink from 'next/link'
import CodeBlock from './CodeBlock'
import Mentions from './Mentions'
import { Footnote, Ref } from './Footnotes'

export function Spacer() {
  return <Box is="marquee" className="mb-4" />
}

export function Link(props) {
  return <StyledLink is={NextLink} {...props} />
}

export function ExternalLink(props) {
  return <StyledLink is="a" {...props} />
}

export function a(props) {
  return <ExternalLink {...props} />
}

export function ul(props) {
  return <List variant="unordered" is="ul" className="ml-5" {...props} />
}

export function ol(props) {
  return <List variant="ordered" is="ol" className="ml-5" {...props} />
}

export function li(props) {
  return <ListItem {...props} />
}

export function del(props) {
  return <Text is="del" {...props} />
}

export function p(props) {
  return <Text {...props} />
}

export function blockquote(props) {
  return <Blockquote {...props} />
}

export function br(props) {
  return <Spacer {...props} />
}

let preContext = createServerContext(false)

export function pre(props) {
  return (
    <preContext.Provider value={true}>
      <Box is="pre" {...props} />
    </preContext.Provider>
  )
}

export function code(props) {
  let isPre = useContext(preContext)
  if (isPre) {
    // @ts-expect-error
    return <CodeBlock {...props} />
  }
  return <InlineCode {...props} />
}

export function em(props) {
  return <Text is="em" {...props} />
}

export function h1(props) {
  return <Heading is="h1" variant="h1" {...props} />
}

export function h2(props) {
  return <Heading is="h2" variant="h2" {...props} />
}

export function h3(props) {
  return <Heading is="h3" variant="h3" {...props} />
}

export function h4(props) {
  return <Heading is="h4" variant="subhead" {...props} />
}

export function h5(props) {
  return <Heading is="h5" variant="subhead" {...props} />
}

export function h6(props) {
  return <Heading is="h6" variant="subhead" {...props} />
}

export function hr(props) {
  return <Box is="hr" {...props} />
}

export function img(props) {
  return <Image {...props} />
}

export function strong(props) {
  return <Text is="strong" {...props} />
}

export function Time(props) {
  return <Text is="time" {...props} />
}

export function Tweet(props) {
  return (
    <Box className="my-6">
      <blockquote className="twitter-tweet tw-align-center" {...props} />
    </Box>
  )
}

export function TLDR(props: { children: React.ReactNode }) {
  return (
    <Box
      is="details"
      className="p-2 border-solid border-2 border-green-500 mt-4"
      {...props}
    >
      <summary>
        <Text is="strong" className="font-bold">
          TL;DR:
        </Text>
      </summary>
      {props.children}
    </Box>
  )
}

export function InlineCode(props) {
  return <BaseInlineCode size="small" {...props} />
}

export {
  TwitterMention,
  Figure,
  GitHubMention,
  Mentions,
  Text,
  Heading,
  Footnote,
  Ref,
}
