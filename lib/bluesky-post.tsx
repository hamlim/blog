import type { ReactNode } from 'react'

export function BlueskyPost({
  children,
  src,
  cid,
}: { children: ReactNode; src: string; cid: string }) {
  return (
    <>
      <blockquote
        className="bluesky-embed"
        data-bluesky-uri={src}
        data-bluesky-cid={cid}
        suppressHydrationWarning
      >
        {children}
      </blockquote>
      <script
        async
        src="https://embed.bsky.app/static/embed.js"
      />
    </>
  )
}
