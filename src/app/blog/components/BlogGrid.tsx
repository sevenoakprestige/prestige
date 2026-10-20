"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCalendar, FaArrowRight, FaSearch, FaArrowLeft, FaTag, FaClock } from "react-icons/fa";

type Post = {
    _id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags?: string[];
    keywords?: string[];
};

function formatDate(dateStr: string) {
    if (!dateStr) return "";
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        return d.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    } catch {
        return dateStr;
    }
}

function getReadingTime(text?: string) {
    if (!text) return 4;
    const words = text.trim().split(/\s+/).length;
    return Math.max(3, Math.min(8, Math.ceil(words / 35) + 2));
}

export default function BlogGrid({ posts }: { posts: Post[] }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter((post) => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
            post.title?.toLowerCase().includes(query) ||
            post.excerpt?.toLowerCase().includes(query) ||
            post.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
            post.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
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
                    {/* Results Counter / Filter Bar */}
                    <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#e5dfd3]/70">
                        <p className="text-sm font-medium text-muted-foreground">
                            Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'guide' : 'guides'}
                            {searchQuery && (
                                <span> matching &ldquo;<span className="text-gold font-semibold">{searchQuery}</span>&rdquo;</span>
                            )}
                        </p>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-xs font-semibold text-[#8a6814] hover:underline"
                            >
                                Clear filter
                            </button>
                        )}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map(({ slug, date, title, excerpt, tags, keywords }) => {
                            const allKeywords = (tags && tags.length > 0) ? tags : (keywords || []);
                            const primaryTag = allKeywords[0] || "Business Guide";
                            const secondTag = allKeywords[1];
                            const showSecondTag = secondTag && (primaryTag.length + secondTag.length < 28);
                            const extraCount = allKeywords.length - (showSecondTag ? 2 : 1);
                            const formattedDate = formatDate(date);
                            const readingTime = getReadingTime(excerpt);

                            return (
                                <article
                                    key={slug}
                                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e5dfd3] bg-white text-card-foreground shadow-[0_4px_20px_-2px_rgba(22,39,61,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37] hover:shadow-[0_20px_35px_-8px_rgba(212,175,55,0.16),0_10px_20px_-5px_rgba(22,39,61,0.06)]"
                                >
                                    {/* Top Brand Accent Line */}
                                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent transition-all duration-500 group-hover:via-[#d4af37]" />

                                    {/* SEGMENT 1: Keywords / Category Shelf */}
                                    <div className="flex items-center justify-between gap-2 border-b border-[#f0ebe1] bg-[#faf8f5]/90 px-6 py-3.5">
                                        <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                                            <FaTag className="h-3 w-3 text-[#d4af37] shrink-0 mr-1" />
                                            <span className="inline-flex items-center rounded-md border border-[#d4af37]/25 bg-[#d4af37]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#8a6814] whitespace-nowrap truncate">
                                                {primaryTag}
                                            </span>
                                            {showSecondTag && (
                                                <span className="hidden sm:inline-flex items-center rounded-md border border-[#d4af37]/25 bg-[#d4af37]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#8a6814] whitespace-nowrap truncate">
                                                    {secondTag}
                                                </span>
                                            )}
                                            {extraCount > 0 && (
                                                <span className="rounded-md border border-border/40 bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground whitespace-nowrap shrink-0">
                                                    +{extraCount}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground shrink-0 pl-2">
                                            <FaClock className="h-2.5 w-2.5 text-[#d4af37]/80" />
                                            <span className="whitespace-nowrap">{readingTime} min</span>
                                        </div>
                                    </div>

                                    {/* SEGMENT 2 & 3: Title & Description Body */}
                                    <div className="flex flex-1 flex-col p-6">
                                        {/* Title */}
                                        <h2 className="text-xl font-display font-bold leading-snug text-[#0e1a2b] transition-colors duration-200 group-hover:text-[#96741d] line-clamp-2 min-h-[3.25rem]">
                                            <Link href={`/blog/${slug}`} className="focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {title}
                                            </Link>
                                        </h2>

                                        {/* Visual Segment Accent: gold rule that expands on hover */}
                                        <div className="my-3.5 h-[2px] w-8 rounded-full bg-[#d4af37]/40 transition-all duration-300 group-hover:w-16 group-hover:bg-[#d4af37]" />

                                        {/* Excerpt / Description */}
                                        <p className="flex-1 text-sm leading-relaxed text-[#5b6472] line-clamp-3">
                                            {excerpt}
                                        </p>
                                    </div>

                                    {/* SEGMENT 4: Read Blog / Footer Shelf */}
                                    <div className="mt-auto flex items-center justify-between border-t border-[#ede8df] bg-[#fbf9f5] px-6 py-4 text-xs">
                                        <div className="flex items-center gap-2 font-medium text-muted-foreground">
                                            <FaCalendar className="h-3 w-3 text-[#d4af37]" />
                                            <time dateTime={date}>{formattedDate}</time>
                                        </div>
                                        <div className="flex items-center gap-2 font-semibold text-[#8a6814] transition-colors group-hover:text-[#5a4209]">
                                            <span>Read Article</span>
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#8a6814] transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-[#0e1a2b]">
                                                <FaArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-xl text-muted-foreground">No posts found matching &ldquo;{searchQuery}&rdquo;.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
