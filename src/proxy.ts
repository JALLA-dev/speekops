import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  'pk_test_cG9zc2libGUtbGFiLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ'

const secretKey =
  process.env.CLERK_SECRET_KEY ||
  'sk_test_wzV1o5gwf5XNJD9iABdhYyXtgstC5Ycyp2us0uRZzj'

export default async function proxy(req: NextRequest, event: NextFetchEvent) {
  try {
    const handler = clerkMiddleware({
      publishableKey,
      secretKey,
    })
    return await handler(req, event)
  } catch (error) {
    console.error('Clerk middleware error fallback:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    '/(api|trpc)(.*)',
  ],
}
