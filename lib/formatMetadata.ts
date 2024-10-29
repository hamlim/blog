import type { Post } from '@lib/types'
import type { Metadata } from 'next'

function parseDateTime({ date, time }: { date: string; time: string }) {
  // Parse the date string
  let datePattern = /^(?<month>\w+) (?<day>\d+)(?:th|nd|st|rd), (?<year>\d{4})$/
  let timePattern =
    /^(?<hour>\d+):(?<minute>\d+):(?<second>\d+) (?<ampm>AM|PM)$/

  let dateMatch = date.match(datePattern)
  let timeMatch = time.match(timePattern)

  if (!dateMatch || !timeMatch) {
    throw new Error('Invalid date or time format')
  }

  let { month, day, year } = dateMatch.groups
  let { hour, minute, second, ampm } = timeMatch.groups

  // Convert month name to month index
  let monthIndex = new Date(`${month} 1`).getMonth()

  // Adjust hour based on AM/PM
  let hourNumber = Number.parseInt(hour, 10)
  if (ampm === 'PM' && hourNumber !== 12) {
    hourNumber += 12
  } else if (ampm === 'AM' && hourNumber === 12) {
    hourNumber = 0
  }

  // Create a date object in UTC time
  let utcDate = new Date(
    Date.UTC(
      Number.parseInt(year, 10),
      monthIndex,
      Number.parseInt(day, 10),
      hourNumber,
      Number.parseInt(minute, 10),
      Number.parseInt(second, 10),
    ),
  )

  // Adjust for the East Coast timezone (UTC-5 or UTC-4 depending on DST)
  const estOffset = utcDate.getTimezoneOffset() === 300 ? -5 : -4
  utcDate.setHours(utcDate.getHours() + estOffset)

  return utcDate
}

export function formatBlogPostMetadata({ meta }: { meta: Post }): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    other: {
      publishedDate: meta.date,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://matthamlin.me/blog/${meta.year}/${meta.month}/${meta.slug}`,
      title: meta.title,
      images: [
        {
          url: `https://matthamlin.me/api/og/${meta.uuid}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      description: meta.description,
      siteName: `Matt's Website`,
      publishedTime: parseDateTime({
        date: meta.date,
        time: meta.time,
      }).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@immatthamlin',
      images: [`https://matthamlin.me/api/og/${meta.uuid}`],
    },
  }
}
