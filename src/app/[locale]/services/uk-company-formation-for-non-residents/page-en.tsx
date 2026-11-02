"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  Cpu,
  FileCheck2,
  Globe2,
  Plus,
  ShoppingBag,
  Star,
  Users,
} from "lucide-react";
import Footer from "@/components/Footer";

const PAGE_URL =
  "https://www.sevenoakprestige.com/services/uk-company-formation-for-non-residents";
const WHATSAPP =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20speak%20with%20an%20adviser%20about%20UK%20company%20formation%20from%20abroad.";
const WHATSAPP_BANKING =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20ask%20about%20UK%20banking%20readiness%20for%20my%20company.";
const WHATSAPP_CONTACT =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20discuss%20forming%20a%20UK%20company%20from%20abroad.";
const GOVUK_VERIFY = "https://www.gov.uk/guidance/verifying-your-identity-for-companies-house";
const GOOGLE_REVIEWS_URL = "https://share.google/owyOtNunkhfg4c0dE";
const OVERALL_RATING = "5.0";

const REVIEWS = [
  {
    name: "Safaat Siddhi",
    rating: 5,
    text: "The service was efficient, transparent, and delivered as promised.",
    avatarUrl: "/assets/reviewers/safaat-siddhi.webp",
  },
  {
    name: "Veridian",
    rating: 5,
    text: "I highly recommend their services!",
    avatarUrl: "/assets/reviewers/veridian.webp",
  },
  {
    name: "Mirvac",
    rating: 5,
    text: "Great service, super professional and easy to work with.",
  },
  {
    name: "Vbvvb Bbjbb",
    rating: 5,
    text: "I had a great experience working with this company for my UK company registration. The entire process was smooth, professional, and well-organized. Their team was always responsive, answered my questions clearly, and kept me updated throughout every step. Everything was completed on time, exactly as promised.",
    avatarUrl: "/assets/reviewers/vbvvb-bbjbb.webp",
  },
  {
    name: "albalushi Mazan",
    rating: 5,
    text: "I am pleased to share my excellent experience with this company, where I witnessed a high level of professionalism and dedication. From what I observed, the team consists of hardworking employees with a strong sense of responsibility and commitment. I extend my sincere thanks and appreciation to them for their efforts and continued dedication.",
    avatarUrl: "/assets/reviewers/albalushi-mazan.webp",
  },
  {
    name: "Aleksandr Almataev",
    rating: 5,
    text: "Team made everything as it should be, eben in my hard case. Thanks a lot! Company Ltd incorporated just on time!",
    avatarUrl: "/assets/reviewers/aleksandr-almataev.webp",
  },
] as const;

const NONRESIDENT_PACKAGES = [
  {
    name: "Starter Formation",
    price: 199,
    tag: "Formation essentials",
    intro: "For founders with suitable UK address arrangements already in place.",
    features: [
      "UK limited company incorporation",
      "Companies House filing",
      "Digital incorporation documents",
      "Key compliance reminders",
    ],
    cta: "Choose Starter",
    href: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i",
    featured: false,
  },
  {
    name: "Prestige Formation",
    price: 299,
    tag: "Recommended for non-residents",
    intro: "Formation with the UK address infrastructure many overseas founders need.",
    features: [
      "Everything in Starter",
      "Registered office — 12 months",
      "Director service address — 12 months",
      "Eligible mail handling and scanning",
      "Annual compliance support within package scope",
    ],
    cta: "Choose Prestige",
    href: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a",
    featured: false,
  },
  {
    name: "Elite Formation",
    price: 399,
    tag: "Most comprehensive",
    intro: "Broader UK address, identity-verification and banking-readiness support.",
    features: [
      "Everything in Prestige",
      "Virtual business address for 12 months",
      "High priority support",
      "Direct banking & EMI assistance where applicable",
      "Compliance assistance",
    ],
    identityDirectorsIncluded: 1,
    cta: "Choose Elite",
    href: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402",
    featured: true,
  },
] as const;

