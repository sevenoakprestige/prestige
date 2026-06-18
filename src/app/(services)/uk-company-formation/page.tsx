"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaCheck, FaFileAlt, FaClipboardCheck, FaBuilding, FaBolt, FaUserTie, FaShieldAlt, FaGlobeAmericas } from "react-icons/fa";
import Footer from "@/components/Footer";

const included = [
    "Certificate of Incorporation",
    "Memorandum & Articles of Association",
    "Share Certificates",
    "Companies House Filing",
    "Compliance Support",
    "Digital Company Documents",
];

const whoIsFor = [
    { icon: <FaBolt className="h-6 w-6" />, title: "Startups", description: "New businesses looking for a fast, professional UK incorporation." },
    { icon: <FaGlobeAmericas className="h-6 w-6" />, title: "Freelancers", description: "Independent professionals seeking a credible UK business structure." },
    { icon: <FaBuilding className="h-6 w-6" />, title: "E-commerce Owners", description: "Online sellers needing a UK company for platforms like Amazon and Shopify." },
    { icon: <FaUserTie className="h-6 w-6" />, title: "Consultants", description: "Professionals offering services to UK and international clients." },
    { icon: <FaShieldAlt className="h-6 w-6" />, title: "International Entrepreneurs", description: "Non-resident founders establishing a UK business presence." },
];

const whyChoose = [
    { title: "Fast Processing", description: "Company registration typically completed within 24–48 hours." },
    { title: "Compliance-First Approach", description: "Full adherence to Companies House and HMRC requirements." },
    { title: "Premium Support", description: "Dedicated support throughout the entire formation process." },
    { title: "Complete Documentation", description: "All necessary company documents delivered digitally." },
];

export default function UKCompanyFormation() {
    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-20 hidden dark:block">
                    <Image
                        src="/assets/seven_oak_prestise.png"
                        alt="UK Company Formation Services — Seven Oak Prestige"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/65"></div>
                    <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="hero-circle-1 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
                    <div className="hero-circle-2 absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                        </span>
                        <span className="hero-text text-sm font-medium">
                            Professional UK Company Formation
                        </span>
                    </div>

                    <h1 className="hero-heading mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        UK Company Formation{" "}
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                            Services
                        </span>
                    </h1>

                    <p className="hero-text mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl">
                        Register a UK Limited Company in 24–48 Hours
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95 sm:text-lg"
                        >
                            <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            <span>Get Started Today</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm sm:gap-8">
                        {["24–48 Hour Setup", "Companies House Filing", "Full Compliance Support"].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="hero-text font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REGISTER A UK LIMITED COMPANY ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">FAST INCORPORATION</span>
                        <h2 className="hero-heading mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Register a UK Limited Company in 24–48 Hours
                        </h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>Seven Oak Prestige provides fast, compliant company incorporation with Companies House. Our streamlined process ensures your UK Limited Company is registered efficiently and professionally.</p>
                            <p>From document preparation to Companies House filing, we handle every step of the formation process so you can focus on building your business.</p>
                            <p>Whether you are a UK resident or an international entrepreneur, our formation service is designed to get your company up and running quickly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT YOU GET ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">WHAT&apos;S INCLUDED</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            What You Get With Our UK Formation Service
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {included.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40"
                            >
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

            {/* ── WHO THIS SERVICE IS FOR ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">IDEAL FOR</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Who This Service Is For
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {whoIsFor.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] sm:p-8"
                            >
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] shadow-sm transition-transform duration-500 group-hover:scale-110">
                                        {item.icon}
                                    </div>
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

            {/* ── WHY CHOOSE SEVEN OAK PRESTIGE ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">WHY US</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Why Choose Seven Oak Prestige
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40"
                            >
                                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#d4af37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SEO INTERNAL LINKS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">RELATED SERVICES</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Explore Our Other Services
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {[
                            { title: "Non-Resident Formation", href: "/uk-company-formation-non-residents", description: "Start a UK company from anywhere in the world." },
                            { title: "VAT Registration", href: "/vat-registration-uk", description: "Register for UK VAT with HMRC compliance support." },
                            { title: "Registered Office Service", href: "/registered-office-service", description: "Professional London address for your company." },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40"
                            >
                                <h3 className="mb-2 text-base font-bold text-[#d4af37]">{link.title}</h3>
                                <p className="text-sm text-muted-foreground">{link.description}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#d4af37]">
                                    Learn more →
                                </span>
                            </Link>
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
                    <h2 className="cta-main-title mb-6 text-4xl font-normal tracking-wider sm:text-5xl lg:text-6xl">
                        Ready to Register Your UK Company?
                    </h2>
                    <p className="cta-subtitle mb-10 text-lg font-light sm:text-xl lg:text-2xl">
                        Get started today with fast, professional UK company formation.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-10 py-5 text-lg font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95"
                        >
                            <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            <span>Start Today</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                        WhatsApp: <span className="font-semibold text-[#d4af37]">+44 7447 488755</span>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
