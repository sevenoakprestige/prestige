import Link from "next/link";
import { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guides & Insights | UK Company Formation for Non-Residents",
  description:
    "Practical guides for international founders: incorporation requirements, registered office and director service addresses, identity verification, VAT, EORI and banking readiness.",
  alternates: {
    canonical: "https://www.sevenoakprestige.com/resources/guides",
  },
  openGraph: {
    title: "Guides & Insights | Seven Oak Prestige",
    description:
      "How UK incorporation works for non-residents — documents, addresses, verification, tax registrations and banking readiness explained.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const WHATSAPP = "https://wa.me/447447488755";

const GUIDES = [
  {
    kicker: "Formation",
    title: "Forming a UK limited company as a non-resident",
    body: "UK residency is not generally required to own shares in or act as a director of a private limited company. You will need a company name, a registered office in the UK, at least one director and shareholder, share capital and SIC codes describing the activity. Incorporation remains subject to Companies House requirements and identity verification.",
    covered: "Included in every package.",
  },
  {
    kicker: "Addresses",
    title: "Registered office vs director service address",
    body: "The registered office is the company's official public address for Companies House and HMRC correspondence. A director service address is the address shown publicly for the director, keeping a residential address off the public register. Both are separate from a trading or correspondence address.",
    covered: "Included for 12 months on Prestige and Elite.",
  },
  {
    kicker: "Verification",
    title: "Companies House identity verification",
    body: "Directors and people with significant control must verify their identity under the current Companies House regime. Verification can be completed directly or through an authorised route. We guide you through the documents required and the sequence in which they are submitted.",
    covered: "Guidance included; verification available from £59.",
  },
  {
    kicker: "Documents",
    title: "What you must provide before we file",
    body: "You will normally need valid identity documentation, residential address information and the company details required for incorporation. Additional KYC or proof-of-address documents may be requested depending on the case. Nothing is filed until you approve the name, shareholding and SIC codes.",
    covered: "Reviewed with your adviser at onboarding.",
  },
  {
    kicker: "Tax",
    title: "Corporation Tax, VAT and the UTR",
    body: "Your company number is issued on incorporation and the Corporation Tax UTR is forwarded once received from HMRC. VAT registration may be required or voluntary depending on turnover, place of supply and activity — we assess your position and support the registration where applicable.",
    covered: "VAT registration support available.",
  },
  {
    kicker: "Trade",
    title: "EORI numbers for importers and exporters",
    body: "An EORI number is required to move goods into or out of the UK. Marketplace sellers shipping stock into UK fulfilment centres normally need one alongside VAT registration. We prepare and submit the application with the company details already on file.",
    covered: "EORI registration support available.",
  },
  {
    kicker: "Banking",
    title: "Banking and payment readiness",
    body: "Forming a UK company does not guarantee banking approval. Eligibility depends on the provider, founder residence, business activity, KYC, source of funds and expected transactions. We prepare your documentation and application so it is presented clearly — the final decision always rests with the provider.",
    covered: "Banking readiness support on Elite.",
  },
  {
    kicker: "Compliance",
    title: "Staying compliant after incorporation",
    body: "A UK company must file a confirmation statement each year, maintain accurate registers, keep its registered office current and file annual accounts. We send compliance reminders ahead of each deadline and support the filings within your package scope.",
    covered: "Compliance reminders on all packages.",
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <div className="border-b border-border px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Guides &amp; insights</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
            How UK incorporation works, explained plainly.
          </h1>
          <div className="mt-8 h-px w-24 rule-gold" />
          <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Straightforward briefings for international founders — what is required, what each service does and
            where each package applies. No jargon and no exaggerated claims.
          </p>
        </div>
      </div>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-2">
          {GUIDES.map((g) => (
            <article key={g.title} className="bg-background p-8 sm:p-10">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">{g.kicker}</p>
              <h2 className="mt-5 font-display text-2xl leading-snug">{g.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
              <p className="mt-7 border-t border-border pt-5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
                {g.covered}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl">Still have a question?</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Speak with a named adviser before you commit, or read the answers to the questions we are asked most
            often.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP} className="btn-gold">
              Speak to an adviser
            </a>
            <Link href="/#faq" className="btn-ghost">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
