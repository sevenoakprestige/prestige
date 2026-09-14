"use client";

import { useState } from "react";

const FAQS = [
    {
        q: "Is this legal for non-residents?",
        a: "Yes. UK residency is not generally required to own shares in or act as a director of a UK private limited company. The incorporation remains subject to Companies House requirements, identity verification and applicable eligibility rules.",
    },
    {
        q: "How is my identity verified?",
        a: "Your identity is verified through our secure KYC process using trusted third-party identity verification providers, including Credas and Onfido, where appropriate. These checks help us confirm your identity and complete our customer due-diligence requirements in line with applicable UK AML and data-protection requirements. Depending on the verification result and your circumstances, we may request additional information or supporting documents.",
    },
    {
        q: "What do I need to provide?",
        a: "For a standard application, we normally require: a valid passport or eligible identity document; proof of your current residential address, such as a utility bill or bank statement dated within the last three months; your proposed company name; and a clear description of the business activities you intend to carry out. Additional information may be requested where required by our compliance review.",
    },
    {
        q: "How long does company registration take?",
        a: "Once your KYC verification has been successfully completed and we have received the required company information, a standard UK company incorporation typically takes 1–2 business days. Processing remains subject to Companies House review and approval, so exact completion times cannot be guaranteed.",
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
        <section id="faq" className="section-parchment border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <div>
                            <p className="eyebrow">Common questions</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Answers before you commit.</h2>
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
