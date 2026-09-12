import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Countries We Support | UK Company Formation for Non-Residents",
    description: "Seven Oak Prestige supports founders in Africa, the Middle East, Asia, Europe and the Americas forming UK limited companies, subject to KYC and eligibility checks.",
};

const WHATSAPP = "https://wa.me/447447488755";

const REGIONS = [
    {
        region: "Africa",
        countries: [
            "Ghana",
            "Nigeria",
            "Kenya",
            "South Africa",
            "Côte d'Ivoire",
            "Cameroon",
            "Senegal",
            "Morocco",
            "Egypt",
            "Tanzania",
            "Uganda",
            "Rwanda",
        ],
        note: "Formation, London address and identity verification support for founders trading with UK and EU customers.",
        package: "Prestige is typically chosen, as the registered office and director service address are required for founders with no UK address.",
    },
    {
        region: "Middle East",
        countries: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Jordan", "Turkey"],
        note: "UK entities used alongside existing Gulf operations for UK-facing contracts and marketplace onboarding.",
        package: "Elite suits founders needing banking readiness and enhanced compliance documentation for cross-border activity.",
    },
    {
        region: "Asia & Oceania",
        countries: ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Philippines", "Vietnam", "Indonesia", "Malaysia", "Singapore", "Australia", "New Zealand"],
        note: "Widely used by e-commerce sellers, agencies and software teams billing UK, EU and US clients.",
        package: "Starter works where a local address is already available; Prestige where a UK address is needed.",
    },
    {
        region: "Europe",
        countries: ["France", "Germany", "Spain", "Portugal", "Italy", "Netherlands", "Poland", "Romania", "Switzerland", "Albania", "Ukraine", "Georgia"],
        note: "Post-Brexit UK presence for EU founders selling into the UK, plus EORI and VAT support where applicable.",
        package: "Prestige with EORI and VAT support is the usual route for founders shipping goods into the UK.",
    },
    {
        region: "Americas",
        countries: ["United States", "Canada", "Brazil", "Mexico", "Argentina", "Colombia", "Chile", "Peru"],
        note: "A UK holding or trading entity for founders expanding into the UK and European markets.",
        package: "Elite for founders who need advisory support on structuring alongside the incorporation.",
    },
];

const PACKAGE_MATRIX = [
    [
        "Starter — £199",
        "Available in every supported country. Covers incorporation, Companies House filing and your digital document pack. You must supply a valid address for the registered office.",
    ],
    [
        "Prestige — £299",
        "Recommended for non-non-resident founders in every region. Includes a London registered office and director service address for 12 months, with mail handling and scanning.",
    ],
    [
        "Elite — £399",
        "For founders needing a virtual business address, banking-readiness support and enhanced compliance documentation. Provider approval always remains with the bank or payment provider.",
    ],
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`px-6 py-20 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-6xl">{children}</div>
        </section>
    );
}

export default function CountriesPage() {
    return (
        <main className="bg-background">
            <div className="border-b border-border px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
                <div className="mx-auto max-w-6xl">
                    <p className="eyebrow">Countries</p>
                    <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
                        UK company formation for founders in 190+ countries.
                    </h1>
                    <div className="mt-8 h-px w-24 rule-gold" />
                    <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
                        UK residency is not generally required to own or direct a UK limited company. We support founders
                        across the regions below, subject to KYC, sanctions screening, service availability and provider
                        eligibility requirements.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid gap-px bg-border md:grid-cols-2">
                    {REGIONS.map((r) => (
                        <article key={r.region} className="bg-background p-8 sm:p-10">
                            <h2 className="font-display text-2xl">{r.region}</h2>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {r.countries.map((c) => (
                                    <li
                                        key={c}
                                        className="border border-border px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-foreground/80"
                                    >
                                        {c}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                                <span className="text-gold-soft">How the packages work here: </span>
                                {r.package}
                            </p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                    The list is indicative, not exhaustive. If your country is not shown, speak to an adviser — most
                    jurisdictions can be supported. We cannot act for founders in sanctioned jurisdictions or where
                    compliance checks cannot be completed.
                </p>
            </Section>

            <Section className="border-t border-border">
                <p className="eyebrow">Packages by country</p>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
                    The same fixed pricing, wherever you are based.
                </h2>
                <dl className="mt-12 divide-y divide-border border-t border-border">
                    {PACKAGE_MATRIX.map(([k, v]) => (
                        <div key={k} className="grid gap-3 py-7 md:grid-cols-[0.4fr_1.6fr]">
                            <dt className="font-display text-xl text-gold">{k}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
                        </div>
                    ))}
                </dl>
                <div className="mt-12 flex flex-wrap gap-4">
                    <Button asChild>
                        <Link href="/#pricing">
                            View packages
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <a href={WHATSAPP}>
                            Speak to an adviser
                        </a>
                    </Button>
                </div>
            </Section>
        </main>
    );
}
