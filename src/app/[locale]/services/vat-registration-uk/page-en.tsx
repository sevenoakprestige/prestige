"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  FileText,
  Mail,
  MessageCircle,
  Plus,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/aFafZ9bwY5nvdAx3pafw40o";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const ASK_TEXT = "I would like to request vat registration assistance (£144 total)";
const EMAIL_SUBJECT = "VAT Registration Assistance request — £144";
const EMAIL_BODY = `Hello Seven Oak Prestige,\n\n${ASK_TEXT}.\nCompany name (if formed):\nBusiness activity:\nCountries involved:\n\nPlease confirm the scope and next steps.`;
const WHATSAPP_TEXT = `Hello Seven Oak Prestige, ${ASK_TEXT}. Please confirm the scope and next steps.`;

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const HMRC_SOURCES = {
  vatApply: "https://www.gov.uk/register-for-vat/how-register-for-vat",
  vatRules:
    "https://www.gov.uk/government/publications/vat-notice-7001-should-i-be-registered-for-vat/vat-notice-7001-should-i-be-registered-for-vat",
  vatThreshold: "https://www.gov.uk/register-for-vat",
  vatPending: "https://www.gov.uk/register-for-vat/how-register-for-vat",
  mtd: "https://www.gov.uk/submit-vat-return",
  marketplaceGuidance:
    "https://www.gov.uk/guidance/vat-overseas-businesses-using-an-online-marketplace-to-sell-goods-in-the-uk",
} as const;

const QUICK_FACTS = [
  ["Total price", "£144 total for professional VAT registration assistance."],
  [
    "Included",
    "Information review, application preparation and agreed submission arrangements. Query support only if agreed in writing.",
  ],
  [
    "HMRC decides the outcome",
    "HMRC reviews the application and may ask for more evidence. Approval is never guaranteed.",
  ],
  [
    "HMRC timing",
    "Usually several weeks. Contact HMRC if no reply after 40 working days.",
  ],
] as const;

const ELIGIBILITY_TESTS = [
  [
    "Test 1 · Looking back",
    "More than £90,000 VAT-taxable turnover in any rolling 12 months",
    "UK-established",
  ],
  [
    "Test 2 · Looking ahead",
    "Expect more than £90,000 in the next 30 days alone",
    "UK-established",
  ],
  [
    "No threshold",
    "Not established in the UK and making UK taxable supplies — register from the first supply",
    "Overseas businesses",
  ],
] as const;

const ELIGIBILITY_FEATURES = [
  [
    "UK-established businesses",
    "The usual threshold is more than £90,000 of VAT-taxable turnover in the last 12 months (a rolling period, not a financial year), or an expectation of exceeding that amount in the next 30 days alone. This is taxable turnover, not profit. HMRC may accept an exception for a temporary breach; check the conditions.",
  ],
  [
    "Voluntary registration",
    "Eligible businesses can register below the threshold. It can help with recoverable input VAT, but also changes pricing and creates reporting duties. Consider your customers and costs before deciding.",
  ],
  [
    "Businesses established overseas",
    "Non-established taxable persons can face registration obligations without the usual threshold. Check the place of supply, reverse-charge rules and any exceptions. Overseas ownership alone does not determine establishment.",
  ],
] as const;

const EXAMPLES = [
  {
    title: "Overseas-owned UK consultancy",
    facts:
      "A UK company, owned and run from Dubai, invoices UK and EU business clients £40,000 a year.",
    dependsOn:
      "Where the company is actually managed, where its services are supplied, and whether the reverse charge applies to its customers.",
    outcome:
      "If it is UK-established and below £90,000, registration may be voluntary. If it is non-established and makes UK taxable supplies, registration can be required from the first supply.",
  },
  {
    title: "Amazon FBA seller with UK stock",
    facts:
      "A company in Turkey ships stock into an Amazon UK warehouse and sells to UK consumers.",
    dependsOn:
      "Who owns the goods in the UK, who the buyer is, and which sales Amazon accounts for VAT on.",
    outcome:
      "Holding stock in the UK usually means an overseas seller needs to review UK VAT registration, even where Amazon collects VAT on some sales.",
  },
] as const;

type ScopeStatus = "included" | "separate" | "not-offered";

