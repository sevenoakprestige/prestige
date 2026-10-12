"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const albalushiMazanAvatar = "/assets/reviewers/albalushi-mazan.webp";
const aleksandrAlmataevAvatar = "/assets/reviewers/aleksandr-almataev.webp";
const safaatSiddhiAvatar = "/assets/reviewers/safaat-siddhi.webp";
const vbvvbBbjbbAvatar = "/assets/reviewers/vbvvb-bbjbb.webp";
const veridianAvatar = "/assets/reviewers/veridian.webp";

export const GOOGLE_REVIEWS_URL = "https://share.google/owyOtNunkhfg4c0dE";

/**
 * Genuine Seven Oak Prestige Google reviews, exactly as published on the
 * Google Business Profile (rating 5.0 — verified September 2026).
 * Nothing here may be invented.
 */
export const REVIEWS = [
  {
    name: "Safaat Siddhi",
    rating: 5,
    text: "The service was efficient, transparent, and delivered as promised.",
    avatarUrl: safaatSiddhiAvatar,
  },
  {
    name: "Veridian",
    rating: 5,
    text: "I highly recommend their services!",
    avatarUrl: veridianAvatar,
  },
  {
    name: "Mirvac",
    rating: 5,
    text: "Great service, super professional and easy to work with.",
  },
  {
    name: "Vbvvb Bbjbb",
    rating: 5,
    text: "I had a great experience working with this company for my UK company registration. The entire process was smooth, professional, and well-organized. Their team was always responsive, answered my questions clearly, and kept me updated throughout every step. Everything was completed on time, exactly as promised.",
    avatarUrl: vbvvbBbjbbAvatar,
  },
  {
    name: "albalushi Mazan",
    rating: 5,
    text: "I am pleased to share my excellent experience with this company, where I witnessed a high level of professionalism and dedication. From what I observed, the team consists of hardworking employees with a strong sense of responsibility and commitment. I extend my sincere thanks and appreciation to them for their efforts and continued dedication.",
    avatarUrl: albalushiMazanAvatar,
  },
  {
    name: "Aleksandr Almataev",
    rating: 5,
    text: "Team made everything as it should be, eben in my hard case. Thanks a lot! Company Ltd incorporated just on time!",
    avatarUrl: aleksandrAlmataevAvatar,
  },
];

export const OVERALL_RATING = "5.0";
/** Verified Google review count (September 2026). Update when new reviews are published. */
export const REVIEW_COUNT = REVIEWS.length;

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`Rated ${n} out of 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.47 5.27 5.53.72-4.06 3.9 1.03 5.61L10 14.35 5.03 17l1.03-5.61L2 7.49l5.53-.72L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.93l-3.86-3c-1.07.72-2.45 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.97H1.26v3.1A12 12 0 0 0 12 24z"
      />
      <path fill="#FBBC05" d="M5.25 14.25a7.2 7.2 0 0 1 0-4.5v-3.1H1.26a12 12 0 0 0 0 10.7l3.99-3.1z" />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.26 6.65l3.99 3.1C6.2 6.87 8.86 4.75 12 4.75z"
      />
    </svg>
  );
}

export function Avatar({ name, avatarUrl }: { name: string; avatarUrl: string | undefined }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return avatarUrl ? (
    <img
      src={avatarUrl}
      alt={`${name}'s Google profile`}
      width={40}
      height={40}
      loading="lazy"
      className="h-10 w-10 shrink-0 rounded-full border border-gold/40 object-cover"
    />
  ) : (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm font-semibold text-gold"
    >
      {initials}
    </span>
  );
}

