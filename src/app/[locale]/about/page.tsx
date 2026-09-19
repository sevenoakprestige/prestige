import type { Metadata } from 'next';
import AboutEn from './page-en';
import AboutFr from './page-fr';

export const metadata: Metadata = {
    title: 'About Us – Seven Oak Prestige',
    description: 'Learn about Seven Oak Prestige Ltd. We provide premium UK company formation, registered office services, and strategic business advisory for global entrepreneurs.',
    openGraph: {
        title: 'About Us – Seven Oak Prestige',
        description: 'Premium UK company formation and business advisory for global entrepreneurs.',
        url: 'https://www.sevenoakprestige.com/about',
    },
    alternates: {
        canonical: 'https://www.sevenoakprestige.com/about',
    },
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <AboutFr />;
    return <AboutEn />;
}
