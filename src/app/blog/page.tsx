
import type { Metadata } from 'next';
import { client } from "@/sanity/client";
import { defineQuery, type SanityDocument } from "next-sanity";
import Footer from '@/components/Footer';
import BlogGrid from './components/BlogGrid';

export const metadata: Metadata = {
    title: 'Blog – UK Company Formation Guides & Resources',
    description: 'Expert guides on UK company formation for non-residents, fintech banking setup, global business structuring, and international entrepreneur resources.',
    openGraph: {
        title: 'Blog – Seven Oak Prestige',
        description: 'Expert guides on UK company formation for non-residents, fintech banking setup, and global business structuring.',
        url: 'https://www.sevenoakprestige.com/blog',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.sevenoakprestige.com/blog',
    },
};

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(date desc){ _id, title, "slug": slug.current, date, excerpt, tags }`
);

const options = { next: { tags: ['post'] } };

export default async function BlogHome() {
    const allPostsData = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    return (
        <>
            <main className="section-dark min-h-screen pt-24 pb-16">
                <BlogGrid posts={allPostsData as any} />
            </main>
            <Footer />
        </>
    );
}
