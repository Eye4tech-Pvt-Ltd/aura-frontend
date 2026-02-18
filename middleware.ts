import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const role = req.cookies.get('role')?.value

  const path = req.nextUrl.pathname
  console.log('request path:', path, token)
  // Public routes
  if (path.startsWith('/login') || path.startsWith('/register')) {
    if (token) return NextResponse.redirect(new URL('/', req.url))
    return NextResponse.next()
  }

  // Protected dashboard routes
  if (path.startsWith('/user') && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Future Admin routes
  if (path.startsWith('/admin')) {
    if (!token) return NextResponse.redirect(new URL('/login', req.url))
    if (role !== 'admin')
      return NextResponse.redirect(new URL('/user', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/user/:path*', '/admin/:path*'],
}
