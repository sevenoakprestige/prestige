"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  Globe2,
  Mail,
  MessageCircle,
  Plus,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";

const STRIPE_CHECKOUT_URL = "https://buy.stripe.com/28EdR1asU8zHfIFf7Sfw405";
const CONTACT_EMAIL = "contact@sevenoakprestige.com";
const WHATSAPP_BASE = "https://wa.me/447447488755";

const EMAIL_SUBJECT = "Virtual Business Address order request — £150/year";
const MESSAGE_TEXT =
  "Hello Seven Oak Prestige, I would like to start an order for your virtual business address service (£150/year). Please confirm the address, permitted use, mail handling and onboarding terms before payment. I will not send identity documents in this initial message.";

const EMAIL_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(MESSAGE_TEXT)}`;
const WHATSAPP_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent(MESSAGE_TEXT)}`;

const DEFINITION =
  "A virtual business address is a commercial correspondence service. It is not, by itself, a registered office, a director service address, a workspace or evidence that your business operates from that location.";

const USE_CASES = [
  {
    title: "International consultants",
    text: "Provide clients with an agreed correspondence address while delivering your work from another country. Describe where you actually work accurately when a client or provider asks.",
  },
  {
    title: "Online sellers",
    text: "Separate business letters from home post. Do not publish the address as a returns centre until parcel acceptance, carrier restrictions and the relevant marketplace’s rules have been checked.",
  },
  {
    title: "Service businesses",
    text: "Keep a consistent correspondence point as your working location changes. Confirm any statutory disclosure requirements separately; a virtual address does not replace them by default.",
  },
];

const RECEIVES = [
  {
    title: "An agreed business-mail use",
    text: "Discuss where you want to display the address: invoices, your website, supplier records or client correspondence. Each use needs to fit the written service terms and any third-party rules.",
  },
  {
    title: "A clear route for incoming letters",
    text: "Before purchase, confirm which mail is accepted, who can be named as recipient, how you are notified and whether scanning or onward delivery is available. Do not assume a forwarding service is included.",
  },
  {
    title: "Terms that fit how you work",
    text: "Ask about expected mail volume, overseas delivery, additional recipients, exclusions and renewal. The quotation should separate included handling from any per-item, postage or optional-service charges.",
  },
];

const EXCLUDES = [
  "A staffed office, desk, meeting room or walk-in reception",
  "Registered office or director use without a separate agreement",
  "Parcel, stock or customer-return handling without approval",
  "Guaranteed acceptance by banks, marketplaces or payment providers",
];

const STEPS = [
  {
    title: "Describe the intended use",
    text: "Tell us your business activity, the business name and where you want to use the address. Include your expected letter volume and whether you need overseas delivery or parcel handling.",
  },
  {
    title: "Agree what can be received",
    text: "Confirm recipients, permitted uses, exclusions, handling options, fees and the service term. Check the requirements of any bank, platform or counterparty independently.",
  },
  {
    title: "Complete approved onboarding",
    text: "Wait for acceptance and written permission before displaying the address. Send any requested documents through the approved secure channel, not an initial email or WhatsApp message.",
  },
  {
    title: "Keep delivery details current",
    text: "Maintain your contact details and any authorised forwarding destination. Review the service as your mail volume or business changes, and arrange continuity before renewal or cancellation.",
  },
];

const PRACTICAL_CHECKS = [
  {
    title: "Letters are not parcels",
    text: "A letter-handling arrangement does not imply acceptance of signed-for packages, stock, large items or customer returns. Ask specifically about carriers, size limits, storage, prohibited items and what happens to unaccepted deliveries.",
  },
  {
    title: "Scanning and forwarding are different",
    text: "Scanning gives you a digital copy if offered; forwarding sends the physical item to an agreed destination if offered. Check whether originals are retained, how they are delivered or disposed of, and what handling and postage cost.",
  },
  {
    title: "Be precise about your business location",
    text: "A correspondence address can be shown for approved business uses. It should not be described as your staffed office, operational base or UK trading premises unless that is actually true. A service address cannot manufacture a physical business presence.",
  },
  {
    title: "Third parties set their own requirements",
    text: "Banks, payment services and marketplaces may ask for your actual operating address or independent evidence of trading. Ask them before applying. A virtual address does not guarantee account approval, business verification or eligibility.",
  },
];

