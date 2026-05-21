"use client";

import CountrySelector, { Country } from "./CountrySelector";
import { useCountry } from "@/contexts/CountryContext";

interface Step {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const howItWorksData: Record<Country, { steps: Step[]; footer: string }> = {
    UK: {
        steps: [
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                ),
                title: "SUBMIT YOUR APPLICATION",
                description: "Choose your plan and complete the secure onboarding form. We handle all filings, documents, and SIC optimization for you.",
            },
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                ),
                title: "WE REGISTER YOUR COMPANY",
                description: "We submit your incorporation to Companies House (within 24 hours*). Your company is formed with the correct structure and legal details.",
            },
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                ),
                title: "RECEIVE YOUR DOCUMENTS",
                description: "Your official incorporation documents are delivered by email as soon as Companies House approves the registration.",
            },
        ],
        footer: "* Subject to Companies House processing times.",
    },
    USA: {
        steps: [
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                ),
                title: "Step 1: Choose Your Package",
                description: "Provide basic details to form your Delaware LLC.",
            },
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                ),
                title: "Step 2: LLC Filing",
                description: "Your company is filed with Delaware Division of Corporations.",
            },
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                ),
                title: "Step 3: EIN Application",
                description: "We obtain the EIN necessary for business banking and fintech onboarding.",
            },
        ],
        footer: "Your US LLC, ready to operate — hassle-free formation.",
    },
    Canada: {
        steps: [
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                ),
                title: "Step 1: Select Federal or Provincial Incorporation",
                description: "We advise based on your business activity.",
            },
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                ),
                title: "Step 2: File Incorporation Documents",
                description: "Your corporation is registered and official documents issued.",
            },
            {
                icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                ),
                title: "Step 3: Registered Address Setup",
                description: "Digital mail system activated.",
            },
        ],
        footer: "Your Canadian corporation, professionally established.",
    },
};

export default function HowItWorks() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const data = howItWorksData[selectedCountry];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-12 text-center lg:mb-16">
                    <h2 className="how-it-works-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        How It Works
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Steps Layout */}
                <div className="relative mt-20 mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {data.steps.map((step, index) => (
                        <div key={index} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-8 sm:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/30 hover:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] text-left">
                            {/* Giant Faint Number Background */}
                            <div className="absolute right-4 top-4 select-none font-serif text-[120px] font-black leading-none text-foreground/[0.03] transition-all duration-500 group-hover:text-[#d4af37]/[0.05]">
                                0{index + 1}
                            </div>
                            
                            {/* Icon Container */}
                            <div className="relative z-10 mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] shadow-sm transition-transform duration-500 group-hover:scale-110">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="mb-3 inline-flex items-center gap-2">
                                    <span className="h-[1px] w-4 bg-[#d4af37]/60"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                                        Phase 0{index + 1}
                                    </span>
                                </div>
                                
                                <h3 className="mb-4 font-serif text-xl font-bold leading-tight text-foreground sm:text-2xl">
                                    {step.title}
                                </h3>
                                
                                <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
                                    {step.description}
                                </p>
                            </div>

                            {/* Hover light flare */}
                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#d4af37]/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="mt-12 text-center">
                    <p className="how-it-works-footer text-lg font-medium italic sm:text-xl">
                        {data.footer}
                    </p>
                </div>
            </div>
        </section>
    );
}
