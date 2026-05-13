"use client";

import { useState } from "react";
import { useCountry } from "@/contexts/CountryContext";
import type { Country } from "@/contexts/CountryContext";

interface SuccessStory {
    title: string;
    quote: string;
    status: string;
    location?: string;
}

interface Review {
    stars: number;
    text: string;
}

interface CountryStories {
    country: string;
    flag: string;
    title: string;
    subtitle: string;
    stories: SuccessStory[];
    reviews: Review[];
}

const successStoriesData: CountryStories[] = [
    {
        country: "UK",
        flag: "🇬🇧",
        title: "UK SUCCESS STORIES",
        subtitle: "Real client results — professionally curated",
        stories: [
            {
                title: "UK LTD — Non-Resident Founder",
                quote: "I formed my UK LTD remotely with no complications. The entire process was handled professionally, and all official documents were delivered within 24 hours.",
                status: "Registered within standard Companies House timelines",
            },
            {
                title: "UK LTD — International Consultant",
                quote: "Professional support throughout the incorporation process, including registered office setup and company structure preparation aligned with standard compliance requirements.",
                status: "Business setup completed",
                location: "Ade S, Sydney, Australia",
            },
            {
                title: "UK LTD — E-commerce Entrepreneur",
                quote: "The process was professional, efficient, and clearly managed from start to finish. My business structure was established smoothly, and I was able to begin international operations without delays.",
                status: "Company incorporated and operational",
                location: "Daniel K., Accra, Ghana",
            },
        ],
        reviews: [
            {
                stars: 5,
                text: "Fast, reliable and transparent. A highly professional service.",
            },
            {
                stars: 5,
                text: "Everything was handled for me. A clear process with no unnecessary delays.",
            },
            {
                stars: 5,
                text: "Structured and compliance-focused approach to business setup. Designed to align with general onboarding requirements of regulated financial institutions.",
            },
        ],
    },
    {
        country: "USA",
        flag: "🇺🇸",
        title: "USA SUCCESS STORIES",
        subtitle: "Real client results — professionally curated",
        stories: [
            {
                title: "USA LLC — African Founder",
                quote: "Seamless Delaware LLC setup for international operations.",
                status: "Operational globally",
                location: "Malik O., Dubai",
            },
            {
                title: "USA Fintech Approval",
                quote: "My LLC structure was accepted by Stripe and Mercury without issues.",
                status: "Stripe & Mercury verified",
                location: "Daniel R., Kenya",
            },
        ],
        reviews: [
            {
                stars: 5,
                text: "Incredibly smooth process. No hidden fees, no delays.",
            },
            {
                stars: 5,
                text: "Professional handling from start to finish. My EIN arrived exactly when promised.",
            },
            {
                stars: 5,
                text: "Perfect for non-US residents. Everything explained clearly and delivered on time.",
            },
        ],
    },
    {
        country: "Canada",
        flag: "🇨🇦",
        title: "CANADA SUCCESS STORIES",
        subtitle: "Real client results — professionally curated",
        stories: [
            {
                title: "Canadian Corporation — Non-Resident Entrepreneur",
                quote: "Incorporated my Canadian business entirely remotely. The team provided director services and a registered address, making the process effortless.",
                status: "Federally incorporated with nationwide protection",
            },
            {
                title: "Canadian Corporation — International Investor",
                quote: "Needed a Canadian entity for my investment activities. The incorporation was completed in 10 days with full compliance documentation for my bank.",
                status: "Banking-ready structure",
                location: "Chen W., Hong Kong",
            },
            {
                title: "Canadian Corporation — E-commerce Business",
                quote: "My Canadian corporation was set up quickly with all necessary filings. I was able to start operations in multiple provinces without any issues.",
                status: "Multi-province operational",
                location: "Sofia M., London, UK",
            },
        ],
        reviews: [
            {
                stars: 5,
                text: "Excellent service for non-residents. Clear communication throughout.",
            },
            {
                stars: 5,
                text: "The director service made it possible when I didn't have Canadian residents. Highly recommended.",
            },
            {
                stars: 5,
                text: "Fast, compliant, and thoroughly professional. Everything was handled correctly.",
            },
        ],
    },
];

// Map country to index
const countryToIndex: Record<Country, number> = {
    UK: 0,
    USA: 1,
    Canada: 2,
};

export default function SuccessStories() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const activeIndex = countryToIndex[selectedCountry];
    const activeData = successStoriesData[activeIndex];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    <h2 className="success-stories-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        SUCCESS STORIES
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex justify-center gap-2 sm:gap-4">
                    {successStoriesData.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCountry(section.country as Country)}
                            className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${activeIndex === index
                                ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                : "border border-border/40 bg-background/50 text-foreground/70 hover:border-[#d4af37]/50 hover:text-foreground"
                                }`}
                        >
                            <span className="text-xl sm:text-2xl">{section.flag}</span>
                            <span>{section.country}</span>
                        </button>
                    ))}
                </div>

                {/* Country Title */}
                <div className="mb-8 text-center">
                    <h3 className="success-stories-heading mb-2 flex items-center justify-center gap-3 text-2xl font-bold sm:text-3xl">
                        <span className="text-3xl sm:text-4xl">{activeData.flag}</span>
                        {activeData.title}
                    </h3>
                    <p className="success-story-description text-base sm:text-lg">
                        {activeData.subtitle}
                    </p>
                </div>

                {/* Success Stories */}
                <div className="mb-12 space-y-6">
                    {activeData.stories.map((story, index) => (
                        <div
                            key={index}
                            className="success-story-card overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg sm:p-8"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <h4 className="success-story-subtitle mb-4 text-lg font-bold sm:text-xl">
                                {story.title}
                            </h4>
                            <p className="success-story-description mb-4 text-base leading-relaxed sm:text-lg">
                                "{story.quote}"
                            </p>
                            <div className="flex flex-wrap items-center gap-2 text-sm sm:gap-4 sm:text-base">
                                <span className="success-story-subtitle font-semibold">
                                    Status: {story.status}
                                </span>
                                {story.location && (
                                    <>
                                        <span className="success-story-description hidden sm:inline">•</span>
                                        <span className="success-story-description italic">
                                            {story.location}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reviews */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {activeData.reviews.map((review, index) => (
                        <div
                            key={index}
                            className="success-story-card rounded-lg border p-6 text-center transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Stars */}
                            <div className="mb-3 flex justify-center gap-1 text-2xl">
                                {Array.from({ length: review.stars }).map((_, i) => (
                                    <span key={i} className="text-[#d4af37]">
                                        ★
                                    </span>
                                ))}
                            </div>
                            {/* Review text */}
                            <p className="success-story-description text-sm leading-relaxed">
                                {review.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <p className="success-story-description text-center text-xs italic sm:text-sm">
                    Client results may vary. Timelines and third-party approvals are subject to regulatory and provider requirements.
                </p>
            </div>
        </section>
    );
}