export function ReviewsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const loop = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  const moveOneReview = useCallback((direction: number, behavior: ScrollBehavior = "smooth") => {
    const el = scroller.current;
    const card = el?.querySelector<HTMLElement>("[data-review-card]");
    if (!el || !card) return;

    const third = el.scrollWidth / 3;
    if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
    if (el.scrollLeft < third * 0.5) el.scrollLeft += third;

    el.scrollBy({ left: direction * (card.offsetWidth + 1), behavior });
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => moveOneReview(1), 5500);
    return () => window.clearInterval(timer);
  }, [paused, moveOneReview]);

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth / 3;
  }, []);

  const nudge = useCallback((dir: number) => moveOneReview(dir), [moveOneReview]);

  return (
    <div
      className="mobile-pan-y max-w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <GoogleMark />
          <Stars n={5} />
          <span className="text-sm font-semibold text-foreground">
            {OVERALL_RATING} / 5 on Google
          </span>
        </div>
        <div className="flex items-center gap-2">
          {[
            ["Previous reviews", -1, "M15 5l-7 7 7 7"],
            ["Next reviews", 1, "M9 5l7 7-7 7"],
          ].map(([label, dir, d]) => (
            <button
              key={label as string}
              type="button"
              aria-label={label as string}
              onClick={() => nudge(dir as number)}
              className="flex h-9 w-9 items-center justify-center border border-border text-gold-soft transition-colors hover:border-gold/60 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={d as string} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-8 flex max-w-full snap-x gap-px overflow-x-auto overscroll-x-contain bg-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loop.map((r, idx) => (
          <a
            key={`${r.name}-${idx}`}
            data-review-card
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex w-[85%] shrink-0 snap-start flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent sm:w-[48%] lg:w-[calc((100%-2px)/3)]"
          >
            <div className="flex items-center justify-between">
              <Stars n={r.rating} />
              <GoogleMark />
            </div>
            <blockquote className="mt-6 flex-1 font-display text-lg leading-snug text-foreground/90">
              “{r.text}”
            </blockquote>
            <span className="mt-8 flex items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
              <Avatar name={r.name} avatarUrl={"avatarUrl" in r ? r.avatarUrl : undefined} />
              <span>
                <span className="font-semibold text-foreground/85">{r.name}</span> · Google review
              </span>
            </span>
          </a>
        ))}
      </div>

      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
      >
        View all Google reviews
      </a>

      <div className="sr-only">
        <p>
          Seven Oak Prestige is rated {OVERALL_RATING} out of 5 on Google.
        </p>
        {REVIEWS.map((r) => (
          <p key={r.name}>
            {r.name}, {r.rating} stars: {r.text}
          </p>
        ))}
      </div>
    </div>
  );
}

/**
 * Slow editorial review carousel: one card every ~9s, 600ms smooth glide.
 * Pauses on hover, focus, touch or swipe; resumes after 20s of inactivity.
 * Autoplay disabled when the visitor prefers reduced motion.
 */
export function ReviewsSlow() {
  const list = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  const hold = useCallback(() => {
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
  }, []);
  const release = useCallback(() => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), 20000);
  }, []);

  const go = useCallback((dir: number) => {
    const el = list.current;
    const card = el?.querySelector<HTMLElement>("li");
    if (!el || !card) return;
    const step = card.offsetWidth + 1;
    const max = el.scrollWidth - el.clientWidth - 2;
    if (dir > 0 && el.scrollLeft >= max) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir < 0 && el.scrollLeft <= 2) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * step, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => go(1), 9000);
    return () => window.clearInterval(t);
  }, [paused, go]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  return (
    <div
      className="mobile-pan-y max-w-full"
      onMouseEnter={hold}
      onMouseLeave={release}
      onTouchStart={hold}
      onTouchEnd={release}
      onFocusCapture={hold}
      onBlurCapture={release}
      onWheel={() => { hold(); release(); }}
    >
      <ul
        ref={list}
        aria-label="Genuine Google reviews"
        tabIndex={0}
        className="flex max-w-full snap-x snap-mandatory gap-px overflow-x-auto overscroll-x-contain bg-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((r) => (
          <li
            key={r.name}
            className="flex w-[86%] shrink-0 snap-start flex-col bg-background p-6 sm:w-[48%] sm:p-7 lg:w-[calc((100%-2px)/3)]"
          >
            <Stars n={r.rating} />
            <blockquote className="mt-4 flex-1 font-display text-base leading-relaxed text-foreground/90">“{r.text}”</blockquote>
            <p className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
              <Avatar name={r.name} avatarUrl={"avatarUrl" in r ? r.avatarUrl : undefined} />
              <span>
                <span className="font-semibold text-foreground/85">{r.name}</span>
                <br />
                Google Review
              </span>
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-end gap-2">
        {([
          ["Previous review", -1, "M15 5l-7 7 7 7"],
          ["Next review", 1, "M9 5l7 7-7 7"],
        ] as const).map(([label, dir, d]) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={() => { hold(); go(dir); release(); }}
            className="flex h-9 w-9 items-center justify-center border border-border text-gold-soft transition-colors hover:border-gold/60 hover:text-gold"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d={d} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
