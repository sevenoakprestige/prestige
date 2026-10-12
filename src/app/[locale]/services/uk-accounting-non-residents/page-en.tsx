"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const wa = (message: string) =>
  `https://wa.me/447447488755?text=${encodeURIComponent(message)}`;

const PACKAGE_FINDER = wa(
  "Hello Seven Oak Prestige, I would like help choosing an accounting package. Company name: ... / Director country: ... / Business activity: ... / Trading status: ... / Approx. monthly transactions: ... / VAT or payroll: ... / Main bank or EMI: ... / Existing accountant: yes/no"
);

type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
  bestFor: string;
  cta: string;
  message: string;
  featured?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Essential Accounting",
    price: "£699/year",
    description:
      "For companies that maintain their own bookkeeping and primarily need year-end compliance.",
    features: [
      "Annual statutory accounts",
      "Corporation Tax Return (CT600)",
      "Confirmation Statement preparation and filing coordination",
      "Year-end compliance review",
      "Annual filing coordination",
    ],
    note: "Bookkeeping and VAT returns are not included and can be added separately where required.",
    bestFor:
      "Companies with organised bookkeeping that mainly need annual accounts, Corporation Tax and Companies House compliance.",
    cta: "Choose Essential",
    message:
      "Hello Seven Oak Prestige, I would like to discuss the Essential Accounting package for my UK company.",
  },
  {
    name: "Managed Accounting",
    price: "£1,699/year",
    description:
      "Everything in Essential, plus ongoing bookkeeping handled for you.",
    features: [
      "Everything in Essential",
      "Bookkeeping included, up to 50 transactions per month",
      "Quarterly bookkeeping review",
      "Year-end accounts prepared from maintained records",
      "Ongoing accounting coordination",
    ],
    note: "The 50-transaction allowance is based on monthly transaction volume and is confirmed against the company's actual accounts and payment channels during onboarding.",
    bestFor:
      "Consultants, agencies, SaaS companies and other lower-volume businesses that want their bookkeeping and year-end compliance managed together.",
    cta: "Choose Managed",
    message:
      "Hello Seven Oak Prestige, I would like to discuss the Managed Accounting package for my UK company.",
    featured: true,
  },
  {
    name: "Managed Plus",
    price: "From £2,199/year",
    description:
      "For VAT-registered, growing or more operationally complex companies.",
    features: [
      "Everything in Managed",
      "Quarterly VAT returns included in the agreed starting scope",
      "Higher transaction volumes available",
      "Payroll support available where required",
      "Multiple currencies or payment channels supported subject to scope",
      "Additional reporting available where required",
    ],
    note: "Final pricing is confirmed after we review your transaction volume, VAT, payroll, reporting and operational requirements.",
    bestFor:
      "VAT-registered and growing businesses, e-commerce companies, businesses with multiple payment channels, companies with staff, and overseas-owned UK companies requiring broader accounting support.",
    cta: "Request a Scope Review",
    message:
      "Hello Seven Oak Prestige, I would like a scope review for Managed Plus accounting.",
  },
];

const STANDALONE: [string, string, string?][] = [
  ["Dormant Company Accounts", "£249/year"],
  ["Low-Transaction Accounts + CT600", "£449/year"],
  ["Small Active Company Accounts + CT600", "£649/year"],
  [
    "Quarterly VAT Return",
    "£119/quarter",
    "One quarterly return within a standard scope.",
  ],
  ["Bookkeeping — up to 50 transactions/month", "£99/month"],
  ["Bookkeeping — 51–100 transactions/month", "£149/month"],
  [
    "Payroll — 1 employee/director",
    "£45/month",
    "Standard payroll runs. Pension auto-enrolment and complex payroll are scoped separately.",
  ],
  ["Additional employee", "£10/month"],
  [
    "Confirmation Statement Preparation & Filing",
    "£199 total",
    "Includes the Companies House filing fee.",
  ],
  ["VAT Registration", "£144", "Registration decisions remain with HMRC."],
  ["EORI Registration", "£60", "Issuance and processing times remain with HMRC."],
  ["Self Assessment", "Price confirmed after scope review"],
];

