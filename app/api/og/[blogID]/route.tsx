import { fetchManifest } from '@lib/fetch-manifest'
import { cookies } from 'next/headers'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

let pendingFontData = fetch(
  new URL('../../../assets/geist-mono-reg.otf', import.meta.url),
).then((res) => res.arrayBuffer())

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogID: string }> },
) {
  let [manifest, resolvedParams, fontData] = await Promise.all([
    fetchManifest(),
    params,
    pendingFontData,
  ])
  let post = manifest.posts.find((p) => p.uuid === resolvedParams.blogID)

  let cookieStore = await cookies()

  if (cookieStore.get('windows')) {
    function createWaveEffect(index: number, total: number) {
      let x = 10 + (index / (total - 1)) * 80 // Horizontal position (10-90%)
      let y = Math.sin((index / total) * Math.PI * 2) * 10 // Vertical position (-10 to 10)
      let rotation = Math.cos((index / total) * Math.PI * 2) * 10 // Rotation (-10 to 10 degrees)

      return {
        x,
        y: 50 + y, // Center vertically and apply wave
        rotation,
      }
    }

    let colors = [
      '#FF595E',
      '#FF924C',
      '#FFCA3A',
      '#8AC926',
      '#1982C4',
      '#6A4C93',
      '#FF85A1',
      '#FFC75F',
      '#F9F871',
      '#90BE6D',
      '#43AA8B',
      '#577590',
    ]

    function getColor(index: number) {
      return colors[index % colors.length]
    }

    function smartSplit(str: string, maxLength: number) {
      let words = str.split(/\s+/)
      let chunks = []
      let currentChunk = ''

      for (const word of words) {
        if (currentChunk.length + word.length + 1 <= maxLength) {
          currentChunk += (currentChunk ? ' ' : '') + word
        } else {
          if (currentChunk) chunks.push(currentChunk)
          currentChunk = word
        }
      }

      if (currentChunk) chunks.push(currentChunk)
      return chunks
    }

    let titleChunks = smartSplit(post?.title || 'Oh No!', 20)

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
            width: '90%',
            height: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexDirection: 'column',
          }}
        >
          {titleChunks.map((chunk, chunkIndex) => (
            <div
              key={String(chunkIndex)}
              style={{
                display: 'flex',
                position: 'relative',
                height: `${100 / titleChunks.length}%`,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {chunk
                .split('')
                .map((char: string, index: number, array: Array<string>) => {
                  // @TODO - this is a bit of a hack - ideally we'd center align
                  // the text in each chunk however this code just evenly distributes
                  // the letters within a chunk across the width of the container
                  // I need to look into that but I'm out of my v0 messages for the day 🥲
                  let { x, y, rotation } = createWaveEffect(index, array.length)
                  return (
                    <div
                      key={`${chunkIndex}-${String(index)}`}
                      style={{
                        position: 'absolute',
                        left: `${x}%`,
                        top: `${y}%`,
                        fontSize: 60 / Math.sqrt(titleChunks.length),
                        fontWeight: 'bold',
                        color: getColor(chunkIndex * 20 + index),
                        transform: [
                          'translateX(-50%)',
                          'translateY(-50%)',
                          `rotate(${rotation}deg)`,
                          'skew(-15deg)',
                        ].join(' '),
                        textShadow:
                          '2px 2px 0 #fff, 4px 4px 0 #ddd, 6px 6px 0 #bbb, 8px 8px 0 #999',
                      }}
                    >
                      {char}
                    </div>
                  )
                })}
            </div>
          ))}
        </div>
        {(() => {
          if (typeof post !== 'undefined' && post.description) {
            return (
              <div
                style={{
                  color: '#374151',
                  fontSize: 30,
                  maxWidth: '800px',
                }}
              >
                {post.description}
              </div>
            )
          }
          if (
            typeof post !== 'undefined' &&
            typeof post.description !== 'string'
          ) {
            return null
          }
          // no post found
          return (
            <div
              style={{
                color: '#374151',
                fontSize: 30,
                maxWidth: '800px',
              }}
            >
              Congrats on finding a bug 🐛 in my code!
            </div>
          )
        })()}
        {post?.date ? (
          <div
            style={{
              color: '#6B7280',
              fontSize: 20,
              marginTop: '20px',
              textDecoration: 'underline dashed',
            }}
          >
            {post.date}
          </div>
        ) : null}
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
      {(() => {
        if (typeof post !== 'undefined' && post.description) {
          return (
            <div
              style={{
                color: '#374151',
                fontSize: 30,
                maxWidth: '800px',
              }}
            >
              {post.description}
            </div>
          )
        }
        if (
          typeof post !== 'undefined' &&
          typeof post.description !== 'string'
        ) {
          return null
        }
        // no post found
        return (
          <div
            style={{
              color: '#374151',
              fontSize: 30,
              maxWidth: '800px',
            }}
          >
            Congrats on finding a bug 🐛 in my code!
          </div>
        )
      })()}
      {post?.date ? (
        <div
          style={{
            color: '#6B7280',
            fontSize: 20,
            marginTop: '20px',
            textDecoration: 'underline dashed',
          }}
        >
          {post.date}
        </div>
      ) : null}
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
