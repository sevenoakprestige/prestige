"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaCheck, FaBuilding, FaMapMarkerAlt, FaUserTie, FaCity, FaShieldAlt, FaUniversity, FaBolt, FaGlobe, FaHandshake, FaStar } from "react-icons/fa";
import Footer from "@/components/Footer";

const services = [
    {
        icon: <FaBuilding className="h-7 w-7" />,
        title: "Création de Société au Royaume-Uni",
        description: "Création rapide et conforme avec Companies House pour les résidents et non-résidents britanniques.",
        href: "/services/uk-company-formation-for-non-residents",
    },
    {
        icon: <FaMapMarkerAlt className="h-7 w-7" />,
        title: "Adresse de Siège Social",
        description: "Une adresse professionnelle au 124 City Road, Londres — entièrement conforme aux exigences de Companies House.",
        href: "/services/registered-office-service",
    },
    {
        icon: <FaUserTie className="h-7 w-7" />,
        title: "Adresse de Service du Directeur",
        description: "Protégez votre adresse personnelle avec une adresse de service professionnelle pour les dépôts à Companies House.",
        href: "/services/director-service-address",
    },
    {
        icon: <FaCity className="h-7 w-7" />,
        title: "Adresse Commerciale Virtuelle",
        description: "Une adresse commerciale prestigieuse à Londres pour votre correspondance, donnant à votre société une présence professionnelle au Royaume-Uni.",
        href: "/services/virtual-business-address",
    },
    {
        icon: <FaShieldAlt className="h-7 w-7" />,
        title: "Support à la Conformité",
        description: "Conseils d'experts sur la conformité Companies House, la vérification d'identité et les exigences réglementaires.",
        href: "/services/companies-house-verification",
    },
    {
        icon: <FaUniversity className="h-7 w-7" />,
        title: "Assistance Bancaire",
        description: "Un soutien pratique pour préparer vos demandes de comptes bancaires professionnels britanniques et comptes fintech.",
        href: "/services/fintech-banking-guidance",
    },
];

const approach = [
    "Conseil professionnel",
    "Assistance réactive",
    "Processus axés sur la conformité",
    "Communication claire",
    "Préparation à long terme de l'entreprise",
];

const whyChoose = [
    {
        icon: <FaBolt className="h-7 w-7" />,
        title: "Assistance Rapide à la Création",
        description: "Un soutien efficace conçu pour faire enregistrer votre société britannique rapidement et professionnellement.",
    },
    {
        icon: <FaGlobe className="h-7 w-7" />,
        title: "Expertise Internationale",
        description: "Nous travaillons avec des entrepreneurs de nombreux pays pour établir des sociétés britanniques et asseoir leur crédibilité internationale.",
    },
    {
        icon: <FaBuilding className="h-7 w-7" />,
        title: "Présence Professionnelle au R-U",
        description: "Des adresses commerciales londoniennes de prestige qui donnent à votre entreprise la crédibilité qu'elle mérite.",
    },
    {
        icon: <FaShieldAlt className="h-7 w-7" />,
        title: "Axé sur la Conformité",
        description: "Chaque service que nous offrons est conçu autour de la conformité réglementaire britannique, garantissant que votre entreprise est structurée correctement dès le premier jour.",
    },
    {
        icon: <FaUniversity className="h-7 w-7" />,
        title: "Assistance Bancaire",
        description: "Un soutien pratique pour vous aider à vous préparer aux demandes de services bancaires et fintech au Royaume-Uni.",
    },
    {
        icon: <FaHandshake className="h-7 w-7" />,
        title: "Assistance Client Réactive",
        description: "Une approche axée sur le client avec une communication claire et rapide à chaque étape du parcours de votre entreprise.",
    },
];

