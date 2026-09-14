import Link from "next/link";

const PROVIDERS = ["Wise Business", "Revolut Business", "Airwallex", "Stripe", "Payoneer"];
const WHATSAPP = "https://wa.me/447447488755";

export default function BankingReadiness() {
    return (
        <section id="banking" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">Banking readiness</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    Prepare Your Company for Banking and Payments
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    We assess your founder and business profile, help prepare a consistent application and support the
                    document review for suitable providers. Providers considered may include {PROVIDERS.join(", ")}.
                </p>
                <div className="mt-8 border-y border-border py-6">
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/85">
                        Banking and payment-provider approval cannot be guaranteed. Final decisions remain with each provider
                        and depend on residence, activity, ownership, KYC and risk assessment.
                    </p>
                </div>
                <Link href={WHATSAPP} className="btn-ghost mt-12 inline-block">
                    Prepare My Banking Profile
                </Link>
            </div>
        </section>
    );
}
