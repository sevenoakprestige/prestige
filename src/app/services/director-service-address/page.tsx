"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaCheck, FaShieldAlt, FaFileAlt } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function DirectorServiceAddress() {
    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20 hidden dark:block">
                    <Image src="/assets/services/dsa.webp" alt="Director Service Address UK" fill className="object-cover object-center" priority quality={100} />
                    {/* Gradient overlay to make left text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-2xl text-left">
                        <h2 className="mb-4 text-sm font-medium tracking-[0.2em] text-[#d4af37] uppercase">
                            DIRECTOR SERVICE ADDRESS
                        </h2>
                        
                        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            Privacy. Protection. <br/> <span className="text-[#d4af37]">Peace of Mind.</span>
                        </h1>
                        
                        <div className="h-[2px] w-12 bg-[#d4af37] mb-6"></div>

                        <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl font-light">
                            Keep your personal address private and stay compliant with Companies House requirements.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md border border-[#d4af37] bg-[#d4af37]/10 px-8 py-3 text-base font-medium text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/20 hover:shadow-lg hover:shadow-[#d4af37]/20 sm:text-lg backdrop-blur-sm">
                                <span>Get in Touch</span>
                            </Link>
                            <Link href="https://buy.stripe.com/7sYfZ9asU9DL1RP5xifw404" target="_blank" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-3 text-base font-bold text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/30 hover:scale-105 active:scale-95 sm:text-lg">
                                <span>Add to Order</span>
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="relative z-10 mt-20 w-full border-t border-[#d4af37]/20 bg-background/40 backdrop-blur-md pt-8 pb-8 hidden lg:block">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-3 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaShieldAlt className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PROTECT ADDRESS</h3>
                                <p className="text-xs text-muted-foreground">Keep your personal address private</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaFileAlt className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">STAY COMPLIANT</h3>
                                <p className="text-xs text-muted-foreground">Companies House compliant</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaCheck className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">CONFIDENTIAL</h3>
                                <p className="text-xs text-muted-foreground">Secure & confidential handling</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Bottom Bar (Scrollable) */}
                <div className="relative z-10 mt-12 w-full border-t border-[#d4af37]/20 bg-background/40 backdrop-blur-md py-6 lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    <div className="flex gap-6 px-4 w-max">
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaShieldAlt className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PROTECT ADDRESS</h3>
                                <p className="text-xs text-muted-foreground">Keep your personal address private</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaFileAlt className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">STAY COMPLIANT</h3>
                                <p className="text-xs text-muted-foreground">Companies House compliant</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaCheck className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">CONFIDENTIAL</h3>
                                <p className="text-xs text-muted-foreground">Secure & confidential handling</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEEP YOUR PERSONAL ADDRESS PRIVATE ── */}
            <section id="privacy-section" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">PRIVACY PROTECTION</span>
                        <h2 className="hero-heading mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Keep Your Personal Address Private</h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>UK company directors are required to provide a correspondence address that is recorded on the public Companies House register. Without a Director Service Address, your personal home address will be publicly visible to anyone who searches for your company.</p>
                            <p>Our Director Service Address provides full privacy protection by using a professional UK address as your official director correspondence address, keeping your personal details off the public record.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPLIANCE ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">LEGAL REQUIREMENTS</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Compliance With UK Regulations</h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {[
                            "Meets Companies House legal requirements",
                            "Professional UK correspondence address",
                            "Privacy protection for directors",
                            "Keeps personal details off public register",
                            "Suitable for UK and non-resident directors",
                            "Ongoing address maintenance included",
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
                    <h2 className="cta-main-title mb-6 text-4xl font-normal tracking-wider sm:text-5xl lg:text-6xl">Protect Your Director Details</h2>
                    <p className="cta-subtitle mb-10 text-lg font-light sm:text-xl lg:text-2xl">Use a professional UK service address for your director correspondence.</p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link href="https://wa.me/447447488755" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-10 py-5 text-lg font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95">
                            <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            <span>Get Started</span>
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
