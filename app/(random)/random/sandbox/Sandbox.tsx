'use client';
import {
  FileTabs,
  getSandpackCssText,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  useActiveCode,
  useSandpack,
} from '@codesandbox/sandpack-react';
import Editor from '@monaco-editor/react';
import { Box } from '@recipes/box';
import type { CSSProperties } from 'react';

function MonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  return (
    <Box className='flex flex-col flex-grow'>
      <FileTabs />
      <Box className='flex flex-grow flex-col relative'>
        {/* Position absolute is a hack to get monaco to fit the width we want */}
        {/* See: https://github.com/suren-atoyan/monaco-react/issues/285#issuecomment-1465236815 */}
        <Box className='absolute top-0 left-0 right-0 bottom-0'>
          <Editor
            height='100%'
            language='javascript'
            theme='vs-light'
            key={sandpack.activeFile}
            defaultValue={code}
            onChange={(value) => updateCode(value || '')}
          />
        </Box>
      </Box>
    </Box>
  );
}

let styles = getSandpackCssText();

export default function Sandbox() {
  return (
    <>
      <style
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: styles }}
        id='sandpack'
        key='sandpack-css'
      />
      <SandpackProvider
        theme='light'
        template='react'
        customSetup={{
          dependencies: {
            react: 'experimental',
            'react-dom': 'experimental',
          },
        }}
      >
        <SandpackLayout
          className='flex flex-grow'
          style={{ '--sp-layout-height': '100vh' } as CSSProperties}
        >
          <SandpackFileExplorer className='flex flex-col flex-grow' />
          <MonacoEditor />
          {
            /* <SandpackCodeEditor
            className="flex flex-col flex-grow"
            closableTabs
            showTabs
          /> */
          }
          <SandpackPreview className='flex flex-col flex-grow' />
        </SandpackLayout>
      </SandpackProvider>
    </>
  );
}
