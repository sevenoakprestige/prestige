import { Metadata } from 'next';
import HomeClient from './home-client';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isFr = locale === 'fr';

    return {
        alternates: {
            canonical: isFr
                ? "https://www.sevenoakprestige.com/fr"
                : "https://www.sevenoakprestige.com/",
            languages: {
                en: "https://www.sevenoakprestige.com/",
                fr: "https://www.sevenoakprestige.com/fr",
                "x-default": "https://www.sevenoakprestige.com/",
            },
        },
        openGraph: {
            url: isFr
                ? "https://www.sevenoakprestige.com/fr"
                : "https://www.sevenoakprestige.com/",
            locale: isFr ? "fr_FR" : "en_GB",
        },
    };
}

export default function Page() {
    return <HomeClient />;
}
