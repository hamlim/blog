import type { Metadata } from 'next'

export function formatBlogPostMetadata({ meta }): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    other: {
      publishedDate: meta.date,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://matthamlin.me/blog/${meta.year}/${meta.month}/${meta.slug}`,
      title: meta.title,
      description: meta.description,
      siteName: `Matt's Website`,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@immatthamlin',
    },
  }
}
