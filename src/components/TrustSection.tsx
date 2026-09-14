"use client";

const TRUST_STRIP = [
    ["UK-Registered Provider", "Seven Oak Prestige Ltd — verify us at Companies House, No. 16903092"],
    ["A Real Adviser, Not a Form", "One named London adviser checks your file before it is filed"],
    ["5.0 / 5 on Google", "The highest possible rating, backed by genuine client feedback"],
    ["One Price, Shown Up Front", "Government filing fee included; renewal prices shown before you pay"],
];

export default function TrustSection() {
    return (
        <div className="section-parchment border-y border-border px-6">
            <dl className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
                {TRUST_STRIP.map(([t, b]) => (
                    <div
                        key={t}
                        className="border-border py-9 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0"
                    >
                        <dt className="text-sm font-semibold text-foreground">{t}</dt>
                        <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{b}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
