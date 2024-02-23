import { fetchManifest } from '@lib/fetch-manifest';
import '@styles/globals.css';
import { Metadata } from 'next';

export default function Layout({ children }) {
  return <>{children}</>;
}

async function resolveTitle({ title: titleSlug }) {
  let manifest = await fetchManifest();
  let postData = manifest.posts.find((post) => {
    return post.slug === titleSlug;
  });

  return postData.title;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  let title = await resolveTitle({ title: params.title });

  return {
    title: title || params.title || "Matt's Blog",
    icons: [
      {
        rel: 'shortcut icon',
        url: '/favicon.ico',
      },
    ],
  };
}
