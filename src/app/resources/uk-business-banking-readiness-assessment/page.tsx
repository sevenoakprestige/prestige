import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaDownload, FaArrowRight, FaBuilding, FaGlobe, FaShieldAlt, FaChartLine, FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDateRange, MdKeyboardArrowDown } from "react-icons/md";
import InteractiveAssessment from "@/components/InteractiveAssessment";

export const metadata = {
    title: "UK Business Banking for Non-UK Residents: The Complete Banking Readiness Guide (2026)",
    description: "The complete UK Business Banking Readiness Assessment framework and due diligence checklist for international entrepreneurs and non-residents.",
    keywords: [
        "UK business banking readiness",
        "banking readiness assessment",
        "UK bank account non-resident",
        "international founder banking",
        "UK corporate compliance",
        "fintech onboarding UK",
        "payment provider onboarding",
    ]
};

export default function BusinessBankingReadinessPage() {
    return (
        <article className="w-full">
            {/* ─── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">

                {/* Background image — positioned behind everything */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/resouces/assesment.webp"
                        alt="UK Business Banking advisors with London skyline — Seven Oak Prestige"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                        priority
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70" />
                    {/* Bottom vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Animated gold orbs */}
                <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
                    <div className="hero-circle-1 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
                    <div className="hero-circle-2 absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl w-full text-left">

                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm font-medium text-white/90">
                            Executive Guide &nbsp;•&nbsp; 18 minute read &nbsp;•&nbsp; Updated August 2026
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        UK Business Banking for{" "}
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                            Non-UK Residents
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl lg:mx-0">
                        The complete banking readiness framework to prepare your UK company for a successful business banking application — built for international founders.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                        <a
                            href="/flies/Executive Framework & Due Diligence Checklist for International Entrepreneurs.pdf"
                            download
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95 sm:text-lg"
                        >
                            <FaDownload className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                            <span>Download PDF Guide</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>

                        <Link
                            href="#framework"
                            className="group inline-flex items-center gap-3 rounded-xl border-2 border-[#d4af37] bg-transparent px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#d4af37] hover:text-black active:scale-95 sm:text-lg"
                        >
                            <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <span>Explore Framework</span>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex flex-wrap items-center gap-6 text-sm sm:gap-8">
                        {[
                            "5-Pillar Framework",
                            "100-Point Scorecard",
                            "30-Day Prep Plan",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-white/80">
                                <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── Framework Section — Radial Diagram ── */}
            <section id="framework" className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                {/* Subtle ambient glow */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.03] blur-3xl"></div>
                </div>
                
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">The Seven Oak Prestige</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                            Banking Readiness Framework™
                        </h2>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3d066] mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground font-medium max-w-3xl mx-auto">
                            Five foundational pillars to prepare your UK company for a successful business banking application. The Banking Readiness Framework™ has been developed to support entrepreneurs establishing UK companies from more than 190 jurisdictions worldwide.
                        </p>
                    </div>

                    {/* ── Desktop: Perfectly Positioned Radial Diagram ── */}
                    <div className="hidden lg:flex justify-center items-center py-10">
                        <div className="relative" style={{ width: 900, height: 700 }}>
                            
                            {/* SVG Base Layers */}
                            <svg className="absolute inset-0" width="900" height="700" viewBox="0 0 900 700" fill="none">
                                {/* Outer dashed gold ring */}
                                <circle cx="450" cy="350" r="200" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 6" className="opacity-30 dark:opacity-20" />
                                {/* Inner subtle ring */}
                                <circle cx="450" cy="350" r="100" stroke="#d4af37" strokeWidth="0.5" className="opacity-20 dark:opacity-10" />
                                
                                {/* Spokes connecting center to nodes */}
                                {[
                                    [450, 150], [640, 288], [568, 512], [332, 512], [260, 288]
                                ].map(([x, y], i) => (
                                    <line key={i} x1="450" y1="350" x2={x} y2={y} stroke="#d4af37" strokeWidth="1" className="opacity-20 dark:opacity-10" />
                                ))}

                                {/* Central abstract pentagon */}
                                <polygon
                                    points="450,250 545,319 509,431 391,431 355,319"
                                    className="fill-[#d4af37]/5 dark:fill-[#0a0a0a]/90 stroke-[#d4af37]"
                                    strokeWidth="1.5"
                                />
                            </svg>

                            {/* Central Logo/Text */}
                            <div className="absolute flex flex-col items-center justify-center pointer-events-none" style={{ left: 450 - 75, top: 350 - 75, width: 150, height: 150 }}>
                                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1 text-center">Seven Oak Prestige</p>
                                <p className="text-[12px] font-extrabold tracking-widest uppercase text-foreground leading-snug text-center">
                                    Banking<br/>Readiness
                                </p>
                            </div>

                            {/* 5 Nodes with Perfectly Positioned Text Labels */}
                            {[
                                { 
                                    cx: 450, cy: 150, num: "01", 
                                    title: "Corporate Identity", desc: "Establish a strong, consistent corporate identity across all public touchpoints.",
                                    labelPos: "top"
                                },
                                { 
                                    cx: 640, cy: 288, num: "02", 
                                    title: "Business Documentation", desc: "Maintain accurate, complete, and legally robust corporate records.",
                                    labelPos: "right"
                                },
                                { 
                                    cx: 568, cy: 512, num: "03", 
                                    title: "Website & Digital Presence", desc: "Demonstrate a professional and highly transparent online operational presence.",
                                    labelPos: "bottom-right"
                                },
                                { 
                                    cx: 332, cy: 512, num: "04", 
                                    title: "Financial Readiness", desc: "Prepare clear financial forecasting, source of funds, and business planning.",
                                    labelPos: "bottom-left"
                                },
                                { 
                                    cx: 260, cy: 288, num: "05", 
                                    title: "Compliance & Governance", desc: "Understand and proactively meet your ongoing UK regulatory obligations.",
                                    labelPos: "left"
                                },
                            ].map((p) => {
                                const nodeSize = 64; // 64px diameter node
                                
                                // Determine the perfect CSS positioning for the text label relative to the node
                                let textStyle: React.CSSProperties = { position: "absolute", width: "260px" };
                                
                                if (p.labelPos === "top") {
                                    textStyle = { ...textStyle, bottom: "calc(100% + 20px)", left: "50%", transform: "translateX(-50%)" };
                                } else if (p.labelPos === "right") {
                                    textStyle = { ...textStyle, left: "calc(100% + 24px)", top: "50%", transform: "translateY(-50%)" };
                                } else if (p.labelPos === "bottom-right") {
                                    textStyle = { ...textStyle, left: "calc(100% + 20px)", top: "10px" };
                                } else if (p.labelPos === "bottom-left") {
                                    textStyle = { ...textStyle, right: "calc(100% + 20px)", top: "10px" };
                                } else if (p.labelPos === "left") {
                                    textStyle = { ...textStyle, right: "calc(100% + 24px)", top: "50%", transform: "translateY(-50%)" };
                                }

                                return (
                                    <div
                                        key={p.num}
                                        className="absolute group"
                                        style={{ left: p.cx - nodeSize / 2, top: p.cy - nodeSize / 2, width: nodeSize, height: nodeSize }}
                                    >
                                        {/* Node Circle */}
                                        <div
                                            className="w-full h-full rounded-full flex items-center justify-center border border-[#d4af37]/40 shadow-md backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-default bg-white/90 dark:bg-[#161616]/95"
                                        >
                                            <span className="font-serif text-xl font-bold text-[#d4af37] group-hover:text-foreground transition-colors duration-300">
                                                {p.num}
                                            </span>
                                        </div>

                                        {/* Attached Text Label as a Card */}
                                        <div style={textStyle}>
                                            <div className="relative text-left overflow-hidden rounded-2xl border border-border/20 bg-card/20 p-5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#d4af37]/30 group-hover:bg-card/40 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)]">
                                                {/* Card glow effect on hover */}
                                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                                                </div>
                                                <h3 className="text-lg font-bold text-[#d4af37] mb-2 tracking-tight leading-tight">
                                                    {p.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {p.desc}
                                                </p>
                                                {/* Decorative corner accent */}
                                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#d4af37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/20 group-hover:blur-[30px] pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Mobile/Medium Fallback: Vertical Cards ── */}
                    <div className="flex flex-col gap-6 lg:hidden max-w-2xl mx-auto mt-4">
                        {[
                            { num: "01", title: "Corporate Identity", desc: "Establish a strong, consistent corporate identity across all public touchpoints." },
                            { num: "02", title: "Business Documentation", desc: "Maintain accurate, complete, and legally robust corporate records." },
                            { num: "03", title: "Website & Digital Presence", desc: "Demonstrate a professional and highly transparent online operational presence." },
                            { num: "04", title: "Financial Readiness", desc: "Prepare clear financial forecasting, source of funds, and business planning." },
                            { num: "05", title: "Compliance & Governance", desc: "Understand and proactively meet your ongoing UK regulatory obligations." },
                        ].map((p) => (
                            <div key={p.num} className="relative overflow-hidden rounded-[2rem] border border-border/20 bg-card/20 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] group flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                                {/* Number Icon */}
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border border-[#d4af37]/40 shadow-sm backdrop-blur-sm bg-white/90 dark:bg-[#161616]/95 group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-500">
                                    <span className="font-serif text-lg sm:text-xl font-bold text-[#d4af37] group-hover:text-foreground transition-colors duration-300">{p.num}</span>
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-[#d4af37] mb-2 tracking-tight leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>

                                {/* Card glow effect on hover */}
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                                </div>
                                {/* Decorative corner accent */}
                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#d4af37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/20 group-hover:blur-[30px] pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Executive Summary ── */}
            <section className="relative px-4 pb-16 pt-12 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.03] blur-[100px]"></div>
                </div>

                <div className="mx-auto max-w-5xl relative z-10">
                    <div className="p-8 md:p-12 rounded-[2.5rem] border border-border/20 bg-card/20 backdrop-blur-md shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-all duration-500 hover:bg-card/30 relative group overflow-hidden">
                        
                        {/* Subtle inner gold accent */}
                        <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none transform-gpu group-hover:-rotate-12 group-hover:scale-110">
                            <FaRegFileAlt className="w-64 h-64 text-[#d4af37]" />
                        </div>

                        <div className="relative z-10">
                            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-3">Overview</p>
                            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">Executive Summary</h3>
                            
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                                Opening a UK business bank account is rarely determined by a single document or application form. Financial institutions generally evaluate a combination of factors to understand how a business operates, how it is managed and whether sufficient information has been provided to understand the nature of the relationship being requested.
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                                These assessments may include areas such as corporate identity, business activities, website quality, company documentation, <Link href="/services/companies-house-verification" className="text-[#d4af37] hover:underline font-medium">identity verification</Link>, source of funds information, and overall operational credibility.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <a href="/flies/Executive Framework & Due Diligence Checklist for International Entrepreneurs.pdf" download className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                    <FaDownload className="text-lg" /> Download Executive PDF
                                </a>
                                <Link href="#framework" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground/10 border border-border/50 px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-foreground/20 hover:scale-[1.02]">
                                    Explore Framework <FaArrowRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Detailed Context & Readiness Checklist (Redesigned) ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-6xl relative z-10">
                    
                    {/* Part 1: The Thesis */}
                    <div className="mb-20 text-center max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-snug mb-8">
                            Establishing a UK Company Is Only the Beginning.<br className="hidden md:block" />
                            <span className="text-[#d4af37]">Banking Readiness</span> Determines What Comes Next.
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3d066] mx-auto mb-8" />
                        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
                            <p>
                                Successfully incorporating a UK Limited Company is an important milestone for international entrepreneurs seeking to expand into one of the world’s most respected business jurisdictions. However, <Link href="/services/uk-company-formation-for-non-residents" className="text-[#d4af37] hover:underline font-medium transition-colors hover:text-[#f3d066]">company formation</Link> alone does not automatically mean a business is prepared for business banking, <Link href="/services/fintech-banking-guidance" className="text-[#d4af37] hover:underline font-medium transition-colors hover:text-[#f3d066]">payment provider onboarding</Link> or long-term commercial operations.
                            </p>
                            <p>
                                Many entrepreneurs focus considerable attention on incorporation while underestimating the importance of operational readiness, documentation quality, corporate consistency and regulatory preparation. These factors often play an important role when financial institutions evaluate new business relationships.
                            </p>
                            <p>
                                Whether your business operates in technology, consulting, e-commerce, international trade, digital services or professional advisory, preparing your business before approaching banks or payment providers can significantly improve efficiency throughout the onboarding process.
                            </p>
                        </div>
                    </div>

                    {/* Part 2: What is Readiness (Split Layout with Image) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-16">
                        
                        {/* Image Side */}
                        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-border/20 shadow-2xl shadow-black/20 group min-h-[350px] lg:min-h-full">
                            <Image 
                                src="/assets/resouces/banking-readiness.jpg"
                                alt="Business Banking Readiness Documents"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Inner vignette/glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
                        </div>

                        {/* Content Side (Premium Card) */}
                        <div className="lg:col-span-7 relative rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30 flex flex-col justify-center">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    What Is Business Banking Readiness?
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    Business Banking Readiness refers to the overall level of preparation a company demonstrates before approaching a financial institution or payment provider. It extends beyond company incorporation and focuses on whether the business presents a complete, professional and consistent operational profile.
                                </p>

                                {/* Checklist Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                    {[
                                        "Clearly defined business activities",
                                        "Professional corporate identity",
                                        "Appropriate company documentation",
                                        "Transparent ownership structure",
                                        "Operational evidence",
                                        "Financial planning",
                                        "Regulatory awareness",
                                        "Consistent public information",
                                        "Professional digital presence",
                                        "Appropriate governance arrangements"
                                    ].map((item, index) => (
                                        <div key={index} className="group/item flex items-start gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] transition-colors duration-300 group-hover/item:bg-[#d4af37] group-hover/item:text-black mt-0.5">
                                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-foreground/90 font-medium text-sm sm:text-base leading-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework section moved above — placeholder kept for anchor */}
            <div id="framework-detail" />
            <section className="py-24 bg-foreground/5 border-y border-foreground/10 overflow-hidden hidden">
                <div className="mx-auto max-w-6xl px-6">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-2">
                            The Seven Oak Prestige
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-3">
                            Banking Readiness Framework™
                        </h2>
                        <div className="w-10 h-[2px] bg-[#d4af37] mx-auto mb-5" />
                        <p className="text-base text-foreground/70 font-medium">
                            Five Pillars for a Banking-Ready UK Business
                        </p>
                    </div>

                    {/* ── Desktop: Pentagon Circular Diagram ── */}
                    <div className="hidden md:block">
                        {/*
                            Container: 680px × 680px
                            Center: 340, 340
                            Ring radius: 220px (node centres)
                            Text radius: 315px (outer labels)
                            Pentagon angles (clockwise from top):
                              P1:  270° → (0, -1)      → x=340, y=120
                              P2:  342° → (0.951,-0.309) → x=550, y=272
                              P3:   54° → (0.588, 0.809) → x=469, y=518
                              P4:  126° → (-0.588,0.809) → x=211, y=518
                              P5:  198° → (-0.951,-0.309)→ x=130, y=272
                        */}
                        <div className="relative mx-auto" style={{ width: 680, height: 680 }}>

                            {/* Gold ring SVG */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 680 680" fill="none">
                                <circle cx="340" cy="340" r="220" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
                                {/* Connecting lines from center to each node */}
                                {[
                                    [340, 120], [550, 272], [469, 518], [211, 518], [130, 272]
                                ].map(([x, y], i) => (
                                    <line key={i} x1="340" y1="340" x2={x} y2={y} stroke="#d4af37" strokeWidth="1" opacity="0.25" />
                                ))}
                            </svg>

                            {/* Central pentagon using clip-path */}
                            <div
                                className="absolute flex flex-col items-center justify-center text-center"
                                style={{
                                    left: 340 - 110, top: 340 - 110,
                                    width: 220, height: 220,
                                    clipPath: "polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)",
                                    background: "linear-gradient(160deg, #0f1f3d 0%, #1a3060 100%)",
                                }}
                            >
                                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#d4af37]/80 mb-0.5 px-6 leading-tight">
                                    Seven Oak Prestige
                                </p>
                                <p className="text-[11px] font-extrabold uppercase tracking-wide text-white px-4 leading-snug">
                                    Banking<br />Readiness<br />Framework™
                                </p>
                            </div>

                            {/* The 5 pillar nodes */}
                            {[
                                {
                                    x: 340, y: 120,
                                    icon: "🏛",
                                    num: "1",
                                    title: "Corporate Identity",
                                    desc: "Establish a strong and consistent corporate identity",
                                    labelSide: "top",
                                },
                                {
                                    x: 550, y: 272,
                                    icon: "📋",
                                    num: "2",
                                    title: "Business Documentation",
                                    desc: "Maintain accurate and complete corporate records",
                                    labelSide: "right",
                                },
                                {
                                    x: 469, y: 518,
                                    icon: "🌐",
                                    num: "3",
                                    title: "Website & Digital Presence",
                                    desc: "Demonstrate a professional and transparent online presence",
                                    labelSide: "bottom-right",
                                },
                                {
                                    x: 211, y: 518,
                                    icon: "📈",
                                    num: "4",
                                    title: "Financial Readiness",
                                    desc: "Prepare clear financial information and business planning",
                                    labelSide: "bottom-left",
                                },
                                {
                                    x: 130, y: 272,
                                    icon: "🛡",
                                    num: "5",
                                    title: "Compliance & Corporate Governance",
                                    desc: "Understand and meet your ongoing regulatory obligations",
                                    labelSide: "left",
                                },
                            ].map((p) => {
                                const nodeSize = 80;
                                const labelOffset = 52;
                                const labelStyle: React.CSSProperties = { position: "absolute", width: 160 };
                                if (p.labelSide === "top") {
                                    Object.assign(labelStyle, { bottom: nodeSize / 2 + labelOffset, left: "50%", transform: "translateX(-50%)", textAlign: "center" });
                                } else if (p.labelSide === "right") {
                                    Object.assign(labelStyle, { top: "50%", left: nodeSize / 2 + labelOffset, transform: "translateY(-50%)", textAlign: "left" });
                                } else if (p.labelSide === "bottom-right") {
                                    Object.assign(labelStyle, { top: nodeSize / 2 + labelOffset, left: nodeSize / 2 + 8, textAlign: "left" });
                                } else if (p.labelSide === "bottom-left") {
                                    Object.assign(labelStyle, { top: nodeSize / 2 + labelOffset, right: nodeSize / 2 + 8, textAlign: "right" });
                                } else if (p.labelSide === "left") {
                                    Object.assign(labelStyle, { top: "50%", right: nodeSize / 2 + labelOffset, transform: "translateY(-50%)", textAlign: "right" });
                                }
                                return (
                                    <div
                                        key={p.num}
                                        className="absolute"
                                        style={{ left: p.x - nodeSize / 2, top: p.y - nodeSize / 2, width: nodeSize, height: nodeSize }}
                                    >
                                        {/* Icon node */}
                                        <div
                                            className="w-full h-full rounded-full flex items-center justify-center shadow-xl border-2 border-[#d4af37]/60"
                                            style={{ background: "linear-gradient(145deg, #0f1f3d 0%, #1a3060 100%)" }}
                                        >
                                            <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                                        </div>
                                        {/* Text label */}
                                        <div style={labelStyle}>
                                            <p className="text-[11px] font-extrabold uppercase tracking-wider text-foreground leading-tight mb-0.5">
                                                <span className="text-[#d4af37]">{p.num}. </span>{p.title}
                                            </p>
                                            <p className="text-[10px] text-foreground/60 leading-snug">{p.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Mobile: Vertical numbered list ── */}
                    <div className="flex flex-col gap-6 md:hidden">
                        {[
                            { num: "1", title: "Corporate Identity", desc: "Establish a strong and consistent corporate identity", icon: "🏛" },
                            { num: "2", title: "Business Documentation", desc: "Maintain accurate and complete corporate records", icon: "📋" },
                            { num: "3", title: "Website & Digital Presence", desc: "Demonstrate a professional and transparent online presence", icon: "🌐" },
                            { num: "4", title: "Financial Readiness", desc: "Prepare clear financial information and business planning", icon: "📈" },
                            { num: "5", title: "Compliance & Corporate Governance", desc: "Understand and meet your ongoing regulatory obligations", icon: "🛡" },
                        ].map((p) => (
                            <div key={p.num} className="flex items-start gap-4 p-5 rounded-2xl border border-[#d4af37]/20 bg-background shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#d4af37]/60" style={{ background: "linear-gradient(145deg, #0f1f3d 0%, #1a3060 100%)" }}>
                                    <span className="text-xl">{p.icon}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#d4af37] tracking-widest uppercase mb-0.5">Pillar {p.num}</p>
                                    <p className="font-bold text-foreground text-sm mb-1">{p.title}</p>
                                    <p className="text-xs text-foreground/60 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* Pillars Detail Section */}
            {/* ── The Five Pillars Framework ── */}
            <section className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background matching Services.tsx */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.03] blur-3xl"></div>
                    <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-[#d4af37]/[0.02] blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-5xl relative z-10">
                    <div className="text-center mb-24">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-3">The Core Framework</p>
                        <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                            The Five Pillars of Readiness
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3d066] mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            A structured framework to evaluate and prepare your business before approaching financial institutions.
                        </p>
                    </div>

                    <div className="space-y-12 md:space-y-24 relative">
                        {/* Vertical Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent"></div>

                        {/* Pillar 1 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-serif text-xl text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5">
                                01
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-[#d4af37] font-bold tracking-widest uppercase text-xs mb-3">Pillar One</div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Corporate Identity</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    Corporate identity extends beyond a company name or logo. It represents the complete professional image presented by a business across every public touchpoint. For international entrepreneurs, establishing a strong corporate identity before approaching financial institutions helps create consistency between official company records and publicly available information.
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaRegFileAlt className="text-[#d4af37]" />
                                        Corporate Identity Assessment
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { label: "Registered UK Limited Company" },
                                            { label: "Active Companies House record" },
                                            { label: "Registered Office Address", href: "/services/registered-office-service" },
                                            { label: "Director Service Address", href: "/services/director-service-address" },
                                            { label: "Professional business email" },
                                            { label: "Corporate website" },
                                            { label: "Dedicated telephone number" },
                                            { label: "Consistent branding" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <FaCheckCircle className="text-[#d4af37] text-sm mt-1 shrink-0" />
                                                {item.href ? (
                                                    <Link href={item.href} className="text-sm font-medium text-foreground/80 hover:text-[#d4af37] underline decoration-border hover:decoration-[#d4af37] transition-all">
                                                        {item.label}
                                                    </Link>
                                                ) : (
                                                    <span className="text-sm font-medium text-foreground/80">{item.label}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-serif text-xl text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5">
                                02
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-[#d4af37] font-bold tracking-widest uppercase text-xs mb-3">Pillar Two</div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Business Documentation</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    Maintaining organised corporate documentation forms an essential part of business readiness. Preparing documentation in advance enables businesses to respond efficiently to requests for supporting information while reducing unnecessary delays caused by missing records.
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaRegFileAlt className="text-[#d4af37]" />
                                        Business Documentation Checklist
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { label: "Certificate of Incorporation" },
                                            { label: "Memorandum & Articles" },
                                            { label: "UBO information" },
                                            { label: "VAT Registration (if applicable)", href: "/services/vat-registration-uk" },
                                            { label: "Proof of business activities" },
                                            { label: "Client agreements or contracts" },
                                            { label: "Commercial invoices" },
                                            { label: "Financial forecasts" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <FaCheckCircle className="text-[#d4af37] text-sm mt-1 shrink-0" />
                                                {item.href ? (
                                                    <Link href={item.href} className="text-sm font-medium text-foreground/80 hover:text-[#d4af37] underline decoration-border hover:decoration-[#d4af37] transition-all">
                                                        {item.label}
                                                    </Link>
                                                ) : (
                                                    <span className="text-sm font-medium text-foreground/80">{item.label}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-serif text-xl text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5">
                                03
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-[#d4af37] font-bold tracking-widest uppercase text-xs mb-3">Pillar Three</div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Website & Digital Presence Readiness</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    For many international entrepreneurs, a company website represents one of the first opportunities to communicate the nature of their business to prospective clients, suppliers, business partners and financial institutions. A well-prepared website should explain the company’s activities in a straightforward and transparent manner.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-serif text-xl text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5">
                                04
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-[#d4af37] font-bold tracking-widest uppercase text-xs mb-3">Pillar Four</div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Financial Readiness</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Financial readiness extends beyond demonstrating existing revenue. It involves understanding how the business expects to operate commercially, preparing realistic financial expectations and maintaining documentation that accurately supports business activities.
                                </p>
                            </div>
                        </div>

                        {/* Pillar 5 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-serif text-xl text-[#d4af37] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5">
                                05
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-[#d4af37] font-bold tracking-widest uppercase text-xs mb-3">Pillar Five</div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Compliance & Corporate Governance</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    Corporate compliance forms part of maintaining a professionally managed UK company. While regulatory obligations vary depending on the nature of the business, entrepreneurs should understand the importance of maintaining accurate records and meeting ongoing filing responsibilities.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Scorecard Dashboard Section ── */}
            <section className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/2 bottom-0 h-[600px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#d4af37]/[0.04] blur-[120px]"></div>
                </div>

                <div className="mx-auto max-w-6xl relative z-10">
                    
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-3">Evaluation Tool</p>
                        <h2 className="font-serif text-3xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
                            The Banking Readiness Score™
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3d066] mb-6"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Evaluate your business before you apply. This framework is intended as an educational readiness tool to help founders evaluate the key areas that contribute to a well-prepared UK business.
                        </p>
                    </div>

                    {/* Bento Dashboard Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        {/* Left: Total Score (Gauge/Donut) */}
                        <div className="lg:col-span-5 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                            <h3 className="text-lg font-semibold text-foreground mb-8 self-start w-full border-b border-border/30 pb-4">Maximum Potential Score</h3>
                            
                            <div className="relative w-56 h-56 mb-8 group-hover:scale-105 transition-transform duration-700">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    {/* Background track */}
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-border/40" />
                                    {/* Progress ring */}
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#goldGradient)" strokeWidth="6" strokeDasharray="283" strokeDashoffset="0" className="drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-1000" />
                                    <defs>
                                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#f3d066" />
                                            <stop offset="100%" stopColor="#d4af37" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-6xl font-mono font-bold text-foreground tracking-tighter">100</span>
                                    <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase mt-2">Points</span>
                                </div>
                            </div>
                            
                            <p className="text-center text-sm text-muted-foreground px-4 leading-relaxed">
                                Achieving a perfect score signifies a robust corporate profile ready for banking due diligence.
                            </p>
                        </div>

                        {/* Right: The 5 Pillars Breakdown (Bar Charts) */}
                        <div className="lg:col-span-7 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30 transition-all duration-500">
                            <h3 className="text-lg font-semibold text-foreground mb-8 border-b border-border/30 pb-4">Assessment Matrix</h3>
                            <div className="space-y-7">
                                {[
                                    { name: "Corporate Identity", score: 20 },
                                    { name: "Business Documentation", score: 20 },
                                    { name: "Website & Digital Presence", score: 20 },
                                    { name: "Financial Readiness", score: 20 },
                                    { name: "Compliance & Governance", score: 20 },
                                ].map((item, i) => (
                                    <div key={i} className="group/bar">
                                        <div className="flex justify-between items-end mb-3">
                                            <span className="font-medium text-foreground text-sm sm:text-base">{item.name}</span>
                                            <span className="font-mono text-[#d4af37] font-bold text-sm bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">{item.score} pts</span>
                                        </div>
                                        {/* Bar container */}
                                        <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/30">
                                            <div className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3d066] w-full rounded-full relative group-hover/bar:brightness-110 transition-all duration-300">
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom: Results Legend (4 cards) */}
                        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
                            {[
                                { range: "90–100", title: "Excellent Readiness", desc: "Your business demonstrates a strong level of organisational preparation and corporate consistency.", colorClass: "text-emerald-500", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/20", lineClass: "bg-emerald-500" },
                                { range: "75–89", title: "Good Readiness", desc: "Most key elements appear to be in place. Review any remaining gaps before beginning an application.", colorClass: "text-blue-500", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/20", lineClass: "bg-blue-500" },
                                { range: "60–74", title: "Developing Readiness", desc: "Several important areas may benefit from further preparation to create a complete business profile.", colorClass: "text-amber-500", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/20", lineClass: "bg-amber-500" },
                                { range: "Below 60", title: "Preparation Recommended", desc: "Consider reviewing your business structure, documentation, and compliance arrangements.", colorClass: "text-rose-500", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/20", lineClass: "bg-rose-500" },
                            ].map((tier, i) => (
                                <div key={i} className="relative rounded-2xl border border-border/20 bg-card/20 p-6 backdrop-blur-md hover:shadow-xl hover:bg-card/40 transition-all duration-300 group/tier overflow-hidden">
                                    {/* Top colored accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${tier.lineClass} opacity-80`}></div>
                                    
                                    <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold font-mono border mb-5 mt-2 ${tier.bgClass} ${tier.colorClass} ${tier.borderClass}`}>
                                        {tier.range}
                                    </div>
                                    <h4 className="font-bold text-foreground text-sm md:text-base mb-3">{tier.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Interactive Assessment Client Component */}
                        <div className="lg:col-span-12">
                            <InteractiveAssessment />
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 30-Day Timeline Section ── */}
            <section className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.03] blur-[100px]"></div>
                </div>

                <div className="mx-auto max-w-4xl relative z-10">
                    <div className="text-center mb-20">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-3">Preparation Guide</p>
                        <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                            30-Day Banking Preparation Timeline
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="relative space-y-8 md:space-y-12 before:absolute before:content-[''] before:top-0 before:bottom-0 before:left-5 md:before:left-[2.25rem] before:-translate-x-px before:w-[3px] before:bg-gradient-to-b before:from-[#d4af37]/10 before:via-[#d4af37]/80 before:to-[#d4af37]/10">
                        
                        {[
                            { title: "30 Days Before Application", desc: "Review your company structure, website, branding and corporate information. Confirm that all public information accurately reflects the current business." },
                            { title: "21 Days Before Application", desc: <>Organise corporate documentation, <Link href="/services/companies-house-verification" className="text-[#d4af37] hover:underline font-medium">verify identity documents</Link>, prepare proof of address and ensure important company records are readily available.</> },
                            { title: "14 Days Before Application", desc: "Review expected business activities, prepare financial projections where appropriate and organise supporting commercial evidence such as invoices, contracts or purchase orders." },
                            { title: "7 Days Before Application", desc: "Carry out a final review of your website, business email, contact information and company documentation. Confirm that all information presented across different platforms remains consistent." },
                            { title: "Application Day & Beyond", desc: "Provide accurate and complete information throughout the application process. Retain copies of submitted information and remain available should additional documentation be requested." },
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex items-start gap-6 md:gap-8 group">
                                <div className="absolute left-5 md:left-[2.25rem] top-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-[#d4af37] z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                                
                                <div className="pl-12 md:pl-20 w-full">
                                    <div className="rounded-3xl border border-border/20 bg-card/20 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQs Section ── */}
            <section className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute right-0 top-1/2 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.03] blur-[100px]"></div>
                </div>

                <div className="mx-auto max-w-4xl relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-3">Clarity & Insight</p>
                        <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>
                    
                    <div className="w-full space-y-6">
                        <details className="group rounded-3xl border border-border/20 bg-card/20 backdrop-blur-md transition-all duration-300 open:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:border-[#d4af37]/20 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between font-serif font-bold text-lg md:text-xl p-6 md:p-8 marker:content-none select-none outline-none">
                                What is business banking readiness?
                                <span className="transition-transform duration-300 group-open:rotate-180 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-background border border-border/50 text-[#d4af37] shadow-sm">
                                    <MdKeyboardArrowDown className="h-6 w-6" />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-border/10">
                                <p className="mt-6 text-muted-foreground text-base leading-relaxed">
                                    Business banking readiness refers to the overall level of preparation a company demonstrates before approaching a financial institution or <Link href="/services/fintech-banking-guidance" className="text-[#d4af37] hover:underline font-medium">payment provider</Link>. It includes corporate identity, documentation, operational readiness, financial planning and compliance rather than focusing solely on incorporation.
                                </p>
                            </div>
                        </details>
                        
                        <details className="group rounded-3xl border border-border/20 bg-card/20 backdrop-blur-md transition-all duration-300 open:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:border-[#d4af37]/20 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between font-serif font-bold text-lg md:text-xl p-6 md:p-8 marker:content-none select-none outline-none">
                                Can a non-UK resident open a UK business bank account?
                                <span className="transition-transform duration-300 group-open:rotate-180 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-background border border-border/50 text-[#d4af37] shadow-sm">
                                    <MdKeyboardArrowDown className="h-6 w-6" />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-border/10">
                                <p className="mt-6 text-muted-foreground text-base leading-relaxed">
                                    Many UK financial institutions and payment providers offer services to international entrepreneurs, although eligibility criteria, onboarding procedures and required documentation vary between providers. Each institution assesses applications according to its own policies.
                                </p>
                                <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                                    For tailored support, consider requesting an <Link href="/consultation" className="text-[#d4af37] hover:underline font-medium">Advisory Consultation</Link>.
                                </p>
                            </div>
                        </details>

                        <details className="group rounded-3xl border border-border/20 bg-card/20 backdrop-blur-md transition-all duration-300 open:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:border-[#d4af37]/20 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between font-serif font-bold text-lg md:text-xl p-6 md:p-8 marker:content-none select-none outline-none">
                                Does incorporating a UK company automatically qualify me for business banking?
                                <span className="transition-transform duration-300 group-open:rotate-180 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-background border border-border/50 text-[#d4af37] shadow-sm">
                                    <MdKeyboardArrowDown className="h-6 w-6" />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-border/10">
                                <p className="mt-6 text-muted-foreground text-base leading-relaxed">
                                    No. <Link href="/services/uk-company-formation-for-non-residents" className="text-[#d4af37] hover:underline font-medium">Company incorporation</Link> and business banking are separate processes. Incorporation establishes the legal entity, while financial institutions carry out their own onboarding and due diligence procedures before deciding whether to establish a banking relationship.
                                </p>
                            </div>
                        </details>

                        <details className="group rounded-3xl border border-border/20 bg-card/20 backdrop-blur-md transition-all duration-300 open:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:border-[#d4af37]/20 overflow-hidden">
                            <summary className="flex cursor-pointer items-center justify-between font-serif font-bold text-lg md:text-xl p-6 md:p-8 marker:content-none select-none outline-none">
                                What documents are commonly requested during onboarding?
                                <span className="transition-transform duration-300 group-open:rotate-180 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-background border border-border/50 text-[#d4af37] shadow-sm">
                                    <MdKeyboardArrowDown className="h-6 w-6" />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-border/10">
                                <p className="mt-6 text-muted-foreground text-base leading-relaxed">
                                    Requirements differ between institutions. Commonly requested information may include <Link href="/services/companies-house-verification" className="text-[#d4af37] hover:underline font-medium">identity documents</Link>, proof of address, company registration documents, information regarding business activities and documentation relating to the source of funds or commercial operations.
                                </p>
                                <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                                    You may also find our <Link href="#" className="text-[#d4af37] hover:underline font-medium">Business Documentation Guide</Link> useful.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* ── Download & CTA Section ── */}
            <section id="download" className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        
                        {/* Download Card */}
                        <div className="relative group rounded-[2.5rem] border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:bg-card/30 hover:border-[#d4af37]/30">
                            {/* Inner gold glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110 group-hover:-rotate-12 transform-gpu">
                                <FaBuilding className="w-64 h-64 text-[#d4af37]" />
                            </div>
                            
                            <div className="relative z-10 h-full flex flex-col">
                                <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">Resource</p>
                                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                                    Download the Executive Banking Readiness Checklist
                                </h2>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-grow">
                                    Preparing your business before approaching a financial institution can save valuable time and help ensure your documentation, corporate identity and operational information are organised.
                                </p>
                                <a href="/flies/Executive Framework & Due Diligence Checklist for International Entrepreneurs.pdf" download className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-5 text-base font-bold text-black shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all w-full sm:w-auto self-start">
                                    <FaDownload className="text-lg" /> Download Executive PDF
                                </a>
                            </div>
                        </div>

                        {/* Consultation Card */}
                        <div className="relative group rounded-[2.5rem] border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:bg-card/30 hover:border-foreground/20">
                            
                            <div className="relative z-10 h-full flex flex-col">
                                <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Advisory Services</p>
                                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                                    Request an Advisory Consultation
                                </h2>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-grow">
                                    Seven Oak Prestige assists international entrepreneurs in preparing their businesses, documentation, and operational profiles to support a structured and professional UK expansion.
                                </p>
                                <Link href="/consultation" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground text-background px-8 py-5 text-base font-bold hover:bg-foreground/90 hover:scale-[1.02] transition-all shadow-xl w-full sm:w-auto self-start">
                                    Book Advisory Call <FaArrowRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* ── Author Block & Related Guides ── */}
            <section className="relative px-4 py-24 sm:px-6 lg:px-8 border-t border-border/10 overflow-hidden">
                {/* Subtle bottom glow */}
                <div className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#d4af37]/[0.02] blur-[100px] pointer-events-none"></div>

                <div className="mx-auto max-w-4xl relative z-10 text-center">
                    <div className="inline-block rounded-[2rem] border border-border/20 bg-card/20 backdrop-blur-md px-8 md:px-12 py-8 md:py-10 mb-16 max-w-3xl hover:bg-card/30 transition-colors duration-500">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            <strong className="text-foreground font-serif text-lg md:text-xl mb-3 block">Prepared by Seven Oak Prestige Ltd</strong>
                            This guide has been prepared by Seven Oak Prestige Ltd to help international entrepreneurs understand the practical considerations involved in preparing a UK business for banking and payment provider onboarding. It is reviewed periodically to reflect changes in UK corporate compliance practices and is intended for general educational purposes.
                        </p>
                    </div>
                    
                    <h3 className="font-serif text-xl md:text-2xl font-bold mb-8 text-foreground">Related Executive Guides</h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <Link href="/services/uk-company-formation-for-non-residents" className="text-sm font-medium hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all border border-border/20 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">UK Company Formation for Non-Residents</Link>
                        <Link href="/services/companies-house-verification" className="text-sm font-medium hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all border border-border/20 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">Companies House Identity Verification Guide</Link>
                        <Link href="/services/registered-office-service" className="text-sm font-medium hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all border border-border/20 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">Registered Office Guide</Link>
                        <Link href="/services/vat-registration-uk" className="text-sm font-medium hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all border border-border/20 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">VAT Registration Guide</Link>
                        <Link href="/services/fintech-banking-guidance" className="text-sm font-medium hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all border border-border/20 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">Fintech & Banking Setup</Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
