"use client";

import Image from "next/image";

const ADVISORY = [
    ["Your Residence", "Where you genuinely live matters for KYC and provider eligibility."],
    ["Your Activity", "Your SIC codes and business description should accurately reflect the business."],
    ["Your Ownership", "Directors, shareholders and PSCs should be structured correctly from the beginning."],
    ["Your Next Step", "Address, banking, payments, VAT and compliance should be considered before submission."],
];

export default function WhyChooseUs() {
    return (
        <section className="border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="order-2 lg:order-1">
                        <div>
                            <p className="eyebrow">Bespoke compliance review</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">We Don’t Just Automate — We Review</h2>
                        <p className="mt-6 leading-relaxed text-muted-foreground">
                            Off-the-shelf agents push every application straight to Companies House. We manually review your
                            proposed structure, SIC codes, and compliance details to reduce the chance of rejection or errors.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {ADVISORY.map(([title, desc]) => (
                                <li key={title} className="flex gap-3 text-sm text-foreground/90">
                                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] text-gold">
                                        ✓
                                    </span>
                                    <span>
                                        <strong className="font-semibold text-foreground">{title}: </strong>
                                        <span className="text-muted-foreground">{desc}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-border">
                            {/* Reusing an existing image or keeping a placeholder */}
                            <Image
                                src="/assets/advisory-team.webp"
                                alt="A professional adviser reviewing documents on a desk with a laptop"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
