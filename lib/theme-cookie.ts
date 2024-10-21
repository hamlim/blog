import { cookies, type UnsafeUnwrappedCookies } from 'next/headers';
import { defaultTheme, themeCookie } from './themes'

export function getThemeCookie() {
  let cookieJar = (cookies() as unknown as UnsafeUnwrappedCookies)
  if (cookieJar.get(themeCookie)) {
    return cookieJar.get(themeCookie).value
  }
  return defaultTheme
}
