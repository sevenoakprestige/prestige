"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaCheck, FaPlus, FaMinus, FaGlobeAmericas, FaShieldAlt, FaBuilding, FaUserTie, FaBolt, FaPassport, FaFileAlt, FaClipboardCheck, FaEnvelopeOpenText, FaCreditCard, FaLock } from "react-icons/fa";
import Footer from "@/components/Footer";

const countries = [
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇸🇦", name: "Saudi Arabia" },
    { flag: "🇶🇦", name: "Qatar" },
    { flag: "🇴🇲", name: "Oman" },
    { flag: "🇰🇼", name: "Kuwait" },
    { flag: "🇳🇬", name: "Nigeria" },
    { flag: "🇬🇭", name: "Ghana" },
    { flag: "🇿🇦", name: "South Africa" },
    { flag: "🇰🇪", name: "Kenya" },
    { flag: "🇮🇳", name: "India" },
    { flag: "🇵🇰", name: "Pakistan" },
    { flag: "🌏", name: "Asia" },
    { flag: "🇪🇺", name: "Europe" },
    { flag: "🌎", name: "North America" },
];

const whyReasons = [
    {
        icon: <FaShieldAlt className="h-7 w-7" />,
        title: "Professional Business Reputation",
        description: "A UK company can strengthen credibility when dealing with international clients, suppliers, and business partners.",
    },
    {
        icon: <FaGlobeAmericas className="h-7 w-7" />,
        title: "Global Business Presence",
        description: "Many entrepreneurs use UK companies to support international expansion and establish a recognised business presence.",
    },
    {
        icon: <FaBuilding className="h-7 w-7" />,
        title: "International Recognition",
        description: "UK companies are widely recognised across global markets and business sectors.",
    },
    {
        icon: <FaUserTie className="h-7 w-7" />,
        title: "Flexible Ownership Structure",
        description: "A non-resident can generally own 100% of the company shares and act as the sole director.",
    },
    {
        icon: <FaBolt className="h-7 w-7" />,
        title: "Efficient Incorporation Process",
        description: "The UK offers one of the most efficient company registration systems in the world.",
    },
];

const packages = [
    {
        name: "Starter",
        features: [
            "UK Company Registration",
            "Certificate of Incorporation",
            "Memorandum and Articles",
            "Share Certificate",
            "Digital Company Documents",
        ],
        featured: false,
    },
    {
        name: "Prestige",
        features: [
            "UK Company Registration",
            "Registered Office Address",
            "Director Service Address",
            "Digital Company Documents",
            "Ongoing Support",
        ],
        featured: true,
    },
    {
        name: "Elite",
        features: [
            "UK Company Registration",
            "Registered Office Address",
            "Director Service Address",
            "Virtual Business Address",
            "Banking Assistance",
            "Premium Business Presence",
        ],
        featured: false,
    },
];

const steps = [
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        title: "Choose Your Package",
        description: "Select the package that best suits your business requirements.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: "Complete Your Order",
        description: "Securely submit your order online.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: "Submit Your Information",
        description: "Provide company information and supporting documentation.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Verification and Compliance Review",
        description: "Documentation is reviewed to ensure all required information is complete.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: "Company Registration",
        description: "The incorporation is prepared and submitted.",
    },
    {
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Receive Your Documents",
        description: "Company documents are delivered digitally once registration is completed.",
    },
];

const faqItems = [
    { question: "Can I register a UK company from abroad?", answer: "Yes. The United Kingdom allows non-residents from countries around the world to register and own UK Limited Companies. The entire process can be completed remotely without the need to visit the UK." },
    { question: "Do I need to travel to the UK?", answer: "No. The company formation process is completed entirely online. There is no requirement to travel to the UK at any stage of the incorporation." },
    { question: "Can I own 100% of the company?", answer: "Yes. Non-residents can own 100% of the shares in a UK Limited Company. There are no restrictions on foreign ownership." },
    { question: "Can I be the sole director?", answer: "Yes. A single individual can act as both the sole director and the sole shareholder of a UK Limited Company." },
    { question: "Do I need a UK visa?", answer: "No. Company formation does not require a UK visa. Registering a UK company is a corporate activity and does not require immigration permission." },
    { question: "Do I need a UK residential address?", answer: "Not necessarily. Professional address services are available to provide a UK registered office address, director service address, and virtual business address for non-resident company owners." },
    { question: "How long does incorporation take?", answer: "Typically 24–48 hours once required information and verification requirements are completed. Processing times may vary depending on individual circumstances." },
    { question: "Will I receive company documents?", answer: "Yes. Digital incorporation documents are provided upon successful registration. These typically include a Certificate of Incorporation, Memorandum and Articles of Association, and Share Certificate." },
    { question: "Can I use a UK company for international business?", answer: "Many entrepreneurs use UK companies for international business activities including consulting, e-commerce, technology services, trading, and digital agencies." },
    { question: "Can non-residents be shareholders?", answer: "Yes. Non-residents can be shareholders of a UK Limited Company. There are no nationality or residency requirements for shareholders." },
    { question: "Can I operate my company remotely?", answer: "Yes. Many international business owners successfully manage their UK companies remotely from their home country." },
    { question: "Is the process completed online?", answer: "Yes. The entire company formation process, from submission of information to receipt of documents, is completed online." },
    { question: "What documents are required?", answer: "Typically a valid passport and proof of residential address, together with proposed company details including director and shareholder information. Additional compliance requirements may apply depending on specific circumstances." },
    { question: "Can I change company details later?", answer: "Certain company details can be updated in accordance with applicable regulations. This includes changes to company name, registered office address, director details, and share structure." },
    { question: "Do you assist international entrepreneurs?", answer: "Yes. Supporting international entrepreneurs is one of our core areas of expertise. We have experience assisting clients from numerous countries worldwide." },
];

