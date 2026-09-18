"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n/TranslationContext";

export default function WhyChooseUs() {
    const t = useTranslation().t.why;
    
    return (
        <section className="border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    {t.headline}
                </h2>
                <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {t.items.map(([title, description]) => (
                        <article key={title} className="bg-background p-8">
                            <span className="block h-px w-8 bg-gold/60" aria-hidden="true" />
                            <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                </p>
            </div>
        </section>
    );
}
