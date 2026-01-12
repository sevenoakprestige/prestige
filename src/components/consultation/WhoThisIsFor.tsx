"use client";

import Link from "next/link";

export default function WhoThisIsFor() {


    const targetAudience = [
        "Founders & CEOs",
        "International entrepreneurs",
        "Non-resident business owners",
        "Investors & high-growth startups",
    ];

    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl text-center">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="who-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Who This Is For
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Target Audience List */}
                <ul className="who-list mx-auto mb-8 max-w-md space-y-4">
                    {targetAudience.map((item, index) => (
                        <li
                            key={index}
                            className="who-list-item flex items-start text-lg sm:text-xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="text-left">

                                <span className="mr-2 mt-1 flex-shrink-0 text-[#d4af37]">•</span>
                                <span className="">{item}</span>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Tagline */}
                <p className="who-tagline mb-10 text-base italic leading-relaxed sm:text-lg lg:text-xl">
                    This is not for shortcuts or hacks. We focus on structure,
                    <br className="hidden sm:block" />
                    compliance and long-term viability.
                </p>

                {/* CTA Button */}
                <Link
                    href="https://calendly.com/sevenoakprestige/30min"
                    className="strategic-button group relative inline-block overflow-hidden rounded-lg border-2 px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-base md:px-10 md:text-lg"
                >
                    <span className="relative z-10 whitespace-nowrap">Request a Private Strategy Session</span>
                    {/* Hover effect background */}
                    <div className="strategic-button-bg absolute inset-0 -z-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                </Link>
            </div>
        </section>
    );
}
