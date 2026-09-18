import Link from "next/link";
import { FaBuilding, FaFileAlt, FaShieldAlt, FaCreditCard, FaNewspaper, FaGavel, FaHome, FaMapSigns } from "react-icons/fa";
import Footer from "@/components/Footer";

const sitemapSections = [
    {
        title: "Création de Société",
        icon: <FaBuilding className="h-5 w-5" />,
        description: "Enregistrez facilement votre société à responsabilité limitée (LTD) au Royaume-Uni",
        links: [
            { name: "Création de Société au Royaume-Uni pour Non-Résidents", href: "/services/uk-company-formation-for-non-residents", description: "Créez une société britannique depuis n'importe où dans le monde" },
        ],
    },
    {
        title: "Création Spécifique par Pays",
        icon: <FaMapSigns className="h-5 w-5" />,
        description: "Guides d'installation sur mesure pour les fondateurs internationaux",
        links: [
            { name: "Aperçu des Juridictions Mondiales", href: "/countries", description: "Sélectionnez votre pays de résidence" },
            { name: "Création de Société au Royaume-Uni depuis l'Inde", href: "/countries/india/uk-company-formation", description: "Créez une société britannique depuis l'Inde" },
            { name: "Création de Société au Royaume-Uni depuis la France", href: "/fr/countries/france/uk-company-formation", description: "Créez une société britannique depuis la France" },
        ],
    },
    {
        title: "Conformité & Enregistrement",
        icon: <FaShieldAlt className="h-5 w-5" />,
        description: "Restez en conformité avec la réglementation britannique",
        links: [
            { name: "Enregistrement TVA au Royaume-Uni", href: "/services/vat-registration-uk", description: "Conseils pour l'enregistrement et la conformité à la TVA (HMRC)" },
            { name: "Enregistrement EORI au Royaume-Uni", href: "/services/eori-registration-uk", description: "Numéro EORI pour l'import-export au Royaume-Uni" },
            { name: "Vérification Companies House", href: "/services/companies-house-verification", description: "Vérifiez les détails de votre société avec Companies House" },
        ],
    },
    {
        title: "Adresse Commerciale & Bureau",
        icon: <FaFileAlt className="h-5 w-5" />,
        description: "Adresses commerciales britanniques professionnelles",
        links: [
            { name: "Service de Siège Social", href: "/services/registered-office-service", description: "Adresse officielle de siège social au Royaume-Uni" },
            { name: "Adresse de Service du Directeur", href: "/services/director-service-address", description: "Protégez votre adresse personnelle des registres publics" },
            { name: "Adresse Commerciale Virtuelle", href: "/services/virtual-business-address", description: "Adresse commerciale britannique de prestige pour votre société" },
        ],
    },
    {
        title: "Banque & Fintech",
        icon: <FaCreditCard className="h-5 w-5" />,
        description: "Solutions bancaires et de paiement pour les entreprises",
        links: [
            { name: "Conseils Fintech & Banque", href: "/services/fintech-banking-guidance", description: "Conseils sur Stripe, Wise, Revolut et les services bancaires britanniques" },
        ],
    },
    {
        title: "Ressources & Blog",
        icon: <FaNewspaper className="h-5 w-5" />,
        description: "Guides, articles & informations utiles",
        links: [
            { name: "Guides & Ressources", href: "/resources/guides", description: "Guides approfondis pour la création de sociétés au Royaume-Uni" },
            { name: "Évaluation de la Préparation Bancaire", href: "/resources/uk-business-banking-readiness-assessment", description: "Évaluez la préparation bancaire de votre société" },
            { name: "Blog", href: "/blog", description: "Derniers articles et guides sur la création de sociétés au Royaume-Uni" },
            { name: "Guide de Création de Société 2026", href: "/blog/company-formation-guide-2026", description: "Guide complet pour la création d'une société britannique" },
            { name: "Guide Pratique de Création 2026", href: "/blog/uk-company-formation-guide-2026", description: "Marche à suivre étape par étape pour créer une société au Royaume-Uni" },
            { name: "Guide de l'Adresse Commerciale à Londres", href: "/blog/uk-company-formation-london-business-address", description: "Le guide complet pour les entrepreneurs internationaux" },
            { name: "Guide Fintech & Banque", href: "/blog/fintech-banking-guide", description: "Guide des plateformes bancaires et fintech britanniques" },
            { name: "Démarrer une Entreprise au Royaume-Uni", href: "/blog/starting-a-business-uk", description: "Étapes essentielles pour lancer votre entreprise au Royaume-Uni" },
            { name: "Créer une Société au Royaume-Uni depuis l'Inde", href: "/blog/how-to-start-a-uk-company-from-india", description: "Entrepreneurs indiens — créez une société britannique" },
            { name: "Créer une Société au Royaume-Uni depuis le Pakistan", href: "/blog/how-to-start-a-uk-company-from-pakistan", description: "Entrepreneurs pakistanais — créez une société britannique" },
            { name: "Créer une Société au Royaume-Uni depuis les EAU", href: "/blog/how-to-start-a-uk-company-from-uae", description: "Entrepreneurs des EAU — créez une société britannique" },
            { name: "Créer une Société au Royaume-Uni depuis la France", href: "/blog/how-to-start-a-uk-company-from-france", description: "Entrepreneurs français — créez une société britannique" },
            { name: "Créer une Société au Royaume-Uni depuis l'Algérie", href: "/blog/how-to-start-a-uk-company-from-algeria", description: "Entrepreneurs algériens — créez une société britannique" },
        ],
    },
    {
        title: "Général",
        icon: <FaHome className="h-5 w-5" />,
        description: "Pages principales du site",
        links: [
            { name: "Accueil", href: "/", description: "Seven Oak Prestige — Services de Création de Société au Royaume-Uni" },
            { name: "Contact", href: "/contact", description: "Contactez notre équipe" },
            { name: "Consultation", href: "/consultation", description: "Réservez une consultation gratuite avec notre équipe" },
        ],
    },
    {
        title: "Mentions Légales & Politiques",
        icon: <FaGavel className="h-5 w-5" />,
        description: "Conditions, politiques de confidentialité et de remboursement",
        links: [
            { name: "Conditions Générales", href: "/terms", description: "Nos conditions d'utilisation" },
            { name: "Politique de Confidentialité", href: "/privacy", description: "Comment nous gérons vos données" },
            { name: "Politique de Remboursement", href: "/refund", description: "Notre politique de remboursement et d'annulation" },
        ],
    },
];

