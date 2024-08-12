'use server'

import { cookies } from 'next/headers'

export const getCookie = async (cookieName) => {
  const cookie = cookies().get(cookieName)
  return cookie?.value
}

export const deleteCookie = async (cookieName) => {
  cookies().delete(cookieName)
}