const FAQS = [
  {
    q: "What is a virtual business address?",
    a: "It is an address you are authorised to use for agreed business correspondence, supported by a defined mail-handling arrangement. It lets you separate correspondence from your working location, but does not mean you rent or occupy a physical office.",
  },
  {
    q: "Is a virtual office address the same thing?",
    a: "The phrase virtual office is used for different bundles. Some include telephone answering or meeting space; others are address-only. This page concerns business correspondence. Do not assume workspace, telephone or reception services are included.",
  },
  {
    q: "Can I put the address on invoices and my website?",
    a: "Usually yes, once we confirm the use. Note that GOV.UK requires a limited company to show its registered office address, registered number and place of registration on its website, letters and order forms. A business address is shown in addition to, not instead of, that information.",
  },
  {
    q: "Can I use it as my company’s registered office?",
    a: "Not automatically. A registered office is a legal requirement with its own rules, and it must match the company’s registered jurisdiction: England and Wales, Wales only, Scotland or Northern Ireland. Our registered office service costs £59 per year and can be taken alongside a virtual business address.",
  },
  {
    q: "Can a business based outside the UK apply?",
    a: "You can enquire from abroad. Eligibility depends on your activity, intended use, onboarding and the available service terms. A UK correspondence address does not change your residence, immigration position or tax obligations.",
  },
  {
    q: "Is a London business address available?",
    a: "Ask for the currently available address and authorised uses. We do not promise a specific London location on this page, and the company’s own contact details do not authorise customer use.",
  },
  {
    q: "Will you scan my post or send it overseas?",
    a: "These options need written confirmation. Ask about covered mail, notifications, scanning, original-document retention, forwarding destinations, postage and handling charges. No standalone scanning or international forwarding inclusion is promised here.",
  },
  {
    q: "Can online shoppers send returns to the address?",
    a: "Only if the provider explicitly accepts that use and your platform’s rules allow it. A business letter address should not be used as a returns or stock-handling centre without agreement. Check arrangements before publishing it to customers.",
  },
  {
    q: "Will a bank accept a virtual business address?",
    a: "That is the bank’s decision. It may require an actual trading or operating address and supporting evidence, separately from a correspondence address. Do not buy this service on the assumption that it guarantees a bank or payment account.",
  },
  {
    q: "How much does a virtual business address cost?",
    a: "Our virtual business address costs £150 per year. Before you pay, we confirm the address, the uses allowed and how your mail is handled. Our Elite formation package already includes a virtual business address for the first 12 months.",
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
          <span>Order Virtual Business Address — £150/year</span>
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

export default function VirtualBusinessAddressPageEn() {
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
            name: "Virtual Business Address",
            item: "https://www.sevenoakprestige.com/services/virtual-business-address",
          },
        ],
      },
      {
        "@type": "Service",
        name: "UK Virtual Business Address for Professional Correspondence",
        description:
          "UK virtual business address for £150 a year. Use a professional business address for clients, suppliers and your website, with clear mail handling terms.",
        url: "https://www.sevenoakprestige.com/services/virtual-business-address",
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
        },
        areaServed: "GB",
        offers: {
          "@type": "Offer",
          price: "150",
          priceCurrency: "GBP",
          url: "https://www.sevenoakprestige.com/services/virtual-business-address",
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
                Virtual Business Address
              </span>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
              <div>
                <p className="eyebrow">Seven Oak Prestige · Address services</p>
                <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
                  UK Virtual Business Address for Professional Correspondence
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                  A separate address for business letters, wherever you work. Establish a clear
                  correspondence point for clients and suppliers without presenting it as a staffed
                  office or your place of trading.
                </p>
                <p className="mt-6">
                  <span className="font-display text-4xl font-bold text-gold">£150</span>
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
                <span className="font-display text-2xl font-bold text-gold">02</span>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  Client and supplier correspondence
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Consultants, online sellers and service businesses
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
              aria-label="Client and supplier letters reach an agreed business correspondence address; notification and delivery methods depend on the written terms."
            >
              <div className="flex items-center gap-3.5 text-sm text-foreground">
                <Globe2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Work from anywhere.
                  <br />
                  <strong className="font-display text-lg">Keep correspondence clear.</strong>
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="border border-border/30 bg-background/10 p-4">
                  <span className="font-display text-sm font-bold text-gold">01</span>
                  <strong className="mt-1 block text-sm text-foreground">
                    Client &amp; supplier letters
                  </strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Approved recipients and uses
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-gold md:block"
                  aria-hidden="true"
                />
                <div className="border border-border/30 bg-background/10 p-4">
                  <span className="font-display text-sm font-bold text-gold">02</span>
                  <strong className="mt-1 block text-sm text-foreground">Business address</strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Agreed handling and notification
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-gold md:block"
                  aria-hidden="true"
                />
                <div className="border border-border/30 bg-background/10 p-4">
                  <span className="font-display text-sm font-bold text-gold">03</span>
                  <strong className="mt-1 block text-sm text-foreground">Your next step</strong>
                  <p className="mt-1 text-xs text-muted-foreground">Receive contents as agreed</p>
                </div>
              </div>

              <p className="mt-5 border-t border-border/25 pt-4 text-xs text-muted-foreground">
                Correspondence is not proof of trading premises.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: PHOTO ── */}
        <section className="px-4 pt-10 pb-4 sm:px-6">
          <figure className="mx-auto grid max-w-6xl overflow-hidden border border-border bg-card/40 lg:grid-cols-[1.35fr_0.65fr]">
            <picture>
              <source srcSet="/assets/address-virtual-1280.webp" media="(min-width: 641px)" />
              <img
                src="/assets/address-virtual-640.webp"
                alt="A business owner opening a letter at a sunlit desk beside a laptop"
                width={1280}
                height={730}
                loading="lazy"
                className="aspect-[16/9] h-full w-full object-cover"
              />
            </picture>
            <figcaption className="flex flex-col justify-center gap-4 p-6 sm:p-8">
              <span className="font-display text-2xl leading-snug text-foreground">
                A correspondence point, wherever you work.
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ── SECTION 2: USES (BUILT AROUND YOUR WORKING DAY) ── */}
        <section className="section-parchment mt-8 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Built around your working day</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              For businesses whose work travels further than their post
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

        {/* ── SECTION 3: SCOPE (KNOW WHAT YOU ARE BUYING) ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Know what you are buying</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              A correspondence service. Not an office lease.
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

        {/* ── SECTION 4: HOW IT WORKS ── */}
        <section className="section-parchment px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">From enquiry to authorised use</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Start with how you need to receive your mail
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

        {/* ── SECTION 5: PRACTICAL (MAIL, USE AND VERIFICATION) ── */}
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Mail, use and verification</p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground">
              Before you put the address on your website
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
                href="https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>GOV.UK: business requirements for company stationery</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="opens in a new tab" />
              </a>
              <a
                href="https://www.gov.uk/limited-company-formation/company-address"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 underline decoration-border underline-offset-4 hover:text-gold transition-colors"
              >
                <span>Companies House: when an address is a registered office</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-label="opens in a new tab" />
              </a>
            </div>
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
                    <th
                      scope="col"
                      className="bg-gold/10 p-4 text-xs font-bold uppercase tracking-wider"
                    >
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
                    <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider">
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
                    <td className="bg-gold/10 p-4 align-top font-display text-lg font-bold text-gold">
                      £150/year
                    </td>
                    <td className="p-4 align-top font-display text-lg font-bold text-gold">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground font-medium">
                      Approved client and supplier correspondence
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Covered general business letters
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Commercial service; does not replace statutory uses
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
                    <td className="bg-gold/10 p-4 align-top text-foreground">
                      Permitted uses, recipients, letters versus parcels
                    </td>
                    <td className="p-4 align-top text-muted-foreground">
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
              Virtual business address questions
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
                  href="/services/companies-house-verification"
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
                href="/services/director-service-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Director Service Address (£35/year)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/uk-company-formation-london-business-address"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog: London Business Address Guide (2026)</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/blog/registered-office-vs-director-service-address-uk"
                className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
              >
                <span>Blog: Registered Office vs Director Service Address</span>
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
              Tell us how your business needs to receive its post
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

