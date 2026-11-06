"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CreditCard,
  LockKeyhole,
  Mail,
  MessageCircle,
  Plus,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/7sYfZ9asU9DL1RP5xifw404";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const EMAIL_SUBJECT = "Director Service Address order request — £35/year";
const MESSAGE_TEXT =
  "Hello Seven Oak Prestige, I would like to start an order for your director service address service (£35/year). Please confirm the address, permitted use, mail handling and onboarding terms before payment. I will not send identity documents in this initial message.";

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(MESSAGE_TEXT)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(MESSAGE_TEXT)}`;

const DEFINITION =
  "A director service address is the individual’s public correspondence address on the company register. It changes where director correspondence is directed; it does not appoint a nominee or conceal ownership and control.";

const PRACTICAL_CHECKS = [
  {
    title: "Public correspondence, private residence",
    text: "Companies House publishes a director’s service address. The usual residential address is supplied separately and is not normally on the public register, but it can be disclosed to specified public authorities and credit reference agencies under the applicable rules.",
  },
  {
    title: "Privacy has limits",
    text: "This service does not hide your name, directorships or reportable ownership and control. A home address previously used in public records is not automatically erased. Check Companies House guidance on removal applications and protection where appropriate.",
  },
  {
    title: "Separate records need separate attention",
    text: "Changing your director service address does not automatically change the company’s registered office or a PSC correspondence address. Review every role and filing where your home address appears, and agree the permitted scope for each.",
  },
  {
    title: "An address is not an appointment",
    text: "A service address is a correspondence arrangement. You remain the director with your own responsibilities. It has no connection with replacing you with a nominee director, and it does not alter company ownership or banking eligibility.",
  },
];

const RECEIVES = [
  {
    title: "Authorised director correspondence use",
    text: "Confirm the named director, the relevant company or companies and the permitted scope before using the address. Do not assume one subscription covers every appointment or another person.",
  },
  {
    title: "Defined handling of covered mail",
    text: "Agree which director letters are covered, notification arrangements and how you receive the contents. Scanning, forwarding, extra charges and handling of legal documents must be expressly confirmed.",
  },
  {
    title: "A practical address-change plan",
    text: "For an existing appointment, agree who will notify Companies House and when the new service address can be used. For a new appointment, supply the authorised service address and the genuine residential details separately.",
  },
];

const EXCLUDES = [
  "A nominee director, replacement director or transfer of duties",
  "Anonymity or removal of PSC disclosure obligations",
  "Automatic removal of historic residential-address entries",
  "Company registered office use or general business mail unless agreed",
];

const USE_CASES = [
  {
    title: "Directors working from home",
    text: "Avoid using your home as your current public director correspondence address. Check whether it is also shown as a registered office, PSC address or in older documents.",
  },
  {
    title: "Non-resident directors",
    text: "A director’s service address can be in the UK or overseas under Companies House rules. If you prefer a UK correspondence arrangement, enquire about acceptance and how covered mail reaches you.",
  },
  {
    title: "New or multiple appointments",
    text: "Set up the correct address details from the start. If you hold several directorships, confirm coverage for each company rather than assuming a single agreement covers all of them.",
  },
];

const STEPS = [
  {
    title: "Identify the appointment",
    text: "Tell us whether you are a new or existing director and give the company number where relevant. Describe the correspondence support you need without sending sensitive documents.",
  },
  {
    title: "Confirm coverage and terms",
    text: "Agree the named users, covered companies, available address, mail scope, first-year fee and renewal conditions. Ask separately about any PSC correspondence-address use.",
  },
  {
    title: "Authorise use and update details",
    text: "Complete onboarding through the approved secure channel. Once accepted, use the agreed service address and arrange the relevant filing; provide your genuine residential address separately.",
  },
  {
    title: "Maintain access to correspondence",
    text: "Keep your contact details up to date and respond to covered notices. When leaving, arrange a replacement and update each relevant record; ending the contract does not change Companies House details automatically.",
  },
];

const FAQS = [
  {
    q: "What is a company director service address?",
    a: "A director service address is the public correspondence address shown for a director on the Companies House register. It need not be your home, but you need permission to use it. This offer is for director use; secretary and person with significant control (PSC) address permissions must be confirmed separately and are not automatically included.",
  },
  {
    q: "Do I still have to give my home address to Companies House?",
    a: "Yes. Directors must provide their usual residential address separately. It is not normally displayed publicly as residential-address information, but permitted disclosures and exceptions apply. You must provide genuine details, not substitute a virtual address for where you live.",
  },
  {
    q: "Is this a directors privacy address?",
    a: "That phrase commonly refers to using an alternative public correspondence address. It is not a promise of anonymity or complete privacy. Your name and other reportable information remain public, and historical records may still show an address used before.",
  },
  {
    q: "Can a director who lives overseas use this service?",
    a: "Yes, subject to our onboarding and service acceptance. Companies House allows a director’s service address in the UK or overseas. It must be a usable correspondence address. Our available address and handling of covered letters are confirmed in writing; no scanning or forwarding method is automatically included.",
  },
  {
    q: "Can the registered office and director service address be the same?",
    a: "They can share a location with the required authorisation, but they are different uses. Confirm both permissions and both mail scopes in writing. Buying one service should not be treated as buying the other.",
  },
  {
    q: "Does one service cover all directors or all my companies?",
    a: "The £35 yearly offer is for one director. It does not automatically cover additional directors or every company appointment. Tell us all the companies and roles you need covered; we confirm permitted coverage and any additional fees in writing before you pay.",
  },
  {
    q: "Can I change the address for an existing appointment?",
    a: "Yes. Arrange an authorised new service address and notify Companies House of the director-detail change. Agree who will make the filing and check the updated record; cancelling an old service does not update it for you.",
  },
  {
    q: "Will changing my address remove it from old filings?",
    a: "No, not automatically. Companies House provides separate guidance on applying to remove certain personal details from public documents. Eligibility, the relevant documents and any applicable process need checking; the address service itself does not perform or guarantee removal.",
  },
  {
    q: "Does this hide PSC details or provide a nominee director?",
    a: "No. Ownership and control disclosures remain. This is a correspondence-address service for the actual director, not a nominee appointment, secrecy arrangement or transfer of statutory duties.",
  },
  {
    q: "How much does a director service address cost?",
    a: "Our director service address costs £35 per year for one director. Each additional director needs their own service. We confirm how your official post is handled before you pay. Prestige and Elite formation packages include it for the first 12 months.",
  },
];

function ServiceOrderActions() {
  return (
    <div className="max-w-2xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center justify-center gap-2.5"
        >
          <CreditCard className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Order Director Service Address — £35/year</span>
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Ask on WhatsApp</span>
        </a>
        <a
          href={EMAIL_HREF}
          className="btn-ghost inline-flex items-center justify-center gap-2"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Contact by email</span>
        </a>
      </div>
      <div className="mt-4 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
        <p>
          Payment starts onboarding, subject to service acceptance and any required identity/AML
          checks. It does not authorise address use or guarantee HMRC approval.
        </p>
        <p>
          Annual subscription, billed yearly until cancelled. Use the address only after written
          authorisation. Choose GBP for the advertised price; other currencies and conversion fees
          may differ.
        </p>
        <p>
          Read our{" "}
          <Link href="/terms" className="underline hover:text-gold transition-colors">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/refund" className="underline hover:text-gold transition-colors">
            refund policy
          </Link>{" "}
          before paying. Ask us to clarify their application to this service if needed.
        </p>
      </div>
    </div>
  );
}

export default function DirectorServiceAddressPageEn() {
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
            name: "Director Service Address",
            item: "https://www.sevenoakprestige.com/services/director-service-address",
          },
        ],
      },
      {
        "@type": "Service",
        name: "UK Director Service Address to Protect Your Home Address",
        description:
          "UK director service address — £35/year. Separate your current public correspondence address from home. Available address, permitted use and mail scope confirmed before purchase.",
        url: "https://www.sevenoakprestige.com/services/director-service-address",
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
        },
        areaServed: "GB",
        offers: {
          "@type": "Offer",
          price: "35",
          priceCurrency: "GBP",
          url: "https://www.sevenoakprestige.com/services/director-service-address",
        },
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
        <section className="section-dark border-b border-border/30 px-4 pt-32 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:pt-40">
          <div className="mx-auto max-w-6xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground/90">
                Director Service Address
              </span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
              <div>
                <p className="eyebrow">Seven Oak Prestige · Address services</p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
                  UK Director Service Address to Protect Your Home Address
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                  Use an authorised service address instead of your home for your current public
                  director correspondence. Directors still provide their usual residential address
                  separately to Companies House; it is not normally public. Previous public entries
                  are not removed automatically.
                </p>
                <p className="mt-6">
                  <span className="font-display text-4xl font-bold text-gold">£35</span>
                  <span className="ml-2 text-sm text-muted-foreground">per year</span>
                </p>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  Address and mail handling confirmed before you pay. Use only after written
                  approval.
                </p>
                <div className="mt-7">
                  <ServiceOrderActions />
                </div>
              </div>

              <div className="border-t border-border/30 pt-6 lg:border-t-0 lg:border-l lg:border-border/30 lg:pt-2 lg:pl-8">
                <span className="font-display text-2xl font-bold text-gold">03</span>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  The director’s public correspondence
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  New and existing directors, including non-residents
                </p>
                <a
                  href="#compare"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Compare address types</span>
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* ── ROLE DIAGRAM ── */}
            <div
              className="mt-10 border border-border/30 bg-card/40 p-5 sm:p-7"
              role="img"
              aria-label="A director service address is public; the actual usual residential address is supplied separately to Companies House and is not normally public, subject to permitted disclosures."
            >
              <div className="flex items-center gap-3.5 text-sm text-foreground">
                <ShieldCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Two address records.
                  <br />
                  <strong className="font-display text-lg">Two different purposes.</strong>
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="border border-border/30 bg-background/10 p-5">
                  <UserRound className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    Public register
                  </p>
                  <strong className="mt-1 block font-display text-xl text-foreground">
                    Service address
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Director correspondence
                  </span>
                </div>

                <div className="border border-border/30 bg-background/10 p-5">
                  <LockKeyhole className="h-5 w-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    Supplied separately
                  </p>
                  <strong className="mt-1 block font-display text-xl text-foreground">
                    Residential address
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Where you actually live
                  </span>
                </div>
              </div>

              <p className="mt-5 border-t border-border/25 pt-4 text-xs text-muted-foreground">
                Residential details are not normally public; disclosure exceptions apply.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: PHOTO ── */}
        <section className="px-4 pt-10 pb-4 sm:px-6">
          <figure className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card/40 lg:grid-cols-[1.35fr_0.65fr]">
            <picture>
              <source srcSet="/assets/address-director-1280.webp" media="(min-width: 641px)" />
              <img
                src="/assets/address-director-640.webp"
                alt="A director relaxing at home with a tablet, an envelope and house keys on the table"
                width={1280}
                height={730}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </picture>
            <figcaption className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <span className="font-display text-2xl leading-snug text-foreground">
                Separate your current public correspondence from your home.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ── SECTION 2: PRACTICAL (PRIVACY IN PRACTICE) ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Privacy in practice</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Know what changes — and what stays public
            </h2>

            <div className="mt-8 grid gap-x-8 md:grid-cols-2">
              {PRACTICAL_CHECKS.map((item, index) => (
                <article key={item.title} className="border-t border-border py-6">
                  <p className="text-xs font-bold text-gold" aria-hidden="true">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Primary guidance</p>
              <a
                href="https://www.gov.uk/guidance/removing-your-home-address-from-the-companies-house-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House: removing your home address from public records</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="opens in a new tab" />
              </a>
              <a
                href="https://www.gov.uk/limited-company-formation/appoint-directors-and-company-secretaries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House: directors and company secretaries</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="opens in a new tab" />
              </a>
              <a
                href="https://www.gov.uk/guidance/your-personal-information-on-the-companies-house-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House: personal information on the public register</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="opens in a new tab" />
              </a>
              <a
                href="https://www.gov.uk/make-changes-to-your-limited-company/directors-and-company-secretaries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>GOV.UK: reporting changes to directors’ details</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="opens in a new tab" />
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: SCOPE (KNOW WHAT YOU ARE BUYING) ── */}
        <section className="border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Know what you are buying</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              A public address for your role. Not a change of director.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {DEFINITION}
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.65fr_1fr]">
              <div>
                <h3 className="mb-5 font-display text-xl font-semibold text-foreground">
                  What to agree with our team
                </h3>
                <div className="divide-y divide-border border-y border-border">
                  {RECEIVES.map((item) => (
                    <article key={item.title} className="flex gap-4 py-5">
                      <Check
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-gold"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="border border-border bg-card/40 p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Not included by default
                </h3>
                <ul className="mt-5 space-y-4">
                  {EXCLUDES.map((text) => (
                    <li
                      key={text}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <X
                        className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                  The written quotation and service agreement define your actual coverage.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: USES (WHO SHOULD ENQUIRE) ── */}
        <section className="section-parchment px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Who should enquire</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              For the actual director, wherever you live
            </h2>

            <div className="mt-8 grid gap-7 md:grid-cols-3">
              {USE_CASES.map((item, index) => (
                <article key={item.title} className="border-t border-border pt-5">
                  <span className="text-xs font-bold text-gold" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: HOW IT WORKS ── */}
        <section className="section-parchment border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">From enquiry to authorised use</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Set up the right details for each appointment
            </h2>

            <ol className="mt-8 grid gap-5 md:grid-cols-2">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-4 border border-border bg-background p-6"
                >
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center border border-gold/40 font-display text-base font-bold text-gold"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── SECTION 6: COMPARISON TABLE ── */}
        <section id="compare" className="scroll-mt-28 border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Three roles. No blurred lines.</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Which address do you actually need?
            </h2>

            <div
              className="mt-8 overflow-x-auto border border-border bg-background"
              tabIndex={0}
              role="region"
              aria-label="Address service comparison, scroll horizontally on smaller screens"
            >
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Compare statutory company, business correspondence and director address purposes
                </caption>
                <thead>
                  <tr className="border-b border-border bg-card/60">
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      The distinction
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      <Link
                        href="/services/registered-office-service"
                        className="inline-flex items-start gap-2 hover:text-gold hover:underline"
                      >
                        <span>Registered Office Address</span>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      <Link
                        href="/services/virtual-business-address"
                        className="inline-flex items-start gap-2 hover:text-gold hover:underline"
                      >
                        <span>Virtual Business Address</span>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </th>
                    <th
                      scope="col"
                      className="bg-gold/10 p-4 text-xs font-bold uppercase tracking-wider"
                    >
                      <Link
                        href="/services/director-service-address"
                        className="inline-flex items-start gap-2 hover:text-gold hover:underline"
                      >
                        <span>Director Service Address</span>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Yearly price
                    </th>
                    <td className="p-4 align-top font-display text-lg font-bold text-gold">
                      £59/year
                    </td>
                    <td className="p-4 align-top font-display text-lg font-bold text-gold">
                      £150/year
                    </td>
                    <td className="bg-gold/10 p-4 align-top font-display text-lg font-bold text-gold">
                      £35/year
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Primary role
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Company’s official public address
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Approved client and supplier correspondence
                    </td>
                    <td className="bg-gold/10 p-4 align-top font-medium text-foreground">
                      Director’s public correspondence address
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Main mail scope
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Covered statutory company letters
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Covered general business letters
                    </td>
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Covered correspondence for named directors
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Statutory or commercial?
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Statutory address requirements apply
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Commercial service; does not replace statutory uses
                    </td>
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Director information and disclosure rules apply
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      What to check
                    </th>
                    <td className="p-4 align-top text-muted-foreground">
                      Jurisdiction, permission and official-mail process
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
                      Permitted uses, recipients, letters versus parcels
                    </td>
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Named users, company coverage and privacy limits
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 align-top font-semibold text-foreground">
                      Scanning / forwarding
                    </th>
                    <td colSpan={3} className="p-4 align-top text-muted-foreground">
                      Only as expressly confirmed in your written service scope. No blanket
                      inclusion or delivery promise.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              The same location may serve more than one role with permission. The services are not
              interchangeable and may need separate agreements.
            </p>
          </div>
        </section>

        {/* ── SECTION 7: FAQs ── */}
        <section
          id="faqs"
          className="section-parchment scroll-mt-28 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Clear answers before you commit</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Director service address questions
            </h2>

            <div className="mt-8 max-w-4xl border-t border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left font-semibold text-foreground hover:text-gold transition-colors">
                    <span>{q}</span>
                    <Plus
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
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

        {/* ── SECTION 8: FORMATION, RELATED SERVICES & INTERNAL BLOG LINKS ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Keep the services connected</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Forming a company, or arranging an address separately?
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  For a new UK company
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our Prestige formation package includes registered office and director service
                  addresses for 12 months; Elite also includes a virtual business address for 12
                  months. Mail handling remains subject to the package’s agreed scope. Check the
                  formation package before buying overlapping address services.
                </p>
                <Link
                  href="/services/uk-company-formation-for-non-residents"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Explore non-resident formation</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  For an existing business or appointment
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Registered office £59 a year, director service address £35 a year and virtual
                  business address £150 a year. Tell us what you need and we confirm the address
                  and mail handling before you pay.
                </p>
                <Link
                  href="/services/companies-house-identity-verification"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Identity-verification assistance</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <nav
              aria-label="Related address services and guides"
              className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-sm sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/services/registered-office-service"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Registered Office Address (£59/year)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services/virtual-business-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Virtual Business Address (£150/year)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/registered-office-vs-director-service-address-uk"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog: Registered Office vs Director Service Address (2026)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/uk-company-director-duties-non-resident"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog: UK Company Director Duties for Non-Residents</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/uk-company-formation-without-uk-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog: UK Company Formation Without a UK Address</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </section>

        {/* ── SECTION 9: ENQUIRY / ORDER CTA ── */}
        <section
          id="enquire"
          className="section-dark scroll-mt-28 border-t border-border/30 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Confirm the fit before you pay</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Make your public correspondence address a considered choice
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Tell us your intended address use, country of residence and company number if
                  applicable. We will discuss the available address, onboarding, mail scope and
                  renewal terms before you commit.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Do not send passports, identity documents or sensitive financial records by
                  WhatsApp or an initial email. Ask for the approved secure document channel.
                </p>
              </div>
              <div className="self-center">
                <ServiceOrderActions />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

