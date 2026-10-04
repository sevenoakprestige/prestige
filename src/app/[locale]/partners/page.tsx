import type { Metadata } from 'next';
import PartnersEn from './page-en';
import PartnersFr from './page-fr';

export const metadata: Metadata = {
    title: 'UK Company Formation Partner Programme | Seven Oak Prestige',
    description: 'Partner with Seven Oak Prestige for UK company formation, address, compliance, banking and accounting support. Referral, reseller and white-label options with no minimum volume.',
    openGraph: {
        title: 'UK Company Formation Partner Programme | Seven Oak Prestige',
        description: 'Partner with Seven Oak Prestige for UK company formation, address, compliance, banking and accounting support. Referral, reseller and white-label options with no minimum volume.',
        url: 'https://www.sevenoakprestige.com/partners',
    },
    alternates: {
        canonical: 'https://www.sevenoakprestige.com/partners',
    },
};

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (locale === 'fr') return <PartnersFr />;
    return <PartnersEn />;
}
