"use client";

import { useTranslation } from "@/i18n/TranslationContext";

import Link from "next/link";

export default function Renewals() {
    const { t } = useTranslation();
    return (
        <section id="renewals" className="section-parchment border-t border-border scroll-mt-20 px-6 py-14 sm:py-20">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.renewals.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl text-foreground font-display font-bold">
                    {t.renewals.headline}
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {t.renewals.body}
                </p>

                {/* Mobile: stacked service blocks */}
                <ul className="mt-8 divide-y divide-border border-y border-border md:hidden">
                    {t.renewals.items.map(([s, i, r]) => (
                        <li key={s} className="py-5">
                            <p className="text-sm font-semibold text-foreground">{s}</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                <span className="text-foreground/80">{t.renewals.initialPeriodMobile}</span> {i}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                <span className="text-foreground/80">{t.renewals.renewalMobile}</span> {r}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Desktop table */}
                <div className="mt-10 hidden md:block">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-y border-border">
                                <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                    {t.renewals.serviceLabel}
                                </th>
                                <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                    {t.renewals.initialPeriod}
                                </th>
                                <th className="py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                    {t.renewals.renewal}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {t.renewals.items.map(([s, i, r]) => (
                                <tr key={s}>
                                    <td className="py-4 pr-6 font-semibold text-foreground">{s}</td>
                                    <td className="py-4 pr-6 text-muted-foreground">{i}</td>
                                    <td className="py-4 text-muted-foreground">{r}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
