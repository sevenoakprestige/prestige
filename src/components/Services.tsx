"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const INCLUDED = [
    [
        "Company Incorporation",
        "Preparation and submission of your company incorporation to Companies House.",
    ],
    [
        "Company Documents",
        "Certificate of Incorporation, Memorandum & Articles, Share Certificate, Company Register.",
    ],
    [
        "KYC & Onboarding Review",
        "We review the identification, proof-of-address and onboarding information required for our compliance and company-formation process. This is separate from Companies House statutory identity verification.",
    ],
    ["UK Address Services", "A London registered office and director service address, so your home address stays off the public register."],
    ["Mail Handling", "Your company mail is received in London, checked and scanned to you by email."],
    [
        "Banking Readiness",
        "We prepare your business profile and documents so applications are not rejected on avoidable detail.",
    ],
    ["Compliance Support", "Filing reminders before deadlines, and clear guidance on what to do after incorporation."],
];

export default function Services() {
    return (
        <section id="services" className="section-parchment border-t border-border scroll-mt-20 py-24 sm:py-32 px-6">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">Scope of service</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl font-display font-bold tracking-tight sm:text-4xl text-foreground">
                    What Is Included in Your UK Company Setup?
                </h2>
                <dl className="mt-14 divide-y divide-border border-y border-border">
                    {INCLUDED.map(([t, b]) => (
                        <div key={t} className="grid gap-2 py-6 sm:grid-cols-[0.4fr_1fr] sm:gap-10">
                            <dt className="text-sm font-semibold text-foreground">{t}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">{b}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
