import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const SITEMAP_POSTS_QUERY = defineQuery(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
            url: `${baseUrl}/services/uk-company-formation-for-non-residents`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
    ];

    // ── COMPLIANCE & REGISTRATION SERVICES ──
    const complianceServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/services/vat-registration-uk`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${baseUrl}/services/eori-registration-uk`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.90,
        },
        {
            url: `${baseUrl}/services/companies-house-verification`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ── BUSINESS ADDRESS & OFFICE SERVICES ──
    const addressServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/services/registered-office-service`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/director-service-address`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/services/virtual-business-address`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ── BANKING & FINTECH ──
    const bankingServices: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/services/fintech-banking-guidance`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
    ];

    // ── KEY LANDING PAGES ──
    const landingPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.90,
        },
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

    // ── RESOURCES & GUIDES ──
    const resourcePages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/resources/uk-business-banking-readiness-assessment`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.90,
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

    // ── DYNAMIC BLOG POSTS (from Sanity CMS) ──
    let blogPosts: MetadataRoute.Sitemap = [];
    try {
        const posts = await client.fetch<SanityDocument[]>(
            SITEMAP_POSTS_QUERY,
            {},
            { next: { revalidate: 3600 } }
        );
        blogPosts = posts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post._updatedAt || now,
            changeFrequency: 'monthly' as const,
            priority: 0.70,
        }));
    } catch {
        // Fallback: return sitemap without blog posts if Sanity is unavailable
        blogPosts = [];
    }

    return [
        ...homepage,
        ...coreServices,
        ...complianceServices,
        ...addressServices,
        ...bankingServices,
        ...landingPages,
        ...resourcePages,
        ...legalPages,
        ...blogPosts,
    ];
}

