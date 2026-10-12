import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === "fr";

    const title = isFr
        ? "Pays Pris en Charge | Création de Société UK pour Non-Résidents | Seven Oak Prestige"
        : "Countries We Support | UK Company Formation for Non-Residents | Seven Oak Prestige";

    const description = isFr
        ? "Seven Oak Prestige accompagne les fondateurs en Afrique, au Moyen-Orient, en Asie, en Europe et dans les Amériques pour créer une société UK Limited (KYC requis)."
        : "Seven Oak Prestige supports founders in Africa, the Middle East, Asia, Europe and the Americas forming UK limited companies, subject to KYC and eligibility checks.";

    return {
        title,
        description,
        alternates: {
            canonical: isFr
                ? "https://www.sevenoakprestige.com/fr/countries"
                : "https://www.sevenoakprestige.com/countries",
            languages: {
                en: "https://www.sevenoakprestige.com/countries",
                fr: "https://www.sevenoakprestige.com/fr/countries",
                "x-default": "https://www.sevenoakprestige.com/countries",
            },
        },
        openGraph: {
            title,
            description,
            url: isFr
                ? "https://www.sevenoakprestige.com/fr/countries"
                : "https://www.sevenoakprestige.com/countries",
            locale: isFr ? "fr_FR" : "en_GB",
        },
    };
}

const WHATSAPP = "https://wa.me/447447488755";

