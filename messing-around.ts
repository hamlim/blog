// import fg from 'fast-glob';

// let mdFiles = fg.sync('./public/**/*.md');

// let paths = mdFiles.map((file) => {
//   return file.replace('./public', '').replace('/posts', '').replace('.md', '');
// });

// let feed = await Bun.file('./public/feed.json').json();

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
