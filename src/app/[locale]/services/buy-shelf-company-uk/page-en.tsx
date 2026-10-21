"use client";

import Link from "next/link";
import { Mail, MessageCircle, Plus, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";
const SUBJECT = "UK shelf company enquiry";

const ENQUIRY_BODY = `Hello Seven Oak Prestige,\n\nI would like to discuss ${SUBJECT.toLowerCase()}.\nCountry of residence:\nCompany or intended activity:\nOwnership structure:\nRequired support:\n\nPlease advise the next steps. I will not attach identity documents to this enquiry.`;

const EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(ENQUIRY_BODY)}`;
const WHATSAPP_LINK = `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hello Seven Oak Prestige, I would like to discuss ${SUBJECT.toLowerCase()}. Please advise the next steps.`)}`;

const FAQS = [
  {
    q: "What is a UK shelf company?",
    a: "A shelf company is an existing registered company formed before it is offered to a buyer, often intended to remain dormant until acquired. A ready-made company is not necessarily a trading business. Its actual status and history must be checked rather than assumed.",
  },
  {
    q: "How do I buy an off-the-shelf company?",
    a: "A typical acquisition involves buying the existing shares under an agreed contract, registering the transfer and arranging any director, PSC and address changes. Completion depends on due diligence, satisfactory KYC and AML checks, agreed terms and the required filings.",
  },
  {
    q: "Can a non-resident acquire a UK shelf company?",
    a: "Non-residents can generally own shares in a UK private limited company. Acceptance of a particular transaction depends on the parties, documents, compliance checks and company restrictions. Your home-country tax and exchange-control rules may also need professional review.",
  },
  {
    q: "Are shelf companies for sale currently available?",
    a: "Availability is confirmed by enquiry only. This page is not an inventory or a promise that a suitable company is available. Tell us your intended activity, ownership structure and requirements so we can assess the request.",
  },
  {
    q: "Does a dormant company have no liabilities?",
    a: "No. Dormant status does not prove the absence of liabilities, contracts or overdue obligations. Filed accounts are only part of the evidence; review underlying records and appropriate seller disclosures with qualified advisers.",
  },
  {
    q: "Does company age prove a trading track record?",
    a: "No. The incorporation date establishes registered age, not trading history, turnover or commercial performance. Age does not guarantee access to credit, banking, contracts or supplier accounts.",
  },
  {
    q: "Does a shelf company come with a bank account or VAT number?",
    a: "Neither should be assumed or promised. In a share sale the legal entity remains the same, but a bank may reassess ownership, control and account access. Any existing VAT registration belongs to the company; its validity and reporting position need checking, and registration is not automatically granted to the buyer.",
  },
  {
    q: "How is the quotation determined?",
    a: "The quotation depends on verified company history, transaction complexity, due diligence, ownership and director changes, required filings and any separately agreed support. Scope and terms are confirmed in writing; no public price or availability is stated here.",
  },
  {
    q: "Is a new UK company a better option?",
    a: "Often, yes—particularly where you do not need an existing legal entity or cannot establish its history to your satisfaction. New incorporation avoids acquiring another company's past, although it still requires identity checks, an eligible registered office and ongoing compliance.",
  },
  {
    q: "What happens after acquisition?",
    a: "Maintain accurate statutory records and report relevant changes to Companies House and HMRC as required. Review accounts, Corporation Tax, confirmation statements and any VAT obligations. Agree responsibility for historic and upcoming filings before completion.",
  },
];

