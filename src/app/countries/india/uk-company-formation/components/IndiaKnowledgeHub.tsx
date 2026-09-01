import Link from "next/link";
import { FaBookOpen, FaChevronRight } from "react-icons/fa";

export default function IndiaKnowledgeHub() {
    return (
        <section className="py-16 sm:py-20 border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
                        India Founder Knowledge Hub
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-2 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Start a UK Company from India | Complete Guide",
                            url: "/blog/how-to-start-a-uk-company-from-india"
                        },
                        {
                            title: "UK Company Formation for Non-Residents (2026)",
                            url: "/blog/company-formation-guide-2026"
                        },
                        {
                            title: "The Ultimate Guide to Fintech Banking",
                            url: "/blog/fintech-banking-guide"
                        },
                        {
                            title: "UK Company Formation with a London Business Address",
                            url: "/blog/uk-company-formation-london-business-address"
                        },
                        {
                            title: "How to Start a Business in the UK as a Non-Resident",
                            url: "/blog/starting-a-business-uk"
                        },
                        {
                            title: "How to Start a UK Company From Abroad in 2026",
                            url: "/blog/uk-company-formation-guide-2026"
                        }
                    ].map((article, idx, arr) => (
                        <div key={idx} className="flex items-center gap-2">
                            <Link href={article.url} className="group flex items-center gap-2 p-3 border border-border rounded-lg bg-card hover:border-[#d4af37] transition-colors shadow-sm">
                                <FaBookOpen className="text-[#d4af37] shrink-0" />
                                <span className="text-sm font-semibold text-foreground group-hover:text-[#d4af37] transition-colors line-clamp-1">{article.title}</span>
                            </Link>
                            {idx < arr.length - 1 && (
                                <FaChevronRight className="text-muted-foreground hidden md:block shrink-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
