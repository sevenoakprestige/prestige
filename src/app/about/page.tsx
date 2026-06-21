"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaCheck, FaBuilding, FaMapMarkerAlt, FaUserTie, FaCity, FaShieldAlt, FaUniversity, FaBolt, FaGlobe, FaHandshake, FaStar } from "react-icons/fa";
import Footer from "@/components/Footer";

const services = [
    {
        icon: <FaBuilding className="h-7 w-7" />,
        title: "UK Company Formation",
        description: "Fast, compliant company incorporation with Companies House for UK residents and non-residents alike.",
        href: "/uk-company-formation",
    },
    {
        icon: <FaMapMarkerAlt className="h-7 w-7" />,
        title: "Registered Office Address",
        description: "A professional UK registered office address at 124 City Road, London — fully compliant with Companies House requirements.",
        href: "/registered-office-service",
    },
    {
        icon: <FaUserTie className="h-7 w-7" />,
        title: "Director Service Address",
        description: "Protect your personal address with a professional director service address for Companies House filings.",
        href: "/director-service-address",
    },
    {
        icon: <FaCity className="h-7 w-7" />,
        title: "Virtual Business Address",
        description: "A prestigious London business address for your correspondence, giving your company a professional UK presence.",
        href: "/virtual-business-address",
    },
    {
        icon: <FaShieldAlt className="h-7 w-7" />,
        title: "Compliance Support",
        description: "Expert guidance on Companies House compliance, identity verification, and ongoing regulatory requirements.",
        href: "/companies-house-verification",
    },
    {
        icon: <FaUniversity className="h-7 w-7" />,
        title: "Banking Assistance",
        description: "Practical support preparing for UK business banking applications and fintech account setup.",
        href: "/fintech-banking-guidance",
    },
];

const approach = [
    "Professional guidance",
    "Responsive support",
    "Compliance-focused processes",
    "Clear communication",
    "Long-term business readiness",
];

