import airtable from 'airtable'
import type { NextApiRequest, NextApiResponse } from 'next'

// @ts-ignore
airtable.configure({
  apiKey: process.env.ANALYTICS_AIRTABLE_KEY,
})

let base = airtable.base('appy4PVBDYHcUaPpe')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let body = JSON.parse(req.body)

  if (body.url.includes('localhost')) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ skipped: true }))
    return
  }

  base('page-hits')
    .create([
      {
        fields: {
          url: body.url,
          hit: 1,
        },
      },
    ])
    .catch((err) => {
      console.error(err)
    })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ success: true }))
}
