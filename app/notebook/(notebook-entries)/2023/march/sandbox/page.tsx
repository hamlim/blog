import NotebookPage from 'app/notebook/NotebookPage';
import Content from './content.mdx';

export default function Page() {
  return (
    // @ts-expect-error - RSC
    <NotebookPage
      meta={{
        slug: 'sandbox',
        year: '2023',
        month: 'march',
      }}
    >
      <Content />
    </NotebookPage>
  );
}
