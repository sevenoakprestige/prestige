"use client";

import Link from "next/link";
import CountrySelector, { Country } from "./CountrySelector";
import UKComparisonTable from "./UKComparisonTable";
import { FaCheck } from "react-icons/fa";
import { useCountry } from "@/contexts/CountryContext";

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    featured?: boolean;
    link: string;
}



const pricingData: Record<Country, PricingTier[]> = {
    UK: [
        {
            name: "Starter",
            price: "£99",
            description: "Perfect for new entrepreneurs.",
            features: [
                "UK Company Formation",
                "(Limited by Shares)",
                "Digital Company Documents",
                "Companies House Filing",
                "Compliance Reminders",
                "Ready in 24h",
            ],
            cta: "Start Now",
            link: "https://buy.stripe.com/cNi7sD58A6rzdAx9Nyfw400"
        },
        {
            name: "Prestige",
            price: "£230",
            description: "Most chosen by non-resident founders.",
            features: [
                "Everything in Starter",
                "Registered Office Address",
                "Director Service Address",
                "Free Mail Scanning",
                "Annual Compliance Support",
                "Priority Support",
            ],
            cta: "Start Your Company",
            featured: true,
            link: "https://buy.stripe.com/8x200basU2bj0NLbVGfw401"
        },
        {
            name: "Elite",
            price: "£399",
            description: "Premium done-for-you setup.",
            features: [
                "Everything in Prestige",
                "Banking Assistance",
                "(Wise, Revolut, Payoneer, etc.)",
                "VAT Registration (optional)",
                "Full Compliance Review",
                "KYC Support",
                "Annual Review Call",
            ],
            cta: "Become Elite",
            link: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402"
        },
    ],
    USA: [
        {
            name: "Starter",
            price: "$299",
            description: "Perfect for new founders.",
            features: [
                "Delaware LLC Formation",
                "Digital Documents",
                "Registered Agent (1 year)",
                "Operating Agreement",
            ],
            cta: "Start Now",
            link: "https://wa.me/447447488755"
        },
        {
            name: "Prestige",
            price: "$499",
            description: "Complete business setup.",
            features: [
                "Everything in Starter",
                "EIN application",
                "Fintech onboarding (Stripe, Payoneer, Mercury...)",
                "Compliance reminders",
            ],
            cta: "Get Started",
            featured: true,
            link: "https://wa.me/447447488755"
        },
        {
            name: "Elite",
            price: "$799",
            description: "Full-service package.",
            features: [
                "Fast-Track Filing (1-2 business days)",
                "Everything in Prestige",
                "US tax introduction",
                "Accounting setup",
                "Priority onboarding",
                "Full business setup",
            ],
            cta: "Go Elite",
            link: "https://wa.me/447447488755"
        },
    ],
    Canada: [
        {
            name: "Starter",
            price: "CAD $299",
            description: "Essential corporation formation.",
            features: [
                "Corporation Formation",
                "Digital Corporate Documents",
                "Basic Compliance Setup",
            ],
            cta: "Start Now",
            link: "https://wa.me/447447488755"
        },
        {
            name: "Premium",
            price: "CAD $499",
            description: "Most Popular - Complete setup.",
            features: [
                "Everything in Starter",
                "Registered Address",
                "Mail Scanning + Forwarding",
                "Fintech Support (Payoneer, Stripe)",
            ],
            cta: "Get Started",
            featured: true,
            link: "https://wa.me/447447488755"
        },
        {
            name: "Elite",
            price: "CAD $899",
            description: "Premium full service package.",
            features: [
                "Everything in Premium",
                "Full Corporate Minute Book",
                "Accounting Onboarding",
                "Priority Incorporation",
                "Compliance + Annual Reminders",
            ],
            cta: "Become Elite",
            link: "https://wa.me/447447488755"
        },
    ],
};

export default function Pricing() {
    const { selectedCountry, setSelectedCountry } = useCountry();
    const tiers = pricingData[selectedCountry];

    return (
        <section id="pricing" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="pricing-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Pricing Plans
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Country Selector */}
                <CountrySelector
                    selectedCountry={selectedCountry}
                    onCountryChange={setSelectedCountry}
                />

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`pricing-card group relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${tier.featured
                                ? "border-[#d4af37] shadow-xl shadow-[#d4af37]/20 md:scale-105 md:py-12"
                                : "md:mt-8"
                                }`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Featured Badge */}
                            {tier.featured && (
                                <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
                                    <div className="absolute right-[-30px] top-[20px] w-[140px] rotate-[45deg] bg-gradient-to-r from-[#d4af37] to-[#f3d066] py-1.5 text-center text-[10px] font-bold uppercase tracking-wide text-black shadow-lg">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Tier Name */}
                            <h3 className="pricing-tier-name mb-2 text-2xl font-bold">
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="pricing-price text-4xl font-bold text-[#d4af37]">
                                    {tier.price}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="pricing-description mb-6 text-sm">
                                <span className="text-[#d4af37]">
                                    ★
                                </span> {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="mb-8 space-y-3">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <FaCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                        <span className="pricing-feature">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href={tier.link}
                                className={`block w-full rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${tier.featured
                                    ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                    : "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                                    }`}
                            >
                                {tier.cta}
                            </Link>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                        </div>
                    ))}
                </div>

                {/* UK Comparison Table */}
                {selectedCountry === 'UK' && (
                    <div className="mt-16">
                        <UKComparisonTable />
                    </div>
                )}
            </div>
        </section>
    );
}
