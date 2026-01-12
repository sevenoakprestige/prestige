"use client";

export default function WhatYouWillGet() {
    const deliverables = [
        "Business and corporate structuring recommendations.",
        "Market entry and expansion strategy.",
        "Banking and fintech readiness checklist.",
        "Fundraising readiness assessment.",
        "Financial and KPI framework direction.",
        "Partner and jurisdiction strategy.",
    ];

    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="deliverables-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        What You Will Walk Away With
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Subtitle */}
                <p className="deliverables-subtitle mx-auto mb-8 max-w-3xl text-center text-base sm:text-lg">
                    Depending on your situation, sessions may result in:
                </p>

                {/* Deliverables List */}
                <ul className="deliverables-list mx-auto mb-8 max-w-3xl space-y-4">
                    {deliverables.map((item, index) => (
                        <li
                            key={index}
                            className="deliverables-list-item flex items-start text-base sm:text-lg"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <span className="mr-3 mt-1 flex-shrink-0 text-[#d4af37]">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Footer Tagline */}
                <p className="deliverables-tagline mx-auto max-w-3xl text-center text-base italic leading-relaxed sm:text-lg lg:text-xl">
                    Each engagement is tailored. No templates, no recycled playbooks.
                </p>
            </div>
        </section>
    );
}