export default function AboutPageFr() {
    return (
        <>
            {/* ── SECTION 1: HERO BANNER ── */}
            <section className="section-dark relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/assets/aboutus/aboutussec.webp"
                        alt="Premium London skyline — Seven Oak Prestige LTD UK Company Formation"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={95}
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/65" />
                    {/* Gradient fade at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Animated gold orbs */}
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="hero-circle-1 absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
                    <div className="hero-circle-2 absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-2 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                        </span>
                        <span className="text-sm font-medium text-gold tracking-wide">
                            Seven Oak Prestige LTD
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Bâtir des Fondations Professionnelles{" "}
                        <span className="text-gold">
                            pour les Entreprises au R-U
                        </span>{" "}
                        pour les Entrepreneurs du Monde Entier
                    </h1>

                    {/* Subheadline */}
                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80 sm:text-xl md:text-2xl">
                        Nous accompagnons les entrepreneurs avec la création de sociétés au Royaume-Uni, des services de siège social, des conseils en conformité et une assistance bancaire.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold"
                        >
                            <span>Contactez-nous</span>
                        </Link>
                        <Link
                            href="#about-content"
                            className="btn-ghost"
                        >
                            En savoir plus
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm sm:gap-10">
                        {["Société Enregistrée au R-U", "Conforme à Companies House", "Clients Internationaux Accompagnés"].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-foreground/70">
                                <FaCheck className="h-4 w-4 text-gold" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: ABOUT SEVEN OAK PRESTIGE ── */}
            <section id="about-content" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                {/* Background decoration */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left: Text Content */}
                        <div>
                            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                                À PROPOS DE NOUS
                            </span>
                            <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                                À propos de Seven Oak{" "}
                                <span className="text-gold">
                                    Prestige LTD
                                </span>
                            </h2>
                            <div className="mx-auto mb-8 h-px w-24 rule-gold" />

                            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                <p>
                                    Seven Oak Prestige LTD aide les résidents britanniques et les entrepreneurs internationaux dans la création de sociétés au Royaume-Uni, les services de siège social, les adresses de service pour directeurs, les adresses commerciales virtuelles, les conseils en matière de conformité et l'assistance bancaire.
                                </p>
                                <p>
                                    Nous comprenons qu'établir une entreprise ne se limite pas à la simple création d'une société. Il s'agit de poser les bonnes fondations pour la croissance future, la crédibilité et de nouvelles opportunités.
                                </p>
                                <p>
                                    Que vous lanciez votre premier projet, que vous vous développiez à l'international ou que vous établissiez une présence au Royaume-Uni, notre objectif est de rendre ce processus clair, professionnel et efficace.
                                </p>
                            </div>

                            {/* Our Approach */}
                            <div className="mt-10">
                                <h3 className="mb-5 text-xl font-bold text-foreground">Notre Approche</h3>
                                <p className="mb-5 text-muted-foreground leading-relaxed">
                                    Chez Seven Oak Prestige LTD, nous nous concentrons sur l'accompagnement des entrepreneurs avec confiance à travers ces étapes importantes. Notre approche repose sur :
                                </p>
                                <div className="space-y-3">
                                    {approach.map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                                                <FaCheck className="h-3 w-3" />
                                            </div>
                                            <span className="text-base font-medium text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-6 text-muted-foreground italic leading-relaxed">
                                    Nous croyons que les entreprises solides se construisent sur des fondations solides.
                                </p>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-2xl shadow-gold/10">
                                <Image
                                    src="/assets/aboutus/aboutus_section2.webp"
                                    alt="Professional UK business environment — Seven Oak Prestige LTD"
                                    width={700}
                                    height={500}
                                    className="object-cover w-full h-auto"
                                    quality={90}
                                />
                                {/* Gold overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent pointer-events-none" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
                            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gold/10 blur-2xl pointer-events-none" />

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 left-6 rounded-2xl border border-gold/30 bg-card/90 px-5 py-4 shadow-xl backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold">
                                        🇬🇧
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gold tracking-wider uppercase">Enregistré en</p>
                                        <p className="text-sm font-semibold text-foreground">Angleterre &amp; Pays de Galles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: SERVICES OVERVIEW ── */}
            <section className="section-parchment border-y border-border relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            CE QUE NOUS FAISONS
                        </span>
                        <h2 className="font-display mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Services Que Nous Offrons
                        </h2>
                        <div className="mx-auto mb-5 h-px w-24 rule-gold" />
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                            En associant les services de création de société à un soutien commercial pratique, nous aidons les entrepreneurs à établir une présence professionnelle au Royaume-Uni dès le début.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/45 hover:bg-card/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] block"
                            >
                                {/* Background glow on hover */}
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                                </div>
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none" />

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50">
                                    {service.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-foreground">{service.title}</h3>
                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold transition-all group-hover:gap-2">
                                    En savoir plus <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: SUPPORTING INTERNATIONAL ENTREPRENEURS ── */}
            <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left: Globe visual */}
                        <div className="relative order-2 lg:order-1 h-full w-full">
                            <div className="relative h-full w-full min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-3xl border border-gold/20 shadow-2xl shadow-gold/10">
                                <Image
                                    src="/assets/aboutus/gobal_support.webp"
                                    alt="Global Reach and Support"
                                    fill
                                    className="object-cover object-center"
                                    quality={95}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent pointer-events-none" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
                        </div>

                        {/* Right: Text */}
                        <div className="order-1 lg:order-2">
                            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                                SOUTIEN INTERNATIONAL
                            </span>
                            <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                                Accompagner les{" "}
                                <span className="text-gold">
                                    Entrepreneurs Internationaux
                                </span>
                            </h2>
                            <div className="mb-8 h-px w-24 rule-gold" />

                            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                <p className="text-xl font-medium text-foreground">
                                    Connecter les entrepreneurs du monde entier aux opportunités du Royaume-Uni.
                                </p>
                                <p>
                                    Le Royaume-Uni reste l'un des environnements commerciaux les plus reconnus au monde. Nous travaillons avec des entrepreneurs de nombreux pays qui souhaitent créer une société britannique et asseoir leur crédibilité sur les marchés internationaux.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold">
                                            <FaGlobe className="h-5 w-5" />
                                        </div>
                                        <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Entrepreneurs<br />Mondiaux</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold">
                                            <FaBuilding className="h-5 w-5" />
                                        </div>
                                        <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Expertise<br />au R-U</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold">
                                            <FaShieldAlt className="h-5 w-5" />
                                        </div>
                                        <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Confiance &<br />Conformité</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold">
                                            <FaHandshake className="h-5 w-5" />
                                        </div>
                                        <span className="font-semibold text-foreground text-sm uppercase tracking-wide">Partenariat à<br />Long Terme</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link
                                    href="https://wa.me/447447488755"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-gold"
                                >
                                    <span>S'inscrire Maintenant</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: WHY CHOOSE SEVEN OAK PRESTIGE ── */}
            <section className="section-parchment border-y border-border relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            POURQUOI NOUS CHOISIR
                        </span>
                        <h2 className="font-display mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                            Pourquoi Choisir Seven Oak{" "}
                            <span className="text-gold">
                                Prestige LTD ?
                            </span>
                        </h2>
                        <div className="mx-auto mb-5 h-px w-24 rule-gold" />
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                            Notre objectif n'est pas seulement d'aider à créer une société, mais d'accompagner les entrepreneurs dans la création d'une structure commerciale préparée pour les opportunités futures.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {whyChoose.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/45 hover:bg-card/40 hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)]"
                            >
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                                </div>
                                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20 pointer-events-none" />

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent text-gold shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold/50">
                                    {item.icon}
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: FINAL CTA BANNER ── */}
            <section className="section-dark relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                {/* Background: London skyline */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/assets/seven_oak_prestise.webp"
                        alt="Premium London skyline at night — Seven Oak Prestige LTD"
                        fill
                        className="object-cover object-center"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
                </div>

                {/* Gold orbs */}
                <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                    <div className="hero-circle-1 absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
                    <div className="hero-circle-2 absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
                </div>

                <div className="mx-auto max-w-4xl text-center">
                    {/* Section label */}
                    <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-5 block">
                        COMMENCEZ DÈS AUJOURD'HUI
                    </span>

                    {/* Main headline */}
                    <h2 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Prêt à Établir Votre{" "}
                        <span className="text-gold">
                            Entreprise au Royaume-Uni ?
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/75 sm:text-xl">
                        Création de Société au Royaume-Uni &bull; Adresses Commerciales &bull; Conseils en Conformité &bull; Assistance Bancaire
                    </p>

                    {/* WhatsApp CTA */}
                    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold"
                        >
                            <span>Contactez-nous</span>
                        </Link>
                    </div>

                    <p className="mt-6 text-gold/80 text-base font-medium tracking-wide">
                        +44 7447 488755
                    </p>

                    {/* Trustpilot nudge */}
                    <div className="mt-12 inline-flex flex-col items-center gap-4 rounded-2xl border border-[#00B67A]/20 bg-gradient-to-b from-white/10 to-transparent px-10 py-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div key={star} className="flex h-8 w-8 items-center justify-center bg-[#00B67A]">
                                    <FaStar className="h-5 w-5 text-white" />
                                </div>
                            ))}
                        </div>
                        <p className="text-foreground font-medium text-lg tracking-wide">Excellent</p>
                        <p className="text-foreground/70 text-sm max-w-sm text-center">
                            Nous apprécions vos commentaires. Donnez votre avis sur <strong>Trustpilot</strong>, cela prend moins d'une minute.
                        </p>
                        <Link
                            href="https://www.trustpilot.com/review/sevenoakprestige.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 group flex items-center gap-2 rounded-full border border-[#00B67A]/50 bg-[#00B67A]/10 px-6 py-2 text-[#00B67A] font-semibold text-sm transition-all hover:bg-[#00B67A]/20 hover:border-[#00B67A]"
                        >
                            <span>Laisser un avis</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
