import Link from "next/link";

const CH_IDV_GUIDANCE = "https://www.gov.uk/guidance/verifying-your-identity-for-companies-house";
const COMPANIES_HOUSE = "https://find-and-update.company-information.service.gov.uk/company/16903092";
const ICO_REGISTER = "https://ico.org.uk/ESDWebPages/Search";

const PRACTICES = [
  [
    "Encryption in transit and at rest",
    "The site and our client channels are served over HTTPS/TLS, and documents you send us are stored encrypted at rest by our hosting and storage providers.",
  ],
  [
    "Access control",
    "Client files are accessible only to the advisers working on your engagement, on individual accounts with two-factor authentication enabled.",
  ],
  [
    "Secure hosting",
    "We rely on established UK/EU cloud infrastructure providers rather than self-managed servers, and we do not store payment card data — card payments are processed directly by Stripe.",
  ],
  [
    "Backups and deletion",
    "Records are backed up regularly. AML records are kept for five years after our relationship ends, as UK law requires; other documents are deleted on request or once no longer needed.",
  ],
  [
    "Incident response",
    "If a data incident affected your information, we would investigate, contain it, notify affected clients, and report to the ICO where the law requires it.",
  ],
];

const REGULATORY = [
  [
    "Companies House",
    "Companies House is the UK registrar of companies. Every incorporation we prepare is filed into that official framework, and your company record is publicly verifiable once registered.",
  ],
  [
    "Economic Crime and Corporate Transparency Act (ECCTA)",
    "ECCTA introduced stricter identity-verification and transparency duties for UK companies, their directors and people with significant control. We prepare every engagement to meet these requirements as they apply to you.",
  ],
  [
    "Who prepares and files your company",
    "Seven Oak Prestige prepares and submits your incorporation to Companies House. Your matter stays with one named adviser — there is no hand-off to an anonymous intermediary — and every filing is made in line with Companies House requirements.",
  ],
  [
    "Anti-money laundering (AML)",
    "UK AML rules require us to identify and verify every client and beneficial owner before a company is formed. This protects you as much as it protects the register — it is the reason we cannot skip document checks.",
  ],
];

const IDV_STEPS = [
  ["You submit your documents", "A valid passport or national ID, plus your residential address details."],
  [
    "Onfido or Credas verifies them",
    "We use our KYC and AML verification partners, Onfido and Credas, to check the document and match it to you. Which partner is used depends on your document type and country.",
  ],
  [
    "Verification is recorded for your filing",
    "We use the verified result for the Companies House filing we prepare on your behalf, and keep it in our AML records.",
  ],
];

function Row({ items }: { items: string[][] }) {
  return (
    <dl className="mt-10 divide-y divide-border border-t border-border">
      {items.map(([t, b]) => (
        <div key={t} className="py-7">
          <dt className="font-sans text-base font-semibold text-foreground/90">{t}</dt>
          <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{b}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function SecurityPageEn() {
  return (
    <div className="bg-background pt-8 pb-16">
      <section className="border-b border-border px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Trust &amp; Security</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
            How we protect your data — and how you can verify us.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            We do not display badges or certifications we have not earned. Instead, this page sets out exactly
            what we do, so you can judge for yourself.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold-soft">
            <a href={COMPANIES_HOUSE} target="_blank" rel="noreferrer" className="hover:text-gold">
              Companies House record →
            </a>
            <a href={CH_IDV_GUIDANCE} target="_blank" rel="noreferrer" className="hover:text-gold">
              GOV.UK identity verification guidance →
            </a>
            <a href={ICO_REGISTER} target="_blank" rel="noreferrer" className="hover:text-gold">
              ICO register search →
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Security practices</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Plainly stated, with nothing overclaimed.
          </h2>
          <Row items={PRACTICES} />
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Regulatory position</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
            The rules we work under, in plain English.
          </h2>
          <Row items={REGULATORY} />
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Identity verification</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">How we verify your identity.</h2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3">
            {IDV_STEPS.map(([t, b], i) => (
              <li key={t}>
                <span className="font-display text-4xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-sans text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Privacy &amp; data protection</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Your data is used for your filing — nothing else.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Seven Oak Prestige Ltd is the data controller for the information you give us and is registered
            with the UK Information Commissioner&apos;s Office as a data controller; our registration reference
            is available on request. We process personal data under UK GDPR and the Data Protection Act 2018.
            We do not sell your data and we do not use it for third-party marketing.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold-soft">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy →
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms &amp; Conditions →
            </Link>
            <Link href="/data-protection" className="hover:text-gold">
              Data Protection &amp; AML →
            </Link>
            <Link href="/refund" className="hover:text-gold">
              Refund Policy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
