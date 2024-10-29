import { fetchManifest } from '@lib/fetch-manifest'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const dynamic = 'force-dynamic'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogID: string }> },
) {
  let [manifest, resolvedParams, fontData] = await Promise.all([
    fetchManifest(),
    params,
    fetch(new URL('../../../assets/geist-mono-reg.otf', import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
  ])
  let post = manifest.posts.find((p) => p.uuid === resolvedParams.blogID)

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: '40px 60px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '40px',
          color: 'hsl(221, 83.2%, 53.3%)',
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        matthamlin.me
      </div>
      <div
        style={{
          color: '#4B5563',
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        Matt's Musings
      </div>
      <div
        style={{
          color: '#111827',
          fontSize: 60,
          fontWeight: 'bold',
          marginBottom: '20px',
          maxWidth: '800px',
          fontFamily: 'geist-mono',
        }}
      >
        {post?.title || 'This should never happen!'}
      </div>
      <div
        style={{
          color: '#374151',
          fontSize: 30,
          maxWidth: '800px',
        }}
      >
        {post?.description || 'Congrats on finding a bug 🐛 in my code!'}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'geist-mono',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
