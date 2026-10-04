import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import {
  GOOGLE_REVIEWS_URL,
  ReviewsSlow,
} from "@/components/ReviewsCarousel";
import { getExchangeRate } from "@/lib/getExchangeRate";

const PATH = "/countries/india/uk-company-formation";
const TITLE = "UK Company Formation for Indian Residents | Seven Oak Prestige";
const DESCRIPTION =
  "Form a UK limited company remotely from India with a UK-based team. Packages from £199 include the Companies House fee, with address and banking-readiness options.";
const WHATSAPP_NUMBER = "447447488755";
const BASE_MESSAGE = `Hello Seven Oak Prestige,

I would like advice about forming a UK company from India.

Country of residence: India
Business activity:
Target market:
Existing Indian company: Yes / No
Package: Starter / Prestige / Elite / Unsure
Banking assistance needed: Yes / No`;
const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BASE_MESSAGE)}`;
const COMPANIES_HOUSE = "https://find-and-update.company-information.service.gov.uk/company/16903092";

const GUIDES = {
  complete:
    "/blog/how-to-start-a-uk-company-from-india-the-complete-guide-for-indian-entrepreneurs-2026",
  cost: "/blog/uk-company-formation-from-india-cost",
  fema: "/blog/fema-rbi-rules-uk-company-indian-founders",
  banking: "/blog/uk-business-bank-account-indian-residents",
  tax: "/blog/uk-company-tax-indian-residents-poem-double-taxation-2026",
  saas: "/blog/uk-company-indian-saas-technology-founders-2026",
  ecommerce: "/blog/uk-company-for-indian-amazon-e-commerce-exporters-2026",
  subsidiary: "/blog/uk-subsidiary-indian-company-2026",
};

const PROVIDER_LOGOS = [
  { name: "Revolut", logo: "https://www.google.com/s2/favicons?domain=revolut.com&sz=128" },
  { name: "Wise", logo: "https://www.google.com/s2/favicons?domain=wise.com&sz=128" },
  { name: "Payoneer", logo: "https://www.google.com/s2/favicons?domain=payoneer.com&sz=128" },
  { name: "Airwallex", logo: "https://www.google.com/s2/favicons?domain=airwallex.com&sz=128" },
];

const PROCESS = [
  ["01", "Choose and pay", "Select the package that matches your UK address and support requirements, then pay securely."],
  ["02", "Complete secure onboarding", "Provide the company, director and shareholder information requested for your file."],
  ["03", "Complete the required checks", "We collect the relevant documents, complete Seven Oak KYC and coordinate applicable Companies House identity-verification requirements."],
  ["04", "Review and submission", "A human adviser reviews the incorporation information before it is submitted to Companies House."],
  ["05", "Receive your documents", "Following successful registration, your electronic company documents and practical next steps are provided."],
] as const;

const REQUIREMENTS = [
  ["Identity", "A valid passport or another eligible identity document."],
  ["Residential address", "Recent proof of your current address, such as an eligible bank statement or utility bill dated within three months."],
  ["Company proposal", "Your proposed company name and a clear description of the intended business activity."],
  ["People and ownership", "Director, shareholder and beneficial-ownership information, including the proposed share structure."],
] as const;

const FAQS = [
  [
    "Can an Indian resident own and direct a UK limited company?",
    "Yes, generally. UK residence is not normally required to own shares in or act as a director of a UK private limited company. The company, founder and proposed activity remain subject to Companies House requirements and the relevant identity, KYC and eligibility checks.",
  ],
  [
    "Do I need to travel to the UK to register the company?",
    "Not normally for a standard eligible formation. Onboarding, document collection, review and incorporation can generally be handled remotely from India.",
  ],
  [
    "Do I need a UK-resident director?",
    "No, a UK-resident director is not generally required. The company must have at least one individual director aged 16 or over and an appropriate UK registered office.",
  ],
  [
    "Which package suits an Indian founder without a UK address?",
    "Prestige is designed for founders who need a Registered Office and Director Service Address. Elite adds a Virtual Business Address for 12 months, high priority support, direct banking and EMI assistance where applicable, and compliance assistance.",
  ],
  [
    "How long does the formation process take?",
    "The typical overall working timeframe is approximately 3–5 working days after all required information and KYC requirements are complete. Companies House processing and approval remain outside Seven Oak's control, so completion is not guaranteed within a fixed period.",
  ],
  [
    "Does the Elite package guarantee a business bank account?",
    "Elite includes direct banking assistance, business-profile review and application guidance. The final account-opening decision is made by the selected banking provider based on its eligibility, KYC and compliance requirements.",
  ],
  [
    "Does a UK company guarantee a UK bank or payment account?",
    "No. Incorporation and provider approval are separate processes. Banks, EMIs and payment providers make their own decisions based on residence, activity, ownership, expected transactions, KYC and risk appetite.",
  ],
  [
    "What should I consider under Indian rules?",
    "Depending on how the UK company is owned, funded and managed, FEMA, ODI, LRS, Indian tax, foreign-asset reporting and bank-reporting requirements may be relevant. Obtain advice from an appropriately qualified Indian professional where required.",
  ],
] as const;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `https://www.sevenoakprestige.com${PATH}`,
    languages: {
      "en-IN": `https://www.sevenoakprestige.com${PATH}`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://www.sevenoakprestige.com${PATH}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
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

export default async function IndiaFormationPage() {
  // Fetch live GBP -> INR rate with 24h ISR caching. Fails gracefully to null.
  const inrRate = await getExchangeRate("GBP", "INR");

  const formatInr = (gbp: number, fallback: string) => {
    if (!inrRate) return fallback;
    return `₹${Math.round(gbp * inrRate).toLocaleString("en-IN")}`;
  };

  const PACKAGES = [
    {
      name: "Starter",
      price: "£199",
      inr: formatInr(199, "₹25,300"),
      tag: "Your UK addresses are already arranged",
      description:
        "For founders who mainly need incorporation and already have the necessary address arrangements.",
      features: [
        "UK company formation",
        "Companies House filing fee included",
        "Digital company documents",
        "Key compliance reminders",
      ],
      note: "No Registered Office, Director Service Address or Virtual Business Address is included.",
      checkout: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i",
      featured: false,
    },
    {
      name: "Prestige",
      price: "£299",
      inr: formatInr(299, "₹38,000"),
      tag: "Recommended for most India-based founders",
      description:
        "For founders in India who also need UK statutory address infrastructure.",
      features: [
        "Everything in Starter",
        "Registered Office — 12 months",
        "Director Service Address — 12 months",
        "Eligible mail handling within the service scope",
        "Compliance support within the package scope",
      ],
      note: "Year-two Registered Office and Director Service Address renewal: £94 in total.",
      checkout: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
      featured: false,
    },
    {
      name: "Elite",
      price: "£399",
      inr: formatInr(399, "₹50,700"),
      tag: "Most comprehensive",
      description:
        "For founders wanting the most complete setup, including a Virtual Business Address, priority support and direct banking assistance where applicable.",
      features: [
        "Everything in Prestige",
        "Virtual business address for 12 months",
        "High priority support",
        "Direct banking & EMI assistance where applicable",
        "Compliance assistance",
      ],
      note: "Year-two address renewal: £244 in total.",
      checkout: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
      featured: true,
    },
  ] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sevenoakprestige.com" },
          { "@type": "ListItem", position: 2, name: "Countries", item: "https://www.sevenoakprestige.com/countries" },
          { "@type": "ListItem", position: 3, name: "UK company formation for Indian residents", item: `https://www.sevenoakprestige.com${PATH}` },
        ],
      },
      {
        "@type": "Service",
        name: "UK Company Formation for Indian Residents",
        description: DESCRIPTION,
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
          identifier: "16903092",
          address: {
            "@type": "PostalAddress",
            streetAddress: "124 City Road",
            addressLocality: "London",
            postalCode: "EC1V 2NX",
            addressCountry: "GB",
          },
        },
        areaServed: { "@type": "Country", name: "India" },
        serviceType: "UK company formation assistance",
        offers: PACKAGES.map((item) => ({
          "@type": "Offer",
          name: item.name,
          price: item.price.slice(1),
          priceCurrency: "GBP",
        })),
      },
    ],
  };

  return (
    <div className="min-w-0 overflow-x-clip bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero Section */}
        <div className="section-dark overflow-hidden border-b border-border">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
            <div className="px-5 py-11 sm:px-10 sm:py-16 lg:py-24">
              <p className="eyebrow break-words">UK company formation from India</p>
              <div className="mt-3 h-px w-24 rule-gold" />
              <h1 className="mt-6 max-w-2xl font-display text-[2.15rem] font-bold tracking-tight leading-[1.1] sm:text-5xl lg:mt-8 lg:text-[3.45rem] text-foreground">
                UK Company Formation for Indian Residents
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                Register a UK limited company remotely from India with professional support for Companies House
                filing, UK Registered Office requirements, identity verification and post-incorporation setup.
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-4 sm:items-start">
                <a href="#packages" className="btn-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                  Start My UK Company
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="py-1 text-center text-sm text-foreground/80 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:text-left"
                >
                  Not sure which package fits? Speak to an adviser →
                </a>
              </div>
              <ul className="mt-7 grid gap-3 border-t border-border pt-6 text-sm text-foreground/85 sm:grid-cols-2">
                {[
                  "From £199 — Companies House filing fee included",
                  "Remote setup from India — no UK visit normally required",
                  "UK Registered Office options available",
                  "Human support throughout onboarding",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Banking assistance is available, subject to provider eligibility and your business profile.
              </p>
              <div className="mt-5 text-sm">
                <p className="flex items-center gap-3 text-foreground">
                  <span className="tracking-[0.15em] text-gold" aria-hidden="true">★★★★★</span>
                  <span className="font-semibold"><span className="sr-only">Rated </span>5.0/5 on Google</span>
                </p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-xs text-muted-foreground underline decoration-gold/50 underline-offset-4 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Read our Google reviews →
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-full">
              <img
                src="/assets/india-hero-1280.webp"
                srcSet="/assets/india-hero-640.webp 640w, /assets/india-hero-1280.webp 1280w"
                sizes="(max-width: 1023px) 100vw, 46vw"
                width={1280}
                height={725}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                alt="International founder progressing through a structured business environment representing UK company formation from India."
                className="absolute inset-0 h-full w-full object-cover object-[74%_center]"
              />
            </div>
          </div>
        </div>

        {/* Credentials Strip */}
        <div className="section-parchment border-b border-border px-6">
          <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["UK-registered company", "Seven Oak Prestige Ltd · No. 16903092"],
              ["London registered office", "124 City Road, London EC1V 2NX"],
              ["ICO registered", "Registration No. ZC181349"],
              ["Clear first-year pricing", "Package scope and renewals shown before payment"],
            ].map(([title, text]) => (
              <div key={title} className="border-border py-8 sm:px-7 lg:border-l lg:first:border-l-0">
                <dt className="text-sm font-bold text-foreground">{title}</dt>
                <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Professional Formation Service */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Eyebrow>A professional formation service</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                UK Company Registration Service for Indian Residents
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Seven Oak Prestige provides UK company formation support for founders based in India who want
                professional assistance rather than managing the Companies House process alone.
              </p>
              <p>
                Depending on the package selected, support can include incorporation, UK Registered Office and
                Director Service Address services, Companies House identity-verification assistance, banking
                readiness and post-incorporation support.
              </p>
              <p>
                Your UK company formation can generally be managed remotely from India. You do not normally need to
                travel to the United Kingdom simply to register the company.
              </p>
            </div>
          </div>
        </Section>

        {/* Reviews Section */}
        <Section>
          <Eyebrow>Trusted by international founders</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            What Our Clients Say
          </h2>
          <div className="mt-8">
            <ReviewsSlow />
          </div>
          <div className="mt-6 text-sm">
            <p className="flex items-center gap-3">
              <span className="tracking-[0.15em] text-gold" aria-hidden="true">★★★★★</span>
              <span className="font-semibold"><span className="sr-only">Rated </span>5.0/5 on Google</span>
            </p>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs text-muted-foreground underline decoration-gold/50 underline-offset-4 hover:text-gold">
              Read our Google reviews →
            </a>
          </div>
        </Section>

        {/* Formation Packages Section */}
        <Section id="packages" className="section-parchment border-y border-border scroll-mt-20">
          <Eyebrow>Formation packages</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Choose the Support Your UK Setup Requires
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Every first-year package price below includes the current £100 Companies House digital incorporation fee.
          </p>
          <div className="mt-12 grid gap-px bg-border lg:grid-cols-3">
            {PACKAGES.map((item) => (
              <article key={item.name} className={`flex min-w-0 flex-col p-7 sm:p-9 ${item.featured ? "section-dark" : item.name === "Prestige" ? "bg-background border-t-2 border-gold" : "bg-background"}`}>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold">{item.tag}</p>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{item.name}</h3>
                <p className="mt-5 font-display text-4xl font-bold text-foreground">{item.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">Approx. {item.inr}</p>
                <p className="mt-4 min-h-16 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-7 text-sm text-foreground/85">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {item.featured ? (
                  <div className="mt-7 border-t border-border pt-6">
                    <p className="eyebrow">Banking application support</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      We help prepare your business profile and identify suitable banking options based on your circumstances.
                    </p>
                    <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                      {PROVIDER_LOGOS.map((b) => (
                        <li key={b.name} className="flex items-center gap-2">
                          <img src={b.logo} alt={`${b.name} logo`} width={20} height={20} decoding="async" className="h-5 w-5 rounded-sm" />
                          <span className="text-sm font-medium text-foreground/75">{b.name}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                      Options depend on provider eligibility and your business profile.
                    </p>
                  </div>
                ) : null}
                <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
                <a href={item.checkout} className={`mt-7 ${item.featured ? "btn-gold" : "btn-ghost"}`}>
                  Choose {item.name}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Seven Oak Prestige, I live in India and have a question about the ${item.name} package.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-center text-xs text-muted-foreground underline-offset-4 hover:text-gold hover:underline"
                >
                  Ask about {item.name}
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            INR equivalents are indicative only and may vary with exchange rates. Seven Oak Prestige package prices are charged in GBP.
          </p>
          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Packages are subject to eligibility, onboarding and compliance review. Companies House and financial
            providers make their own decisions. See the <Link href="/terms" className="text-gold-soft underline-offset-4 hover:underline">Terms</Link> and <Link href="/refund" className="text-gold-soft underline-offset-4 hover:underline">Refund Policy</Link> before proceeding.
          </p>
        </Section>

        {/* Decision Guide */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Eyebrow>Decision guide</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Which Package Is Right for You?
              </h2>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {[
                ["Starter", "Designed for you when suitable UK address arrangements are already in place and you mainly need professional incorporation support."],
                ["Prestige", "Designed for most India-based founders who need a Registered Office and Director Service Address as part of the setup."],
                ["Elite", "Designed for founders who also need a Virtual Business Address, high priority support, direct banking and EMI assistance where applicable, and compliance assistance."],
              ].map(([name, text]) => (
                <div key={name} className="grid gap-3 py-6 sm:grid-cols-[0.3fr_0.7fr]">
                  <dt className="font-display text-xl font-bold text-gold">{name}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Renewal Transparency */}
        <Section className="section-dark border-y border-border">
          <Eyebrow>Renewal transparency</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            First-Year Package. Clear Year-Two Address Costs.
          </h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
            {[
              ["Registered Office", "£59/year"],
              ["Director Service Address", "£35/year"],
              ["Virtual Business Address", "£150/year"],
            ].map(([name, price]) => (
              <div key={name} className="bg-ink-deep p-7">
                <p className="text-sm font-bold text-foreground">{name}</p>
                <p className="mt-4 font-display text-2xl font-bold text-gold">{price}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Prestige address renewal is £94/year. Elite address renewal is £244/year. Read the detailed <Link href={GUIDES.cost} className="text-gold-soft underline-offset-4 hover:underline">UK company formation cost guide for Indian founders</Link> for the complete cost picture.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-7 text-sm text-muted-foreground">
            <span>VAT registration support: £144</span>
            <span>EORI registration support: £60</span>
            <span>Identity-verification assistance: £74 for one director</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">VAT and EORI are not automatically required; the position depends on the business.</p>
        </Section>

        {/* Process Steps */}
        <Section>
          <Eyebrow>After payment</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            A Clear Route From Onboarding to Incorporation
          </h2>
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-5">
            {PROCESS.map(([number, title, text]) => (
              <li key={number} className="bg-background p-6">
                <span className="font-display text-xl font-bold text-gold">{number}</span>
                <h3 className="mt-5 font-sans text-base font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-7 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            A typical overall working timeframe is approximately 3–5 working days after the required information and
            KYC requirements are complete. Companies House processing and approval cannot be guaranteed within a fixed timeframe.
          </p>
        </Section>

        {/* Requirements & ID Verification */}
        <Section className="section-parchment border-y border-border">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>What you may need</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Documents and Company Information
              </h2>
              <dl className="mt-9 divide-y divide-border border-y border-border">
                {REQUIREMENTS.map(([title, text]) => (
                  <div key={title} className="py-5">
                    <dt className="text-sm font-bold text-foreground">{title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Additional KYC or AML evidence may be requested depending on residence, activity, ownership, structure,
                source of funds and risk profile.
              </p>
            </div>
            <div>
              <Eyebrow>Identity verification</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Companies House Requirements for Relevant Individuals
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Identity-verification requirements began applying to relevant individuals from 18 November 2025. The
                timing and required action depend on whether a person is forming a company, being appointed, or meeting
                an applicable filing or transition requirement.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Seven Oak onboarding KYC and statutory Companies House identity verification are separate processes. We
                assist you through the identity-verification process so you can obtain your Companies House personal code where required.
              </p>
              <Link href="/services/companies-house-identity-verification" className="btn-ghost mt-8">
                View Identity-Verification Assistance
              </Link>
            </div>
          </div>
        </Section>

        {/* Banking Readiness & India Responsibilities */}
        <Section>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>Banking readiness</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Formation and Account Approval Are Separate
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Seven Oak can review your business profile, help prepare an application, provide direct assistance where
                applicable and discuss alternative provider routes. Approval remains entirely with the bank, EMI or payment provider.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Eligibility may depend on residence, nationality where relevant, activity, ownership, target markets,
                expected transactions, KYC, source of funds and the provider's current risk appetite.
              </p>
              <Link href={GUIDES.banking} className="mt-7 inline-block text-sm font-semibold text-gold-soft underline-offset-4 hover:underline">
                Read the banking guide for Indian residents
              </Link>
            </div>
            <div>
              <Eyebrow>India-side responsibilities</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                UK Formation Does Not Replace Indian Advice
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Indian residents owning, funding or investing in an overseas company may need to consider FEMA, ODI,
                LRS, Indian tax, foreign-asset reporting and bank-reporting requirements, depending on the circumstances.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Seven Oak supports the UK company side. India-specific legal, tax or FEMA advice should be obtained from
                an appropriately qualified Indian professional where required.
              </p>
              <Link href={GUIDES.fema} className="mt-7 inline-block text-sm font-semibold text-gold-soft underline-offset-4 hover:underline">
                Read the FEMA and RBI guide
              </Link>
            </div>
          </div>
        </Section>

        {/* Founder Pathways */}
        <Section className="section-dark border-y border-border">
          <Eyebrow>Founder pathways</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Explore the Detail That Applies to Your Setup
          </h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Complete formation guide", GUIDES.complete, "Eligibility, structure and the wider formation journey."],
              ["Costs and renewals", GUIDES.cost, "A detailed view of first-year and ongoing costs."],
              ["UK and India tax", GUIDES.tax, "POEM, double taxation and reporting considerations."],
              ["SaaS and technology", GUIDES.saas, "Practical considerations for Indian technology founders."],
              ["E-commerce and export", GUIDES.ecommerce, "UK setup considerations for sellers and exporters."],
              ["UK subsidiary", GUIDES.subsidiary, "For an established Indian company entering the UK."],
            ].map(([title, href, text]) => (
              <Link key={title} href={href} className="group bg-ink-deep p-7 transition-colors hover:bg-ink">
                <h3 className="font-sans text-base font-bold text-foreground group-hover:text-gold-soft">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-gold" aria-hidden="true">Read guide →</span>
              </Link>
            ))}
          </div>
        </Section>

        {/* FAQs */}
        <Section id="faq">
          <Eyebrow>Questions from Indian founders</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Practical Answers Before You Proceed
          </h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {FAQS.map(([question, answer]) => (
              <details key={question} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-bold text-foreground marker:content-none">
                  <span>{question}</span>
                  <span className="shrink-0 text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <Section id="final-cta" className="section-dark border-y border-border text-center">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              Start Your UK Company From India With a Clear Plan
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Choose a package if your requirements are clear, or speak with an adviser about your activity, address needs and banking-readiness support.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#packages" className="btn-gold">Start My UK Company from India</a>
              <a href={WHATSAPP} className="btn-ghost" target="_blank" rel="noreferrer">Speak to an India Specialist</a>
            </div>
            <div className="mt-10 border-t border-border pt-7 text-xs leading-relaxed text-muted-foreground">
              <p>
                Seven Oak Prestige Ltd · Company No. <a href={COMPANIES_HOUSE} target="_blank" rel="noreferrer" className="text-gold-soft hover:underline">16903092</a> · ICO Registration ZC181349
              </p>
              <p className="mt-2">124 City Road, London EC1V 2NX · +44 20 4578 0726 · contact@sevenoakprestige.com</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCta primaryLabel="View India packages" secondaryLabel="WhatsApp" primaryHref="#packages" />
    </div>
  );
}
