"use client";

import Image from "next/image";

const WHY = [
    ["UK-Based Advisory Firm", "Deal directly with Seven Oak Prestige Ltd, a registered UK company."],
    [
        "Human Review",
        "A named adviser reviews your residence, activity, ownership and company details before filing.",
    ],
    [
        "Built for Non-Residents",
        "Remote onboarding, UK address options and document checks are designed around international founders.",
    ],
    [
        "Beyond Incorporation",
        "Prestige and Elite add address, mail, verification and banking-readiness support where required.",
    ],
];

export default function WhyChooseUs() {
    return (
        <section className="border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">Why Seven Oak</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    More Than an Incorporation Platform
                </h2>
                <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {WHY.map(([t, b]) => (
                        <article key={t} className="bg-background p-8">
                            <span className="block h-px w-8 bg-gold/60" aria-hidden="true" />
                            <h3 className="mt-5 text-base font-semibold text-foreground">{t}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    One named adviser stays with you throughout your setup, from the first review to your
                    post-incorporation next steps.
                </p>
            </div>
        </section>
    );
}
