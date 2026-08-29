import { FaPassport, FaHome, FaBriefcase, FaUser, FaBuilding, FaShieldAlt } from "react-icons/fa";

export default function IndiaProcess() {
    return (
        <>
            {/* SECTION 8 - WHAT DOCUMENTS DO I NEED? */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="why-choose-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Documents Required From Indian Founders
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-[#d4af37] mb-6"></div>
                        <p className="text-muted-foreground text-sm max-w-2xl mx-auto font-medium">
                            Requirements depend on the individual founder, selected service and business activity. We will tell you exactly what is required before submission.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "Passport / Identity Document",
                                desc: "A valid accepted identity document for the director, shareholder and relevant PSC.",
                                icon: FaPassport
                            },
                            {
                                title: "Proof of Residential Address",
                                desc: "Recent evidence of the founder’s genuine Indian residential address where required for KYC/compliance. Examples may include accepted bank statement, utility bill, government-issued address document.",
                                icon: FaHome
                            },
                            {
                                title: "Business Activity Information",
                                desc: "We need to understand what the company will do; products/services; target customers; countries of operation; expected business model.",
                                icon: FaBriefcase
                            },
                            {
                                title: "Director / Shareholder Details",
                                desc: "Including full legal name; date of birth; nationality; residential address; shareholding percentage; ownership/control information.",
                                icon: FaUser
                            },
                            {
                                title: "Company Details",
                                desc: "Proposed company name; business activity; email; share structure; proposed SIC codes.",
                                icon: FaBuilding
                            },
                            {
                                title: "Additional Compliance Documents",
                                desc: "Depending on the activity, banking, VAT or risk profile, additional evidence may include source of funds; source of wealth; contracts; website; supplier/customer information; existing company documents.",
                                icon: FaShieldAlt
                            }
                        ].map((doc, idx) => (
                            <div key={idx} className="flex gap-4 p-5 rounded-xl border trust-card-bg">
                                <div className="mt-1">
                                    <doc.icon className="h-6 w-6 text-[#d4af37]" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">{doc.title}</h3>
                                    <p className="text-sm text-muted-foreground">{doc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 9 - HOW IT WORKS */}
            <section className="relative overflow-hidden py-16 sm:py-24">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="how-it-works-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            From India to a UK Company: How It Works
                        </h2>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-[#d4af37]/30 hidden md:block"></div>
                        
                        <div className="space-y-8">
                            {[
                                {
                                    step: "01",
                                    title: "Initial Consultation",
                                    desc: "Tell us about your business, intended activity, ownership and objectives."
                                },
                                {
                                    step: "02",
                                    title: "Company Name & Structure Review",
                                    desc: "We check the proposed company name and confirm the director, shareholder, share and SIC-code structure."
                                },
                                {
                                    step: "03",
                                    title: "KYC & Identity Verification",
                                    desc: "The required identity and compliance documents are collected and reviewed."
                                },
                                {
                                    step: "04",
                                    title: "Companies House Submission",
                                    desc: "Your incorporation application is prepared and submitted to Companies House."
                                },
                                {
                                    step: "05",
                                    title: "Company Documents",
                                    desc: "After successful incorporation, you receive the relevant company documents and setup information."
                                },
                                {
                                    step: "06",
                                    title: "Post-Incorporation Support",
                                    desc: "Depending on your package/business: registered office; service address; banking readiness; VAT; EORI; post-incorporation guidance."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative flex items-start gap-6">
                                    <div className="how-it-works-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-xl font-bold text-black shadow-lg z-10" style={{ animationDelay: `${idx * 100}ms` }}>
                                        {item.step}
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="how-it-works-title text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="how-it-works-description">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10 - HOW TO PAY FROM INDIA */}
            <section className="relative overflow-hidden py-16">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="why-choose-heading text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                        Simple and Secure Payment From India
                    </h2>
                    <p className="why-choose-description mb-10 max-w-2xl mx-auto">
                        Indian clients can pay for their Seven Oak Prestige services using the payment method available on their invoice or secure payment link.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        <div className="trust-card-bg p-4 rounded-xl border text-sm font-semibold">Secure Online Payment</div>
                        <div className="trust-card-bg p-4 rounded-xl border text-sm font-semibold">International Debit/Credit</div>
                        <div className="trust-card-bg p-4 rounded-xl border text-sm font-semibold">Bank Transfer</div>
                        <div className="trust-card-bg p-4 rounded-xl border text-sm font-semibold">Formal Invoice Provided</div>
                    </div>
                </div>
            </section>
        </>
    );
}
