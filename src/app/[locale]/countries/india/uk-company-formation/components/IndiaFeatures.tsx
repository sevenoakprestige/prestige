import { FaCheckCircle, FaCloud, FaBuilding, FaShoppingCart, FaTruck, FaBriefcase, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IndiaFeatures() {
    return (
        <>
            {/* SECTION: CAN AN INDIAN RESIDENT FORM A UK COMPANY? */}
            <section className="relative overflow-hidden py-16">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-foreground">
                                Can an Indian Resident Form a UK Company?
                            </h2>
                            <p className="text-lg mb-8 text-muted-foreground">
                                Yes. An Indian resident can generally own and direct a UK private limited company remotely, subject to a UK registered office and applicable identity-verification requirements.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="premium-standard-card h-full">
                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="premium-icon-wrapper">
                                        <FaCheckCircle className="size-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">Important</h3>
                                </div>
                                <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                    {[
                                        "Indian residents can generally own a UK Ltd",
                                        "A UK-resident director is generally not required",
                                        "A UK registered office is required",
                                        "Identity-verification requirements apply"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <FaCheckCircle className="mt-0.5 size-4 shrink-0 text-[#d4af37]" />
                                            <span className="font-medium text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: CAN AN INDIAN RESIDENT OWN 100% OF A UK COMPANY? (Restored from history) */}
            <section className="relative overflow-hidden py-16 sm:py-20 border-t border-border">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                                Can an Indian Resident Own 100% of a UK Company?
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
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
                                        <span className="font-medium text-foreground">{item}</span>
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
                            <div className="rounded-xl premium-standard-card p-8 h-full">
                                <h3 className="text-xl font-bold mb-4 text-foreground">Structure Facts</h3>
                                <div className="space-y-4 text-sm text-muted-foreground">
                                    <p><strong className="text-foreground">Company Type:</strong> Private Limited Company (Ltd)</p>
                                    <p><strong className="text-foreground">Minimum Directors:</strong> 1 (can be Indian resident)</p>
                                    <p><strong className="text-foreground">Minimum Shareholders:</strong> 1 (can be the same person)</p>
                                    <p><strong className="text-foreground">Capital:</strong> Typically £1 (1 share of £1)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: BUILT FOR INDIAN FOUNDERS EXPANDING INTERNATIONALLY */}
            <section className="py-16 sm:py-20 border-t border-border relative overflow-hidden">
                <div className="premium-section-bg"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            Built for Indian Founders Expanding Internationally
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "SaaS & Technology", icon: FaCloud },
                            { title: "IT Services & Agencies", icon: FaBuilding },
                            { title: "E-Commerce Brands", icon: FaShoppingCart },
                            { title: "Import, Export & Trade", icon: FaTruck },
                            { title: "Professional Services", icon: FaBriefcase },
                            { title: "UK & Global Expansion", icon: FaGlobe }
                        ].map((item, idx) => (
                            <div key={idx} className="premium-service-card flex items-center gap-4 rounded-xl p-6">
                                <div className="text-[#d4af37] text-2xl">
                                    <item.icon />
                                </div>
                                <span className="font-semibold text-foreground text-lg">{item.title}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-muted-foreground font-medium">
                            A UK company is not automatically the right choice for every business. We help assess whether a UK Ltd is appropriate for your goals.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
