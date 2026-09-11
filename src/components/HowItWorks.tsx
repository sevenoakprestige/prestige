"use client";

const PROCESS_STEPS = [
    {
        n: "01",
        t: "Submit your details",
        d: "Complete our secure online form with your proposed company name and director details. It typically takes less than 10 minutes.",
    },
    {
        n: "02",
        t: "Identity verification",
        d: "Complete a quick biometric ID check on your smartphone. We are legally required to verify all international clients before proceeding.",
    },
    {
        n: "03",
        t: "Compliance review",
        d: "Your dedicated adviser reviews your application to ensure it meets Companies House requirements and minimises the chance of rejection.",
    },
    {
        n: "04",
        t: "Incorporation",
        d: "We submit your application. Most companies are formed within 24–48 hours (subject to Companies House workload).",
    },
];

export default function HowItWorks() {
    return (
        <>
            {/* Process */}
            <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">The process</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="mt-6 max-w-xl text-3xl leading-tight sm:text-4xl">
                        Four Steps to Your UK Registered Company
                    </h2>
                    <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {PROCESS_STEPS.map((s) => (
                            <div key={s.n} className="relative">
                                <span className="block font-mono text-3xl font-light text-gold-soft">{s.n}</span>
                                <div className="mt-4 h-px w-full bg-border" />
                                <h3 className="mt-6 font-semibold text-foreground">{s.t}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Banking & payments (split layout) */}
            <section className="border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
                        <div>
                            <div>
                                <p className="eyebrow">Banking & payment readiness</p>
                                <div className="mt-4 h-px w-16 rule-gold" />
                            </div>
                            <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
                                Structuring for Financial Applications
                            </h2>
                            <p className="mt-6 leading-relaxed text-muted-foreground">
                                Forming the company is only step one. Opening a business bank account or a Stripe/PayPal merchant
                                account as a non-resident requires a credible corporate structure.
                            </p>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                While we cannot guarantee bank approvals, our packages provide the foundational requirements: a
                                UK registered office, a UK director correspondence address, and correctly formatted incorporation
                                documents.
                            </p>
                        </div>
                        <div className="surface p-8 sm:p-10">
                            <h3 className="text-xl font-semibold text-foreground">Common Requirements</h3>
                            <ul className="mt-6 space-y-4">
                                {[
                                    "UK Registered Office Address",
                                    "Director Service Address",
                                    "Certificate of Incorporation",
                                    "Memorandum & Articles of Association",
                                    "Shareholder Register (PSCs)",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-sm text-foreground/90">
                                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] text-gold">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 border-t border-border pt-6">
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                    Note: We are not a bank. We provide the corporate structuring services that modern fintech
                                    institutions (such as Wise, Tide, Revolut) and payment processors generally look for when
                                    assessing non-resident applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
