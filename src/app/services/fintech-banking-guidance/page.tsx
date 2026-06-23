"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaCheck, FaCreditCard, FaShieldAlt, FaGlobeAmericas, FaMoneyBillWave } from "react-icons/fa";
import Footer from "@/components/Footer";

const platforms = [
    { icon: <FaCreditCard className="h-6 w-6" />, title: "Stripe", description: "Payment processing setup and verification guidance for UK Stripe accounts." },
    { icon: <FaGlobeAmericas className="h-6 w-6" />, title: "Wise Business", description: "Multi-currency business account setup support and compliance readiness." },
    { icon: <FaShieldAlt className="h-6 w-6" />, title: "Revolut Business", description: "UK business banking with international transfer capabilities." },
];

export default function FintechBankingGuidance() {
    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20 hidden dark:block">
                    <Image src="/assets/services/fintech.webp" alt="UK Fintech & Business Banking Guidance" fill className="object-cover object-center" priority quality={100} />
                    {/* Gradient overlay to make left text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-left">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                            </span>
                            <span className="text-sm font-medium text-[#d4af37]">Banking & Fintech</span>
                        </div>
                        
                        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-[#d4af37] sm:text-5xl md:text-6xl uppercase">
                            FINTECH & BANKING
                        </h1>
                        
                        <div className="h-[1px] w-24 bg-[#d4af37]/50 mb-6"></div>

                        <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl uppercase tracking-wider font-light">
                            EXPERT GUIDANCE FOR UK BUSINESS<br/>
                            BANKING & FINTECH ACCOUNTS
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md border border-[#d4af37] bg-[#d4af37]/10 px-8 py-3 text-base font-medium text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/20 hover:shadow-lg hover:shadow-[#d4af37]/20 sm:text-lg backdrop-blur-sm">
                                <span>Get in Touch</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-20 w-full border-t border-[#d4af37]/20 bg-background/40 backdrop-blur-md pt-8 pb-8 hidden lg:block">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-4 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaCreditCard className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">FINTECH ACCOUNTS</h3>
                                <p className="text-xs text-muted-foreground">Guidance on Stripe, Wise, and Revolut</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaGlobeAmericas className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">MULTI-CURRENCY</h3>
                                <p className="text-xs text-muted-foreground">Accept and send payments globally</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaShieldAlt className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">COMPLIANCE SUPPORT</h3>
                                <p className="text-xs text-muted-foreground">Ensure your business meets requirements</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaMoneyBillWave className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PAYMENT GATEWAYS</h3>
                                <p className="text-xs text-muted-foreground">Seamless integration guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Bottom Bar (Scrollable) */}
                <div className="relative z-10 mt-12 w-full border-t border-[#d4af37]/20 bg-background/40 backdrop-blur-md py-6 lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    <div className="flex gap-6 px-4 w-max">
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaCreditCard className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">FINTECH ACCOUNTS</h3>
                                <p className="text-xs text-muted-foreground">Guidance on Stripe, Wise, and Revolut</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaGlobeAmericas className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">MULTI-CURRENCY</h3>
                                <p className="text-xs text-muted-foreground">Accept and send payments globally</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaShieldAlt className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">COMPLIANCE SUPPORT</h3>
                                <p className="text-xs text-muted-foreground">Ensure your business meets requirements</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaMoneyBillWave className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PAYMENT GATEWAYS</h3>
                                <p className="text-xs text-muted-foreground">Seamless integration guidance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY BANKING MATTERS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">BANKING READINESS</span>
                        <h2 className="hero-heading mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Why Banking Setup Matters</h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>One of the biggest challenges for new UK companies — especially those owned by non-residents — is opening a business bank account or getting approved by fintech platforms. Many applications are rejected due to incomplete documentation or non-compliant company structures.</p>
                            <p>Our fintech and banking guidance service helps ensure your company structure, documentation, and compliance profile are optimised for a successful application with leading UK-compatible financial platforms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PLATFORMS WE SUPPORT ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">PLATFORMS</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Platforms We Support</h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
                        {platforms.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] sm:p-8">
                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] shadow-sm transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">{item.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">OUR GUIDANCE</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">What&apos;s Included</h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {[
                            "Company Structure Review",
                            "Documentation Preparation",
                            "Platform Selection Guidance",
                            "Application Support",
                            "Compliance Profile Optimisation",
                            "Ongoing Banking Support",
                        ].map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] transition-transform duration-500 group-hover:scale-110">
                                        <FaCheck className="h-4 w-4" />
                                    </div>
                                    <span className="text-base font-semibold text-foreground">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="cta-section relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="cta-main-title mb-6 text-4xl font-normal tracking-wider sm:text-5xl lg:text-6xl">Get Banking Ready</h2>
                    <p className="cta-subtitle mb-10 text-lg font-light sm:text-xl lg:text-2xl">Expert guidance for fintech accounts and UK business banking.</p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link href="https://wa.me/447447488755" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-10 py-5 text-lg font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95">
                            <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            <span>Contact Us</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">WhatsApp: <span className="font-semibold text-[#d4af37]">+44 7447 488755</span></p>
                </div>
            </section>

            <Footer />
        </>
    );
}