const SCOPE_ROWS: readonly { item: string; status: ScopeStatus; note: string }[] = [
  {
    item: "Eligibility review (mandatory, voluntary or non-established)",
    status: "included",
    note: "Based on the facts you give us",
  },
  {
    item: "Preparing the VAT registration application",
    status: "included",
    note: "Including proposed effective date",
  },
  {
    item: "Your review before submission",
    status: "included",
    note: "Nothing is sent without your approval",
  },
  {
    item: "Explaining the VAT number, effective date and next steps",
    status: "included",
    note: "Once HMRC decides",
  },
  {
    item: "Agreed submission arrangements",
    status: "included",
    note: "Who submits and with what authority, confirmed in writing",
  },
  {
    item: "Registration-related HMRC queries",
    status: "separate",
    note: "Only if agreed in writing; not unlimited chasing",
  },
  {
    item: "VAT returns, bookkeeping, MTD software",
    status: "separate",
    note: "Separate agreement",
  },
  {
    item: "Appeals, ongoing representation, complex tax advice",
    status: "not-offered",
    note: "Not part of this service",
  },
];

const AFTER_ENQUIRY = [
  [
    "Payment starts onboarding",
    "After Stripe confirms payment, onboarding begins with questions about your trading activity, turnover and where the business is run. Payment is not HMRC approval or service acceptance.",
  ],
  [
    "We confirm scope in writing",
    "We confirm the £144 assistance scope, who submits and any exclusions before work proceeds. If suitability or scope is unclear, contact us before paying.",
  ],
  [
    "You share details securely",
    "Through the secure channel we give you, never by open email or WhatsApp.",
  ],
  [
    "You approve, then it goes to HMRC",
    "You check the prepared answers first. HMRC then reviews and decides.",
  ],
] as const;

const PROCESS_STAGES = [
  [
    "Eligibility review",
    "Discuss your trading activity, turnover and business establishment. Identify mandatory or voluntary registration and any matters needing specialist tax advice.",
  ],
  [
    "Information collection",
    "Gather the company, ownership and trading information HMRC requires. Ask for the approved secure channel before sharing documents.",
  ],
  [
    "Application preparation",
    "Prepare the registration information, proposed effective date and supporting explanation. You review the details before submission.",
  ],
  [
    "HMRC submission",
    "Submit through the appropriate HMRC route with the required authority. Agree the submission arrangements with our team; no submission deadline is promised.",
  ],
  [
    "HMRC review",
    "HMRC assesses the application and may request more evidence. Any help responding to registration-related queries must be agreed in writing. Unlimited HMRC chasing, ongoing representation and appeals are not included.",
  ],
  [
    "Registration outcome",
    "Explain the decision and, if approved, the VAT number and effective date. Agree any ongoing bookkeeping or VAT return support separately.",
  ],
] as const;

const DOCUMENTS = [
  "Company name, registration details and business contact information",
  "Director, owner and applicant details requested by HMRC",
  "Business establishment, trading activity and where supplies take place",
  "Taxable turnover, forecasts and proposed registration date",
  "Bank account information and trading evidence where requested",
] as const;

const AFTER_OUTCOME_FEATURES = [
  [
    "Check your effective date",
    "Your VAT obligations run from the effective registration date. Check the number, date and first return period HMRC confirms; do not assume they start when the letter arrives.",
  ],
  [
    "Keep digital VAT records",
    "VAT-registered businesses generally need to follow Making Tax Digital rules, keeping digital records and submitting returns through compatible software, unless exempt.",
  ],
  [
    "Plan returns and payments",
    "Check the deadlines shown in your HMRC account. Agree VAT returns, bookkeeping and any ongoing accounting support separately; they are not included in this registration price.",
  ],
] as const;

