import { Metadata } from 'next';
import ContactFR from '@/components/ContactFR';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Nous Contacter | Seven Oak Prestige',
    description: 'Contactez Seven Oak Prestige pour tous vos besoins en matière de création d\'entreprise et d\'assistance aux entreprises au Royaume-Uni.',
    alternates: {
        canonical: "https://www.sevenoakprestige.com/fr/contact",
        languages: {
            "en-US": "https://www.sevenoakprestige.com/contact",
            "fr-FR": "https://www.sevenoakprestige.com/fr/contact",
        },
    },
};

export default function ContactPageFR() {
    return (
        <div className="bg-background">
            <main className="min-h-screen pt-24 pb-12">
                <ContactFR />
            </main>
            <Footer />
        </div>
    );
}
