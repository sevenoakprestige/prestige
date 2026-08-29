import { FaCheckCircle, FaBuilding, FaGlobeAmericas, FaHandsHelping, FaFileSignature, FaIdCard, FaReceipt, FaLandmark, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IndiaFeatures() {
    return (
        <>
            {/* SECTION 2 - WHO WE ARE */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="why-choose-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            A UK Business Advisory Firm Built for International Founders
                        </h2>
                        <p className="why-choose-description text-lg">
                            Seven Oak Prestige is a UK corporate advisory and company formation provider supporting entrepreneurs who want to establish and operate credible businesses in the United Kingdom while living overseas. For Indian founders, our role goes beyond submitting a Companies House application. We help you understand the corporate structure, identity-verification requirements, UK addresses, banking readiness, VAT, EORI and the key post-incorporation steps required to operate professionally.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                            <div className="mb-6 flex justify-start">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                    <FaBuilding className="h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="why-choose-title text-xl font-bold mb-3">Premium Advisory</h3>
                            <p className="why-choose-description">A structured, professional approach to UK company establishment rather than simple certificate-only formation.</p>
                        </div>
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]" style={{ animationDelay: '100ms' }}>
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                            <div className="mb-6 flex justify-start">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                    <FaGlobeAmericas className="h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="why-choose-title text-xl font-bold mb-3">International Business Expertise</h3>
                            <p className="why-choose-description">Designed for founders building businesses across the UK, India and international markets.</p>
                        </div>
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]" style={{ animationDelay: '200ms' }}>
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                            <div className="mb-6 flex justify-start">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                    <FaHandsHelping className="h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="why-choose-title text-xl font-bold mb-3">End-to-End Support</h3>
                            <p className="why-choose-description">From formation and compliance to banking readiness and ongoing corporate support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 - CAN AN INDIAN RESIDENT OWN A UK COMPANY? */}
            <section className="relative overflow-hidden py-16">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="services-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                                Can an Indian Resident Own 100% of a UK Company?
                            </h2>
                            <p className="service-description text-lg mb-8">
                                Yes. An Indian resident can generally own 100% of an ordinary UK private limited company and may also act as its director, subject to the applicable Companies House requirements.
                            </p>
                            
                            <ul className="space-y-4 mb-8">
                                {[
                                    "No UK shareholder is generally required",
                                    "No UK-resident director is generally required",
                                    "The company can be incorporated remotely",
                                    "The founder can continue living in India",
                                    "A UK registered office is still required",
                                    "Companies House identity verification applies to relevant directors and PSCs"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="mt-1 h-5 w-5 text-[#d4af37] shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild className="group bg-[#d4af37] text-black hover:bg-[#f3d066] font-semibold">
                                <Link href="/blog/how-to-start-a-uk-company-from-india-the-complete-guide-for-indian-entrepreneurs-2026">
                                    Read the Complete India Formation Guide 
                                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </Button>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-transparent p-1">
                                <div className="rounded-xl trust-card-bg p-8 h-full shadow-xl">
                                    <h3 className="text-xl font-bold mb-4">Structure Facts</h3>
                                    <div className="space-y-4 text-sm text-muted-foreground">
                                        <p><strong>Company Type:</strong> Private Limited Company (Ltd)</p>
                                        <p><strong>Minimum Directors:</strong> 1 (can be Indian resident)</p>
                                        <p><strong>Minimum Shareholders:</strong> 1 (can be the same person)</p>
                                        <p><strong>Capital:</strong> Typically £1 (1 share of £1)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 - WHAT WE OFFER */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="services-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Everything You Need to Establish Your UK Company
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-[#d4af37]"></div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "UK Company Formation",
                                desc: "Preparation and submission of your UK private limited company incorporation.",
                                icon: FaFileSignature
                            },
                            {
                                title: "Registered Office & Director Address",
                                desc: "Professional UK statutory address support for eligible packages.",
                                icon: FaBuilding
                            },
                            {
                                title: "Companies House Identity Verification",
                                desc: "Guidance and assistance with the current Companies House identity-verification framework.",
                                icon: FaIdCard
                            },
                            {
                                title: "VAT & EORI Assistance",
                                desc: "Support for eligible businesses that require VAT registration or a UK EORI for importing and exporting.",
                                icon: FaReceipt
                            },
                            {
                                title: "Banking Readiness",
                                desc: "Preparation and guidance to help your company meet the documentation and compliance expectations of suitable banking and fintech providers.",
                                icon: FaLandmark
                            },
                            {
                                title: "Post-Incorporation Compliance",
                                desc: "Guidance covering important Companies House, accounting and operational requirements after incorporation.",
                                icon: FaShieldAlt
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]" style={{ animationDelay: `${idx * 100}ms` }}>
                                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                                <div className="mb-6 flex justify-start">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                </div>
                                <h3 className="service-title text-lg font-bold mb-2">{service.title}</h3>
                                <p className="service-description text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 - WHO WE SUPPORT */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="services-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Built for Modern Indian Entrepreneurs
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            "TikTok Shop Sellers",
                            "Amazon FBA Sellers",
                            "SaaS Businesses",
                            "IT & Software Companies",
                            "Import & Export Businesses",
                            "Global Service Businesses",
                            "Medical & Healthcare",
                            "Tech Startups",
                            "Education Businesses",
                            "E-commerce & Shopify"
                        ].map((niche, idx) => (
                            <div key={idx} className="trust-card-bg flex items-center justify-center p-4 text-center rounded-lg border h-24">
                                <span className="font-semibold text-sm">{niche}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
