"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CreditCard,
  FileText,
  Globe2,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/28E14fgRi7vDfIF6Bmfw403";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const EMAIL_SUBJECT = "Registered Office Address enquiry (£59/year)";
const EMAIL_BODY = `Hello Seven Oak Prestige,

I would like to enquire about the Registered Office Address (£59/year).

Company status (new formation or existing UK company):
Country of residence:
Address services needed:
Preferred mail handling (scan, forward, or confirm options):

Please confirm the available address, service terms, onboarding checks and total annual cost.`;

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Hello Seven Oak Prestige, I would like to enquire about the Registered Office Address (£59/year). Please confirm the available address, covered mail and onboarding steps."
)}`;

const DEFINITION =
  "A registered office is your UK company’s official address on the public Companies House register. It is where statutory notices and official letters for the company are sent, and it can be separate from your home or day-to-day workplace where authorised.";

const RECEIVES = [
  "Authorised use of a UK registered office address once onboarding is approved",
  "Official company mail from Companies House, HMRC and other agreed statutory senders",
  "Mail notification, scanning or forwarding only as confirmed in your service terms",
  "Clear separation from a trading address, physical workspace or general mailroom",
];

const EXCLUDES = [
  "Permission to use any address before onboarding and written confirmation",
  "Routine client, supplier, customer, bank-card or parcel deliveries unless agreed",
  "Automatic removal of residential addresses from historical Companies House filings",
  "Physical office space, walk-in reception, UK tax residency or bank approval",
];

const PRACTICAL_CHECKS = [
  {
    title: "Match the company’s UK jurisdiction",
    text: "A company registered in England and Wales needs an address in England or Wales; Scottish and Northern Irish companies must match their own jurisdiction.",
  },
  {
    title: "Meet the “appropriate address” standard",
    text: "Under current Companies House rules, documents sent to the registered office must be expected to come to the attention of someone acting for the company and be capable of delivery acknowledgement.",
  },
  {
    title: "Wait for written permission before filing",
    text: "Do not place an address on an incorporation or AD01 change filing until identity checks, payment and address authorisation are complete.",
  },
  {
    title: "Plan renewals and address changes early",
    text: "Moving a registered office takes effect only when registered by Companies House, not when a private agreement starts or ends.",
  },
];

const ADDRESS_COMPARISON = [
  {
    key: "registered",
    name: "Registered Office Address",
    href: "/services/registered-office-service",
    price: "£59/year",
    purpose: "The company’s official statutory address",
    publicRecord: "Yes — shown for the company",
    post: "Official company mail covered by the service",
    notFor: "General client mail, parcels or director filings unless agreed",
  },
  {
    key: "virtual",
    name: "Virtual Business Address",
    href: "/services/virtual-business-address",
    price: "£150/year",
    purpose: "Everyday business correspondence address",
    publicRecord: "Optional — used where you publish it",
    post: "Agreed business letters from clients and partners",
    notFor: "Company registered office or director filing unless agreed",
  },
  {
    key: "director",
    name: "Director Service Address",
    href: "/services/director-service-address",
    price: "£35/year",
    purpose: "The officer’s public correspondence address",
    publicRecord: "Yes — shown for the director/officer",
    post: "Official post addressed to the director in that role",
    notFor: "General company mail or hiding residential data from Companies House",
  },
];

const FAQS = [
  {
    q: "What is a UK registered office address?",
    a: "It is the official address of a UK limited company recorded at Companies House. Statutory mail from Companies House, HMRC and other official bodies is sent there, and the address appears on the public register.",
  },
  {
    q: "Can a non-resident use a UK registered office service?",
    a: "Yes. A non-resident founder or overseas director can run a UK company while using an authorised UK registered office address in the same UK jurisdiction as the company’s registration.",
  },
  {
    q: "What does Companies House mean by an appropriate address?",
    a: "Companies House requires a registered office where a document addressed to the company would be expected to come to the attention of a person acting on its behalf, and where delivery can be recorded by obtaining an acknowledgement.",
  },
  {
    q: "Can I use a PO Box as a UK registered office?",
    a: "No. Companies House rules do not allow a PO Box as a registered office address. You must use an appropriate physical UK address that meets the statutory requirements.",
  },
  {
    q: "What mail is covered by a £59/year registered office service?",
    a: "A registered office service is designed for official company correspondence, such as letters from Companies House and HMRC. Confirm exact scan, forwarding, postage and sender rules before ordering; general business mail normalmente requires a virtual business address.",
  },
  {
    q: "Is a registered office the same as a virtual business address?",
    a: "No. The registered office is the company’s legal address on Companies House. A virtual business address is for everyday business correspondence from clients, suppliers or partners where agreed.",
  },
  {
    q: "Does a registered office hide the director’s home address?",
    a: "It avoids using a home address as the company’s registered office, but directors also need a service address for their officer record. Directors must still give Companies House their residential address, which is kept off the public register in standard cases.",
  },
  {
    q: "How do I change my company’s registered office address?",
    a: "Once the new address is authorised, the company files a change of registered office with Companies House (form AD01 or the online equivalent). The change takes effect only when registered by Companies House.",
  },
  {
    q: "What documents are needed before the address can be used?",
    a: "Address providers must complete customer due diligence and identity/AML checks where applicable. We confirm the required identity, address and company details before issuing permission to use an address.",
  },
  {
    q: "Is the registered office included in company formation packages?",
    a: "Yes, for 12 months in the Prestige (£399) and Elite (£699) formation packages, subject to onboarding and the agreed mail-handling scope. It can also be arranged standalone at £59/year.",
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
          <span>Order Registered Office — £59/year</span>
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

export default function RegisteredOfficeServicePageEn() {
  const [setupMode, setSetupMode] = useState<"existing" | "new">("existing");

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
            name: "UK Registered Office Address Service",
            item: "https://www.sevenoakprestige.com/services/registered-office-service",
          },
        ],
      },
      {
        "@type": "Service",
        name: "UK Registered Office Address Service",
        description:
          "Need a UK registered office address? Use an authorised UK company address for Companies House and HMRC mail from £59/year, or included in Prestige and Elite formation packages.",
        url: "https://www.sevenoakprestige.com/services/registered-office-service",
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
        },
        areaServed: "GB",
        offers: {
          "@type": "Offer",
          price: "59",
          priceCurrency: "GBP",
          description:
            "£59/year standalone service, subject to onboarding, eligibility checks and agreed mail-handling terms.",
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
              className="mb-7 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-foreground/90">
                Registered Office Address
              </span>
            </nav>

            <p className="eyebrow">Seven Oak Prestige · Company address services</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
              UK Registered Office Address Service for Limited Companies
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
              A dedicated UK address for your company’s official post from Companies House and HMRC.
              Available at £59/year, or included for 12 months with Prestige and Elite company
              formation.
            </p>
            <p className="mt-6">
              <span className="font-display text-4xl font-bold text-gold">£59</span>
              <span className="ml-2 text-sm text-muted-foreground">per year</span>
            </p>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              Address and mail handling confirmed before you pay.
            </p>

            <div className="mt-7">
              <ServiceOrderActions />
            </div>

            <div className="mt-10 grid gap-5 border-t border-border/25 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <p className="text-sm text-muted-foreground">
                One company.
                <br />
                <span className="font-display text-2xl font-semibold text-foreground">
                  A separate official address.
                </span>
              </p>
              <div
                className="inline-flex flex-wrap items-center gap-3 border border-border/30 bg-card/40 px-4 py-3.5 text-sm text-foreground"
                role="img"
                aria-label="Official company letters are directed to an authorised registered office; delivery arrangements are agreed before purchase."
              >
                <FileText className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Official company post</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <Building2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>Registered office</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOPIC NAVIGATION BAR ── */}
        <nav
          aria-label="On this page"
          className="border-b border-border bg-card/60 px-4 py-3.5 sm:px-6"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-semibold">
            <a href="#service" className="text-foreground hover:text-gold transition-colors">
              The service
            </a>
            <a href="#official-mail" className="text-foreground hover:text-gold transition-colors">
              Official mail
            </a>
            <a href="#setup" className="text-foreground hover:text-gold transition-colors">
              New or existing company
            </a>
            <a href="#compare" className="text-foreground hover:text-gold transition-colors">
              Compare addresses
            </a>
            <a href="#faqs" className="text-foreground hover:text-gold transition-colors">
              FAQs
            </a>
            <a
              href="#enquire"
              className="inline-flex items-center gap-1.5 text-gold hover:underline sm:ml-auto"
            >
              <span>Get started — £59/year</span>
              <ArrowDown aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>

        {/* ── SECTION 1: WHAT IS A REGISTERED OFFICE ADDRESS? ── */}
        <section id="service" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The address your company needs</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              What is a registered office address?
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{DEFINITION}</p>

            <div className="mt-9 grid gap-7 border-t border-border pt-7 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Keep home and company separate",
                  text: "Use an authorised alternative to your home as the company’s current registered office. Historic public records are a separate matter.",
                },
                {
                  icon: Mail,
                  title: "Plan for important company post",
                  text: "Agree how covered official letters will reach you. Stay responsible for reading notices and meeting your company’s deadlines.",
                },
                {
                  icon: Globe2,
                  title: "Run your company from abroad",
                  text: "Non-resident founders can own a UK company while living overseas. The company still needs an appropriate address in its UK jurisdiction.",
                },
              ].map(({ icon: Icon, title, text }, idx) => (
                <article
                  key={title}
                  className={idx > 0 ? "md:border-l md:border-border md:pl-6" : ""}
                >
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3.5 border-l-2 border-gold bg-card/50 p-4 sm:p-5">
              <Building2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-sm leading-relaxed text-foreground">
                <strong>Looking for a London registered office address?</strong> Ask us to confirm
                the available location and whether it suits your company. Our contact address is not
                permission to use it.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ILLUSTRATIVE PHOTO ── */}
        <section className="px-4 py-4 sm:px-6">
          <figure className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card/40 lg:grid-cols-[1.35fr_0.65fr]">
            <picture>
              <source srcSet="/assets/address-registered-1280.webp" media="(min-width: 641px)" />
              <img
                src="/assets/address-registered-640.webp"
                alt="Sealed company letters waiting in a wooden mail tray on a calm office desk"
                width={1280}
                height={853}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </picture>
            <figcaption className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <span className="font-display text-2xl leading-snug text-foreground">
                A separate address for official company post.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ── SECTION 3: SCOPE (WHAT TO AGREE) ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Know what you are buying</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Your registered office service: what to agree
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{DEFINITION}</p>

            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              <div className="border border-border bg-card/40 p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">Receives</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed">
                  {RECEIVES.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border bg-background p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Does not include
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {EXCLUDES.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Minus
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: OFFICIAL MAIL LEDGER ── */}
        <section
          id="official-mail"
          className="section-parchment scroll-mt-28 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Know what reaches this address</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Official company mail. Not every kind of post.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Registered office services and general business mail are different. Confirm your
              company’s covered senders and delivery arrangements before buying.
            </p>

            <div className="mt-8 grid border border-border bg-background lg:grid-cols-3">
              <article className="p-6 sm:p-7">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Official correspondence
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  Companies House, HMRC and statutory letters
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  This is the registered office’s main purpose. Ask which letters, other official
                  senders and legal documents are covered by your agreement.
                </p>
                <p className="mt-5 text-xs font-semibold text-gold">
                  Official-mail scope confirmed in writing
                </p>
              </article>

              <article className="border-t border-border p-6 sm:p-7 lg:border-t-0 lg:border-l">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Business correspondence
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  Client, supplier and customer letters
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  These are not included automatically. If you need an address for everyday business
                  post, discuss a separate correspondence service.
                </p>
                <Link
                  href="/services/virtual-business-address"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <span>Virtual business address</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>

              <article className="border-t border-border p-6 sm:p-7 lg:border-t-0 lg:border-l">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  Deliveries and access
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                  Parcels, returns and visiting the address
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Do not use it for stock, returns or courier deliveries without approval. A
                  registered office service does not give you a desk, meeting room or walk-in
                  office.
                </p>
                <p className="mt-5 text-xs font-semibold text-gold">Separate permission required</p>
              </article>
            </div>

            <div className="mt-6 grid gap-6 border border-border bg-background p-6 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  How will I receive my letters?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A scan is a digital copy. Forwarding means sending the physical letter to you. Ask
                  which options are offered, how originals are handled and what delivery costs.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-foreground">
                {[
                  "Notification method and handling times",
                  "Any scanning, forwarding and postage fees",
                  "Overseas delivery and original-document requests",
                  "Mail treatment when the service ends",
                ].map((text) => (
                  <li key={text} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: INTERACTIVE SETUP TABS (NEW OR EXISTING COMPANY) ── */}
        <section id="setup" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Choose the right starting point</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Starting a company or changing its address?
            </h2>

            <div className="mt-7">
              <div
                role="tablist"
                aria-label="Company status"
                className="inline-flex flex-wrap border border-border bg-card/50 p-1"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={setupMode === "existing"}
                  onClick={() => setSetupMode("existing")}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    setupMode === "existing"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Existing company
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={setupMode === "new"}
                  onClick={() => setSetupMode("new")}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    setupMode === "new"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  New company
                </button>
              </div>

              {setupMode === "existing" ? (
                <div
                  role="tabpanel"
                  className="mt-5 grid gap-7 border border-border bg-card/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Move your registered office with a clear handover
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Share your company number, registered jurisdiction and current service end
                      date. Agree the new address and filing before cancelling your old arrangement.
                    </p>
                    <a
                      href={EMAIL_HREF}
                      className="btn-ghost mt-6 inline-flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Discuss an address change</span>
                    </a>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "Confirm the new address and service terms.",
                      "Complete onboarding and obtain permission to use it.",
                      "Arrange the Companies House change and check outstanding post.",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="grid grid-cols-[2rem_1fr] items-center gap-3 border border-border bg-background p-4 text-sm"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center border border-gold/40 font-display font-bold text-gold">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <div
                  role="tabpanel"
                  className="mt-5 grid gap-7 border border-border bg-card/30 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Check your formation package first
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Prestige and Elite formation packages include registered office and director
                      service addresses for 12 months. Mail handling depends on the agreed package
                      scope. Avoid buying the same address use twice.
                    </p>
                    <Link
                      href="/services/uk-company-formation-for-non-residents"
                      className="btn-ghost mt-6 inline-flex items-center gap-2"
                    >
                      <span>View formation packages</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <ol className="space-y-3">
                    {[
                      "Choose the formation package that fits your needs.",
                      "Confirm the proposed address and its authorised uses.",
                      "Complete onboarding before the incorporation is filed.",
                    ].map((step, i) => (
                      <li
                        key={step}
                        className="grid grid-cols-[2rem_1fr] items-center gap-3 border border-border bg-background p-4 text-sm"
                      >
                        <span className="inline-flex h-7 w-7 items-center justify-center border border-gold/40 font-display font-bold text-gold">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: THE STATUTORY ESSENTIALS (4 CHECKS + GOV.UK LINKS) ── */}
        <section className="border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The statutory essentials</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Four checks for your UK registered office address
            </h2>

            <div className="mt-8 grid border border-border bg-card/30 md:grid-cols-2">
              {PRACTICAL_CHECKS.map((item, index) => (
                <article
                  key={item.title}
                  className="border-b border-border p-6 sm:p-7 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0 last:border-b-0"
                >
                  <span className="font-display text-2xl font-bold text-gold">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Primary guidance:</span>
              <a
                href="https://www.gov.uk/guidance/your-companys-registered-office-address"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Companies House address rules ↗
              </a>
              <a
                href="https://www.gov.uk/change-your-registered-office-address"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Changing a registered office ↗
              </a>
              <a
                href="https://www.gov.uk/guidance/your-personal-information-on-the-public-record-at-companies-house"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Personal information on the register ↗
              </a>
              <a
                href="https://www.gov.uk/guidance/removing-your-home-address-from-the-companies-house-register"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gold transition-colors"
              >
                Removing your home address ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: COMPARISON TABLE ── */}
        <section
          id="compare"
          className="section-parchment scroll-mt-28 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Three roles. No blurred lines.</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Which address do you actually need?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Each address solves a different problem. Combining them is common, provided each use
              is expressly authorised.
            </p>

            <div className="mt-8 overflow-x-auto border border-border bg-background">
              <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-card/60">
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Primary purpose
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Public register
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Typical post
                    </th>
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
                      Not a substitute for
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {ADDRESS_COMPARISON.map((row) => {
                    const isActive = row.key === "registered";
                    return (
                      <tr
                        key={row.key}
                        className={isActive ? "bg-gold/10" : "hover:bg-card/40 transition-colors"}
                      >
                        <th scope="row" className="p-4 align-top font-semibold text-foreground">
                          <Link href={row.href} className="hover:text-gold hover:underline">
                            {row.name}
                          </Link>
                          {isActive && (
                            <span className="mt-1 block text-[0.7rem] font-bold uppercase tracking-wider text-gold">
                              This page
                            </span>
                          )}
                        </th>
                        <td className="p-4 align-top font-display text-lg font-bold text-gold">
                          {row.price}
                        </td>
                        <td className="p-4 align-top text-foreground">{row.purpose}</td>
                        <td className="p-4 align-top text-muted-foreground">{row.publicRecord}</td>
                        <td className="p-4 align-top text-muted-foreground">{row.post}</td>
                        <td className="p-4 align-top text-muted-foreground">{row.notFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: FAQs ── */}
        <section id="faqs" className="scroll-mt-28 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Clear answers before you commit</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Registered office address questions
            </h2>

            <div className="mt-8 max-w-4xl border-t border-border">
              {FAQS.map(({ q, a }) => (
                <details key={q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left text-base font-semibold text-foreground hover:text-gold transition-colors">
                    <span>{q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 9: FORMATION, RELATED SERVICES & INTERNAL BLOG LINKS ── */}
        <section className="border-t border-border px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="eyebrow">Keep the services connected</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
                Forming a company, or arranging an address separately?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Prestige (£399) and Elite (£699) formation packages include registered office and
                director service addresses for the first 12 months, subject to onboarding and agreed
                mail handling. Starter (£199) focuses on core incorporation — confirm your address
                route before filing.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/services/uk-company-formation-for-non-residents"
                  className="btn-gold inline-flex items-center justify-center gap-2"
                >
                  <span>Compare formation packages</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Ask which setup fits</span>
                </a>
              </div>
            </div>

            <div className="border border-border bg-card/40 p-6 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Related services and blog guides
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link
                    href="/services/virtual-business-address"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>UK Virtual Business Address (£150/year)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/director-service-address"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>UK Director Service Address (£35/year)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/uk-company-formation-for-non-residents"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>UK Company Formation for Non-Residents</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/companies-house-verification"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline"
                  >
                    <span>Companies House Identity Verification</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li className="border-t border-border pt-3">
                  <Link
                    href="/blog/registered-office-vs-director-service-address-uk"
                    className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
                  >
                    <span>Blog: Registered Office vs Director Service Address UK (2026 Guide)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/uk-company-formation-without-uk-address"
                    className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
                  >
                    <span>Blog: UK Company Formation Without a UK Address (2026 Guide)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/uk-company-formation-london-business-address"
                    className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
                  >
                    <span>Blog: UK Company Formation with a London Business Address</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: ENQUIRY / ORDER CTA ── */}
        <section
          id="enquire"
          className="section-dark scroll-mt-28 border-t border-border/30 px-4 py-14 sm:px-6 md:py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Confirm the fit before you pay</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground">
                Arrange the right registered office for your company
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tell us whether you are forming a new UK company or updating an existing one. We
                will confirm the available address, covered post, forwarding options and any
                required checks before you rely on the address.
              </p>
            </div>
            <div>
              <ServiceOrderActions />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Do not send passports or proof-of-address files by email or WhatsApp until we
                confirm the onboarding check route.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

