"use client";

import { FaSitemap, FaUniversity, FaChartLine, FaGlobeAmericas, FaExpand } from "react-icons/fa";

const advisoryServices = [
    {
        icon: <FaSitemap className="h-10 w-10" />,
        title: "Business Structuring",
        description: "Legal & operational structuring for international businesses",
    },
    {
        icon: <FaUniversity className="h-10 w-10" />,
        title: "FinTech & Banking Readiness",
        description: "Wise, Stripe, Revolut, Payoneer — done right, not forced",
    },
    {
        icon: <FaChartLine className="h-10 w-10" />,
        title: "Fundraising Readiness",
        description: "Before speaking to investors, your structure, governance and metrics must be solid",
    },
    {
        icon: <FaGlobeAmericas className="h-10 w-10" />,
        title: "Market Entry Strategy",
        description: "U/K, Europe, Africa, Middle East",
    },
    {
        icon: <FaExpand className="h-10 w-10" />,
        title: "International Expansion",
        description: "Cross-border growth with compliance & scalability in mind",
    },
];

export default function AdvisoryServices() {
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
                    <h2 className="advisory-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        What We Advise On
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Advisory Services Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {advisoryServices.map((service, index) => (
                        <div
                            key={index}
                            className="advisory-card group relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Icon */}
                            <div className="mb-4 flex justify-center">
                                <div className="inline-flex rounded-lg bg-gradient-to-br from-[#d4af37]/20 to-[#f3d066]/10 p-4 text-[#d4af37]">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="advisory-title mb-3 text-center text-lg font-bold">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="advisory-description text-center text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
