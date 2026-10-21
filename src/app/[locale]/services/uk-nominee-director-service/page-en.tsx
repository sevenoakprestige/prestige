"use client";

import Link from "next/link";
import { Mail, MessageCircle, Plus, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";
const SUBJECT = "UK director service assessment enquiry";

const ENQUIRY_BODY = `Hello Seven Oak Prestige,\n\nI would like to discuss ${SUBJECT.toLowerCase()}.\nCountry of residence:\nCompany or intended activity:\nOwnership structure:\nRequired support:\n\nPlease advise the next steps. I will not attach identity documents to this enquiry.`;

const EMAIL_LINK = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(ENQUIRY_BODY)}`;
const WHATSAPP_LINK = `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hello Seven Oak Prestige, I would like to discuss ${SUBJECT.toLowerCase()}. Please advise the next steps.`)}`;

const FAQS = [
  {
    q: "What is a nominee director?",
    a: "The term usually describes a director appointed under an arrangement with another person, for example a shareholder. It is not a separate Companies Act category exempt from duties. The appointed person remains a director with real responsibilities to the company.",
  },
  {
    q: "Is a nominee director arrangement lawful in the UK?",
    a: "It depends on the actual arrangement, its legitimate purpose and compliance with applicable law. An arrangement cannot override statutory duties or be used to conceal control or evade regulation. Legal and AML review of the service model and each proposed appointment is essential.",
  },
  {
    q: "Do I need a UK-resident director to form a UK Ltd?",
    a: "Generally, no. Directors of a UK private limited company do not have to live in the UK, although the company needs an eligible UK registered office and must meet the applicable director requirements. A provider or contract may impose separate conditions; that is not a general incorporation rule.",
  },
  {
    q: "Can a director simply sign whatever a shareholder requests?",
    a: "No. Directors must exercise independent judgement, subject to the statutory exceptions, and meet their other duties. Instructions, indemnities or a private agreement do not provide a blanket exemption from those obligations.",
  },
  {
    q: "Will a nominee director hide the beneficial owner?",
    a: "No. Applicable ownership and PSC disclosure obligations remain. The true ownership and control structure must be understood and reported where required; this assessment is not an anonymity or secrecy service.",
  },
  {
    q: "Is a director service address the same as a nominee director?",
    a: "No. A service address is a correspondence address for a director; it does not appoint somebody else to the board or transfer decision-making duties. A nominee shareholder is a different arrangement concerning shares, not a substitute for a director.",
  },
  {
    q: "What identity and compliance checks apply?",
    a: "Expect checks on the applicant, proposed director, ownership, control, intended activity and source of funds as appropriate. Companies House identity verification is separate from provider AML onboarding. Seven Oak can provide administrative identity-verification assistance within its agreed scope, not a claim that it performs statutory verification itself.",
  },
  {
    q: "Does appointing a UK director guarantee banking or tax benefits?",
    a: "No. Banks and payment providers make their own KYC, KYB and risk decisions. An appointment does not guarantee banking, tax treatment, residency, visas or commercial acceptance; seek qualified advice on management and tax consequences.",
  },
  {
    q: "How much does a nominee director service cost?",
    a: "There is no public price. Any quotation would depend on approval of the arrangement, the director's actual responsibilities, company activity, risk, expected involvement and agreed terms. An enquiry is an assessment request, not confirmation that an appointment is available.",
  },
  {
    q: "When will an assessment be declined?",
    a: "A request may be unsuitable if it involves undisclosed ownership, unlawful purposes, unexplained funding, unmanageable conflicts or an expectation of signatures without genuine judgement. It may also be declined where adequate oversight, records or an acceptable service model cannot be established.",
  },
];

