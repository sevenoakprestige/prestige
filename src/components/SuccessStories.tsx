"use client";

import Link from "next/link";
import Image from "next/image";

const DELIVERABLES = [
    ["Certificate of Incorporation", "Issued by Companies House after successful incorporation."],
    ["Memorandum & Articles of Association", "Your company's constitutional documents."],
    ["Share Certificate", "Issued for the shareholder(s) according to the agreed allocation."],
    ["Company Register", "A structured record of ownership and key corporate information."],
    ["Company Number", "Issued on incorporation and shown on the public register."],
    ["UTR Support", "The Corporation Tax UTR is forwarded when received from HMRC."],
];

const WHY = [
    ["UK-Based Advisory Firm", "A direct relationship with Seven Oak Prestige Ltd."],
    ["Human Review", "Your application is reviewed rather than treated purely as an automated order."],
    ["International Founder Experience", "Designed around non-resident structures and cross-border onboarding."],
    ["Beyond Incorporation", "Address, compliance and banking-readiness considerations are reviewed as part of the wider setup."],
];

const GUIDES = [
    ["India", "UK company formation for Indian founders.", "/countries/india/uk-company-formation"],
    ["France", "Créer une société UK depuis la France.", "/countries/france/uk-company-formation"],
    ["UAE", "UK company formation for founders in the UAE.", "/countries"],
    ["Non-Residents", "Complete international-founder formation guide.", "/countries"],
];

export default function SuccessStories() {
    return (
        <>
            {/* Deliverables */}
            <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="w-full lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)]">
                        <div className="relative aspect-[4/3] h-full w-full overflow-hidden bg-border lg:aspect-auto">
                            <Image
                                src="/assets/documents.jpg"
                                alt="Incorporation certificate, company documents and a fountain pen on a desk"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="eyebrow">Digital delivery</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">What You Receive</h2>
                        <p className="mt-6 leading-relaxed text-muted-foreground">
                            All statutory documents are provided digitally as PDF files, which are the standard format
                            required by banks and payment processors.
                        </p>
                        <ul className="mt-10 divide-y divide-border border-t border-border">
                            {DELIVERABLES.map(([title, desc]) => (
                                <li key={title} className="py-6">
                                    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Case study */}
            <section className="border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="relative aspect-square w-full overflow-hidden bg-border">
                            <Image
                                src="/assets/case-study.jpg"
                                alt="A founder in a cafe reviewing company documents on a laptop"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover opacity-90"
                            />
                    </div>
                    <div>
                        <div>
                            <p className="eyebrow">Case study</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="mt-6 text-2xl font-semibold leading-tight sm:text-3xl">
                            Forming a UK Tech Consultancy from India
                        </h2>
                        <ul className="mt-8 space-y-4">
                            {[
                                "A software engineer in Bangalore required a UK limited company to contract with European clients.",
                                "We formed the company using our Elite package.",
                                "The company used our London Registered Office and the director used our Director Service Address.",
                                "A business profile and structuring summary was prepared to assist their application for a multi-currency business account.",
                            ].map((s, idx) => (
                                <li key={idx} className="text-sm leading-relaxed text-muted-foreground">
                                    {s}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 border-l-2 border-gold/60 pl-5 text-sm leading-relaxed text-foreground/85">
                            Outcome — UK company incorporated in approximately 2 business days after the required information
                            and verification were complete.
                        </p>
                        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                            This case reflects a genuine international-founder scenario. Timelines vary depending on the
                            completeness of documents, checks and registrar processing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Seven Oak */}
            <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">Why Seven Oak</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
                        More Than an Incorporation Platform
                    </h2>
                    <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {WHY.map(([t, b]) => (
                            <article key={t} className="bg-background p-8">
                                <span className="block h-px w-8 bg-gold/60" aria-hidden="true" />
                                <h3 className="mt-5 text-base font-semibold">{t}</h3>
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

            {/* Country guidance */}
            <section className="border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <div>
                                <p className="eyebrow">Guidance</p>
                                <div className="mt-4 h-px w-16 rule-gold" />
                            </div>
                            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Guidance for International Founders</h2>
                        </div>
                        <Link
                            href="/countries"
                            className="border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
                        >
                            Explore All Countries
                        </Link>
                    </div>
                    <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                        {GUIDES.map(([t, b, link]) => (
                            <Link
                                key={t}
                                href={link}
                                className="group bg-background p-8 transition-colors hover:bg-accent block"
                            >
                                <span
                                    className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14"
                                    aria-hidden="true"
                                />
                                <h3 className="mt-5 font-display text-xl">{t}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
