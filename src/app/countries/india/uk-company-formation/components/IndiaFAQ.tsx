"use client";

import { useState } from "react";
import { FaChevronDown, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

    const reviews = [
        {
            name: "Arjun Mehta",
            title: "SaaS Founder, Bengaluru",
            text: "Seven Oak Prestige made the entire UK company formation process smooth and stress-free. Their team is professional, responsive and very clear in communication."
        },
        {
            name: "Neha Sharma",
            title: "E-Commerce Entrepreneur, Delhi",
            text: "Excellent support with documentation and banking-readiness. Highly recommended for Indian founders looking to go global."
        },
        {
            name: "Rohan Iyer",
            title: "IT Consultant, Mumbai",
            text: "Very transparent pricing and great guidance throughout. Got my company incorporated quickly and without any hassle."
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

                {/* Google Reviews */}
                <div className="border-t border-border pt-16">
                    <div className="flex flex-col items-center mb-12">
                        <div className="flex items-center gap-2 mb-2">
                            <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <span className="text-2xl font-bold text-foreground">Google Reviews</span>
                        </div>
                    </div>

                    <div className="relative max-w-5xl mx-auto flex items-center">
                        <button className="hidden md:flex absolute -left-12 h-10 w-10 rounded-full border border-border bg-card items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors shadow-sm">
                            <FaChevronLeft />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {reviews.map((review, idx) => (
                                <div 
                                    key={idx} 
                                    className="premium-standard-card justify-between"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="relative z-10">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-[#fbbc04]" />
                                            ))}
                                        </div>
                                        <p className="text-sm text-foreground mb-6 line-clamp-4 leading-relaxed">
                                            "{review.text}"
                                        </p>
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                                        <p className="text-xs text-muted-foreground">{review.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="hidden md:flex absolute -right-12 h-10 w-10 rounded-full border border-border bg-card items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors shadow-sm">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
