"use client";

import CountrySelector, { Country } from "./CountrySelector";
import { FaShieldAlt, FaClock, FaDollarSign, FaHeadset, FaUserTie, FaCheckCircle, FaBuilding, FaPassport } from "react-icons/fa";
import { useCountry } from "@/contexts/CountryContext";

interface Reason {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const whyChooseData: Record<Country, { subtitle: string; icon: React.ReactNode; reasons: Reason[] }> = {
    UK: {
        subtitle: "FOR YOUR UK COMPANY",
        icon: <span className="text-5xl">🇬🇧</span>,
        reasons: [
            {
                icon: <FaUserTie className="h-8 w-8" />,
                title: "UK Experts for Non-Residents",
                description: "Specialised in serving international founders with no UK documents or proof of address.",
            },
            {
                icon: <FaClock className="h-8 w-8" />,
                title: "Fast 24-Hour Incorporation",
                description: "Optimised SIC codes, shareholder structure, and fully compliant documents.",
            },
            {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: "Premium Confidential Addresses",
                description: "Registered office + director service address to keep residential details off the public register.",
            },
            // {
            //     icon: <FaCheckCircle className="h-8 w-8" />,
            //     title: "Fintech-Ready Structures",
            //     description: "Structured for smooth onboarding with Wise, Payoneer, Stripe, Revolut Business, and WorldFirst.",
            // },
            {
                icon: <FaPassport className="h-8 w-8" />,
                title: "No UK Documents Required",
                description: "Only a valid passport is required. No UK proof of address.",
            },
        ],
    },
    USA: {
        subtitle: "FOR YOUR USA COMPANY",
        icon: <span className="text-5xl">🇺🇸</span>,
        reasons: [
            {
                icon: <FaUserTie className="h-8 w-8" />,
                title: "Experts in Non-Resident LLC Formation",
                description: "We structure US LLCs specifically for foreign founders with no SSN, no ITIN, and no US residency.",
            },
            {
                icon: <FaClock className="h-8 w-8" />,
                title: "Fast Formation",
                description: "Your Delaware LLC is formed quickly with fully compliant documents and Registered Agent service.",
            },
            {
                icon: <FaDollarSign className="h-8 w-8" />,
                title: "EIN Assistance",
                description: "We handle the EIN process, even for non-US residents without Social Security Numbers.",
            },
            {
                icon: <FaCheckCircle className="h-8 w-8" />,
                title: "Fintech-Ready Structure",
                description: "LLC is structured to meet expectations of US fintech platforms like Stripe, PayPal, Mercury, and Payoneer.",
            },
            {
                icon: <FaPassport className="h-8 w-8" />,
                title: "No US Documents Required",
                description: "Only a valid passport is required. No SSN, no ITIN, no US address needed.",
            },
        ],
    },
    Canada: {
        subtitle: "FOR YOUR CANADIAN COMPANY",
        icon: <span className="text-5xl">🇨🇦</span>,
        reasons: [
            {
                icon: <FaUserTie className="h-8 w-8" />,
                title: "Non-Resident Friendly",
                description: "We help founders incorporate even without a Canadian residence.",
            },
            {
                icon: <FaBuilding className="h-8 w-8" />,
                title: "Flexible Structure",
                description: "Choose between Federal or Provincial incorporation depending on your needs.",
            },
            {
                icon: <FaShieldAlt className="h-8 w-8" />,
                title: "Privacy & Compliance",
                description: "Registered address keeps your personal information protected.",
            },
            {
                icon: <FaCheckCircle className="h-8 w-8" />,
                title: "Fintech-Optimised Documents",
                description: "Company structured to meet financial institution standards.",
            },
        ],
    },
};

export default function WhyChooseUs() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const data = whyChooseData[selectedCountry];

    return (
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="why-choose-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Why Choose Us
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Subtitle with Icon */}
                {data.subtitle && (
                    <div className="mb-8 flex items-center justify-center gap-4">
                        {data.icon}
                        <p className="why-choose-subtitle text-lg font-semibold sm:text-xl">
                            {data.subtitle}
                        </p>
                    </div>
                )}

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                    {data.reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] sm:p-8"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            <div className="flex items-start gap-5">
                                {/* Icon */}
                                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] shadow-sm transition-transform duration-500 group-hover:scale-110">
                                    {reason.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="mb-2 text-lg font-bold leading-tight text-foreground sm:text-xl">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 group-hover:blur-[40px] pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
