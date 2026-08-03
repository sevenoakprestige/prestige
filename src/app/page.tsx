import { Metadata } from 'next';
import HomeClient from './home-client';

export const metadata: Metadata = {
    alternates: {
        canonical: "https://www.sevenoakprestige.com/",
    },
};

export default function Page() {
    return <HomeClient />;
}
