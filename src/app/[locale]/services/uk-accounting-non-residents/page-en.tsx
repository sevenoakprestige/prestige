"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

type PackageItem = {
  fit: string;
  name: string;
  amount: string;
  amountSuffix: string;
  mini: string;
  features: string[];
  cta: string;
  dataPackage: string;
  exclude: string;
  featured?: boolean;
};

const PACKAGES: PackageItem[] = [
  {
    fit: "For eligible micro-entities",
    name: "Essential Accounting",
    amount: "£699",
    amountSuffix: "/year",
    mini: "Annual compliance, without bookkeeping",
    features: [
      "Annual statutory accounts",
      "Corporation Tax Return (CT600)",
      "One confirmation statement, standard online filing fee included",
      "Compliance deadline coordination",
    ],
    cta: "Get Started — Essential →",
    dataPackage: "Essential Accounting",
    exclude: "Excludes bookkeeping, VAT Returns and software.",
  },
  {
    fit: "For active companies",
    name: "Managed Accounting",
    amount: "£1,699",
    amountSuffix: "/year",
    mini: "Monthly books + annual compliance",
    features: [
      "Everything in Essential",
      "Monthly bookkeeping, up to 25 transactions",
      "Monthly record updates",
      "Receipt and transaction query coordination",
    ],
    cta: "Get Started — Managed →",
    dataPackage: "Managed Accounting",
    exclude: "Excludes VAT Returns and Xero subscription.",
    featured: true,
  },
  {
    fit: "For growing businesses",
    name: "Managed Plus",
    amount: "£2,199",
    amountSuffix: "/year from",
    mini: "Higher transaction capacity + personal filing",
    features: [
      "Everything in Managed",
      "Monthly bookkeeping, up to 50 transactions total",
      "One director Self Assessment, where applicable",
      "Enhanced client-facing coordination",
    ],
    cta: "Get Started — Managed Plus →",
    dataPackage: "Managed Plus",
    exclude: "Excludes VAT Returns, Xero and complex cross-border tax work.",
  },
];

const COMPARISON_ROWS: [string, string, string, string][] = [
  ["Annual accounts + CT600", "✓", "✓", "✓"],
  ["Confirmation statement", "✓", "✓", "✓"],
  ["Monthly bookkeeping", "—", "25 transactions", "50 transactions"],
  ["Director Self Assessment", "—", "—", "1 where applicable"],
  ["VAT Returns", "Separate", "Separate", "Separate"],
  ["Xero subscription", "Separate", "Separate", "Separate"],
];

const STEPS: [string, string, string][] = [
  [
    "01 / CHOOSE",
    "Pick your package",
    "Choose the level of annual compliance and monthly bookkeeping you need.",
  ],
  [
    "02 / VERIFY",
    "Complete AML/KYC checks",
    "We confirm company suitability, ownership, identity and required anti-money-laundering information before work starts.",
  ],
  [
    "03 / AUTHORISE",
    "Share records securely",
    "Provide accounting records and the authorisations needed for the agreed work.",
  ],
  [
    "04 / PROCEED",
    "Know what happens next",
    "We coordinate the agreed service and communicate outstanding information and milestones.",
  ],
];