export default function UKCompanyFormationForNonResidents() {
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

    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20 hidden dark:block">
                    <Image src="/assets/services/uk_company_formation.webp" alt="UK Company Formation for Non-Residents — Seven Oak Prestige" fill className="object-cover object-center" priority quality={100} />
                    {/* Gradient overlay to make left text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-2xl text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                            </span>
                            <span className="hero-text text-sm font-medium">
                                Professional UK Company Formation Services
                            </span>
                        </div>

                        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            UK Company Formation for{" "}
                            <span className="bg-gradient-to-r from-[#d4af37] via-[#f3d066] to-[#d4af37] bg-clip-text text-transparent">
                                Non-Residents
                            </span>
                        </h1>
                        
                        <div className="h-[2px] w-12 bg-[#d4af37] mb-6"></div>

                        <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl font-light">
                            Start a UK Company from Anywhere in the World
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md border border-[#d4af37] bg-[#d4af37]/10 px-8 py-3 text-base font-medium text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/20 hover:shadow-lg hover:shadow-[#d4af37]/20 sm:text-lg backdrop-blur-sm">
                                <span>Get in Touch</span>
                            </Link>
                            <Link href="/#pricing" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 py-3 text-base font-bold text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/30 hover:scale-105 active:scale-95 sm:text-lg">
                                <span>View Packages</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 mt-20 w-full border-t border-[#d4af37]/20 bg-background/40 backdrop-blur-md pt-8 pb-8 hidden lg:block">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-3 px-4 sm:px-6 lg:px-8">
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaBolt className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">24-HOUR SETUP</h3>
                                <p className="text-xs text-muted-foreground">Fast and efficient incorporation process</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-r border-[#d4af37]/20 pr-4 last:border-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaGlobeAmericas className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">100% REMOTE</h3>
                                <p className="text-xs text-muted-foreground">Register your company from anywhere in the world</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 flex-shrink-0">
                                <FaPassport className="h-5 w-5 text-[#d4af37]" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">NO UK VISA REQUIRED</h3>
                                <p className="text-xs text-muted-foreground">Open to non-residents globally</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile Bottom Bar (Scrollable) */}
                <div className="relative z-10 mt-12 w-full border-t border-[#d4af37]/20 bg-background/40 backdrop-blur-md py-6 lg:hidden overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                    <div className="flex gap-6 px-4 w-max">
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaBolt className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">24-HOUR SETUP</h3>
                                <p className="text-xs text-muted-foreground">Fast and efficient incorporation process</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaGlobeAmericas className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">100% REMOTE</h3>
                                <p className="text-xs text-muted-foreground">Register your company from anywhere in the world</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 snap-center w-[250px]">
                            <FaPassport className="h-6 w-6 text-[#d4af37] flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">NO UK VISA REQUIRED</h3>
                                <p className="text-xs text-muted-foreground">Open to non-residents globally</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CAN A NON-RESIDENT OPEN A UK COMPANY? ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            ELIGIBILITY
                        </span>
                        <h2 className="hero-heading mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Can a Non-Resident Open a UK Company?
                        </h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 sm:p-10">
                        {/* Corner accent */}
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>

                        <p className="text-3xl font-bold text-[#d4af37] mb-6">Yes.</p>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>The United Kingdom allows non-residents to own and operate a UK Limited Company.</p>
                            <p>You do not need to be a UK citizen or UK resident to register a company.</p>
                            <p>Every year, entrepreneurs from countries around the world choose the United Kingdom as a base for international business activities.</p>
                            <p>The UK remains one of the most recognised and respected business jurisdictions globally due to its transparent legal framework, international reputation, and straightforward incorporation process.</p>
                            <p>Many overseas entrepreneurs use UK companies for consulting businesses, e-commerce operations, technology services, international trading activities, digital agencies, and various online business models.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO CAN REGISTER ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            GLOBAL REACH
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Who Can Register a UK Company?
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <p className="text-center text-base text-muted-foreground mb-10 max-w-3xl mx-auto sm:text-lg">
                        A UK Limited Company can generally be registered by entrepreneurs and business owners from most countries worldwide. This includes:
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl border border-border/30 bg-card/25 px-4 py-4 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_10px_25px_rgba(212,175,55,0.08)]"
                            >
                                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#d4af37]/10 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                                <span className="text-2xl mb-2 block">{country.flag}</span>
                                <span className="text-sm font-medium text-foreground">{country.name}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-center text-muted-foreground text-sm sm:text-base">
                        Many international founders choose the UK to establish a professional and internationally recognised business structure.
                    </p>
                </div>
            </section>

            {/* ── WHY INTERNATIONAL ENTREPRENEURS CHOOSE A UK COMPANY ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            KEY ADVANTAGES
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Why International Entrepreneurs Choose a UK Company
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {whyReasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:bg-card/40 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] sm:p-8"
                            >
                                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent"></div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] shadow-sm transition-transform duration-500 group-hover:scale-110">
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

                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 group-hover:blur-[40px] pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DOCUMENTS REQUIRED ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            WHAT YOU NEED
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Documents Required
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: <FaPassport className="h-6 w-6" />, title: "Valid Passport", description: "A clear copy of a valid passport for identification." },
                            { icon: <FaFileAlt className="h-6 w-6" />, title: "Proof of Address", description: "Utility bill, bank statement, or government correspondence." },
                            { icon: <FaClipboardCheck className="h-6 w-6" />, title: "Company Details", description: "Proposed company name and business activity description." },
                            { icon: <FaUserTie className="h-6 w-6" />, title: "Director Information", description: "Full name, date of birth, nationality, and service address." },
                            { icon: <FaEnvelopeOpenText className="h-6 w-6" />, title: "Shareholder Information", description: "Shareholder details and share allocation." },
                        ].map((doc, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] mb-4 transition-transform duration-500 group-hover:scale-110">
                                    {doc.icon}
                                </div>
                                <h3 className="mb-1 text-base font-bold text-foreground">{doc.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-center text-sm text-muted-foreground italic">
                        Additional compliance and verification requirements may apply depending on the specific circumstances.
                    </p>
                </div>
            </section>

            {/* ── PACKAGE OVERVIEW ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center lg:mb-12">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            OUR PACKAGES
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            What&apos;s Included in Our Packages?
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`pricing-card group relative flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#d4af37]/45 hover:shadow-2xl ${pkg.featured
                                    ? "border-[#d4af37] shadow-xl shadow-[#d4af37]/20 md:scale-105 md:py-12"
                                    : "md:mt-8"
                                    }`}
                            >
                                {pkg.featured && (
                                    <div className="absolute right-0 top-0 h-20 w-20 overflow-hidden">
                                        <div className="absolute right-[-30px] top-[20px] w-[140px] rotate-[45deg] bg-gradient-to-r from-[#d4af37] to-[#f3d066] py-1.5 text-center text-[10px] font-bold uppercase tracking-wide text-black shadow-lg">
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className="absolute right-0 top-0 -z-10 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-[#d4af37]/5 blur-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4 pointer-events-none"></div>

                                <h3 className="pricing-tier-name mb-6 text-2xl font-bold">
                                    {pkg.name}
                                </h3>

                                <ul className="mb-8 flex-grow space-y-3">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                            <FaCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                            <span className="pricing-feature">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/#pricing"
                                    className={`block w-full rounded-xl py-3 text-center text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${pkg.featured
                                        ? "bg-gradient-to-r from-[#d4af37] to-[#f3d066] text-black shadow-lg shadow-[#d4af37]/30"
                                        : "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                                        }`}
                                >
                                    View Packages
                                </Link>

                                <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-[#d4af37]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-5 group-hover:-translate-y-5"></div>
                            </div>
                        ))}
                    </div>

                    {/* Payment Methods Notice */}
                    <div className="mx-auto mt-12 max-w-2xl text-center">
                        <div className="inline-flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37]/5 via-[#d4af37]/10 to-[#d4af37]/5 px-6 py-4 shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-sm sm:flex-row">
                            <div className="flex items-center gap-2">
                                <FaLock className="h-4 w-4 text-[#d4af37]" />
                                <FaCreditCard className="h-4 w-4 text-[#d4af37]" />
                            </div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                All package buttons link to our{" "}
                                <span className="font-semibold text-gray-900 dark:text-white">secure pricing section</span> on the homepage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COMPANY FORMATION PROCESS ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center lg:mb-16">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            STEP BY STEP
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Company Formation Process
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/30 hover:bg-card/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] text-left"
                            >
                                {/* Giant Faint Number */}
                                <div className="absolute right-4 top-4 select-none font-serif text-[100px] font-black leading-none text-foreground/[0.03] transition-all duration-500 group-hover:text-[#d4af37]/[0.05]">
                                    0{index + 1}
                                </div>

                                <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent text-[#d4af37] shadow-sm transition-transform duration-500 group-hover:scale-110">
                                    {step.icon}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-3 inline-flex items-center gap-2">
                                        <span className="h-[1px] w-4 bg-[#d4af37]/60"></span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                                            Step 0{index + 1}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 font-serif text-lg font-bold leading-tight text-foreground sm:text-xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-foreground/70">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#d4af37]/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BANKING & COMPLIANCE ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">BANKING READY</span>
                        <h2 className="hero-heading mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Banking & Compliance Support</h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>We provide guidance and assistance for fintech onboarding and business verification readiness. This includes preparation for platforms such as Stripe, Wise, Revolut Business, and other UK-compatible payment providers.</p>
                            <p>Our team helps ensure your company structure and documentation meet the compliance requirements of modern financial platforms, giving you the best chance of a smooth approval process.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE SEVEN OAK PRESTIGE ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            WHY US
                        </span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Why Choose Seven Oak Prestige
                        </h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 sm:p-10">
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#d4af37]/20 pointer-events-none"></div>

                        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>
                                Seven Oak Prestige specialises in supporting both UK residents and international entrepreneurs.
                            </p>
                            <p>
                                Our goal is to provide a professional, efficient, and straightforward company formation experience supported by responsive customer service and practical guidance throughout the incorporation process.
                            </p>
                            <p>
                                Clients from multiple countries trust Seven Oak Prestige to assist with establishing their UK business presence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ SECTION ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                    <div className="absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#d4af37]/3 blur-[120px] dark:bg-[#d4af37]/5"></div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="mb-16 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">
                            COMMON QUESTIONS
                        </span>
                        <h2 className="faq-heading mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl uppercase">
                            Frequently Asked Questions
                        </h2>
                        <div className="mx-auto h-[1px] w-20 bg-[#d4af37]/50"></div>
                    </div>

                    <div className="space-y-3">
                        {faqItems.map((item, index) => {
                            const isOpen = openFaqItems.has(index);
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="faq-question flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-[#d4af37]/5 sm:p-5"
                                    >
                                        <span className="flex-1 font-semibold">
                                            {item.question}
                                        </span>
                                        <span className="flex-shrink-0 text-[#d4af37]">
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
                        <span className="text-xs font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-3 block">RELATED SERVICES</span>
                        <h2 className="hero-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Explore Our Other Services
                        </h2>
                        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {[
                            { title: "Virtual Business Address", href: "/services/virtual-business-address", description: "Premium London trading address and mail forwarding." },
                            { title: "VAT Registration", href: "/services/vat-registration-uk", description: "Register for UK VAT with HMRC compliance support." },
                            { title: "Registered Office Service", href: "/services/registered-office-service", description: "Professional London address for your company." },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/45 hover:bg-card/40"
                            >
                                <h3 className="mb-2 text-base font-bold text-[#d4af37]">{link.title}</h3>
                                <p className="text-sm text-muted-foreground">{link.description}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#d4af37]">
                                    Learn more →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="cta-section relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="cta-main-title mb-6 text-4xl font-normal tracking-wider sm:text-5xl lg:text-6xl">
                        Ready to Start Your UK Company?
                    </h2>

                    <p className="cta-subtitle mb-4 text-lg font-light sm:text-xl lg:text-2xl">
                        Join entrepreneurs from around the world who choose Seven Oak Prestige for their UK company formation needs.
                    </p>
                    <p className="cta-subtitle mb-10 text-base font-light sm:text-lg">
                        Start your UK company today with professional support and a straightforward incorporation process.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link
                            href="https://wa.me/447447488755"
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-10 py-5 text-lg font-bold text-black shadow-2xl shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#d4af37]/50 active:scale-95"
                        >
                            <FaWhatsapp className="h-5 w-5 transition-transform group-hover:rotate-12" />
                            <span>Start Today</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3d066] to-[#d4af37] opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-muted-foreground">
                        WhatsApp: <span className="font-semibold text-[#d4af37]">+44 7447 488755</span>
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
