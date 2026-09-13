import Link from "next/link";
import { FaBuilding, FaFileAlt, FaShieldAlt, FaCreditCard, FaNewspaper, FaGavel, FaHome, FaMapSigns } from "react-icons/fa";
import Footer from "@/components/Footer";

const sitemapSections = [
    {
        title: "Company Formation",
        icon: <FaBuilding className="h-5 w-5" />,
        description: "Register your UK limited company with ease",
        links: [
            { name: "UK Company Formation for Non-Residents", href: "/services/uk-company-formation-for-non-residents", description: "Start a UK company from anywhere in the world" },
        ],
    },
    {
        title: "Country Specific Formation",
        icon: <FaMapSigns className="h-5 w-5" />,
        description: "Tailored setup guides for international founders",
        links: [
            { name: "Global Jurisdictions Overview", href: "/countries", description: "Select your country of residence" },
            { name: "UK Company Formation from India", href: "/countries/india/uk-company-formation", description: "Setup a UK company from India" },
            { name: "UK Company Formation from France", href: "/countries/france/uk-company-formation", description: "Setup a UK company from France" },
        ],
    },
    {
        title: "Compliance & Registration",
        icon: <FaShieldAlt className="h-5 w-5" />,
        description: "Stay compliant with UK regulations",
        links: [
            { name: "VAT Registration UK", href: "/services/vat-registration-uk", description: "HMRC VAT registration & compliance guidance" },
            { name: "EORI Registration UK", href: "/services/eori-registration-uk", description: "EORI number for UK import & export trading" },
            { name: "Companies House Verification", href: "/services/companies-house-verification", description: "Verify your company details with Companies House" },
        ],
    },
    {
        title: "Business Address & Office",
        icon: <FaFileAlt className="h-5 w-5" />,
        description: "Professional UK business addresses",
        links: [
            { name: "Registered Office Service", href: "/services/registered-office-service", description: "Official UK registered office address" },
            { name: "Director Service Address", href: "/services/director-service-address", description: "Protect your personal address from public records" },
            { name: "Virtual Business Address", href: "/services/virtual-business-address", description: "Premium UK business address for your company" },
        ],
    },
    {
        title: "Banking & Fintech",
        icon: <FaCreditCard className="h-5 w-5" />,
        description: "Business banking & payment solutions",
        links: [
            { name: "Fintech & Banking Guidance", href: "/services/fintech-banking-guidance", description: "Guidance on Stripe, Wise, Revolut & UK business banking" },
        ],
    },
    {
        title: "Resources & Blog",
        icon: <FaNewspaper className="h-5 w-5" />,
        description: "Guides, articles & insights",
        links: [
            { name: "Guides & Resources", href: "/resources/guides", description: "In-depth guides for UK company formation" },
            { name: "Banking Readiness Assessment", href: "/resources/uk-business-banking-readiness-assessment", description: "Evaluate your company's banking readiness" },
            { name: "Blog", href: "/blog", description: "Latest articles and guides on UK company formation" },
            { name: "Company Formation Guide 2026", href: "/blog/company-formation-guide-2026", description: "Complete guide to forming a UK company" },
            { name: "UK Company Formation Guide 2026", href: "/blog/uk-company-formation-guide-2026", description: "Step-by-step UK company formation walkthrough" },
            { name: "London Business Address Guide", href: "/blog/uk-company-formation-london-business-address", description: "The Complete Guide for International Entrepreneurs" },
            { name: "Fintech Banking Guide", href: "/blog/fintech-banking-guide", description: "Guide to UK business banking & fintech platforms" },
            { name: "Starting a Business in the UK", href: "/blog/starting-a-business-uk", description: "Essential steps to start your UK business" },
            { name: "Start a UK Company from India", href: "/blog/how-to-start-a-uk-company-from-india", description: "Indian entrepreneurs — form a UK company" },
            { name: "Start a UK Company from Pakistan", href: "/blog/how-to-start-a-uk-company-from-pakistan", description: "Pakistani entrepreneurs — form a UK company" },
            { name: "Start a UK Company from UAE", href: "/blog/how-to-start-a-uk-company-from-uae", description: "UAE entrepreneurs — form a UK company" },
            { name: "Start a UK Company from France", href: "/blog/how-to-start-a-uk-company-from-france", description: "French entrepreneurs — form a UK company" },
            { name: "Start a UK Company from Algeria", href: "/blog/how-to-start-a-uk-company-from-algeria", description: "Algerian entrepreneurs — form a UK company" },
        ],
    },
    {
        title: "General",
        icon: <FaHome className="h-5 w-5" />,
        description: "Main site pages",
        links: [
            { name: "Homepage", href: "/", description: "Seven Oak Prestige — UK Company Formation Services" },
            { name: "Contact", href: "/contact", description: "Get in touch with our team" },
            { name: "Consultation", href: "/consultation", description: "Book a free consultation with our team" },
        ],
    },
    {
        title: "Legal & Policies",
        icon: <FaGavel className="h-5 w-5" />,
        description: "Terms, privacy & refund policies",
        links: [
            { name: "Terms & Conditions", href: "/terms", description: "Our terms of service" },
            { name: "Privacy Policy", href: "/privacy", description: "How we handle your data" },
            { name: "Refund Policy", href: "/refund", description: "Our refund and cancellation policy" },
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
                        <span className="text-sm font-medium text-gold">{totalPages} Pages Indexed</span>
                    </div>
                    <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Site <span className="bg-gradient-to-r from-gold via-[#f3d066] to-gold bg-clip-text text-transparent">Map</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        Browse our complete directory of services, resources, and pages. Find exactly what you&apos;re looking for.
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
                                <p className="text-sm font-medium text-foreground">Looking for the XML Sitemap?</p>
                                <p className="text-xs text-muted-foreground">For search engines and crawlers</p>
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
