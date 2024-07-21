import { restrictedPages } from '@/app/lib/restrictedPages'
import { createServerClient } from '@supabase/ssr'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // refreshing the auth token
  // await supabase.auth.getUser()

  // return response
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const url = new URL(request.url)
  const { pathname } = url
  const params = url.searchParams.get('step')

  if (user) {
    if (pathname === '/login' || pathname === '/signup' || pathname === '/') {
      if (pathname === '/signup' && params === '4') return
      else return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  } else if (
    (pathname === '/signup' && params === '3' && !user) ||
    (pathname === '/signup' && params === '4' && !user)
  ) {
    return NextResponse.redirect(new URL('/signup', request.url))
  } else if (
    (!user && pathname === '/login') ||
    (!user && pathname === '/signup')
  ) {
    // Do Nothing
  } else if (pathname !== '/') {
    return NextResponse.redirect(
      new URL(`/login?next=${pathname.slice(1)}`, request.url)
    )
  }
  return response
}
