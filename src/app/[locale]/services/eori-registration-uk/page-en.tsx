"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  Mail,
  MessageCircle,
  Package,
  Plus,
  Ship,
  Truck,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/dRm28j58A5nveEBe3Ofw40n";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const ASK_TEXT = "I would like to request eori registration assistance (£60 total)";
const EMAIL_SUBJECT = "EORI Registration Assistance request — £60";
const EMAIL_BODY = `Hello Seven Oak Prestige,\n\n${ASK_TEXT}.\nCompany name (if formed):\nBusiness activity:\nCountries involved:\n\nPlease confirm the scope and next steps.`;
const WHATSAPP_TEXT = `Hello Seven Oak Prestige, ${ASK_TEXT}. Please confirm the scope and next steps.`;

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const HMRC_SOURCES = {
  eoriApply: "https://www.gov.uk/eori/apply-for-eori",
  eoriProcess:
    "https://www.gov.uk/guidance/economic-operators-registration-and-identification-eori/registration-process",
  eoriRules:
    "https://www.gov.uk/guidance/economic-operators-registration-and-identification-eori/introduction",
  eoriCheck: "https://www.gov.uk/check-eori-number",
  eoriRequirements: "https://www.gov.uk/eori",
} as const;

const QUICK_FACTS = [
  ["Total price", "£60 total for professional GB EORI application assistance."],
  [
    "Included",
    "Requirement check, information review, application preparation, agreed submission, number confirmed.",
  ],
  [
    "HMRC decides the outcome",
    "HMRC issues the number and may run checks first. Issue is never guaranteed.",
  ],
  ["HMRC timing", "Usually immediate. Up to 5 working days if HMRC runs checks."],
] as const;

type ScopeStatus = "included" | "separate" | "not-offered";

const JURISDICTION_ROWS: readonly {
  code: string;
  usedFor: string;
  support: string;
  status: ScopeStatus;
}[] = [
  {
    code: "GB EORI",
    usedFor:
      "Moving goods between Great Britain (England, Scotland, Wales) and other countries.",
    support: "GB application assistance — £60 total",
    status: "included",
  },
  {
    code: "XI EORI",
    usedFor: "Certain Northern Ireland customs activity. You need a GB EORI first.",
    support: "Not in the £60 — confirm in writing first",
    status: "separate",
  },
  {
    code: "EU EORI",
    usedFor: "EU customs activity. Issued by an EU member state, not HMRC.",
    support: "Not offered",
    status: "not-offered",
  },
];

const EXAMPLES = [
  {
    title: "New UK company importing from China",
    facts:
      "A newly formed UK limited company buys stock in Shenzhen for delivery to its UK customers.",
    dependsOn:
      "Whether the company is the importer named on the declaration, and which details its forwarder needs.",
    outcome:
      "The company will generally need a GB EORI before goods arrive. VAT registration is not required to apply.",
  },
  {
    title: "Non-UK seller shipping to Great Britain",
    facts: "A company in the US sells goods to GB customers and wants to act as importer.",
    dependsOn:
      "Its customs role and whether GOV.UK's conditions for a business not established in the UK apply; otherwise a representative may be needed.",
    outcome:
      "It may be able to get a GB EORI, or may need a customs representative. We check this before anything is submitted.",
  },
] as const;

const SCOPE_ROWS: readonly { item: string; status: ScopeStatus; note: string }[] = [
  {
    item: "Checking whether you need a GB EORI",
    status: "included",
    note: "And whether you already have one",
  },
  {
    item: "Preparing the GB EORI application",
    status: "included",
    note: "With your approval",
  },
  {
    item: "Agreed submission arrangements",
    status: "included",
    note: "Who submits and with what authority, confirmed in writing",
  },
  {
    item: "Confirming and checking the number issued",
    status: "included",
    note: "Using the GOV.UK checker",
  },
  {
    item: "XI (Northern Ireland) EORI",
    status: "separate",
    note: "Not in the £60; confirm in writing first",
  },
  {
    item: "EU EORI applications",
    status: "not-offered",
    note: "Issued by EU member states",
  },
  {
    item: "Customs declarations, duties, licences, freight",
    status: "not-offered",
    note: "Use a customs agent or forwarder",
  },
];

const AFTER_ENQUIRY = [
  [
    "Payment starts onboarding",
    "After Stripe confirms payment, onboarding begins with your goods, trade route and customs role. Payment does not guarantee a GB EORI or service acceptance.",
  ],
  [
    "We confirm scope in writing",
    "GB application assistance for £60 total, who submits and what is excluded, before work proceeds. If eligibility is unclear, contact us before paying.",
  ],
  [
    "You share details securely",
    "Through the secure channel we give you, never by open email or WhatsApp.",
  ],
  [
    "You approve, then it goes to HMRC",
    "HMRC usually issues the number straight away, or within 5 working days after checks.",
  ],
] as const;

