import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * SET THIS TO TRUE TO SUSPEND THE WEBSITE
 * Toggle this back to false to restore the site.
 */
const IS_SUSPENDED = false;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. If not suspended, do nothing
  if (!IS_SUSPENDED) {
    return NextResponse.next();
  }

  // 2. Define exclusions: 
  // - The maintenance page itself
  // - Static assets (images, _next, etc.)
  // - API routes if they should stay active (for this case, we usually redirect everything except static)
  const isMaintenancePage = pathname.startsWith('/maintenance');
  const isStaticAsset = 
    pathname.startsWith('/_next') || 
    pathname.includes('.') || // matches favicon.ico, images, etc.
    pathname.startsWith('/api/') || // Optional: keep APIs if needed, but for "suspension" we usually block
    pathname.startsWith('/font/');

  if (isMaintenancePage || isStaticAsset) {
    return NextResponse.next();
  }

  // 3. Redirect all other traffic to /maintenance
  const url = request.nextUrl.clone();
  url.pathname = '/maintenance';
  return NextResponse.redirect(url);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
