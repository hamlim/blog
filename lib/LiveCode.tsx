'use client';
import { Sandpack } from '@codesandbox/sandpack-react';

export default function LiveCode({
  code,
  ...props
}: { code: string } & Record<string, string>) {
  return (
    <Sandpack
      files={{
        '/App.js': code,
      }}
      {...props}
    />
  );
}
