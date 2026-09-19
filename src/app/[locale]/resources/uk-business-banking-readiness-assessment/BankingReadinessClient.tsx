"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaDownload, FaArrowRight, FaBuilding, FaGlobe, FaShieldAlt, FaChartLine, FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDateRange, MdKeyboardArrowDown } from "react-icons/md";
import InteractiveAssessment from "@/components/InteractiveAssessment";

import { useTranslation } from "@/i18n/TranslationContext";

export default function BusinessBankingReadinessClient() {
  const { t, locale } = useTranslation();
  const dict = t.resourcesPages.bankingReadiness;
  const prefix = locale === 'en' ? '' : `/${locale}`;
    return (
        <article className="w-full">
            {/* ─── Hero ─────────────────────────────────────────────────────── */}
            <section className="section-dark relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">

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
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
                    {/* Bottom vignette */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
                </div>

                {/* Animated gold orbs */}
                <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
                    <div className="hero-circle-1 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
                    <div className="hero-circle-2 absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl w-full text-left">

                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm font-medium text-foreground/90">
                            {dict.hero.badge}
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        {dict.hero.title1}{" "}
                        <span className="bg-gradient-to-r from-gold via-[#f3d066] to-gold bg-clip-text text-transparent">
                            {dict.hero.title2}
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl lg:mx-0">
                        {dict.hero.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                        <a
                            href="/flies/Executive Framework & Due Diligence Checklist for International Entrepreneurs.pdf"
                            download
                            className="btn-gold"
                        >
                            <FaDownload className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                            <span>{dict.hero.btnDownload}</span>
                            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#f3d066] to-gold opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>

                        <Link
                            href="#framework"
                            className="btn-ghost"
                        >
                            <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <span>{dict.hero.btnExplore}</span>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex flex-wrap items-center gap-6 text-sm sm:gap-8">
                        {[
                            dict.hero.trustList[0],
                            dict.hero.trustList[1],
                            dict.hero.trustList[2],
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-foreground/80">
                                <svg className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* ── Framework Section — Radial Diagram ── */}
            <section id="framework" className="section-parchment relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                {/* Subtle ambient glow */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl"></div>
                </div>
                
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">{dict.framework.eyebrow}</p>
                        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                            {dict.framework.title}
                        </h2>
                        <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-[#f3d066] mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground font-medium max-w-3xl mx-auto">
                            {dict.framework.desc}
                        </p>
                    </div>

                    {/* ── Desktop: Perfectly Positioned Radial Diagram ── */}
                    <div className="hidden lg:flex justify-center items-center py-10">
                        <div className="relative" style={{ width: 900, height: 700 }}>
                            
                            {/* SVG Base Layers */}
                            <svg className="absolute inset-0" width="900" height="700" viewBox="0 0 900 700" fill="none">
                                {/* Outer dashed gold ring */}
                                <circle cx="450" cy="350" r="200" strokeWidth="1" strokeDasharray="4 6" className="stroke-gold opacity-30 dark:opacity-20" />
                                {/* Inner subtle ring */}
                                <circle cx="450" cy="350" r="100" strokeWidth="0.5" className="stroke-gold opacity-20 dark:opacity-10" />
                                
                                {/* Spokes connecting center to nodes */}
                                {[
                                    [450, 150], [640, 288], [568, 512], [332, 512], [260, 288]
                                ].map(([x, y], i) => (
                                    <line key={i} x1="450" y1="350" x2={x} y2={y} strokeWidth="1" className="stroke-gold opacity-20 dark:opacity-10" />
                                ))}

                                {/* Central abstract pentagon */}
                                <polygon
                                    points="450,250 545,319 509,431 391,431 355,319"
                                    className="fill-gold/10 stroke-gold transition-all duration-500 hover:fill-gold/20 cursor-default"
                                    strokeWidth="1.5"
                                    style={{ filter: "drop-shadow(0 0 15px rgba(212,175,55,0.4))" }}
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
                                    title: dict.framework.nodes[0].title, desc: dict.framework.nodes[0].desc,
                                    labelPos: "top"
                                },
                                { 
                                    cx: 640, cy: 288, num: "02", 
                                    title: dict.framework.nodes[1].title, desc: dict.framework.nodes[1].desc,
                                    labelPos: "right"
                                },
                                { 
                                    cx: 568, cy: 512, num: "03", 
                                    title: dict.framework.nodes[2].title, desc: dict.framework.nodes[2].desc,
                                    labelPos: "bottom-right"
                                },
                                { 
                                    cx: 332, cy: 512, num: "04", 
                                    title: dict.framework.nodes[3].title, desc: dict.framework.nodes[3].desc,
                                    labelPos: "bottom-left"
                                },
                                { 
                                    cx: 260, cy: 288, num: "05", 
                                    title: dict.framework.nodes[4].title, desc: dict.framework.nodes[4].desc,
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
                                            className="w-full h-full rounded-full flex items-center justify-center border border-gold/40 shadow-md backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] cursor-default bg-card/95"
                                        >
                                            <span className="font-display text-xl font-bold text-gold group-hover:text-foreground transition-colors duration-300">
                                                {p.num}
                                            </span>
                                        </div>

                                        {/* Attached Text Label as a Card */}
                                        <div style={textStyle}>
                                            <div className="relative text-left overflow-hidden rounded-2xl border border-border/20 bg-card/20 p-5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold/30 group-hover:bg-card/40 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)]">
                                                {/* Card glow effect on hover */}
                                                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                                                </div>
                                                <h3 className="text-lg font-bold text-gold mb-2 tracking-tight leading-tight">
                                                    {p.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {p.desc}
                                                </p>
                                                {/* Decorative corner accent */}
                                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20 group-hover:blur-[30px] pointer-events-none"></div>
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
                            { num: "01", title: dict.framework.nodes[0].title, desc: dict.framework.nodes[0].desc },
                            { num: "02", title: dict.framework.nodes[1].title, desc: dict.framework.nodes[1].desc },
                            { num: "03", title: dict.framework.nodes[2].title, desc: dict.framework.nodes[2].desc },
                            { num: "04", title: dict.framework.nodes[3].title, desc: dict.framework.nodes[3].desc },
                            { num: "05", title: dict.framework.nodes[4].title, desc: dict.framework.nodes[4].desc },
                        ].map((p) => (
                            <div key={p.num} className="relative overflow-hidden rounded-[2rem] border border-border/20 bg-card/20 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] group flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
                                {/* Number Icon */}
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border border-gold/40 shadow-sm backdrop-blur-sm bg-card/95 group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                                    <span className="font-display text-lg sm:text-xl font-bold text-gold group-hover:text-foreground transition-colors duration-300">{p.num}</span>
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-bold text-gold mb-2 tracking-tight leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>

                                {/* Card glow effect on hover */}
                                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                                </div>
                                {/* Decorative corner accent */}
                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20 group-hover:blur-[30px] pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Executive Summary ── */}
            <section className="section-dark relative px-4 pb-16 pt-12 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[100px]"></div>
                </div>

                <div className="mx-auto max-w-5xl relative z-10">
                    <div className="p-8 md:p-12 rounded-[2.5rem] border border-border/20 bg-card/20 backdrop-blur-md shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-all duration-500 hover:bg-card/30 relative group overflow-hidden">
                        
                        {/* Subtle inner gold accent */}
                        <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none transform-gpu group-hover:-rotate-12 group-hover:scale-110">
                            <FaRegFileAlt className="w-64 h-64 text-gold" />
                        </div>

                        <div className="relative z-10">
                            <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">Overview</p>
                            <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">{dict.executiveSummary.eyebrow}</h3>
                            
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                                {dict.executiveSummary.p1}
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                                {dict.executiveSummary.p2}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <a href="/flies/Executive Framework & Due Diligence Checklist for International Entrepreneurs.pdf" download className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                                    <FaDownload className="text-lg" /> {dict.executiveSummary.btnDownload}
                                </a>
                                <Link href="#framework" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground/10 border border-border/50 px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-foreground/20 hover:scale-[1.02]">
                                    {dict.executiveSummary.btnExplore} <FaArrowRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Detailed Context & Readiness Checklist (Redesigned) ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-6xl relative z-10">
                    
                    {/* Part 1: The Thesis */}
                    <div className="mb-20 text-center max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-snug mb-8">
                            {dict.context.title1}<br className="hidden md:block" />
                            <span className="text-gold">{dict.context.title2}</span>
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-[#f3d066] mx-auto mb-8" />
                        <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
                            <p>
                                {dict.context.p1Part1}
                            </p>
                            <p>
                                {dict.context.p2}
                            </p>
                            <p>
                                {dict.context.p3}
                            </p>
                        </div>
                    </div>

                    {/* Part 2: What is Readiness (Split Layout with Image) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-16">
                        
                        {/* Image Side */}
                        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-border/20 shadow-2xl shadow-black/20 group min-h-[350px] lg:min-h-full">
                            <Image 
                                src="/assets/resouces/banking-readiness.webp"
                                alt="Business Banking Readiness Documents"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Inner vignette/glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
                        </div>

                        {/* Content Side (Premium Card) */}
                        <div className="lg:col-span-7 relative rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30 flex flex-col justify-center">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/10 blur-3xl pointer-events-none"></div>

                            <div className="relative z-10">
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    {dict.context.whatIsTitle}
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    {dict.context.whatIsDesc}
                                </p>

                                {/* Checklist Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                    {dict.context.checklist.map((item, index) => (
                                        <div key={index} className="group/item flex items-start gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors duration-300 group-hover/item:bg-gold group-hover/item:text-black mt-0.5">
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
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-2">
                            The Seven Oak Prestige
                        </p>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-3">
                            Banking Readiness Framework™
                        </h2>
                        <div className="w-10 h-[2px] bg-gold mx-auto mb-5" />
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
                                <circle cx="340" cy="340" r="220" className="stroke-gold" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
                                {/* Connecting lines from center to each node */}
                                {[
                                    [340, 120], [550, 272], [469, 518], [211, 518], [130, 272]
                                ].map(([x, y], i) => (
                                    <line key={i} x1="340" y1="340" x2={x} y2={y} className="stroke-gold" strokeWidth="1" opacity="0.25" />
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
                                <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-gold/80 mb-0.5 px-6 leading-tight">
                                    Seven Oak Prestige
                                </p>
                                <p className="text-[11px] font-extrabold uppercase tracking-wide text-foreground px-4 leading-snug">
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
                                            className="w-full h-full rounded-full flex items-center justify-center shadow-xl border-2 border-gold/60"
                                            style={{ background: "linear-gradient(145deg, #0f1f3d 0%, #1a3060 100%)" }}
                                        >
                                            <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                                        </div>
                                        {/* Text label */}
                                        <div style={labelStyle}>
                                            <p className="text-[11px] font-extrabold uppercase tracking-wider text-foreground leading-tight mb-0.5">
                                                <span className="text-gold">{p.num}. </span>{p.title}
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
                            <div key={p.num} className="flex items-start gap-4 p-5 rounded-2xl border border-gold/20 bg-background shadow-sm">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 border-gold/60" style={{ background: "linear-gradient(145deg, #0f1f3d 0%, #1a3060 100%)" }}>
                                    <span className="text-xl">{p.icon}</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gold tracking-widest uppercase mb-0.5">Pillar {p.num}</p>
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
            <section className="section-dark relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background matching Services.tsx */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl"></div>
                    <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-gold/[0.02] blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-5xl relative z-10">
                    <div className="text-center mb-24">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">{dict.fivePillars.eyebrow}</p>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                            {dict.fivePillars.title}
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-gold to-[#f3d066] mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {dict.fivePillars.desc}
                        </p>
                    </div>

                    <div className="space-y-12 md:space-y-24 relative">
                        {/* Vertical Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent"></div>

                        {/* Pillar 1 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-display text-xl text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/5">
                                01
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-gold font-bold tracking-widest uppercase text-xs mb-3">Pillar One</div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{dict.fivePillars.pillars[0].title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    {dict.fivePillars.pillars[0].desc}
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaRegFileAlt className="text-gold" />
                                        Corporate Identity Assessment
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                        {dict.fivePillars.pillars[0].items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <FaCheckCircle className="text-gold text-sm shrink-0" />
                                                    <span className="text-sm font-bold text-foreground/90">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground pl-6 leading-relaxed">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-display text-xl text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/5">
                                02
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-gold font-bold tracking-widest uppercase text-xs mb-3">Pillar Two</div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{dict.fivePillars.pillars[1].title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    {dict.fivePillars.pillars[1].desc}
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaRegFileAlt className="text-gold" />
                                        Business Documentation Checklist
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                        {dict.fivePillars.pillars[1].items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <FaCheckCircle className="text-gold text-sm shrink-0" />
                                                    <span className="text-sm font-bold text-foreground/90">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground pl-6 leading-relaxed">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-display text-xl text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/5">
                                03
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-gold font-bold tracking-widest uppercase text-xs mb-3">Pillar Three</div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{dict.fivePillars.pillars[2].title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    {dict.fivePillars.pillars[2].desc}
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaGlobe className="text-gold" />
                                        Digital Presence Assessment
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                        {dict.fivePillars.pillars[2].items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <FaCheckCircle className="text-gold text-sm shrink-0" />
                                                    <span className="text-sm font-bold text-foreground/90">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground pl-6 leading-relaxed">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-display text-xl text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/5">
                                04
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-gold font-bold tracking-widest uppercase text-xs mb-3">Pillar Four</div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{dict.fivePillars.pillars[3].title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    {dict.fivePillars.pillars[3].desc}
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaChartLine className="text-gold" />
                                        Financial Readiness Checklist
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                        {dict.fivePillars.pillars[3].items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <FaCheckCircle className="text-gold text-sm shrink-0" />
                                                    <span className="text-sm font-bold text-foreground/90">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground pl-6 leading-relaxed">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pillar 5 */}
                        <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-background border border-border items-center justify-center relative z-10 font-display text-xl text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/5">
                                05
                            </div>
                            <div className="flex-1 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                <div className="md:hidden text-gold font-bold tracking-widest uppercase text-xs mb-3">Pillar Five</div>
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{dict.fivePillars.pillars[4].title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                                    {dict.fivePillars.pillars[4].desc}
                                </p>
                                <div className="bg-background/40 rounded-2xl p-6 md:p-8 border border-border/40">
                                    <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <FaShieldAlt className="text-gold" />
                                        Compliance Verification
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                        {dict.fivePillars.pillars[4].items.map((item, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <FaCheckCircle className="text-gold text-sm shrink-0" />
                                                    <span className="text-sm font-bold text-foreground/90">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground pl-6 leading-relaxed">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Scorecard Dashboard Section ── */}
            <section className="section-parchment relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute left-1/2 bottom-0 h-[600px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/[0.04] blur-[120px]"></div>
                </div>

                <div className="mx-auto max-w-6xl relative z-10">
                    
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">{dict.scorecard.eyebrow}</p>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight">
                            {dict.scorecard.title}
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-gold to-[#f3d066] mb-6"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {dict.scorecard.desc}
                        </p>
                    </div>

                    {/* Bento Dashboard Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        {/* Left: Total Score (Gauge/Donut) */}
                        <div className="lg:col-span-5 rounded-3xl border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
                            <h3 className="text-lg font-semibold text-foreground mb-8 self-start w-full border-b border-border/30 pb-4">{dict.scorecard.btn}</h3>
                            
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
                                    <span className="text-xs text-gold font-bold tracking-widest uppercase mt-2">Points</span>
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
                                            <span className="font-mono text-gold font-bold text-sm bg-gold/10 px-2 py-0.5 rounded border border-gold/20">{item.score} pts</span>
                                        </div>
                                        {/* Bar container */}
                                        <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/30">
                                            <div className="h-full bg-gradient-to-r from-gold to-[#f3d066] w-full rounded-full relative group-hover/bar:brightness-110 transition-all duration-300">
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
            <section className="section-dark relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[100px]"></div>
                </div>

                <div className="mx-auto max-w-4xl relative z-10">
                    <div className="text-center mb-20">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">{dict.timeline.eyebrow}</p>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                            {dict.timeline.title}
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-gold to-[#f3d066] mb-6"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{dict.timeline.desc}</p>
                    </div>

                    <div className="relative space-y-8 md:space-y-12 before:absolute before:content-[''] before:top-0 before:bottom-0 before:left-5 md:before:left-[2.25rem] before:-translate-x-px before:w-[3px] before:bg-gradient-to-b before:from-gold/10 before:via-gold/80 before:to-gold/10">
                        
                        {dict.timeline.phases.map((item, idx) => (
                            <div key={idx} className="relative flex items-start gap-6 md:gap-8 group">
                                <div className="absolute left-5 md:left-[2.25rem] top-8 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-gold z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                                
                                <div className="pl-12 md:pl-20 w-full">
                                    <div className="rounded-3xl border border-border/20 bg-card/20 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:bg-card/30">
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                                            <span className="text-gold font-mono text-sm font-bold bg-gold/10 px-3 py-1 rounded-full w-fit">{item.weeks}</span>
                                            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4 font-medium">
                                            {item.desc}
                                        </p>
                                        <ul className="space-y-2">
                                            {item.items.map((subItem, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <FaCheckCircle className="text-gold mt-1 shrink-0 opacity-70 text-xs" />
                                                    <span>{subItem}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQs Section ── */}
            <section className="section-parchment relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute right-0 top-1/2 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[100px]"></div>
                </div>

                <div className="mx-auto max-w-4xl relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">{dict.faq.eyebrow}</p>
                        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                            {dict.faq.title}
                        </h2>
                        <div className="mx-auto w-16 h-[2px] bg-gradient-to-r from-gold to-[#f3d066] mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{dict.faq.desc}</p>
                    </div>
                    
                    <div className="w-full space-y-6">
                        {dict.faq.items.map((item, idx) => (
                            <details key={idx} className="group rounded-3xl border border-border/60 bg-card/20 backdrop-blur-md transition-all duration-300 open:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] hover:border-gold/20 overflow-hidden">
                                <summary className="flex cursor-pointer items-center justify-between font-display font-bold text-lg md:text-xl p-6 md:p-8 marker:content-none select-none outline-none">
                                    {item.q}
                                    <span className="transition-transform duration-300 group-open:rotate-180 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-background border border-border/50 text-gold shadow-sm">
                                        <MdKeyboardArrowDown className="h-6 w-6" />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-border/10">
                                    <p className="mt-6 text-muted-foreground text-base leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Download & CTA Section ── */}
            <section id="download" className="section-dark relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        
                        {/* Download Card */}
                        <div className="relative group rounded-[2.5rem] border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] hover:bg-card/30 hover:border-gold/30">
                            {/* Inner gold glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="absolute -top-12 -right-12 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 group-hover:scale-110 group-hover:-rotate-12 transform-gpu">
                                <FaBuilding className="w-64 h-64 text-gold" />
                            </div>
                            
                            <div className="relative z-10 h-full flex flex-col">
                                <p className="text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">Resource</p>
                                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                                    {dict.cta.title}
                                </h2>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-grow">
                                    {dict.cta.desc}
                                </p>
                                <a href="/flies/Executive Framework & Due Diligence Checklist for International Entrepreneurs.pdf" download className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold to-[#f3d066] px-8 py-5 text-base font-bold text-black shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all w-full sm:w-auto self-start">
                                    <FaDownload className="text-lg" /> {dict.cta.btnDownload}
                                </a>
                            </div>
                        </div>

                        {/* Consultation Card */}
                        <div className="relative group rounded-[2.5rem] border border-border/20 bg-card/20 p-8 md:p-12 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:bg-card/30 hover:border-foreground/20">
                            
                            <div className="relative z-10 h-full flex flex-col">
                                <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Advisory Services</p>
                                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                                    {dict.cta.btnConsultation}
                                </h2>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed flex-grow">
                                    Seven Oak Prestige assists international entrepreneurs in preparing their businesses, documentation, and operational profiles to support a structured and professional UK expansion.
                                </p>
                                <Link href={`${prefix}/consultation`} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-foreground text-background px-8 py-5 text-base font-bold hover:bg-foreground/90 hover:scale-[1.02] transition-all shadow-xl w-full sm:w-auto self-start">
                                    {dict.cta.btnConsultation} <FaArrowRight className="text-lg" />
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* ── Author Block & Related Guides ── */}
            <section className="section-parchment relative px-4 py-24 sm:px-6 lg:px-8 border-t border-border/10 overflow-hidden">
                {/* Subtle bottom glow */}
                <div className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/[0.02] blur-[100px] pointer-events-none"></div>

                <div className="mx-auto max-w-4xl relative z-10 text-center">
                    <div className="inline-block rounded-[2rem] border border-border/20 bg-card/20 backdrop-blur-md px-8 md:px-12 py-8 md:py-10 mb-16 max-w-3xl hover:bg-card/30 transition-colors duration-500">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            <strong className="text-foreground font-display text-lg md:text-xl mb-3 block">Prepared by Seven Oak Prestige Ltd</strong>
                            This guide has been prepared by Seven Oak Prestige Ltd to help international entrepreneurs understand the practical considerations involved in preparing a UK business for banking and payment provider onboarding. It is reviewed periodically to reflect changes in UK corporate compliance practices and is intended for general educational purposes.
                        </p>
                    </div>
                    
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-8 text-foreground">{dict.relatedGuides.title}</h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <Link href={`${prefix}/services/uk-company-formation-for-non-residents`} className="text-sm font-medium hover:text-gold hover:border-gold/50 transition-all border border-border/60 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">UK Company Formation</Link>
                        <Link href={`${prefix}/services/companies-house-verification`} className="text-sm font-medium hover:text-gold hover:border-gold/50 transition-all border border-border/60 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">Companies House Identity Verification Guide</Link>
                        <Link href={`${prefix}/services/registered-office-service`} className="text-sm font-medium hover:text-gold hover:border-gold/50 transition-all border border-border/60 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">Registered Office Guide</Link>
                        <Link href={`${prefix}/services/vat-registration-uk`} className="text-sm font-medium hover:text-gold hover:border-gold/50 transition-all border border-border/60 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">VAT Registration Guide</Link>
                        <Link href={`${prefix}/services/fintech-banking-guidance`} className="text-sm font-medium hover:text-gold hover:border-gold/50 transition-all border border-border/60 rounded-full px-5 py-3 bg-card/20 backdrop-blur-md hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] text-foreground/80 hover:bg-card/30">Fintech & Banking Setup</Link>
                    </div>
                </div>
            </section>
        </article>
    );
}
