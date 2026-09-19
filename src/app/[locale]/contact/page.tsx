import { Metadata } from 'next';
import { getTranslations, Locale } from '@/i18n';
import PageEn from './page-en';
import PageFr from './page-fr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' ? 'Contactez-Nous | Seven Oak Prestige' : 'Contact Us | Seven Oak Prestige',
    description: locale === 'fr' 
      ? 'Contactez Seven Oak Prestige pour tous vos besoins de création d\'entreprise et d\'assistance commerciale au Royaume-Uni.'
      : 'Get in touch with Seven Oak Prestige for all your UK company formation and business support needs.',
    alternates: {
        canonical: "https://www.sevenoakprestige.com/contact",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/contact",
            "fr-FR": "https://www.sevenoakprestige.com/fr/contact",
        },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      {locale === 'fr' ? <PageFr /> : <PageEn />}
    </main>
  );
}
