"use client";

import { useState } from "react";

const WA_NUMBER = "447447488755";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const B2B_WA = wa("Hello Seven Oak Prestige, I would like to discuss a B2B / partnership arrangement.");

const TRUST = ["No Minimum Volume", "Flexible Partner Pricing", "International Client Support", "White-Label Options Available"];

const WHO = [
  ["Corporate Service Providers", "Add UK entities to your offering without building UK operations."],
  ["Accountants & Tax Advisers", "Formation and ongoing compliance for clients expanding into the UK."],
  ["Immigration & Relocation Consultants", "A reliable UK corporate partner for clients relocating or investing."],
  ["Lawyers & Professional Advisers", "Structured delivery for clients who need a UK company alongside your advice."],
  ["Business Consultants & Agencies", "Including e-commerce and international incorporation agencies."],
  ["Independent Consultants & Introducers", "Freelancers and individuals who regularly refer entrepreneurs."],
];

const MODELS = [
  {
    n: "01",
    name: "Referral Partner",
    body: "You introduce the client and Seven Oak delivers the agreed service directly.",
    fit: "Best for occasional introductions and independent consultants.",
  },
  {
    n: "02",
    name: "B2B / Reseller Partner",
    body: "You retain the main commercial relationship and purchase Seven Oak services at agreed partner pricing.",
    fit: "Best for firms that invoice their own clients.",
  },
  {
    n: "03",
    name: "White-Label / Strategic Partner",
    body: "Seven Oak works behind your brand or within an agreed client-management structure for deeper ongoing cooperation.",
    fit: "Best for recurring volume and long-term cooperation.",
  },
];

const SERVICES: [string, string[]][] = [
  ["Formation", ["UK company formation", "Non-resident company formation", "UK subsidiary formation"]],
  ["Addresses", ["Registered Office Address", "Director Service Address", "Virtual Business Address"]],
  ["Banking & Registrations", ["Business banking assistance", "Payment-provider readiness", "VAT registration", "EORI registration"]],
  ["Companies House Compliance", ["Confirmation Statements", "Director / shareholder / company changes", "Ongoing corporate administration"]],
  ["Accounting & Tax", ["Annual accounts", "CT600 / Corporation Tax", "Bookkeeping", "VAT returns", "Payroll", "Self Assessment"]],
];

const WHY = [
  ["Your Client Relationship Is Respected", "Agree the delivery structure before work begins."],
  ["No Minimum Volume", "Start with one client and scale progressively."],
  ["International Founder Experience", "Built around UK support for overseas founders and businesses."],
  ["Flexible Commercial Models", "Referral, reseller and white-label arrangements."],
  ["One UK Partner, Multiple Services", "Formation through ongoing accounting and compliance."],
  ["Human Partner Support", "Complex cases can be reviewed by experienced advisers."],
];

const STEPS = [
  ["01", "Tell us about your business", "Share who you work with and the services your clients need."],
  ["02", "Agree the partnership model", "Referral, reseller or white-label — with pricing and responsibilities confirmed in writing."],
  ["03", "Send your first client", "One case is enough to begin."],
  ["04", "Seven Oak delivers the agreed service", "Onboarding, filings and follow-up handled under the agreed structure."],
  ["05", "Scale the relationship", "Adjust the arrangement as your volume develops."],
];

const EXPERTISE = [
  "Remote onboarding for directors and shareholders outside the UK",
  "Clear guidance on Companies House identity verification",
  "Address options that meet UK requirements for non-residents",
  "Banking and payment-provider preparation, with honest eligibility guidance",
  "Support in plain English, across time zones",
];

const FAQS = [
  {
    q: "Do I need a registered company to become a partner?",
    a: "No. Independent consultants, freelancers and introducers are welcome to enquire. A registered company is not required to submit an initial enquiry.",
  },
  {
    q: "Is there a minimum number of clients?",
    a: "No minimum client volume is required to start. Partners can begin with a single client.",
  },
  {
    q: "How is partner pricing set?",
    a: "Partner pricing is tailored to the services required, expected volume and level of support. Partners can start with a single client.",
  },
  {
    q: "Who owns the client relationship?",
    a: "This is agreed before work begins. In reseller and white-label arrangements you keep the main commercial relationship; in referral arrangements Seven Oak serves the client directly.",
  },
  {
    q: "Can Seven Oak work under my brand?",
    a: "White-label and strategic arrangements are available and are structured case by case.",
  },
  {
    q: "Do referred clients still go through checks?",
    a: "Yes. Every end client completes the applicable KYC, AML and sanctions screening. Partner status does not bypass these requirements.",
  },
  {
    q: "Can you guarantee a bank account for my clients?",
    a: "No. We help assess the client profile and prepare applications, but approval always remains with the bank or payment provider.",
  },
  {
    q: "Do you work with partners outside the UK?",
    a: "Yes. The programme is designed for both UK-based and international partners.",
  },
];

