"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/i18n/TranslationContext";

export default function SuccessStories() {
    const t = useTranslation().t.success;
    return (
        <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <figure>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-border">
                        <Image
                            src="/assets/case-study.webp"
                            alt="International founder working remotely from Thailand"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover"
                        />
                    </div>
                    <figcaption className="mt-3 text-xs text-muted-foreground">
                        {t.caption}
                    </figcaption>
                </figure>
                <div>
                    <div>
                        <p className="eyebrow">{t.eyebrow}</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        {t.headline}
                    </h2>
                    <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                        {t.body1}
                    </p>
                    <dl className="mt-8 divide-y divide-border border-y border-border">
                        <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                            <dt className="text-sm font-semibold text-foreground">{t.challenge}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">
                                {t.challengeText}
                            </dd>
                        </div>
                        <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                            <dt className="text-sm font-semibold text-foreground">{t.support}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">
                                {t.supportText}
                            </dd>
                        </div>
                        <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                            <dt className="text-sm font-semibold text-foreground">{t.outcome}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">
                                {t.outcomeText}
                            </dd>
                        </div>
                    </dl>
                    <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                        {t.disclaimer}
                    </p>
                    <Link href="#pricing" className="btn-ghost mt-8 inline-flex">
                        {t.cta}
                    </Link>
                </div>
            </div>
        </section>
    );
}
