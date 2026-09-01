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
                            title: "Start a UK Company from India (2026 Guide)",
                            url: "/blog/how-to-start-a-uk-company-from-india-the-complete-guide-for-indian-entrepreneurs-2026"
                        },
                        {
                            title: "UK Business Bank Account for Indian Residents",
                            url: "/blog/uk-business-bank-account-indian-residents"
                        },
                        {
                            title: "Indian Pvt Ltd vs UK Limited Company",
                            url: "/blog/indian-pvt-ltd-vs-uk-limited-company"
                        },
                        {
                            title: "Companies House ID Verification for Indian Residents",
                            url: "/blog/companies-house-identity-verification-indian-residents"
                        },
                        {
                            title: "UK Company for Indian SaaS & Tech Founders",
                            url: "/blog/uk-company-indian-saas-technology-founders-2026"
                        },
                        {
                            title: "UK Company for Indian Amazon & E-commerce",
                            url: "/blog/uk-company-for-indian-amazon-e-commerce-exporters-2026"
                        },
                        {
                            title: "UK Company Tax for Indian Residents (POEM & DTAA)",
                            url: "/blog/uk-company-tax-indian-residents-poem-double-taxation-2026"
                        },
                        {
                            title: "Stripe, Wise & Airwallex for Indian Founders",
                            url: "/blog/stripe-wise-airwallex-indian-founders-uk-company"
                        },
                        {
                            title: "Revolut Business for Indian Residents",
                            url: "/blog/revolut-business-indian-residents-uk-company-2026"
                        },
                        {
                            title: "UK Company Formation Cost from India",
                            url: "/blog/uk-company-formation-from-india-cost"
                        }
                    ].map((article, idx, arr) => (
                        <div key={idx} className="flex items-center gap-2 mb-2">
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
