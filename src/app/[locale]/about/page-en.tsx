"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

const WHATSAPP =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20discuss%20my%20UK%20company%20setup.";

const TRUST_ITEMS = [
  ["UK-Registered Company", "Seven Oak Prestige Ltd · Company No. 16903092"],
  ["London Registered Office", "124 City Road, London EC1V 2NX"],
  ["ICO Registered", "Registration No. ZC181349"],
  ["International Founder Support", "Remote onboarding for eligible overseas clients"],
];

const LIMITS = [
  ["Companies House approval", "Final incorporation decisions remain with Companies House."],
  [
    "Bank or fintech approval",
    "Banks, EMIs and payment providers make their own KYC, eligibility and risk decisions.",
  ],
  [
    "Tax, legal or regulatory outcomes",
    "These depend on the client’s circumstances and may require assessment by an appropriately qualified professional.",
  ],
  ["Immigration outcomes", "UK company ownership does not itself provide residence or work rights."],
];

const AUDIENCES = [
  ["International founders", "Setting up their first UK limited company while continuing to live overseas."],
  ["Established overseas businesses", "Creating a UK subsidiary or UK presence as part of international expansion."],
  ["E-commerce and digital businesses", "Needing a UK company, address infrastructure and banking readiness."],
  [
    "Consultants, agencies and technology companies",
    "Establishing a professional UK structure for international business.",
  ],
  [
    "Founders with more complex profiles",
    "Where residence, ownership or documentation requires more careful preparation before applying.",
  ],
];

const DIFFERENTIATORS = [
  [
    "Human review before filing",
    "Your incorporation details are reviewed before submission, helping identify inconsistencies that automated formation portals may miss.",
  ],
  [
    "Built around non-resident founders",
    "Our process is designed around overseas documents, remote onboarding, international ownership and banking-readiness issues.",
  ],
  [
    "Clear pricing before commitment",
    "Our formation packages and year-two address renewal fees are published upfront so you can understand the commercial commitment before purchasing.",
  ],
  [
    "Banking readiness, not banking promises",
    "We help eligible clients prepare and apply for suitable business banking or fintech solutions. Final decisions always remain with the provider.",
  ],
];

const PROCESS = [
  [
    "Understand the proposed business",
    "We establish the founder profile, business activity, ownership and services required.",
  ],
  [
    "Select the appropriate setup",
    "You choose the formation package and any additional services relevant to your case.",
  ],
  [
    "Complete secure onboarding",
    "Identity, address and company information are collected through the appropriate onboarding and verification process.",
  ],
  ["Adviser review", "We review the information and resolve material inconsistencies before filing."],
  [
    "Incorporation",
    "Once the required checks are complete, the application is prepared and submitted to Companies House.",
  ],
  [
    "Post-incorporation support",
    "Depending on your package and requirements, we can assist with address services, documentation, banking readiness and other agreed services.",
  ],
];

