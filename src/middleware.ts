import { withAuth } from "next-auth/middleware"
import { roles } from "./lib/utils/data";

export default withAuth(

  function middleware(req) {
    const { pathname } = new URL(req.url);
    const user = req.nextauth.token 
    console.log(user, pathname, "okokoko")
   
  },
  
  {
    callbacks: {
      authorized: ({ token }: any) => roles.includes(token?.role),
    },    
  },
)


// Protect API routes under /api/*
export const config = {
  matcher: [
    '/api/((?!login|user/register|signin|auth).*)',
    // '/api/user/update',
    '/((?!login||about_us|contact_us|blogs|blog|pricing|privacy_policy|product|signup|terms_of_use|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
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