const REGIONS_EN = [
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

const REGIONS_FR = [
    {
        region: "Afrique",
        countries: [
            "Ghana",
            "Nigeria",
            "Kenya",
            "Afrique du Sud",
            "Côte d'Ivoire",
            "Cameroun",
            "Sénégal",
            "Maroc",
            "Égypte",
            "Tanzanie",
            "Ouganda",
            "Rwanda",
        ],
        note: "Création, adresse londonienne et vérification d'identité pour les entrepreneurs traitant avec des clients britanniques et européens.",
        package: "Prestige est généralement choisi car le registered office et la director service address sont obligatoires pour les dirigeants sans adresse au Royaume-Uni.",
    },
    {
        region: "Moyen-Orient",
        countries: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït", "Bahreïn", "Oman", "Jordanie", "Turquie"],
        note: "Entités UK utilisées en parallèle d'opérations dans le Golfe pour les contrats et marketplaces britanniques.",
        package: "Elite convient aux fondateurs ayant besoin de préparation bancaire et de documents de conformité renforcés.",
    },
    {
        region: "Asie & Océanie",
        countries: ["Inde", "Pakistan", "Bangladesh", "Sri Lanka", "Philippines", "Vietnam", "Indonésie", "Malaisie", "Singapour", "Australie", "Nouvelle-Zélande"],
        note: "Largement utilisé par les e-commerçants, agences et équipes tech facturant des clients au Royaume-Uni, en UE et aux États-Unis.",
        package: "Starter si une adresse locale est déjà disponible ; Prestige lorsqu'une adresse à Londres est requise.",
    },
    {
        region: "Europe",
        countries: ["France", "Allemagne", "Espagne", "Portugal", "Italie", "Pays-Bas", "Pologne", "Roumanie", "Suisse", "Albanie", "Ukraine", "Géorgie"],
        note: "Présence post-Brexit au Royaume-Uni pour les fondateurs européens vendant sur le marché britannique, avec support TVA et EORI.",
        package: "Prestige avec support EORI et TVA pour expédier des marchandises au Royaume-Uni en toute conformité.",
    },
    {
        region: "Amériques",
        countries: ["États-Unis", "Canada", "Brésil", "Mexique", "Argentine", "Colombie", "Chili", "Pérou"],
        note: "Entité commerciale ou holding britannique pour développer des activités sur les marchés britannique et européen.",
        package: "Elite pour les fondateurs recherchant un accompagnement stratégique sur leur structuration d'entreprise.",
    },
];

const PACKAGE_MATRIX_EN = [
    [
        "Starter — £199",
        "Available in every supported country. Covers incorporation, Companies House filing and your digital document pack. You must supply a valid address for the registered office.",
    ],
    [
        "Prestige — £299",
        "Recommended for non-resident founders in every region. Includes a London registered office and director service address for 12 months, with mail handling and scanning.",
    ],
    [
        "Elite — £399",
        "For founders needing a virtual business address, banking-readiness support and enhanced compliance documentation. Provider approval always remains with the bank or payment provider.",
    ],
];

const PACKAGE_MATRIX_FR = [
    [
        "Starter — £199",
        "Disponible dans tous les pays pris en charge. Comprend l'immatriculation, le dépôt Companies House et vos documents officiels numériques. Vous devez fournir une adresse valide pour le registered office.",
    ],
    [
        "Prestige — £299",
        "Recommandé pour les fondateurs non-résidents. Comprend le registered office et la director service address à Londres pendant 12 mois, avec numérisation et gestion du courrier.",
    ],
    [
        "Elite — £399",
        "Pour les fondateurs nécessitant une adresse commerciale virtuelle, un accompagnement à la préparation bancaire et des documents de conformité avancés. L'acceptation dépend du prestataire bancaire.",
    ],
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`px-6 py-20 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-6xl">{children}</div>
        </section>
    );
}

export default async function CountriesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const isFr = locale === "fr";
    const regions = isFr ? REGIONS_FR : REGIONS_EN;
    const packageMatrix = isFr ? PACKAGE_MATRIX_FR : PACKAGE_MATRIX_EN;

    return (
        <main className="bg-background">
            <div className="border-b border-border px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
                <div className="mx-auto max-w-6xl">
                    <p className="eyebrow">{isFr ? "Pays" : "Countries"}</p>
                    <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
                        {isFr
                            ? "Création de société au Royaume-Uni pour les fondateurs dans plus de 190 pays."
                            : "UK company formation for founders in 190+ countries."}
                    </h1>
                    <div className="mt-8 h-px w-24 rule-gold" />
                    <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
                        {isFr
                            ? "La résidence au Royaume-Uni n’est généralement pas exigée pour détenir ou diriger une société UK Limited. Nous accompagnons les fondateurs dans les régions ci-dessous, sous réserve des contrôles KYC, de conformité et d’éligibilité."
                            : "UK residency is not generally required to own or direct a UK limited company. We support founders across the regions below, subject to KYC, sanctions screening, service availability and provider eligibility requirements."}
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid gap-px bg-border md:grid-cols-2">
                    {regions.map((r) => (
                        <article key={r.region} className="bg-background p-8 sm:p-10">
                            <h2 className="font-display text-2xl">{r.region}</h2>
                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
                            <ul className="mt-6 flex flex-wrap gap-2">
                                {r.countries.map((c) =>
                                    c === "India" || c === "Inde" ? (
                                        <li key={c}>
                                            <Link
                                                href="/countries/india/uk-company-formation"
                                                className="block border border-gold/50 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold-soft transition-colors hover:bg-accent"
                                            >
                                                {c}
                                            </Link>
                                        </li>
                                    ) : c === "France" ? (
                                        <li key={c}>
                                            <Link
                                                href="/fr/countries/france/uk-company-formation"
                                                className="block border border-gold/50 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-gold-soft transition-colors hover:bg-accent"
                                            >
                                                France
                                            </Link>
                                        </li>
                                    ) : (
                                        <li
                                            key={c}
                                            className="border border-border px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-foreground/80"
                                        >
                                            {c}
                                        </li>
                                    )
                                )}
                            </ul>
                            <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                                <span className="text-gold-soft">
                                    {isFr ? "Comment fonctionnent les forfaits : " : "How the packages work here: "}
                                </span>
                                {r.package}
                            </p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                    {isFr
                        ? "Cette liste est indicative et non exhaustive. Si votre pays n’apparaît pas, échangez avec un conseiller — la plupart des juridictions peuvent être accompagnées. Nous ne pouvons intervenir pour les juridictions sous sanctions ou lorsque les contrôles de conformité ne peuvent être validés."
                        : "The list is indicative, not exhaustive. If your country is not shown, speak to an adviser — most jurisdictions can be supported. We cannot act for founders in sanctioned jurisdictions or where compliance checks cannot be completed."}
                </p>
            </Section>

            <Section className="border-t border-border">
                <p className="eyebrow">{isFr ? "Forfaits par pays" : "Packages by country"}</p>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
                    {isFr
                        ? "La même tarification fixe, où que vous soyez basé."
                        : "The same fixed pricing, wherever you are based."}
                </h2>
                <dl className="mt-12 divide-y divide-border border-t border-border">
                    {packageMatrix.map(([k, v]) => (
                        <div key={k} className="grid gap-3 py-7 md:grid-cols-[0.4fr_1.6fr]">
                            <dt className="font-display text-xl text-gold">{k}</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">{v}</dd>
                        </div>
                    ))}
                </dl>
                <div className="mt-12 flex flex-wrap gap-4">
                    <Button asChild>
                        <Link href={isFr ? "/fr#pricing" : "/#pricing"}>
                            {isFr ? "Voir les forfaits" : "View packages"}
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                            {isFr ? "Parler à un conseiller" : "Speak to an adviser"}
                        </a>
                    </Button>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
