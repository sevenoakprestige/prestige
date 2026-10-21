import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import CompanyChecker from "@/components/CompanyChecker";
import ReviewsDe from "@/components/ReviewsDe";

const SITE = "https://www.sevenoakprestige.com";
const PAGE_URL = `${SITE}/countries/germany/uk-company-formation`;
const TITLE = "UK Limited gründen aus Deutschland | Seven Oak Prestige";
const DESCRIPTION =
  "UK Limited aus Deutschland gründen: Pakete ab £199 inkl. Companies-House-Gebühr, optional mit Registered Office, Director Service Address und Banking-Vorbereitung.";

const WHATSAPP = `https://wa.me/447447488755?text=${encodeURIComponent(
  "Hallo Seven Oak Prestige,\n\nich möchte eine UK Limited aus Deutschland gründen.\n\nWohnsitz: Deutschland\nPrivatperson / bestehende GmbH:\nGeschäftstätigkeit:\nPaket: Starter / Prestige / Elite / Unsicher",
)}`;

const BLOG_GERMANY = "/blog/uk-company-from-germany";

const FAQ_DE = [
  [
    "Kann ich als in Deutschland wohnhafte Person eine UK Limited gründen?",
    "Ja. Für Direktoren und Gesellschafter einer UK Limited ist ein Wohnsitz im Vereinigten Königreich grundsätzlich nicht erforderlich. Erforderlich sind unter anderem eine zulässige Registered-Office-Adresse in Großbritannien sowie die Identitätsprüfung bei Companies House.",
  ],
  [
    "Was kostet es, eine Limited zu gründen?",
    "Unsere Pakete kosten £199 (Starter), £299 (Prestige) oder £399 (Elite) und enthalten die Companies-House-Gründungsgebühr. Adressdienste verlängern sich nach 12 Monaten: Registered Office £59/Jahr, Director Service Address £35/Jahr, Virtual Business Address £150/Jahr. Buchhaltung und Steuererklärungen werden separat vereinbart.",
  ],
  [
    "Wird meine UK Limited in Deutschland automatisch anerkannt?",
    "Nicht automatisch in jeder Hinsicht. Seit dem Brexit kann eine UK Limited, deren tatsächlicher Verwaltungssitz in Deutschland liegt, nach deutschem Recht anders behandelt werden – mit möglichen Folgen für Haftung und Besteuerung. Lassen Sie Ihre konkrete Struktur von einem deutschen Steuerberater oder Rechtsanwalt prüfen.",
  ],
  [
    "Muss die Limited in Deutschland Steuern zahlen?",
    "Das hängt vom Ort der Geschäftsleitung, einer möglichen Betriebsstätte und dem Doppelbesteuerungsabkommen ab. Wird die Gesellschaft faktisch aus Deutschland geführt, kann sie in Deutschland steuerpflichtig sein. Wir geben keine Steuerberatung und versprechen keine Steuerersparnis.",
  ],
  [
    "Kann meine GmbH eine UK-Tochtergesellschaft gründen?",
    "Ja, eine GmbH kann Gesellschafterin einer UK Limited sein. Für die Gründung benötigen wir Unterlagen zur GmbH und zu ihren wirtschaftlich Berechtigten. Ob eine Tochtergesellschaft oder eine Zweigniederlassung sinnvoller ist, sollte vorab steuerlich geprüft werden.",
  ],
  [
    "Wie lange dauert die Gründung?",
    "Nach vollständigen Unterlagen und abgeschlossener Identitätsprüfung reichen wir den Antrag bei Companies House ein. Die Bearbeitungszeit legt Companies House fest; ein festes Datum können wir nicht garantieren.",
  ],
  [
    "Bekomme ich ein britisches Geschäftskonto?",
    "Wir bereiten Sie auf Anträge bei geeigneten Banken und Zahlungsanbietern vor. Jeder Anbieter führt eigene KYC/KYB-Prüfungen durch; eine Kontoeröffnung ist nicht garantiert.",
  ],
  [
    "Was ist die Identitätsprüfung bei Companies House?",
    "Direktoren und PSCs müssen ihre Identität bei Companies House verifizieren. Im Elite-Paket unterstützen wir einen Direktor administrativ durch diesen Prozess, damit Sie Ihren Companies House Personal Code erhalten. Wir sind kein ACSP; weitere Personen werden separat vereinbart.",
  ],
] as const;

