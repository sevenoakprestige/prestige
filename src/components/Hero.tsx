"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslation } from "@/i18n/TranslationContext";

export default function Hero() {
    const { t } = useTranslation();
    const heroContent = t.hero;

    return (
        <section id="top" className="section-dark relative isolate overflow-hidden">
            <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:py-24">
                    <p className="max-w-xl text-sm leading-relaxed text-gold">{heroContent.eyebrow}</p>
                    <div className="mt-4 h-px w-24 rule-gold" />
                    <h1 className="font-display mt-8 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] text-foreground">
                        {heroContent.headline}
                    </h1>
                    <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                        {heroContent.body}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Button asChild className="!px-8 !py-4 !text-sm shadow-lg whitespace-normal h-auto text-center">
                            <Link href="#name-check">
                                {heroContent.cta1}
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" className="whitespace-normal h-auto text-center">
                            <Link href="#pricing">
                                {heroContent.cta2}
                            </Link>
                        </Button>
                    </div>

                    <Link
                        href="#services"
                        className="mt-6 block max-w-xl text-sm leading-relaxed text-gold-soft underline underline-offset-4 hover:text-gold"
                    >
                        {heroContent.subBody}
                    </Link>

                    <div className="mt-6 border-t border-border/70 pt-6">
                        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
                            {heroContent.bullets.map((item) => (
                                <li key={item} className="inline-flex items-start sm:items-center gap-2 text-sm text-foreground/90">
                                    <span className="mt-1.5 sm:mt-0 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                            {heroContent.disclaimer}
                        </p>
                    </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                    <Image
                        src="/assets/hero-london-928.webp"
                        alt="Illustrative image of a founder and adviser reviewing company documents"
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