const FAQS = [
  {
    q: "What does professional assistance add?",
    a: "You pay for practical help, not access to HMRC. The proposed assistance covers reviewing your registration circumstances and required information, checking application details with you, agreeing submission arrangements and explaining the outcome. Confirm the exact services and authority in writing before proceeding. Any HMRC query support must be separately agreed within that scope; unlimited chasing, appeals and ongoing representation are not included. Paid assistance does not guarantee suitability, approval or faster processing.",
  },
  {
    q: "How much does UK VAT registration cost?",
    a: "Seven Oak Prestige charges £144 total for professional VAT registration assistance. HMRC charges no registration fee, so the £144 is entirely for our preparation and assistance, not a government charge. Ongoing VAT returns and bookkeeping are separately scoped.",
  },
  {
    q: "How long does it take to get a UK VAT number?",
    a: "Allow several weeks rather than relying on a fixed approval date. HMRC may ask for further information and controls the decision. VAT Notice 700/1 says to contact the VAT Registration Service if you have not received a reply after 40 working days. That is contact advice, not a guaranteed processing time.",
  },
  {
    q: "When is VAT registration compulsory?",
    a: "For a UK-established business, you must normally register if total VAT-taxable turnover for the last 12 months goes over £90,000, or you expect it to go over £90,000 in the next 30 days alone. The 12-month test is rolling, not a financial year. An exception may be available if turnover goes over the threshold temporarily and HMRC accepts the application for an exception. Different rules apply to non-established taxable persons; the type and location of your supplies matter.",
  },
  {
    q: "Can I register voluntarily below £90,000?",
    a: "Yes, a business making, or intending to make, taxable supplies may be eligible to register voluntarily below the threshold. Consider the effect on your prices, customers, recoverable input VAT and reporting obligations. HMRC decides whether the application meets the conditions.",
  },
  {
    q: "Does a non-resident owner automatically make VAT registration compulsory?",
    a: "No. Overseas ownership does not by itself make a UK company a non-established taxable person. Establishment depends on the business’s actual management, activities and resources, not only its incorporation or registered office. If a business is genuinely non-established and makes taxable UK supplies, the normal threshold may not apply; exceptions and the place-of-supply rules still need checking.",
  },
  {
    q: "Do Amazon FBA sellers with UK stock need UK VAT registration?",
    a: "Holding stock in the UK can create UK VAT obligations, particularly for an overseas business. But the answer depends on establishment, ownership of the goods, customers, marketplace rules and who accounts for VAT on each sale. Amazon’s collection of VAT on some sales does not automatically remove every seller obligation. Review the actual trading model rather than assuming every FBA seller has the same position.",
  },
  {
    q: "Can I charge VAT while my registration is pending?",
    a: "You must not show VAT as VAT on an invoice until you have your VAT registration number. You may increase prices to allow for VAT you will need to pay from your effective registration date. Once the number arrives, issue the appropriate VAT invoices for that period in line with HMRC guidance. Keep clear records and explain any later invoice adjustment to your customers.",
  },
  {
    q: "What information will HMRC need?",
    a: "Expect business and contact details, establishment and trading information, taxable turnover and the registration date, plus bank and applicant details where required. HMRC may request contracts, invoices or other evidence. Requirements depend on the application; a passport alone is not a complete VAT application.",
  },
  {
    q: "Are VAT returns included in the £144?",
    a: "No. The £144 total is for registration assistance. VAT returns, digital bookkeeping, Making Tax Digital software and ongoing tax advice are not included and need a separate agreement. After approval, check your effective date, return periods and payment deadlines.",
  },
  {
    q: "Is a VAT number the same as an EORI number?",
    a: "No. A VAT number is for VAT accounting and reporting. An EORI number identifies a business in customs procedures for goods. A business can need both, either or neither depending on its activities. VAT registration is not a prerequisite for obtaining an EORI number.",
  },
  {
    q: "Can I apply to HMRC myself?",
    a: "Yes. You can apply directly through GOV.UK without an HMRC fee. Our charge is for professional preparation and registration assistance, not preferential access to HMRC or guaranteed approval.",
  },
] as const;

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "VAT Registration Assistance",
      description:
        "UK VAT registration assistance: £144 total. For non-resident founders, overseas companies and Amazon FBA sellers. Eligibility review, application preparation and agreed submission.",
      url: "https://www.sevenoakprestige.com/services/vat-registration-uk",
      provider: {
        "@type": "Organization",
        name: "Seven Oak Prestige Ltd",
      },
      offers: {
        "@type": "Offer",
        price: 144,
        priceCurrency: "GBP",
        url: "https://www.sevenoakprestige.com/services/vat-registration-uk",
        description:
          "Customer total £144 for Seven Oak professional registration assistance. HMRC charges no registration fee.",
      },
    },
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
          name: "VAT Registration Assistance",
          item: "https://www.sevenoakprestige.com/services/vat-registration-uk",
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

