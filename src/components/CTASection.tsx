"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

const WHATSAPP = "https://wa.me/447447488755";

export default function CTASection() {
    return (
        <div id="final-cta" className="section-dark relative isolate overflow-hidden border-t border-border">
            <Image
                src="/assets/institution.webp"
                alt="Refined London institutional architecture at dusk"
                fill
                priority
                className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/90 to-ink-deep/60" />
            <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        Ready to Establish Your UK Company?
                    </h2>
                    <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                        Choose the setup that fits your circumstances or speak with an adviser before you begin.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button asChild>
                            <a href="#pricing">
                                Start My UK Company
                            </a>
                        </Button>
                        <Button asChild variant="ghost">
                            <a href={WHATSAPP}>
                                Speak to an Adviser
                            </a>
                        </Button>
                    </div>
                    <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
                        <div>
                            <p className="eyebrow">UK Landline</p>
                            <a href="tel:+442045780726" className="mt-3 block text-sm hover:text-gold-soft">
                                +44 20 4578 0726
                            </a>
                        </div>
                        <div>
                            <p className="eyebrow">WhatsApp 24/7</p>
                            <a href={WHATSAPP} className="mt-3 block text-sm hover:text-gold-soft">
                                +44 7447 488755
                            </a>
                        </div>
                        <div>
                            <p className="eyebrow">Email</p>
                            <a
                                href="mailto:contact@sevenoakprestige.com"
                                className="mt-3 block break-all text-sm hover:text-gold-soft"
                            >
                                contact@sevenoakprestige.com
                            </a>
                        </div>
                    </div>
                    <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
                        We only use your information to form your company and meet legal verification requirements. We
                        do not sell your data.{" "}
                        <Link href="/security" className="text-gold-soft hover:text-gold">
                            Trust &amp; Security
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