const VOLUMES = ["Occasional referrals", "1–5 clients/month", "6–20 clients/month", "20+ clients/month", "Not sure yet"];
const MODEL_OPTS = ["Referral", "B2B reseller", "White-label", "Not sure"];
const TYPES = [
  "Corporate service provider",
  "Accountant / tax adviser",
  "Immigration / relocation consultant",
  "Lawyer / professional adviser",
  "Business consultant / agency",
  "Independent consultant / introducer",
  "Other",
];
const SERVICE_OPTS = ["Company formation", "Addresses", "Banking readiness", "VAT / EORI", "Companies House compliance", "Accounting & tax"];

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{children}</p>
      <div className="mt-4 h-px w-16 rule-gold" />
    </div>
  );
}

function Dot() {
  return <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />;
}

function PartnerFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
              >
                <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                <span className={`mt-1 shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                </span>
              </button>
            </h3>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const field = "mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-gold";
const label = "block text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground";

function PartnerForm() {
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim() || "—";
    
    // Combine everything into the message field formatted nicely in HTML so mailer.ts renders it
    const combinedMessage = `
      <br><strong>Country:</strong> ${g("country")}
      <br><strong>Website:</strong> ${g("website")}
      <br><strong>Type:</strong> ${g("type")}
      <br><strong>Services:</strong> ${services.length ? services.join(", ") : "—"}
      <br><strong>Expected volume:</strong> ${g("volume")}
      <br><strong>Preferred partnership:</strong> ${g("model")}
      <br><br><strong>Message:</strong><br>${g("message").replace(/\n/g, '<br>')}
    `;

    const data = {
      fullName: g("name"),
      email: g("email"),
      phone: g("whatsapp"),
      companyName: g("org"),
      source: "Partnership Enquiry",
      lang: "en",
      message: combinedMessage
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus('success');
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center border border-border bg-background">
        <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold font-sans">Thank You!</h3>
        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
          We have successfully received your partnership request. A member of our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 border border-border bg-background p-6 sm:grid-cols-2 sm:p-10">
      {status === 'error' && (
        <div className="sm:col-span-2 flex items-center gap-2 rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-200">
          <p>{errorMessage}</p>
        </div>
      )}
      <label className={label}>Full name *<input name="name" required maxLength={100} className={field} /></label>
      <label className={label}>Company / organisation (optional)<input name="org" maxLength={120} className={field} /></label>
      <label className={label}>Country *<input name="country" required maxLength={80} className={field} /></label>
      <label className={label}>Website (optional)<input name="website" type="url" maxLength={200} placeholder="https://" className={field} /></label>
      <label className={label}>Email *<input name="email" type="email" required maxLength={160} className={field} /></label>
      <label className={label}>WhatsApp number *<input name="whatsapp" type="tel" required maxLength={30} className={field} /></label>
      <label className={`${label} sm:col-span-2`}>
        Business / professional type *
        <select name="type" required defaultValue="" className={field}>
          <option value="" disabled>Select</option>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <fieldset className="sm:col-span-2">
        <legend className={label}>Services of interest</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICE_OPTS.map((s) => {
            const on = services.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => setServices((v) => (on ? v.filter((x) => x !== s) : [...v, s]))}
                className={`border px-3 py-2 text-xs transition-colors ${on ? "border-gold bg-gold text-primary-foreground" : "border-border hover:border-gold"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>
      <label className={label}>
        Expected client volume *
        <select name="volume" required defaultValue="" className={field}>
          <option value="" disabled>Select</option>
          {VOLUMES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className={label}>
        Preferred partnership *
        <select name="model" required defaultValue="" className={field}>
          <option value="" disabled>Select</option>
          {MODEL_OPTS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Brief message
        <textarea name="message" rows={4} maxLength={1000} className={field} />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'loading'} className="btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'loading' ? 'Sending...' : 'Submit Partnership Enquiry'}
        </button>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          A registered company is not required to enquire. Our partnership team will reply to you directly.
        </p>
      </div>
    </form>
  );
}

export default function PartnersEn() {
  return (
    <div className="bg-background">
      <main>
        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">Seven Oak Prestige Partner Programme</p>
            <div className="mt-4 h-px w-24 rule-gold" />
            <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-[3.35rem]">
              Partner With Seven Oak Prestige
            </h1>
            <p className="mt-5 max-w-2xl font-display text-xl text-gold-soft sm:text-2xl">
              Your client. Your relationship. Our UK infrastructure.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
              Expand the UK services you can offer your clients with company formation, address, compliance, banking-readiness and accounting support. Whether you introduce one client occasionally or manage recurring international volume, we can build a partnership structure around your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#apply" className="btn-gold w-full sm:w-auto">Become a Partner</a>
              <a href={B2B_WA} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto">Discuss a B2B Arrangement</a>
            </div>
          </div>
        </section>

        <div className="border-b border-border section-parchment px-6 py-6">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 text-sm font-medium lg:grid-cols-4">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-3"><Dot />{t}</li>
            ))}
          </ul>
        </div>

        <Section>
          <Eyebrow>Who can partner</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Bring Us One Client or One Hundred. Seven Oak Supports You.</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {WHO.map(([t, b]) => (
              <div key={t} className="bg-background p-7">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
            An individual consultant without a registered agency may still enquire.
          </p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>Partnership models</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Three Flexible Ways to Work Together</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {MODELS.map((m) => (
              <article key={m.name} className="flex flex-col border border-border bg-background p-7 sm:p-8">
                <span className="font-display text-3xl text-gold">{m.n}</span>
                <h3 className="mt-4 text-xl">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{m.body}</p>
                <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">{m.fit}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 border-l-2 border-gold pl-5">
            <p className="font-semibold">No minimum client volume is required to start.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Partner pricing is tailored to the services required, expected volume and level of support. Partners can start with a single client.
            </p>
          </div>
        </Section>

        <Section>
          <Eyebrow>Services available to partners</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">From Formation to Ongoing Compliance</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([group, items]) => (
              <div key={group} className="border border-border p-7">
                <h3 className="text-lg">{group}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-foreground/85">
                  {items.map((i) => <li key={i} className="flex gap-3"><Dot />{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>Why partner with Seven Oak</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">A UK Partner Built for Intermediaries</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(([t, b]) => (
              <div key={t} className="bg-background p-7">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <Eyebrow>How partnership works</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Five Clear Steps</h2>
          <ol className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(([n, t, b]) => (
              <li key={n} className="bg-background p-6">
                <span className="font-display text-2xl text-gold">{n}</span>
                <h3 className="mt-3 text-base">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>
        </Section>

        <section className="section-dark border-y border-border px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Non-resident expertise</p>
              <div className="mt-4 h-px w-16 rule-gold" />
              <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">Built Around International Founders</h2>
              <p className="mt-6 leading-relaxed text-foreground/85">
                Many of your clients will live outside the UK. Our processes are designed for overseas directors and shareholders from the first enquiry onwards.
              </p>
            </div>
            <ul className="space-y-4 text-sm text-foreground/90">
              {EXPERTISE.map((t) => <li key={t} className="flex gap-3 border-b border-border pb-4"><Dot />{t}</li>)}
            </ul>
          </div>
        </section>

        <Section>
          <Eyebrow>Compliance &amp; client protection</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Professional Standards on Every Case</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-foreground/85">
            All end clients remain subject to applicable KYC, AML, sanctions screening and service-provider eligibility requirements. Partner status does not bypass regulatory or compliance requirements. Banking, payment-provider, tax and regulatory outcomes remain subject to the relevant provider or authority.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Seven Oak Prestige Ltd · Company No. 16903092 · ICO Registration No. ZC181349
          </p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-6 mb-10 max-w-3xl text-3xl leading-tight sm:text-4xl">Partner Questions</h2>
          <PartnerFaq />
        </Section>

        <Section id="apply">
          <Eyebrow>Partnership application</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-3xl leading-tight sm:text-4xl">Tell Us About Your Business</h2>
          <p className="mt-4 mb-10 max-w-2xl text-sm text-muted-foreground">Takes about two minutes. We reply with next steps and a proposed structure.</p>
          <PartnerForm />
        </Section>

        <section className="section-dark px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Your Clients Need UK Support. You Don’t Need to Build the Infrastructure Yourself.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-foreground/85">
              Start with one case or build a long-term international partnership with Seven Oak Prestige.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#apply" className="btn-gold w-full sm:w-auto">Become a Seven Oak Partner</a>
              <a href={B2B_WA} target="_blank" rel="noreferrer" className="btn-ghost w-full sm:w-auto">Speak With Our Partnership Team</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