const REASONS = [
  [
    "One point of contact",
    "Seven Oak stays connected across formation, bookkeeping and accounting coordination.",
  ],
  [
    "Qualified team behind the work",
    "Accounting is delivered through our ACCA-accredited accounting partners, not an unqualified back office.",
  ],
  [
    "Designed for remote directors",
    "Onboarding, records, approvals and routine communication all work remotely.",
  ],
  [
    "No surprise scope",
    "If actual workload sits outside the agreed package, we explain it before starting.",
  ],
  [
    "Deadlines kept visible",
    "We coordinate the filing timetable and request information ahead of relevant deadlines.",
  ],
];

const OBLIGATIONS = [
  [
    "Annual Accounts",
    "Usually due to Companies House nine months after the financial year ends. First accounts are due 21 months from incorporation.",
  ],
  [
    "Corporation Tax",
    "Usually payable nine months and one day after the accounting period ends.",
  ],
  [
    "Company Tax Return (CT600)",
    "Normally due 12 months after the accounting period ends.",
  ],
  [
    "Confirmation Statement",
    "Must be filed at least once every year. The current digital filing fee is £50.",
  ],
];

const INTERNATIONAL = [
  [
    "Multiple currencies",
    "GBP records may need to reconcile with EUR, USD, AED or other currencies.",
  ],
  [
    "Banks, EMIs and processors",
    "Transactions across bank accounts, e-money institutions and payment processors need reconciling together.",
  ],
  [
    "International trading",
    "UK records must still support transactions with clients and suppliers overseas.",
  ],
  [
    "VAT and payroll",
    "Both depend on what the business actually does and on its circumstances—not simply on having a UK company.",
  ],
  [
    "Overseas ownership",
    "Foreign parent companies can introduce group, intercompany or tax considerations that should be identified early.",
  ],
];

const AUDIENCES = [
  "Non-resident founders directing a UK company while living abroad",
  "UK-resident directors seeking clear annual pricing and coordinated support",
  "Overseas-owned UK subsidiaries needing UK accounts, tax and compliance coordination",
  "International consultancies, agencies, SaaS, technology and e-commerce businesses",
  "Existing Seven Oak clients moving from formation into ongoing compliance",
  "Companies switching provider, whether or not Seven Oak formed the company",
];

const STEPS = [
  [
    "01",
    "Tell us about your company",
    "Share its activity, director residence, trading status, monthly transaction volume, VAT and payroll needs, and main accounts.",
  ],
  [
    "02",
    "Receive a clear scope",
    "We confirm the appropriate package and price in writing and flag anything outside the standard scope.",
  ],
  [
    "03",
    "Complete secure onboarding",
    "Identity and client checks, the agreed engagement scope and access to relevant records are handled remotely.",
  ],
  [
    "04",
    "Ongoing accounting and compliance",
    "We coordinate the agreed bookkeeping, accounts, tax return and other included work throughout the engagement.",
  ],
];

const FAQS = [
  [
    "Is Seven Oak a firm of qualified or regulated accountants?",
    "Your accounts and tax filings are prepared through our accounting partners, an ACCA-accredited team, with Seven Oak Prestige coordinating the engagement as your single point of contact.",
  ],
  [
    "Can a non-resident director use a UK accountant remotely?",
    "Yes. Onboarding and routine communication are handled remotely, so being outside the UK does not prevent you from arranging UK accounting support.",
  ],
  [
    "What does every UK limited company need to file each year?",
    "Annual accounts, including for dormant companies in most cases, plus a Confirmation Statement at least annually. A trading company may also need a Company Tax Return depending on its circumstances.",
  ],
  [
    "Do I need to file accounts if my company has not traded?",
    "Usually yes. A dormant company still normally files dormant accounts and a Confirmation Statement.",
  ],
  [
    "Does every company need a CT600?",
    "Not necessarily. HMRC requires one when it issues a notice to deliver it, including where the company made a loss or has no Corporation Tax to pay.",
  ],
  [
    "Is VAT included in Essential or Managed Accounting?",
    "No. VAT returns are available separately, or as part of an agreed Managed Plus scope.",
  ],
  [
    "What happens if I have more than 50 transactions a month?",
    "We review the actual volume and confirm whether Managed Plus or a tailored bookkeeping scope fits better.",
  ],
  [
    "Can you take over from my existing accountant?",
    "Yes, subject to reviewing the company's current status and available records first.",
  ],
  [
    "Do you handle my personal tax overseas?",
    "Not automatically. These packages cover the UK company's requirements. Personal and overseas tax matters need separate, jurisdiction-specific advice.",
  ],
  [
    "Do I need to visit the UK?",
    "No. Onboarding and coordination are remote by default.",
  ],
  [
    "Can you guarantee HMRC or Companies House will accept everything?",
    "We prepare and coordinate work based on applicable requirements and the information you provide, but filing acceptance and any enquiries remain with the relevant authority.",
  ],
];

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
    <section id={id} className={`px-5 py-16 sm:px-6 sm:py-24 ${className}`}>
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

