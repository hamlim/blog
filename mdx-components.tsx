import { Tweet } from '@lib/Tweet'
import * as CustomMDXComponents from '@recipes/mdx-components'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // @ts-expect-error mismatch between what next-mdx wants and what we provide
  return {
    ...components,
    ...CustomMDXComponents,
    Tweet,
  }
}
