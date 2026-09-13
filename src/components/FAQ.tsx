"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const FAQS = [
    {
        q: "Is this legal for non-residents?",
        a: "Yes. UK residency is not generally required to own shares in or act as a director of a UK private limited company. The incorporation remains subject to Companies House requirements, identity verification and applicable eligibility rules.",
    },
    {
        q: "How is my identity verified?",
        a: "Under the Economic Crime and Corporate Transparency Act, directors and people with significant control must verify their identity. We verify identities with our KYC and AML partners, Onfido and Credas, and we prepare and file your company with Companies House ourselves. In practice you supply a valid passport or national ID and your address details; further documents may be requested depending on your circumstances.",
    },
    {
        q: "What do I need to provide?",
        a: "Valid identity documentation, residential address information and the company details required for incorporation — name, registered office, shareholding, directors and SIC codes. Additional KYC or proof-of-address documents may be requested.",
    },
    {
        q: "How long does it take?",
        a: "Many standard online incorporations are processed quickly once identity verification is complete, but timing depends on Companies House review and cannot be guaranteed.",
    },
    {
        q: "What happens if my application is rejected?",
        a: "Rejections are usually caused by a name conflict or a document issue. We tell you the reason, correct the filing and resubmit at no extra service fee. If the company genuinely cannot be formed, our refund policy applies.",
    },
    {
        q: "Will my home address appear on the public register?",
        a: "A director's residential address is generally kept private where a separate service address is used. The company must still maintain an appropriate registered office, which appears on the public register.",
    },
    {
        q: "Can I open a UK business bank account?",
        a: "Potentially. Eligibility depends on the provider, founder residence, business activity, KYC, source of funds and expected transactions. Forming a UK company does not guarantee banking approval, and we never promise it.",
    },
    {
        q: "Do you help with banking and fintech applications?",
        a: "Yes. We provide banking-readiness and application support where included in your package or purchased separately. Final approval is always made by the financial provider.",
    },
    {
        q: "Are there hidden or renewal fees?",
        a: "No. Package prices are fixed and stated up front, including the Companies House incorporation fee. Address services renew annually at the published rates — registered office £59/year and director service address £35/year — and we tell you the renewal date in advance.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
                    <div>
                        <div>
                            <p className="eyebrow">Common questions</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Questions? We Are Here to Help.</h2>
                        <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                            If your question isn’t answered here, contact our team.
                        </p>
                        <Button asChild variant="ghost" className="mt-8">
                            <a href="mailto:contact@sevenoakprestige.com">contact@sevenoakprestige.com</a>
                        </Button>
                    </div>
                    <div>
                        <div className="divide-y divide-border border-y border-border">
                            {FAQS.map((item, i) => {
                                const isOpen = open === i;
                                return (
                                    <div key={item.q}>
                                        <h3>
                                            <button
                                                type="button"
                                                onClick={() => setOpen(isOpen ? null : i)}
                                                aria-expanded={isOpen}
                                                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
                                            >
                                                <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                                                <span
                                                    className={`mt-1 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                                    aria-hidden="true"
                                                >
                                                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                                                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div
                                            className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
