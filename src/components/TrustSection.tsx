"use client";

import { useTranslation } from "@/i18n/TranslationContext";

export default function TrustSection() {
    const { t } = useTranslation();

    return (
        <div className="section-parchment border-y border-border px-6">
            <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
                {t.trust.map(([title, body]) => (
                    <div
                        key={title}
                        className="border-border py-9 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0"
                    >
                        <dt className="text-sm font-semibold text-foreground">{title}</dt>
                        <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
