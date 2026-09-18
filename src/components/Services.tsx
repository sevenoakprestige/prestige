"use client";

import { useTranslation } from "@/i18n/TranslationContext";

import Link from "next/link";
import { Button } from "./ui/button";

export default function Services() {
    const { t } = useTranslation();
    return (
        <section id="services" className="section-parchment border-t border-border scroll-mt-20 py-24 sm:py-32 px-6">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.services.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl font-display font-bold tracking-tight sm:text-4xl text-foreground">
                    {t.services.headline}
                </h2>
                <dl className="mt-14 divide-y divide-border border-y border-border">
                    {t.services.items.map(([title, desc]) => (
                        <div key={title} className="grid gap-2 py-6 sm:grid-cols-[0.4fr_1fr] sm:gap-10">
                            <dt className="text-sm font-semibold text-foreground">{title}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">{desc}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
