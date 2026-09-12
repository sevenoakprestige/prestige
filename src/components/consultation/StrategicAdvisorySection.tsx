"use client";

import Link from "next/link";

export default function StrategicAdvisorySection() {


    return (
        <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-5xl text-center">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="strategic-heading mb-4 text-3xl font-display font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Strategic Business & Capital
                        <br />
                        Structuring Advisory
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-gold to-[#f3d066]"></div>
                </div>

                {/* Subtitle */}
                <p className="text-muted-foreground strategic-subtitle mx-auto mb-10 max-w-3xl text-base leading-relaxed sm:text-lg">
                    For founders, investors & international entrepreneurs navigating
                    <br />
                    banking, compliance, expansion and fundraising.
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