const REVIEWS = [
  {
    name: "Vbvvb Bbjbb",
    text: "I had a great experience working with this company for my UK company registration. The entire process was smooth, professional, and well-organized. Their team was always responsive, answered my questions clearly, and kept me updated throughout every step. Everything was completed on time, exactly as promised.",
  },
  {
    name: "Safaat Siddhi",
    text: "The service was efficient, transparent, and delivered as promised.",
  },
  {
    name: "albalushi Mazan",
    text: "I am pleased to share my excellent experience with this company, where I witnessed a high level of professionalism and dedication. From what I observed, the team consists of hardworking employees with a strong sense of responsibility and commitment. I extend my sincere thanks and appreciation to them for their efforts and continued dedication.",
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=seven+oak+prestige+reviews";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{children}</p>
      <div className="mt-4 h-px w-16 rule-gold" />
    </div>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{children}</h2>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.47 5.27 5.53.72-4.06 3.9 1.03 5.61L10 14.35 5.03 17l1.03-5.61L2 7.49l5.53-.72L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function AboutPageEn() {
  return (
    <div className="bg-background">
      <main>
        <section className="section-dark border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-0 pt-20 sm:pt-28">
            <div className="grid gap-12 pb-16 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:pb-24">
              <div>
                <Eyebrow>About Seven Oak Prestige</Eyebrow>
                <h1 className="mt-8 max-w-4xl text-4xl leading-[1.06] sm:text-5xl lg:text-[4rem]">
                  UK Company Formation Built Around International Founders
                </h1>
              </div>
              <div className="border-l border-border pl-6 sm:pl-8">
                <p className="text-base leading-relaxed text-foreground/90">
                  Seven Oak Prestige Ltd helps international entrepreneurs establish and maintain UK companies with clear guidance, secure onboarding and practical support beyond incorporation.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  From company formation and UK address services to Companies House compliance and banking readiness, we help you understand what is required, what happens next and where third-party approval still applies.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={WHATSAPP} className="btn-gold w-full sm:w-auto">Discuss Your UK Setup on WhatsApp</a>
                  <Link href="/#pricing" className="btn-ghost w-full sm:w-auto">View Formation Packages</Link>
                </div>
              </div>
            </div>

            <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {TRUST_ITEMS.map(([title, detail], index) => (
                <div key={title} className="relative border-b border-border py-7 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <span className="absolute left-0 top-0 h-px w-10 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold text-foreground">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                  <span className="sr-only">Verified item {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-parchment border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Transparency matters">What We Will Never Promise You</SectionHeading>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A professional adviser should tell you where its responsibility ends.
            </p>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {LIMITS.map(([title, detail]) => (
                <article key={title} className="bg-background p-7 sm:p-8">
                  <div className="h-0.5 w-8 bg-gold" />
                  <h3 className="mt-6 text-lg leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-gold bg-primary px-7 py-8 font-display text-xl leading-snug text-primary-foreground sm:px-10 sm:py-10 sm:text-2xl">
              “Our commitment is not to promise every outcome. It is to prepare your case professionally, communicate clearly and tell you when specialist advice is required.”
            </blockquote>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading eyebrow="Why Seven Oak exists">Incorporation Is the Beginning, Not the Whole Setup</SectionHeading>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p className="font-display text-2xl leading-snug text-foreground">
                Registering a UK company can be straightforward. Building a structure that is usable afterwards is where international founders often need more support.
              </p>
              <p>Identity verification, a suitable UK address, Companies House correspondence, banking eligibility, tax registrations and ongoing compliance can all become important after incorporation.</p>
              <p>Seven Oak Prestige was built to help founders understand not only how to register a UK company, but what must happen afterwards.</p>
              <p className="border-t border-border pt-5 font-medium text-foreground">We do not believe in selling an incorporation and leaving the founder to work out the rest alone.</p>
            </div>
          </div>
        </section>

        <section className="section-parchment border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Who we support">Built for International Business Owners</SectionHeading>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Seven Oak Prestige supports entrepreneurs and overseas businesses establishing a genuine UK company for commercial purposes.
            </p>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
              {AUDIENCES.map(([title, detail], index) => (
                <article key={title} className="min-h-64 bg-background p-7 transition-colors duration-300 hover:bg-accent">
                  <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-10 text-lg leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-4xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted-foreground">
              Every case is assessed on its actual facts. Residence, nationality, business activity, ownership and documentation can affect which services and providers are available.
            </p>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="More than an online formation form">A More Considered Way to Establish Your UK Company</SectionHeading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {DIFFERENTIATORS.map(([title, detail], index) => (
                <article key={title} className="grid gap-5 py-8 sm:grid-cols-[5rem_0.75fr_1.25fr] sm:items-start sm:gap-8">
                  <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl leading-snug">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {detail}{" "}
                    {index === 2 && <Link href="/#pricing" className="font-semibold text-gold-soft underline decoration-gold/40 underline-offset-4">View formation packages.</Link>}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeading eyebrow="Founder-led">Human Support, Not an Anonymous Portal</SectionHeading>
            <div className="lg:border-l lg:border-border lg:pl-12">
              <p className="font-display text-2xl leading-snug text-foreground">
                Seven Oak Prestige operates with a hands-on, founder-led approach rather than as an anonymous automated formation platform.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">Our clients receive direct guidance throughout onboarding, incorporation and the agreed post-incorporation services.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Where we can assist directly, we do.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Where a matter requires specialist accounting, legal, tax or immigration expertise, we make that distinction clearly rather than pretending one provider can legitimately do everything.</p>
              <a href={WHATSAPP} className="btn-gold mt-9 w-full sm:w-auto">Ask Our Team About Your Setup</a>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="How we work">A Clear Process From Enquiry to Incorporation</SectionHeading>
            <div className="relative mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map(([title, detail], index) => (
                <article key={title} className="relative bg-background p-8">
                  <span className="absolute left-0 top-0 h-px w-full bg-gold/50" aria-hidden="true" />
                  <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-7 text-xl leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-24 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
              <div>
                <Eyebrow>Client experience</Eyebrow>
                <h3 className="mt-6 text-3xl sm:text-4xl">In Their Own Words</h3>
              </div>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-gold">
                <GoogleMark /> View Our Google Reviews
              </a>
            </div>
            <div className="grid gap-px bg-border lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <a key={review.name} href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="flex min-h-72 flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent">
                  <div className="flex items-center justify-between"><Stars /><GoogleMark /></div>
                  <blockquote className="mt-7 flex-1 font-display text-lg leading-snug text-foreground/90">“{review.text}”</blockquote>
                  <p className="mt-8 border-t border-border pt-5 text-xs font-semibold text-foreground">{review.name} <span className="font-normal text-muted-foreground">· Google review</span></p>
                </a>
              ))}
            </div>

            <div className="section-parchment mt-24 grid gap-10 border border-border p-8 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-14">
              <div>
                <Eyebrow>A real international founder case</Eyebrow>
                <h3 className="mt-6 text-3xl leading-tight">UK Company Formation From Overseas</h3>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {[
                  ["Situation", "An international founder residing overseas required a UK company for a digital business without travelling to the UK."],
                  ["Challenge", "Remote onboarding, review of overseas residence documentation and preparation of a consistent company structure."],
                  ["Our role", "KYC and document support, company structure, Companies House submission and post-incorporation banking readiness."],
                  ["Result", "The company was successfully incorporated once the required information and verification were complete."],
                ].map(([label, detail]) => (
                  <div key={label} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                    <p className="text-xs font-semibold uppercase text-gold-soft">{label}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                ))}
                <p className="py-5 text-xs leading-relaxed text-muted-foreground">Individual circumstances and processing times vary. Companies House and third-party providers retain their own approval and processing responsibilities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-end">
              <div>
                <Eyebrow>Ready when you are</Eyebrow>
                <h2 className="mt-7 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">Start With a UK Company Setup You Understand</h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">Whether you are forming your first UK company or establishing a UK presence for an existing overseas business, we can help you understand the process, select the appropriate services and complete the setup remotely.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                <a href={WHATSAPP} className="btn-gold w-full sm:w-auto">Discuss Your UK Setup on WhatsApp</a>
                <Link href="/#pricing" className="btn-ghost w-full sm:w-auto">Compare Formation Packages</Link>
              </div>
            </div>
            <ul className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                "No UK travel required for standard eligible formations",
                "Companies House filing included in every formation package",
                "Clear year-two address pricing",
                "Human support throughout onboarding",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border py-5 text-sm text-foreground/90 sm:px-5 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}
                </li>
              ))}
            </ul>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