type FaqGroup = {
  id: string;
  navLabel: string;
  title: string;
  items: [string, string][];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "faq-foundation",
    navLabel: "Company obligations",
    title: "UK company obligations",
    items: [
      [
        "Can I hire a UK accountant if I live outside the UK?",
        "Yes. You can arrange accounting support remotely for a UK limited company while living abroad. Acceptance depends on your company’s activities, records, ownership and required identity checks.",
      ],
      [
        "Does my UK limited company need annual accounts if I am a non-resident director?",
        "Yes. A UK limited company generally must prepare and file annual accounts regardless of where its directors live. The director remains legally responsible even when an accountant handles the preparation.",
      ],
      [
        "What is the difference between annual accounts and a CT600?",
        "Annual accounts report the company’s financial position and performance. A CT600 is the Company Tax Return submitted to HMRC with the relevant tax computations. They have different purposes and filing deadlines.",
      ],
      [
        "Does a UK limited company need an accountant if it has no sales?",
        "It may still have filing obligations. A company that has never traded or is dormant can have different accounts and tax requirements. Tell us its actual activity so we can assess whether a dormant-company service is more appropriate.",
      ],
      [
        "What if my UK company is dormant?",
        "Dormant companies generally still have Companies House filing duties, including accounts and a confirmation statement. A dormant-specific quotation may be more suitable than an active-company accounting package.",
      ],
      [
        "Do I need to file UK company accounts if all my customers are outside the UK?",
        "Usually yes. UK incorporation normally brings UK statutory reporting obligations regardless of where customers are based. Your trading model may also create tax questions outside the UK.",
      ],
      [
        "Can Seven Oak help if my company has never traded since incorporation?",
        "Yes, subject to review. A company with no trading activity may qualify for dormant-company services, which are quoted separately. We first check its records and whether any transactions affect dormancy.",
      ],
      [
        "What happens if my Companies House accounts or CT600 are already overdue?",
        "Tell us your company number and the outstanding periods. We can review the position and quote separately for catch-up work. Existing late-filing penalties and interest are not included in standard packages.",
      ],
      [
        "Is a confirmation statement the same as annual accounts?",
        "No. A confirmation statement updates or confirms company information at Companies House. Annual accounts report financial information. Both may be required and they have different deadlines.",
      ],
    ],
  },
  {
    id: "faq-package",
    navLabel: "Packages and bookkeeping",
    title: "Packages, bookkeeping and VAT",
    items: [
      [
        "What is included in the Essential Accounting package?",
        "For an eligible micro-entity: annual statutory accounts, a Corporation Tax Return (CT600) and one annual confirmation statement. Bookkeeping, VAT Returns and accounting software are not included.",
      ],
      [
        "What is included in Managed Accounting?",
        "Managed includes Essential Accounting plus monthly bookkeeping for up to 25 transactions per month. We coordinate regular record updates and queries throughout the year.",
      ],
      [
        "What is included in Managed Plus?",
        "Managed Plus includes the Managed services, increases monthly bookkeeping to 50 transactions and includes one director Self Assessment return where applicable. Other personal or international tax work is not automatically included.",
      ],
      [
        "Are VAT returns included in any of your packages?",
        "No. VAT registration and VAT Returns are separately scoped and charged. We first check whether VAT registration or returns are relevant to your company.",
      ],
      [
        "Is Xero included in the annual package price?",
        "No. A suitable Xero subscription is an additional software cost. We explain the applicable plan and charge before you approve onboarding.",
      ],
      [
        "Can you work with my existing Xero account?",
        "Potentially. We first review access, the subscription plan, the quality of existing records and whether any catch-up bookkeeping is required.",
      ],
      [
        "What counts as one bookkeeping transaction?",
        "A transaction is generally an item that must be recorded or reconciled, such as a receipt, payment or bank movement. The precise counting rules and treatment of payment-platform settlements are confirmed before onboarding.",
      ],
      [
        "What if I exceed 25 or 50 bookkeeping transactions in a month?",
        "We review the additional volume and explain any upgrade or extra charge before applying it. Higher transaction volumes and catch-up work are not automatically covered by the stated package price.",
      ],
      [
        "Can I send receipts and documents from overseas?",
        "Yes. We coordinate secure remote document collection. Where appropriate, records may be supplied using agreed digital channels; we will confirm the required format and deadlines.",
      ],
      [
        "Do your annual package prices include the Companies House confirmation statement fee?",
        "Yes. The stated annual packages include one standard confirmation statement filing and its standard online statutory filing fee, within the agreed service scope.",
      ],
      [
        "Can I pay monthly instead of paying the annual accounting fee upfront?",
        "Monthly instalments may be offered under a fixed-term agreement after onboarding approval. They are a payment arrangement for an annual service, not a cancel-anytime monthly subscription. Terms are confirmed before you agree.",
      ],
      [
        "What counts as one bookkeeping transaction per month?",
        "Transaction counts are assessed from your actual business records, such as bank entries, sales and purchases. We confirm the counting method and the suitable tier during onboarding. Higher volumes or complex records may require a different quote.",
      ],
      [
        "Can I send invoices and receipts from overseas?",
        "Yes. Records can be supplied remotely through the agreed secure channels. We will confirm the preferred method and any accounting software access during onboarding.",
      ],
      [
        "Do I have to buy Xero to use Managed Accounting?",
        "Accounting software may be needed for monthly bookkeeping. Any Xero subscription is separate from the stated package price unless expressly included in your individual quotation. We explain the suitable plan and cost before you commit.",
      ],
    ],
  },
  {
    id: "faq-international",
    navLabel: "International founders and tax",
    title: "Non-resident directors and international tax",
    items: [
      [
        "When are UK company annual accounts due?",
        "For many private companies, annual accounts are normally due nine months after the accounting reference date; first accounts can have different deadlines. We confirm your actual dates using your company record.",
      ],
      [
        "When is the CT600 due, and when must Corporation Tax be paid?",
        "A Company Tax Return is generally due 12 months after the end of the relevant accounting period, while Corporation Tax is commonly payable nine months and one day after that period ends for companies outside the quarterly-instalment rules. Your specific position may differ.",
      ],
      [
        "What is a confirmation statement and is its filing fee included?",
        "It is an annual Companies House confirmation that key company information is up to date. For eligible packages, one standard online confirmation statement and its current statutory fee are included, subject to the agreed scope; changes to company records may cost extra.",
      ],
      [
        "Do non-resident directors need Companies House identity verification?",
        "Directors and people with significant control are subject to identity-verification requirements and applicable deadlines. We check the company’s position and explain any separate verification assistance needed.",
      ],
      [
        "Do I need to register my UK limited company for VAT?",
        "Not every company must register. Registration depends on factors including taxable turnover, the nature and place of supplies, and whether the business is established in the UK. Non-established taxable persons may face different rules; a case-specific review is essential.",
      ],
      [
        "Does my UK company pay Corporation Tax if all customers are abroad?",
        "A UK-incorporated company is generally within the UK Corporation Tax framework, subject to applicable residence rules and tax treaties. Overseas customers do not, by themselves, remove UK tax obligations.",
      ],
      [
        "Will I owe personal tax in the UK on dividends or director salary if I live abroad?",
        "It depends on your personal tax residence, where duties are performed, the type of income and any relevant tax treaty. UK company tax and your personal tax are separate questions. Cross-border personal tax advice is not automatically included.",
      ],
      [
        "Do I need a UK-resident director or to travel to the UK to use your service?",
        "Generally, neither a UK-resident director nor a UK visit is required solely to arrange accounting for an existing UK limited company. Additional checks may apply to particular company structures or activities.",
      ],
      [
        "Will a UK limited company make me personally tax resident in the UK?",
        "Not automatically. Your personal tax residence depends on the applicable rules and your circumstances. Company tax residence and personal tax residence are separate questions.",
      ],
      [
        "If I live in India, France or the UAE, will I owe tax in both countries?",
        "Possibly, depending on your residence, company management, income and relevant treaty rules. A UK company does not automatically remove tax obligations in your country of residence. Cross-border tax advice is separately scoped.",
      ],
      [
        "Can a non-resident director take dividends or salary from a UK limited company?",
        "Potentially, but the tax and reporting treatment differs for salary and dividends and can depend on your residence and circumstances. Payroll and personal or cross-border tax advice are not automatically included.",
      ],
      [
        "Does my UK limited company need VAT registration if I sell online or through Amazon?",
        "It depends on where supplies take place, the goods or services involved and applicable VAT rules. E-commerce and cross-border trading can require specialist VAT analysis. VAT registration and returns are quoted separately.",
      ],
    ],
  },
  {
    id: "faq-start",
    navLabel: "Starting and switching",
    title: "Getting started, switching and payments",
    items: [
      [
        "Can you take over from my current UK accountant?",
        "Usually, subject to acceptance. We may need prior-year accounts, tax filings, bookkeeping exports, authorisations and professional clearance or handover information where applicable.",
      ],
      [
        "Can you help if my accounts or confirmation statement are overdue?",
        "We can review the situation, identify missing records and propose a separate catch-up or remediation scope. Standard annual package prices do not automatically cover historical overdue work or penalties.",
      ],
      [
        "Can I pay monthly instead of annually?",
        "Monthly payment may be available under a fixed-term agreement after eligibility and payment arrangements are confirmed. Monthly instalments do not necessarily mean a month-to-month cancellable service.",
      ],
      [
        "Can I use these packages if I sell through Amazon, Shopify, Stripe or internationally?",
        "Possibly. Marketplace fees, multi-currency settlements, overseas VAT and transaction volumes can increase complexity. We assess the trading model and may quote additional work before acceptance.",
      ],
      [
        "Is the service suitable for a UK subsidiary owned by an overseas company?",
        "Potentially, but group structures, intercompany balances, related-party transactions and cross-border tax questions may require bespoke pricing rather than a standard micro-entity package.",
      ],
      [
        "Who actually prepares my accounts and files the returns?",
        "Seven Oak Prestige coordinates the relationship and remains your client-facing point of contact. The technical accounting and tax filing work is undertaken by an external professional accounting provider, subject to engagement, authorisation and compliance checks.",
      ],
      [
        "What documents do I need to get started?",
        "Typically the company number, director and ownership details, recent accounts or bank records, bookkeeping information and identity or source-of-funds documents as required. We send a tailored checklist after you choose a package.",
      ],
      [
        "Does hiring an accountant remove my legal responsibilities as director?",
        "No. Directors remain legally responsible for their company’s records and statutory obligations even when professionals assist with preparation and filing.",
      ],
      [
        "Are your accounting services delivered by accredited professionals?",
        "Yes. Technical accounting and tax filing services are delivered through our ACCA-accredited UK accounting partner. Seven Oak Prestige coordinates the client relationship, onboarding and service communication.",
      ],
      [
        "Why do you need AML and identity verification before accounting work begins?",
        "We carry out required identity and anti-money-laundering checks before work starts. Depending on the company, this may include director and beneficial-owner identification, business activity information and supporting records.",
      ],
      [
        "Can I start if I do not yet have a UK business bank account?",
        "Potentially. We will review your company status and the records available. Some bookkeeping workflows may need suitable bank and transaction data, and any banking assistance is a separate service.",
      ],
      [
        "How long does it take to onboard a non-resident UK company?",
        "Timing depends on the completeness of your company information, AML/KYC verification, records and authorisations. We confirm next steps after reviewing your case rather than promising a fixed approval time.",
      ],
    ],
  },
];

