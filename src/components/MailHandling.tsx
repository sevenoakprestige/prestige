import Image from "next/image";

const MAIL_STEPS = [
    ["01", "Mail Arrives in London", "Eligible correspondence is received at the Seven Oak address."],
    ["02", "We Identify and Review It", "Mail is matched to your company and checked for relevance."],
    [
        "03",
        "Scanned & Transmitted Digitally",
        "Where included in your package, eligible mail is scanned and transmitted electronically.",
    ],
];

const MAIL_FLOW = ["Mail received in London", "Reviewed", "Eligible mail scanned", "Transmitted digitally"];

export default function MailHandling() {
    return (
        <section id="mail" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <div>
                        <p className="eyebrow">Address & correspondence</p>
                        <div className="mt-4 h-px w-16 rule-gold" />
                    </div>
                    <h2 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                        Your UK Mail, Accessible From Anywhere
                    </h2>
                    <ol className="mt-12 divide-y divide-border border-t border-border">
                        {MAIL_STEPS.map(([n, t, b]) => (
                            <li key={n} className="flex gap-8 py-7">
                                <span className="font-display text-2xl text-gold">{n}</span>
                                <div>
                                    <h3 className="text-base font-semibold">{t}</h3>
                                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{b}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <p className="mt-8 max-w-lg border-l-2 border-gold/60 pl-5 text-sm leading-relaxed text-foreground/85">
                        Where included in your package, eligible company correspondence received at your Seven Oak address
                        is identified and transmitted electronically according to the service scope. You do not need to
                        travel to London to monitor it.
                    </p>
                    <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {MAIL_FLOW.map((f, i) => (
                            <li key={f} className="flex items-center gap-3">
                                <span>{f}</span>
                                {i < MAIL_FLOW.length - 1 ? <span className="text-gold">→</span> : null}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-border">
                    <Image
                        src="/assets/mail-handling.webp"
                        alt="Company mail being scanned and processed at a London office desk"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
