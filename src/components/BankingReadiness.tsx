import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

const PROVIDERS = ["Wise Business", "Revolut Business", "Airwallex", "Stripe", "Payoneer"];
const WHATSAPP = "https://wa.me/447447488755";

export default function BankingReadiness() {
    const t = useTranslation().t.banking;
    return (
        <section id="banking" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div>
                    <p className="eyebrow">{t.eyebrow}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                </div>
                <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                    {t.heading}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {t.body1.replace('{providers}', PROVIDERS.join(", "))}
                </p>
                <div className="mt-8 border-y border-border py-6">
                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/85">
                        {t.body2}
                    </p>
                </div>
                <Link href={WHATSAPP} className="btn-ghost mt-12 inline-block">
                    {t.cta}
                </Link>
            </div>
        </section>
    );
}
