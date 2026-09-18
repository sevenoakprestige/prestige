"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslation } from "@/i18n/TranslationContext";

const WHATSAPP = "https://wa.me/447447488755";

export default function Hero() {
    const { t } = useTranslation();
    const heroContent = t.hero;

    return (
        <section id="top" className="section-dark relative isolate overflow-hidden">
            <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:py-24">
                    <p className="eyebrow">{heroContent.eyebrow}</p>
                    <div className="mt-4 h-px w-24 rule-gold" />
                    <h1 className="font-display mt-8 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] text-foreground">
                        {heroContent.headline}
                    </h1>
                    <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                        {heroContent.body}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {heroContent.subBody}
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Button asChild className="!px-8 !py-4 !text-sm shadow-lg">
                            <Link href="#pricing">
                                {heroContent.cta1}
                            </Link>
                        </Button>
                        <Button asChild variant="ghost">
                            <a href={WHATSAPP}>
                                {heroContent.cta2}
                            </a>
                        </Button>
                    </div>

                    <div className="mt-10 border-t border-border/70 pt-8">
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
                            {heroContent.bullets.map((item) => (
                                <li key={item} className="inline-flex items-center gap-2 text-sm text-foreground/90">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                            {heroContent.disclaimer}
                        </p>
                    </div>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                    {/* Reusing existing hero image if possible or falling back to a placeholder */}
                    <Image
                        src="/assets/hero-london-928.webp"
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
