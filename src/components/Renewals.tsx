"use client";

import Link from "next/link";

const RENEWALS = [
    ["Registered Office", "Prestige and Elite · 12 months", "£59 / year"],
    ["Director Service Address", "Prestige and Elite · 12 months", "£35 / year"],
    ["Virtual Business Address", "Elite · 12 months", "£150 / year"],
];

export default function Renewals() {
    return (
        <section id="renewals" className="section-parchment border-t border-border scroll-mt-20 px-6 py-14 sm:py-20">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">Renewals</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl text-foreground font-display font-bold">
                    Clear Year-Two Address Pricing
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    No surprise renewals. These address-service prices apply from year two and are shown before purchase.
                </p>

                {/* Mobile: stacked service blocks */}
                <ul className="mt-8 divide-y divide-border border-y border-border md:hidden">
                    {RENEWALS.map(([s, i, r]) => (
                        <li key={s} className="py-5">
                            <p className="text-sm font-semibold text-foreground">{s}</p>
                            <p className="mt-2 text-sm text-muted-foreground">
                                <span className="text-foreground/80">Initial period:</span> {i}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">
                                <span className="text-foreground/80">Renewal:</span> {r}
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
                                    Service
                                </th>
                                <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                    Initial period
                                </th>
                                <th className="py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                    Renewal
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {RENEWALS.map(([s, i, r]) => (
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
