import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';

const SITEMAP_POSTS_QUERY = defineQuery(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
);

const BASE = 'https://www.sevenoakprestige.com';

/**
 * Builds a pair of sitemap entries (EN + FR) with proper hreflang alternates.
 * frPath: null means the page has no French equivalent — only one entry is returned.
 */
function entry(
    enPath: string,
    opts: {
        frPath?: string | null;
        changeFrequency?: MetadataRoute.Sitemap[0]['changeFrequency'];
        priority?: number;
        lastModified?: string;
    } = {}
): MetadataRoute.Sitemap[0][] {
    const {
        frPath = null,
        changeFrequency = 'weekly',
        priority = 0.80,
        lastModified = new Date().toISOString(),
    } = opts;

    const alternates = frPath
        ? {
              languages: {
                  'en': `${BASE}${enPath}`,
                  'fr': `${BASE}${frPath}`,
                  'x-default': `${BASE}${enPath}`,
              },
          }
        : {
              languages: {
                  'x-default': `${BASE}${enPath}`,
              },
          };

    const enEntry: MetadataRoute.Sitemap[0] = {
        url: `${BASE}${enPath}`,
        lastModified,
        changeFrequency,
        priority,
        alternates,
    };

    if (!frPath) return [enEntry];

    const frEntry: MetadataRoute.Sitemap[0] = {
        url: `${BASE}${frPath}`,
        lastModified,
        changeFrequency,
        // FR pages get slightly lower priority than EN equivalents
        priority: Math.max(priority - 0.05, 0.1),
        alternates,
    };

    return [enEntry, frEntry];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date().toISOString();

    // ── HOMEPAGE ──
    const homepage = [
        ...entry('/', { frPath: '/fr', changeFrequency: 'daily', priority: 1.0, lastModified: now }),
    ];

    // ── CORE SERVICE PAGES ──
    const coreServices = [
        ...entry('/services/uk-company-formation-for-non-residents', {
            frPath: '/fr/services/uk-company-formation-for-non-residents',
            changeFrequency: 'weekly',
            priority: 0.95,
            lastModified: now,
        }),
    ];

    // ── COMPLIANCE & REGISTRATION SERVICES ──
    const complianceServices = [
        ...entry('/services/vat-registration-uk', {
            frPath: '/fr/services/vat-registration-uk',
            changeFrequency: 'weekly',
            priority: 0.90,
            lastModified: now,
        }),
        ...entry('/services/eori-registration-uk', {
            frPath: '/fr/services/eori-registration-uk',
            changeFrequency: 'weekly',
            priority: 0.90,
            lastModified: now,
        }),
        ...entry('/services/companies-house-verification', {
            frPath: '/fr/services/companies-house-verification',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
        ...entry('/services/companies-house-identity-verification', {
            frPath: '/fr/services/companies-house-identity-verification',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
    ];

    // ── BUSINESS ADDRESS & OFFICE SERVICES ──
    const addressServices = [
        ...entry('/services/registered-office-service', {
            frPath: '/fr/services/registered-office-service',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
        ...entry('/services/director-service-address', {
            frPath: '/fr/services/director-service-address',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
        ...entry('/services/virtual-business-address', {
            frPath: '/fr/services/virtual-business-address',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
    ];

    // ── BANKING & FINTECH ──
    const bankingServices = [
        ...entry('/services/fintech-banking-guidance', {
            frPath: '/fr/services/fintech-banking-guidance',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
    ];

    // ── KEY LANDING PAGES ──
    const landingPages = [
        ...entry('/about', {
            frPath: '/fr/about',
            changeFrequency: 'monthly',
            priority: 0.90,
            lastModified: now,
        }),
        ...entry('/contact', {
            frPath: '/fr/contact',
            changeFrequency: 'weekly',
            priority: 0.90,
            lastModified: now,
        }),
        ...entry('/consultation', {
            frPath: '/fr/consultation',
            changeFrequency: 'weekly',
            priority: 0.80,
            lastModified: now,
        }),
        // Blog index — English only (posts are EN only)
        ...entry('/blog', {
            changeFrequency: 'daily',
            priority: 0.80,
            lastModified: now,
        }),
        ...entry('/site-map', {
            frPath: '/fr/site-map',
            changeFrequency: 'monthly',
            priority: 0.30,
            lastModified: now,
        }),
    ];

    // ── RESOURCES & GUIDES ──
    const resourcePages = [
        ...entry('/resources/uk-business-banking-readiness-assessment', {
            frPath: '/fr/resources/uk-business-banking-readiness-assessment',
            changeFrequency: 'weekly',
            priority: 0.90,
            lastModified: now,
        }),
        ...entry('/resources/guides', {
            frPath: '/fr/resources/guides',
            changeFrequency: 'weekly',
            priority: 0.85,
            lastModified: now,
        }),
    ];

    // ── COUNTRY-SPECIFIC PAGES ──
    const countryPages: MetadataRoute.Sitemap = [
        ...entry('/countries', {
            frPath: '/fr/countries',
            changeFrequency: 'weekly',
            priority: 0.90,
            lastModified: now,
        }),
        // India page — English only
        ...entry('/countries/india/uk-company-formation', {
            changeFrequency: 'weekly',
            priority: 0.95,
            lastModified: now,
        }),
        // France page lives exclusively under /fr/ — it IS the French content
        {
            url: `${BASE}/fr/countries/france/uk-company-formation`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.95,
            alternates: {
                languages: {
                    'fr': `${BASE}/fr/countries/france/uk-company-formation`,
                    'x-default': `${BASE}/fr/countries/france/uk-company-formation`,
                },
            },
        },
    ];

    // ── LEGAL / POLICY PAGES ──
    const legalPages = [
        ...entry('/terms', {
            frPath: '/fr/terms',
            changeFrequency: 'yearly',
            priority: 0.30,
            lastModified: now,
        }),
        ...entry('/privacy', {
            frPath: '/fr/privacy',
            changeFrequency: 'yearly',
            priority: 0.30,
            lastModified: now,
        }),
        ...entry('/refund', {
            frPath: '/fr/refund',
            changeFrequency: 'yearly',
            priority: 0.30,
            lastModified: now,
        }),
        ...entry('/security', {
            frPath: '/fr/security',
            changeFrequency: 'yearly',
            priority: 0.25,
            lastModified: now,
        }),
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
            url: `${BASE}/blog/${post.slug}`,
            lastModified: post._updatedAt || now,
            changeFrequency: 'monthly' as const,
            priority: 0.70,
            alternates: {
                languages: {
                    'x-default': `${BASE}/blog/${post.slug}`,
                },
            },
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
        ...countryPages,
        ...legalPages,
        ...blogPosts,
    ];
}
