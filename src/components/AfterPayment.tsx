"use client";

import { useTranslation } from "@/i18n/TranslationContext";

export default function AfterPayment() {
    const { t } = useTranslation();

    return (
        <section className="border-t border-border py-16 sm:py-20 px-6">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.afterPayment.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl text-foreground font-display font-bold">
                    {t.afterPayment.headline}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {t.afterPayment.body}
                </p>
                <ol className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {t.afterPayment.steps.map(([n, title, text]) => (
                        <li key={n} className="bg-background p-7">
                            <span className="font-display text-xl text-gold">{n}</span>
                            <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