export default function ShelfCompanyPageEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sevenoakprestige.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Buy a Shelf Company in the UK: Ready-Made Companies for Non-Residents",
            item: "https://www.sevenoakprestige.com/services/buy-shelf-company-uk",
          },
        ],
      },
      {
        "@type": "Service",
        name: "UK shelf company acquisition enquiries",
        description:
          "Explore buying a UK shelf company from abroad. Understand ownership transfers, due diligence, liabilities and compliance. Enquire with Seven Oak Prestige.",
        url: "https://www.sevenoakprestige.com/services/buy-shelf-company-uk",
        provider: { "@type": "Organization", name: "Seven Oak Prestige Ltd" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="specialist-page shelf-page bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="ss-hero section-dark relative isolate overflow-hidden">
          <picture>
            <source srcSet="/assets/shelf-hero-1280.webp" media="(min-width: 641px)" />
            <img
              src="/assets/shelf-hero-640.webp"
              alt="Illustrative daylight London office with a pale executive desk, brass accents and Westminster views; not Seven Oak premises"
              width={1280}
              height={720}
              className="ss-hero-image absolute inset-0 -z-20 h-full w-full object-cover"
            />
          </picture>
          <div className="ss-hero-shade absolute inset-0 -z-10" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span aria-hidden="true" className="opacity-40">/</span>
              <span aria-current="page" className="text-foreground/80">Shelf company enquiries</span>
            </nav>

            <div className="ss-hero-copy">
              <p className="eyebrow text-gold font-semibold uppercase">Seven Oak Prestige Ltd · Shelf company enquiries</p>
              <h1 className="mt-4 sm:mt-5 text-2xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl text-foreground break-words">
                Buy a Shelf Company in the UK: Ready-Made Companies for Non-Residents
              </h1>
              <p className="mt-5 sm:mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-foreground/90">
                An existing UK limited company, acquired with a clear understanding of what comes with it. Explore a ready-made company through a considered enquiry, not an unchecked purchase.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all text-center sm:text-left"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Request Available UK Shelf Companies</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-action btn-ghost inline-flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5 text-center sm:text-left"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>

              <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Availability and suitability are confirmed by enquiry only. All proposed transactions are subject to due diligence, identity and AML checks, and agreed terms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: The short answer */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The short answer</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              A registered company. Not a clean slate.
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    A UK shelf company is an existing limited company formed before it is offered to a buyer. It is often intended to remain dormant until acquired, but that description must be supported by evidence. &ldquo;Off the shelf company&rdquo; and &ldquo;ready-made company&rdquo; usually describe the same idea.
                  </p>
                  <p>
                    You normally acquire its shares rather than incorporate a new entity. The company keeps its company number and legal identity.{" "}
                    <strong className="text-foreground">
                      Its history, obligations and potential liabilities do not disappear when ownership changes.
                    </strong>
                  </p>
                </div>
                <aside className="border-l-2 border-gold pl-6">
                  <h3 className="text-xl font-display font-semibold">Registered age is not trading history</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    An earlier incorporation date does not establish turnover, trading experience, creditworthiness or an operating business. Never present a dormant company&apos;s age as evidence that it has traded.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Choose the right route (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Choose the right route</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Off-the-shelf Ltd or a newly formed company?
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 md:grid-cols-2">
                <article className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Acquire an existing legal entity</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    A shelf acquisition may make sense where there is a specific, legitimate reason for needing an existing company and its records can be verified. You need a share transaction, agreed protections and a clear allocation of historic filing responsibilities.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Start with a new company</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    If you simply want to start a new business, fresh incorporation is often more straightforward. You choose the structure and name without acquiring another company&apos;s past. Identity checks, an eligible registered office and ongoing filings still apply.
                  </p>
                  <Link
                    href="/services/uk-company-formation-for-non-residents"
                    className="mt-5 inline-block text-sm font-semibold text-[#8a6814] hover:underline"
                  >
                    Explore new UK company formation for non-residents →
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Before you commit */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Before you commit</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Due diligence goes beyond the public register
            </h2>
            <div className="mt-7">
              <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Companies House filings are a useful starting point, not independent assurance that a company is free of risk. Request underlying records, seller disclosures and qualified legal or accounting review appropriate to the transaction.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Filing history & statutory records</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Check company status, incorporation documents, articles, share capital, ownership records, directors, PSCs, registered charges and filing deadlines. Reconcile public filings with the company&apos;s own records.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Accounts & dormant status</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Review all filed and underlying accounts, bank activity and the basis for any dormant description. Dormancy for Companies House accounts and HMRC tax purposes can differ; neither is proof of no obligations.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Liabilities & existing contracts</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Investigate debts, guarantees, litigation, employment obligations and commitments. Review contracts for change-of-control terms. A share sale leaves the company as the contracting entity, subject to those terms.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Corporation Tax & VAT</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Establish tax registrations, returns, payments and correspondence, including any outstanding liabilities. An existing VAT number is not a shortcut to a guaranteed tax status or a substitute for checking the company&apos;s position.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Ownership & authority</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Confirm the seller owns the shares and can transfer them, subject to the articles and any agreements. Understand the beneficial owners, purchase funding and intended business activity before completion.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Banking & payment facilities</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Do not assume an account is included or will remain usable. Obtain the provider&apos;s requirements for changes of ownership, control, signatories and activity. Approval and continued access remain the provider&apos;s decision.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: How acquisition works (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">How acquisition works</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              From initial enquiry to an agreed handover
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">01</p>
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Explain your requirements</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Tell us your residence, proposed activity, ownership structure and why you need an existing company. We assess the enquiry and confirm whether there is an appropriate next step; no stock is promised.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">02</p>
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Review records & complete checks</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Any proposed company needs satisfactory legal and financial due diligence. Complete KYC and AML checks through the approved secure channel and agree the transaction scope, quotation and completion conditions.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">03</p>
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Complete & update the records</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Arrange the share transfer under agreed documentation and applicable registration and tax formalities. Update the register of members; handle director, PSC and address changes and required filings, then agree the ongoing compliance handover.
                  </p>
                </article>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#5b6472]">
                Share ownership, director appointments and PSC disclosures are distinct steps. A share sale is not completed simply by changing a director on Companies House. Applicable identity-verification requirements must also be met.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Availability & quotation */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Availability & quotation</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Shelf companies for sale: enquire, then evaluate
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    We do not publish an inventory or indicative prices. If a suitable option can be considered, its verified details, scope and terms must be assessed before any commitment. A request is not a reservation or confirmation of availability.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={EMAIL_LINK}
                      className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Request Available UK Shelf Companies</span>
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ss-action btn-ghost inline-flex items-center gap-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Discuss on WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold">What influences the quotation?</h3>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Verified history, existing records and any issues requiring review</li>
                    <li>Ownership structure, transaction terms and due-diligence complexity</li>
                    <li>Director, PSC, address and filing work within the agreed scope</li>
                    <li>Separately agreed accounting, address or post-acquisition support</li>
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Request a written scope distinguishing the acquisition from any ongoing services and third-party costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: A sensible boundary (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">A sensible boundary</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              When not to buy a shelf company
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">You only need a company number</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    New formation may meet your needs without an acquisition. An older registration date alone is not a reason to take on unknown history.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">The records do not add up</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Do not proceed on a dormant label, missing disclosures or a promise of no liabilities. Pause if ownership, accounts, tax or contracts cannot be established.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">You expect an automatic advantage</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Do not buy on promises of guaranteed banking, credit, VAT registration or contracts. An acquisition is not a way around compliance checks or ownership disclosure.
                  </p>
                </article>
              </div>

              {/* Related Links */}
              <div className="mt-8 flex flex-col gap-4 border-t border-[#e5dfd3] pt-6 text-sm sm:flex-row sm:flex-wrap">
                <Link
                  href="/services/uk-company-formation-for-non-residents"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#8a6814] hover:underline"
                >
                  New formation for non-residents
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/uk-accounting-non-residents"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#8a6814] hover:underline"
                >
                  Accounting & compliance
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/companies-house-verification"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#8a6814] hover:underline"
                >
                  Identity-verification assistance
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQs */}
        <section id="faqs" className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Your questions</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Clear answers before you enquire
            </h2>
            <div className="mt-7">
              <div className="max-w-4xl border-t border-border/60">
                {FAQS.map(({ q, a }) => (
                  <details key={q} className="group border-b border-border/60">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-sm font-semibold sm:text-base hover:text-gold transition-colors">
                      <span>{q}</span>
                      <Plus
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Specialist Enquiry CTA */}
        <section id="enquire" className="ss-section section-dark border-t border-border/40">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow">A considered next step</p>
              <h2 className="mt-3 text-3xl font-display font-bold">Start with the right questions.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Discuss your requirements before selecting an existing company. We can assess the request and explain the next steps, subject to suitability and the agreed service scope.
              </p>
            </div>
            <div className="self-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Request Available UK Shelf Companies</span>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ss-action btn-ghost inline-flex items-center gap-2.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Share your country of residence, business activity, ownership structure and required support. Do not send passports, identity documents or sensitive financial records by WhatsApp or an initial email; ask for the approved secure document channel.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: Official reference points */}
        <section className="ss-section border-t border-border/40 bg-card/20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Official reference points</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Check the records. Take qualified advice.
            </h2>
            <div className="mt-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page provides general information, not transaction-specific legal or tax advice. An overseas buyer should consider both UK obligations and the rules in their country of residence.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gold">
                <li>
                  <a
                    href="https://www.gov.uk/guidance/searching-the-companies-house-register"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Searching the Companies House register ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/running-a-limited-company/company-changes-you-must-report"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Changes a company must report ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/hmrc-internal-manuals/vat-registration-manual/vatreg29050"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    HMRC: share transfers and the continuing company ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
