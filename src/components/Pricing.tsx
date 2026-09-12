"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Button } from "./ui/button";


const PROVIDER_LOGOS = [
    { name: "Revolut", logo: "https://www.google.com/s2/favicons?domain=revolut.com&sz=128" },
    { name: "Wise", logo: "https://www.google.com/s2/favicons?domain=wise.com&sz=128" },
    { name: "Payoneer", logo: "https://www.google.com/s2/favicons?domain=payoneer.com&sz=128" },
    { name: "Airwallex", logo: "https://www.google.com/s2/favicons?domain=airwallex.com&sz=128" },
];

const PLANS: Array<{
    name: string;
    price: string;
    note: string;
    features: string[];
    cta: string;
    href: string;
    featured: boolean;
    logos?: boolean;
    footnote?: string;
    tag?: string;
}> = [
    {
        name: "Starter",
        price: "£199",
        note: "For founders who mainly require company incorporation and already have appropriate UK address arrangements.",
        features: [
            "UK company formation",
            "Companies House filing",
            "Digital company documents",
            "Key compliance reminders",
        ],
        cta: "Choose Starter",
        href: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i",
        featured: false,
    },
    {
        name: "Prestige",
        price: "£299",
        note: "For non-resident founders needing a complete London setup.",
        features: [
            "Everything in Starter",
            "Registered Office — 12 months",
            "Director Service Address — 12 months",
            "Eligible mail handling and scanning according to service scope",
            "Annual compliance support according to package scope",
        ],
        cta: "Choose Prestige",
        href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
        featured: false,
        tag: "Recommended for non-resident founders",
    },
    {
        name: "Elite",
        price: "£399",
        note: "For founders requiring broader establishment and banking-readiness support.",
        features: [
            "Everything in Prestige",
            "Virtual Business Address — use our address on your website and for eligible business correspondence",
            "Companies House Identity Verification for 1 Director",
            "High-Priority Support",
            "Bank Account Opening Support",
            "Best-fit provider recommendations",
            "Partner introductions where genuinely available",
            "Documents preparation & review",
            "Application assistance",
            "Enhanced compliance-document support",
        ],
        logos: true,
        footnote:
            "One director included. Additional directors or relevant persons are handled separately.",
        cta: "Choose Elite",
        href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
        featured: true,
        tag: "Most comprehensive",
    },
];

export default function Pricing({ inrRate }: { inrRate?: number | null } = {}) {
    const formatINR = (priceStr: string) => {
        if (!inrRate) return null;
        const gbp = parseInt(priceStr.replace(/[^0-9]/g, ''));
        if (isNaN(gbp)) return null;
        return `~ ₹${Math.round(gbp * inrRate).toLocaleString('en-IN')}`;
    };

    return (
        <section id="pricing" className="border-t border-border scroll-mt-20 px-6 py-14 sm:py-18">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">Packages</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    Fixed pricing. Everything stated up front.
                </h2>
                <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
                    {PLANS.map((p) => (
                        <article
                            key={p.name}
                            className={`relative flex flex-col p-8 sm:p-10 ${p.featured
                                    ? "section-dark border-y-2 border-gold bg-ink-deep shadow-[0_30px_60px_-30px_oklch(0_0_0/60%)] lg:-my-4 lg:py-14"
                                    : "bg-background"
                                }`}
                        >
                            <h3 className="font-display text-2xl">{p.name}</h3>
                            <p className="mt-1 h-4 text-[0.6rem] uppercase tracking-[0.14em] text-gold">
                                {p.tag ? p.tag : ""}
                            </p>
                            <div className="mt-8">
                                <p className="font-display text-4xl text-foreground">{p.price}</p>
                                {inrRate && (
                                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                                        {formatINR(p.price) || "(Current market rates apply)"}
                                    </p>
                                )}
                            </div>
                            <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
                            <ul className="mt-8 flex-1 space-y-2.5 border-t border-border pt-8 text-sm text-foreground/85">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5">
                                        <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            {p.logos ? (
                                <div className="mt-8 border-t border-border pt-6">
                                    <p className="eyebrow">Providers considered</p>
                                    <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
                                        {PROVIDER_LOGOS.map((b) => (
                                            <li key={b.name} className="flex items-center gap-2">
                                                <img
                                                    src={b.logo}
                                                    alt={`${b.name} logo`}
                                                    width={24}
                                                    height={24}
                                                    className="h-6 w-6 rounded-sm"
                                                />
                                                <span className="font-display text-lg text-foreground/70">{b.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                                        Provider availability depends on founder residence, business activity, ownership, KYC and
                                        individual eligibility. Final approval remains with the provider.
                                    </p>
                                </div>
                            ) : null}
                            {p.footnote ? (
                                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{p.footnote}</p>
                            ) : null}
                            <Button asChild variant={p.featured ? "default" : "ghost"} className="mt-10">
                                <a href={p.href}>{p.cta}</a>
                            </Button>
                            <a
                                href={`https://wa.me/447447488755?text=${encodeURIComponent(
                                    inrRate
                                        ? `Hi, I'm from India and interested in the ${p.name} package.`
                                        : `Hello Seven Oak Prestige, I have a question about the ${p.name} package.`
                                )}`}
                                className="mt-4 inline-block text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-gold hover:underline"
                            >
                                Have a question? Talk to an expert
                            </a>
                        </article>
                    ))}
                </div>
                
                {inrRate && (
                    <p className="mt-8 text-center max-w-3xl mx-auto text-xs leading-relaxed text-muted-foreground">
                        * Payments are charged in GBP. Rupee amounts are provided for convenience and are indicative based on exchange rates (updated daily).
                    </p>
                )}
                
                <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                    Financial-provider approval is not guaranteed and remains subject to each provider's eligibility, KYC
                    and risk assessment.
                </p>
            </div>
        </section>
    );
}
