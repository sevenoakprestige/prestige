"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaCheck, FaPlus, FaMinus, FaGlobeAmericas, FaShieldAlt, FaBuilding, FaUserTie, FaBolt, FaPassport, FaFileAlt, FaClipboardCheck, FaEnvelopeOpenText, FaCreditCard, FaLock } from "react-icons/fa";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const countries = [
    { flag: "🇦🇪", name: "Émirats Arabes Unis" },
    { flag: "🇸🇦", name: "Arabie Saoudite" },
    { flag: "🇶🇦", name: "Qatar" },
    { flag: "🇴🇲", name: "Oman" },
    { flag: "🇰🇼", name: "Koweït" },
    { flag: "🇳🇬", name: "Nigeria" },
    { flag: "🇬🇭", name: "Ghana" },
    { flag: "🇿🇦", name: "Afrique du Sud" },
    { flag: "🇰🇪", name: "Kenya" },
    { flag: "🇮🇳", name: "Inde" },
    { flag: "🇵🇰", name: "Pakistan" },
    { flag: "🌏", name: "Asie" },
    { flag: "🇪🇺", name: "Europe" },
    { flag: "🌎", name: "Amérique du Nord" },
];

const whyReasons = [
    {
        icon: <FaShieldAlt className="h-7 w-7" />,
        title: "Réputation Commerciale Professionnelle",
        description: "Une société britannique peut renforcer votre crédibilité lors de vos échanges avec des clients, fournisseurs et partenaires commerciaux internationaux.",
    },
    {
        icon: <FaGlobeAmericas className="h-7 w-7" />,
        title: "Présence Commerciale Mondiale",
        description: "De nombreux entrepreneurs utilisent les sociétés britanniques pour soutenir leur expansion internationale et établir une présence commerciale reconnue.",
    },
    {
        icon: <FaBuilding className="h-7 w-7" />,
        title: "Reconnaissance Internationale",
        description: "Les sociétés britanniques sont largement reconnues sur les marchés mondiaux et dans tous les secteurs d'activité.",
    },
    {
        icon: <FaUserTie className="h-7 w-7" />,
        title: "Structure de Propriété Flexible",
        description: "Un non-résident peut généralement détenir 100 % des actions de la société et agir en tant que directeur unique.",
    },
    {
        icon: <FaBolt className="h-7 w-7" />,
        title: "Processus de Création Efficace",
        description: "Le Royaume-Uni offre l'un des systèmes d'enregistrement de sociétés les plus efficaces au monde.",
    },
];

const steps = [
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        title: "Choisissez votre formule",
        description: "Sélectionnez la formule qui correspond le mieux à vos exigences professionnelles.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: "Complétez votre commande",
        description: "Soumettez votre commande en ligne en toute sécurité.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Soumettez vos informations",
        description: "Fournissez les informations sur la société et les documents justificatifs.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Vérification et conformité",
        description: "La documentation est examinée pour s'assurer que toutes les informations requises sont complètes.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: "Immatriculation de la société",
        description: "L'immatriculation est préparée et soumise.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Recevez vos documents",
        description: "Les documents de la société sont livrés numériquement une fois l'enregistrement terminé.",
    },
];

