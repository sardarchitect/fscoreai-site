import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  
  function middleware(req) {
    const { pathname } = new URL(req.url);
    console.log( req.nextauth.token , 'ok')
    
    // If no token is found, redirect to login page
  },
  
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  
  },
)


// Protect API routes under /api/*
export const config = {
  matcher: [
    '/api((?!|user/register|/login|/signup).*)',
    '/admin'

  ],
};
















// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/onmi/:path*',
// }