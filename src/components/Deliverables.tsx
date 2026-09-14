import Image from "next/image";

const DELIVERABLES = [
    ["Certificate of Incorporation", "Issued by Companies House after successful incorporation."],
    ["Memorandum & Articles of Association", "Your company's constitutional documents."],
    ["Share Certificate", "Issued for the shareholder(s) according to the agreed allocation."],
    ["Company Register", "A structured record of ownership and key corporate information."],
    ["Company Number", "Issued on incorporation and shown on the public register."],
    ["UTR Support", "The Corporation Tax UTR is forwarded when received from HMRC."],
];

export default function Deliverables() {
    return (
        <section id="deliverables" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-border">
                        <Image
                            src="/assets/documents.webp"
                            alt="Incorporation certificate, company documents and a fountain pen on a desk"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div>
                            <p className="eyebrow">What you receive</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Your Company Documentation</h2>
                        <dl className="mt-10 divide-y divide-border border-t border-border">
                            {DELIVERABLES.map(([k, v]) => (
                                <div key={k} className="py-6">
                                    <dt className="text-sm font-semibold text-foreground">{k}</dt>
                                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
