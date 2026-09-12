"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaCheck, FaEnvelope, FaShieldAlt, FaBuilding } from "react-icons/fa";
import Footer from "@/components/Footer";

const included = [
    "Official UK Registered Office Address",
    "Mail Handling & Forwarding",
    "Companies House Compliance Use",
    "Keep Your Home Address Off Public Records",
    "Professional London Business Presence",
];

const benefits = [
    { icon: <FaShieldAlt className="h-6 w-6" />, title: "Privacy Protection", description: "Keep your personal residential address off the public Companies House register." },
    { icon: <FaBuilding className="h-6 w-6" />, title: "Professional Image", description: "A London business address builds trust and credibility with clients and partners." },
    { icon: <FaEnvelope className="h-6 w-6" />, title: "Mail Handling", description: "All official correspondence received at your registered office is handled professionally." },
];

export default function RegisteredOfficeService() {
    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="section-dark relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/services/register_office_address.webp" alt="UK Registered Office Address Service" fill className="object-cover object-center" priority quality={85} />
                    {/* Gradient overlay to make left text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-2xl text-left">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            REGISTERED OFFICE
                        </span>
                        
                        <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
                            Registered Office Address
                        </h1>
                        
                        <div className="mb-6 h-px w-24 rule-gold" />

                        <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl uppercase tracking-wider font-light">
                            PROFESSIONAL LONDON ADDRESS FOR<br/>
                            YOUR UK COMPANY
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="btn-ghost">
                                Get in Touch
                            </Link>
                            <Link href="https://buy.stripe.com/28E14fgRi7vDfIF6Bmfw403" target="_blank" className="btn-gold">
                                Add to Order
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-20 w-full border-t border-gold/20 bg-background/40 backdrop-blur-md pt-8 pb-8 hidden lg:block">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-4 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaBuilding className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PRIME LOCATION</h3>
                                <p className="text-xs text-muted-foreground">Prestigious London EC1 business address</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaShieldAlt className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PRIVACY PROTECTED</h3>
                                <p className="text-xs text-muted-foreground">Keep your home address off public records</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaEnvelope className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">MAIL FORWARDING</h3>
                                <p className="text-xs text-muted-foreground">Secure handling of official correspondence</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaCheck className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">FULL COMPLIANCE</h3>
                                <p className="text-xs text-muted-foreground">Meets all Companies House requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Bottom Bar (Scrollable) */}
                <div className="relative z-10 mt-12 w-full border-t border-gold/20 bg-background/40 backdrop-blur-md py-6 lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    <div className="flex gap-6 px-4 w-max">
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaBuilding className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PRIME LOCATION</h3>
                                <p className="text-xs text-muted-foreground">Prestigious London EC1 business address</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaShieldAlt className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">PRIVACY PROTECTED</h3>
                                <p className="text-xs text-muted-foreground">Keep your home address off public records</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaEnvelope className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">MAIL FORWARDING</h3>
                                <p className="text-xs text-muted-foreground">Secure handling of official correspondence</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaCheck className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">FULL COMPLIANCE</h3>
                                <p className="text-xs text-muted-foreground">Meets all Companies House requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROTECT YOUR PRIVACY ── */}
            <section id="privacy-section" className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">PRIVACY</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Protect Your Privacy With a UK Business Address</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/40 sm:p-10">
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>Every UK limited company and LLP must have an official registered office address recorded with Companies House. This address is used by Companies House, HMRC, and other government bodies to send statutory correspondence and official notices.</p>
                            <p>Our prestigious London EC1 registered office address fully satisfies this legal requirement, helps keep your home address off the public register, and ensures important official mail is securely forwarded to you.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">INCLUDED</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">What&apos;s Included</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {included.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-card/40">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold transition-transform duration-500 group-hover:scale-110">
                                        <FaCheck className="h-4 w-4" />
                                    </div>
                                    <span className="text-base font-semibold text-foreground">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BENEFITS ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">ADVANTAGES</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Benefits of a London Business Address</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
                        {benefits.map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-card/40 sm:p-8">
                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">{item.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-display mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">Get Your Registered Office Address</h2>
                    <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl lg:text-2xl">Protect your privacy with a professional London business address.</p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link href="https://wa.me/447447488755" className="btn-gold">
                            <FaWhatsapp className="h-5 w-5" />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-foreground/70">WhatsApp: <span className="font-semibold text-gold">+44 7447 488755</span></p>
                </div>
            </section>

            <Footer />
        </>
    );
}
