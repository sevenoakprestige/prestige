"use client";

import Link from "next/link";

const WHATSAPP = "https://wa.me/447447488755";

export default function CTASection() {
    return (
        <div id="final-cta" className="section-dark relative isolate overflow-hidden border-t border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink-deep to-ink/80" />
            <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        Ready to Form Your UK Company?
                    </h2>
                    <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                        Choose the package that fits your needs and complete the process remotely with adviser support.
                        Companies House filing is included, with UK address and additional compliance support available
                        depending on your package.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Link href="#pricing" className="btn-gold">
                            See Packages — From £199
                        </Link>
                        <Link href={WHATSAPP} className="btn-ghost">
                            Ask an Adviser on WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
