"use client";
import { Metadata } from "next";
import Link from "next/link";
import VerificationFaq from "@/components/VerificationFaq";
import VerificationFaqFR from "@/components/VerificationFaqFR";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/TranslationContext";
import { getTranslations, Locale } from "@/i18n";

const PATH = "/services/companies-house-identity-verification";
const CHECKOUT = "https://buy.stripe.com/bJe8wHbwY5nv8gde3Ofw40h";
const WHATSAPP =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20ask%20about%20Companies%20House%20identity%20verification%20and%20my%20personal%20code.";

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{children}</p>
      <div className="mt-4 h-px w-16 rule-gold" />
    </div>
  );
}

// Client Component to use Translation Context
function IdentityVerificationContent() {
  const { t, locale } = useTranslation();
  const data = t.servicesPages.companiesHouseIdentityVerification;

  return (
    <div className="bg-background pt-16 lg:pt-20">
      <main>
        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">{data.hero.eyebrow}</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="font-display mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.35rem] text-foreground">
                {data.hero.title}
              </h1>
              <p className="mt-6 font-display text-2xl text-gold-soft">{data.hero.subtitle}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-foreground/90">
                {data.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={CHECKOUT} className="btn-gold">{data.hero.btn1}</a>
                <a href={WHATSAPP} className="btn-ghost">{data.hero.btn2}</a>
              </div>
            </div>
            <aside className="border border-border bg-ink p-7 sm:p-9" aria-label={data.hero.asideFeeLabel}>
              <p className="eyebrow">{data.hero.asideEyebrow}</p>
              <p className="mt-5 font-display text-5xl text-gold-soft">{data.hero.asideFee}</p>
              <p className="mt-2 text-sm text-muted-foreground">{data.hero.asideFeeLabel}</p>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-foreground/90">
                  {data.hero.asideTiming}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <Section>
          <Eyebrow>{data.audiences.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.audiences.title}</h2>
          <ul className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {data.audiences.items.map((item, index) => (
              <li key={index} className={`flex gap-4 bg-background p-7 text-sm leading-relaxed text-foreground/90 ${index === data.audiences.items.length - 1 ? "md:col-span-2" : ""}`}>
                <span className="font-display text-xl text-gold">0{index + 1}</span>{item}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>{data.scope.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.scope.title}</h2>
          <ul className="mt-12 grid gap-x-12 gap-y-5 border-y border-border py-8 sm:grid-cols-2">
            {data.scope.items.map((item, index) => <li key={index} className="flex gap-3 text-sm leading-relaxed text-foreground/90"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}</li>)}
          </ul>
          <p className="mt-7 max-w-3xl text-xs leading-relaxed text-muted-foreground">{data.scope.disclaimer}</p>
        </Section>

        <Section className="border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Eyebrow>{data.personalCode.eyebrow}</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.personalCode.title}</h2></div>
            <div>
              <p className="font-display text-2xl leading-snug">{data.personalCode.subtitle}</p>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                  {data.personalCode.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                  ))}
              </div>
              <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">{data.personalCode.note}</p>
            </div>
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Eyebrow>{data.international.eyebrow}</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.international.title}</h2></div>
            <div>
                {data.international.paragraphs.map((p, i) => (
                    <p key={i} className={i === 0 ? "text-lg leading-relaxed text-foreground/90" : "mt-5 leading-relaxed text-muted-foreground"}>{p}</p>
                ))}
            </div>
          </div>
        </Section>

        <Section className="border-t border-border">
          <Eyebrow>{data.steps.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.steps.title}</h2>
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {data.steps.items.map((item, index) => <li key={index} className="bg-background p-7"><span className="font-display text-2xl text-gold">0{index + 1}</span><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p></li>)}
          </ol>
          <p className="mt-8 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">{data.steps.timingInfo}</p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div><Eyebrow>{data.requirements.eyebrow}</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.requirements.title}</h2><p className="mt-6 text-sm leading-relaxed text-muted-foreground">{data.requirements.subtitle}</p></div>
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {data.requirements.items.map((item, index) => <li key={index} className="flex gap-3 bg-background p-6 text-sm leading-relaxed text-foreground/90"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </Section>

        <Section className="section-dark border-t border-border">
          <Eyebrow>{data.dataProtection.eyebrow}</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.dataProtection.title}</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {data.dataProtection.items.map((item, index) => <div key={index} className="bg-ink p-7 text-sm leading-relaxed text-foreground/90">{item}</div>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <span>ICO Registration No. ZC181349</span>
            <Link href="/privacy" className="text-gold-soft hover:text-foreground">{data.dataProtection.links.privacy}</Link>
            <Link href="/data-protection" className="text-gold-soft hover:text-foreground">{data.dataProtection.links.dataProtection}</Link>
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div><Eyebrow>{data.faq.eyebrow}</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.faq.title}</h2></div>
            {locale === 'fr' ? <VerificationFaqFR /> : <VerificationFaq />}
          </div>
        </Section>

        <section className="section-dark border-t border-border px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="eyebrow">{data.cta.eyebrow}</p>
              <h2 className="font-display mb-6 mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">{data.cta.title}</h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{data.cta.subtitle}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={CHECKOUT} className="btn-gold">{data.cta.btn1}</a>
                <a href={WHATSAPP} className="btn-ghost">{data.cta.btn2}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default IdentityVerificationContent;
