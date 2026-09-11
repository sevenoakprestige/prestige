"use client";

const TRUST_STRIP = [
    ["UK-Registered Provider", "Seven Oak Prestige Ltd — Company No. 16903092"],
    ["KYC & Due Diligence", "KYC and due-diligence procedures for international founders"],
    ["Secure Data Handling", "Client information handled securely and confidentially"],
    ["Transparent Pricing", "Package scope and renewal costs shown clearly before purchase"],
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
