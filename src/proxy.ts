import { clerkMiddleware } from '@clerk/nextjs/server'
import type { NextRequest } from 'next/server'

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  'pk_test_cG9zc2libGUtbGFiLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ'

const secretKey =
  process.env.CLERK_SECRET_KEY ||
  'sk_test_wzV1o5gwf5XNJD9iABdhYyXtgstC5Ycyp2us0uRZzj'

export default function proxy(req: NextRequest, event: any) {
  return clerkMiddleware({
    publishableKey,
    secretKey,
  })(req, event)
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    '/(api|trpc)(.*)',
  ],
}
