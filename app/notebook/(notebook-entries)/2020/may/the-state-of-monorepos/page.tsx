import { fetchManifest } from '@lib/fetch-manifest'
import { formatBlogPostMetadata } from '@lib/formatMetadata'
import NotebookPage from 'app/notebook/NotebookPage'
import Content from './content.mdx'

let id = '8164785556185054537'

export default function Page() {
  return (
    // @ts-expect-error - RSC
    (<NotebookPage id={id}>
      <Content />
    </NotebookPage>)
  );
}

export async function generateMetadata() {
  let mainfest = await fetchManifest()
  let entry = mainfest.notebookEntries.find((p) => p.uuid === id)

  return formatBlogPostMetadata({ meta: entry })
}