const faqItems = [
    { question: "Puis-je enregistrer une société britannique depuis l'étranger ?", answer: "Oui. Le Royaume-Uni permet aux non-résidents de pays du monde entier d'enregistrer et de posséder des sociétés Limited britanniques. L'ensemble du processus peut être complété à distance sans qu'il soit nécessaire de se rendre au Royaume-Uni." },
    { question: "Dois-je me rendre au Royaume-Uni ?", answer: "Non. Le processus de création de société s'effectue entièrement en ligne. Il n'est exigé à aucun moment de l'immatriculation de se rendre au Royaume-Uni." },
    { question: "Puis-je posséder 100 % de la société ?", answer: "Oui. Les non-résidents peuvent détenir 100 % des actions d'une société Limited britannique. Il n'y a aucune restriction sur la propriété étrangère." },
    { question: "Puis-je être le seul directeur ?", answer: "Oui. Une seule personne physique peut agir à la fois comme directeur unique et actionnaire unique d'une société Limited britannique." },
    { question: "Ai-je besoin d'un visa britannique ?", answer: "Non. La création de société ne nécessite pas de visa britannique. L'enregistrement d'une société britannique est une activité commerciale et ne nécessite pas d'autorisation d'immigration." },
    { question: "Ai-je besoin d'une adresse résidentielle au Royaume-Uni ?", answer: "Pas nécessairement. Des services d'adresse professionnels sont disponibles pour fournir une adresse de siège social au Royaume-Uni, une adresse de service pour les directeurs et une adresse commerciale virtuelle pour les propriétaires de sociétés non-résidents." },
    { question: "Combien de temps prend l'immatriculation ?", answer: "Généralement de 24 à 48 heures une fois les informations requises et les exigences de vérification remplies. Les délais de traitement peuvent varier en fonction des circonstances individuelles." },
    { question: "Vais-je recevoir les documents de la société ?", answer: "Oui. Les documents d'immatriculation numériques sont fournis lors de l'enregistrement réussi. Ceux-ci incluent généralement un certificat d'incorporation, les statuts (Memorandum and Articles of Association) et le certificat d'actions." },
    { question: "Puis-je utiliser une société britannique pour des affaires internationales ?", answer: "De nombreux entrepreneurs utilisent des sociétés britanniques pour des activités commerciales internationales, notamment le conseil, le commerce électronique, les services technologiques, le commerce et les agences numériques." },
    { question: "Les non-résidents peuvent-ils être actionnaires ?", answer: "Oui. Les non-résidents peuvent être actionnaires d'une société Limited britannique. Il n'y a aucune exigence de nationalité ou de résidence pour les actionnaires." },
    { question: "Puis-je gérer ma société à distance ?", answer: "Oui. De nombreux propriétaires d'entreprises internationales gèrent avec succès leurs sociétés britanniques à distance depuis leur pays d'origine." },
    { question: "Le processus est-il complété en ligne ?", answer: "Oui. L'ensemble du processus de création de société, de la soumission des informations à la réception des documents, est réalisé en ligne." },
    { question: "Quels documents sont requis ?", answer: "Généralement un passeport en cours de validité et un justificatif de domicile, ainsi que les détails de la société proposée, y compris les informations sur les directeurs et les actionnaires. Des exigences supplémentaires de conformité peuvent s'appliquer en fonction des circonstances spécifiques." },
    { question: "Puis-je modifier les détails de la société plus tard ?", answer: "Certains détails de la société peuvent être mis à jour conformément à la réglementation en vigueur. Cela inclut les modifications du nom de la société, de l'adresse du siège social, des détails du directeur et de la structure des actions." },
    { question: "Aidez-vous les entrepreneurs internationaux ?", answer: "Oui. Soutenir les entrepreneurs internationaux est l'un de nos principaux domaines d'expertise. Nous avons l'expérience d'accompagner des clients de nombreux pays du monde entier." },
];

