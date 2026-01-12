"use client";

export default function HowEngagementWorks() {
    const steps = [
        {
            number: "1",
            title: "Initial Strategy Session",
            description:
                "We start with a private working session to understand your business model, market, structure, and objectives.",
        },
        {
            number: "2",
            title: "Strategic Diagnosis",
            description:
                "We identify key gaps across structure, compliance, financial logic, and growth readiness.",
        },
        {
            number: "3",
            title: "Action-Oriented Roadmap",
            description:
                "You receive clear strategic directions, priorities, and next steps — not generic advice.",
        },
        {
            number: "4",
            title: "Optional Execution Support",
            description:
                "Where needed, we support implementation through partners and specialists.",
        },
    ];

    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="engagement-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        How the Engagement Works
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="engagement-card group relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                            </div>

                            {/* Step Number */}
                            <div className="mb-4 flex items-center gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#f3d066]/10 text-2xl font-bold text-[#d4af37]">
                                    {step.number}
                                </div>
                                <h3 className="engagement-title text-xl font-bold">
                                    {step.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="engagement-description leading-relaxed">
                                {step.description}
                            </p>

                            {/* Decorative corner accent */}
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                        </div>
                    ))}
                </div>

                {/* Footer Tagline */}
                <div className="mt-10 text-center">
                    <p className="engagement-tagline text-base italic leading-relaxed sm:text-lg lg:text-xl">
                        This is advisory focused on decision-making, structure, and long-term scalability, not short-term hacks.
                    </p>
                </div>
            </div>
        </section>
    );
}
