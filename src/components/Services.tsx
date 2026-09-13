"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const SUPPORTED = [
    ["E-commerce & Amazon FBA", "International sellers needing a credible UK structure."],
    ["Consultants & Agencies", "Professional service businesses with international clients."],
    ["SaaS & Digital Businesses", "Technology companies requiring a UK entity."],
    ["International Founders", "Non-UK residents establishing a company remotely."],
    ["Import / Export", "Trading businesses moving goods through the UK."],
    ["International Expansion", "Established businesses opening a UK arm."],
];

const INCLUDED = [
    ["Company Incorporation", "Preparation and submission of your company incorporation to Companies House."],
    ["Company Documents", "Certificate of Incorporation, Memorandum & Articles, Share Certificate, Company Register."],
    ["Registered Office", "A prestigious London address for your company’s public record."],
    ["Director Service Address", "Keep your residential address off the public register."],
    ["Mail Scanning", "Official government mail scanned and emailed to you securely."],
    ["Digital Copies", "All corporate documents delivered digitally upon incorporation."],
    ["Compliance Review", "Manual review of your application before submission."],
    ["Named Adviser", "A dedicated contact for any questions during the process."],
];

const MAIL_STEPS = [
    ["01", "Mail Arrives in London", "Eligible correspondence is received at the Seven Oak address."],
    ["02", "We Identify and Review It", "Mail is matched to your company and checked for relevance."],
    [
        "03",
        "Scanned & Transmitted Digitally",
        "Where included in your package, eligible mail is scanned and transmitted electronically.",
    ],
];

const MAIL_FLOW = ["Mail received in London", "Reviewed", "Eligible mail scanned", "Transmitted digitally"];

export default function Services() {
    return (
        <>
            {/* Who we support */}
            <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">Global founders</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Who We Support</h2>
                    <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                        {SUPPORTED.map(([title, desc]) => (
                            <div key={title} className="surface flex flex-col p-6">
                                <h3 className="font-semibold text-foreground">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What is included */}
            <section className="border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">Comprehensive package</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Everything Required to Operate</h2>
                    <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                        We do not strip out essential services to sell them back to you later. Our non-resident package
                        includes the registered addresses, documents and support you actually need to open an account and
                        trade.
                    </p>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {INCLUDED.map(([title, desc]) => (
                            <div key={title} className="border border-border p-6">
                                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UK address + mail scanning */}
            <section id="mail" className="border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                        <div>
                            <p className="eyebrow">Address & correspondence</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Your UK Mail, Accessible From Anywhere
                        </h2>
                        <ol className="mt-12 divide-y divide-border border-t border-border">
                            {MAIL_STEPS.map(([n, t, b]) => (
                                <li key={n} className="flex gap-8 py-7">
                                    <span className="font-display text-2xl text-gold">{n}</span>
                                    <div>
                                        <h3 className="text-base font-semibold">{t}</h3>
                                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{b}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-8 max-w-lg border-l-2 border-gold/60 pl-5 text-sm leading-relaxed text-foreground/85">
                            Where included in your package, eligible company correspondence received at your Seven Oak address
                            is identified and transmitted electronically according to the service scope. You do not need to
                            travel to London to monitor it.
                        </p>
                        <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            {MAIL_FLOW.map((f, i) => (
                                <li key={f} className="flex items-center gap-3">
                                    <span>{f}</span>
                                    {i < MAIL_FLOW.length - 1 ? <span className="text-gold">→</span> : null}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <img
                        src="/assets/mail-handling.webp"
                        alt="Company mail being scanned and processed at a London office desk"
                        width={1408}
                        height={1008}
                        loading="lazy"
                        decoding="async"
                        className="w-full object-cover"
                    />
                </div>
            </section>

            {/* Identity verification */}
            <section id="identity" className="section-parchment border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">Verification</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        Companies House Identity Verification
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Relevant directors and People with Significant Control may need to complete Companies House identity
                        verification and obtain their Companies House personal code. For Seven Oak's verification service, the
                        standard evidence requested is a valid passport and proof of residential address.
                    </p>
                    <ol className="mt-7 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
                        {["Identity", "Verification", "Personal Code", "Incorporation"].map((s, i) => (
                            <li key={s} className="flex items-baseline gap-2 bg-background px-4 py-3.5">
                                <span className="font-display text-base text-gold">{`0${i + 1}`}</span>
                                <p className="text-sm font-semibold text-foreground">{s}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="mt-6 max-w-2xl border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-foreground/85">
                        KYC onboarding and Companies House statutory identity verification are separate processes.
                    </p>
                    <Button asChild variant="ghost" className="mt-7">
                        <Link href="/guides">Learn About Identity Verification</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
