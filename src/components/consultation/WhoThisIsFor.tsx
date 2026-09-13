"use client";

import Link from "next/link";

export default function WhoThisIsFor() {


    const targetAudience = [
        "Founders & CEOs.",
        "International entrepreneurs.",
        "Non-resident business owners.",
        "Investors & high-growth startups.",
    ];

    return (
        <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl text-center">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="who-heading mb-4 text-3xl font-display font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Who This Is For
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-gold to-[#f3d066]"></div>
                </div>

                {/* Target Audience Grid */}
                <div className="mx-auto mb-8 max-w-2xl grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {targetAudience.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/25 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] text-left"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37]/20 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span className="text-base sm:text-lg font-medium text-foreground/90">{item}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tagline */}
                <p className="text-muted-foreground who-tagline mb-10 text-base italic leading-relaxed sm:text-lg lg:text-xl">
                    This is not for shortcuts or hacks. We focus on structure,
                    <br className="hidden sm:block" />
                    compliance and long-term viability.
                </p>

                {/* CTA Button */}
                <Link
                    href="https://calendly.com/sevenoakprestige/30min"
                    className="btn-gold mt-8"
                >
                    Request a Private Strategy Session
                </Link>
            </div>
        </section>
    );
}
