import type { Metadata } from 'next';
import SiteMapEn from './page-en';
import SiteMapFr from './page-fr';

export const metadata: Metadata = {
    title: 'Site Map – Seven Oak Prestige',
    description: 'Navigate the Seven Oak Prestige website. Find quick links to our UK company formation services, compliance guides, and corporate resources.',
    openGraph: {
        title: 'Site Map – Seven Oak Prestige',
        description: 'Complete index of Seven Oak Prestige services and resources.',
        url: 'https://www.sevenoakprestige.com/site-map',
    },
};

export default async function SiteMapPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <SiteMapFr />;
    return <SiteMapEn />;
}