const whyChoose = [
    {
        icon: <FaBolt className="h-7 w-7" />,
        title: "Fast Incorporation Support",
        description: "Efficient company formation support designed to get your UK business registered quickly and professionally.",
    },
    {
        icon: <FaGlobe className="h-7 w-7" />,
        title: "International Expertise",
        description: "We work with entrepreneurs from a wide range of countries establishing UK companies and international business credibility.",
    },
    {
        icon: <FaBuilding className="h-7 w-7" />,
        title: "Professional UK Presence",
        description: "Premium London business addresses that give your company the credibility and professionalism it deserves.",
    },
    {
        icon: <FaShieldAlt className="h-7 w-7" />,
        title: "Compliance Focused",
        description: "Every service we provide is built around UK regulatory compliance, ensuring your business is properly structured from day one.",
    },
    {
        icon: <FaUniversity className="h-7 w-7" />,
        title: "Banking Assistance",
        description: "Practical banking readiness support to help you prepare for UK business banking and fintech applications.",
    },
    {
        icon: <FaHandshake className="h-7 w-7" />,
        title: "Responsive Client Support",
        description: "A client-focused approach with clear, timely communication throughout every stage of your business journey.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* ── SECTION 1: HERO BANNER ── */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/assets/aboutus/aboutussec.jpeg"
                        alt="Premium London skyline — Seven Oak Prestige LTD UK Company Formation"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={95}
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/65" />
                    {/* Gradient fade at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Animated gold orbs */}
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="hero-circle-1 absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
                    <div className="hero-circle-2 absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#d4af37]/10 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-5 py-2 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]" />
                        </span>
                        <span className="text-sm font-medium text-[#d4af37] tracking-wide">
                            Seven Oak Prestige LTD
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Building Professional{" "}
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                            UK Business Foundations
                        </span>{" "}
                        for Entrepreneurs Worldwide
                    </h1>

                    {/* Subheadline */}
                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl">
                        Supporting entrepreneurs with UK company formation, registered office services, compliance guidance, and banking assistance.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-2xl shadow-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/60 active:scale-95 sm:text-lg"
                        >
                            {/* <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" /> */}
                            <span>Contact Us</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                        <Link
                            href="#about-content"
                            className="group inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50 sm:text-lg"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm sm:gap-10">
                        {["UK Registered Company", "Companies House Compliant", "International Clients Supported"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-white/70">
                                <FaCheck className="h-4 w-4 text-[#d4af37]" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: ABOUT SEVEN OAK PRESTIGE ── */}
            <section id="about-content" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                                ABOUT US
                            </span>
                            <h2 className="hero-heading mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                About Seven Oak{" "}
                                <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d066] bg-clip-text text-transparent">
                                    Prestige LTD
                                </span>
                            </h2>
                            <div className="mx-auto mb-8 h-1 w-20 bg-gradient-to-r from-[#d4af37] to-[#f3d066]" />

                            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                <p>
                                    Seven Oak Prestige LTD supports UK residents and international entrepreneurs with UK company formation, registered office services, director service addresses, virtual business addresses, compliance guidance, and banking assistance.
                                </p>
                                <p>
                                    We understand that establishing a business is about more than simply incorporating a company. It is about creating the right foundation for future growth, credibility, and opportunity.
                                </p>
                                <p>
                                    Whether you are launching your first venture, expanding internationally, or establishing a presence in the United Kingdom, our goal is to help make the process clear, professional, and efficient.
                                </p>
                            </div>

                            {/* Our Approach */}
                            <div className="mt-10">
                                <h3 className="mb-5 text-xl font-bold text-foreground">Our Approach</h3>
                                <p className="mb-5 text-muted-foreground leading-relaxed">
                                    At Seven Oak Prestige LTD, we focus on helping entrepreneurs navigate these important stages with confidence. Our approach is built on:
                                </p>
                                <div className="space-y-3">
                                    {approach.map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">
                                                <FaCheck className="h-3 w-3" />
                                            </div>
                                            <span className="text-base font-medium text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-6 text-muted-foreground italic leading-relaxed">
                                    We believe that strong businesses are built on strong foundations.
                                </p>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl border border-[#d4af37]/20 shadow-2xl shadow-[#d4af37]/10">
                                <Image
                                    src="/assets/aboutus/aboutus_section2.jpeg"
                                    alt="Professional UK business environment — Seven Oak Prestige LTD"
                                    width={700}
                                    height={500}
                                    className="object-cover w-full h-auto"
                                    quality={90}
                                />
                                {/* Gold overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl pointer-events-none" />
                            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#d4af37]/10 blur-2xl pointer-events-none" />

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 left-6 rounded-2xl border border-[#d4af37]/30 bg-card/90 px-5 py-4 shadow-xl backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 text-[#d4af37]">
                                        🇬🇧
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#d4af37] tracking-wider uppercase">Registered in</p>
                                        <p className="text-sm font-semibold text-foreground">England &amp; Wales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: SERVICES OVERVIEW ── */}
            <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            WHAT WE DO
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Services We Provide
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066] mb-5" />
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                            By combining company formation services with practical business support, we help entrepreneurs establish a professional UK presence from the very beginning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] block"
                            >
                                {/* Background glow on hover */}
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent" />
                                </div>
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#d4af37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none" />

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/15 to-transparent text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50">
                                    {service.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-foreground">{service.title}</h3>
                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] transition-all group-hover:gap-2">
                                    Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: SUPPORTING INTERNATIONAL ENTREPRENEURS ── */}
            <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left: Globe visual */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative overflow-hidden rounded-3xl border border-[#d4af37]/20 shadow-2xl shadow-[#d4af37]/10 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm p-10">
                                {/* World map visual representation */}
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center h-28 w-28 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 text-[#d4af37] mb-4 mx-auto">
                                        <FaGlobe className="h-14 w-14" />
                                    </div>
                                    <p className="text-[#d4af37] font-bold text-lg tracking-wide">Global Reach</p>
                                    <p className="text-muted-foreground text-sm mt-2 font-medium">Serving entrepreneurs in 190+ countries</p>
                                </div>

                                {/* Country pills */}
                                <div className="flex flex-wrap justify-center gap-3">
                                    {["🇬🇧 United Kingdom", "🇺🇸 United States", "🇦🇪 UAE", "🇮🇳 India", "🇵🇰 Pakistan", "🇳🇬 Nigeria", "🇬🇭 Ghana", "🇧🇩 Bangladesh", "🇨🇦 Canada", "🇦🇺 Australia", "🇰🇪 Kenya", "🇹🇿 Tanzania"].map((country) => (
                                        <div
                                            key={country}
                                            className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/20 hover:text-foreground"
                                        >
                                            {country}
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative connector lines */}
                                <div className="mt-8 text-center">
                                    <div className="inline-flex items-center gap-2 text-[#d4af37]/70 text-sm">
                                        <div className="h-px w-12 bg-[#d4af37]/40" />
                                        <span>Connected to London</span>
                                        <div className="h-px w-12 bg-[#d4af37]/40" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl pointer-events-none" />
                        </div>

                        {/* Right: Text */}
                        <div className="order-1 lg:order-2">
                            <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                                INTERNATIONAL SUPPORT
                            </span>
                            <h2 className="hero-heading mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                Supporting{" "}
                                <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d066] bg-clip-text text-transparent">
                                    International Entrepreneurs
                                </span>
                            </h2>
                            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-[#d4af37] to-[#f3d066]" />

                            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                <p>
                                    The United Kingdom remains one of the world&apos;s most recognised business environments. We work with entrepreneurs from a wide range of countries who wish to establish a UK company and build credibility within international markets.
                                </p>
                                <p>
                                    Our experience supporting international clients allows us to understand the importance of professionalism, preparation, and compliance throughout the business setup journey.
                                </p>
                                <p>
                                    Whether you are based in Asia, Africa, the Middle East, or anywhere in the world, Seven Oak Prestige LTD is equipped to help you establish a credible UK business presence efficiently.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="https://wa.me/447447488755"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-lg shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95"
                                >
                                    {/* <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" /> */}
                                    <span>Enquire Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: WHY CHOOSE SEVEN OAK PRESTIGE ── */}
            <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            WHY CHOOSE US
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Why Choose Seven Oak{" "}
                            <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d066] bg-clip-text text-transparent">
                                Prestige LTD?
                            </span>
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066] mb-5" />
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                            Our objective is not only to help establish a company, but to support entrepreneurs in creating a business structure that is prepared for future opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)]"
                            >
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent" />
                                </div>
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#d4af37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none" />

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/15 to-transparent text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50">
                                    {item.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: FINAL CTA BANNER ── */}
            <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                {/* Background: London skyline */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/assets/seven_oak_prestise.png"
                        alt="Premium London skyline at night — Seven Oak Prestige LTD"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#d4af37]/5" />
                </div>

                {/* Gold orbs */}
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="hero-circle-1 absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#d4af37]/15 blur-3xl" />
                    <div className="hero-circle-2 absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
                </div>

                <div className="mx-auto max-w-4xl text-center">
                    {/* Section label */}
                    <span className="text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase mb-5 block">
                        GET STARTED TODAY
                    </span>

                    {/* Main headline */}
                    <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Ready to Establish Your{" "}
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                            UK Business?
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-white/75 sm:text-xl">
                        UK Company Formation &bull; Business Addresses &bull; Compliance Guidance &bull; Banking Assistance
                    </p>

                    {/* WhatsApp CTA */}
                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-10 py-5 text-lg font-bold text-black shadow-2xl shadow-[#d4af37]/40 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/60 active:scale-95"
                        >
                            {/* <FaWhatsapp className="h-6 w-6 transition-transform group-hover:rotate-12" /> */}
                            <span>Contact Us Now</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                    </div>

                    <p className="mt-6 text-[#d4af37]/80 text-base font-medium tracking-wide">
                        +44 7447 488755
                    </p>

                    {/* Trustpilot nudge */}
                    <div className="mt-12 inline-flex flex-col items-center gap-4 rounded-2xl border border-[#00B67A]/20 bg-gradient-to-b from-white/10 to-transparent px-10 py-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div key={star} className="flex h-8 w-8 items-center justify-center bg-[#00B67A]">
                                    <FaStar className="h-5 w-5 text-white" />
                                </div>
                            ))}
                        </div>
                        <p className="text-white font-medium text-lg tracking-wide">Excellent</p>
                        <p className="text-white/70 text-sm max-w-sm text-center">
                            We value your feedback. Review us on <strong>Trustpilot</strong>, it takes less than a minute.
                        </p>
                        <Link
                            href="https://www.trustpilot.com/review/sevenoakprestige.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 group flex items-center gap-2 rounded-full border border-[#00B67A]/50 bg-[#00B67A]/10 px-6 py-2 text-[#00B67A] font-semibold text-sm transition-all hover:bg-[#00B67A]/20 hover:border-[#00B67A]"
                        >
                            <span>Leave a Review</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
