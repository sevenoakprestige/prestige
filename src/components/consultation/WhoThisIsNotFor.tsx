"use client";

export default function WhoThisIsNotFor() {
    const exclusions = [
        "Guaranteed bank account or payment platform approvals.",
        "Quick company formation without compliance.",
        "Marketing or social media services.",
        "Shortcut solutions without proper structure.",
    ];

    return (
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-4xl text-center">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="not-for-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Who This Is Not For
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Subtitle */}
                <p className="not-for-subtitle mx-auto mb-8 max-w-3xl text-base sm:text-lg">
                    This advisory is not suitable if you are looking for:
                </p>

                {/* Exclusions List */}
                <ul className="not-for-list mx-auto mb-8 max-w-md space-y-4">
                    {exclusions.map((item, index) => (
                        <li
                            key={index}
                            className="not-for-list-item flex items-start text-lg sm:text-xl"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >

                            <span className="mr-2 mt-1 flex-shrink-0 text-[#d4af37]">•</span>
                            <span className="text-left">{item}</span>

                        </li>
                    ))}
                </ul>

                {/* Footer Tagline */}
                <p className="not-for-tagline mb-10 text-base italic leading-relaxed sm:text-lg lg:text-xl">
                    We work with founders focused on sustainable, compliant, and scalable growth.
                </p>
            </div>
        </section>
    );
}
