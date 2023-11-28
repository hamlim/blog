import { cookies } from 'next/headers';
import { defaultTheme, themeCookie } from './themes';

export function getThemeCookie() {
  let cookieJar = cookies();
  if (cookieJar.get(themeCookie)) {
    return cookieJar.get(themeCookie).value;
  }
  return defaultTheme;
}
