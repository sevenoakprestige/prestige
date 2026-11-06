"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
const WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

/** Pages where the chat widget must not appear (locale prefix is stripped before matching). */
const HIDDEN_PATHS = ["/studio", "/privacy", "/terms", "/refund", "/security", "/consultation"];

/** Same value as the key written by CookieConsent. */
const CONSENT_KEY = "cookieConsent";
export const CONSENT_EVENT = "cookie-consent";

type TawkApi = {
  onLoad?: () => void;
  customStyle?: unknown;
  hideWidget?: () => void;
  showWidget?: () => void;
  setAttributes?: (attrs: Record<string, string>, cb?: (err?: unknown) => void) => void;
};

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

function stripLocale(pathname: string) {
  return pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
}

function isHidden(pathname: string) {
  const p = stripLocale(pathname);
  return HIDDEN_PATHS.some((h) => p === h || p.startsWith(`${h}/`));
}

/**
 * tawk.to live chat.
 * - Loads only after the visitor accepts cookies (no reload needed).
 * - Sits above the WhatsApp float button (bottom-right).
 * - Hidden on legal/consultation/studio pages and while the mobile sticky CTA is visible.
 * - Sends locale + page to the agent via visitor attributes.
 */
export function TawkChat({ locale }: { locale: string }) {
  const pathname = usePathname() || "/";
  const loadedRef = useRef(false);
  const readyRef = useRef(false);
  const stickyRef = useRef(false);
  const pathRef = useRef(pathname);
  const localeRef = useRef(locale);
  pathRef.current = pathname;
  localeRef.current = locale;

  const sync = () => {
    const api = window.Tawk_API;
    if (!readyRef.current || !api) return;
    const mobileSticky = stickyRef.current && window.innerWidth < 768;
    if (isHidden(pathRef.current) || mobileSticky) api.hideWidget?.();
    else api.showWidget?.();
    api.setAttributes?.({ locale: localeRef.current, page: pathRef.current }, () => {});
  };

  const load = () => {
    if (loadedRef.current || !PROPERTY_ID || !WIDGET_ID) return;
    loadedRef.current = true;

    const api: TawkApi = (window.Tawk_API = window.Tawk_API || {});
    window.Tawk_LoadStart = new Date();
    // Stack above the WhatsApp button (h-14 + gap): 24px bottom offset + 56px + 16px gap.
    api.customStyle = {
      visibility: {
        desktop: { position: "br", xOffset: 24, yOffset: 96 },
        mobile: { position: "br", xOffset: 16, yOffset: 88 },
      },
    };
    api.onLoad = () => {
      readyRef.current = true;
      sync();
    };

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.head.appendChild(s);
  };

  // Consent gate + lazy load.
  useEffect(() => {
    if (!PROPERTY_ID || !WIDGET_ID) return;

    const tryLoad = () => {
      if (localStorage.getItem(CONSENT_KEY) !== "accepted") return;
      if (isHidden(pathRef.current)) return;
      const run = () => load();
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(run);
      } else {
        setTimeout(run, 1500);
      }
    };

    tryLoad();
    const onConsent = () => {
      tryLoad();
      // Rejection after load: hide the widget.
      if (localStorage.getItem(CONSENT_KEY) !== "accepted") window.Tawk_API?.hideWidget?.();
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Route changes: load if newly allowed, or show/hide.
  useEffect(() => {
    if (!loadedRef.current) {
      if (localStorage.getItem(CONSENT_KEY) === "accepted" && !isHidden(pathname)) {
        window.dispatchEvent(new Event(CONSENT_EVENT));
      }
      return;
    }
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, locale]);

  // Mobile sticky CTA coordination.
  useEffect(() => {
    const onSticky = (e: Event) => {
      stickyRef.current = Boolean((e as CustomEvent).detail);
      sync();
    };
    window.addEventListener("sticky-cta", onSticky as EventListener);
    return () => window.removeEventListener("sticky-cta", onSticky as EventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default TawkChat;

