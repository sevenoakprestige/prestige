"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.sevenoakprestige.com/services/companies-house-identity-verification";
export const PRICE = "£74";
export const CHECKOUT = "https://buy.stripe.com/bJe8wHbwY5nv8gde3Ofw40h";
const WHATSAPP =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20ask%20about%20Companies%20House%20identity%20verification%20and%20my%20personal%20code.";
const GOV_VERIFY = "https://www.gov.uk/guidance/verify-your-identity-for-companies-house";
const GOV_AUTH_CODE = "https://www.gov.uk/guidance/company-authentication-codes-for-online-filing";

export const H1 = "Companies House Identity Verification & Personal Code Assistance";
export const DESCRIPTION =
  "Need a Companies House personal code? Identity verification assistance for UK directors, PSCs and non-residents. Guided support for £74.";
export const TIMING =
  "In straightforward cases, the personal code is typically available within one working day after all required checks have been completed and approved, subject to Companies House or authorised-provider processing and no additional checks being needed.";

export const STEPS = [
  [
    "01",
    `Pay ${PRICE}`,
    "Order through our secure checkout. We then carry out a short eligibility and compliance review.",
  ],
  [
    "02",
    "Provide your documents",
    "A valid passport and a recent proof of residential address in your own name, issued within the last three months.",
  ],
  [
    "03",
    "Complete secure app verification",
    "Once your documents are accepted, we send you a secure link to complete remote verification in the identity-verification application.",
  ],
  [
    "04",
    "Review and receive your code",
    "We review the result and help resolve any issues. After approval, your personal code is made available through the authorised verification route.",
  ],
] as const;

const WHO_MUST = [
  [
    "Directors",
    "New directors verify when a company is incorporated or when they are appointed. Existing directors verify in line with the Companies House transition timetable, normally linked to the company’s confirmation statement.",
  ],
  [
    "People with Significant Control",
    "Individual PSCs verify their identity and provide their personal code within the period set by Companies House for their role.",
  ],
  [
    "Others filing with Companies House",
    "Some people who file on behalf of companies have their own verification requirements. Check the official guidance for your role.",
  ],
] as const;

const AUDIENCES = [
  "Directors and PSCs who prefer guided support over completing the process alone",
  "Non-UK residents and overseas directors of UK companies",
  "Founders forming a new UK company who need a personal code",
  "Applicants who are unsure which verification route applies to them",
] as const;

const INCLUDES = [
  "Eligibility and compliance review",
  "Review of your passport and proof of address",
  "Secure link to the identity-verification application",
  "Help resolving issues raised during verification",
  "Guidance on how to use your personal code for each role",
  "Adviser support by email and WhatsApp (no documents over WhatsApp)",
] as const;

const EXCLUDES = [
  "Government or Companies House fees (direct GOV.UK verification is free)",
  "Verification for additional people — each person is a separate service",
  "Company formation, filings or confirmation statements",
  "Any guarantee that verification will succeed",
] as const;

