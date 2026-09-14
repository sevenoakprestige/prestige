"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/447447488755";

export function WhatsAppFloat() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onSticky = (e: Event) => setStickyVisible(Boolean((e as CustomEvent).detail));
    window.addEventListener("sticky-cta", onSticky as EventListener);
    return () => window.removeEventListener("sticky-cta", onSticky as EventListener);
  }, []);

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Seven Oak Prestige on WhatsApp"
      className={`fixed bottom-6 right-4 z-40 h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_16px_40px_-12px_oklch(0_0_0/60%)] transition-transform hover:scale-105 md:right-6 md:flex ${
        stickyVisible ? "hidden" : "flex"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.31a8.08 8.08 0 0 1-1.24-4.3c0-4.47 3.64-8.11 8.12-8.11 2.17 0 4.2.84 5.74 2.38a8.07 8.07 0 0 1 2.37 5.74c0 4.47-3.64 8.1-8.11 8.1Zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.53.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.47-.29Z" />
      </svg>
    </a>
  );
}
