"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/447447488755";

type Props = {
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
};

export function StickyCta({
  primaryLabel = "View packages",
  secondaryLabel = "WhatsApp",
  primaryHref = "#pricing",
}: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hideZones = [primaryHref, "#final-cta"]
      .map((s) => (s ? document.querySelector(s) : null))
      .filter(Boolean);

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const blocked = hideZones.some((el) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      const next = pastHero && !blocked;
      setShow(next);
      window.dispatchEvent(new CustomEvent("sticky-cta", { detail: next }));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [primaryHref]);

  return (
    <div
      className={`section-dark fixed inset-x-0 bottom-0 z-50 border-t border-border px-3 pt-2.5 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <a href={primaryHref} className="btn-gold flex-1 !px-3 !py-2.5 !text-[0.62rem]">
          {primaryLabel}
        </a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost flex-1 !px-3 !py-2.5 !text-[0.62rem]">
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
export default StickyCta;
