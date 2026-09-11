"use client";

const SUPPORTED = [
    ["E-commerce & Amazon FBA", "International sellers needing a credible UK structure."],
    ["Consultants & Agencies", "Professional service businesses with international clients."],
    ["SaaS & Digital Businesses", "Technology companies requiring a UK entity."],
    ["International Founders", "Non-UK residents establishing a company remotely."],
    ["Import / Export", "Trading businesses moving goods through the UK."],
    ["International Expansion", "Established businesses opening a UK arm."],
];

const INCLUDED = [
    ["Company Incorporation", "Preparation and submission of your company incorporation to Companies House."],
    ["Company Documents", "Certificate of Incorporation, Memorandum & Articles, Share Certificate, Company Register."],
    ["Registered Office", "A prestigious London address for your company’s public record."],
    ["Director Service Address", "Keep your residential address off the public register."],
    ["Mail Scanning", "Official government mail scanned and emailed to you securely."],
    ["Digital Copies", "All corporate documents delivered digitally upon incorporation."],
    ["Compliance Review", "Manual review of your application before submission."],
    ["Named Adviser", "A dedicated contact for any questions during the process."],
];

export default function Services() {
    return (
        <>
            {/* Who we support */}
            <section className="section-parchment border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">Global founders</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="mt-6 max-w-xl text-3xl leading-tight sm:text-4xl">Who We Support</h2>
                    <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                        {SUPPORTED.map(([title, desc]) => (
                            <div key={title} className="surface flex flex-col p-6">
                                <h3 className="font-semibold text-foreground">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What is included */}
            <section className="border-t border-border px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div>
                        <p className="eyebrow">Comprehensive package</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="mt-6 max-w-xl text-3xl leading-tight sm:text-4xl">Everything Required to Operate</h2>
                    <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                        We do not strip out essential services to sell them back to you later. Our non-resident package
                        includes the registered addresses, documents and support you actually need to open an account and
                        trade.
                    </p>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {INCLUDED.map(([title, desc]) => (
                            <div key={title} className="border border-border p-6">
                                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
