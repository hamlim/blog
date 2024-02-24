import { fetchManifest } from '@lib/fetch-manifest';
import BlogPage from 'app/blog/BlogPage';
import { formatBlogPostMetadata } from 'lib/formatMetadata';
import Content from './content.mdx';

let id = '17812834190150357671';

export default function Page() {
  return (
    // @ts-expect-error - RSC
    <BlogPage
      id={id}
    >
      <Content />
    </BlogPage>
  );
}

export async function generateMetadata() {
  let mainfest = await fetchManifest();
  let post = mainfest.posts.find(p => p.uuid === id);

  return formatBlogPostMetadata({ meta: post });
}
