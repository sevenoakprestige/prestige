'use client';

import { fr } from '@/i18n/fr';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import Footer from '@/components/Footer';

const WHATSAPP = 'https://wa.me/447447488755';
const t = fr;

const PROVIDER_LOGOS = [
  { name: 'Revolut', logo: 'https://www.google.com/s2/favicons?domain=revolut.com&sz=128' },
  { name: 'Wise', logo: 'https://www.google.com/s2/favicons?domain=wise.com&sz=128' },
  { name: 'Payoneer', logo: 'https://www.google.com/s2/favicons?domain=payoneer.com&sz=128' },
  { name: 'Airwallex', logo: 'https://www.google.com/s2/favicons?domain=airwallex.com&sz=128' },
];

const PLANS = [
  {
    name: 'Starter',
    price: '199 £',
    note: 'Immatriculation uniquement — pour les fondateurs disposant déjà d\'arrangements d\'adresse britannique appropriés.',
    features: [
      'Immatriculation de société britannique',
      'Dépôt Companies House',
      'Documents sociaux numériques',
      'Rappels de conformité clés',
    ],
    cta: 'Choisir Starter',
    href: 'https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i',
    featured: false,
  },
  {
    name: 'Prestige',
    price: '299 £',
    note: 'Le choix naturel pour la plupart des non-résidents : immatriculation et infrastructure d\'adresse britannique.',
    features: [
      'Tout ce qui est inclus dans Starter',
      'Siège social enregistré — 12 mois',
      'Adresse de service directeur — 12 mois',
      'Gestion et scan du courrier éligible',
      'Assistance à la conformité annuelle selon la formule',
    ],
    cta: 'Choisir Prestige',
    href: 'https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a',
    featured: false,
    tag: 'Recommandé pour les fondateurs non-résidents',
  },
  {
    name: 'Elite',
    price: '399 £',
    note: 'Prestige avec vérification d\'identité renforcée et assistance à la préparation bancaire.',
    features: [
      'Tout ce qui est inclus dans Prestige',
      'Adresse professionnelle virtuelle — 12 mois',
      'Support haute priorité',
      'Assistance bancaire et EMI directe selon disponibilité',
      'Assistance à la conformité',
    ],
    logos: true,
    footnote: 'Un directeur inclus. Les directeurs supplémentaires ou personnes concernées sont traités séparément.',
    cta: 'Choisir Elite',
    href: 'https://buy.stripe.com/3cI9ALfNeaHP2VTgbWfw40v',
    featured: true,
    tag: 'La formule la plus complète',
  },
];

function FrFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-parchment border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <div className="mt-4 h-px w-16 rule-gold" />
            <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.faq.headline}</h2>
          </div>
          <div>
            <div className="divide-y divide-border border-y border-border">
              {t.faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
                      >
                        <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                        <span className={`mt-1 shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">
                          <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                        </span>
                      </button>
                    </h3>
                    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FrHomePage() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section id="top" className="section-dark relative isolate overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-20 lg:py-24">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <div className="mt-4 h-px w-24 rule-gold" />
            <h1 className="font-display mt-8 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] text-foreground">
              {t.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{t.hero.body}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{t.hero.subBody}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="#pricing" className="btn-gold !px-8 !py-4 !text-sm shadow-lg">{t.hero.cta1}</Link>
              <a href={WHATSAPP} className="btn-ghost">{t.hero.cta2}</a>
            </div>
            <div className="mt-10 border-t border-border/70 pt-8">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
                {t.hero.bullets.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2 text-sm text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">{t.hero.disclaimer}</p>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image src="/assets/hero-london-928.webp" alt="Un fondateur international examine des documents d'immatriculation britanniques avec un conseiller à Londres" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-deep to-transparent lg:w-32" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="section-parchment border-y border-border px-6">
        <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.map(([title, body]) => (
            <div key={title as string} className="border-border py-9 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0">
              <dt className="text-sm font-semibold text-foreground">{title}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* PRICING */}
      <section id="pricing" className="border-t border-border scroll-mt-20 px-6 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{t.pricing.eyebrow}</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h2 className="font-display mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{t.pricing.headline}</h2>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-3">
            {PLANS.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col p-8 sm:p-10 ${p.featured ? 'section-dark border-y-2 border-gold bg-ink-deep shadow-[0_30px_60px_-30px_oklch(0_0_0/60%)] lg:-my-4 lg:py-14' : 'bg-background'}`}
              >
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-1 h-4 text-[0.6rem] uppercase tracking-[0.14em] text-gold">{p.tag ?? ''}</p>
                <p className="mt-8 font-display text-4xl text-foreground">{p.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
                <ul className="mt-8 flex-1 space-y-2.5 border-t border-border pt-8 text-sm text-foreground/85">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.logos && (
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="eyebrow">{t.pricing.providerNote}</p>
                    <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
                      {PROVIDER_LOGOS.map((b) => (
                        <li key={b.name} className="flex items-center gap-2">
                          <img src={b.logo} alt={`${b.name} logo`} width={24} height={24} className="h-6 w-6 rounded-sm" />
                          <span className="font-display text-lg text-foreground/70">{b.name}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.pricing.providerDisclaimer}</p>
                  </div>
                )}
                {p.footnote && <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{p.footnote}</p>}
                <a href={p.href} className={`mt-10 ${p.featured ? 'btn-gold' : 'btn-ghost'}`}>{p.cta}</a>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Bonjour Seven Oak Prestige, j'ai une question sur la formule ${p.name}.`)}`}
                  className="mt-4 inline-block text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {t.pricing.askExpert}
                </a>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">{t.pricing.financialDisclaimer}</p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {t.pricing.termsText}{' '}
            <Link href="/fr/terms" className="text-gold-soft underline-offset-4 hover:underline">{t.pricing.terms}</Link>{' '}
            {t.pricing.and}{' '}
            <Link href="/fr/refund" className="text-gold-soft underline-offset-4 hover:underline">{t.pricing.refundPolicy}</Link>.
          </p>
        </div>
      </section>

      {/* RENEWALS */}
      <section id="renewals" className="section-parchment border-t border-border scroll-mt-20 px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{t.renewals.eyebrow}</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl text-foreground font-display font-bold">{t.renewals.headline}</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.renewals.body}</p>
          <ul className="mt-8 divide-y divide-border border-y border-border md:hidden">
            {t.renewals.items.map(([s, i, r]) => (
              <li key={s as string} className="py-5">
                <p className="text-sm font-semibold text-foreground">{s}</p>
                <p className="mt-2 text-sm text-muted-foreground"><span className="text-foreground/80">{t.renewals.initialPeriodMobile}</span> {i}</p>
                <p className="mt-1 text-sm text-muted-foreground"><span className="text-foreground/80">{t.renewals.renewalMobile}</span> {r}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 hidden md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-y border-border">
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">{t.renewals.serviceLabel}</th>
                  <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">{t.renewals.initialPeriod}</th>
                  <th className="py-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">{t.renewals.renewal}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {t.renewals.items.map(([s, i, r]) => (
                  <tr key={s as string}>
                    <td className="py-4 pr-6 font-semibold text-foreground">{s}</td>
                    <td className="py-4 pr-6 text-muted-foreground">{i}</td>
                    <td className="py-4 text-muted-foreground">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AFTER PAYMENT */}
      <section className="border-t border-border py-16 sm:py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{t.afterPayment.eyebrow}</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl text-foreground font-display font-bold">{t.afterPayment.headline}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{t.afterPayment.body}</p>
          <ol className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {t.afterPayment.steps.map(([n, title, text]) => (
              <li key={n as string} className="bg-background p-7">
                <span className="font-display text-xl text-gold">{n}</span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-parchment border-t border-border scroll-mt-20 py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h2 className="mt-6 max-w-2xl text-3xl font-display font-bold tracking-tight sm:text-4xl text-foreground">{t.services.headline}</h2>
          <dl className="mt-14 divide-y divide-border border-y border-border">
            {t.services.items.map(([title, body]) => (
              <div key={title as string} className="grid gap-2 py-6 sm:grid-cols-[0.4fr_1fr] sm:gap-10">
                <dt className="text-sm font-semibold text-foreground">{title}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-border px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">{t.why.eyebrow}</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.why.headline}</h2>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map(([title, body]) => (
              <article key={title as string} className="bg-background p-8">
                <span className="block h-px w-8 bg-gold/60" aria-hidden="true" />
                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.why.body}</p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-border">
              <Image src="/assets/documents.webp" alt="Certificat d'immatriculation et documents sociaux sur un bureau" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="eyebrow">{t.deliverables.eyebrow}</p>
              <div className="mt-4 h-px w-16 rule-gold" />
              <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.deliverables.headline}</h2>
              <dl className="mt-10 divide-y divide-border border-t border-border">
                {t.deliverables.items.map(([k, v]) => (
                  <div key={k as string} className="py-6">
                    <dt className="text-sm font-semibold text-foreground">{k}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDANCE */}
      <section className="border-t border-border px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">{t.guidance.eyebrow}</p>
              <div className="mt-4 h-px w-16 rule-gold" />
              <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.guidance.headline}</h2>
            </div>
            <Link href="/fr/countries" className="border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.16em] text-gold-soft transition-colors hover:text-gold">
              {t.guidance.exploreAll}
            </Link>
          </div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
            <Link href="/countries/india/uk-company-formation" className="group block bg-background p-8 transition-colors hover:bg-accent">
              <span className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl">India</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">UK company formation for Indian founders.</p>
            </Link>
            <Link href="/countries/france/uk-company-formation" className="group block bg-background p-8 transition-colors hover:bg-accent">
              <span className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl">France</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Créer une société UK depuis la France.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FrFaq />

      {/* CTA */}
      <div id="final-cta" className="section-dark relative isolate overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-deep via-ink-deep to-ink/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{t.cta.headline}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{t.cta.body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="#pricing" className="btn-gold">{t.cta.cta1}</Link>
              <a href={WHATSAPP} className="btn-ghost">{t.cta.cta2}</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
