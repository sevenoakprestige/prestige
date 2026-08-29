import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

export default function IndiaKnowledgeHub() {
    const articles = [
        {
            title: "How to Start a UK Company From India",
            url: "/blog/how-to-start-a-uk-company-from-india-the-complete-guide-for-indian-entrepreneurs-2026"
        },
        {
            title: "FEMA & RBI Rules for Indian Founders",
            url: "/blog/fema-rbi-rules-uk-company-indian-founders"
        },
        {
            title: "UK Company Tax for Indian Residents",
            url: "/blog/uk-company-tax-indian-residents-poem-double-taxation-2026"
        },
        {
            title: "UK Business Banking for Indian Residents",
            url: "/blog/uk-business-bank-account-indian-residents"
        },
        {
            title: "Companies House Identity Verification for Indian Residents",
            url: "/blog/companies-house-identity-verification-indian-residents"
        },
        {
            title: "Indian Pvt Ltd vs UK Limited Company",
            url: "/blog/indian-pvt-ltd-vs-uk-limited-company"
        },
        {
            title: "Amazon FBA UK",
            url: "/blog/amazon-fba-uk-company-non-residents-2026"
        },
        {
            title: "TikTok Shop UK",
            url: "/blog/tiktok-shop-uk-non-resident-company-2026"
        },
        {
            title: "Stripe / Wise / Airwallex for Indian Founders",
            url: "/blog/stripe-wise-airwallex-indian-founders-uk-company"
        },
        {
            title: "UK Company Formation Cost From India",
            url: "/blog/uk-company-formation-from-india-cost"
        }
    ];

    return (
        <section className="relative overflow-hidden py-16 sm:py-24">
            <div className="premium-section-bg"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="why-choose-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        India Founder Knowledge Hub
                    </h2>
                    <p className="why-choose-description max-w-2xl mx-auto">
                        Explore our comprehensive guides specifically tailored for Indian entrepreneurs expanding to the UK.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article, idx) => (
                        <Link key={idx} href={article.url} className="group block h-full">
                            <div className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)] h-full justify-between">
                                <div className="absolute right-0 top-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover/card:translate-x-4 group-hover/card:-translate-y-4"></div>
                                
                                <div>
                                    <div className="mb-4 flex justify-start">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30">
                                            <FaBookOpen className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-foreground group-hover:text-[#d4af37] transition-colors">{article.title}</h3>
                                </div>
                                <div className="mt-4 text-sm font-semibold text-muted-foreground group-hover:text-[#d4af37] transition-colors flex items-center">
                                    Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
