import { Tweet } from '@lib/Tweet';
import * as CustomMDXComponents from '@recipes/mdx-components';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...CustomMDXComponents,
    // @ts-expect-error RSC
    Tweet,
  };
}
