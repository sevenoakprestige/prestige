import Image from "next/image";
import { useTranslation } from "@/i18n/TranslationContext";

export default function MailHandling() {
    const t = useTranslation().t.mailHandling;
    return (
        <section id="mail" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <div>
                        <p className="eyebrow">{t.eyebrow}</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        {t.headline}
                    </h2>
                    <ol className="mt-12 divide-y divide-border border-t border-border">
                        {t.steps.map(([n, title, b]) => (
                            <li key={n} className="flex gap-8 py-7">
                                <span className="font-display text-2xl text-gold">{n}</span>
                                <div>
                                    <h3 className="text-base font-semibold">{title}</h3>
                                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{b}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <p className="mt-8 max-w-lg border-l-2 border-gold/60 pl-5 text-sm leading-relaxed text-foreground/85">
                        {t.body}
                    </p>
                    <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {t.flow.map((f, i) => (
                            <li key={f} className="flex items-center gap-3">
                                <span>{f}</span>
                                {i < t.flow.length - 1 ? <span className="text-gold">→</span> : null}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-border">
                    <Image
                        src="/assets/mail-handling.webp"
                        alt="Company mail being scanned and processed at a London office desk"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