const PROCESS_STAGES = [
  [
    "Identify the requirement",
    "Discuss the goods, customs role and countries involved. Check whether you already have a number and whether GB, XI or another jurisdiction is relevant.",
  ],
  [
    "Collect business details",
    "Gather the legal entity, business address and activity information. Confirm who is authorised to apply and request any evidence through an approved secure channel.",
  ],
  [
    "Prepare the application",
    "Check the required fields and identification details with you. VAT information is used if applicable; being VAT registered is not a general prerequisite.",
  ],
  [
    "Apply through HMRC",
    "Use the appropriate GB application route with your authority. If XI is needed, a GB application comes first. Confirm any XI assistance scope before proceeding.",
  ],
  [
    "Check the outcome",
    "Confirm the number issued and how to check it. Share it with your customs agent where needed; customs declarations, duties and any licences remain separate.",
  ],
] as const;

const DOCUMENTS = [
  "Legal business name, address and contact details",
  "Unique Taxpayer Reference (UTR), where applicable",
  "Business start date and Standard Industrial Classification (SIC) code",
  "Government Gateway access or the appropriate authorised application route",
  "VAT number and effective date, if VAT registered",
  "Identity details such as a National Insurance number where the route requires them",
] as const;

const AFTER_OUTCOME_FEATURES = [
  [
    "Validate the number",
    "Use GOV.UK to check a GB EORI. Follow its directions for EU or XI validation. A valid number is not proof of VAT status or permission to import a particular product.",
  ],
  [
    "Brief your customs agent",
    "Share the correct number and agree who prepares declarations. Clarify representation and liability before your goods travel, rather than at the border.",
  ],
  [
    "Keep other obligations separate",
    "Declarations, licences, product requirements, customs duties and import VAT may still apply. EORI identifies you; it does not replace these requirements.",
  ],
] as const;

