import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

export default function IdentityVerification() {
    const t = useTranslation().t.identity;
    return (
        <section id="identity" className="section-parchment border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    {t.heading}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {t.body1}
                </p>
                <ol className="mt-7 grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
                    {t.steps.map((s, i) => (
                        <li key={s} className="flex items-baseline gap-2 bg-background px-4 py-3.5">
                            <span className="font-display text-base text-gold">{`0${i + 1}`}</span>
                            <p className="text-sm font-semibold text-foreground">{s}</p>
                        </li>
                    ))}
                </ol>
                <p className="mt-6 max-w-2xl border-l-2 border-gold/60 pl-4 text-sm leading-relaxed text-foreground/85">
                    {t.body2}
                </p>
                <Link href="/services/companies-house-identity-verification" className="btn-gold mt-7 inline-flex">
                    {t.cta}
                </Link>
            </div>
        </section>
    );
}