export const FAQS = [
  [
    "How do I get my Companies House personal code?",
    "You get a personal code after your identity has been verified, either directly through GOV.UK One Login, free of charge, or through an authorised route. With our assisted service, we review your documents, send you a secure verification link and help you through to approval.",
  ],
  [
    "What documents do I need for Seven Oak’s assisted service?",
    "For this service you need a valid passport and a proof of residential address in your own name, issued within the last three months. Other verification routes may accept different documents; these requirements apply to our assisted service.",
  ],
  [
    "Can I verify my identity from outside the UK?",
    "Yes. Verification is completed remotely, so overseas directors and PSCs can usually take part from abroad, subject to document acceptance and the checks applied.",
  ],
  ["How long does it take after approved verification?", TIMING],
  [
    "How much does the service cost?",
    `Our assisted service costs ${PRICE} per person. This is Seven Oak’s service fee, not a government fee.`,
  ],
  [
    "Is direct GOV.UK verification free?",
    "Yes. You can verify your identity directly with Companies House through GOV.UK One Login at no cost. Our paid assistance is optional, for people who want guided support.",
  ],
  [
    "Do directors and PSCs need separate personal codes?",
    "Each individual has their own unique personal code. If one person is both a director and a PSC, they use the same personal code for both roles; they do not need a second code.",
  ],
  [
    "Can one personal code be used for multiple companies?",
    "Yes. The code belongs to the person, not the company, so it is reused across all of that person’s relevant roles and companies. It is different from a company authentication code.",
  ],
  [
    "What happens if app verification fails?",
    "We explain what went wrong and what is needed, such as a clearer document or a retry. Verification cannot be completed until the required checks are satisfied, and success cannot be guaranteed.",
  ],
  [
    "What is the difference between identity verification and KYC?",
    "Our KYC and anti-money-laundering checks are our own onboarding checks as a service provider. Companies House identity verification is a separate legal requirement for directors and PSCs, resulting in a personal code.",
  ],
  [
    "What if I already have a personal code?",
    "You do not need to verify again. Keep your code private and use it whenever Companies House asks you to confirm your verified identity.",
  ],
  [
    "When must I provide my personal code?",
    "New directors provide it when the company is incorporated or they are appointed. Existing directors and PSCs provide it within the period set by Companies House, which for many directors is linked to the next confirmation statement. Never share your code publicly.",
  ],
] as const;

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
    <section id={id} className={`px-6 py-16 sm:py-24 ${className}`}>
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

