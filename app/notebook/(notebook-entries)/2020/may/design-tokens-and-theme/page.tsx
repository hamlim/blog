import NotebookPage from 'app/notebook/NotebookPage';
import Content from './content.mdx';

export default function Page() {
  return (
    // @ts-expect-error - RSC
    <NotebookPage
      meta={{
        slug: 'design-tokens-and-theme',
        year: '2020',
        month: 'may',
      }}
    >
      <Content />
    </NotebookPage>
  );
}
