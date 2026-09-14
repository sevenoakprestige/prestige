"use client";

import Link from "next/link";
import Image from "next/image";

export default function SuccessStories() {
    return (
        <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <figure>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-border">
                        <Image
                            src="/assets/case-study.webp"
                            alt="International founder working remotely from Thailand"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover"
                        />
                    </div>
                    <figcaption className="mt-3 text-xs text-muted-foreground">
                        A genuine Seven Oak international-founder case.
                    </figcaption>
                </figure>
                <div>
                    <div>
                        <p className="eyebrow">Client case study</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        Almataev — Forming a UK Company from Thailand
                    </h2>
                    <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                        Almataev, a Russian founder residing in Thailand, needed a compliant UK company structure for an
                        international digital business without travelling to the UK.
                    </p>
                    <dl className="mt-8 divide-y divide-border border-y border-border">
                        <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                            <dt className="text-sm font-semibold text-foreground">The challenge</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">
                                Complete onboarding from abroad, including review of the relevant Thailand residence evidence.
                            </dd>
                        </div>
                        <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                            <dt className="text-sm font-semibold text-foreground">Our support</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">
                                KYC and document review, structure preparation, Companies House submission, post-incorporation
                                guidance and banking-readiness support.
                            </dd>
                        </div>
                        <div className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                            <dt className="text-sm font-semibold text-foreground">The outcome</dt>
                            <dd className="text-sm leading-relaxed text-muted-foreground">
                                The UK company was incorporated in approximately two business days after the required information
                                and verification were complete.
                            </dd>
                        </div>
                    </dl>
                    <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                        This is a genuine client scenario. Timelines vary with document completeness, required checks and
                        Companies House processing.
                    </p>
                    <Link href="#pricing" className="btn-ghost mt-8 inline-flex">
                        Compare Packages
                    </Link>
                </div>
            </div>
        </section>
    );
}
