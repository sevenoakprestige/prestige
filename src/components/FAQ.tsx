"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCountry } from "@/contexts/CountryContext";
import type { Country } from "@/contexts/CountryContext";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    flag: string;
    items: FAQItem[];
}

const faqData: FAQSection[] = [
    {
        title: "UK",
        flag: "🇬🇧",
        items: [
            {
                question: "Can a non-resident form a UK LTD company?",
                answer: "Yes, non-residents can form a UK LTD company without needing to live in the UK. The process can be completed entirely online.",
            },
            {
                question: "What information is required to register a UK LTD?",
                answer: "You'll need a unique company name, a UK registered office address, a director, and a shareholder. You don't need to be a UK citizen.",
            },
            {
                question: "How long does incorporation take?",
                answer: "The incorporation process typically takes 24 hours once all documents are submitted and approved by Companies House.",
            },
            {
                question: "Do I need a UK address?",
                answer: "You need a UK registered office address for official correspondence. A professional service can provide this for non-residents.",
            },
            {
                question: "Can I open a UK bank account as a non-resident?",
                answer: "Yes, non-residents can open a UK business bank account. Requirements vary, check with individual banks for specifics.",
            },
            {
                question: "Can I create a UK company for someone else?",
                answer: "Yes, as long as you have their consent. You can act as an authorized representative and receive all documents in your name.",
            },
            {
                question: "What identity documents are required?",
                answer: "Valid passport or ID card. Translation provided if necessary.",
            },
            {
                question: "Do you assist with business banking and fintech applications?",
                answer: "Banking & Fintech Application Support. We provide administrative guidance relating to business documentation and information preparation for applications submitted to third-party financial institutions and payment platforms, including providers such as Wise, Revolut, WorldFirst, and Payoneer. All onboarding, compliance reviews, and approval decisions are conducted independently at the sole discretion of each provider.",
            },
        ],
    },

];

// Map country to index for accessing faqData array
const countryToIndex: Record<Country, number> = {
    UK: 0,
};

export default function FAQ() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const activeIndex = countryToIndex[selectedCountry];

    const toggleItem = (itemIndex: number) => {
        const key = `${selectedCountry}-${itemIndex}`;
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(key)) {
            newOpenItems.delete(key);
        } else {
            newOpenItems.add(key);
        }
        setOpenItems(newOpenItems);
    };

    // FAQPage JSON-LD for the UK FAQ items (primary content for SEO)
    const faqPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData[0].items.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* FAQPage JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
            />
            {/* Background decoration — same as Testimonials */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
            </div>

            <div className="mx-auto max-w-4xl">
                {/* Header — same as Testimonials */}
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                        COMMON QUESTIONS
                    </span>
                    <h2 className="faq-heading mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                        FAQ
                    </h2>
                    <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex justify-center gap-2 sm:gap-4">
                    {faqData.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelectedCountry(section.title as Country);
                                setOpenItems(new Set()); // Clear open items when switching tabs
                            }}
                            className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${activeIndex === index
                                ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                : "border border-border/40 bg-background/50 text-foreground/70 hover:border-[#d4af37]/50 hover:text-foreground"
                                }`}
                        >
                            <span className="text-xl sm:text-2xl">{section.flag}</span>
                            <span>{section.title}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqData[activeIndex].items.map((item, itemIndex) => {
                        const key = `${selectedCountry}-${itemIndex}`;
                        const isOpen = openItems.has(key);

                        return (
                            <div
                                key={itemIndex}
                                className="group premium-faq-item"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleItem(itemIndex)}
                                    className="premium-faq-question"
                                >
                                    <span className="premium-faq-question-text">
                                        {item.question}
                                    </span>
                                    <span className="premium-faq-icon">
                                        {isOpen ? (
                                            <FaMinus className="h-4 w-4" />
                                        ) : (
                                            <FaPlus className="h-4 w-4" />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`premium-faq-answer-wrapper ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="premium-faq-answer-inner">
                                        <p className="premium-faq-answer-text">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
