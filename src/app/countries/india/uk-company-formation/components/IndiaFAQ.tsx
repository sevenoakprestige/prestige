"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function IndiaFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "Can an Indian citizen open a UK company?",
            a: "Yes, an Indian citizen can open a UK company. There is no requirement to be a UK citizen or resident to form a UK private limited company."
        },
        {
            q: "Can an Indian resident own 100% of a UK company?",
            a: "Yes, you can own 100% of the shares in a UK company as an Indian resident. There is no requirement for a local UK shareholder."
        },
        {
            q: "Do I need a UK-resident director?",
            a: "No, a UK company does not generally require a UK-resident director. You can act as the sole director of your company while residing in India."
        },
        {
            q: "Do I need to travel to the UK?",
            a: "No, the entire company formation and identity verification process can be completed remotely from India."
        },
        {
            q: "How long does UK company registration take?",
            a: "Once your identity verification is complete and the application is submitted, Companies House typically processes standard incorporations within 24 to 48 working hours."
        },
        {
            q: "What documents do I need?",
            a: "You will generally need a valid passport, a recent proof of residential address in India (like a bank statement or utility bill), and basic information about your intended business activities."
        },
        {
            q: "Do I need a UK registered office?",
            a: "Yes, every UK company must have a physical registered office address in the UK. Our packages provide a premium London registered office address for your company."
        },
        {
            q: "Can I open a UK bank account from India?",
            a: "While opening a traditional high-street UK bank account as a non-resident can be challenging, we provide guidance on suitable digital banking and fintech platforms (like Wise, Payoneer, Airwallex) that accept applications from Indian founders with UK companies."
        },
        {
            q: "Does Seven Oak guarantee banking approval?",
            a: "No. Banks and fintech providers make their own independent onboarding decisions based on their internal risk and compliance policies. We provide readiness support to help you submit a strong application, but we cannot guarantee approval."
        },
        {
            q: "Can I use Stripe with a UK company?",
            a: "Yes, many international founders use Stripe with their UK company, provided their business model and identity documents meet Stripe's eligibility requirements."
        },
        {
            q: "Do I need VAT?",
            a: "VAT registration is generally only mandatory if your taxable turnover exceeds the UK VAT threshold (£90,000 as of 2024), though some businesses register voluntarily. Specific rules apply to digital services and e-commerce (e.g., Amazon FBA)."
        },
        {
            q: "Do I need an EORI?",
            a: "You will need a UK EORI number if you plan to import goods into or export goods out of the UK (for example, for an Amazon FBA or physical e-commerce business)."
        },
        {
            q: "Do FEMA and RBI rules apply?",
            a: "Yes, Indian residents investing overseas or sending funds abroad are generally subject to the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) guidelines, such as the Liberalised Remittance Scheme (LRS) or Overseas Direct Investment (ODI) rules."
        },
        {
            q: "Does the UK company remove my Indian tax obligations?",
            a: "No. While the UK company pays UK Corporation Tax on its profits, you may still have personal tax obligations in India on any salary or dividends drawn. The company itself may also trigger Indian tax considerations (e.g., POEM) depending on how it is managed."
        },
        {
            q: "Can I run Amazon FBA using my UK company?",
            a: "Yes, many Indian sellers use a UK company for Amazon FBA UK. You will typically need to navigate Amazon Seller Verification, VAT registration, and UK customs/importer requirements."
        },
        {
            q: "Can I open TikTok Shop UK with my UK company?",
            a: "Yes, but TikTok Shop UK has stringent eligibility criteria, including potential requirements for UK operational presence or director verifications, depending on the current platform rules."
        },
        {
            q: "Can I operate the company while living in India?",
            a: "Yes, the UK corporate framework is flexible and allows directors to manage their UK companies from overseas."
        }
    ];

    return (
        <section className="relative overflow-hidden py-16 sm:py-24">
            <div className="premium-section-bg"></div>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="services-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="group premium-faq-item">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="premium-faq-question"
                            >
                                <span className="premium-faq-question-text">{faq.q}</span>
                                <span className="premium-faq-icon">
                                    {openIndex === index ? (
                                        <FaMinus className="h-4 w-4" />
                                    ) : (
                                        <FaPlus className="h-4 w-4" />
                                    )}
                                </span>
                            </button>
                            <div className={`premium-faq-answer-wrapper ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                <div className="premium-faq-answer-inner">
                                    <p className="premium-faq-answer-text">{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
