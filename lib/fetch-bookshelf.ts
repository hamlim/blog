import type { Book } from './types'

interface Bookshelf {
  reading: Array<Book>
  toRead: Array<Book>
  read: Array<Book>
}

export async function fetchBookshelf(): Promise<Bookshelf> {
  let books = (await fetch(
    `http://${process.env.VERCEL_URL}/bookshelf.json`,
  ).then((r) => r.json())) as Array<Book>

  return {
    reading: books.filter((book) => book.status === 'reading'),
    read: books.filter((book) => book.status === 'read').reverse(),
    toRead: books.filter((book) => book.status === 'to-read'),
  }
}
