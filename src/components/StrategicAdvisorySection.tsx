"use client";

import Link from "next/link";

export default function StrategicAdvisorySection() {


    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28 mt-10">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-5xl text-center">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="strategic-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Strategic Business & Capital
                        <br />
                        Structuring Advisory
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Subtitle */}
                <p className="strategic-subtitle mx-auto mb-10 max-w-3xl text-base leading-relaxed sm:text-lg">
                    For founders, investors & international entrepreneurs navigating
                    <br className="hidden sm:block" />
                    banking, compliance, expansion and fundraising.
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
