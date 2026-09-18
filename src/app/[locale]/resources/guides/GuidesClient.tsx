"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

const WHATSAPP = "https://wa.me/447447488755";

export default function GuidesClient() {
  const { t } = useTranslation();
  const guides = t.resourcesPages.guides;

  return (
    <div className="bg-background min-h-screen">
      <div className="border-b border-border px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{guides.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
            {guides.hero.title}
          </h1>
          <div className="mt-8 h-px w-24 rule-gold" />
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            {guides.hero.subtitle}
          </p>
        </div>
      </div>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2">
          {guides.items.map((g) => (
            <article key={g.title} className="bg-background p-8 sm:p-10">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">{g.kicker}</p>
              <h2 className="mt-5 font-display text-2xl leading-snug">{g.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
              <p className="mt-7 border-t border-border pt-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                {g.covered}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">{guides.cta.title}</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {guides.cta.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP} className="btn-gold">
              {guides.cta.whatsapp}
            </a>
            <Link href="/#faq" className="btn-ghost">
              {guides.cta.faq}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
