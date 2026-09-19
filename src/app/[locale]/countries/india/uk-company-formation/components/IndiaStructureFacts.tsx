import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function IndiaStructureFacts() {
    return (
        <section className="relative overflow-hidden py-16">
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
                            <Link href="/blog/how-to-start-a-uk-company-from-india">
                                Read the Complete India Formation Guide 
                                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </Button>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-transparent p-1">
                            <div className="rounded-xl premium-standard-card p-8 h-full shadow-xl">
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
            </div>
        </section>
    );
}