const FAQS = [
  {
    q: "What does professional assistance add?",
    a: "You pay for practical help, not access to HMRC. The proposed assistance covers reviewing your registration circumstances and required information, checking application details with you, agreeing submission arrangements and explaining the outcome. Confirm the exact services and authority in writing before proceeding. Any HMRC query support must be separately agreed within that scope; unlimited chasing, appeals and ongoing representation are not included. Paid assistance does not guarantee suitability, approval or faster processing.",
  },
  {
    q: "How much does EORI registration cost?",
    a: "Seven Oak Prestige charges £60 total for professional GB EORI application assistance. HMRC charges no issuance fee, so the £60 is entirely for our assistance, not a customs duty or government charge.",
  },
  {
    q: "How long does it take to get a GB EORI number?",
    a: "HMRC normally issues a GB EORI immediately. If checks are needed, it can take up to five working days. That is HMRC’s published timing, not a Seven Oak submission promise or an approval guarantee. XI applications can take up to five working days.",
  },
  {
    q: "Do I need VAT registration before applying for an EORI?",
    a: "No. You do not have to be VAT registered to obtain an EORI number. If you are VAT registered, provide the relevant VAT details when requested. VAT registration and EORI registration serve different purposes and must be assessed separately.",
  },
  {
    q: "What is the difference between GB, XI and EU EORI numbers?",
    a: "GB numbers are used for relevant Great Britain customs activities. An XI number is required for certain Northern Ireland customs activities and you must apply for a GB number first if you do not already have one. An EU EORI is issued by an EU member state for relevant EU customs activities. A GB number is not a substitute for an EU EORI; this page does not offer an EU application service.",
  },
  {
    q: "Can a non-UK business apply for a GB EORI?",
    a: "A business not established in the UK may need a GB EORI for specific customs activities, but eligibility depends on its role. GOV.UK lists the circumstances and exceptions. In other cases a customs representative may need to act for it. Non-UK ownership of a UK company is not, by itself, a reason to reject or approve an application.",
  },
  {
    q: "Do Amazon sellers need an EORI number?",
    a: "A seller acting as the importer of goods into Great Britain will generally need a GB EORI for the customs process. Buying goods already in the UK or selling services is different. Confirm who is the importer and who submits declarations with your freight forwarder or customs agent; a marketplace account alone does not establish the requirement.",
  },
  {
    q: "Can my customs agent’s EORI replace my own?",
    a: "Not automatically. The correct numbers depend on your customs role and the type of representation. Your agent may need your EORI as well as its own. Agree the declaration arrangements and responsibility for duties before goods travel, especially if your business is not established in the UK.",
  },
  {
    q: "How do I check an existing EORI number?",
    a: "Use the official GOV.UK Check an EORI number service for a GB number. A valid result does not prove creditworthiness, VAT status or permission to import specific goods. Use the relevant EU validation service for EU or XI checks as directed by GOV.UK.",
  },
  {
    q: "Does an EORI number authorise imports or remove customs charges?",
    a: "No. It identifies the business for customs purposes. You may still need declarations, licences, product checks and payment of import VAT or customs duties. EORI registration does not guarantee border clearance, banking approval or marketplace acceptance.",
  },
  {
    q: "Is an XI application included in the £60?",
    a: "The £60 total is for GB EORI application assistance only. XI support and its price or inclusion have not been confirmed. Tell us if Northern Ireland is involved so we can confirm the required number and any XI support in writing before you proceed. Do not assume an additional XI application or an EU EORI application is included.",
  },
  {
    q: "Can I apply for an EORI number myself?",
    a: "Yes. You can apply directly through GOV.UK without an HMRC fee. Our charge is for professional preparation and application assistance; it does not accelerate HMRC checks or guarantee approval. Check whether your business already has the correct number before applying again.",
  },
] as const;

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "EORI Registration Assistance",
      description:
        "GB EORI registration assistance: £60 total. For UK importers, exporters and eligible non-UK companies. Requirement check, application preparation and number confirmed. XI and EU not included.",
      url: "https://www.sevenoakprestige.com/services/eori-registration-uk",
      provider: {
        "@type": "Organization",
        name: "Seven Oak Prestige Ltd",
      },
      offers: {
        "@type": "Offer",
        price: 60,
        priceCurrency: "GBP",
        url: "https://www.sevenoakprestige.com/services/eori-registration-uk",
        description:
          "Customer total £60 for Seven Oak professional registration assistance. HMRC charges no registration fee.",
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
          name: "EORI Registration Assistance",
          item: "https://www.sevenoakprestige.com/services/eori-registration-uk",
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
          data-service-order="eori"
          data-payment="true"
          className="btn-gold w-full sm:w-auto gap-2.5"
        >
          <CreditCard aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span>Pay £60 — Start GB EORI Registration</span>
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

function EoriRegistrationVisual() {
  return (
    <figure
      className="m-0 border-b border-border py-5 text-foreground"
      aria-label="Freight diagram showing goods travelling by road and sea with a customs identification number"
    >
      <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.12em] text-gold">
        <Package aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span>EORI / CUSTOMS IDENTIFICATION</span>
      </div>
      <svg
        viewBox="0 0 600 230"
        role="img"
        aria-label="Original line illustration of a container ship carrying freight"
        className="mt-4 h-auto w-full fill-none stroke-gold stroke-2"
      >
        <path d="M40 156h515l-38 47H105zM92 152V60h105v92M92 91h105M127 60v92M161 60v92M206 152V93h106v59M241 93v59M277 93v59M324 152v-39h99v39M357 113v39M390 113v39M456 152V77h47v75M456 100h47M467 77V52h25v25M25 219h550" />
      </svg>
      <div className="mt-3 flex items-center justify-between gap-2 text-gold">
        <Truck aria-hidden="true" className="h-5 w-5 shrink-0" />
        <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
        <span className="text-xs sm:text-[0.8rem] text-foreground">GB EORI</span>
        <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
        <Ship aria-hidden="true" className="h-5 w-5 shrink-0" />
      </div>
      <figcaption className="mt-4 text-[0.65rem] leading-relaxed text-muted-foreground">
        A number for customs. Not an import licence.
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

export default function EORIRegistrationServicePageEn() {
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
                EORI Registration Assistance
              </span>
            </nav>

            <p className="eyebrow">GB EORI Registration Assistance — £60 total</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              GB EORI Number Registration Service for Importers and Non-UK Companies
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Get the right EORI number before your goods move. We check you need a GB EORI, prepare
              the application with you and confirm the number HMRC issues.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/90">
              For businesses importing goods into, or exporting from, Great Britain — including new
              UK companies, Amazon sellers acting as importer, and eligible non-UK businesses.
            </p>

            <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              <div>
                <p className="font-display text-4xl leading-tight sm:text-[2.75rem]">
                  £60
                  <span className="ml-3 font-sans text-sm text-muted-foreground">
                    total · professional assistance, scope confirmed in writing
                  </span>
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>
              <EoriRegistrationVisual />
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
            <p className="eyebrow">EORI number UK</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              What is an EORI number?
            </h2>
            <div className="mt-7">
              <p className="max-w-3xl text-base leading-relaxed">
                An Economic Operators Registration and Identification (EORI) number identifies a
                business in customs procedures. A GB EORI is generally needed to move goods between
                Great Britain and other countries. It is not a VAT registration, customs licence or
                guarantee that goods can be imported.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5">
                <span className="text-sm">EORI = customs identification</span>
                <span className="text-sm text-muted-foreground">
                  VAT registration is not required to get an EORI
                </span>
                <Link
                  href="/services/vat-registration-uk"
                  className="inline-flex items-center gap-2 text-xs sm:text-[0.8rem] text-gold underline-offset-4 hover:underline"
                >
                  <span>VAT Registration Assistance</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── JURISDICTIONS (ELIGIBILITY) ── */}
        <section
          id="eligibility"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Get the jurisdiction right</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              GB, XI or EU: which EORI do you need?
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
                        Number
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        Used for
                      </th>
                      <th
                        scope="col"
                        className="border-b border-border py-3.5 px-4 text-left text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        What Seven Oak supports
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {JURISDICTION_ROWS.map((row) => (
                      <tr key={row.code}>
                        <th
                          scope="row"
                          className="border-b border-border py-3.5 px-4 text-left align-top font-display font-semibold text-gold"
                        >
                          {row.code}
                        </th>
                        <td className="border-b border-border py-3.5 px-4 align-top">
                          {row.usedFor}
                        </td>
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
                            {row.support}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                A non-UK business may need a GB EORI for specific customs activities. Eligibility
                depends on its role, not merely where its owner lives. A customs representative may
                be required in other circumstances. Tell us your route and who is acting as importer
                before applying.
              </p>

              <div className="mt-6 flex flex-wrap gap-5">
                <SourceLink href={HMRC_SOURCES.eoriRequirements}>
                  Check whether you need an EORI
                </SourceLink>
                <SourceLink href={HMRC_SOURCES.eoriApply}>HMRC GB and XI applications</SourceLink>
                <SourceLink href={HMRC_SOURCES.eoriRules}>EORI jurisdiction guidance</SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── WORKED EXAMPLES ── */}
        <section className="py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Worked examples</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              GB EORI for imports: two common cases
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
            </div>
          </div>
        </section>

        {/* ── SCOPE TABLE ── */}
        <section
          id="scope"
          className="section-parchment scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">What £60 covers</p>
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

        {/* ── PROCESS (5 STAGES) ── */}
        <section id="process" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">5 clear stages</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              How our EORI application assistance works
            </h2>
            <div className="mt-7">
              <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                {PROCESS_STAGES.map(([title, text], index) => (
                  <li key={title} className="flex gap-4 lg:flex-col">
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

        {/* ── DETAILS NEEDED ── */}
        <section className="section-parchment py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Prepare before you apply</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              Details needed for an EORI number application
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
                Businesses based outside the UK do not need a UK UTR, SIC code or National Insurance
                number for the GB application. Requirements depend on the applicant and route. Do
                not send passports, passwords or sensitive financial records in an initial email or
                WhatsApp message. Ask for the approved secure document channel.
              </p>
              <div className="mt-5">
                <SourceLink href={HMRC_SOURCES.eoriApply}>
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
              £60 total for GB EORI registration assistance
            </h2>
            <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="border-t border-gold border-b border-b-border py-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                    GB EORI assistance
                  </p>
                  <p className="mt-3 font-display text-4xl leading-tight sm:text-[2.75rem]">
                    £60
                    <span className="ml-3 font-sans text-sm text-muted-foreground">total</span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed">
                    GB requirement check, application preparation and agreed submission
                    arrangements.
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The price is for Seven Oak professional assistance. Customs duties, import VAT and
                  declaration services are separate.
                </p>
                <div className="mt-6">
                  <ServiceOrderActions />
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl">
                  GB: usually immediate, unless checks are needed
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  HMRC normally issues GB numbers immediately. Checks can take up to 5 working days.
                  XI applications can take up to 5 working days and require a GB application first.
                  These are HMRC timings, not a guaranteed Seven Oak submission turnaround.
                </p>
                <h3 className="mt-7 font-display text-xl">Applying directly through GOV.UK</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  You can also apply directly through GOV.UK without an HMRC fee. Our charge is for
                  professional preparation and registration assistance.
                </p>
                <div className="mt-5 flex flex-col items-start gap-4">
                  <SourceLink href={HMRC_SOURCES.eoriApply}>Apply directly with HMRC</SourceLink>
                  <SourceLink href={HMRC_SOURCES.eoriProcess}>
                    Read HMRC’s timing guidance
                  </SourceLink>
                  <SourceLink href={HMRC_SOURCES.eoriRules}>HMRC EORI introduction</SourceLink>
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
              Use the EORI number correctly — and check it
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
                <SourceLink href={HMRC_SOURCES.eoriCheck}>Check a GB EORI number</SourceLink>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section id="faqs" className="scroll-mt-28 py-12 px-5 sm:py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Direct answers</p>
            <h2 className="mt-3 max-w-3xl font-display text-2xl leading-tight sm:text-3xl">
              UK EORI registration FAQs
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
              Get your customs identification in order
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
                  href="/services/vat-registration-uk"
                  className="inline-flex items-center gap-2 text-gold underline-offset-4 hover:underline"
                >
                  <span>VAT Registration Assistance</span>
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

