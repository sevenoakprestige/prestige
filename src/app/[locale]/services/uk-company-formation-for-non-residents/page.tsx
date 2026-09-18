"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaCheck, FaPlus, FaMinus, FaGlobeAmericas, FaShieldAlt, FaBuilding, FaUserTie, FaBolt, FaPassport, FaFileAlt, FaClipboardCheck, FaEnvelopeOpenText, FaCreditCard, FaLock } from "react-icons/fa";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { useTranslation } from "@/i18n/TranslationContext";

export default function UKCompanyFormationForNonResidents() {
    const { t, locale } = useTranslation();
    const data = t.servicesPages.nonResidents;
    const [openFaqItems, setOpenFaqItems] = useState<Set<number>>(new Set());

    const toggleFaq = (index: number) => {
        const newOpen = new Set(openFaqItems);
        if (newOpen.has(index)) {
            newOpen.delete(index);
        } else {
            newOpen.add(index);
        }
        setOpenFaqItems(newOpen);
    };

    const countries = [
        { flag: "🇦🇪", name: data.globalReach.countries[0] },
        { flag: "🇸🇦", name: data.globalReach.countries[1] },
        { flag: "🇶🇦", name: data.globalReach.countries[2] },
        { flag: "🇴🇲", name: data.globalReach.countries[3] },
        { flag: "🇰🇼", name: data.globalReach.countries[4] },
        { flag: "🇳🇬", name: data.globalReach.countries[5] },
        { flag: "🇬🇭", name: data.globalReach.countries[6] },
        { flag: "🇿🇦", name: data.globalReach.countries[7] },
        { flag: "🇰🇪", name: data.globalReach.countries[8] },
        { flag: "🇮🇳", name: data.globalReach.countries[9] },
        { flag: "🇵🇰", name: data.globalReach.countries[10] },
        { flag: "🌏", name: data.globalReach.countries[11] },
        { flag: "🇪🇺", name: data.globalReach.countries[12] },
        { flag: "🌎", name: data.globalReach.countries[13] },
    ];

    const whyReasons = [
        {
            icon: <FaShieldAlt className="h-7 w-7" />,
            title: data.whyChoose.items[0].title,
            description: data.whyChoose.items[0].desc,
        },
        {
            icon: <FaGlobeAmericas className="h-7 w-7" />,
            title: data.whyChoose.items[1].title,
            description: data.whyChoose.items[1].desc,
        },
        {
            icon: <FaBuilding className="h-7 w-7" />,
            title: data.whyChoose.items[2].title,
            description: data.whyChoose.items[2].desc,
        },
        {
            icon: <FaUserTie className="h-7 w-7" />,
            title: data.whyChoose.items[3].title,
            description: data.whyChoose.items[3].desc,
        },
        {
            icon: <FaBolt className="h-7 w-7" />,
            title: data.whyChoose.items[4].title,
            description: data.whyChoose.items[4].desc,
        },
    ];

    const steps = [
        {
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            title: data.process.items[0].title,
            description: data.process.items[0].desc,
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: data.process.items[1].title,
            description: data.process.items[1].desc,
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: data.process.items[2].title,
            description: data.process.items[2].desc,
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: data.process.items[3].title,
            description: data.process.items[3].desc,
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: data.process.items[4].title,
            description: data.process.items[4].desc,
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: data.process.items[5].title,
            description: data.process.items[5].desc,
        },
    ];

    const faqPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faq.items.map((item: any) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a,
            },
        })),
    };
    const prefix = locale === 'en' ? '' : `/${locale}`;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
            />
            {/* ── HERO SECTION ── */}
            <section className="section-dark relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/services/uk_company_formation.webp" alt="UK Company Formation for Non-Residents — Seven Oak Prestige" fill className="object-cover object-center" priority quality={85} />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-2xl text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
                            </span>
                            <span className="text-sm font-medium text-gold">
                                {data.hero.badge}
                            </span>
                        </div>

                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.hero.eyebrow}
                        </span>
                        <div className="mb-6 h-px w-24 rule-gold" />

                        <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            {data.hero.title}{" "}
                            <span className="text-gold">
                                {data.hero.titleHighlight}
                            </span>
                        </h1>

                        <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl font-light">
                            {data.hero.subtitle}
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="btn-ghost">
                                {data.hero.btn1}
                            </Link>
                            <Link href={`${prefix}/#pricing`} className="btn-gold">
                                {data.hero.btn2}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-20 w-full border-t border-gold/20 bg-background/40 backdrop-blur-md pt-8 pb-8 hidden lg:block">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-3 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaBolt className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{data.bottomBar[0].title}</h3>
                                <p className="text-xs text-muted-foreground">{data.bottomBar[0].desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaGlobeAmericas className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{data.bottomBar[1].title}</h3>
                                <p className="text-xs text-muted-foreground">{data.bottomBar[1].desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaPassport className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{data.bottomBar[2].title}</h3>
                                <p className="text-xs text-muted-foreground">{data.bottomBar[2].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Bottom Bar */}
                <div className="relative z-10 mt-12 w-full border-t border-gold/20 bg-background/40 backdrop-blur-md py-6 lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    <div className="flex gap-6 px-4 w-max">
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaBolt className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{data.bottomBar[0].title}</h3>
                                <p className="text-xs text-muted-foreground">{data.bottomBar[0].desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaGlobeAmericas className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{data.bottomBar[1].title}</h3>
                                <p className="text-xs text-muted-foreground">{data.bottomBar[1].desc}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaPassport className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">{data.bottomBar[2].title}</h3>
                                <p className="text-xs text-muted-foreground">{data.bottomBar[2].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CAN A NON-RESIDENT OPEN A UK COMPANY? ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.eligibility.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.eligibility.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>

                        <p className="text-3xl font-bold text-gold mb-6">{data.eligibility.bigYes}</p>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {data.eligibility.paragraphs.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO CAN REGISTER ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.globalReach.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.globalReach.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <p className="text-center text-base text-muted-foreground mb-10 max-w-3xl mx-auto sm:text-lg">
                        {data.globalReach.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/25 px-4 py-4 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-card/40 hover:shadow-[0_10px_25px_rgba(212,175,55,0.08)]"
                            >
                                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>
                                <span className="text-2xl mb-2 block">{country.flag}</span>
                                <span className="text-sm font-medium text-foreground">{country.name}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-muted-foreground text-sm sm:text-base">
                        {data.globalReach.footer}
                    </p>
                </div>
            </section>

            {/* ── WHY INTERNATIONAL ENTREPRENEURS CHOOSE A UK COMPANY ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.whyChoose.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.whyChoose.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {whyReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-card/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] sm:p-8"
                            >
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">
                                        {reason.icon}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 group-hover:blur-[40px] pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DOCUMENTS REQUIRED ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.documents.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.documents.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: <FaPassport className="h-6 w-6" />, title: data.documents.items[0].title, description: data.documents.items[0].desc },
                            { icon: <FaFileAlt className="h-6 w-6" />, title: data.documents.items[1].title, description: data.documents.items[1].desc },
                            { icon: <FaClipboardCheck className="h-6 w-6" />, title: data.documents.items[2].title, description: data.documents.items[2].desc },
                            { icon: <FaUserTie className="h-6 w-6" />, title: data.documents.items[3].title, description: data.documents.items[3].desc },
                            { icon: <FaEnvelopeOpenText className="h-6 w-6" />, title: data.documents.items[4].title, description: data.documents.items[4].desc },
                        ].map((doc, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-card/40"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold mb-4 transition-transform duration-500 group-hover:scale-110">
                                    {doc.icon}
                                </div>
                                <h3 className="mb-1 text-base font-bold text-foreground">{doc.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-center text-sm text-muted-foreground italic">
                        {data.documents.footer}
                    </p>
                </div>
            </section>

            {/* ── PACKAGE OVERVIEW ── */}
            <Pricing />

            {/* ── COMPANY FORMATION PROCESS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.process.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.process.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] text-left"
                            >
                                <div className="absolute right-4 top-4 select-none font-serif text-[100px] font-black leading-none text-foreground/[0.03] transition-all duration-500 group-hover:text-gold/[0.05]">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">
                                    {step.icon}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-3 inline-flex items-center gap-2">
                                        <span className="h-[1px] w-4 bg-gold/60"></span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                                            {data.process.stepLabel} 0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 font-serif text-lg font-bold leading-tight text-foreground sm:text-xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-foreground/70">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BANKING & COMPLIANCE ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">{data.banking.eyebrow}</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.banking.title}</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {data.banking.paragraphs.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SEVEN OAK PRESTIGE ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.whyUs.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.whyUs.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>

                        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {data.whyUs.paragraphs.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-16 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            {data.faq.eyebrow}
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {data.faq.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="space-y-3">
                        {data.faq.items.map((item: any, index: number) => {
                            const isOpen = openFaqItems.has(index);
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 backdrop-blur-md transition-all duration-500 hover:border-gold/45"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="faq-question flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-gold/5 sm:p-5"
                                    >
                                        <span className="flex-1 font-semibold">
                                            {item.q}
                                        </span>
                                        <span className="flex-shrink-0 text-gold">
                                            {isOpen ? (
                                                <FaMinus className="h-4 w-4" />
                                            ) : (
                                                <FaPlus className="h-4 w-4" />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`faq-answer overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                    >
                                        <div className="border-t border-border/40 p-4 sm:p-5">
                                            <p className="leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SEO INTERNAL LINKS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">{data.relatedServices.eyebrow}</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {data.relatedServices.title}
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {[
                            { title: data.relatedServices.items[0].title, href: `${prefix}/services/virtual-business-address`, description: data.relatedServices.items[0].desc },
                            { title: data.relatedServices.items[1].title, href: `${prefix}/services/vat-registration-uk`, description: data.relatedServices.items[1].desc },
                            { title: data.relatedServices.items[2].title, href: `${prefix}/services/registered-office-service`, description: data.relatedServices.items[2].desc },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-card/40"
                            >
                                <h3 className="mb-2 text-base font-bold text-gold">{link.title}</h3>
                                <p className="text-sm text-muted-foreground">{link.description}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold">
                                    {data.relatedServices.learnMore}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-display mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                        {data.cta.title}
                    </h2>

                    <p className="mb-4 text-lg font-light sm:text-xl lg:text-2xl text-foreground/80">
                        {data.cta.desc1}
                    </p>
                    <p className="mb-10 text-base font-light sm:text-lg text-foreground/80">
                        {data.cta.desc2}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            className="btn-gold"
                        >
                            <FaWhatsapp className="h-5 w-5" />
                            <span>{data.cta.btn}</span>
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-foreground/70">
                        {data.cta.whatsappLabel} <span className="font-semibold text-gold">+44 7447 488755</span>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
