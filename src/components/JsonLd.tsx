export default function JsonLd() {
    const professionalServiceJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Seven Oak Prestige",
        "image": "https://www.sevenoakprestige.com/assets/logo/seven_oak_prestige_dark_mode.png",
        "@id": "https://www.sevenoakprestige.com",
        "url": "https://www.sevenoakprestige.com",
        "telephone": "+447447488755",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "124 City Road",
            "addressLocality": "London",
            "postalCode": "EC1V 2NX",
            "addressCountry": "GB"
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.sevenoakprestige.com",
            "https://www.linkedin.com/company/sevenoakprestige",
            "https://www.facebook.com/sevenoakprestige"
        ]
    };

    const organizationJsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Seven Oak Prestige LTD",
        "url": "https://www.sevenoakprestige.com",
        "description": "Seven Oak Prestige Ltd specialises in UK company formation and corporate advisory for non-residents, international entrepreneurs and overseas businesses. We provide comprehensive, fully remote support including Companies House Identity Verification (ACSP), premium corporate addresses, banking readiness, Companies House compliance, and VAT and EORI registration. Establish, operate and grow your UK business with a trusted, compliant advisory partner.",
        "legalName": "SEVEN OAK PRESTIGE LTD",
        "taxID": "16903092",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "124 City Road",
            "addressLocality": "London",
            "postalCode": "EC1V 2NX",
            "addressCountry": "GB"
        },
        "sameAs": [
            "https://www.linkedin.com/company/sevenoakprestige",
            "https://www.facebook.com/sevenoakprestige",
            "https://find-and-update.company-information.service.gov.uk/company/16903092"
        ],
        "knowsAbout": [
            "UK Company Formation",
            "UK Company Formation for Indian Residents",
            "Corporate Advisory for Non-Residents",
            "Companies House Identity Verification",
            "ACSP Compliance",
            "Premium Corporate Addresses",
            "Banking Readiness Support",
            "VAT and EORI Registration"
        ]
    };

    return (
        <>
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