function ServiceOrderActions() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-service-order="vat"
          data-payment="true"
          className="btn-gold w-full sm:w-auto gap-2.5"
        >
          <CreditCard aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Pay £144 — Start VAT Registration</span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold underline-offset-4 hover:underline"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Ask on WhatsApp</span>
        </a>
        <a
          href={EMAIL_HREF}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold underline-offset-4 hover:underline"
        >
          <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Contact by email</span>
        </a>
      </div>
      <p className="max-w-[34rem] text-xs leading-relaxed text-muted-foreground">
        Payment starts onboarding, subject to service acceptance and any required identity/AML
        checks. It does not authorise address use or guarantee HMRC approval.
      </p>
      <p className="max-w-[34rem] text-xs leading-relaxed text-muted-foreground">
        One-off assistance payment. Choose GBP for the advertised price; other currencies and
        conversion fees may differ.
      </p>
      <p className="max-w-[34rem] text-xs leading-relaxed text-muted-foreground">
        Read our{" "}
        <Link href="/terms" className="underline hover:text-gold">
          terms
        </Link>{" "}
        and{" "}
        <Link href="/refund" className="underline hover:text-gold">
          refund policy
        </Link>{" "}
        before paying. Ask us to clarify their application to this service if needed.
      </p>
    </div>
  );
}

function VatRegistrationVisual() {
  return (
    <figure
      className="m-0 border border-border p-5 text-foreground"
      aria-label="VAT accounting diagram: taxable sales, records and VAT returns"
    >
      <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.12em] text-gold">
        <FileText aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span>VAT / BUSINESS RECORDS</span>
      </div>
      <div className="mt-4 flex justify-between gap-4 border-b border-border py-3.5 text-xs sm:text-[0.8rem]">
        <span>Taxable sales</span>
        <span className="text-gold">01</span>
      </div>
      <div className="flex justify-between gap-4 border-b border-border py-3.5 text-xs sm:text-[0.8rem]">
        <span>Purchase records</span>
        <span className="text-gold">02</span>
      </div>
      <div className="flex justify-between gap-4 border-b border-border py-3.5 text-xs sm:text-[0.8rem]">
        <span>VAT accounting</span>
        <span className="text-gold">03</span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 font-display text-lg">
        <span>Registration is the beginning</span>
        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold" />
      </div>
      <figcaption className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground">
        Clear records. Correct reporting.
      </figcaption>
    </figure>
  );
}

function SourceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] leading-relaxed text-gold underline-offset-4 hover:underline"
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
    </a>
  );
}

