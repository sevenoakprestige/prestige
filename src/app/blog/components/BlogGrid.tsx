"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    FaCalendar,
    FaArrowRight,
    FaSearch,
    FaArrowLeft,
    FaTag,
    FaClock,
    FaTimes,
    FaLayerGroup
} from "react-icons/fa";

export type Post = {
    _id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags?: string[];
    keywords?: string[];
    category?: string;
};

export const DEFAULT_CATEGORIES = [
    "Company Formation",
    "Banking & Payments",
    "Tax & Accounting",
    "Compliance & Legal",
    "Subsidiaries & Expansion",
    "Guides en Français",
] as const;

export const BLOG_CATEGORIES = [
    "All",
    ...DEFAULT_CATEGORIES,
] as const;

export function getPostCategory(post: Post): string {
    if (post.category && post.category.trim()) {
        return post.category;
    }
    const title = (post.title || "").toLowerCase();
    const slug = (post.slug || "").toLowerCase();

    // 1. Guides en Français: French language titles / slugs
    const frenchTerms = [
        "en france", "depuis la france", "français", "francais", "sasu",
        "fiscalité", "fiscalite", "société", "societe", "compte bancaire",
        "angleterre", "dividendes", "tva uk", "adresse uk ltd", "prix et coûts",
        "créer", "creer"
    ];
    if (frenchTerms.some(term => title.includes(term) || slug.includes(term))) {
        return "Guides en Français";
    }

    // 2. Banking & Payments: focused on bank accounts, EMI, payment processors
    const bankingTerms = [
        "bank", "banking", "wise", "stripe", "paypal", "revolut",
        "payoneer", "payment provider", "payment gateway", "merchant account",
        "airwallex", "emi", "fintech account", "tiktok shop"
    ];
    if (bankingTerms.some(term => title.includes(term) || slug.includes(term))) {
        return "Banking & Payments";
    }

    // 3. Tax & Accounting: corporation tax, accounting, VAT, HMRC, UTR, tax treaties
    const taxTerms = [
        "tax", "corporation tax", "ct600", "vat", "accounting", "accountant",
        "utr", "tin & crn", "tin, utr", "hmrc", "dtaa", "poem", "tax residence",
        "tax residency", "double tax", "dormant"
    ];
    if (taxTerms.some(term => title.includes(term) || slug.includes(term))) {
        return "Tax & Accounting";
    }

    // 4. Compliance & Legal: ID verification, strike off, closure, confirmation statement, PSC, apostille
    const complianceTerms = [
        "identity verification", "id verification", "companies house id",
        "close a uk company", "strike-off", "strike off", "dissolution",
        "closing a uk company", "confirmation statement", "psc register",
        "authentication code", "apostille", "notarisation", "director duties",
        "share capital", "sic code", "compliance"
    ];
    if (complianceTerms.some(term => title.includes(term) || slug.includes(term))) {
        return "Compliance & Legal";
    }

    // 5. Subsidiaries & Expansion: specific overseas corporate expansion / parent-sub / sponsor licence / FEMA
    const expansionTerms = [
        "subsidiary", "branch office", "sponsor licence", "expansion worker",
        "fema & rbi", "fema", "overseas direct investment", "odi rules",
        "pharma & medtech"
    ];
    if (expansionTerms.some(term => title.includes(term) || slug.includes(term))) {
        return "Subsidiaries & Expansion";
    }

    // 6. Company Formation (all incorporation, setup, cost, comparison, country guides)
    return "Company Formation";
}

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
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Dynamic list of categories from posts + defaults
    const availableCategories = useMemo(() => {
        const set = new Set<string>(["All", ...DEFAULT_CATEGORIES]);
        posts.forEach((post) => {
            const cat = getPostCategory(post);
            if (cat) set.add(cat);
        });
        return Array.from(set);
    }, [posts]);

    // Precalculate counts per category
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: posts.length };
        availableCategories.forEach((cat) => {
            if (cat !== "All") counts[cat] = 0;
        });
        posts.forEach((post) => {
            const cat = getPostCategory(post);
            counts[cat] = (counts[cat] || 0) + 1;
        });
        return counts;
    }, [posts, availableCategories]);

    // Filter posts by category AND search query
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const cat = getPostCategory(post);
            if (selectedCategory !== "All" && cat !== selectedCategory) {
                return false;
            }
            if (!searchQuery.trim()) return true;
            const query = searchQuery.toLowerCase().trim();
            return (
                post.title?.toLowerCase().includes(query) ||
                post.excerpt?.toLowerCase().includes(query) ||
                cat.toLowerCase().includes(query) ||
                post.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
                post.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
            );
        });
    }, [posts, selectedCategory, searchQuery]);

    const isFiltered = selectedCategory !== "All" || Boolean(searchQuery.trim());

    const handleClearAll = () => {
        setSelectedCategory("All");
        setSearchQuery("");
    };

    return (
        <>
            {/* Header Section */}
            <section className="section-dark relative px-4 py-16 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-gold/30 bg-gold/10 text-xs font-semibold tracking-wider text-gold uppercase">
                            <FaLayerGroup className="h-3 w-3" />
                            Knowledge Base & Editorial
                        </div>
                        <h1 className="mb-6 text-4xl font-display font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            UK Company Formation <span className="text-gold">Insights</span> & Business Guides
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Expert guides on UK company formation, fintech banking, international taxation, and global corporate expansion.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mx-auto max-w-2xl relative mb-8">
                        <div className="relative flex items-center w-full h-14 rounded-full border border-border/50 bg-card/60 backdrop-blur-md shadow-sm focus-within:ring-2 focus-within:ring-gold/50 focus-within:border-gold/50 overflow-hidden transition-all">
                            <div className="grid place-items-center h-full w-12 text-muted-foreground shrink-0">
                                <FaSearch className="h-4 w-4" />
                            </div>
                            <input
                                className="peer h-full w-full outline-none text-sm bg-transparent text-foreground placeholder:text-muted-foreground/70 pr-3"
                                type="text"
                                id="search"
                                placeholder={
                                    selectedCategory === "All"
                                        ? "Search across all guides, topics, or keywords..."
                                        : `Search in ${selectedCategory}...`
                                }
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                    aria-label="Clear search query"
                                >
                                    <FaTimes className="h-3 w-3" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
                        {availableCategories.map((category) => {
                            const isSelected = selectedCategory === category;
                            const count = categoryCounts[category] || 0;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setSelectedCategory(category)}
                                    className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                                        isSelected
                                            ? "bg-gradient-to-r from-[#d4af37] to-[#e7cd70] text-[#0e1a2b] shadow-[0_4px_16px_rgba(212,175,55,0.32)] scale-[1.03] border border-[#e5c967]"
                                            : "bg-[#142337]/80 text-[#9ba8b8] hover:text-white hover:border-[#d4af37]/50 hover:bg-[#1a2f4a] border border-border/40"
                                    }`}
                                >
                                    <span>{category}</span>
                                    <span
                                        className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                                            isSelected
                                                ? "bg-[#0e1a2b]/20 text-[#0e1a2b]"
                                                : "bg-white/10 text-[#8596a8] group-hover:bg-white/20 group-hover:text-white"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Parchment Grid Section */}
            <section className="section-parchment px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Results Counter / Filter Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-3.5 border-b border-[#e5dfd3]/80">
                        <div className="text-sm font-medium text-muted-foreground">
                            Showing <span className="font-bold text-foreground">{filteredPosts.length}</span> {filteredPosts.length === 1 ? "guide" : "guides"}
                            {selectedCategory !== "All" && (
                                <span> in <span className="font-semibold text-[#8a6814]">{selectedCategory}</span></span>
                            )}
                            {searchQuery && (
                                <span> matching &ldquo;<span className="text-[#8a6814] font-semibold">{searchQuery}</span>&rdquo;</span>
                            )}
                        </div>
                        {isFiltered && (
                            <button
                                onClick={handleClearAll}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a6814] hover:text-[#5a4209] hover:underline cursor-pointer"
                            >
                                <FaTimes className="h-3 w-3" />
                                Clear all filters
                            </button>
                        )}
                    </div>

                    {/* Cards Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post) => {
                                const { slug, date, title, excerpt, tags, keywords } = post;
                                const category = getPostCategory(post);
                                const rawKeywords = (tags && tags.length > 0) ? tags : (keywords || []);
                                const allKeywords = rawKeywords.map((k) => k.trim()).filter(Boolean);
                                const primaryTag = allKeywords[0];
                                const extraKeywords = allKeywords.slice(1);
                                const extraCount = extraKeywords.length;
                                const formattedDate = formatDate(date);
                                const readingTime = getReadingTime(excerpt);

                                return (
                                    <article
                                        key={slug}
                                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e5dfd3] bg-white text-card-foreground shadow-[0_4px_20px_-2px_rgba(22,39,61,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d4af37] hover:shadow-[0_20px_35px_-8px_rgba(212,175,55,0.16),0_10px_20px_-5px_rgba(22,39,61,0.06)]"
                                    >
                                        {/* Top Brand Accent Line */}
                                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent transition-all duration-500 group-hover:via-[#d4af37]" />

                                        {/* SEGMENT 1: Category Shelf, Keywords & Reading Time */}
                                        <div className="flex items-center justify-between gap-2 border-b border-[#f0ebe1] bg-[#faf8f5]/90 px-6 py-3.5">
                                            <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                                                {/* Category Badge */}
                                                <button
                                                    type="button"
                                                    title={`Filter by ${category}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setSelectedCategory(category);
                                                    }}
                                                    className="relative z-10 inline-flex items-center gap-1 rounded-md border border-[#d4af37]/35 bg-[#d4af37]/15 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8a6814] hover:bg-[#d4af37]/25 hover:border-[#d4af37]/60 transition-colors shrink-0 cursor-pointer"
                                                >
                                                    <FaTag className="h-2 w-2 text-[#d4af37] shrink-0" />
                                                    <span className="truncate max-w-[110px] sm:max-w-[130px]">{category}</span>
                                                </button>

                                                {/* Primary Keyword Badge */}
                                                {primaryTag && (
                                                    <span
                                                        title={primaryTag}
                                                        className="inline-flex items-center rounded-md border border-[#e2dcd2] bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 whitespace-nowrap truncate max-w-[110px] sm:max-w-[130px]"
                                                    >
                                                        {primaryTag}
                                                    </span>
                                                )}

                                                {/* Extra Keywords Counter (+4, +6) */}
                                                {extraCount > 0 && (
                                                    <span
                                                        title={extraKeywords.join(", ")}
                                                        className="inline-flex items-center rounded-md border border-border/40 bg-muted/60 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-muted-foreground whitespace-nowrap shrink-0"
                                                    >
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
                    ) : (
                        /* Empty State */
                        <div className="py-20 text-center max-w-md mx-auto">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#8a6814] border border-[#d4af37]/30">
                                <FaSearch className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-display font-bold text-[#0e1a2b] mb-2">
                                No matching guides found
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                We couldn&rsquo;t find any guides
                                {searchQuery ? <span> matching &ldquo;<span className="text-[#8a6814] font-medium">{searchQuery}</span>&rdquo;</span> : null}
                                {selectedCategory !== "All" ? <span> in <span className="font-medium text-foreground">{selectedCategory}</span></span> : null}.
                                Try adjusting your keywords or clearing the category filter.
                            </p>
                            <button
                                type="button"
                                onClick={handleClearAll}
                                className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-2.5 text-xs font-bold text-[#0e1a2b] shadow-md transition-all hover:bg-[#c29d2b] cursor-pointer"
                            >
                                <FaTimes className="h-3 w-3" />
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