function Mark() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />;
}

function AccountingFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <div key={question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-5 py-6 text-left transition-colors hover:text-gold-soft"
              >
                <span className="font-sans text-base font-bold sm:text-lg text-foreground">
                  {question}
                </span>
                <span
                  className={`mt-1 shrink-0 text-gold transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AccountingPageEn() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* HERO SECTION */}
        <section className="section-dark border-b border-border px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="eyebrow">UK accounting &amp; compliance</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold tracking-tight leading-[1.08] sm:text-5xl lg:text-6xl text-foreground">
                UK Accounting Services for Non-Resident Companies &amp; Directors
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-foreground/90 sm:text-lg">
                Annual accounts, Corporation Tax returns, bookkeeping, VAT and payroll for UK limited companies managed from overseas — with the scope agreed in writing before any work begins.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PACKAGE_FINDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center"
                >
                  Find My Accounting Package
                </a>
                <a href="#packages" className="btn-ghost text-center">
                  View Packages
                </a>
              </div>
            </div>
            <ul className="mt-12 grid border border-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Annual packages from £699",
                "Remote onboarding, no UK visit required",
                "Scope and price confirmed before you commit",
                "ACCA-accredited accounting partners",
              ].map((item) => (
                <li
                  key={item}
                  className="flex min-h-24 items-center gap-3 border-b border-border px-5 py-5 text-sm font-medium leading-6 text-foreground/90 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r"
                >
                  <Mark />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHO PREPARES */}
        <Section>
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <Eyebrow>Who actually prepares your accounts</Eyebrow>
            <div>
              <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Know Who Is Responsible for the Work
              </h2>
              <p className="mt-6 text-lg leading-8 text-foreground/90 font-medium">
                You're trusting someone with your company's financial records and statutory filings. You should know how that work is supervised before you commit.
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                Your accounting and bookkeeping work is delivered through our accounting partners — an ACCA-accredited outsourced accounting team — with Seven Oak Prestige as your single point of contact throughout the engagement. You get one relationship to manage and a qualified team behind the numbers.
              </p>
            </div>
          </div>
        </Section>

        {/* PACKAGES */}
        <Section id="packages" className="section-parchment border-y border-border scroll-mt-24">
          <Eyebrow>Three clear packages</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Choose by Workload, Not Guesswork
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
            No surprise scope. You'll know exactly what's included and what isn't before you commit — every package is confirmed against your actual company before onboarding, not assumed from a price list.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col border bg-background p-6 sm:p-8 ${
                  pkg.featured
                    ? "border-gold shadow-lg lg:-translate-y-2"
                    : "border-border"
                }`}
              >
                {pkg.featured && (
                  <p className="absolute -top-3 left-6 bg-gold px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                    Recommended for most founders
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-5 font-display text-4xl font-bold text-gold">{pkg.price}</p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">
                  {pkg.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6 text-sm leading-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-foreground/85">
                      <Mark />
                      {feature}
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="mt-5 border-l-2 border-gold pl-4 text-xs leading-5 text-muted-foreground">
                    {pkg.note}
                  </p>
                )}
                <p className="mt-6 text-sm leading-6 text-foreground/90">
                  <span className="font-bold text-foreground">Best for:</span> {pkg.bestFor}
                </p>
                <a
                  href={wa(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pkg.featured ? "btn-gold" : "btn-ghost"} mt-7 w-full text-center`}
                >
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-10 max-w-4xl border-l-2 border-gold pl-5">
            <p className="leading-7 font-medium text-foreground/90">
              Every business is different. Before onboarding, we confirm your accounting scope based on transaction volume, VAT status, payroll requirements and the complexity of your business. Where additional work is required, this is agreed with you before it is undertaken.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Software subscriptions, government fees and specialist or out-of-scope work are charged separately where applicable, except where a displayed service expressly states that a government filing fee is included.
            </p>
          </div>
        </Section>

        {/* STANDALONE */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <Eyebrow>Need only one service?</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Pay Only for the Work You Need
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                You do not need a full annual package for a specific piece of work.
              </p>
              <a
                href={wa(
                  "Hello Seven Oak Prestige, I would like a quote for a standalone accounting or compliance service. The service I need is: ..."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 inline-block text-center"
              >
                Request a Standalone Quote
              </a>
            </div>
            <div className="border-y border-border">
              {STANDALONE.map(([service, price, note]) => (
                <div
                  key={service}
                  className="flex flex-col gap-1 border-b border-border py-4 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                >
                  <div>
                    <h3 className="font-sans text-sm font-bold text-foreground">{service}</h3>
                    {note && (
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{note}</p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm font-bold text-gold sm:text-right">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* REASONS */}
        <Section className="section-dark border-y border-border">
          <Eyebrow>Why founders choose Seven Oak</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Clear Responsibility. Visible Scope.
          </h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {REASONS.map(([title, body]) => (
              <article key={title} className="bg-ink p-6">
                <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            Directors retain legal responsibility for their company's filings, as they do when working with any accountant.
          </p>
        </Section>

        {/* OBLIGATIONS */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <Eyebrow>Your compliance calendar</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                What Your UK Company Actually Needs to File
              </h2>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {OBLIGATIONS.map(([title, body]) => (
                <article key={title} className="bg-background p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-7 text-muted-foreground">
            These deadlines do not all fall on the same date — one reason a proper compliance calendar matters.
          </p>
        </Section>

        {/* INTERNATIONAL */}
        <Section className="section-parchment border-y border-border">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>Accounting across borders</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Non-Resident Accounting Is Not Just “Normal Accounting Online”
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                A company can be incorporated in England and Wales while its founder lives in Dubai, Mumbai, Paris, New York or Singapore. The records still need to reflect how the business actually operates.
              </p>
            </div>
            <div className="space-y-0 border-y border-border">
              {INTERNATIONAL.map(([title, body]) => (
                <div key={title} className="border-b border-border py-5 last:border-b-0">
                  <h3 className="font-sans text-sm font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* TAX BOUNDARY */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>The cross-border tax boundary</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                UK Company Accounts Do Not Settle Every Overseas Tax Question
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-muted-foreground">
              <p>
                Our UK accounting engagement covers the agreed accounting and compliance requirements of the UK company. It does not automatically determine your personal tax residence, whether salary or dividends are taxable elsewhere, foreign share or income reporting, overseas parent-company duties, transfer pricing, or whether management creates tax exposure outside the UK.
              </p>
              <p>
                Where a matter needs specialist advice in another jurisdiction, we identify the issue and, where appropriate, coordinate with a suitable professional. UK bookkeeping or annual accounts are not a substitute for jurisdiction-specific tax advice.
              </p>
            </div>
          </div>
        </Section>

        {/* AUDIENCES */}
        <Section className="section-parchment border-y border-border">
          <Eyebrow>Who this service is for</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Support for UK Companies Managed From Anywhere
          </h2>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((item, index) => (
              <li key={item} className="flex gap-4 bg-background p-6 text-sm leading-6">
                <span className="font-display text-xl font-bold text-gold">0{index + 1}</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            Not incorporated yet? See our{" "}
            <Link
              href="/services/uk-company-formation-for-non-residents"
              className="text-gold font-medium hover:underline"
            >
              UK Company Formation for Non-Residents service
            </Link>
            .
          </p>
        </Section>

        {/* SWITCHING */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <Eyebrow>Already have an accountant?</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Switch With the Current Position Understood First
              </h2>
            </div>
            <div>
              <p className="leading-7 text-muted-foreground">
                We first review your company status, last filed accounts, Corporation Tax position, bookkeeping status, VAT registration, payroll and outstanding deadlines. If you proceed, the transition is coordinated with the appropriate transfer of information and authorisations. We do not recommend changing provider before establishing what has been filed and what remains outstanding.
              </p>
              <a
                href={wa(
                  "Hello Seven Oak Prestige, I would like to discuss switching accountant for my UK company."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 inline-block text-center"
              >
                Discuss Switching Accountant
              </a>
            </div>
          </div>
        </Section>

        {/* SOFTWARE */}
        <Section className="section-parchment border-y border-border">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Accounting software</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Already using accounting software? We can work with your existing setup.
              </h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                If your business already uses accounting software, we can work with your existing setup where appropriate. We support leading cloud accounting platforms including Xero and QuickBooks, and can review other systems during onboarding.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                If accounting software needs to be arranged as part of your service, we will confirm the appropriate platform and subscription with you before onboarding.
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                This means you do not need to change systems unnecessarily simply because you move your accounting support to Seven Oak Prestige.
              </p>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-medium leading-6 text-foreground/90">
                Accounting software subscriptions are charged separately and are not included in the displayed accounting package prices unless expressly stated.
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Compatible with leading accounting platforms
              </p>
              <p className="mt-2 text-sm font-bold text-foreground">
                Xero <span className="text-gold">•</span> QuickBooks{" "}
                <span className="text-gold">•</span>{" "}
                <span className="font-normal text-muted-foreground">
                  Other systems reviewed during onboarding
                </span>
              </p>
            </div>
            <img
              src="/assets/accounting-order-1280.webp"
              srcSet="/assets/accounting-order-640.webp 640w, /assets/accounting-order-1280.webp 1280w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              alt="Accounting records management and compliance overview"
              className="aspect-[16/10] w-full border border-border object-cover"
            />
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <Section className="section-dark border-y border-border">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            A Clear Scope Before Work Begins
          </h2>
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([number, title, body]) => (
              <li key={number} className="bg-ink p-6 sm:p-7">
                <span className="font-display text-2xl font-bold text-gold">{number}</span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* WHAT WE NEED */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>What we need from you</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                Complete Records Keep the Work Efficient
              </h2>
            </div>
            <p className="leading-7 text-muted-foreground">
              Even with bookkeeping included, the company needs to provide reliable source information: bank and EMI statements, payment-processor records, sales and supplier invoices, receipts, payroll information, VAT information, contracts, and explanations for unusual transactions. Delayed or incomplete records can create additional work outside the original scope.
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="section-parchment border-y border-border">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                UK Accounting for Overseas Directors
              </h2>
            </div>
            <AccountingFaq />
          </div>
        </Section>

        {/* FINAL CTA */}
        <section id="final-cta" className="section-dark px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Not sure which package fits?</p>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight leading-tight sm:text-5xl text-foreground">
                Let the Workload Define the Scope
              </h2>
              <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                Tell us how your UK company operates. We will review the workload before recommending a scope — not the other way around.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
                We will ask for your company name, country of residence, business activity, trading status, monthly transactions, VAT and payroll status, main bank or EMI, and whether you have an existing accountant.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PACKAGE_FINDER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-center"
                >
                  Find My Accounting Package
                </a>
                <a
                  href={wa(
                    "Hello Seven Oak Prestige, I would like an accounting quote for my UK company."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-center"
                >
                  Request a Quote
                </a>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                No UK visit required. Scope and pricing confirmed before onboarding.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="border-t border-border bg-background px-5 py-10 sm:px-6">
          <div className="mx-auto max-w-6xl text-xs leading-6 text-muted-foreground">
            <p>
              Seven Oak Prestige Ltd provides company-formation, administrative, compliance-coordination and business-advisory services. Accounting and tax work is delivered through our ACCA-accredited accounting partners, according to the agreed engagement scope.
            </p>
            <p className="mt-3">
              Information on this page is general and does not constitute personal tax, legal or investment advice. Tax treatment depends on the company, its transactions and the circumstances of its owners and directors. Overseas tax obligations should be reviewed separately in the relevant jurisdiction.
            </p>
            <p className="mt-3">
              Prices and statutory filing fees may change. Any engagement is subject to onboarding, client verification, availability of complete records and written confirmation of scope.
            </p>
            <p className="mt-3">
              Seven Oak Prestige Ltd · Company No. 16903092 · Registered Office: 124 City Road, London EC1V 2NX, United Kingdom.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCta primaryLabel="View packages" secondaryLabel="WhatsApp" primaryHref="#packages" />
    </div>
  );
}