export const NONRESIDENT_PACKAGES = [
  {
    name: "Starter Formation",
    price: 199,
    tag: "Sie haben bereits eine zulässige UK-Adresse",
    label: "Starter",
    features: [
      "Gründung der UK Limited",
      "Companies-House-Gebühr inklusive",
      "Digitale Gründungsunterlagen",
      "Compliance-Erinnerungen",
    ],
    note: "Kein Registered Office und keine Director Service Address enthalten – Sie stellen eine zulässige UK-Geschäftsadresse.",
    href: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i",
    featured: false,
  },
  {
    name: "Prestige Formation",
    price: 299,
    tag: "Empfohlen für Gründer mit Wohnsitz in Deutschland",
    label: "Prestige",
    features: [
      "Alles aus Starter",
      "Registered Office London – 12 Monate",
      "Director Service Address – 12 Monate",
      "Post-Scan im Leistungsumfang",
      "Compliance-Unterstützung im Paketumfang",
    ],
    note: "Optionale Verlängerung nur der Adressdienste ab Jahr 2: Registered Office £59 + Director Service Address £35 = £94/Jahr. Gründung und Identitätsprüfung sind einmalige Leistungen.",
    href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
    featured: true,
  },
  {
    name: "Elite Formation",
    price: 399,
    tag: "Am umfassendsten",
    label: "Elite",
    features: [
      "Alles aus Prestige",
      "Virtual Business Address – 12 Monate",
      "Administrative Unterstützung bei der Identitätsprüfung für einen Direktor",
      "Banking-Vorbereitung und Antragsbegleitung",
      "Priorisierter Support",
    ],
    note: "Optionale Verlängerung nur der Adressdienste ab Jahr 2: £94 + Virtual Business Address £150 = £244/Jahr. Gründung, Identitätsprüfung und Banking-Vorbereitung sind nicht Teil der Verlängerung.",
    href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
    featured: false,
  },
] as const;

