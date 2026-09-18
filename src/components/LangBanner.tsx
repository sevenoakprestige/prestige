'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '='))
    ?.split('=')[1];
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

export function LangBanner() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [frPath, setFrPath] = useState('/fr');

  useEffect(() => {
    // Don't show on French pages
    if (pathname.startsWith('/fr')) return;

    const suggestion = getCookie('LOCALE_SUGGESTION');
    const userChose = getCookie('NEXT_LOCALE');

    // Only show if middleware suggested French and user hasn't made a choice yet
    if (suggestion === 'fr' && !userChose) {
      setShow(true);
    }

    // Build the equivalent French URL for this page
    // For the homepage: /fr, for other pages: /fr + pathname
    setFrPath(pathname === '/' ? '/fr' : `/fr${pathname}`);
  }, [pathname]);

  if (!show) return null;

  function dismiss() {
    // User dismissed — record they prefer English
    setCookie('NEXT_LOCALE', 'en');
    // Clear the suggestion cookie
    document.cookie = 'LOCALE_SUGGESTION=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setShow(false);
  }

  function switchToFr() {
    setCookie('NEXT_LOCALE', 'fr');
    document.cookie = 'LOCALE_SUGGESTION=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setShow(false);
  }

  return (
    <div
      role="banner"
      aria-live="polite"
      className="fixed bottom-20 left-4 right-4 z-50 sm:left-auto sm:right-6 sm:max-w-sm"
    >
      <div className="flex items-start gap-4 rounded-xl border border-gold/30 bg-background/95 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* French flag emoji */}
        <span className="mt-0.5 shrink-0 text-xl" aria-hidden="true">🇫🇷</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">
            Ce site est disponible en français.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <Link
              href={frPath}
              onClick={switchToFr}
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-3 py-1.5 text-xs font-bold text-black shadow transition-all hover:scale-105"
            >
              Voir en français
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline transition-colors"
            >
              Non merci
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fermer"
          className="mt-0.5 shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
