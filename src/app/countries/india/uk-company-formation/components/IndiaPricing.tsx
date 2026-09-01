import Link from "next/link";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

interface PricingProps {
    inrRate: number | null;
}

export default function IndiaPricing({ inrRate }: PricingProps) {
    const formatINR = (gbp: number) => {
        if (!inrRate) return null;
        return Math.round(gbp * inrRate).toLocaleString('en-IN');
    };

    const formatPriceDisplay = (gbp: number) => {
        const inrFormatted = formatINR(gbp);
        if (inrFormatted) {
            return `~ ₹${inrFormatted}`;
        }
        return "(Current market rates apply for Rupee conversion)*";
    };

    const tiers = [
        {
            name: "Starter",
            price: "£199",
            gbpAmount: 199,
            features: [
                "Companies House filing support",
                "Digital incorporation documents",
                "Memorandum & Articles",
                "Basic post-incorporation checklist"
            ],
            cta: "Choose Starter",
            link: "https://buy.stripe.com/9B65kvcB217f3ZX2l6fw40i"
        },
        {
            name: "Prestige",
            price: "£299",
            gbpAmount: 299,
            features: [
                "Everything in Starter",
                "UK Registered Office",
                "Director Service Address",
                "Identity-verification guidance",
                "Banking-readiness review",
                "One strategy call"
            ],
            cta: "Choose Prestige",
            featured: true,
            link: "https://buy.stripe.com/aFa6ozbwY5nv3ZX8Jufw40a"
        },
        {
            name: "Elite",
            price: "£399",
            gbpAmount: 399,
            features: [
                "Everything in Prestige",
                "International structure guidance",
                "VAT / EORI readiness review",
                "Payment-provider documentation checklist",
                "Priority support"
            ],
            cta: "Choose Elite",
            link: "https://buy.stripe.com/9B6fZ958AbLT5417Fqfw402"
        }
    ];

    return (
        <section id="pricing" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="premium-section-bg"></div>
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="pricing-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Transparent Pricing for Indian Founders
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-2xl ${tier.featured
                                ? "border-[#d4af37] shadow-xl shadow-[#d4af37]/20 md:scale-105 md:py-12"
                                : "md:mt-8"
                                }`}
                        >
                            {tier.featured && (
                                <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
                                    <div className="absolute right-[-30px] top-[20px] w-[140px] rotate-[45deg] bg-gradient-to-r from-[#d4af37] to-[#f3d066] py-1.5 text-center text-[10px] font-bold uppercase tracking-wide text-black shadow-lg">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            <h3 className="pricing-tier-name mb-2 text-2xl font-bold">
                                {tier.name}
                            </h3>

                            <div className="mb-4">
                                <span className="pricing-price text-4xl font-bold text-[#d4af37]">
                                    {tier.price}
                                </span>
                                <div className="mt-1 text-sm font-medium text-muted-foreground">
                                    {formatPriceDisplay(tier.gbpAmount)}
                                </div>
                            </div>

                            <ul className="mb-8 flex-grow space-y-3 mt-4">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <FaCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                        <span className="pricing-feature">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.link}
                                className={`block w-full rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${tier.featured
                                    ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                    : "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                            
                            <Link
                                href="https://wa.me/447447488755?text=Hi,%20I'm%20from%20India%20and%20interested%20in%20setting%20up%20a%20UK%20Company.%20(Ref:%20INDIA-LANDING-2026)"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-center justify-center gap-2 w-full rounded-xl py-3 text-center text-sm font-bold border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-[#25D366] hover:text-white dark:hover:text-black hover:border-transparent transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                                Talk to an Expert
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
                    * Payments are charged in GBP. Rupee amounts are provided for convenience and are indicative based on exchange rates{inrRate ? " (updated daily)" : ""}. Any additional service or third-party fee will be disclosed before purchase.
                </div>
            </div>
        </section>
    );
}
