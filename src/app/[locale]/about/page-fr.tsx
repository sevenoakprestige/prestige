"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

const WHATSAPP =
  "https://wa.me/447447488755?text=Bonjour%20Seven%20Oak%20Prestige%2C%20j'aimerais%20discuter%20de%20la%20cr%C3%A9ation%20de%20ma%20soci%C3%A9t%C3%A9%20au%20Royaume-Uni.";

const TRUST_ITEMS = [
  ["Société enregistrée au R-U", "Seven Oak Prestige Ltd · N° de société 16903092"],
  ["Siège social à Londres", "124 City Road, Londres EC1V 2NX"],
  ["Inscrit à l'ICO", "N° d'enregistrement ZC181349"],
  ["Soutien aux fondateurs internationaux", "Intégration à distance pour les clients étrangers éligibles"],
];

const LIMITS = [
  ["Approbation de la Companies House", "Les décisions finales d'incorporation appartiennent à la Companies House."],
  [
    "Approbation bancaire ou fintech",
    "Les banques, EMI et fournisseurs de paiement prennent leurs propres décisions en matière de KYC, d'éligibilité et de risques.",
  ],
  [
    "Résultats fiscaux, légaux ou réglementaires",
    "Ceux-ci dépendent de la situation du client et peuvent nécessiter l'évaluation d'un professionnel qualifié.",
  ],
  ["Résultats d'immigration", "La propriété d'une société au Royaume-Uni ne confère pas en soi de droits de résidence ou de travail."],
];

const AUDIENCES = [
  ["Fondateurs internationaux", "Créant leur première société à responsabilité limitée au Royaume-Uni tout en continuant à vivre à l'étranger."],
  ["Entreprises étrangères établies", "Créant une filiale ou une présence au Royaume-Uni dans le cadre d'une expansion internationale."],
  ["Entreprises d'e-commerce et numériques", "Ayant besoin d'une société, d'une infrastructure d'adresse et d'une préparation bancaire au Royaume-Uni."],
  [
    "Consultants, agences et entreprises technologiques",
    "Établissant une structure professionnelle au Royaume-Uni pour les affaires internationales.",
  ],
  [
    "Fondateurs aux profils plus complexes",
    "Où la résidence, la propriété ou la documentation nécessitent une préparation plus minutieuse avant de postuler.",
  ],
];

const DIFFERENTIATORS = [
  [
    "Révision humaine avant le dépôt",
    "Les détails de votre constitution sont examinés avant la soumission, ce qui aide à identifier les incohérences que les portails de formation automatisés pourraient manquer.",
  ],
  [
    "Conçu pour les fondateurs non-résidents",
    "Notre processus est conçu autour des documents étrangers, de l'intégration à distance, de la propriété internationale et des questions de préparation bancaire.",
  ],
  [
    "Tarification claire avant engagement",
    "Nos forfaits de création et nos frais de renouvellement d'adresse pour la deuxième année sont publiés à l'avance afin que vous puissiez comprendre l'engagement commercial avant d'acheter.",
  ],
  [
    "Préparation bancaire, pas de promesses",
    "Nous aidons les clients éligibles à se préparer et à postuler à des solutions bancaires ou fintech adaptées. Les décisions finales restent toujours à la discrétion du fournisseur.",
  ],
];

const PROCESS = [
  [
    "Comprendre l'entreprise proposée",
    "Nous établissons le profil du fondateur, l'activité de l'entreprise, la propriété et les services requis.",
  ],
  [
    "Sélectionner la configuration appropriée",
    "Vous choisissez le forfait de création et tous les services supplémentaires pertinents pour votre cas.",
  ],
  [
    "Compléter l'intégration sécurisée",
    "L'identité, l'adresse et les informations de l'entreprise sont collectées via le processus d'intégration et de vérification approprié.",
  ],
  ["Révision par un conseiller", "Nous examinons les informations et résolvons les incohérences matérielles avant le dépôt."],
  [
    "Constitution",
    "Une fois les vérifications requises terminées, la demande est préparée et soumise à la Companies House.",
  ],
  [
    "Soutien post-constitution",
    "Selon votre forfait et vos exigences, nous pouvons vous aider avec les services d'adresse, la documentation, la préparation bancaire et d'autres services convenus.",
  ],
];

