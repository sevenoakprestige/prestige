"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCalendar, FaArrowRight, FaSearch, FaArrowLeft } from "react-icons/fa";

type Post = {
    _id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags: string[];
};

export default function BlogGrid({ posts }: { posts: Post[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter((post) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            post.title?.toLowerCase().includes(query) ||
            post.excerpt?.toLowerCase().includes(query) ||
            post.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
    });

    return (
        <>
            {/* Header Section */}
            <section className="section-dark relative px-4 py-16 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
                    >
                        <FaArrowLeft className="h-3 w-3" />
                        Back to Home
                    </Link>

                    <div className="text-center mb-10">
                        <h1 className="mb-6 text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            UK Company Formation <span className="text-gold">Insights</span> & Business Guides
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Expert guides on UK company formation, fintech banking, and global business structuring.
                        </p>
                    </div>

                    {/* Search Bar in Hero */}
                    <div className="mx-auto max-w-2xl relative">
                        <div className="relative flex items-center w-full h-14 rounded-full border border-border/50 bg-card/50 shadow-sm focus-within:ring-2 focus-within:ring-gold/50 focus-within:border-gold/50 overflow-hidden transition-all">
                            <div className="grid place-items-center h-full w-12 text-muted-foreground">
                                <FaSearch />
                            </div>
                            <input
                                className="peer h-full w-full outline-none text-sm bg-transparent text-foreground pr-4"
                                type="text"
                                id="search"
                                placeholder="Search by title, topic, or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-parchment px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map(({ slug, date, title, excerpt, tags }) => (
                    <article
                        key={slug}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 text-card-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-gold/10"
                    >
                        <div className="flex flex-1 flex-col p-6">
                            {/* Tags */}
                            <div className="mb-4 flex flex-wrap gap-2">
                                {tags?.map((tag: string, idx: number) => (
                                    <span key={`${tag}-${idx}`} className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h2 className="mb-3 text-2xl font-display font-bold leading-tight decoration-gold underline-offset-4 group-hover:underline">
                                <Link href={`/blog/${slug}`} className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {title}
                                </Link>
                            </h2>

                            {/* Excerpt */}
                            <p className="mb-6 flex-1 text-muted-foreground">
                                {excerpt}
                            </p>

                            {/* Footer */}
                            <div className="mt-auto flex items-center justify-between border-t py-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <FaCalendar className="h-3 w-3" />
                                    <time dateTime={date}>{date}</time>
                                </div>
                                <div className="flex items-center gap-1 font-medium text-gold">
                                    Read Article <FaArrowRight className="h-3 w-3" />
                                </div>
                            </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold to-[#f3d066] opacity-0 transition-opacity group-hover:opacity-100" />
                    </article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-xl text-muted-foreground">No posts found matching "{searchQuery}".</p>
                </div>
            )}
                </div>
            </section>
        </>
    );
}
