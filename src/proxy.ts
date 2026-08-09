import { clerkMiddleware } from '@clerk/nextjs/server'

if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
    'pk_test_cG9zc2libGUtbGFiLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ'
}
if (!process.env.CLERK_SECRET_KEY) {
  process.env.CLERK_SECRET_KEY =
    'sk_test_wzV1o5gwf5XNJD9iABdhYyXtgstC5Ycyp2us0uRZzj'
}

export default clerkMiddleware()

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    '/(api|trpc)(.*)',
  ],
}