const REQUIREMENTS = [
  [
    "Name & business activity",
    "Your proposed name, business description and relevant SIC codes.",
  ],
  [
    "People & ownership",
    "Director, shareholder and PSC details, including share allocations.",
  ],
  [
    "Identity & home address",
    "Valid passport or eligible ID; residential address evidence from the last three months.",
  ],
  [
    "UK registered office",
    "An appropriate address in the jurisdiction of incorporation; options are included in Prestige and Elite.",
  ],
] as const;

const SECTORS = [
  [Code2, "SaaS & software"],
  [Cpu, "Technology & AI"],
  [ShoppingBag, "E-commerce & online sellers"],
  [BriefcaseBusiness, "Consultants & agencies"],
  [Globe2, "International trading"],
  [Users, "Overseas founders"],
] as const;

const STEPS = [
  [
    "Choose & pay securely",
    "Select your package and complete payment. Receive your confirmation, portal access and welcome email.",
  ],
  [
    "Complete secure onboarding",
    "Provide company details, identity and address evidence. Complete KYC and the separate statutory verification requirements.",
  ],
  [
    "We submit to Companies House",
    "Once the required checks and information are complete, we submit your registration for review.",
  ],
  [
    "Receive your documents",
    "After approval, receive digital incorporation documents and guidance on your next obligations.",
  ],
] as const;

const ADDRESSES = [
  {
    title: "UK Registered Office",
    href: "/services/registered-office-service",
    body: "The company’s official correspondence address, shown on the public Companies House register.",
  },
  {
    title: "Director Service Address",
    href: "/services/director-service-address",
    body: "A public correspondence address for directors, separate from their residential address.",
  },
  {
    title: "Virtual Business Address",
    href: "/services/virtual-business-address",
    body: "An address for eligible commercial mail and business correspondence within the service terms.",
  },
] as const;

const BANKING = [
  [
    "Business Profile Assessment",
    "We review your business activities, ownership structure, countries of operation and expected transactions to help identify the information that prospective providers may require.",
  ],
  [
    "KYC and Supporting Documents",
    "We assist with organising company records, director and beneficial-owner information, address evidence, source-of-funds details and relevant commercial documents, according to the provider’s requirements.",
  ],
  [
    "Application Preparation and Guidance",
    "We provide guidance on suitable application routes, help organise supporting information and assist with reasonable documentation requests within the agreed service scope.",
  ],
] as const;

const ONGOING = [
  [
    "Accounts & tax",
    "Annual accounts, Corporation Tax, VAT and EORI support where needed.",
  ],
  [
    "Records & filings",
    "Bookkeeping, confirmation statements and company administration.",
  ],
  [
    "Address renewals",
    "Keep the address services your company needs active beyond year one.",
  ],
] as const;

const FAQS = [
  {
    q: "Can I own and direct a UK company from abroad?",
    a: "Generally, yes, including as the sole shareholder and director. A UK-resident director or UK visit is not normally required. Eligibility and verification requirements still apply; incorporation does not grant a visa or UK residency.",
  },
  {
    q: "What documents will I need?",
    a: "A valid passport or eligible identity document, proof of your current residential address dated within the last three months, company name, business activities, and director, shareholder and ownership details. Further evidence may be requested during compliance review.",
  },
  {
    q: "How long does incorporation take?",
    a: "Once KYC is complete and all required company information has been received, standard incorporation typically takes 1–2 business days. Companies House review and approval determine completion; timing cannot be guaranteed.",
  },
  {
    q: "Will my residential address be public?",
    a: "A director’s residential address is generally kept private when a separate service address is used. Your company’s registered office and the director service address appear on the public register.",
  },
  {
    q: "How do the two identity checks differ?",
    a: "Seven Oak onboarding/KYC is our customer due-diligence process. Statutory Companies House identity verification is separate and must be completed through an authorised route. We offer administrative guidance, not regulated verification or ACSP services.",
  },
  {
    q: "Can I use my company for banking or online marketplaces?",
    a: "You can apply to suitable providers for eligible activities. Banking, payment and marketplace onboarding are independent of incorporation and subject to each provider’s assessment of your residence, business and ownership profile.",
  },
  {
    q: "What obligations remain if I live outside the UK?",
    a: "Your company must maintain an appropriate registered office, company records, annual accounts and confirmation statements, with tax returns and other filings where applicable. Dormant companies still have reporting duties. Consider tax obligations in your home country too.",
  },
];

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 0 1-2.39 3.62v3h3.86c2.26-2.08 3.58-5.15 3.58-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.93l-3.86-3c-1.07.72-2.45 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.97H1.26v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.25 14.25a7.2 7.2 0 0 1 0-4.5v-3.1H1.26a12 12 0 0 0 0 10.7l3.99-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.26 6.65l3.99 3.1C6.2 6.87 8.86 4.75 12 4.75z"
      />
    </svg>
  );
}

function CompactReviewsSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [totalSnaps, setTotalSnaps] = useState<number>(REVIEWS.length);

  const updateScrollState = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("li");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 16;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const snaps = Math.max(1, Math.round(maxScroll / cardWidth) + 1);
    const current = cardWidth > 0 ? Math.min(snaps - 1, Math.round(el.scrollLeft / cardWidth)) : 0;
    setTotalSnaps(snaps);
    setSelected(current);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDir = (dir: number) => {
    const el = listRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("li");
    const step = firstCard ? firstCard.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div aria-label="Client Google reviews" className="min-w-0">
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noreferrer"
        className="mb-4 inline-flex min-h-11 flex-wrap items-center gap-2 text-sm font-semibold text-foreground hover:text-gold transition-colors"
      >
        <GoogleMark />
        <span className="flex gap-0.5 text-gold" aria-label={`${OVERALL_RATING} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
          ))}
        </span>
        <span>{OVERALL_RATING}/5 on Google</span>
      </a>

      <ul
        ref={listRef}
        className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((review) => (
          <li
            key={review.name}
            className="flex min-h-48 min-w-0 flex-[0_0_90%] snap-start flex-col border border-border bg-background p-5 sm:flex-[0_0_calc((100%-16px)/2)] lg:flex-[0_0_calc((100%-32px)/3)]"
          >
            <div className="flex items-center gap-3">
              {"avatarUrl" in review ? (
                <img
                  src={review.avatarUrl}
                  alt={`${review.name}'s Google profile`}
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />
              ) : (
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-xs font-semibold text-gold border border-gold/40"
                  aria-hidden="true"
                >
                  {review.name.slice(0, 1)}
                </span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-muted-foreground underline underline-offset-2 hover:text-gold"
                >
                  Google review
                </a>
              </div>
            </div>
            <span className="mt-4 flex gap-0.5 text-gold" aria-label={`${review.rating} out of 5`}>
              {Array.from({ length: review.rating }, (_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" aria-hidden="true" />
              ))}
            </span>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
              “{review.text}”
            </blockquote>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:flex sm:justify-between">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-foreground underline decoration-gold/50 underline-offset-4 hover:text-gold"
        >
          View reviews on Google
        </a>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            title="Previous client reviews"
            aria-label="Previous client reviews"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="min-w-8 text-center text-xs text-muted-foreground" aria-live="polite">
            {selected + 1}/{totalSnaps}
          </span>
          <button
            type="button"
            title="Next client reviews"
            aria-label="Next client reviews"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold disabled:opacity-40"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function OfficialNameSearch() {
  const [name, setName] = useState("");
  const href = name.trim()
    ? `https://find-and-update.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(name.trim())}`
    : "https://find-and-update.company-information.service.gov.uk/company-name-availability";

  return (
    <div>
      <label
        htmlFor="official-company-name"
        className="mb-2 block text-xs font-semibold text-foreground"
      >
        Proposed company name
      </label>
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <input
          id="official-company-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={120}
          placeholder="Your proposed company name"
          autoComplete="organization"
          className="min-h-12 w-full border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-gold"
        />
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="btn-gold inline-flex items-center justify-center gap-2"
        >
          <span>Search Companies House</span>
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Opens the official register in a new tab. Search results do not reserve a name or confirm
        approval; the Registrar makes the final decision.
      </p>
    </div>
  );
}

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
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border px-5 py-12 sm:px-6 sm:py-14 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({
  label,
  children,
  intro,
}: {
  label: string;
  children: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {children}
      </h2>
      {intro && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}

export default function NonResidentsFormationPageEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sevenoakprestige.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "UK company formation for non-residents",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* ── HERO SECTION ── */}
        <section className="section-dark relative isolate overflow-hidden border-b border-border px-5 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:pt-40">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
            <div className="min-w-0 max-w-[42rem]">
              <p className="eyebrow">For international founders</p>
              <h1 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] text-foreground sm:text-5xl lg:text-[3.25rem]">
                UK Company Formation for Non-Residents
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/90">
                Form your UK limited company from abroad, with UK address options and human support
                throughout onboarding.
              </p>
              <p className="mt-6 text-sm font-semibold text-foreground">
                UK Company Formation{" "}
                <span className="font-display text-2xl text-gold">from £199</span>
                <span className="mt-1 block text-xs font-normal text-muted-foreground">
                  Companies House Incorporation Fee Included
                </span>
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  <span>Compare Packages</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center justify-center gap-2"
                >
                  <span>Ask an Adviser</span>
                </a>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                Address services vary by package. All formations are subject to identity and KYC
                checks, complete documentation and Companies House approval.
              </p>
            </div>

            <picture className="block min-w-0">
              <source
                type="image/avif"
                srcSet="/assets/nr-hero-skyline-640.avif 640w, /assets/nr-hero-skyline-1280.avif 1280w, /assets/nr-hero-skyline-1920.avif 1920w"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <img
                src="/assets/nr-hero-skyline-1280.webp"
                srcSet="/assets/nr-hero-skyline-640.webp 640w, /assets/nr-hero-skyline-1280.webp 1280w, /assets/nr-hero-skyline-1920.webp 1920w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                width={1280}
                height={960}
                fetchPriority="high"
                decoding="async"
                alt="Tower Bridge over the River Thames with the City of London skyline and the Tower of London in late-afternoon light"
                className="aspect-[4/3] w-full border border-border object-cover object-[35%_50%]"
              />
            </picture>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="section-parchment border-b border-border px-5 py-4 sm:px-6">
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-foreground">
            <li className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gold" aria-hidden="true" />
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/16903092"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                UK Registered Company · 16903092
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold" aria-hidden="true" />
              <span>Support for International Founders</span>
            </li>
            <li className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-gold" aria-hidden="true" />
              <span>Transparent Formation Packages</span>
            </li>
          </ul>
        </div>

        {/* ── REVIEWS ── */}
        <Section id="reviews" className="!py-8 sm:!py-10">
          <Heading label="Client experience">What Our Clients Say</Heading>
          <CompactReviewsSection />
        </Section>

        {/* ── PRICING PACKAGES ── */}
        <Section id="pricing">
          <Heading
            label="Formation packages"
            intro="One-off formation prices. Choose only the address and support arrangements you need."
          >
            Choose Your Formation Package.
          </Heading>

          <div className="grid items-stretch gap-4 lg:grid-cols-3">
            {NONRESIDENT_PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex min-w-0 flex-col border border-border p-6 ${
                  pkg.featured ? "section-dark" : "section-parchment"
                }`}
              >
                <p className="min-h-5 text-xs font-semibold text-gold">{pkg.tag}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-3 font-display text-4xl font-bold text-foreground">£{pkg.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  One-off · Companies House fee included
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pkg.intro}</p>

                <ul className="mb-6 mt-5 flex-1 space-y-3 border-t border-border pt-5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pkg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    pkg.featured ? "btn-gold" : "btn-ghost"
                  } inline-flex w-full items-center justify-center gap-2`}
                >
                  <span>{pkg.cta}</span>
                  {pkg.featured && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </a>

                <a
                  href={`https://wa.me/447447488755?text=${encodeURIComponent(
                    `Hello Seven Oak Prestige, I have a question about ${pkg.name} (£${pkg.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center justify-center text-xs text-muted-foreground underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Ask about {pkg.name.split(" ")[0]}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 border-y border-border py-5 lg:grid-cols-2">
            <div>
              <h3 className="font-sans text-sm font-semibold text-foreground">Package scope</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Mail services follow the agreed service scope. Elite identity-verification
                administrative assistance includes one director; additional directors or relevant
                persons are handled separately. Elite banking-readiness support is included within
                the stated service scope; further banking support is separately scoped. Optional and
                ongoing services are separately scoped.
              </p>
              <p className="mt-3 text-xs">
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
                <span className="mx-3 text-muted-foreground">·</span>
                <Link
                  href="/refund"
                  className="underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Refund &amp; Cancellation Policy
                </Link>
              </p>
            </div>
            <div>
              <h3 className="font-sans text-sm font-semibold text-foreground">
                Address renewals from year two
              </h3>
              <dl className="mt-2 space-y-2 text-xs text-muted-foreground">
                {[
                  ["Registered Office", "£59 / year"],
                  ["Director Service Address", "£35 / year"],
                  ["Virtual Business Address", "£150 / year"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between gap-3">
                    <dt>{name}</dt>
                    <dd className="shrink-0 font-semibold text-foreground">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* ── COMPANY NAME CHECK ── */}
        <Section id="name-check" className="section-parchment">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Before you begin</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
                Search Your Company Name
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Check the official register before choosing your company name.
              </p>
            </div>
            <div className="min-w-0">
              <OfficialNameSearch />
            </div>
          </div>
        </Section>

        {/* ── ELIGIBILITY & REQUIREMENTS ── */}
        <Section id="eligibility" className="section-parchment">
          <Heading label="Eligibility & requirements">
            Set Up From Abroad. Know What You Need.
          </Heading>
          <p className="mb-6 max-w-3xl border-l-2 border-gold pl-4 text-base leading-relaxed text-foreground">
            Yes — eligible non-residents can generally own and direct a UK company without a
            UK-resident director or a UK visit.
          </p>
          <dl className="grid gap-x-8 sm:grid-cols-2">
            {REQUIREMENTS.map(([title, body]) => (
              <div key={title} className="border-t border-border py-4">
                <dt className="flex gap-2 text-sm font-semibold text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{title}</span>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 border-t border-border pt-4">
            <h3 className="font-sans text-xs font-semibold text-foreground">
              For international businesses
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SECTORS.map(([Icon, title]) => (
                <li
                  key={title}
                  className="flex min-w-0 items-start gap-2 text-xs text-muted-foreground"
                >
                  <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Additional evidence may be required for particular countries, activities or ownership
            structures. Incorporation does not grant a visa or UK residency. Based in the UK? See
            our{" "}
            <Link
              href="/"
              className="underline underline-offset-4 hover:text-gold transition-colors"
            >
              UK company formation and registration
            </Link>{" "}
            services.
          </p>
        </Section>

        {/* ── PROCESS ── */}
        <Section id="process" className="section-parchment">
          <Heading label="How it works">Four Steps to Incorporation</Heading>
          <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="relative flex gap-4 pb-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 bg-background font-display text-lg font-bold text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mb-5 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Company registration typically takes 1–2 business days after KYC completion, subject to
            complete information, Companies House review and processing. Timing is not guaranteed.
          </p>
          <a href="#pricing" className="btn-gold inline-flex items-center justify-center gap-2">
            <span>Start Your UK Company Registration</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </Section>

        {/* ── UK ADDRESS SERVICES ── */}
        <Section id="addresses">
          <Heading
            label="UK address services"
            intro="Three distinct address services, each with a different purpose."
          >
            Three Addresses. Three Purposes.
          </Heading>
          <div className="grid gap-4 md:grid-cols-3">
            {ADDRESSES.map((item, i) => (
              <article key={item.title} className="border border-border p-5">
                <p className="text-xs font-semibold text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            A virtual business address does not replace an appropriate registered office or meet
            every provider’s business-presence requirements. Address service periods and renewals
            are shown with the packages above.
          </p>
          <a
            href="#pricing"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            <span>Compare address options in our packages</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Section>

        {/* ── BANKING ASSISTANCE ── */}
        <Section id="banking" className="section-parchment">
          <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <Heading label="Banking assistance">
                UK Business Banking Assistance for Non-Residents
              </Heading>
              <p className="text-base font-medium leading-relaxed text-foreground">
                Company formation and business banking are separate processes — we help you prepare
                for both.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Registering a UK limited company does not automatically qualify it for a UK business
                bank account. Banks and payment providers assess factors such as company ownership,
                business activities, countries of operation and supporting documentation. At Seven
                Oak Prestige, we help international founders prepare a clear, consistent application
                before approaching suitable banking and payment providers.
              </p>
            </div>
            <img
              src="/assets/banking-readiness-1280.webp"
              srcSet="/assets/banking-readiness-640.webp 640w, /assets/banking-readiness-1280.webp 1280w"
              sizes="(max-width: 1023px) 100vw, 32vw"
              alt="Company information and financial documents arranged for banking-readiness preparation"
              width={1280}
              height={960}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] max-h-64 w-full border border-border object-cover"
            />
          </div>

          <dl className="mt-6 grid gap-4 md:grid-cols-3">
            {BANKING.map(([title, body], i) => (
              <div key={title} className="border border-border bg-background p-5">
                <p className="text-xs font-semibold text-gold">0{i + 1}</p>
                <dt className="mt-2 text-sm font-semibold text-foreground">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>

          <p className="my-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Important: Banking and payment-provider approval is not guaranteed. Each provider
            applies its own eligibility, compliance and risk assessments.
          </p>
          <a
            href={WHATSAPP_BANKING}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center justify-center gap-2"
          >
            <span>Ask About Banking Assistance</span>
          </a>
        </Section>

        {/* ── IDENTITY VERIFICATION ── */}
        <Section id="identity">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <Heading label="Administrative assistance">
                Companies House Identity Verification
              </Heading>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We help you prepare information and navigate the authorised process so you can
                obtain your Companies House personal code. This is separate from Seven Oak
                onboarding/KYC.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Verification is completed through an authorised route. Seven Oak provides
                administrative assistance, not ACSP verification.{" "}
                <a
                  href={GOVUK_VERIFY}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-gold transition-colors"
                >
                  Official GOV.UK guidance
                </a>
                .
              </p>
            </div>
            <div className="min-w-0 border-l-2 border-gold pl-5">
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                Elite includes administrative assistance for one director. Standalone assistance is
                £74; additional people are separately scoped.
              </p>
              <Link
                href="/services/companies-house-identity-verification"
                className="btn-ghost inline-flex w-full items-center justify-center gap-2"
              >
                <span>Personal Code Assistance — £74</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Section>

        {/* ── ONGOING SUPPORT ── */}
        <Section id="ongoing-support" className="section-parchment">
          <Heading
            label="After incorporation"
            intro="Accounting, tax and administration are separately scoped and priced — not automatically included in formation."
          >
            Keep Your Company in Good Standing.
          </Heading>
          <dl className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {ONGOING.map(([title, body]) => (
              <div key={title} className="border-t border-border py-4">
                <dt className="text-sm font-semibold text-foreground">{title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            UK companies have ongoing reporting and tax responsibilities, including when dormant.
            Overseas founders should also consider relevant tax obligations outside the UK.
          </p>
          <Link
            href="/services/uk-accounting-non-residents"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            <span>Explore Accounting &amp; Compliance</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Section>

        {/* ── FAQs ── */}
        <Section id="faq">
          <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
            <Heading label="Frequently asked questions">Your Questions, Answered</Heading>
            <div className="min-w-0 border-t border-border">
              {FAQS.map((faq, i) => (
                <details key={faq.q} open={i === 0} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-sm font-semibold leading-relaxed text-foreground hover:text-gold transition-colors">
                    <span>{faq.q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FINAL CTA ── */}
        <Section id="final-cta" className="section-dark">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Your next step</p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Ready to Establish Your UK Company?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Choose your package or speak with our team about the right arrangements for your
                company.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#pricing" className="btn-gold inline-flex items-center justify-center gap-2">
                <span>Compare Packages</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center justify-center gap-2"
              >
                <span>Ask an Adviser</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
