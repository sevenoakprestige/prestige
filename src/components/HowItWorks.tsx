"use client";

import Image from "next/image";

const PROCESS_STEPS: Array<{
    n: string;
    title: string;
    duration: string;
    youDo: string[];
    happensNext: string[];
}> = [
    {
        n: "01",
        title: "Choose Your Package & Confirm Your Company Name",
        duration: "Approx. 10 minutes",
        youDo: ["Check your company name", "Select your package", "Pay securely online"],
        happensNext: ["Confirmation email", "Secure onboarding form", "Next-step instructions"],
    },
    {
        n: "02",
        title: "Complete Your KYC & Onboarding",
        duration: "Approx. 20–30 minutes for most standard cases",
        youDo: [
            "Upload passport and proof of address",
            "Complete the secure onboarding form",
            "Provide director, shareholder and PSC information",
        ],
        happensNext: [
            "Seven Oak reviews your file",
            "Clarifications requested only if needed",
            "File prepared for submission",
        ],
    },
    {
        n: "03",
        title: "We Review & Submit to Companies House",
        duration: "Typically 1–2 business days for standard incorporations",
        youDo: ["Confirm final company details", "Respond promptly if clarification is required"],
        happensNext: [
            "Incorporation submitted to Companies House",
            "Companies House processes the application",
            "Seven Oak monitors the submission",
        ],
    },
    {
        n: "04",
        title: "Receive Your Company Documents & Next Steps",
        duration: "On successful incorporation",
        youDo: ["Download your electronic company documents", "Review your post-incorporation checklist"],
        happensNext: [
            "Certificate of Incorporation delivered",
            "Share Certificate and Company Register sent",
            "Practical next-step guidance provided",
        ],
    },
];

export default function HowItWorks() {
    return (
        <>
            <section id="process" className="section-parchment border-t border-border scroll-mt-20 px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                    <div>
                        <p className="eyebrow">How it works</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">A Clear Process From Start to Finish</h2>
                        <ol className="mt-12 space-y-10">
                            {PROCESS_STEPS.map((s) => (
                                <li key={s.n} className="border-t border-border pt-8">
                                    <div className="flex items-start gap-6">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-deep font-display text-lg text-cream">
                                            {s.n}
                                        </span>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold">{s.title}</h3>
                                            <p className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-gold">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    aria-hidden="true"
                                                >
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                {s.duration}
                                            </p>
                                            <div className="mt-6 grid gap-8 sm:grid-cols-2">
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                                        What you do
                                                    </p>
                                                    <ul className="mt-4 space-y-3">
                                                        {s.youDo.map((item) => (
                                                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                                <span
                                                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold"
                                                                    aria-hidden="true"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="12"
                                                                        height="12"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="3"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                </span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                                                        What happens next
                                                    </p>
                                                    <ul className="mt-4 space-y-3">
                                                        {s.happensNext.map((item) => (
                                                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                                <span
                                                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold"
                                                                    aria-hidden="true"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="12"
                                                                        height="12"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="3"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    >
                                                                        <polyline points="20 6 9 17 4 12" />
                                                                    </svg>
                                                                </span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground">
                            Timings are indicative and subject to complete information, verification and Companies House
                            processing. Complex cases may take longer.
                        </p>
                    </div>
                    <Image
                        src="/assets/institution.webp"
                        alt="Classical London institutional facade beside a modern glass tower"
                        width={1200}
                        height={805}
                        className="h-full max-h-[620px] w-full object-cover"
                    />
                </div>
            </section>


        </>
    );
}
