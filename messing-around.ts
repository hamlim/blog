import fg from 'fast-glob';

// let mdFiles = fg.sync('./public/**/*.md');

// let paths = mdFiles.map((file) => {
//   return file.replace('./public', '').replace('/posts', '').replace('.md', '');
// });

// let tags = new Set();
// feed.posts.forEach(p => {
//   p.tags.forEach(t => tags.add(t));
// });

// export function tagToID(tag: string): string {
//   return encodeURIComponent(tag);
// }

// let tagPaths = [...tags].map((tag: string) => `/posts/tags/${tagToID(tag)}`);

// let staticPaths = [
//   '/bookshelf',
//   '/feed',
//   '/notebook',
//   '/posts',
//   '/posts/tags',
//   ...tagPaths,
//   '/projects',
//   '/random',
//   '/random/colors',
//   '/resume',
//   '/snippets',
//   '/snippets/alea',
//   '/social',
//   '/tools',
// ];

// Bun.write('./paths.json', JSON.stringify([...paths, ...staticPaths], null, 2));

export {};

let feed = await Bun.file('./public/feed.json').json();

let blogPosts = fg.sync('./public/posts/**/*.md');

for (let post of blogPosts) {
  let path = post.replace('./public/notebook/', '').replace('.md', '');
  let postData = feed.posts.find(p => p.slug === path.split('/').at(-1));
  await Bun.write(`./app/blog/(blog-posts)/${path}/content.mdx`, Bun.file(post));
  await Bun.write(
    `./app/blog/(blog-posts)/${path}/page.tsx`,
    `import BlogPage from 'app/blog/BlogPage';
  import Content from './content.mdx';
  
  export default function Page() {
    return (
      // @ts-expect-error - RSC
      <BlogPage
        meta={${JSON.stringify(postData, null, 2)}}
      >
        <Content />
      </BlogPage>
    );
  }
  `,
  );
}
