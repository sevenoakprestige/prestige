import Image from "next/image";
import { useTranslation } from "@/i18n/TranslationContext";

export default function Deliverables() {
    const t = useTranslation().t.deliverables;
    return (
        <section id="deliverables" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-border">
                        <Image
                            src="/assets/documents.webp"
                            alt="Incorporation certificate, company documents and a fountain pen on a desk"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div>
                            <p className="eyebrow">{t.eyebrow}</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            {t.headline}
                        </h2>
                        <dl className="mt-10 divide-y divide-border border-t border-border">
                            {t.items.map(([k, v]) => (
                                <div key={k} className="py-6">
                                    <dt className="text-sm font-semibold text-foreground">{k}</dt>
                                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
