"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GOOGLE_REVIEWS_URL = "https://share.google/owyOtNunkhfg4c0dE";

const REVIEWS = [
    {
        name: "Daniel K.",
        rating: 5,
        text: "The process was professional, efficient and clearly managed from start to finish. My company was operational without delays.",
    },
    {
        name: "Ade S.",
        rating: 5,
        text: "Registered office and director address were set up alongside the incorporation. Everything arrived exactly as promised.",
    },
    {
        name: "Sofia M.",
        rating: 5,
        text: "Clear guidance on the documents required, and a named adviser who answered every question along the way.",
    },
];

const OVERALL_RATING = "5.0";

function Stars({ n }: { n: number }) {
    return (
        <div className="flex gap-1.5 text-gold" aria-label={`Rated ${n} out of 5`}>
            {Array.from({ length: n }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M10 1.5l2.47 5.27 5.53.72-4.06 3.9 1.03 5.61L10 14.35 5.03 17l1.03-5.61L2 7.49l5.53-.72L10 1.5z" />
                </svg>
            ))}
        </div>
    );
}

function GoogleMark() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
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

export default function Testimonials() {
    const scroller = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const loop = [...REVIEWS, ...REVIEWS, ...REVIEWS];

    const nudge = useCallback((dir: number) => {
        const el = scroller.current;
        if (!el) return;
        el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
    }, []);

    // Continuous smooth drift; pauses on hover / touch.
    useEffect(() => {
        if (paused) return;
        const el = scroller.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let raf = 0;
        let last = performance.now();
        let fractional = el.scrollLeft;

        const step = (now: number) => {
            const dt = now - last;
            last = now;
            
            fractional += (dt / 1000) * 35; // 35px per second
            
            // Sync if user manually scrolled (if actual scroll differs significantly from our tracked fraction)
            if (Math.abs(el.scrollLeft - fractional) > 2) {
                fractional = el.scrollLeft;
            }
            
            el.scrollLeft = fractional;

            const third = el.scrollWidth / 3;
            if (el.scrollLeft >= third * 2) {
                el.scrollLeft -= third;
                fractional -= third;
            }
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [paused]);

    // Start in the middle copy so manual back-scrolling works.
    useEffect(() => {
        const el = scroller.current;
        if (el) el.scrollLeft = el.scrollWidth / 3;
    }, []);


    return (
        <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">Client reviews</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    What Our Clients Say About Our UK Setup Service
                </h2>
                <div className="mt-12">
                    <div
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onTouchStart={() => setPaused(true)}
                        onTouchEnd={() => setPaused(false)}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-6">
                            <div className="flex items-center gap-3">
                                <GoogleMark />
                                <Stars n={5} />
                                <span className="text-sm font-semibold text-foreground">{OVERALL_RATING} / 5 on Google</span>
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
                            className="mt-8 flex gap-px overflow-x-auto bg-border [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
                        >
                            {loop.map((r, idx) => (
                                <a
                                    key={`${r.name}-${idx}`}
                                    href={GOOGLE_REVIEWS_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex w-[85%] shrink-0 flex-col bg-background p-8 transition-colors hover:bg-accent sm:w-[48%] lg:w-[36%]"
                                >
                                    <div className="flex items-center justify-between">
                                        <Stars n={r.rating} />
                                        <GoogleMark />
                                    </div>
                                    <blockquote className="mt-6 flex-1 font-display text-lg leading-snug text-foreground/90">
                                        “{r.text}”
                                    </blockquote>
                                    <span className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
                                        <span className="font-semibold text-foreground/85">{r.name}</span> · Google review
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
                            {REVIEWS.map((r) => (
                                <p key={r.name}>
                                    {r.name}, {r.rating} stars: {r.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
