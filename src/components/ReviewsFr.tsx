"use client";

import { useCallback, useEffect, useState } from "react";
import { GOOGLE_REVIEWS_URL, OVERALL_RATING } from "@/components/ReviewsCarousel";

/**
 * Avis Google authentiques de Seven Oak Prestige, tels que publiés sur la
 * fiche Google Business Profile (note 5,0 — vérifiée en septembre 2026).
 * Textes originaux en anglais, traduction française fournie ci-dessous.
 */
const REVIEWS = [
  {
    name: "Safaat Siddhi",
    text: "The service was efficient, transparent, and delivered as promised.",
    translation: "Un service efficace, transparent et conforme à ce qui avait été promis.",
  },
  {
    name: "Veridian",
    text: "I highly recommend their services!",
    translation: "Je recommande vivement leurs services !",
  },
  {
    name: "Mirvac",
    text: "Great service, super professional and easy to work with.",
    translation: "Excellent service, très professionnel et agréable à travailler avec eux.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Note de 5 sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.47 5.27 5.53.72-4.06 3.9 1.03 5.61L10 14.35 5.03 17l1.03-5.61L2 7.49l5.53-.72L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm font-semibold text-gold"
    >
      {initials}
    </span>
  );
}

export function ReviewsFr() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => setI((v) => (v + n + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), 5500);
    return () => window.clearInterval(t);
  }, [paused, go]);

  return (
    <div className="mobile-pan-y max-w-full overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mb-6 flex items-center gap-3">
        <Stars />
        <span className="text-sm font-bold text-foreground">
          {OVERALL_RATING.replace(".", ",")} / 5 sur Google
        </span>
      </div>

      <div className="max-w-full overflow-hidden border border-border bg-background">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
          aria-live="polite"
        >
          {REVIEWS.map((r) => (
            <figure key={r.name} className="w-full shrink-0 p-8 sm:p-12">
              <Stars />
              <blockquote className="mt-7 font-display text-xl font-bold leading-snug text-foreground/90 sm:text-2xl">
                « {r.translation} »
              </blockquote>
              <p className="mt-4 text-xs italic text-muted-foreground">
                Avis original : “{r.text}”
              </p>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
                <Avatar name={r.name} />
                <span>
                  <span className="font-bold text-foreground/85">{r.name}</span> · Avis Google vérifié
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {REVIEWS.map((rev, idx) => (
            <button
              key={rev.name}
              type="button"
              aria-label={`Avis de ${rev.name}`}
              aria-current={idx === i}
              onClick={() => setI(idx)}
              className={`h-px w-8 transition-colors ${idx === i ? "bg-gold" : "bg-border hover:bg-gold/50"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[
            ["Avis précédent", -1, "M15 5l-7 7 7 7"],
            ["Avis suivant", 1, "M9 5l7 7-7 7"],
          ].map(([label, dir, d]) => (
            <button
              key={label as string}
              type="button"
              aria-label={label as string}
              onClick={() => go(dir as number)}
              className="flex h-9 w-9 items-center justify-center border border-border text-gold-soft transition-colors hover:border-gold/60 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={d as string} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
      >
        Voir tous les avis Google
      </a>

      <div className="sr-only">
        <p>
          Seven Oak Prestige est noté {OVERALL_RATING} sur 5 sur Google.
        </p>
        {REVIEWS.map((rev) => (
          <p key={rev.name}>
            {rev.name} : {rev.text}
          </p>
        ))}
      </div>
    </div>
  );
}
export default ReviewsFr;
