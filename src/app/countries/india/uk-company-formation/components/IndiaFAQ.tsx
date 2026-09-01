"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function IndiaFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "Can an Indian resident form a UK limited company?",
            a: "Yes. An Indian resident can generally become a director and shareholder of a UK private limited company without living in the United Kingdom, subject to the applicable incorporation and identity-verification requirements."
        },
        {
            q: "Do I need a UK-resident director?",
            a: "Generally, no. A UK private limited company does not normally require its director to reside in the United Kingdom."
        },
        {
            q: "Can I register the company completely from India?",
            a: "Yes. The company-formation process can generally be managed remotely. You do not normally need to travel to the UK simply to incorporate the company."
        },
        {
            q: "What documents do I need to get started?",
            a: "You will normally need: a valid passport for each director and shareholder; a bank statement, utility bill or landline bill showing the residential address and dated within the last 3 months; your proposed company name; and a short description of the company's business activity. Additional information may be requested depending on the structure."
        },
        {
            q: "What documents will I receive after incorporation?",
            a: "Following successful incorporation, we provide the relevant company documents, including: Certificate of Incorporation, Memorandum & Articles of Association, Share Certificate and Company Register."
        },
        {
            q: "Will I receive a UK Corporation Tax UTR?",
            a: "HMRC normally issues Corporation Tax correspondence, including the company's Unique Taxpayer Reference, after incorporation. Where the correspondence is delivered to an address managed by Seven Oak Prestige, it will be processed and forwarded according to the applicable service."
        },
        {
            q: "Can Seven Oak Prestige assist with a UK business bank account?",
            a: "Yes. Banking and fintech readiness support is available depending on your package and circumstances. We have practical experience supporting Indian founders with UK business banking applications. However, every provider performs its own compliance assessment and final approval remains with the financial institution."
        },
        {
            q: "Do I need to consider Indian regulations when owning a UK company?",
            a: "Potentially. Indian residents investing in or funding an overseas company may need to consider rules relating to FEMA, ODI, LRS, tax and reporting. Seven Oak Prestige can support the UK company side, but India-specific tax or regulatory advice should be obtained from an appropriately qualified Indian adviser where required."
        }
    ];

    return (
        <section className="py-16 sm:py-20 border-t border-border relative overflow-hidden">
            <div className="premium-section-bg"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* FAQs */}
                <div className="mb-20">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-5xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="premium-faq-item">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="premium-faq-question w-full flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="premium-faq-question-text">{faq.q}</span>
                                    <span className="premium-faq-icon">
                                        <FaChevronDown className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                                    </span>
                                </button>
                                <div className={`premium-faq-answer-wrapper overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="premium-faq-answer-inner">
                                        <p className="premium-faq-answer-text">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
