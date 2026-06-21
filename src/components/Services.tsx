"use client";

import Link from "next/link";
import { useCountry } from "@/contexts/CountryContext";

// UK-specific static services matching the image layout
const ukServices = [
    {
        title: "UK Company\nFormation",
        href: "/uk-company-formation-for-non-residents",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "Registered\nOffice Service (RO)",
        href: "/registered-office-service",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
        ),
    },
    {
        title: "Director Service\nAddress (DSA)",
        href: "/director-service-address",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 20v-1a6 6 0 0112 0v1" />
                <path d="M12 12v2m0 0l-1.5 1.5M12 14l1.5 1.5" />
            </svg>
        ),
    },
    {
        title: "Virtual Business\nAddress (VBA)",
        href: "/virtual-business-address",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
        ),
    },
    {
        title: "VAT\nRegistration",
        href: "/vat-registration-uk",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 10h10M7 14h6" />
            </svg>
        ),
    },
    {
        title: "EORI\nRegistration",
        href: "/eori-registration-uk",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
        ),
    },
    {
        title: "Fintech & Payment\nGuidance",
        href: "/fintech-banking-guidance",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M12 6v6l4 2" />
                <path d="M8 14s1 2 4 2 4-2 4-2" />
            </svg>
        ),
    },
    {
        title: "Companies House\nVerification",
        href: "/companies-house-verification",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
];

const usaServices = [
    {
        title: "USA LLC\nFormation",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "Registered\nAgent Service",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: "US Mailing\nAddress",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
        ),
    },
    {
        title: "Operating\nAgreement & EIN",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 10h10M7 14h6" />
            </svg>
        ),
    },
    {
        title: "Fintech Account\nSetup",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M8 14s1 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
            </svg>
        ),
    },
];

const canadaServices = [
    {
        title: "Canada\nCorporation Formation",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        title: "Registered Address\n+ Digital Mail",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
            </svg>
        ),
    },
    {
        title: "Corporate\nDocuments",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M7 10h10M7 14h6" />
            </svg>
        ),
    },
    {
        title: "Virtual Office\n(Optional)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
        ),
    },
    {
        title: "Fintech\nSupport",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M8 14s1 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
            </svg>
        ),
    },
];

type ServiceItem = {
    title: string;
    icon: React.ReactNode;
    href?: string;
};

const allServices: Record<string, ServiceItem[]> = {
    UK: ukServices,
    USA: usaServices,
    Canada: canadaServices,
};

export default function Services() {
    const { selectedCountry } = useCountry();
    const services = allServices[selectedCountry] ?? ukServices;

    return (
        <section id="services" className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            {/* Subtle ambient glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.03] blur-3xl"></div>
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="services-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Our Core Services
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Services Row — single scrollable row of square cards */}
                <div className="mt-10 flex flex-wrap justify-center gap-5">
                    {services.map((service, index) => {
                        const hasLink = 'href' in service && service.href;
                        const cardContent = (
                            <>
                                {/* Icon */}
                                <div className="text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <p className="whitespace-pre-line text-sm font-medium leading-snug text-foreground/80">
                                    {service.title}
                                </p>
                            </>
                        );

                        if (hasLink) {
                            return (
                                <Link
                                    key={index}
                                    href={(service as any).href}
                                    className="group flex h-[160px] w-[150px] flex-col items-center justify-center gap-5 rounded-2xl border border-[#d4af37]/25 bg-transparent p-5 text-center transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/[0.04] hover:shadow-[0_0_20px_rgba(212,175,55,0.07)] sm:h-[170px] sm:w-[160px]"
                                >
                                    {cardContent}
                                </Link>
                            );
                        }

                        return (
                            <div
                                key={index}
                                className="group flex h-[160px] w-[150px] flex-col items-center justify-center gap-5 rounded-2xl border border-[#d4af37]/25 bg-transparent p-5 text-center transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/[0.04] hover:shadow-[0_0_20px_rgba(212,175,55,0.07)] sm:h-[170px] sm:w-[160px]"
                            >
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
