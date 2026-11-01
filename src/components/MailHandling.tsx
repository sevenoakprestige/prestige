import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

export default function MailHandling() {
    const { t: allT, locale } = useTranslation();
    const t = allT.mailHandling;
    const isFr = locale === 'fr';
    const prefix = isFr ? '/fr' : '';

    const addressServices = isFr
        ? [
              [
                  "Siège social enregistré",
                  "Une adresse de siège social à Londres pour votre société, affichée sur le registre public. Inclus dans Prestige et Elite ; 59 £/an à partir de la deuxième année.",
                  `${prefix}/services/registered-office-service`,
              ],
              [
                  "Adresse de service du dirigeant",
                  "Une adresse distincte pour que votre adresse personnelle reste hors du registre public. Inclus dans Prestige et Elite ; 35 £/an à partir de la deuxième année.",
                  `${prefix}/services/director-service-address`,
              ],
              [
                  "Adresse commerciale virtuelle",
                  "Une adresse professionnelle au Royaume-Uni pour la correspondance de votre société. Inclus dans Elite ; 150 £/an à partir de la deuxième année.",
                  `${prefix}/services/virtual-business-address`,
              ],
          ]
        : [
              [
                  "Registered Office",
                  "A London registered office address for your company, shown on the public register. Included in Prestige and Elite; £59/year from year two.",
                  `${prefix}/services/registered-office-service`,
              ],
              [
                  "Director Service Address",
                  "A separate address so your home address stays off the public register. Included in Prestige and Elite; £35/year from year two.",
                  `${prefix}/services/director-service-address`,
              ],
              [
                  "Virtual Business Address",
                  "A UK business address for your company correspondence. Included in Elite; £150/year from year two.",
                  `${prefix}/services/virtual-business-address`,
              ],
          ];

    return (
        <section id="mail" className="border-t border-border px-6 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <p className="eyebrow">{isFr ? "Services d'adresse au Royaume-Uni" : "UK address services"}</p>
                    <div className="mt-4 h-px w-16 rule-gold" />
                    <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        {isFr
                            ? "Siège social britannique & adresse de service du dirigeant"
                            : "UK Registered Office & Director Service Address"}
                    </h2>
                    <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                        {isFr
                            ? "Gardez votre adresse personnelle hors du registre public, avec une présence londonienne pour votre société."
                            : "Keep your home address off the public register, with a London presence for your company."}
                    </p>
                    <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
                        {addressServices.map(([title, body, href]) => (
                            <Link
                                key={title}
                                href={href}
                                className="group bg-background p-7 transition-colors hover:bg-accent"
                            >
                                <span
                                    className="block h-px w-8 bg-gold/60 transition-all group-hover:w-14"
                                    aria-hidden="true"
                                />
                                <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                        <div>
                            <p className="eyebrow">{t.eyebrow}</p>
                            <div className="mt-4 h-px w-16 rule-gold" />
                        </div>
                        <h3 className="font-display mb-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {t.headline}
                        </h3>
                        <ol className="mt-12 divide-y divide-border border-t border-border">
                            {t.steps.map(([n, title, b]) => (
                                <li key={n} className="flex gap-8 py-7">
                                    <span className="font-display text-2xl text-gold">{n}</span>
                                    <div>
                                        <h4 className="text-base font-semibold">{title}</h4>
                                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{b}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-8 max-w-lg border-l-2 border-gold/60 pl-5 text-sm leading-relaxed text-foreground/85">
                            {t.body}
                        </p>
                        <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            {t.flow.map((f, i) => (
                                <li key={f} className="flex items-center gap-3">
                                    <span>{f}</span>
                                    {i < t.flow.length - 1 ? <span className="text-gold">→</span> : null}
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
            </div>
        </section>
    );
}
