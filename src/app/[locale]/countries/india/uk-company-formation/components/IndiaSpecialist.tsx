import { FaBuilding, FaMapMarkerAlt, FaShieldAlt, FaRupeeSign, FaBalanceScale, FaCreditCard, FaGlobe, FaUsers, FaCheckCircle, FaHeadset } from "react-icons/fa";

export default function IndiaSpecialist() {
    return (
        <>
            {/* IMPORTANT BEFORE YOU INCORPORATE */}
            <section className="py-16 sm:py-20 border-t border-white/10 relative overflow-hidden">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
                        Important Before You Incorporate
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                        {[
                            {
                                title: "Banking support",
                                desc: "We assist with banking readiness, but final approval remains with the financial institution.",
                                icon: FaBuilding
                            },
                            {
                                title: "UK registered office",
                                desc: "A compliant registered office address is required for every UK company.",
                                icon: FaMapMarkerAlt
                            },
                            {
                                title: "Companies House verification",
                                desc: "Relevant directors and people with significant control must satisfy identity-verification requirements.",
                                icon: FaShieldAlt
                            },
                            {
                                title: "Indian overseas investment",
                                desc: "FEMA, ODI or LRS considerations may apply to how you fund the company.",
                                icon: FaRupeeSign
                            },
                            {
                                title: "UK & India tax",
                                desc: "Cross-border tax treatment depends on residence, substance and the facts of your business.",
                                icon: FaBalanceScale
                            },
                            {
                                title: "Platforms & payments",
                                desc: "Amazon, Shopify, Stripe and others assess eligibility separately.",
                                icon: FaCreditCard
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="premium-service-card flex flex-col items-center text-center p-6 rounded-xl">
                                <div className="text-[#d4af37] text-2xl mb-4">
                                    <item.icon />
                                </div>
                                <h3 className="font-bold text-sm text-foreground mb-2">{item.title}</h3>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SEVEN OAK PRESTIGE */}
            <section className="py-16 sm:py-20 border-t border-border relative overflow-hidden">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            Why Choose Seven Oak Prestige
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            {
                                title: "International founder experience",
                                desc: "We understand cross-border business needs.",
                                icon: FaGlobe
                            },
                            {
                                title: "Experience supporting Indian founders",
                                desc: "Practical guidance tailored to your context.",
                                icon: FaUsers
                            },
                            {
                                title: "Clear pricing & scope",
                                desc: "Transparent deliverables with no surprises.",
                                icon: FaCheckCircle
                            },
                            {
                                title: "Banking-readiness support",
                                desc: "We prepare you for banking conversations.",
                                icon: FaBuilding
                            },
                            {
                                title: "UK address infrastructure",
                                desc: "Registered office and service address options.",
                                icon: FaMapMarkerAlt
                            },
                            {
                                title: "Human advisory support",
                                desc: "Speak with real people who care.",
                                icon: FaHeadset
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="premium-service-card flex flex-col items-center text-center p-6 rounded-xl">
                                <div className="text-[#d4af37] text-3xl mb-4">
                                    <item.icon />
                                </div>
                                <h3 className="font-bold text-sm text-foreground mb-2">{item.title}</h3>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
