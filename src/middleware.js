import { restrictedPages } from './app/lib/restrictedPages'
// import { executeSplitTesting } from './config/split-testing/middleware'
import { updateSession } from './config/supabase/middleware'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

export async function middleware(req) {
  // ************** NOT SPLIT TESTING **************
  const url = new URL(req.url)
  const path = url.pathname
  const doesInclude = restrictedPages.some((item) => path.includes(item))

  if (doesInclude || path === '/') {
    return await updateSession(req)
  }
  // ************** SPLIT TESTING **************
  // if (doesInclude) {
  //   return await updateSession(req)
  // } else {
  //   return executeSplitTesting(req)
  // }
}
