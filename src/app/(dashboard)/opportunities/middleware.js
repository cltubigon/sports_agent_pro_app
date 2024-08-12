import { NextResponse } from 'next/server'

export async function opportunityMiddleware(req) {
  const url = new URL(req.url)

  const postId = url.searchParams.get('post')
  const response = NextResponse.redirect(new URL('/opportunities', req.url))
  response.cookies.set({
    name: 'drawerPostId',
    value: postId,
  })
  return response
}