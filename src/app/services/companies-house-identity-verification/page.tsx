import { Metadata } from "next";
import Link from "next/link";
import VerificationFaq from "@/components/VerificationFaq";
import Footer from "@/components/Footer";

const PATH = "/services/companies-house-identity-verification";
const CHECKOUT = "https://buy.stripe.com/bJe8wHbwY5nv8gde3Ofw40h";
const WHATSAPP =
  "https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20would%20like%20to%20ask%20about%20Companies%20House%20identity%20verification%20and%20my%20personal%20code.";

const AUDIENCES = [
  "New UK company directors who need a Companies House personal code",
  "Existing directors who still need to complete identity verification",
  "People with Significant Control (PSCs)",
  "Non-UK residents who need assistance navigating the verification process",
  "Applicants who are unable or unsure how to complete an available verification route independently",
];

const INCLUDES = [
  "Initial eligibility and document review",
  "Guidance on the identity-verification process",
  "Secure submission of the required identity information",
  "Verification-process coordination",
  "Assistance if clarification or additional information is required",
  "Confirmation once verification has been completed",
  "Companies House personal code delivered to the applicant following successful verification",
  "Support on how the personal code is used for a director or PSC appointment",
];

const STEPS = [
  ["01", "Start the service — £74", "Complete the order and provide your basic details."],
  ["02", "Submit the required identification", "We confirm what documentation is needed and guide you through the verification steps."],
  ["03", "Complete identity verification", "The verification is processed using the appropriate route for your circumstances."],
  ["04", "Receive your personal code", "After successful verification, your Companies House personal code is issued and sent to the email address used for the process."],
];

const REQUIREMENTS = [
  "A valid passport or other eligible identity document",
  "Your current personal details",
  "An email address you can access",
  "Your date of birth",
  "Your current residential address",
  "Additional supporting information where required",
];

export const metadata: Metadata = {
  title: "Companies House Identity Verification & Personal Code Help",
  description: "Get help completing Companies House identity verification and obtaining your personal code. Assisted service for directors, PSCs and non-UK residents.",
  openGraph: {
    title: "Companies House Identity Verification & Personal Code Help | Seven Oak Prestige",
    description: "Guided Companies House identity verification assistance for directors, PSCs and non-UK residents. Service fee £74.",
    type: "website",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: PATH,
    languages: {
      "en-US": "https://www.sevenoakprestige.com/services/companies-house-identity-verification",
      "fr-FR": "https://www.sevenoakprestige.com/fr/services/companies-house-identity-verification",
    },
  },
};

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

export default function IdentityVerificationPage() {
  return (
    <div className="bg-background pt-16 lg:pt-20">
      <main>
        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Companies House identity verification assistance</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="font-display mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.35rem] text-foreground">
                Companies House Identity Verification Assistance
              </h1>
              <p className="mt-6 font-display text-2xl text-gold-soft">Need your Companies House personal code?</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-foreground/90">
                We provide guided identity-verification assistance for directors and PSCs who need to complete the Companies House verification process, including international and non-resident applicants.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={CHECKOUT} className="btn-gold">Start Verification — £74</a>
                <a href={WHATSAPP} className="btn-ghost">Ask an Adviser</a>
              </div>
            </div>
            <aside className="border border-border bg-ink p-7 sm:p-9" aria-label="Service fee and timing">
              <p className="eyebrow">Assisted service</p>
              <p className="mt-5 font-display text-5xl text-gold-soft">£74</p>
              <p className="mt-2 text-sm text-muted-foreground">Service fee</p>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-foreground/90">
                  Personal code typically issued within up to 48 hours after successful completion of the required verification checks.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <Section>
          <Eyebrow>Suitable applicants</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Who This Service Is For</h2>
          <ul className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {AUDIENCES.map((item, index) => (
              <li key={item} className={`flex gap-4 bg-background p-7 text-sm leading-relaxed text-foreground/90 ${index === AUDIENCES.length - 1 ? "md:col-span-2" : ""}`}>
                <span className="font-display text-xl text-gold">0{index + 1}</span>{item}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>Clear service scope</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">What the £74 Service Includes</h2>
          <ul className="mt-12 grid gap-x-12 gap-y-5 border-y border-border py-8 sm:grid-cols-2">
            {INCLUDES.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/90"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}</li>)}
          </ul>
          <p className="mt-7 max-w-3xl text-xs leading-relaxed text-muted-foreground">Seven Oak assists with the verification process. The personal code is issued following successful identity verification; completion remains subject to the applicable checks and any additional evidence required.</p>
        </Section>

        <Section className="border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Eyebrow>Official terminology</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">What Is a Companies House Personal Code?</h2></div>
            <div>
              <p className="font-display text-2xl leading-snug">A unique 11-character code issued after successful identity verification.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Directors and PSCs use the personal code to confirm their verified identity when required by Companies House. New directors need it when incorporating or being appointed, while existing directors use it in connection with their required filings.</p>
              <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">The personal code belongs to the individual and can be reused across their relevant company roles. Keep it secure.</p>
            </div>
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Eyebrow>International applicants</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Identity Verification for Non-UK Residents</h2></div>
            <div><p className="text-lg leading-relaxed text-foreground/90">Non-UK residents can complete Companies House identity verification, but the available route can depend on the identity documents they hold and their circumstances.</p><p className="mt-5 leading-relaxed text-muted-foreground">Our assisted service is designed for international directors and PSCs who want practical help completing the process and obtaining their personal code. We review the available route and explain if further evidence is needed.</p></div>
          </div>
        </Section>

        <Section className="border-t border-border">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Four Clear Steps</h2>
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([number, title, body]) => <li key={number} className="bg-background p-7"><span className="font-display text-2xl text-gold">{number}</span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></li>)}
          </ol>
          <p className="mt-8 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">Typical timeframe: up to 48 hours after successful completion of the required verification checks.</p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div><Eyebrow>Before you start</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">What You May Need</h2><p className="mt-6 text-sm leading-relaxed text-muted-foreground">Requirements may vary depending on the applicant and verification route.</p></div>
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {REQUIREMENTS.map((item) => <li key={item} className="flex gap-3 bg-background p-6 text-sm leading-relaxed text-foreground/90"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </Section>

        <Section className="section-dark border-t border-border">
          <Eyebrow>Data protection</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Your Information Is Handled Securely</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {["Secure document submission", "Identity information used for onboarding and verification purposes", "Clear process and adviser support", "Privacy and data-protection terms available before payment"].map((item) => <div key={item} className="bg-ink p-7 text-sm leading-relaxed text-foreground/90">{item}</div>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <span>ICO Registration No. ZC181349</span>
            <Link href="/privacy" className="text-gold-soft hover:text-foreground">Privacy Policy</Link>
            <Link href="/data-protection" className="text-gold-soft hover:text-foreground">Data Protection &amp; AML</Link>
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]"><div><Eyebrow>Frequently asked questions</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Personal Code Questions, Answered</h2></div><VerificationFaq /></div>
        </Section>

        <section className="section-dark border-t border-border px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="eyebrow">Identity Verification Assistance — £74</p><h2 className="font-display mb-6 mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Need Your Companies House Personal Code?</h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Complete the assisted verification process with clear guidance from start to finish.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href={CHECKOUT} className="btn-gold">Start Verification — £74</a><a href={WHATSAPP} className="btn-ghost">Ask an Adviser</a></div></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
