import Footer from "@/components/Footer";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Pays Que Nous Soutenons | Création d'Entreprise au R-U pour Non-Résidents",
    description: "Seven Oak Prestige accompagne les fondateurs en Afrique, au Moyen-Orient, en Asie, en Europe et aux Amériques dans la création de sociétés à responsabilité limitée au Royaume-Uni, sous réserve des contrôles KYC et d'éligibilité.",
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/countries",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/countries",
            "fr-FR": "https://www.sevenoakprestige.com/fr/countries",
        },
    }
};

const WHATSAPP = "https://wa.me/447447488755";

const REGIONS = [
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
        note: "Création d'entreprise, adresse à Londres et assistance à la vérification d'identité pour les fondateurs faisant du commerce avec des clients britanniques et européens.",
        package: "Le forfait Prestige est généralement choisi, car le siège social et l'adresse de service du directeur sont requis pour les fondateurs n'ayant pas d'adresse au Royaume-Uni.",
    },
    {
        region: "Moyen-Orient",
        countries: ["Émirats Arabes Unis", "Arabie Saoudite", "Qatar", "Koweït", "Bahreïn", "Oman", "Jordanie", "Turquie"],
        note: "Entités britanniques utilisées en parallèle avec les opérations existantes dans le Golfe pour les contrats orientés vers le Royaume-Uni et l'intégration sur les marketplaces.",
        package: "Le forfait Elite convient aux fondateurs nécessitant une préparation bancaire et une documentation de conformité renforcée pour les activités transfrontalières.",
    },
    {
        region: "Asie & Océanie",
        countries: ["Inde", "Pakistan", "Bangladesh", "Sri Lanka", "Philippines", "Vietnam", "Indonésie", "Malaisie", "Singapour", "Australie", "Nouvelle-Zélande"],
        note: "Largement utilisé par les vendeurs e-commerce, les agences et les équipes logicielles facturant des clients au Royaume-Uni, dans l'UE et aux États-Unis.",
        package: "Starter fonctionne lorsqu'une adresse locale est déjà disponible ; Prestige lorsqu'une adresse au Royaume-Uni est requise.",
    },
    {
        region: "Europe",
        countries: ["France", "Allemagne", "Espagne", "Portugal", "Italie", "Pays-Bas", "Pologne", "Roumanie", "Suisse", "Albanie", "Ukraine", "Géorgie"],
        note: "Présence au Royaume-Uni post-Brexit pour les fondateurs de l'UE vendant au Royaume-Uni, plus support EORI et TVA le cas échéant.",
        package: "Prestige avec support EORI et TVA est la voie habituelle pour les fondateurs expédiant des marchandises au Royaume-Uni.",
    },
    {
        region: "Amériques",
        countries: ["États-Unis", "Canada", "Brésil", "Mexique", "Argentine", "Colombie", "Chili", "Pérou"],
        note: "Une société holding ou commerciale au Royaume-Uni pour les fondateurs en expansion sur les marchés britannique et européen.",
        package: "Elite pour les fondateurs qui ont besoin d'un soutien consultatif sur la structuration en plus de la constitution de la société.",
    },
];

const PACKAGE_MATRIX = [
    [
        "Starter — £199",
        "Disponible dans tous les pays pris en charge. Couvre la constitution, le dépôt à la Companies House et votre dossier numérique. Vous devez fournir une adresse valide pour le siège social.",
    ],
    [
        "Prestige — £299",
        "Recommandé pour les fondateurs non-résidents de toutes les régions. Comprend un siège social à Londres et une adresse de service de directeur pendant 12 mois, avec traitement et numérisation du courrier.",
    ],
    [
        "Elite — £399",
        "Pour les fondateurs nécessitant une adresse commerciale virtuelle, un soutien à la préparation bancaire et une documentation de conformité renforcée. L'approbation du fournisseur reste toujours à la discrétion de la banque ou du fournisseur de paiement.",
    ],
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <section className={`px-6 py-20 sm:py-24 ${className}`}>
            <div className="mx-auto max-w-6xl">{children}</div>
        </section>
    );
}

export default function CountriesPageFR() {
    return (
        <main className="bg-background">
            <div className="border-b border-border px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
                <div className="mx-auto max-w-6xl">
                    <p className="eyebrow">Pays</p>
                    <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
                        Création d'entreprise au R-U pour les fondateurs dans plus de 190 pays.
                    </h1>
                    <div className="mt-8 h-px w-24 rule-gold" />
                    <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
                        La résidence au Royaume-Uni n'est généralement pas requise pour posséder ou diriger une société à responsabilité limitée britannique. Nous accompagnons les fondateurs dans les régions ci-dessous, sous réserve de KYC, de vérification des sanctions, de disponibilité des services et des critères d'éligibilité des fournisseurs.
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
                                <span className="text-gold-soft">Comment fonctionnent les forfaits ici : </span>
                                {r.package}
                            </p>
                        </article>
                    ))}
                </div>
                <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
                    La liste est indicative et non exhaustive. Si votre pays n'est pas affiché, parlez à un conseiller — la plupart des juridictions peuvent être prises en charge. Nous ne pouvons pas agir pour les fondateurs dans des juridictions sanctionnées ou là où les contrôles de conformité ne peuvent pas être effectués.
                </p>
            </Section>

            <Section className="border-t border-border">
                <p className="eyebrow">Forfaits par pays</p>
                <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
                    Le même prix fixe, où que vous soyez.
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
                            Voir les forfaits
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <a href={WHATSAPP}>
                            Parler à un conseiller
                        </a>
                    </Button>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
