import NotebookPage from 'app/notebook/NotebookPage';
import Content from './content.mdx';

export default function Page() {
  return (
    // @ts-expect-error - RSC
    <NotebookPage
      meta={{
        slug: '2020',
        year: '2020',
        month: 'november',
      }}
    >
      <Content />
    </NotebookPage>
  );
}
