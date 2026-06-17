import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.sevenoakprestige.com';

    // Static routes
    const routes = [
        '',
        '/uk-company-formation-for-non-residents',
        '/blog',
        '/terms',
        '/privacy',
        '/refund',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : route === '/uk-company-formation-for-non-residents' ? 0.9 : 0.8,
    }));

    // Dynamic blog post routes
    const blogRoutes = getAllPostSlugs().map(({ slug }) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
}
