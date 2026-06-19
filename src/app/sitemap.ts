import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.sevenoakprestige.com';
    const now = new Date().toISOString();

    // ── HOMEPAGE ──
    const homepage: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1.0,
        },
    ];

    // ── CORE SERVICE PAGES (highest commercial value) ──
    const coreServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/uk-company-formation`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/uk-company-formation-for-non-residents`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/uk-company-formation-non-residents`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
    ];

    // ── COMPLIANCE & REGISTRATION SERVICES ──
    const complianceServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/vat-registration-uk`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${baseUrl}/eori-registration-uk`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${baseUrl}/companies-house-verification`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ── BUSINESS ADDRESS & OFFICE SERVICES ──
    const addressServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/registered-office-service`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/director-service-address`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/virtual-business-address`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ── BANKING & FINTECH ──
    const bankingServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/fintech-banking-guidance`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ── KEY LANDING PAGES ──
    const landingPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/consultation`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.80,
        },
        {
            url: `${baseUrl}/site-map`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.30,
        },
    ];

    // ── LEGAL / POLICY PAGES ──
    const legalPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/terms`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.30,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.30,
        },
        {
            url: `${baseUrl}/refund`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.30,
        },
    ];

    // ── DYNAMIC BLOG POSTS ──
    const blogPosts: MetadataRoute.Sitemap = getAllPostSlugs().map(({ slug }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.70,
    }));

    return [
        ...homepage,
        ...coreServices,
        ...complianceServices,
        ...addressServices,
        ...bankingServices,
        ...landingPages,
        ...legalPages,
        ...blogPosts,
    ];
}