function Section({
  children,
  className = "",
  id,
  ariaLabelledBy,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`px-5 py-16 sm:px-6 sm:py-24 ${className}`}
    >
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

export default function AccountingPageEn() {
  const [selectedPackage, setSelectedPackage] = useState("Not sure yet");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [activity, setActivity] = useState("Trading / active business");
  const [note, setNote] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleStartCta = (pkgName: string) => {
    setSelectedPackage(pkgName || "Not sure yet");
  };

  const handleSendEmail = () => {
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }
    const message = [
      "Hello Seven Oak Prestige,",
      "I would like to enquire about your UK limited company accounting services.",
      "Reference: LANDING-ACCOUNTING-NONRESIDENT",
      "Package: " + selectedPackage,
      "Company: " + (companyName.trim() || "Not provided"),
      "Country of residence: " + country.trim(),
      "Company activity: " + activity,
      "Additional information: " + (note.trim() || "None"),
      "Please advise the next steps.",
    ].join("\n");

    window.location.href =
      "mailto:hello@sevenoakprestige.com?subject=" +
      encodeURIComponent("UK Accounting Enquiry | " + selectedPackage) +
      "&body=" +
      encodeURIComponent(message);
  };

  const allFaqs = FAQ_GROUPS.flatMap((group) => group.items);
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
            name: "UK Limited Company Accounting for Non-Residents",
            item: "https://www.sevenoakprestige.com/services/uk-accounting-non-residents",
          },
        ],
      },
      {
        "@type": "Service",
        name: "UK Limited Company Accounting for Non-Residents",
        description:
          "UK limited company accounting for non-resident directors. Annual accounts, CT600, confirmation statements and monthly bookkeeping. Compare fixed-price packages from £699/year.",
        url: "https://www.sevenoakprestige.com/services/uk-accounting-non-residents",
        provider: { "@type": "Organization", name: "Seven Oak Prestige Ltd" },
      },
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
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

      <main>
        {/* HERO SECTION */}
        <section className="section-dark relative isolate overflow-hidden border-b border-border">
          {/* Mobile hero office photograph clearly visible above copy */}
          <div className="block h-[245px] w-full sm:hidden">
            <img
              src="/assets/accounting-hero-640.webp"
              alt="London executive office"
              width={640}
              height={423}
              className="h-full w-full object-cover object-[55%_48%]"
            />
          </div>

          {/* Desktop/Tablet background office photograph */}
          <picture className="pointer-events-none hidden sm:block">
            <source
              srcSet="/assets/accounting-hero-1280.webp"
              media="(min-width: 641px)"
            />
            <img
              src="/assets/accounting-hero-640.webp"
              alt=""
              aria-hidden="true"
              width={1280}
              height={846}
              className="
                absolute inset-y-0 right-0 left-[30%] -z-20 h-full w-[70%]
                object-cover object-[56%_50%]
                lg:left-[42%] lg:w-[58%] lg:object-[62%_52%]
              "
            />
          </picture>
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10 hidden sm:block
              bg-[linear-gradient(90deg,#0e1a2b_0%,rgba(14,26,43,0.97)_38%,rgba(14,26,43,0.66)_100%)]
              lg:bg-[linear-gradient(90deg,#0e1a2b_0%,#0e1a2b_40%,rgba(14,26,43,0.88)_56%,rgba(14,26,43,0.38)_100%)]
            "
          />

          <div className="mx-auto max-w-6xl px-5 py-10 sm:min-h-[610px] sm:px-6 sm:pt-24 sm:pb-16">
            <div className="max-w-[660px]">
              <p className="eyebrow">
                UK limited company accounting for non-residents
              </p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
                Your UK company has deadlines.
                <br />
                Your life is somewhere else.
              </h1>
              <p className="mt-6 max-w-[590px] text-base leading-7 text-foreground/90 sm:text-lg">
                Stay on top of annual accounts, Corporation Tax and UK filing
                deadlines, even when you run your business from abroad. Choose
                the support you need, complete our secure AML/KYC onboarding and
                know who is coordinating the work.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#start"
                  onClick={() => handleStartCta("Not sure yet")}
                  className="btn-gold text-center"
                >
                  Get Started — From £699/year →
                </a>
                <a href="#how" className="btn-ghost text-center">
                  See How It Works
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Remote onboarding · Annual compliance · Bookkeeping when you
                need it
              </p>
            </div>

            <div className="mt-11 flex max-w-[800px] flex-wrap gap-y-3 border-t border-border/40 pt-6 text-xs sm:text-sm text-foreground/90">
              {[
                "ACCA-accredited accounting partner",
                "AML/KYC checks before work starts",
                "Remote onboarding for non-residents",
                "Annual packages from £699",
              ].map((item, idx, arr) => (
                <span
                  key={item}
                  className={`w-full sm:w-auto ${
                    idx < arr.length - 1
                      ? "sm:mr-4 sm:border-r sm:border-border/40 sm:pr-4"
                      : ""
                  }`}
                >
                  <strong className="mr-1.5 text-gold">✓</strong>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <Section id="benefits" className="scroll-mt-24">
          <div className="max-w-3xl">
            <Eyebrow>More control. Less chasing.</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Run your company. Know what&apos;s being handled.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Living abroad should not mean guessing which UK filing comes next.
              We help you organise the work, the records and the people
              responsible for preparing your company&apos;s accounts.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-card/30 p-7">
              <div
                aria-hidden="true"
                className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-xl text-gold"
              >
                ▣
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Know what needs filing
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Annual accounts, CT600 and your confirmation statement — clearly
                scoped, with deadlines reviewed for your company.{" "}
                <Link
                  href="/blog/do-i-need-accountant-uk-company-non-resident"
                  className="font-semibold text-gold hover:underline"
                >
                  Learn which UK filings may apply when you live abroad.
                </Link>
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card/30 p-7">
              <div
                aria-hidden="true"
                className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-xl text-gold"
              >
                ↻
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Keep books current
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Choose monthly bookkeeping for 25 or 50 transactions, so
                receipts and queries do not build up until year-end.
              </p>
            </article>

            <article className="rounded-xl border border-border bg-card/30 p-7">
              <div
                aria-hidden="true"
                className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-xl text-gold"
              >
                ◎
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                One team to contact
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Seven Oak coordinates your service while a professional
                accounting provider handles the technical preparation and
                filings.
              </p>
            </article>
          </div>
        </Section>

        {/* PACKAGES SECTION */}
        <Section
          id="packages"
          className="section-parchment border-y border-border scroll-mt-24"
        >
          <div className="max-w-3xl">
            <Eyebrow>Transparent accounting packages</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              UK Limited Company Accounting Packages for Non-Residents
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              From straightforward annual filings to monthly bookkeeping. All
              prices below are annual package prices, subject to suitability and
              onboarding acceptance.{" "}
              <Link
                href="/blog/uk-ltd-accounting-cost"
                className="font-semibold text-gold hover:underline"
              >
                Understand UK accountant fees.
              </Link>
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-xl border bg-background p-6 sm:p-7 ${
                  pkg.featured
                    ? "border-2 border-gold shadow-lg lg:-translate-y-2"
                    : "border-border"
                }`}
              >
                {pkg.featured && (
                  <p className="absolute -top-3.5 left-5 rounded bg-gold px-3 py-1.5 text-[0.67rem] font-extrabold uppercase tracking-[0.06em] text-on-gold">
                    RECOMMENDED FOR ACTIVE COMPANIES
                  </p>
                )}
                <div className="text-sm font-bold text-gold">{pkg.fit}</div>
                <h3 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {pkg.name}
                </h3>
                <div className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground">
                  {pkg.amount}{" "}
                  <small className="font-sans text-sm font-semibold tracking-normal text-muted-foreground">
                    {pkg.amountSuffix}
                  </small>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {pkg.mini}
                </div>

                <ul className="my-6 flex-1 divide-y divide-border/60 text-sm">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 py-2.5 text-foreground/90"
                    >
                      <span
                        className="font-extrabold text-gold"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#start"
                  onClick={() => handleStartCta(pkg.dataPackage)}
                  className={`${
                    pkg.featured ? "btn-gold" : "btn-ghost"
                  } w-full text-center`}
                >
                  {pkg.cta}
                </a>
                <p className="mt-4 text-xs text-muted-foreground">
                  {pkg.exclude}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-muted-foreground">
            Monthly instalments may be available subject to a fixed-term
            agreement. They are not automatically available or freely
            cancellable month-to-month. Package eligibility and additional work
            are confirmed before engagement.
          </p>

          {/* COMPARISON TABLE */}
          <div className="mt-7 overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full border-collapse text-sm">
              <thead className="hidden sm:table-header-group">
                <tr className="border-b border-border bg-muted/70">
                  <th className="px-4 py-3.5 text-left font-bold text-foreground">
                    What&apos;s included
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold text-foreground">
                    Essential
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold text-foreground">
                    Managed
                  </th>
                  <th className="px-4 py-3.5 text-center font-bold text-foreground">
                    Managed Plus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_ROWS.map(([label, col1, col2, col3]) => (
                  <tr
                    key={label}
                    className="grid grid-cols-2 sm:table-row"
                  >
                    <td className="col-span-2 bg-muted/60 px-4 py-2.5 text-left font-extrabold text-foreground sm:bg-transparent sm:py-3.5 sm:font-medium">
                      {label}
                    </td>
                    <td className="px-4 py-2 text-left text-foreground/90 sm:py-3.5 sm:text-center">
                      <span className="font-bold sm:hidden">Essential: </span>
                      {col1}
                    </td>
                    <td className="px-4 py-2 text-left text-foreground/90 sm:py-3.5 sm:text-center">
                      <span className="font-bold sm:hidden">Managed: </span>
                      {col2}
                    </td>
                    <td className="col-span-2 px-4 py-2 text-left text-foreground/90 sm:col-span-1 sm:py-3.5 sm:text-center">
                      <span className="font-bold sm:hidden">Plus: </span>
                      {col3}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* BRIDGE SECTION (#ask) */}
        <Section id="ask" className="border-b border-border bg-card/40">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
            <div>
              <Eyebrow>Not sure which package fits?</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Tell us what your UK company does. We’ll help you choose.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Already trading, newly incorporated, dormant or catching up on
                filings? Share a few details and we’ll explain the suitable next
                step — no obligation to buy before your scope is confirmed.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a
                href="#start"
                onClick={() => handleStartCta("Help me choose")}
                className="btn-gold w-full sm:w-auto text-center"
              >
                Ask Our Team →
              </a>
              <a
                href="#faqs"
                className="text-sm font-bold text-gold hover:underline"
              >
                Read common questions ↓
              </a>
            </div>
          </div>
        </Section>

        {/* FOUNDERS ABROAD / TRUST SECTION */}
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <Eyebrow>Built for founders abroad</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A UK company. An international life. One clearer plan.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Whether you run your UK Ltd from India, France, the UAE, Europe
                or elsewhere, your accounting obligations do not disappear when
                you leave the UK.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We help overseas directors understand the annual work required,
                coordinate records remotely and identify where a separate VAT,
                personal tax or cross-border review is needed.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Overseas directors",
                  "UK Ltd owners",
                  "E-commerce founders",
                  "International consultants",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <figure className="overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src="/assets/accounting-founders-1280.webp"
                  srcSet="/assets/accounting-founders-640.webp 640w, /assets/accounting-founders-1280.webp 1280w"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Business professionals reviewing company documents together during a meeting"
                  width={1320}
                  height={890}
                  loading="lazy"
                  decoding="async"
                  className="block h-[210px] w-full object-cover object-[center_47%] sm:h-[265px]"
                />
              </figure>
            </div>
          </div>
        </Section>

        {/* HOW IT WORKS (#how) */}
        <Section
          id="how"
          className="section-parchment border-y border-border scroll-mt-24"
        >
          <div className="max-w-3xl">
            <Eyebrow>A practical onboarding process</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From choosing a package to getting your books organised.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([badge, title, desc]) => (
              <div key={badge} className="border-t-2 border-gold pt-5">
                <b className="text-xs font-bold tracking-wider text-gold">
                  {badge}
                </b>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROFESSIONAL DELIVERY (DARK BAND) */}
        <Section className="section-dark border-b border-border">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <Eyebrow>Professional delivery</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Accredited accounting expertise. One trusted point of contact.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Seven Oak Prestige is your primary point of contact and
                coordinates your agreed accounting services. Technical accounts
                and tax filings are prepared by our ACCA-accredited UK
                accounting partner under the appropriate authorisations. Our
                client identity and AML/KYC checks take place before work
                begins.
              </p>
              <div className="mt-8">
                <a href="#packages" className="btn-gold text-center">
                  Choose Your Package →
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/40 p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold text-foreground">
                Professional standards. Clear responsibilities.
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Your accounting and tax filings are prepared through our
                ACCA-accredited UK accounting partner. Seven Oak Prestige
                coordinates your service, provides a dedicated point of contact
                and completes the required AML/KYC checks before work begins.
              </p>
            </div>
          </div>
        </Section>

        {/* FAQS SECTION (#faqs) */}
        <Section id="faqs" className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.45fr] lg:gap-14">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Eyebrow>The questions that matter</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Clear answers before you start.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                UK accounting rules can feel unfamiliar when you live overseas.
                These answers cover common questions about company filings,
                packages, VAT, software, personal tax and onboarding.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
                {FAQ_GROUPS.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/20 lg:border-0 lg:bg-transparent lg:p-0 lg:text-sm lg:hover:bg-transparent lg:hover:underline"
                  >
                    {group.navLabel}
                  </a>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                General guidance, not individual tax or legal advice.
              </p>
            </div>

            <div className="space-y-9">
              {FAQ_GROUPS.map((group) => (
                <div
                  key={group.id}
                  id={group.id}
                  className="scroll-mt-28"
                >
                  <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
                    {group.title}
                  </h3>
                  <div className="border-t border-border">
                    {group.items.map(([question, answer]) => (
                      <details
                        key={question}
                        className="group border-b border-border py-1"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-sans text-sm font-bold leading-snug text-foreground transition-colors hover:text-gold sm:text-base">
                          <span>{question}</span>
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-xl leading-none text-gold transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="pb-5 max-w-3xl text-sm leading-7 text-muted-foreground">
                          {answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EXPERT GUIDANCE (#accounting-guides) */}
        <Section
          id="accounting-guides"
          ariaLabelledBy="guide-title"
          className="section-parchment border-t border-border py-12 sm:py-16"
        >
          <Eyebrow>Expert guidance</Eyebrow>
          <h2
            id="guide-title"
            className="mt-4 max-w-3xl font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Still exploring your UK accounting obligations?
          </h2>
          <p className="mt-2 mb-6 text-sm text-muted-foreground">
            Two practical guides to help you make an informed decision.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              aria-label="Read the cost guide: How Much Does a UK Limited Company Accountant Cost?"
              href="/blog/uk-ltd-accounting-cost"
              className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-gold"
            >
              <span className="flex flex-col gap-1.5">
                <strong className="font-display text-lg font-bold leading-snug text-foreground">
                  How Much Does a UK Limited Company Accountant Cost?
                </strong>
                <span className="text-sm text-muted-foreground">
                  Fees, annual accounts, CT600 and bookkeeping.
                </span>
              </span>
              <span className="text-sm font-bold text-gold">
                Read the cost guide ↗
              </span>
            </Link>

            <Link
              aria-label="Read the non-resident guide: Do I Need an Accountant If I Live Abroad?"
              href="/blog/do-i-need-accountant-uk-company-non-resident"
              className="flex flex-col justify-between gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-gold"
            >
              <span className="flex flex-col gap-1.5">
                <strong className="font-display text-lg font-bold leading-snug text-foreground">
                  Do I Need an Accountant If I Live Abroad?
                </strong>
                <span className="text-sm text-muted-foreground">
                  Your UK obligations and when professional support helps.
                </span>
              </span>
              <span className="text-sm font-bold text-gold">
                Read the non-resident guide ↗
              </span>
            </Link>
          </div>
        </Section>

        {/* FURTHER GUIDANCE */}
        <Section className="section-parchment border-t border-border">
          <div className="max-w-3xl">
            <Eyebrow>Further guidance</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Understand the obligations before you decide.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              For more detail on your obligations, consult the official UK
              guidance below. Our team can also explain how these rules relate
              to your company.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.gov.uk/annual-accounts"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-5 font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              UK company annual accounts ↗
            </a>
            <a
              href="https://www.gov.uk/company-tax-returns"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-5 font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Corporation Tax returns ↗
            </a>
            <a
              href="https://www.gov.uk/running-a-limited-company"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-background p-5 font-bold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Running a UK limited company ↗
            </a>
          </div>
        </Section>

        {/* START WITH SEVEN OAK / LEAD FORM (#start) */}
        <Section
          id="start"
          className="section-parchment border-y border-border scroll-mt-24"
        >
          <div className="grid gap-8 rounded-2xl border border-border bg-background p-6 shadow-lg sm:p-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>Start with Seven Oak</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Tell us about your UK company.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Share a few details to start your enquiry. We will review your
                requirements, confirm the appropriate service scope and explain
                the AML/KYC checks required before work begins.
              </p>
              <div className="mt-6 space-y-2 text-sm font-bold text-gold">
                <div>✓ ACCA-accredited accounting partner</div>
                <div>✓ AML/KYC before work starts</div>
                <div>✓ Support wherever you live</div>
              </div>
            </div>

            <form
              id="lead-form"
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                handleSendEmail();
              }}
              className="grid gap-2.5"
            >
              <label
                htmlFor="pkg"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Package of interest
              </label>
              <select
                id="pkg"
                required
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="Not sure yet">Not sure yet</option>
                <option value="Essential Accounting">
                  Essential Accounting
                </option>
                <option value="Managed Accounting">Managed Accounting</option>
                <option value="Managed Plus">Managed Plus</option>
                <option value="Help me choose">Help me choose</option>
              </select>

              <label
                htmlFor="company"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                UK company name (optional)
              </label>
              <input
                id="company"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Your UK limited company"
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                htmlFor="country"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Where do you live?
              </label>
              <input
                id="country"
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. India, France, UAE"
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <label
                htmlFor="activity"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                What does your company do?
              </label>
              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="Trading / active business">
                  Trading / active business
                </option>
                <option value="Newly incorporated">Newly incorporated</option>
                <option value="Dormant / no activity">
                  Dormant / no activity
                </option>
                <option value="E-commerce / Amazon">
                  E-commerce / Amazon
                </option>
                <option value="Overdue filings">Overdue filings</option>
                <option value="Other / not sure">Other / not sure</option>
              </select>

              <label
                htmlFor="note"
                className="text-xs font-extrabold uppercase tracking-wider text-foreground"
              >
                Anything else? (optional)
              </label>
              <textarea
                id="note"
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="For example: 20 transactions per month, VAT registered, year-end due soon"
                className="mb-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <button
                id="email-send"
                type="button"
                onClick={handleSendEmail}
                className="btn-gold mt-1 w-full cursor-pointer text-center"
              >
                Send My Enquiry by Email →
              </button>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Please do not include passport numbers, identity documents or
                sensitive financial records in this enquiry. Secure AML/KYC
                instructions follow separately.
              </p>
            </form>
          </div>
        </Section>

        {/* FINAL CTA SECTION */}
        <section className="section-dark px-5 py-16 text-center sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              You run the business. We’ll help keep the UK accounting organised.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Choose a package or tell us about your company. We will confirm
              suitability, complete AML/KYC checks and explain the next steps
              before accounting work begins.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#start"
                onClick={() => handleStartCta("Not sure yet")}
                className="btn-gold text-center"
              >
                Get Started →
              </a>
              <a
                href="#start"
                onClick={() => handleStartCta("Not sure yet")}
                className="btn-ghost text-center"
              >
                Ask a Question →
              </a>
            </div>
          </div>
        </section>

        {/* LEGAL DISCLAIMER */}
        <section className="border-t border-border bg-background px-5 py-8 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-3 text-xs leading-6 text-muted-foreground">
            <p>
              <strong className="font-bold text-foreground">Important: </strong>
              Package prices are based on eligible micro-entities and the stated
              service scope. VAT Returns, software subscriptions, historic
              catch-up work, payroll, group accounts and complex international
              tax advice are not included unless expressly agreed. All services
              are subject to eligibility, identity and AML/KYC checks,
              professional acceptance and written engagement terms. Directors
              remain responsible for their statutory obligations.
            </p>
            <p>
              Research and regulatory reference:{" "}
              <a
                href="https://www.gov.uk/running-a-limited-company"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                GOV.UK
              </a>{" "}
              ·{" "}
              <a
                href="https://www.gov.uk/annual-accounts"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Annual accounts
              </a>{" "}
              ·{" "}
              <a
                href="https://www.gov.uk/running-a-limited-company/confirmation-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Confirmation statements
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCta
        primaryLabel="Get Started"
        secondaryLabel="WhatsApp"
        primaryHref="#start"
      />
    </div>
  );
}
