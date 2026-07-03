"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaSearch, FaStar } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
            {/* ── Background image (Dark mode only) ── */}
            <div className="absolute inset-0 -z-20 hidden dark:block">
                <Image
                    src="/assets/seven_oak_prestise.png"
                    alt="London skyline with global network — Seven Oak Prestige"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Dark overlay — strong enough for dark mode */}
                <div className="absolute inset-0 bg-black/65"></div>
                {/* Bottom vignette fading to black */}
                <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Animated gold orbs */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="hero-circle-1 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
                <div className="hero-circle-2 absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
            </div>

            {/* Content — Two Column Layout */}
            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column — Hero Text & CTA */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                            </span>
                            <span className="hero-text text-sm font-medium">
                                Trusted by 500+ International Entrepreneurs
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="hero-heading mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            Start Your UK Company from{" "}
                            <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                                Anywhere in the World
                            </span>
                            {" "}— in 24 Hours
                        </h1>

                        {/* Subheading */}
                        <p className="hero-text mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl md:text-2xl lg:mx-0">
                            Premium UK company formation for non-residents, registered office solutions, and compliance-focused business structuring for international operations.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
                            <Link
                                href="https://wa.me/447447488755"
                                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-4 text-base font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95 sm:text-lg"
                            >
                                <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                                <span>Start Now</span>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100"></div>
                            </Link>

                            <Link
                                href="#checker"
                                className="hero-secondary-btn group inline-flex items-center gap-3 rounded-xl border-2 border-[#d4af37] bg-transparent px-8 py-4 text-base font-bold transition-all duration-300 hover:scale-105 hover:bg-[#d4af37] hover:text-black active:scale-95 sm:text-lg"
                            >
                                <FaSearch className="h-4 w-4 transition-transform group-hover:scale-110" />
                                <span>Check Company Name</span>
                            </Link>
                        </div>

                        {/* Google Reviews Widget */}
                        <div className="mt-10 flex justify-center lg:justify-start">
                            <Link 
                                href="https://g.page/r/Cb2OqO7UHlpqEAE/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 transition-transform hover:scale-105"
                            >
                                {/* Google G Logo SVG */}
                                <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                
                                <div className="flex flex-col justify-center text-left">
                                    <span className="text-lg font-medium text-foreground leading-none mb-1">Google Reviews</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-foreground leading-none">5.00</span>
                                        <div className="flex text-[#FBBC05] gap-0.5">
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm sm:gap-8 lg:justify-start">
                            <div className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="hero-text font-medium">24-Hour Setup</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="hero-text font-medium">100% Remote</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="h-5 w-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="hero-text font-medium">Expert Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Global Presence Card */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-[#d4af37]/20 bg-gradient-to-br from-white/80 via-white/70 to-[#d4af37]/5 dark:border-border/30 dark:from-card/30 dark:via-card/25 dark:to-card/20 p-10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 transition-all duration-500 hover:border-[#d4af37]/35 dark:hover:border-[#d4af37]/45 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] sm:p-12">
                            {/* Gold L-shaped border accent — right + bottom with perfect corner rounding */}
                            <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl border-b-[6px] border-r-[6px] border-[#d4af37]"></div>

                            {/* Subtle corner glow */}
                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#d4af37]/8 blur-3xl pointer-events-none"></div>

                            {/* Label with left accent bar */}
                            <div className="mb-8 flex items-center gap-3">
                                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#d4af37] to-[#f3d066]"></div>
                                <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase">
                                    Global Coverage
                                </span>
                            </div>

                            {/* Subtitle */}
                            <p className="mb-10 text-lg font-medium leading-snug text-gray-700 dark:text-gray-300 sm:text-xl">
                                Proudly Serving Founders &amp; Entrepreneurs. Even Where Others Don&apos;t.
                            </p>

                            {/* Big stat number */}
                            <p className="mb-1 text-7xl font-black tracking-tighter text-[#d4af37] sm:text-8xl">
                                190<span className="text-[#f3d066]">+</span>
                            </p>
                            <p className="mb-10 text-2xl font-bold text-foreground sm:text-3xl">
                                Countries Worldwide
                            </p>

                            {/* Check Eligibility underlined CTA */}
                            <Link
                                href="https://wa.me/447447488755?text=Hi%2C%20I%20would%20like%20to%20check%20my%20eligibility%20for%20UK%20company%20formation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-2 text-[#d4af37] font-semibold underline underline-offset-4 decoration-[#d4af37]/50 decoration-2 transition-all duration-300 hover:decoration-[#d4af37] hover:text-[#c9a430] hover:gap-3"
                            >
                                <span>Check Eligibility</span>
                                <svg className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
