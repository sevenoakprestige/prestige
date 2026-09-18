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

  // Skip middleware for static files, API routes, Next internals, and /fr/ paths already handled
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    pathname.includes('.') // static assets
  ) {
    return NextResponse.next();
  }

  // If already on /fr/ path, set the locale cookie and continue
  if (pathname.startsWith('/fr')) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, FR_LOCALE, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
      path: '/',
    });
    return response;
  }

  // Check if user has a saved locale preference
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    // User has explicitly chosen a language — respect it, do not redirect
    return NextResponse.next();
  }

  // --- Auto-detect: check IP country (Cloudflare header) ---
  const country = request.headers.get('cf-ipcountry') ?? '';
  const isFrenchSpeaking = FRENCH_SPEAKING_COUNTRIES.has(country.toUpperCase());

  // --- Auto-detect: check browser Accept-Language header ---
  const acceptLang = request.headers.get('accept-language') ?? '';
  const prefersFrench =
    isFrenchSpeaking ||
    acceptLang.toLowerCase().startsWith('fr') ||
    acceptLang.toLowerCase().includes(',fr') ||
    (acceptLang.toLowerCase().includes(';q=') && acceptLang.toLowerCase().includes('fr'));

  if (prefersFrench && !pathname.startsWith('/fr')) {
    // Set a detection flag so client can show the suggestion banner (not a hard redirect)
    const response = NextResponse.next();
    response.cookies.set('LOCALE_SUGGESTION', FR_LOCALE, {
      maxAge: 60 * 60 * 24, // 24 hours — refresh daily
      sameSite: 'lax',
      path: '/',
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and internals
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
