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
    const isFr = locale === 'fr';
    return {
      title: isFr ? 'Contactez-Nous | Seven Oak Prestige' : 'Contact Us | Seven Oak Prestige',
      description: isFr 
        ? 'Contactez Seven Oak Prestige pour tous vos besoins de création d\'entreprise et d\'assistance commerciale au Royaume-Uni.'
        : 'Get in touch with Seven Oak Prestige for all your UK company formation and business support needs.',
      openGraph: {
        title: isFr ? 'Contactez-Nous | Seven Oak Prestige' : 'Contact Us | Seven Oak Prestige',
        description: isFr 
          ? 'Contactez Seven Oak Prestige pour vos besoins au Royaume-Uni.'
          : 'Get in touch with Seven Oak Prestige for your UK business needs.',
        url: isFr ? "https://www.sevenoakprestige.com/fr/contact" : "https://www.sevenoakprestige.com/contact",
        locale: isFr ? "fr_FR" : "en_GB",
      },
      alternates: {
          canonical: isFr ? "https://www.sevenoakprestige.com/fr/contact" : "https://www.sevenoakprestige.com/contact",
          languages: {
              en: "https://www.sevenoakprestige.com/contact",
              fr: "https://www.sevenoakprestige.com/fr/contact",
              "x-default": "https://www.sevenoakprestige.com/contact",
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