export default function VATRegistrationServicePageEn() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON_LD) }}
      />

      <main>
        {/* ── HERO SECTION ── */}
        <section className="section-dark border-b border-border pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap gap-2 text-xs text-muted-foreground"
            >
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground">
                VAT Registration Assistance
              </span>
            </nav>

            <p className="eyebrow">VAT Registration Assistance — £144 total</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              UK VAT Registration Service for Non-Residents and Overseas Companies
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Find out whether you must register, then send HMRC an application that matches how
              your business really trades. Clear scope, one total price.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">
              For UK limited companies with overseas owners, overseas companies making UK supplies,
              Amazon FBA sellers with UK stock, and UK businesses nearing the £90,000 threshold.
            </p>

            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              <div>
                <p className="font-display text-4xl leading-tight sm:text-[2.75rem]">
                  £144
                  <span className="ml-3 font-sans text-sm text-muted-foreground">
                    total · professional assistance, scope confirmed in writing
                  </span>
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>
              <VatRegistrationVisual />
            </div>

            <dl className="mt-8 grid gap-px border border-border bg-border md:grid-cols-4">
              {QUICK_FACTS.map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">{k}</dt>
                  <dd className="mt-1.5 text-xs sm:text-[0.85rem] leading-relaxed text-foreground/90">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── ON THIS PAGE NAV ── */}
        <nav
          aria-label="On this page"
          className="section-parchment border-b border-border py-4 px-5 sm:px-6 text-xs"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3">
            <a href="#eligibility" className="hover:underline underline-offset-4">
              Eligibility
            </a>
            <a href="#scope" className="hover:underline underline-offset-4">
              What’s included
            </a>
            <a href="#process" className="hover:underline underline-offset-4">
              How it works
            </a>
            <a href="#cost" className="hover:underline underline-offset-4">
              Cost &amp; timing
            </a>
            <a href="#faqs" className="hover:underline underline-offset-4">
              FAQs
            </a>
          </div>
        </nav>

        {/* ── DEFINITION ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">VAT number UK</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              What is UK VAT registration?
            </h2>
            <div className="mt-7">
              <p className="max-w-3xl text-base leading-relaxed">
                VAT registration brings a business into the UK VAT system. HMRC issues a VAT
                registration number and confirms the effective registration date. The business then
                accounts for VAT on relevant sales, keeps VAT records and submits returns.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5">
                <span className="text-sm">VAT = tax accounting</span>
                <span className="text-sm text-muted-foreground">
                  EORI = customs identification
                </span>
                <Link
                  href="/services/eori-registration-uk"
                  className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] text-gold underline-offset-4 hover:underline"
                >
                  <span>EORI Registration Assistance</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ELIGIBILITY ── */}
        <section
          id="eligibility"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The right starting point</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Who needs to register for UK VAT?
            </h2>
            <div className="mt-7">
              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {ELIGIBILITY_TESTS.map(([t, rule, who]) => (
                  <div key={t} className="border border-border bg-background p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">{t}</p>
                    <p className="mt-2 font-display text-lg leading-snug">{rule}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Applies to: {who}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">
                {ELIGIBILITY_FEATURES.map(([title, text]) => (
                  <article key={title} className="border-t border-border pt-5">
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-7 border-l-2 border-gold pl-5">
                <h3 className="font-display text-xl">
                  A UK company is not automatically UK-established for VAT
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Equally, a non-resident founder does not automatically make it non-established.
                  HMRC looks at the actual business: central administration, management and
                  permanent resources. Incorporation or a registered office address alone does not
                  settle the question.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-5">
                <SourceLink href={HMRC_SOURCES.vatThreshold}>
                  HMRC registration thresholds
                </SourceLink>
                <SourceLink href={HMRC_SOURCES.vatRules}>
                  VAT Notice 700/1: eligibility rules
                </SourceLink>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Businesses making only VAT-exempt or out-of-scope supplies do not normally register
                under these turnover rules. Check your supplies and any exception with HMRC rather
                than treating the threshold as a universal test.
              </p>
            </div>
          </div>
        </section>

        {/* ── WORKED EXAMPLES ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Worked examples</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              VAT registration for overseas companies: two common cases
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2">
                {EXAMPLES.map((ex) => (
                  <article key={ex.title} className="border border-border bg-background p-5">
                    <h3 className="font-display text-xl">{ex.title}</h3>
                    <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                      <div>
                        <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                          The facts
                        </dt>
                        <dd className="mt-1">{ex.facts}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                          It depends on
                        </dt>
                        <dd className="mt-1 text-muted-foreground">{ex.dependsOn}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                          Likely outcome
                        </dt>
                        <dd className="mt-1">{ex.outcome}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Illustrative examples, not customer case studies or individual tax advice.
              </p>
              <div className="mt-5">
                <SourceLink href={HMRC_SOURCES.marketplaceGuidance}>
                  HMRC guidance for overseas marketplace sellers
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCOPE TABLE ── */}
        <section
          id="scope"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">VAT registration cost: what £144 covers</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Included, separate, or not offered
            </h2>
            <div className="mt-7">
              <div className="overflow-x-auto border border-border">
                <table className="w-full min-w-[36rem] border-collapse text-xs sm:text-[0.85rem]">
                  <thead>
                    <tr className="bg-background">
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCOPE_ROWS.map((row) => (
                      <tr key={row.item}>
                        <th
                          scope="row"
                          className="border-b border-border py-3.5 px-4 text-left align-top font-semibold"
                        >
                          {row.item}
                        </th>
                        <td className="border-b border-border py-3.5 px-4 align-top">
                          <span
                            className={`inline-block whitespace-nowrap border px-2 py-0.5 text-xs ${
                              row.status === "included"
                                ? "border-gold text-foreground"
                                : row.status === "separate"
                                  ? "border-border text-foreground"
                                  : "border-border text-muted-foreground"
                            }`}
                          >
                            {row.status === "included"
                              ? "Included"
                              : row.status === "separate"
                                ? "Separate scope"
                                : "Not offered"}
                          </span>
                        </td>
                        <td className="border-b border-border py-3.5 px-4 align-top text-muted-foreground">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                HMRC makes the decision and may ask for more evidence. We don’t promise a number, an
                approval date, or acceptance by a bank or marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS AFTER YOU GET STARTED ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">No surprises</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              What happens after you get started
            </h2>
            <div className="mt-7">
              <ol className="grid list-none gap-4 p-0 md:grid-cols-4">
                {AFTER_ENQUIRY.map(([title, text], i) => (
                  <li key={title} className="border border-border bg-background p-5">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 place-items-center border border-border font-display text-gold"
                    >
                      {i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-muted-foreground">
                Our preparation time depends on how quickly we receive complete information; we
                don’t promise a fixed turnaround.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROCESS (6 STAGES) ── */}
        <section id="process" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">6 clear stages</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              How our VAT registration assistance works
            </h2>
            <div className="mt-7">
              <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {PROCESS_STAGES.map(([title, text], index) => (
                  <li key={title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid h-9 w-9 shrink-0 place-items-center border border-border font-display text-gold"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── INFORMATION NEEDED ── */}
        <section className="section-parchment py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Prepare before you apply</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Information needed for VAT registration
            </h2>
            <div className="mt-7">
              <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                {DOCUMENTS.map((text) => (
                  <li key={text} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="text-gold">
                      —
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                HMRC may request additional trading evidence. Requirements vary by business and
                application route. Do not send passports, passwords or sensitive financial records
                in an initial email or WhatsApp message. Ask for the approved secure document
                channel.
              </p>
              <div className="mt-5">
                <SourceLink href={HMRC_SOURCES.vatApply}>
                  HMRC application information checklist
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── COST & TIMING ── */}
        <section id="cost" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Transparent pricing &amp; timing</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              £144 total for VAT registration assistance
            </h2>
            <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="border-t border-gold border-b border-b-border py-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                    Registration assistance
                  </p>
                  <p className="mt-3 font-display text-4xl leading-tight sm:text-[2.75rem]">
                    £144
                    <span className="ml-3 font-sans text-sm text-muted-foreground">total</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed">
                    Information review, application preparation and agreed submission arrangements.
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The price is for Seven Oak professional assistance. Ongoing VAT returns and
                  bookkeeping are separate.
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl">Allow several weeks for HMRC review</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  HMRC may ask for more information, so there is no fixed approval date. VAT Notice
                  700/1 says to contact the VAT Registration Service if you have not heard after 40
                  working days, to check that the application was received. This is follow-up
                  guidance, not an approval deadline or a guaranteed processing time.
                </p>
                <h3 className="mt-7 font-display text-xl">Applying directly through GOV.UK</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You can also apply directly through GOV.UK without an HMRC fee. Our charge is for
                  professional preparation and registration assistance.
                </p>
                <div className="mt-5 flex flex-col items-start gap-4">
                  <SourceLink href={HMRC_SOURCES.vatApply}>Apply directly with HMRC</SourceLink>
                  <SourceLink href={HMRC_SOURCES.vatRules}>
                    Read HMRC’s timing guidance
                  </SourceLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AFTER THE OUTCOME ── */}
        <section className="section-parchment py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">After the outcome</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Registration starts your ongoing VAT responsibilities
            </h2>
            <div className="mt-7">
              <div className="grid gap-7 lg:grid-cols-3 lg:gap-10">
                {AFTER_OUTCOME_FEATURES.map(([title, text]) => (
                  <article key={title} className="border-t border-border pt-5">
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6">
                <SourceLink href={HMRC_SOURCES.mtd}>
                  GOV.UK VAT returns and digital records
                </SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section id="faqs" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Direct answers</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              UK VAT registration FAQs
            </h2>
            <div className="mt-7 max-w-4xl border-t border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-sm font-semibold sm:text-base">
                    <span>{q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENQUIRE CTA ── */}
        <section id="enquire" className="section-dark scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Seven Oak Prestige Ltd</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl">
              Let’s understand your VAT position first
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Tell us your business activity and the countries involved. We’ll discuss the
              appropriate registration support and confirm scope before you proceed.
            </p>
            <div className="mt-6">
              <ServiceOrderActions />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No sensitive documents needed for an initial enquiry.
            </p>
          </div>
        </section>

        {/* ── RELATED SUPPORT & GUIDES ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Related support</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Keep registration and ongoing obligations connected
            </h2>
            <div className="mt-7 grid gap-8 md:grid-cols-2">
              <div className="flex flex-col items-start gap-4 text-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                  Related services
                </p>
                <Link
                  href="/services/eori-registration-uk"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>EORI Registration Assistance</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/services/uk-accounting-non-residents"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>UK accounting &amp; compliance</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/services/uk-company-formation-for-non-residents"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>UK company formation for non-residents</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>UK business guides</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>

              <div className="flex flex-col items-start gap-4 text-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                  Related guides from our blog
                </p>
                <Link
                  href="/blog/amazon-fba-uk-company-non-residents-2026"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>Amazon FBA UK for Non-Residents: Do You Need a UK Company? (2026)</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/blog/uk-ecommerce-company-non-residents-2026"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>UK E-Commerce Company for Non-Residents | VAT &amp; Banking 2026</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <Link
                  href="/blog/hmrc-business-tax-account-non-resident-uk-company"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>HMRC Business Tax Account for Non-Resident UK Companies | 2026</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

