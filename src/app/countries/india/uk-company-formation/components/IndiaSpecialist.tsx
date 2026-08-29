import Link from "next/link";
import { FaFileInvoiceDollar, FaRegCreditCard, FaAmazon, FaTiktok, FaGlobe, FaLandmark, FaShieldAlt } from "react-icons/fa";

export default function IndiaSpecialist() {
    return (
        <>
            {/* SECTION 11 - IMPORTANT FOR INDIAN RESIDENTS */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="services-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            UK Formation Is Only One Side of the Structure
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover/card:translate-x-4 group-hover/card:-translate-y-4"></div>
                            <h3 className="service-title text-xl font-bold mb-3">FEMA & RBI</h3>
                            <p className="service-description mb-6">Indian residents investing in or funding overseas companies should consider India’s FEMA, RBI and overseas-investment framework before assuming UK incorporation is the only requirement.</p>
                            <Link href="/blog/fema-rbi-rules-uk-company-indian-founders" className="text-[#d4af37] font-semibold hover:underline flex items-center group mt-auto">
                                Read FEMA & RBI Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                        <div className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover/card:translate-x-4 group-hover/card:-translate-y-4"></div>
                            <h3 className="service-title text-xl font-bold mb-3">UK & Indian Tax</h3>
                            <p className="service-description mb-6">The UK company may have UK tax obligations while the Indian shareholder or director can also have Indian tax obligations (Corporation Tax, dividends, salary, DTAA, POEM).</p>
                            <Link href="/blog/uk-company-tax-indian-residents-poem-double-taxation-2026" className="text-[#d4af37] font-semibold hover:underline flex items-center group mt-auto">
                                Read UK–India Tax Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                        <div className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover/card:translate-x-4 group-hover/card:-translate-y-4"></div>
                            <h3 className="service-title text-xl font-bold mb-3">Remittance & Funding</h3>
                            <p className="service-description mb-6">Money sent from India to fund an overseas company should follow the applicable banking and regulatory framework and be properly documented.</p>
                            <Link href="/blog/fema-rbi-rules-uk-company-indian-founders" className="text-[#d4af37] font-semibold hover:underline flex items-center group mt-auto">
                                Understand India Funding Rules <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 12, 13, 14 - BANKING, AMAZON, TIKTOK */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="why-choose-heading text-3xl font-bold tracking-tight mb-4">
                                Business Banking and Payments After Incorporation
                            </h2>
                            <p className="why-choose-description mb-8">
                                Opening the UK company does not guarantee a bank or payment account. Banks and fintech providers conduct their own eligibility, KYC and risk assessments. We help you prepare the company and supporting documentation so you can approach suitable providers with a coherent business profile.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex gap-4">
                                    <FaLandmark className="text-[#d4af37] h-6 w-6 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Business Banking</h4>
                                        <p className="text-sm text-muted-foreground">Guidance around providers suitable for the founder’s residence and business model.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <FaRegCreditCard className="text-[#d4af37] h-6 w-6 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Payment Providers</h4>
                                        <p className="text-sm text-muted-foreground">Readiness guidance for eligible payment platforms such as Stripe and other supported processors.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <FaShieldAlt className="text-[#d4af37] h-6 w-6 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold">Compliance First</h4>
                                        <p className="text-sm text-muted-foreground">Ownership, addresses, business activity, expected transactions and supporting evidence should remain consistent across applications.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/blog/uk-business-bank-account-indian-residents" className="text-[#d4af37] font-semibold hover:underline flex items-center group">
                                Explore Banking for Indian Founders <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <div className="trust-card-bg p-8 rounded-2xl border">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaAmazon className="text-2xl" />
                                    <h3 className="text-xl font-bold">Planning an Amazon FBA Business?</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">Indian founders selling through Amazon UK may need to consider the UK company, Amazon Seller verification, business banking, VAT, GB EORI, importer-of-record responsibilities, suppliers, customs and product compliance.</p>
                                <Link href="/blog/amazon-fba-uk-company-non-residents-2026" className="text-[#d4af37] font-semibold hover:underline text-sm flex items-center group">
                                    Read the Amazon FBA UK Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                            <div className="trust-card-bg p-8 rounded-2xl border">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaTiktok className="text-2xl" />
                                    <h3 className="text-xl font-bold">Planning to Sell Through TikTok Shop UK?</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">A UK Limited Company alone does not automatically guarantee TikTok Shop UK eligibility. Platform-specific seller, KYC, inventory, fulfilment and operational requirements must also be satisfied.</p>
                                <Link href="/blog/tiktok-shop-uk-non-resident-company-2026" className="text-[#d4af37] font-semibold hover:underline text-sm flex items-center group">
                                    Read the TikTok Shop UK Guide <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 15 - WHY THE UK? */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <h2 className="services-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Why Indian Entrepreneurs Consider a UK Company
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "International Credibility",
                                desc: "A widely recognised corporate jurisdiction for international contracting."
                            },
                            {
                                title: "Global Business",
                                desc: "A useful structure for businesses serving customers across multiple countries."
                            },
                            {
                                title: "E-commerce",
                                desc: "Potentially suitable for Amazon, Shopify and other international online business models where eligibility requirements are met."
                            },
                            {
                                title: "Technology & SaaS",
                                desc: "Strong fit for many software, digital and professional-service businesses."
                            },
                            {
                                title: "Limited Liability",
                                desc: "The company is a separate legal entity, subject to the normal rules of limited liability."
                            },
                            {
                                title: "UK Market Access",
                                desc: "Useful where the business intends to establish genuine commercial activity in the United Kingdom."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group premium-service-card h-full">
                                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                                
                                <div className="mb-4 inline-flex rounded-xl bg-[#d4af37]/10 p-3 text-[#d4af37] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#d4af37]/20">
                                    <FaGlobe className="h-6 w-6" />
                                </div>
                                
                                <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-[#d4af37] transition-colors">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
