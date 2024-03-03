import fg from 'fast-glob';
import { rmSync } from 'fs';

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

// let feed = await Bun.file('./public/feed.json').json();

// let blogPosts = fg.sync('./public/posts/**/*.md');

// for (let post of blogPosts) {
//   let path = post.replace('./public/posts/', '').replace('.md', '');
//   let postData = feed.posts.find(p => p.slug === path.split('/').at(-1));
//   if (!postData) {
//     console.log(path, postData);
//     break;
//   }
//   await Bun.write(`./app/blog/(blog-posts)/${path}/content.mdx`, Bun.file(post));
//   await Bun.write(
//     `./app/blog/(blog-posts)/${path}/page.tsx`,
//     `import BlogPage from 'app/blog/BlogPage';
//   import Content from './content.mdx';
//   import { fetchManifest } from '@lib/fetch-manifest';
//   import {formatBlogPostMetadata} from 'lib/formatMetadata';

//   let id = "${postData.uuid}";

//   export default function Page() {
//     return (
//       // @ts-expect-error - RSC
//       <BlogPage
//         id={id}
//       >
//         <Content />
//       </BlogPage>
//     );
//   }

//   export async function generateMetadata() {
//     let mainfest = await fetchManifest();
//     let post = mainfest.posts.find(p => p.uuid === id);

//     return formatBlogPostMetadata({meta: post});
//   };
//   `,
//   );
// }

// let notebookEntries = fg.sync('./public/notebook/**/*.md');

// for (let post of notebookEntries) {
//   let path = post.replace('./public/notebook/', '').replace('.md', '');
//   let postData = feed.notebookEntries.find(p => p.slug === path.split('/').at(-1));
//   if (!postData) {
//     console.log(path, postData);
//     break;
//   }
//   await Bun.write(`./app/notebook/(notebook-entries)/${path}/content.mdx`, Bun.file(post));
//   await Bun.write(
//     `./app/notebook/(notebook-entries)/${path}/page.tsx`,
//     `import NotebookPage from 'app/notebook/NotebookPage';
//     import Content from './content.mdx';
//     import { fetchManifest } from '@lib/fetch-manifest';
// import { formatBlogPostMetadata } from '@lib/formatMetadata';

//     let id = "${postData.uuid}";

//     export default function Page() {
//       return (
//         // @ts-expect-error - RSC
//         <NotebookPage
//           id={id}
//         >
//           <Content />
//         </NotebookPage>
//       );
//     }

//   export async function generateMetadata() {
//      let mainfest = await fetchManifest();
//      let entry = mainfest.notebookEntries.find(p => p.uuid === id);

//      return formatBlogPostMetadata({meta: entry});
//    };`,
//   );
// }

// let mdxFiles = fg.sync('./app/blog/**/content.mdx');
// let feed = await Bun.file('./public/feed.json').json();

// for (let file of mdxFiles) {
//   let content = await Bun.file(file).text();
//   let slug = file.replace('/content.mdx', '').split('/').at(-1);

//   let postInfo = feed.posts.find(p => p.slug === slug);
//   if (!postInfo) {
//     console.log(slug);
//     break;
//   }

//   await Bun.write(
//     file.replace('/content.mdx', '/page.mdx'),
//     `import { fetchManifest } from '@lib/fetch-manifest';
// import { formatBlogPostMetadata } from 'lib/formatMetadata';
// import BlogPage from 'app/blog/BlogPage';

// export let id = '${postInfo.uuid}';

// export async function generateMetadata() {
//   let mainfest = await fetchManifest();
//   let post = mainfest.posts.find(p => p.uuid === id);

//   return formatBlogPostMetadata({ meta: post });
// }

// <BlogPage id={id}>

// ${content}

// </BlogPage>`,
//   );

//   rmSync(file.replace('/content.mdx', '/page.tsx'));
//   rmSync(file);
// }
