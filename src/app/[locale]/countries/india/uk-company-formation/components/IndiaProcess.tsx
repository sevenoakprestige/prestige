import { FaPassport, FaHome, FaFileSignature, FaBriefcase, FaExclamationCircle } from "react-icons/fa";

export default function IndiaProcess() {
    return (
        <>
            {/* WHAT YOU NEED TO GET STARTED */}
            <section className="py-16 sm:py-20 relative overflow-hidden">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-10">
                            What You Need to Get Started
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Valid passport",
                                desc: "For each director and shareholder",
                                icon: FaPassport
                            },
                            {
                                title: "Proof of address",
                                desc: "Bank statement, utility bill or landline bill, dated within 3 months",
                                icon: FaHome
                            },
                            {
                                title: "Proposed company name",
                                desc: "One or two preferred options",
                                icon: FaFileSignature
                            },
                            {
                                title: "Business activity",
                                desc: "A short description of what the company will do",
                                icon: FaBriefcase
                            }
                        ].map((doc, idx) => (
                            <div key={idx} className="premium-service-card flex flex-col items-center text-center p-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30 mb-5">
                                    <doc.icon className="size-7" />
                                </div>
                                <h3 className="font-bold text-lg text-foreground mb-2">{doc.title}</h3>
                                {doc.desc && <p className="text-sm text-muted-foreground">{doc.desc}</p>}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-foreground font-medium">That is enough to begin your formation review.</p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS TIMELINE */}
            <section className="py-16 sm:py-20 border-t border-border relative overflow-hidden">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            How UK Company Formation Works from India
                        </h2>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/50 to-[#d4af37]/10 z-0"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
                            {[
                                { title: "Choose your package", doc: null },
                                { title: "Make payment", doc: null },
                                { title: "Receive onboarding email", doc: null },
                                { title: "Submit your documents", doc: "Certificate of Incorporation" },
                                { title: "KYC & identity verification", doc: "Memorandum & Articles" },
                                { title: "We prepare and submit the incorporation", doc: "Share Certificate" },
                                { title: "Receive your company documents", doc: "Company Register" }
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-row lg:flex-col items-center lg:text-center gap-4 lg:gap-4 relative h-full">
                                    {/* Number Circle */}
                                    <div className="flex h-14 w-14 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-xl font-bold text-black z-10 shadow-lg shadow-[#d4af37]/20 relative">
                                        {idx + 1}
                                    </div>
                                    <div className="flex-1 lg:w-full flex flex-col h-full">
                                        <p className="text-sm font-semibold text-foreground leading-tight mb-2">{step.title}</p>
                                        
                                        {/* Document Box */}
                                        {step.doc && (
                                            <div className="hidden lg:flex mt-auto pt-6 w-full justify-center relative">
                                                {/* Desktop branching tree for the documents */}
                                                {idx === 6 && (
                                                    <>
                                                        {/* Upward stem from the horizontal branch to the text */}
                                                        <div className="hidden lg:block absolute bottom-full left-1/2 w-[2px] h-8 -translate-x-1/2 bg-gradient-to-t from-[#d4af37]/50 to-transparent z-0"></div>
                                                        {/* Horizontal branch spanning steps 4, 5, 6, 7 */}
                                                        <div className="hidden lg:block absolute top-0 right-[calc(50%-1px)] w-[calc(300%+3rem+2px)] h-[2px] bg-[#d4af37]/50 z-0"></div>
                                                    </>
                                                )}
                                                {/* Vertical drop into each document box */}
                                                <div className="hidden lg:block absolute top-0 left-1/2 w-[2px] h-6 -translate-x-1/2 bg-gradient-to-b from-[#d4af37]/50 to-[#d4af37]/10 z-0"></div>
                                                
                                                <div className="premium-standard-card w-[130%] -ml-[15%] text-[11px] text-muted-foreground z-10 relative flex-row items-center justify-center gap-1.5 text-center leading-tight !p-3">
                                                    <FaFileSignature className="text-[#d4af37] shrink-0 text-lg" />
                                                    <span>{step.doc}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Mobile Connecting Line */}
                                    {idx < 6 && (
                                        <div className="lg:hidden absolute top-[3.5rem] left-[27px] w-[2px] h-[calc(100%+2rem)] bg-gradient-to-b from-[#d4af37]/50 to-[#d4af37]/10 z-0"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Document Boxes */}
                        <div className="flex lg:hidden flex-col relative mt-4 pl-[70px] gap-4">
                            {["Certificate of Incorporation", "Memorandum & Articles", "Share Certificate", "Company Register"].map((docName, i) => (
                                <div key={i} className="premium-standard-card w-full text-[12px] text-muted-foreground z-10 relative flex-row items-center justify-start gap-3 leading-tight !p-3">
                                    {/* Horizontal branch */}
                                    <div className="absolute top-1/2 left-[-43px] w-[43px] h-[2px] bg-[#d4af37]/50 z-0"></div>
                                    
                                    {/* Vertical segment connecting up */}
                                    {i === 0 ? (
                                        // First item: connect way up to Step 7
                                        <div className="absolute bottom-1/2 left-[-43px] w-[2px] h-[150px] bg-[#d4af37]/50 z-[-1]"></div>
                                    ) : (
                                        // Subsequent items: connect to the previous item
                                        <div className="absolute bottom-1/2 left-[-43px] w-[2px] h-[calc(100%+1rem)] bg-[#d4af37]/50 z-[-1]"></div>
                                    )}

                                    <FaFileSignature className="text-[#d4af37] shrink-0 text-lg" />
                                    <span>{docName}</span>
                                </div>
                            ))}
                        </div>



                        {/* Warning Box */}
                        <div className="mt-16 flex items-start gap-3 bg-amber-50/50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 max-w-4xl mx-auto">
                            <FaExclamationCircle className="text-[#d4af37] w-5 h-5 shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground/80 font-medium">
                                HMRC Corporation Tax correspondence, including the UTR, is typically received after incorporation and forwarded in line with the selected service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
