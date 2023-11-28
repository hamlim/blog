import { fetchManifest } from '@lib/fetch-manifest';
import { PostWrapper } from '@lib/PostWrapper';
import { evaluate } from '@mdx-js/mdx';
import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { Link } from '@recipes/link';
import * as defaultComponents from '@recipes/mdx-components';
import { Stack } from '@recipes/stack';
import { Metadata } from 'next';
import { cache } from 'react';
import * as runtime from 'react/jsx-runtime';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';

let { Time, Mentions } = defaultComponents;

interface Params {
  title: string;
}

let jsxRuntime = runtime as {
  Fragment: any;
  jsx: any;
  jsxs: any;
};

let extendedRuntime = {
  ...jsxRuntime,
  jsxDEV: jsxRuntime.jsx,
} as {
  Fragment: any;
  jsx: any;
  jsxs: any;
  jsxDEV: any;
};

let getPost = cache(async function getPost({ title: titleSlug }: Params) {
  let manifest = await fetchManifest();

  let postData = manifest.posts.find((post) => {
    return post.slug === titleSlug;
  });

  let postContent = await fetch(
    `http://${process.env.VERCEL_URL}${postData.path}`,
  ).then((r) => r.text());

  let { default: MDXContent } = await evaluate(postContent, {
    ...extendedRuntime,
    remarkPlugins: [remarkFrontmatter, remarkGfm],
  });

  return {
    meta: { manifest },
    content: MDXContent({
      // @ts-expect-error
      components: defaultComponents,
    }),
    post: postData,
  };
});

export default async function Blog({ params: { title } }) {
  let { content, post } = await getPost({
    title,
  });

  return (
    <Box className='prose lg:prose-xl'>
      <Stack gap={4} className='mb-4'>
        <Heading is='h1'>{post.title}</Heading>
        {post.date
          ? (
            <>
              <Box is='span' className='text-slate-500 italic'>
                Published <Time>{post.date}</Time>
              </Box>
              {' '}
            </>
          )
          : null}
        <Mentions />
      </Stack>
      <PostWrapper>{content}</PostWrapper>
      {post.tags
        ? (
          <Box className='mt-4'>
            <Heading is='h4'>Tags:</Heading>
            <Box className='flex justify-start gap-4 mt-4'>
              {post.tags.map((tag: string) => (
                <Box key={tag} is='span' className='inline-flex italic'>
                  <Link href={`/posts/tags/${tag}`}>{tag}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        )
        : null}
    </Box>
  );
}

export async function generateMetadata({
  params: { title },
}): Promise<Metadata> {
  let { post } = await getPost({
    title,
  });

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    other: {
      publishedDate: post.date,
    },
  };
}
