import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '@/sanity/client';
import { defineQuery, type SanityDocument } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { FaArrowLeft, FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import Footer from '@/components/Footer';

const POST_QUERY = defineQuery(
    `*[_type == "post" && slug.current == $slug][0]{ title, "slug": slug.current, excerpt, date, author, tags, keywords, mainImage, body }`
);

const POSTS_SLUG_QUERY = defineQuery(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
);

export async function generateStaticParams() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_SLUG_QUERY, {}, { next: { revalidate: 30 } });
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.keywords || [],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: post.author ? [post.author] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `https://www.sevenoakprestige.com/blog/${slug}`,
        },
    };
}

const portableTextComponents = {
    block: {
        h1: ({ children }: any) => <h1 className="mb-4 mt-8 text-3xl font-bold">{children}</h1>,
        h2: ({ children }: any) => <h2 className="mb-3 mt-6 text-2xl font-bold text-[#d4af37]">{children}</h2>,
        h3: ({ children }: any) => <h3 className="mb-2 mt-4 text-xl font-semibold">{children}</h3>,
        normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-foreground/90">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#d4af37] pl-4 italic text-muted-foreground">{children}</blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>,
        number: ({ children }: any) => <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
        number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    },
    marks: {
        link: ({ children, value }: any) => (
            <a
                href={value.href}
                className="font-medium text-[#d4af37] underline decoration-[#d4af37]/30 underline-offset-2 transition-colors hover:decoration-[#d4af37]"
                target={value.blank ? '_blank' : undefined}
                rel={value.blank ? 'noopener noreferrer' : undefined}
            >
                {children}
            </a>
        ),
        code: ({ children }: any) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">{children}</code>
        ),
    },
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) return null;
            return (
                <div className="relative my-8 aspect-video w-full overflow-hidden rounded-xl bg-muted/10 border border-border/20">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog Image'}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 896px"
                    />
                </div>
            );
        },
    },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await client.fetch<SanityDocument>(POST_QUERY, { slug }, { next: { revalidate: 30 } });

    if (!post) {
        notFound();
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author || "Seven Oak Prestige"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Seven Oak Prestige",
            "url": "https://www.sevenoakprestige.com"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.sevenoakprestige.com/blog/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <main className="min-h-screen pt-24 pb-16">
                {/* Header Section */}
                <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#d4af37]"
                    >
                        <FaArrowLeft className="h-3 w-3" />
                        Back to Blog
                    </Link>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                            {post.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 rounded-full bg-[#d4af37]/10 px-3 py-1 text-xs font-medium text-[#d4af37]"
                                >
                                    <FaTag className="h-2.5 w-2.5" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Title */}
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="mb-8 flex flex-wrap items-center gap-4 border-b pb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <FaCalendar className="h-3.5 w-3.5" />
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                        {post.author && (
                            <div className="flex items-center gap-2">
                                <FaUser className="h-3.5 w-3.5" />
                                <span>{post.author}</span>
                            </div>
                        )}
                    </div>

                    {/* Hero Image */}
                    {post.mainImage?.asset && (
                        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl shadow-lg border border-border/50 bg-muted/20">
                            <Image 
                                src={urlFor(post.mainImage).url()} 
                                alt={post.title} 
                                fill 
                                className="object-cover object-center" 
                                priority 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 896px"
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <PortableText value={post.body} components={portableTextComponents} />
                    </div>

                    {/* Back to Blog Link */}
                    <div className="mt-12 border-t pt-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-6 py-3 font-semibold text-black shadow-lg shadow-[#d4af37]/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/30 active:scale-95"
                        >
                            <FaArrowLeft className="h-4 w-4" />
                            Back to All Articles
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
