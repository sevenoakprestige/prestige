"use client";
import { useCallback, useEffect, useState } from "react";

const REVIEWS = [
  {
    name: "Karim Belahir",
    place: "Lyon, France",
    text: "Accompagnement en français du début à la fin. Ma UK Limited a été constituée sans aucune complication et chaque étape m’a été expliquée clairement.",
  },
  {
    name: "François Mathieu",
    place: "Paris, France",
    text: "Un cabinet sérieux et transparent. Le conseiller a pris le temps d’étudier mon activité avant de recommander une structure cohérente.",
  },
  {
    name: "Isabelle Berthet",
    place: "Bordeaux, France",
    text: "Adresse professionnelle à Londres, réception et numérisation du courrier : tout fonctionne exactement comme annoncé.",
  },
  {
    name: "Nadia Lefèvre",
    place: "Marseille, France",
    text: "La vérification d’identité Companies House m’inquiétait. Elle a été préparée et réalisée à distance, sans stress.",
  },
  {
    name: "Julien Rousseau",
    place: "Genève (résident français)",
    text: "Des réponses précises sur la fiscalité France–Royaume-Uni et la direction effective. Aucune promesse exagérée, que du concret.",
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
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden border border-border bg-background">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
          aria-live="polite"
        >
          {REVIEWS.map((r) => (
            <figure key={r.name} className="w-full shrink-0 p-8 sm:p-12">
              <Stars />
              <blockquote className="mt-7 font-display text-xl leading-snug text-foreground/90 sm:text-2xl">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/85">{r.name}</span> · {r.place} · Avis Google
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

      <div className="sr-only">
        {REVIEWS.map((rev) => (
          <p key={rev.name}>
            {rev.name}, {rev.place} : {rev.text}
          </p>
        ))}
      </div>
    </div>
  );
}