const REVIEWS = [
  {
    name: "Vbvvb Bbjbb",
    text: "J'ai eu une excellente expérience en travaillant avec cette société pour l'enregistrement de mon entreprise au Royaume-Uni. L'ensemble du processus a été fluide, professionnel et bien organisé. Leur équipe a toujours été réactive, a répondu clairement à mes questions et m'a tenu informé à chaque étape. Tout a été réalisé à temps, exactement comme promis.",
  },
  {
    name: "Safaat Siddhi",
    text: "Le service a été efficace, transparent et livré comme promis.",
  },
  {
    name: "albalushi Mazan",
    text: "Je suis heureux de partager mon excellente expérience avec cette entreprise, où j'ai pu constater un niveau élevé de professionnalisme et de dévouement. D'après ce que j'ai observé, l'équipe est composée d'employés travailleurs avec un fort sens des responsabilités et de l'engagement. Je leur adresse mes sincères remerciements et mon appréciation pour leurs efforts et leur dévouement continu.",
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=seven+oak+prestige+reviews";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{children}</p>
      <div className="mt-4 h-px w-16 rule-gold" />
    </div>
  );
}

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{children}</h2>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="Noté 5 sur 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.47 5.27 5.53.72-4.06 3.9 1.03 5.61L10 14.35 5.03 17l1.03-5.61L2 7.49l5.53-.72L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function AboutPageFr() {
  return (
    <div className="bg-background">
      <main>
        <section className="section-dark border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-0 pt-20 sm:pt-28">
            <div className="grid gap-12 pb-16 lg:grid-cols-[1.18fr_0.82fr] lg:items-end lg:pb-24">
              <div>
                <Eyebrow>À propos de Seven Oak Prestige</Eyebrow>
                <h1 className="mt-8 max-w-4xl text-4xl leading-[1.06] sm:text-5xl lg:text-[4rem]">
                  Création d'entreprises au Royaume-Uni conçue pour les fondateurs internationaux
                </h1>
              </div>
              <div className="border-l border-border pl-6 sm:pl-8">
                <p className="text-base leading-relaxed text-foreground/90">
                  Seven Oak Prestige Ltd aide les entrepreneurs internationaux à établir et à maintenir des entreprises au Royaume-Uni avec des conseils clairs, une intégration sécurisée et un soutien pratique au-delà de la constitution.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  De la création d'entreprise et des services d'adresse au Royaume-Uni à la conformité avec la Companies House et à la préparation bancaire, nous vous aidons à comprendre ce qui est requis, ce qui se passe ensuite et où l'approbation de tiers s'applique toujours.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={WHATSAPP} className="btn-gold w-full sm:w-auto">Discutez de votre installation au R-U sur WhatsApp</a>
                  <Link href="/fr/#pricing" className="btn-ghost w-full sm:w-auto">Voir les forfaits de création</Link>
                </div>
              </div>
            </div>

            <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
              {TRUST_ITEMS.map(([title, detail], index) => (
                <div key={title} className="relative border-b border-border py-7 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <span className="absolute left-0 top-0 h-px w-10 bg-gold" aria-hidden="true" />
                  <p className="text-xs font-semibold text-foreground">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>
                  <span className="sr-only">Élément vérifié {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-parchment border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="La transparence compte">Ce que nous ne vous promettrons jamais</SectionHeading>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Un conseiller professionnel doit vous dire où s'arrête sa responsabilité.
            </p>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {LIMITS.map(([title, detail]) => (
                <article key={title} className="bg-background p-7 sm:p-8">
                  <div className="h-0.5 w-8 bg-gold" />
                  <h3 className="mt-6 text-lg leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-gold bg-primary px-7 py-8 font-display text-xl leading-snug text-primary-foreground sm:px-10 sm:py-10 sm:text-2xl">
              « Notre engagement n'est pas de promettre chaque résultat. Il s'agit de préparer votre dossier de manière professionnelle, de communiquer clairement et de vous dire quand l'avis d'un spécialiste est requis. »
            </blockquote>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading eyebrow="Pourquoi Seven Oak existe">La constitution est le début, pas l'installation complète</SectionHeading>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:pt-12">
              <p className="font-display text-2xl leading-snug text-foreground">
                Enregistrer une société au Royaume-Uni peut être simple. Construire une structure qui soit utilisable par la suite est l'aspect où les fondateurs internationaux ont souvent besoin de plus de soutien.
              </p>
              <p>La vérification d'identité, une adresse appropriée au Royaume-Uni, la correspondance avec la Companies House, l'éligibilité bancaire, les enregistrements fiscaux et la conformité continue peuvent tous devenir importants après la création.</p>
              <p>Seven Oak Prestige a été conçu pour aider les fondateurs à comprendre non seulement comment enregistrer une société au Royaume-Uni, mais aussi ce qui doit se passer ensuite.</p>
              <p className="border-t border-border pt-5 font-medium text-foreground">Nous ne croyons pas au fait de vendre une constitution et de laisser le fondateur se débrouiller seul pour le reste.</p>
            </div>
          </div>
        </section>

        <section className="section-parchment border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Qui nous soutenons">Conçu pour les chefs d'entreprise internationaux</SectionHeading>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Seven Oak Prestige soutient les entrepreneurs et les entreprises étrangères établissant une véritable société au Royaume-Uni à des fins commerciales.
            </p>
            <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
              {AUDIENCES.map(([title, detail], index) => (
                <article key={title} className="min-h-64 bg-background p-7 transition-colors duration-300 hover:bg-accent">
                  <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-10 text-lg leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-4xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted-foreground">
              Chaque cas est évalué selon ses faits réels. La résidence, la nationalité, l'activité de l'entreprise, la propriété et la documentation peuvent affecter les services et les fournisseurs disponibles.
            </p>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Plus qu'un simple formulaire en ligne">Une manière plus réfléchie d'établir votre société au Royaume-Uni</SectionHeading>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {DIFFERENTIATORS.map(([title, detail], index) => (
                <article key={title} className="grid gap-5 py-8 sm:grid-cols-[5rem_0.75fr_1.25fr] sm:items-start sm:gap-8">
                  <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl leading-snug">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {detail}{" "}
                    {index === 2 && <Link href="/fr/#pricing" className="font-semibold text-gold-soft underline decoration-gold/40 underline-offset-4">Voir les forfaits de création.</Link>}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeading eyebrow="Dirigé par les fondateurs">Un soutien humain, pas un portail anonyme</SectionHeading>
            <div className="lg:border-l lg:border-border lg:pl-12">
              <p className="font-display text-2xl leading-snug text-foreground">
                Seven Oak Prestige fonctionne avec une approche pratique dirigée par les fondateurs plutôt que comme une plateforme de création automatisée anonyme.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">Nos clients reçoivent des conseils directs tout au long de l'intégration, de la création et des services post-constitution convenus.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Là où nous pouvons aider directement, nous le faisons.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Lorsqu'une question nécessite une expertise comptable, juridique, fiscale ou d'immigration spécialisée, nous faisons clairement cette distinction plutôt que de prétendre qu'un seul fournisseur peut légitimement tout faire.</p>
              <a href={WHATSAPP} className="btn-gold mt-9 w-full sm:w-auto">Demandez à notre équipe pour votre installation</a>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Comment nous travaillons">Un processus clair de la demande à la constitution</SectionHeading>
            <div className="relative mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map(([title, detail], index) => (
                <article key={title} className="relative bg-background p-8">
                  <span className="absolute left-0 top-0 h-px w-full bg-gold/50" aria-hidden="true" />
                  <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-7 text-xl leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-24 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
              <div>
                <Eyebrow>Expérience client</Eyebrow>
                <h3 className="mt-6 text-3xl sm:text-4xl">Dans leurs propres mots</h3>
              </div>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors hover:text-gold">
                <GoogleMark /> Voir nos avis Google
              </a>
            </div>
            <div className="grid gap-px bg-border lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <a key={review.name} href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="flex min-h-72 flex-col bg-background p-8 transition-colors duration-300 hover:bg-accent">
                  <div className="flex items-center justify-between"><Stars /><GoogleMark /></div>
                  <blockquote className="mt-7 flex-1 font-display text-lg leading-snug text-foreground/90">« {review.text} »</blockquote>
                  <p className="mt-8 border-t border-border pt-5 text-xs font-semibold text-foreground">{review.name} <span className="font-normal text-muted-foreground">· Avis Google</span></p>
                </a>
              ))}
            </div>

            <div className="section-parchment mt-24 grid gap-10 border border-border p-8 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-14">
              <div>
                <Eyebrow>Un cas réel de fondateur international</Eyebrow>
                <h3 className="mt-6 text-3xl leading-tight">Création d'entreprise au R-U depuis l'étranger</h3>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {[
                  ["Situation", "Un fondateur international résidant à l'étranger avait besoin d'une société au Royaume-Uni pour une entreprise numérique sans se déplacer au Royaume-Uni."],
                  ["Défi", "Intégration à distance, révision de la documentation de résidence étrangère et préparation d'une structure d'entreprise cohérente."],
                  ["Notre rôle", "Soutien KYC et documentaire, structure de l'entreprise, soumission à la Companies House et préparation bancaire post-constitution."],
                  ["Résultat", "La société a été constituée avec succès une fois que les informations et vérifications requises ont été complétées."],
                ].map(([label, detail]) => (
                  <div key={label} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                    <p className="text-xs font-semibold uppercase text-gold-soft">{label}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                ))}
                <p className="py-5 text-xs leading-relaxed text-muted-foreground">Les circonstances individuelles et les délais de traitement varient. La Companies House et les fournisseurs tiers conservent leurs propres responsabilités d'approbation et de traitement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-end">
              <div>
                <Eyebrow>Prêts quand vous l'êtes</Eyebrow>
                <h2 className="mt-7 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">Commencez avec une configuration de société au R-U que vous comprenez</h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">Que vous formiez votre première société au Royaume-Uni ou que vous établissiez une présence au Royaume-Uni pour une entreprise étrangère existante, nous pouvons vous aider à comprendre le processus, à sélectionner les services appropriés et à terminer la configuration à distance.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                <a href={WHATSAPP} className="btn-gold w-full sm:w-auto">Discutez de votre installation au R-U sur WhatsApp</a>
                <Link href="/fr/#pricing" className="btn-ghost w-full sm:w-auto">Comparer les forfaits de création</Link>
              </div>
            </div>
            <ul className="mt-14 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Aucun voyage au Royaume-Uni requis pour les constitutions éligibles standard",
                "Dépôt à la Companies House inclus dans chaque forfait de création",
                "Tarification claire de l'adresse pour la deuxième année",
                "Soutien humain tout au long de l'intégration",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border py-5 text-sm text-foreground/90 sm:px-5 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