export default function UKCompanyFormationForNonResidentsFR() {
    const [openFaqItems, setOpenFaqItems] = useState<Set<number>>(new Set());

    const toggleFaq = (index: number) => {
        const newOpen = new Set(openFaqItems);
        if (newOpen.has(index)) {
            newOpen.delete(index);
        } else {
            newOpen.add(index);
        }
        setOpenFaqItems(newOpen);
    };

    // FAQPage JSON-LD for rich results
    const faqPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <>
            {/* FAQPage JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
            />
            {/* ── HERO SECTION ── */}
            <section className="section-dark relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/services/uk_company_formation.webp" alt="UK Company Formation for Non-Residents — Seven Oak Prestige" fill className="object-cover object-center" priority quality={85} />
                    {/* Gradient overlay to make left text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-2xl text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
                            </span>
                            <span className="text-sm font-medium text-gold">
                                Services de Création de Société au Royaume-Uni
                            </span>
                        </div>

                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            CRÉATION DE SOCIÉTÉ AU ROYAUME-UNI
                        </span>
                        <div className="mb-6 h-px w-24 rule-gold" />

                        <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            Création de Société au Royaume-Uni pour {" "}
                            <span className="text-gold">
                                Non-Résidents
                            </span>
                        </h1>

                        <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl font-light">
                            Créez une société britannique depuis n'importe où dans le monde
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="btn-ghost">
                                Nous Contacter
                            </Link>
                            <Link href="/fr/#pricing" className="btn-gold">
                                Voir les Formules
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-20 w-full border-t border-gold/20 bg-background/40 backdrop-blur-md pt-8 pb-8 hidden lg:block">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-3 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaBolt className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">CONFIGURATION EN 24H</h3>
                                <p className="text-xs text-muted-foreground">Processus d'immatriculation rapide et efficace</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-gold/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaGlobeAmericas className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">100% À DISTANCE</h3>
                                <p className="text-xs text-muted-foreground">Enregistrez votre société depuis n'importe où dans le monde</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/5 flex-shrink-0">
                                <FaPassport className="h-5 w-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">AUCUN VISA UK REQUIS</h3>
                                <p className="text-xs text-muted-foreground">Ouvert aux non-résidents du monde entier</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Bottom Bar (Scrollable) */}
                <div className="relative z-10 mt-12 w-full border-t border-gold/20 bg-background/40 backdrop-blur-md py-6 lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    <div className="flex gap-6 px-4 w-max">
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaBolt className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">CONFIGURATION EN 24H</h3>
                                <p className="text-xs text-muted-foreground">Processus d'immatriculation rapide et efficace</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaGlobeAmericas className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">100% À DISTANCE</h3>
                                <p className="text-xs text-muted-foreground">Enregistrez votre société depuis n'importe où dans le monde</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaPassport className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">AUCUN VISA UK REQUIS</h3>
                                <p className="text-xs text-muted-foreground">Ouvert aux non-résidents du monde entier</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CAN A NON-RESIDENT OPEN A UK COMPANY? ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            ÉLIGIBILITÉ
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Un Non-Résident Peut-Il Ouvrir une Société au Royaume-Uni ?
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 sm:p-10">
                        {/* Corner accent */}
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>

                        <p className="text-3xl font-bold text-gold mb-6">Oui.</p>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>Le Royaume-Uni autorise les non-résidents à posséder et à exploiter une société Limited britannique.</p>
                            <p>Vous n'avez pas besoin d'être citoyen britannique ou résident au Royaume-Uni pour enregistrer une société.</p>
                            <p>Chaque année, des entrepreneurs de pays du monde entier choisissent le Royaume-Uni comme base pour leurs activités commerciales internationales.</p>
                            <p>Le Royaume-Uni reste l'une des juridictions commerciales les plus reconnues et respectées au monde grâce à son cadre juridique transparent, sa réputation internationale et son processus d'immatriculation simple.</p>
                            <p>De nombreux entrepreneurs étrangers utilisent des sociétés britanniques pour des activités de conseil, des opérations de commerce électronique, des services technologiques, des activités commerciales internationales, des agences numériques et divers modèles commerciaux en ligne.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO CAN REGISTER ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            PORTÉE MONDIALE
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Qui Peut Enregistrer une Société au Royaume-Uni ?
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <p className="text-center text-base text-muted-foreground mb-10 max-w-3xl mx-auto sm:text-lg">
                        Une société Limited britannique peut généralement être enregistrée par des entrepreneurs et des chefs d'entreprise de la plupart des pays du monde. Cela inclut :
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/25 px-4 py-4 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-card/40 hover:shadow-[0_10px_25px_rgba(212,175,55,0.08)]"
                            >
                                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>
                                <span className="text-2xl mb-2 block">{country.flag}</span>
                                <span className="text-sm font-medium text-foreground">{country.name}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-muted-foreground text-sm sm:text-base">
                        De nombreux fondateurs internationaux choisissent le Royaume-Uni pour établir une structure commerciale professionnelle et internationalement reconnue.
                    </p>
                </div>
            </section>

            {/* ── WHY INTERNATIONAL ENTREPRENEURS CHOOSE A UK COMPANY ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            AVANTAGES CLÉS
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Pourquoi les Entrepreneurs Internationaux Choisissent une Société au Royaume-Uni
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {whyReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-card/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] sm:p-8"
                            >
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">
                                        {reason.icon}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">
                                            {reason.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 group-hover:blur-[40px] pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DOCUMENTS REQUIRED ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            CE DONT VOUS AVEZ BESOIN
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Documents Requis
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: <FaPassport className="h-6 w-6" />, title: "Passeport en Cours de Validité", description: "Une copie claire d'un passeport valide pour l'identification." },
                            { icon: <FaFileAlt className="h-6 w-6" />, title: "Justificatif de Domicile", description: "Facture de services publics, relevé bancaire ou correspondance gouvernementale." },
                            { icon: <FaClipboardCheck className="h-6 w-6" />, title: "Détails de la Société", description: "Nom de la société proposée et description de l'activité commerciale." },
                            { icon: <FaUserTie className="h-6 w-6" />, title: "Informations sur le Directeur", description: "Nom complet, date de naissance, nationalité et adresse de service." },
                            { icon: <FaEnvelopeOpenText className="h-6 w-6" />, title: "Informations sur les Actionnaires", description: "Détails des actionnaires et répartition des actions." },
                        ].map((doc, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-card/40"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold mb-4 transition-transform duration-500 group-hover:scale-110">
                                    {doc.icon}
                                </div>
                                <h3 className="mb-1 text-base font-bold text-foreground">{doc.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-center text-sm text-muted-foreground italic">
                        Des exigences supplémentaires en matière de conformité et de vérification peuvent s'appliquer en fonction des circonstances spécifiques.
                    </p>
                </div>
            </section>

            {/* ── PACKAGE OVERVIEW ── */}
            <Pricing />

            {/* ── COMPANY FORMATION PROCESS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            ÉTAPE PAR ÉTAPE
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Processus de Création de Société
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] text-left"
                            >
                                {/* Giant Faint Number */}
                                <div className="absolute right-4 top-4 select-none font-serif text-[100px] font-black leading-none text-foreground/[0.03] transition-all duration-500 group-hover:text-gold/[0.05]">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold shadow-sm transition-transform duration-500 group-hover:scale-110">
                                    {step.icon}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-3 inline-flex items-center gap-2">
                                        <span className="h-[1px] w-4 bg-gold/60"></span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                                            Étape 0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 font-serif text-lg font-bold leading-tight text-foreground sm:text-xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-foreground/70">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BANKING & COMPLIANCE ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">PRÊT POUR LA BANQUE</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Soutien Bancaire & Conformité</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>Nous fournissons des conseils et une assistance pour l'onboarding fintech et la préparation à la vérification d'entreprise. Cela comprend la préparation pour des plateformes telles que Stripe, Wise, Revolut Business et d'autres prestataires de paiement compatibles avec le Royaume-Uni.</p>
                            <p>Notre équipe vous aide à vous assurer que la structure de votre société et votre documentation répondent aux exigences de conformité des plateformes financières modernes, vous offrant ainsi les meilleures chances d'un processus d'approbation fluide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SEVEN OAK PRESTIGE ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            POURQUOI NOUS
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Pourquoi Choisir Seven Oak Prestige
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none"></div>

                        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>
                                Seven Oak Prestige est spécialisé dans l'accompagnement des résidents britanniques et des entrepreneurs internationaux.
                            </p>
                            <p>
                                Notre objectif est de fournir une expérience de création de société professionnelle, efficace et simple, soutenue par un service client réactif et des conseils pratiques tout au long du processus d'immatriculation.
                            </p>
                            <p>
                                Des clients de nombreux pays font confiance à Seven Oak Prestige pour les aider à établir leur présence commerciale au Royaume-Uni.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-16 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            QUESTIONS FRÉQUENTES
                        </span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Foire Aux Questions
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>

                    <div className="space-y-3">
                        {faqItems.map((item, index) => {
                            const isOpen = openFaqItems.has(index);
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 backdrop-blur-md transition-all duration-500 hover:border-gold/45"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="faq-question flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-gold/5 sm:p-5"
                                    >
                                        <span className="flex-1 font-semibold">
                                            {item.question}
                                        </span>
                                        <span className="flex-shrink-0 text-gold">
                                            {isOpen ? (
                                                <FaMinus className="h-4 w-4" />
                                            ) : (
                                                <FaPlus className="h-4 w-4" />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`faq-answer overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                    >
                                        <div className="border-t border-border/40 p-4 sm:p-5">
                                            <p className="leading-relaxed">{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SEO INTERNAL LINKS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">SERVICES LIÉS</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Découvrez Nos Autres Services
                        </h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {[
                            { title: "Adresse Commerciale Virtuelle", href: "/fr/services/virtual-business-address", description: "Adresse commerciale prestigieuse à Londres et réexpédition du courrier." },
                            { title: "Immatriculation TVA", href: "/fr/services/vat-registration-uk", description: "Enregistrement à la TVA britannique avec un soutien à la conformité HMRC." },
                            { title: "Service de Siège Social", href: "/fr/services/registered-office-service", description: "Adresse professionnelle à Londres pour votre société." },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:bg-card/40"
                            >
                                <h3 className="mb-2 text-base font-bold text-gold">{link.title}</h3>
                                <p className="text-sm text-muted-foreground">{link.description}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold">
                                    En savoir plus →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-display mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                        Prêt à Créer Votre Société au Royaume-Uni ?
                    </h2>

                    <p className="mb-4 text-lg font-light sm:text-xl lg:text-2xl text-foreground/80">
                        Rejoignez les entrepreneurs du monde entier qui choisissent Seven Oak Prestige pour leurs besoins de création de société au Royaume-Uni.
                    </p>
                    <p className="mb-10 text-base font-light sm:text-lg text-foreground/80">
                        Démarrez votre société britannique dès aujourd'hui avec un soutien professionnel et un processus d'immatriculation simplifié.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            className="btn-gold"
                        >
                            <FaWhatsapp className="h-5 w-5" />
                            <span>Commencer Aujourd'hui</span>
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-foreground/70">
                        WhatsApp : <span className="font-semibold text-gold">+44 7447 488755</span>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
