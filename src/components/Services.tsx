"use client";

import { useTranslation } from "@/i18n/TranslationContext";
import Link from "next/link";

const WHATSAPP = "https://wa.me/447447488755";

export default function Services() {
    const { t, locale } = useTranslation();
    const isFr = locale === 'fr';
    const prefix = isFr ? '/fr' : '';

    return (
        <section id="services" className="section-parchment border-t border-border scroll-mt-20 py-24 sm:py-32 px-6">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.services.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="mt-6 max-w-2xl text-3xl font-display font-bold tracking-tight sm:text-4xl text-foreground">
                    {t.services.headline}
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {isFr
                        ? "Choisissez l’accompagnement adapté à votre société existante. Les services d’adresse, la comptabilité, l’assistance administrative et la préparation bancaire sont définis séparément lorsqu’ils ne sont pas inclus dans une formule de création."
                        : "Choose support for your existing company. Address services, accounting, administrative assistance and banking-readiness work are scoped separately where not included in a formation package."}
                </p>
                <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
                    {t.services.items.map(([title, desc, href]) => {
                        const targetHref = href
                            ? href.startsWith("#")
                                ? href
                                : `${prefix}${href}`
                            : "#final-cta";

                        return (
                            <Link
                                key={title}
                                href={targetHref}
                                className="group bg-background p-7 transition-colors hover:bg-accent"
                            >
                                <span
                                    className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14"
                                    aria-hidden="true"
                                />
                                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                            </Link>
                        );
                    })}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                        href={`${WHATSAPP}?text=${encodeURIComponent(
                            isFr
                                ? "Bonjour Seven Oak Prestige, j'ai déjà une société britannique et je souhaiterais discuter d'un accompagnement continu."
                                : "Hello Seven Oak Prestige, I already have a UK company and would like to discuss ongoing support."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                    >
                        {isFr ? "Discuter d’un accompagnement continu" : "Discuss Ongoing Support"}
                    </a>
                    <Link
                        href={`${prefix}/services/uk-accounting-non-residents`}
                        className="btn-gold"
                    >
                        {isFr ? "Découvrir nos services comptables" : "Explore Accounting Services"}
                    </Link>
                </div>
            </div>
        </section>
    );
}
