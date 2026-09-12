"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaSearch, FaStar } from "react-icons/fa";
import { Button } from "./ui/button";

const WHATSAPP = "https://wa.me/447447488755";
const COMPANIES_HOUSE = "https://find-and-update.company-information.service.gov.uk/company/16903092";

export default function Hero() {
    return (
        <section id="top" className="section-dark relative isolate overflow-hidden">
            <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:py-24">
                    <p className="eyebrow">UK Company Formation for Non-Residents</p>
                    <div className="mt-4 h-px w-24 rule-gold" />
                    <h1 className="mt-8 max-w-xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                        Form Your UK Company From Anywhere in the World
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                        UK company formation for international founders, with address solutions, guided compliance
                        support and one named adviser throughout the process.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Button asChild className="!px-9 !py-4 !text-sm shadow-lg">
                            <Link href="#pricing">
                                Start My UK Company
                            </Link>
                        </Button>
                        <Button asChild variant="ghost">
                            <a href={WHATSAPP}>
                                Speak to an Adviser
                            </a>
                        </Button>
                    </div>

                    <div className="mt-12 border-t border-border/70 pt-8">
                        <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                            {[
                                ["100% online", "No travel or office visit required"],
                                ["Government fees included", "Companies House filing fee covered"],
                                ["Registered office & director address", "London address solutions included"],
                                ["Secure payment", "Stripe-secured card, Apple Pay & Google Pay"],
                                ["Typically 1–2 business days", "For standard incorporations after verification"],
                                ["Human support throughout", "One named adviser for your setup"],
                            ].map(([title, desc]) => (
                                <li key={title} className="flex items-start gap-3">
                                    <span
                                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/80 bg-gold/10"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 4L3.5 6.5L9 1"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-gold"
                                            />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{title}</p>
                                        <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href={COMPANIES_HOUSE}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-background/5 px-3 py-1.5 text-xs text-foreground/90 transition-colors hover:border-gold/60 hover:text-gold"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                                UK-Registered Provider — Co. No. 16903092
                            </a>
                            <Link
                                href="/refund"
                                className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-background/5 px-3 py-1.5 text-xs text-foreground/90 transition-colors hover:border-gold/60 hover:text-gold"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                                Fair Refund Policy
                            </Link>
                        </div>
                        <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                            Subject to complete information, identity checks and Companies House processing.
                        </p>
                    </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                    {/* Reusing existing hero image if possible or falling back to a placeholder */}
                    <Image
                        src="/assets/hero-london.jpg"
                        alt="An international founder reviewing UK incorporation documents with an adviser in a bright London office"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                        className="h-full w-full object-cover"
                    />
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-deep to-transparent lg:w-32"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
}
