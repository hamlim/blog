'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { themeCookie } from './themes'

export async function selectTheme({
  option,
  currentPath,
}: {
  option: string
  currentPath: string
}) {
  cookies().set(themeCookie, option)

  revalidatePath(currentPath)
}
