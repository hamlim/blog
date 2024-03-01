import * as CustomMDXComponents from '@recipes/mdx-components';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // @ts-expect-error
  return {
    ...components,
    ...CustomMDXComponents,
  };
}
