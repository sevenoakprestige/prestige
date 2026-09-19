"use client";

import { useTranslation } from "@/i18n/TranslationContext";

import { useState } from "react";

export default function FAQ() {
    const { t } = useTranslation();
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="section-parchment border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <div>
                            <p className="eyebrow">{t.faq.eyebrow}</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.faq.headline}</h2>
                    </div>
                    <div>
                        <div className="divide-y divide-border border-y border-border">
                            {t.faq.items.map((item, i) => {
                                const isOpen = open === i;
                                return (
                                    <div key={item.q}>
                                        <h3>
                                            <button
                                                type="button"
                                                onClick={() => setOpen(isOpen ? null : i)}
                                                aria-expanded={isOpen}
                                                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
                                            >
                                                <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                                                <span
                                                    className={`mt-1 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                                    aria-hidden="true"
                                                >
                                                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                                                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div
                                            className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
