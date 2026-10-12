import type { Metadata } from 'next';
import AboutEn from './page-en';
import AboutFr from './page-fr';


export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <AboutFr />;
    return <AboutEn />;
}
