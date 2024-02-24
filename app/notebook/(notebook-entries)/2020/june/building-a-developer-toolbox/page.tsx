import NotebookPage from 'app/notebook/NotebookPage';
import Content from './content.mdx';

export default function Page() {
  return (
    // @ts-expect-error - RSC
    <NotebookPage
      meta={{
        slug: 'building-a-developer-toolbox',
        year: '2020',
        month: 'june',
      }}
    >
      <Content />
    </NotebookPage>
  );
}
