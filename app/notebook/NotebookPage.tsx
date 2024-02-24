import { fetchManifest } from '@lib/fetch-manifest';
import Mentions from '@lib/Mentions';
import { PostWrapper } from '@lib/PostWrapper';
import { Box } from '@recipes/box';
import { Heading } from '@recipes/heading';
import { Time } from '@recipes/mdx-components';
import { Stack } from '@recipes/stack';

export default async function NotebookPage({ meta, children }) {
  let manifest = await fetchManifest();

  let notebookEntry = manifest.notebookEntries.find((entry) => {
    return entry.slug === meta.slug && entry.month === meta.month && entry.year === meta.year;
  });

  return (
    <Box className='prose lg:prose-xl'>
      <Stack gap={4}>
        <Heading is='h1'>{notebookEntry.title}</Heading>
        {notebookEntry.date
          ? (
            <>
              <Box is='span' className='text-slate-500 italic'>
                Published <Time>{notebookEntry.date}</Time>
              </Box>
              {' '}
            </>
          )
          : null}
        <Mentions />
      </Stack>
      <PostWrapper>{children}</PostWrapper>
      {notebookEntry.tags
        ? (
          <Box className='mt-4'>
            <Heading is='h4'>Tags:</Heading>
            <Box className='flex justify-start gap-4 mt-4'>
              {notebookEntry.tags.map((tag: string) => (
                <Box key={tag} is='span' className='inline-flex italic'>
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        )
        : null}
    </Box>
  );
}