export default function NomineeDirectorPageEn() {
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
            name: "UK Nominee Director Services: Duties, Requirements and Professional Support",
            item: "https://www.sevenoakprestige.com/services/uk-nominee-director-service",
          },
        ],
      },
      {
        "@type": "Service",
        name: "UK director arrangement assessment",
        description:
          "Understand UK nominee director duties, transparency and compliance. Request a case-by-case director service assessment from Seven Oak Prestige. No public pricing.",
        url: "https://www.sevenoakprestige.com/services/uk-nominee-director-service",
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
    <div className="specialist-page director-page bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="ss-hero relative isolate overflow-hidden">
          <picture>
            <source srcSet="/assets/director-hero-1280.webp" media="(min-width: 641px)" />
            <img
              src="/assets/director-hero-640.webp"
              alt="Illustrative sunlit London boardroom with a pale oak table, navy chairs and architectural views; not Seven Oak premises"
              width={1280}
              height={720}
              className="ss-hero-image absolute inset-0 -z-20 h-full w-full object-cover"
            />
          </picture>
          <div className="ss-hero-shade absolute inset-0 -z-10" />

          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Director service assessment</span>
            </nav>

            <div className="ss-hero-copy">
              <p className="eyebrow">Seven Oak Prestige Ltd · Director service assessment</p>
              <h1 className="mt-5 text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl">
                UK Nominee Director Services: Duties, Requirements and Professional Support
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-foreground/90">
                A directorship is a real responsibility, not a name on a register. Understand the duties, transparency requirements and practical limits before considering an arrangement.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Request a Director Service Assessment</span>
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

              <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Case-by-case assessment only. Any service is subject to legal, AML/supervision and operational approval, satisfactory checks and agreed terms. No appointment or outcome is guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: Understand the role */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Understand the role</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              What people mean by a nominee director
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    A nominee director is commonly understood as a director appointed under an arrangement with another person, often a shareholder. UK law does not create a special category of director who is exempt from statutory duties.
                  </p>
                  <p>
                    The person accepts a place on the board with genuine responsibilities to the company. Whether an arrangement is lawful depends on its substance, purpose and compliance—not the label attached to it.
                  </p>
                </div>
                <aside className="border-l-2 border-gold pl-6">
                  <h3 className="text-xl font-display font-semibold">You may not need this service</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A UK-resident director is generally not required solely to form a UK private limited company. Overseas founders can generally act as directors themselves, subject to applicable requirements.
                  </p>
                  <Link
                    href="/services/uk-company-formation-for-non-residents"
                    className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
                  >
                    Explore non-resident company formation →
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Responsibility before convenience (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Responsibility before convenience</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              The Companies Act duties still apply
            </h2>
            <div className="mt-7">
              <p className="mb-6 max-w-3xl text-base leading-relaxed text-[#5b6472]">
                Directors&apos; general duties under the Companies Act 2006 are owed to the company. An appointment agreement cannot turn the role into automatic signatures or provide a blanket exemption from liability.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Act within powers</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Follow the company&apos;s constitution and use powers for the purposes for which they were conferred. Authority must be understood, not merely assumed from an appointer&apos;s request.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Promote the company&apos;s success</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Act in good faith in the way most likely to promote success for the members as a whole, considering the statutory factors. Other rules may apply, including creditor interests in financial distress.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Exercise independent judgement</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Make informed decisions rather than blindly following instructions. Section 173 includes specific exceptions, but it does not create a general nominee exemption.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Apply care, skill & diligence</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Engage with the business, obtain necessary information and apply the required standard of care. A passive or remote appointment does not make these duties disappear.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Manage conflicts & benefits</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Identify and manage conflicts under the applicable rules. Directors must not accept prohibited third-party benefits; competing loyalties require careful review.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Declare relevant interests</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Disclose interests in proposed transactions or arrangements as required. Keep governance, decision-making and company records clear and properly maintained.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Different needs, different solutions */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Different needs, different solutions</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Resident director, service address or shareholder?
            </h2>
            <div className="mt-7">
              <div className="grid gap-7 md:grid-cols-3">
                <article className="border border-border/60 p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Resident director</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Describes where a director lives, not a separate legal office. Residence may matter for a specific provider, contract or tax analysis, but is not generally an incorporation requirement.
                  </p>
                </article>
                <article className="border border-border/60 p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Director service address</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A correspondence address used for the director&apos;s public record. It does not appoint a replacement director or remove residential-address disclosure to Companies House.
                  </p>
                  <Link href="/services/director-service-address" className="mt-4 inline-block text-sm text-gold hover:underline">
                    Explore existing address options →
                  </Link>
                </article>
                <article className="border border-border/60 p-6 rounded-lg bg-card/40">
                  <h3 className="text-xl font-display font-semibold">Nominee shareholder</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    An arrangement relating to holding shares. It is distinct from board appointment and does not remove beneficial ownership or PSC disclosure requirements. No shareholder service is offered by this page.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Transparency is essential (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Transparency is essential</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Ownership, identity and a legitimate purpose
            </h2>
            <div className="mt-7">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Public responsibilities remain</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Directors appear on the company record. The company must identify and report its PSCs where the statutory conditions are met and keep relevant information up to date. A nominee arrangement must not be presented as hiding beneficial owners.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Companies House identity verification applies according to each person&apos;s role and current requirements. Seven Oak&apos;s administrative identity-verification assistance is separate from statutory verification and does not replace provider AML checks.
                  </p>
                  <Link
                    href="/services/companies-house-verification"
                    className="mt-5 inline-block text-sm font-semibold text-[#8a6814] hover:underline"
                  >
                    Understand identity-verification assistance →
                  </Link>
                </div>
                <div className="border border-[#e5dfd3] bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-display font-semibold text-[#0e1a2b]">Understand the real business</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    An assessment needs a clear business purpose, actual ownership and control, intended activity, jurisdictions and proposed responsibilities. KYC and AML checks may require identity, address and source-of-funds evidence through an approved secure channel.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5b6472]">
                    Assess potential conflicts, how the director will access records, decision-making authority and the ability to challenge inappropriate instructions. Seek qualified UK and home-country tax advice on management, control and any wider consequences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: A careful assessment */}
        <section className="ss-section">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">A careful assessment</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Define the need before discussing an appointment
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">01</p>
                  <h3 className="text-xl font-display font-semibold">Explain the legitimate purpose</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Set out the company activity, ownership, residence and why a director arrangement is being considered. We first assess whether another service—or your own directorship—better meets the need.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">02</p>
                  <h3 className="text-xl font-display font-semibold">Review legal & compliance suitability</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Review the actual service model, supervision requirements, customer due diligence and conflicts. No appointment can be offered until the relevant legal, AML and operational approvals are in place.
                  </p>
                </article>
                <article className="border border-border/60 p-5 sm:p-6 rounded-lg bg-card/40">
                  <p className="mb-5 font-display text-2xl font-bold text-gold" aria-hidden="true">03</p>
                  <h3 className="text-xl font-display font-semibold">Agree responsibilities in writing</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    If approved and suitable, define genuine involvement, information access, decision-making, reporting, fees and termination terms. Complete the applicable appointment and identity steps; a private agreement does not override statutory duties.
                  </p>
                </article>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <h3 className="text-xl font-display font-semibold">Cost follows scope—not a public price list</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  The activity, risk, time commitment, responsibilities, required support and duration influence any quotation. Written terms would distinguish the director arrangement from formation, address, accounting or banking-readiness services. An enquiry is not acceptance of your proposed arrangement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: When the answer is no (Parchment) */}
        <section className="ss-section section-parchment">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">When the answer is no</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl text-[#0e1a2b]">
              Some requests should not proceed
            </h2>
            <div className="mt-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Concealment or evasion</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Requests to hide beneficial owners, evade tax or regulations, mislead a bank or misrepresent where the business is managed are inappropriate.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">A signature without judgement</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    An expectation that a director will approve every instruction without information, scrutiny or genuine involvement is incompatible with the role.
                  </p>
                </article>
                <article className="border border-[#e5dfd3] bg-white p-5 sm:p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-display font-semibold text-[#0e1a2b]">Unmanageable risk</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5b6472]">
                    Unclear funding, missing records, unlawful purposes, unacceptable conflicts or an inability to maintain oversight can prevent an arrangement from proceeding.
                  </p>
                </article>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#5b6472]">
                Appointing a UK director does not guarantee a bank account, payment-provider acceptance, tax savings, visas or residency. Banking support is application readiness only, with independent provider decisions.
              </p>

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
              <h2 className="mt-3 text-3xl font-display font-bold">Start with a director service assessment.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Explain the problem you are trying to solve. We can assess the request and clarify relevant alternatives; any appointment remains conditional on approval, suitability and agreed scope.
              </p>
            </div>
            <div className="self-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={EMAIL_LINK}
                  className="ss-action btn-gold inline-flex items-center gap-2.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Request a Director Service Assessment</span>
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

        {/* SECTION 9: Read the primary guidance */}
        <section className="ss-section border-t border-border/40 bg-card/20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Read the primary guidance</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-display font-bold leading-tight sm:text-3xl">
              Ground decisions in duties, not labels
            </h2>
            <div className="mt-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                This is general information, not legal or tax advice. Obtain qualified review of the proposed arrangement and the actual service provider before proceeding.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-gold">
                <li>
                  <a
                    href="https://www.legislation.gov.uk/ukpga/2006/46/part/10/chapter/2"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Companies Act 2006: directors&apos; general duties ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    GOV.UK: appointing directors ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/people-with-significant-control-pscs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Companies House: people with significant control ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    Companies House: identity-verification requirements ↗
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