export default function GermanyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Länder", item: `${SITE}/countries` },
      { "@type": "ListItem", position: 3, name: "UK Limited aus Deutschland gründen", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UK Limited Gründung aus Deutschland",
    inLanguage: "de",
    url: PAGE_URL,
    areaServed: "DE",
    provider: {
      "@type": "Organization",
      name: "Seven Oak Prestige Ltd",
      url: `${SITE}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "124 City Road",
        addressLocality: "London",
        postalCode: "EC1V 2NX",
        addressCountry: "GB",
      },
    },
    offers: NONRESIDENT_PACKAGES.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: "GBP",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de",
    mainEntity: FAQ_DE.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div lang="de" className="nonresident-page overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="section-dark border-b border-border px-5 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <nav aria-label="Brotkrumen" className="text-xs text-muted-foreground">
              <Link href="/" className="hover:text-gold-soft">Startseite</Link> /{" "}
              <Link href="/countries" className="hover:text-gold-soft">Länder</Link> /{" "}
              <span>Deutschland</span>
            </nav>
            <p className="eyebrow mt-6">Für Gründer und GmbHs aus Deutschland</p>
            <h1 className="mt-5 font-display text-3xl leading-tight sm:text-5xl">
              UK Limited aus Deutschland gründen
            </h1>
            <div className="mt-6 h-px w-20 rule-gold" />
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Firma in England gründen – vollständig online, mit festen Paketpreisen ab £199 inklusive Companies-House-Gebühr.
              Ein Berater prüft Ihre Angaben vor der Einreichung; UK-Adressen und Banking-Vorbereitung buchen Sie nach Bedarf.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pakete" className="btn-gold">Pakete vergleichen</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />Beratung per WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Keine Reise nach Großbritannien nötig. Vorbehaltlich Identitätsprüfung, vollständiger Unterlagen und Genehmigung durch Companies House.
            </p>
          </div>
          <picture>
            <source srcSet="/assets/germany-hero-640.webp 640w, /assets/germany-hero-1280.webp 1280w" sizes="(min-width: 1024px) 45vw, 100vw" type="image/webp" />
            <img
              src="/assets/germany-hero-1280.webp"
              width={1280}
              height={883}
              loading="eager"
              alt="Tower Bridge und die Skyline der City of London in der Abenddämmerung"
              className="aspect-[4/3] w-full border border-border object-cover lg:aspect-[4/5] rounded-lg shadow-2xl"
            />
          </picture>
        </div>
      </section>

      {/* ── COMPANY CHECKER ── */}
      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <CompanyChecker lang="de" targetHref="#pakete" />
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="border-t border-border px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Kundenstimmen</p>
          <h2 className="mt-4 mb-8 font-display text-2xl sm:text-3xl">Was Kunden über uns sagen</h2>
          <ReviewsDe />
        </div>
      </section>

      {/* ── TARGET AUDIENCE ── */}
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Für wen</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">Zwei typische Ausgangslagen</h2>
          <div className="mt-8 grid gap-px bg-border md:grid-cols-2">
            {[
              [
                "Privatpersonen mit Wohnsitz in Deutschland",
                "Sie möchten Kunden im Vereinigten Königreich oder international über eine britische Gesellschaft bedienen – etwa als Agentur, Softwareanbieter oder Händler.",
              ],
              [
                "Bestehende deutsche GmbH",
                "Sie erwägen eine eigenständige UK-Tochtergesellschaft für den britischen Markt, statt einer Zweigniederlassung der GmbH.",
              ],
            ].map(([t, d]) => (
              <article key={t} className="bg-background p-6 sm:p-8">
                <h3 className="font-display text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="pakete" className="section-dark border-y border-border px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Limited gründen – Kosten</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">Feste Paketpreise, transparente Verlängerung</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {NONRESIDENT_PACKAGES.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col border p-6 sm:p-7 rounded-xl ${
                  p.featured ? "border-gold bg-card/40" : "border-border bg-card/20"
                }`}
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-gold-soft">{p.tag}</p>
                <h3 className="mt-3 font-display text-2xl">{p.label}</h3>
                <p className="mt-2 font-display text-4xl text-gold">£{p.price}</p>
                <p className="text-xs text-muted-foreground">Paketpreis, inkl. Companies-House-Gebühr</p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{p.note}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${p.featured ? "btn-gold" : "btn-ghost"} mt-6`}
                >
                  {p.label} wählen
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Buchhaltung, Corporation Tax, VAT und Confirmation Statements sind nicht enthalten und werden separat vereinbart – siehe{" "}
            <Link href="/services/uk-accounting-non-residents" className="text-gold-soft underline-offset-4 hover:underline">
              Buchhaltung für UK-Gesellschaften
            </Link>.
          </p>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Ablauf</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">In drei Schritten zur UK Limited</h2>
          <ol className="mt-8 grid gap-px bg-border md:grid-cols-3">
            {[
              ["Paket wählen", "Sie wählen Starter, Prestige oder Elite und erhalten Zugang zum sicheren Onboarding."],
              ["Angaben & Identitätsprüfung", "Sie übermitteln Firmenname, Gesellschafter, Direktoren und Unterlagen; die Identitätsprüfung bei Companies House wird abgeschlossen."],
              ["Prüfung & Einreichung", "Ein Berater prüft Ihre Angaben und reicht sie bei Companies House ein. Nach Eintragung erhalten Sie Ihre digitalen Gründungsunterlagen."],
            ].map(([t, d], i) => (
              <li key={t} className="bg-background p-6 sm:p-8">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── DUE DILIGENCE & LEGAL CONTEXT ── */}
      <section className="border-t border-border px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Vorab klären</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">Was Gründer aus Deutschland beachten sollten</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              [
                "UK Limited oder deutsche Zweigniederlassung",
                "Eine UK Limited ist eine eigenständige britische Gesellschaft. Eine Zweigniederlassung ist Teil des deutschen Unternehmens. Rechtliche und steuerliche Folgen unterscheiden sich.",
              ],
              [
                "Ort der Geschäftsleitung",
                "Wird die Limited tatsächlich aus Deutschland geführt, kann sie in Deutschland unbeschränkt steuerpflichtig sein.",
              ],
              [
                "Betriebsstätte",
                "Feste Einrichtungen oder abhängige Vertreter in Deutschland können eine Betriebsstätte begründen, deren Gewinne in Deutschland besteuert werden.",
              ],
              [
                "Anerkennung nach dem Brexit",
                "Eine UK Limited mit Verwaltungssitz in Deutschland wird nicht automatisch wie eine haftungsbeschränkte Gesellschaft behandelt. Haftungsschutz und Behandlung in Deutschland sind im Einzelfall zu prüfen.",
              ],
            ].map(([t, d]) => (
              <article key={t} className="border border-border p-6 rounded-lg bg-card/20">
                <h3 className="font-display text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted-foreground">
            Seven Oak Prestige übernimmt die Gründung und Verwaltung in Großbritannien und erteilt keine deutsche Steuer- oder Rechtsberatung.
            Wir empfehlen, Ihre Struktur vor der Gründung von einem qualifizierten deutschen Steuerberater oder Rechtsanwalt prüfen zu lassen.
            Mehr dazu in unserem <Link href={BLOG_GERMANY} className="text-gold-soft underline-offset-4 hover:underline">Ratgeber: UK-Firma aus Deutschland</Link>.
          </p>
        </div>
      </section>

      {/* ── BANKING ── */}
      <section className="section-dark border-y border-border px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Geschäftskonto</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">Banking-Vorbereitung für Ihre UK Limited</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Gründung und Kontoeröffnung sind getrennte Prozesse. Wir helfen Ihnen, Geschäftsprofil, KYC/KYB-Unterlagen und Antrag bei geeigneten Banken und Zahlungsanbietern schlüssig vorzubereiten – im Elite-Paket enthalten, sonst separat vereinbart.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Eine Kontoeröffnung ist nicht garantiert; jeder Anbieter entscheidet nach eigenen Prüfungen.</p>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="px-5 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">Häufige Fragen zur UK Limited Gründung</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQ_DE.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg leading-snug flex items-center justify-between">
                  <span>{q}</span>
                  <span aria-hidden="true" className="text-gold transition-transform duration-200 group-open:rotate-45 text-xl font-mono">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-xs leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Weiterführend</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <Link href="/services/uk-company-formation-for-non-residents" className="text-gold-soft hover:underline">
                  UK Company Formation for Non-Residents (Englisch)
                </Link>
              </li>
              <li>
                <Link href="/services/uk-accounting-non-residents" className="text-gold-soft hover:underline">
                  Buchhaltung & Compliance für UK-Gesellschaften
                </Link>
              </li>
              <li>
                <Link href={BLOG_GERMANY} className="text-gold-soft hover:underline">
                  Ratgeber: UK company from Germany
                </Link>
              </li>
            </ul>
            <p className="mt-6 font-semibold text-foreground">Offizielle Quellen (GOV.UK)</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <a href="https://www.gov.uk/limited-company-formation" rel="noreferrer" target="_blank" className="hover:text-gold-soft hover:underline">
                  GOV.UK – Set up a limited company
                </a>
              </li>
              <li>
                <a href="https://www.gov.uk/government/organisations/companies-house" rel="noreferrer" target="_blank" className="hover:text-gold-soft hover:underline">
                  GOV.UK – Companies House
                </a>
              </li>
              <li>
                <a href="https://www.gov.uk/guidance/verifying-your-identity-for-companies-house" rel="noreferrer" target="_blank" className="hover:text-gold-soft hover:underline">
                  GOV.UK – Identitätsprüfung für Companies House
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="final-cta" className="section-dark border-t border-border px-5 py-14 text-center sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl">Bereit, Ihre UK Limited zu gründen?</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          WhatsApp +44 7447 488755 · <a href="mailto:contact@sevenoakprestige.com" className="hover:text-gold-soft">contact@sevenoakprestige.com</a> · Seven Oak Prestige Ltd, Company No. 16903092
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#pakete" className="btn-gold">Paket wählen</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Berater kontaktieren
          </a>
        </div>
      </section>

      {/* Global LTR Footer */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyCta primaryLabel="Pakete" secondaryLabel="WhatsApp" primaryHref="#pakete" />
    </div>
  );
}