function StepIcon({ index }: { index: number }) {
  const paths = [
    <path key="0" d="M4 8h16v10H4zM4 11h16M7 15h4" />,
    <path key="1" d="M7 4h7l4 4v12H7zM14 4v4h4M10 12h5M10 15h5" />,
    <path
      key="2"
      d="M8 3h8v18H8zM11 18h2M10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9.5 13c.6-1.3 4.4-1.3 5 0"
    />,
    <path key="3" d="M5 12l4 4 10-10" />,
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

function Timeline() {
  return (
    <ol
      className="relative mt-12 grid gap-0 md:grid-cols-4"
      aria-label="How the assisted service works"
    >
      <div
        className="absolute left-[1.45rem] top-6 bottom-6 w-px bg-border md:left-6 md:right-6 md:top-[1.45rem] md:bottom-auto md:h-px md:w-auto"
        aria-hidden="true"
      />
      {STEPS.map(([number, title, body], i) => (
        <li key={number} className="relative flex gap-5 pb-10 md:block md:pb-0 md:pr-6">
          <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-gold bg-background text-gold">
            <StepIcon index={i} />
          </span>
          <div className="md:mt-6">
            <p className="font-display text-sm text-gold">Step {number}</p>
            <h3 className="mt-1 font-sans text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

const linkCls = "text-gold-soft underline underline-offset-4 hover:no-underline hover:text-gold transition-colors";

export default function CompaniesHouseVerificationPageEn() {
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
            name: "Companies House identity verification",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Companies House identity verification assistance",
        serviceType: "Identity verification assistance",
        description: DESCRIPTION,
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
          identifier: "16903092",
        },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          price: "74",
          priceCurrency: "GBP",
          url: CHECKOUT,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(([q, a]) => ({
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
        <section className="section-dark border-b border-border px-6 pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">For directors, PSCs and non-UK residents</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-7 max-w-3xl font-display text-[2.1rem] font-bold leading-[1.1] text-foreground sm:text-5xl">
                {H1}
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
                Guided help to verify your identity for Companies House and obtain your personal
                code — with a document review, a secure verification link and adviser support until
                your verification is approved.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center"
                >
                  Get Identity Verification Assistance — {PRICE}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center justify-center"
                >
                  Ask a question
                </a>
              </div>
              <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Seven Oak Prestige is an independent private company, not Companies House or a
                government body. {PRICE} is our service fee, not a government fee. You can also{" "}
                <a href={GOV_VERIFY} target="_blank" rel="noreferrer" className={linkCls}>
                  verify directly on GOV.UK for free
                </a>
                .
              </p>
            </div>

            <aside
              className="border border-border bg-ink p-7 sm:p-9"
              aria-label="Service fee and timing"
            >
              <p className="eyebrow">Assisted service</p>
              <p className="mt-5 font-display text-5xl font-bold text-gold-soft">{PRICE}</p>
              <p className="mt-2 text-sm text-muted-foreground">Service fee per person</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-foreground/90">
                <li>Remote — no UK visit needed</li>
                <li>Secure verification link, not open forms</li>
                <li>Adviser support through to approval</li>
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                {TIMING}
              </p>
            </aside>
          </div>
        </section>

        {/* ── WHO MUST VERIFY THEIR IDENTITY? ── */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Statutory requirement</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Who Must Verify Their Identity?
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {WHO_MUST.map(([t, b]) => (
                <div key={t} className="py-6">
                  <h3 className="font-sans text-base font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              ))}
              <p className="py-5 text-xs text-muted-foreground">
                Exact deadlines depend on your role. See the{" "}
                <a href={GOV_VERIFY} target="_blank" rel="noreferrer" className={linkCls}>
                  official GOV.UK guidance
                </a>
                .
              </p>
            </div>
          </div>
        </Section>

        {/* ── WHAT IS A COMPANIES HOUSE PERSONAL CODE? ── */}
        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Key terms</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                What Is a Companies House Personal Code?
              </h2>
            </div>
            <div>
              <p className="font-display text-2xl leading-snug text-foreground">
                A unique code issued by Companies House to a person after their identity has been
                verified.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                You use it to confirm your verified identity when incorporating a company, being
                appointed as a director, or confirming your status as a director or PSC. One person
                has one code, reused across all their roles and companies.
              </p>
              <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">
                Not the same as the{" "}
                <a href={GOV_AUTH_CODE} target="_blank" rel="noreferrer" className={linkCls}>
                  company authentication code
                </a>
                , which belongs to a company and is used for online filings. Keep your personal code
                private and never publish it.
              </p>
            </div>
          </div>
        </Section>

        {/* ── WHO THIS SERVICE IS FOR ── */}
        <Section className="border-t border-border">
          <Eyebrow>Suitable applicants</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Who This Service Is For
          </h2>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {AUDIENCES.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 bg-background p-6 text-sm leading-relaxed text-foreground/90"
              >
                <span className="font-display text-xl font-bold text-gold">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Forming a new company from abroad? See{" "}
            <Link href="/services/uk-company-formation-for-non-residents" className={linkCls}>
              UK company formation for non-residents
            </Link>{" "}
            or our{" "}
            <Link href="/#pricing" className={linkCls}>
              formation packages
            </Link>{" "}
            — Elite includes this assistance for one director.
          </p>
        </Section>

        {/* ── WHAT THE £74 SERVICE COVERS ── */}
        <Section className="section-parchment border-t border-border">
          <Eyebrow>Clear service scope</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            What the {PRICE} Service Covers
          </h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">Included</h3>
              <ul className="mt-5 space-y-3">
                {INCLUDES.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">Not included</h3>
              <ul className="mt-5 space-y-3">
                {EXCLUDES.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span
                      className="mt-2 h-px w-2 shrink-0 bg-muted-foreground"
                      aria-hidden="true"
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── FOUR STEPS TO YOUR PERSONAL CODE ── */}
        <Section className="border-t border-border" id="how-it-works">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Four Steps to Your Personal Code
          </h2>
          <Timeline />
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Companies House issues the personal code. Verification is completed through an
            appropriately authorised route; Seven Oak assists you through it.
          </p>
        </Section>

        {/* ── DOCUMENTS & TIMING ── */}
        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Before you start</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Documents for the Assisted Service
              </h2>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                <li className="py-5">
                  <h3 className="font-sans text-base font-semibold text-foreground">
                    Valid passport
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Required for this assisted service.
                  </p>
                </li>
                <li className="py-5">
                  <h3 className="font-sans text-base font-semibold text-foreground">
                    Proof of residential address
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    In your own name, issued within the last three months, such as a bank statement
                    or utility bill. Subject to acceptance.
                  </p>
                </li>
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                These requirements apply to our service; other verification routes may accept other
                documents. Please send documents only through the secure channel we provide — never
                over WhatsApp.
              </p>
            </div>
            <div>
              <Eyebrow>Processing</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                What to Expect on Timing
              </h2>
              <p className="mt-8 border-l-2 border-gold pl-5 leading-relaxed text-foreground/90">
                {TIMING}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Timing starts once checks are approved, not at payment. Document issues, retries or
                extra checks can add time, and successful verification cannot be guaranteed.
              </p>
            </div>
          </div>
        </Section>

        {/* ── YOUR OPTIONS (FREE GOV.UK VS PAID ASSISTANCE) ── */}
        <Section className="border-t border-border">
          <Eyebrow>Your options</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Free GOV.UK Verification or Paid Assistance
          </h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Direct with GOV.UK One Login — free
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Verify yourself online through the official service. Suits people with the accepted
                documents who are comfortable completing it alone.
              </p>
              <a
                href={GOV_VERIFY}
                target="_blank"
                rel="noreferrer"
                className={`mt-4 inline-block text-sm font-semibold ${linkCls}`}
              >
                Official guidance on GOV.UK
              </a>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Seven Oak assisted service — {PRICE}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Optional. A document review, a secure verification link and an adviser to help with
                any issues, useful for overseas applicants or anyone unsure of the route.
              </p>
            </div>
          </div>
          <h3 className="mt-12 font-sans text-lg font-semibold text-foreground">
            Identity verification is not the same as KYC
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            KYC and anti-money-laundering checks are carried out by service providers like us when
            onboarding a client. Companies House identity verification is a separate legal
            requirement for directors and PSCs, and leads to your personal code. See our{" "}
            <Link href="/security" className={linkCls}>
              Data Protection &amp; AML
            </Link>{" "}
            page.
          </p>
        </Section>

        {/* ── DATA PROTECTION ── */}
        <Section className="section-dark border-t border-border">
          <Eyebrow>Data protection</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Your Information Is Handled Securely
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Identity documents are requested through a secure channel and used only for onboarding
            and verification. We never ask you to upload a passport through a public website form.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <span>ICO Registration No. ZC181349</span>
            <Link href="/privacy" className="text-gold-soft hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/security" className="text-gold-soft hover:text-foreground transition-colors">
              Security
            </Link>
            <Link
              href="/resources/guides"
              className="text-gold-soft hover:text-foreground transition-colors"
            >
              Director &amp; PSC guides
            </Link>
          </div>
        </Section>

        {/* ── FAQs ── */}
        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <Eyebrow>Frequently asked questions</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Personal Code Questions, Answered
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {FAQS.map(([q, a], index) => (
                <details key={q} open={index === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-sans text-base font-semibold text-foreground transition-colors hover:text-gold">
                    <span>{q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-2xl pb-5 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FINAL CTA ── */}
        <section className="section-dark border-t border-border px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Identity verification assistance — {PRICE}</p>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Get Guided Help With Your Personal Code
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Pay securely, send your documents through our secure channel and complete
                verification with an adviser on hand.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center"
                >
                  Get Identity Verification Assistance — {PRICE}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center justify-center"
                >
                  Ask a question
                </a>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                See our{" "}
                <Link href="/terms" className={linkCls}>
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/refund" className={linkCls}>
                  Refund Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

