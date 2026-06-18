import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.sevenoakprestige.com';

    // Service page routes with high priority
    const serviceRoutes = [
        '/uk-company-formation',
        '/uk-company-formation-non-residents',
        '/uk-company-formation-for-non-residents',
        '/registered-office-service',
        '/director-service-address',
        '/virtual-business-address',
        '/vat-registration-uk',
        '/eori-registration-uk',
        '/fintech-banking-guidance',
        '/companies-house-verification',
    ];

    // Static routes
    const routes = [
        '',
        '/blog',
        '/terms',
        '/privacy',
        '/refund',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service pages
    const servicePages = serviceRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic blog post routes
    const blogRoutes = getAllPostSlugs().map(({ slug }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...servicePages, ...blogRoutes];
}
