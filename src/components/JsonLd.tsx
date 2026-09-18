export default function JsonLd() {
    const BASE = 'https://www.sevenoakprestige.com';

    const websiteJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        "url": BASE,
        "name": "Seven Oak Prestige",
        "description": "UK company formation and corporate advisory for international entrepreneurs and non-residents.",
        "inLanguage": ["en-GB", "fr-FR"],
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${BASE}/blog?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    const professionalServiceJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${BASE}/#service`,
        "name": "Seven Oak Prestige",
        "image": `${BASE}/assets/logo/seven_oak_prestige_dark_mode.png`,
        "url": BASE,
        "telephone": "+447447488755",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "124 City Road",
            "addressLocality": "London",
            "postalCode": "EC1V 2NX",
            "addressCountry": "GB"
        },
        "priceRange": "$$",
        "availableLanguage": [
            { "@type": "Language", "name": "English" },
            { "@type": "Language", "name": "French", "alternateName": "Français" }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            BASE,
            "https://www.linkedin.com/company/sevenoakprestige"
        ]
    };

    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        "name": "Seven Oak Prestige LTD",
        "legalName": "SEVEN OAK PRESTIGE LTD",
        "url": BASE,
        "logo": `${BASE}/assets/logo/seven_oak_prestige_dark_mode.png`,
        "description": "Seven Oak Prestige Ltd specialises in UK company formation and corporate advisory for non-residents, international entrepreneurs and overseas businesses. We provide comprehensive, fully remote support including Companies House Identity Verification (ACSP), premium corporate addresses, banking readiness, Companies House compliance, and VAT and EORI registration.",
        "taxID": "16903092",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "124 City Road",
            "addressLocality": "London",
            "postalCode": "EC1V 2NX",
            "addressCountry": "GB"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+447447488755",
            "email": "contact@sevenoakprestige.com",
            "contactType": "customer service",
            "availableLanguage": [
                { "@type": "Language", "name": "English" },
                { "@type": "Language", "name": "French", "alternateName": "Français" }
            ],
            "url": `${BASE}/contact`
        },
        "sameAs": [
            "https://www.linkedin.com/company/sevenoakprestige",
            "https://find-and-update.company-information.service.gov.uk/company/16903092"
        ],
        "knowsAbout": [
            "UK Company Formation",
            "UK Company Formation for Non-Residents",
            "UK Company Formation for Indian Entrepreneurs",
            "UK Company Formation for French Residents",
            "Corporate Advisory for Non-Residents",
            "Companies House Identity Verification",
            "ACSP Compliance",
            "Premium Corporate Addresses",
            "Banking Readiness Support",
            "VAT Registration UK",
            "EORI Registration UK",
            "Fintech Banking Guidance"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
        </>
    );
}