export default function SitemapPage() {
    const totalPages = sitemapSections.reduce((sum, section) => sum + section.links.length, 0);

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative overflow-hidden px-4 pt-32 pb-16 sm:px-6 lg:px-8 sm:pt-40 lg:pt-44">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                        <FaMapSigns className="h-3.5 w-3.5 text-gold" />
                        <span className="text-sm font-medium text-gold">{totalPages} Pages Indexées</span>
                    </div>
                    <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Plan du <span className="bg-gradient-to-r from-gold via-[#f3d066] to-gold bg-clip-text text-transparent">Site</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        Parcourez notre annuaire complet de services, ressources et pages. Trouvez exactement ce que vous cherchez.
                    </p>
                </div>
            </section>

            {/* ── SITEMAP GRID ── */}
            <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {sitemapSections.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:border-gold/30 hover:bg-card/40 sm:p-8"
                            >
                                {/* Decorative glow */}
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-all duration-500 group-hover:bg-gold/10 pointer-events-none"></div>

                                {/* Section Header */}
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold">
                                        {section.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                                        <p className="text-xs text-muted-foreground">{section.description}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-gold/20 via-gold/10 to-transparent"></div>

                                {/* Links */}
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.href}
                                                className="group/link flex items-start gap-2 rounded-lg p-2 -mx-2 transition-all duration-300 hover:bg-gold/5"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/40 transition-colors group-hover/link:bg-gold"></span>
                                                <div>
                                                    <span className="text-sm font-medium text-foreground transition-colors group-hover/link:text-gold">
                                                        {link.name}
                                                    </span>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                                        {link.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Link Count */}
                                <div className="mt-4 pt-3 border-t border-border/20">
                                    <span className="text-xs text-muted-foreground">
                                        {section.links.length} {section.links.length === 1 ? 'page' : 'pages'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* XML Sitemap Reference */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-4 rounded-2xl border border-border/30 bg-card/25 px-8 py-5 backdrop-blur-md">
                            <div className="text-left">
                                <p className="text-sm font-medium text-foreground">Vous cherchez le Sitemap XML ?</p>
                                <p className="text-xs text-muted-foreground">Pour les moteurs de recherche et les robots d'indexation</p>
                            </div>
                            <Link
                                href="/sitemap.xml"
                                className="rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition-all duration-300 hover:bg-gold/20"
                            >
                                sitemap.xml
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
