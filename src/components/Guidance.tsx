import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

export default function Guidance() {
    const t = useTranslation().t.guidance;
    return (
        <section className="border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <div>
                            <p className="eyebrow">{t.eyebrow}</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {t.headline}
                        </h2>
                    </div>
                    <Link
                        href="/countries"
                        className="border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold"
                    >
                        {t.exploreAll}
                    </Link>
                </div>
                <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
                    {t.guides.map(([title, body]) => (
                        <Link
                            key={title}
                            href={`/countries/${title.toLowerCase()}/uk-company-formation`}
                            className="group block bg-background p-8 transition-colors hover:bg-accent"
                        >
                            <span
                                className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14"
                                aria-hidden="true"
                            />
                            <h3 className="mt-5 font-display text-xl">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
