import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'NEXT_LOCALE';
const SUPPORTED_LOCALES = ['en', 'fr'];
const DEFAULT_LOCALE = 'en';
const FR_LOCALE = 'fr';

// Countries where French is a primary language (ISO 3166-1 alpha-2)
const FRENCH_SPEAKING_COUNTRIES = new Set([
  'FR', // France
  'BE', // Belgium
  'CH', // Switzerland
  'LU', // Luxembourg
  'MC', // Monaco
  'SN', // Senegal
  'CI', // Côte d'Ivoire
  'CM', // Cameroon
  'MA', // Morocco
  'TN', // Tunisia
  'DZ', // Algeria
  'CD', // DR Congo
  'MG', // Madagascar
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for Next.js internal requests, API routes, static files, and blog
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    pathname.startsWith('/blog') || // Add blog to ignored paths
    pathname.includes('.') // Assumes files have extensions (e.g. .jpg, .css)
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a supported locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  let response = NextResponse.next();

  if (pathnameHasLocale) {
    // If someone explicitly types /en, redirect them to / to preserve SEO
    if (pathname.startsWith('/en/') || pathname === '/en') {
      const newPathname = pathname.replace(/^\/en/, '') || '/';
      const url = new URL(newPathname, request.url);
      url.search = request.nextUrl.search;
      return NextResponse.redirect(url, 301);
    }
    
    // If they are on a non-default locale (e.g. /fr), save preference
    if (pathname.startsWith('/fr')) {
      response.cookies.set(COOKIE_NAME, FR_LOCALE, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax',
        path: '/',
      });
    }
    
    return response;
  }

  // --- Auto-detect logic for default locale routes ---
  // If we are here, the path does not have a locale prefix (e.g., /services).
  
  // 1. Check IP country (Cloudflare header)
  const country = request.headers.get('cf-ipcountry') ?? '';
  const isFrenchSpeaking = FRENCH_SPEAKING_COUNTRIES.has(country.toUpperCase());

  // 2. Check browser Accept-Language header
  const acceptLang = request.headers.get('accept-language') ?? '';
  const prefersFrench =
    isFrenchSpeaking ||
    acceptLang.toLowerCase().startsWith('fr') ||
    acceptLang.toLowerCase().includes(',fr') ||
    (acceptLang.toLowerCase().includes(';q=') && acceptLang.toLowerCase().includes('fr'));

  // Set suggestion cookie if they prefer French but are on the English (default) site
  if (prefersFrench) {
    response.cookies.set('LOCALE_SUGGESTION', FR_LOCALE, {
      maxAge: 60 * 60 * 24, // 24 hours
      sameSite: 'lax',
      path: '/',
    });
  }

  // 3. Rewrite the request to /en/... so Next.js matches the [locale] folder, 
  // but the user's browser URL stays the same.
  const rewriteUrl = new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url);
  rewriteUrl.search = request.nextUrl.search;
  
  // Create a new rewrite response but attach our cookies from above
  const rewriteResponse = NextResponse.rewrite(rewriteUrl);
  if (prefersFrench) {
    rewriteResponse.cookies.set('LOCALE_SUGGESTION', FR_LOCALE, {
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
    });
  }
  
  return rewriteResponse;
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|flies|images|studio).*)'],
};
