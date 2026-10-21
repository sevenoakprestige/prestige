"use client";

import { useCallback, useEffect, useState } from "react";
import { GOOGLE_REVIEWS_URL, OVERALL_RATING } from "@/components/ReviewsCarousel";

/**
 * Echte Google-Kundenbewertungen von Seven Oak Prestige (Bewertung 5,0 — verifiziert September 2026).
 * Originalbewertungen auf Englisch, deutsche Übersetzung unten bereitgestellt.
 */
const REVIEWS = [
  {
    name: "Safaat Siddhi",
    text: "The service was efficient, transparent, and delivered as promised.",
    translation: "Der Service war effizient, transparent und wurde wie versprochen erbracht.",
  },
  {
    name: "Veridian",
    text: "I highly recommend their services!",
    translation: "Ich kann ihre Dienstleistungen nur wärmstens empfehlen!",
  },
  {
    name: "Mirvac",
    text: "Great service, super professional and easy to work with.",
    translation: "Toller Service, äußerst professionell und unkompliziert in der Zusammenarbeit.",
  },
  {
    name: "Vbvvb Bbjbb",
    text: "I had a great experience working with this company for my UK company registration...",
    translation: "Ich habe mit diesem Unternehmen bei der Registrierung meiner UK-Gesellschaft sehr gute Erfahrungen gemacht. Der gesamte Ablauf war reibungslos, professionell und gut organisiert. Das Team war stets erreichbar, hat meine Fragen klar beantwortet und mich bei jedem Schritt auf dem Laufenden gehalten. Alles wurde pünktlich erledigt, genau wie versprochen.",
  },
  {
    name: "albalushi Mazan",
    text: "I am pleased to share my excellent experience with this company...",
    translation: "Ich freue mich, meine ausgezeichnete Erfahrung mit diesem Unternehmen zu teilen, bei dem ich ein hohes Maß an Professionalität und Engagement erlebt habe. Nach meinem Eindruck besteht das Team aus fleißigen Mitarbeitern mit ausgeprägtem Verantwortungsbewusstsein und Einsatz. Ich danke ihnen herzlich für ihre Bemühungen und ihr anhaltendes Engagement.",
  },
  {
    name: "Aleksandr Almataev",
    text: "Team made everything as it should be, eben in my hard case...",
    translation: "Das Team hat alles so erledigt, wie es sein sollte – selbst in meinem schwierigen Fall. Vielen Dank! Die Ltd wurde genau rechtzeitig gegründet!",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Bewertung 5 von 5">
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

export function ReviewsDe() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setI((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setI((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [paused, next]);

  const r = REVIEWS[i];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative rounded-2xl border border-border/40 bg-card/40 p-6 sm:p-10 backdrop-blur-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div className="flex items-center gap-3">
          <Stars />
          <span className="font-mono text-sm font-semibold text-foreground">
            {OVERALL_RATING} / 5
          </span>
          <span className="text-xs text-muted-foreground">· Google-Kundenbewertungen</span>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-gold-soft transition-colors hover:text-gold hover:underline"
        >
          Alle Bewertungen auf Google ansehen →
        </a>
      </div>

      <div className="mt-8 min-h-[140px]">
        <blockquote className="font-serif text-lg leading-relaxed text-foreground sm:text-xl italic">
          “{r.translation}”
        </blockquote>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-6">
        <div className="flex items-center gap-3">
          <Avatar name={r.name} />
          <div>
            <p className="font-sans text-sm font-semibold text-foreground">{r.name}</p>
            <p className="text-xs text-muted-foreground">Google-Bewertung · Verifizierter Kunde</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Vorherige Bewertung"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            ←
          </button>
          <span className="font-mono text-xs text-muted-foreground px-2">
            {i + 1} / {REVIEWS.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Nächste Bewertung"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewsDe;
