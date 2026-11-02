"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.sevenoakprestige.com/fr/services/companies-house-verification";
export const PRICE = "74 £";
export const CHECKOUT = "https://buy.stripe.com/bJe8wHbwY5nv8gde3Ofw40h";
const WHATSAPP =
  "https://wa.me/447447488755?text=Bonjour%20Seven%20Oak%20Prestige%2C%20je%20souhaiterais%20me%20renseigner%20sur%20la%20v%C3%A9rification%20d%27identit%C3%A9%20Companies%20House%20et%20mon%20code%20personnel.";
const GOV_VERIFY = "https://www.gov.uk/guidance/verify-your-identity-for-companies-house";
const GOV_AUTH_CODE = "https://www.gov.uk/guidance/company-authentication-codes-for-online-filing";

export const H1 = "Vérification d’Identité Companies House & Assistance Code Personnel";
export const DESCRIPTION =
  "Besoin d’un code personnel Companies House ? Assistance à la vérification d’identité pour les dirigeants UK, bénéficiaires effectifs (PSC) et non-résidents. Accompagnement guidé pour 74 £.";
export const TIMING =
  "Dans les cas standards, le code personnel est généralement disponible sous un jour ouvrable une fois tous les contrôles requis effectués et approuvés, sous réserve des délais de traitement de Companies House ou du prestataire autorisé et en l’absence de vérifications complémentaires.";

export const STEPS = [
  [
    "01",
    `Régler ${PRICE}`,
    "Commandez via notre paiement sécurisé. Nous procédons ensuite à une courte revue d’éligibilité et de conformité.",
  ],
  [
    "02",
    "Fournir vos documents",
    "Un passeport en cours de validité et un justificatif de domicile récent à votre nom, émis au cours des trois derniers mois.",
  ],
  [
    "03",
    "Compléter la vérification via l’application sécurisée",
    "Une fois vos documents acceptés, nous vous envoyons un lien sécurisé pour effectuer la vérification à distance dans l’application dédiée.",
  ],
  [
    "04",
    "Validation et réception de votre code",
    "Nous examinons le résultat et aidons à résoudre toute difficulté éventuelle. Après approbation, votre code personnel est mis à disposition via la procédure autorisée.",
  ],
] as const;

const WHO_MUST = [
  [
    "Dirigeants (Directors)",
    "Les nouveaux dirigeants vérifient leur identité lors de la constitution de la société ou de leur nomination. Les dirigeants en poste le font selon le calendrier de transition de Companies House, généralement lié à la déclaration de confirmation (Confirmation Statement) de la société.",
  ],
  [
    "Personnes ayant un contrôle significatif (PSC)",
    "Les bénéficiaires effectifs (PSC) personnes physiques vérifient leur identité et communiquent leur code personnel dans le délai fixé par Companies House pour leur fonction.",
  ],
  [
    "Autres personnes déposant auprès de Companies House",
    "Certaines personnes effectuant des dépôts pour le compte de sociétés sont soumises à leurs propres obligations de vérification. Consultez les directives officielles correspondant à votre rôle.",
  ],
] as const;

const AUDIENCES = [
  "Dirigeants et PSC préférant un accompagnement guidé plutôt que d’effectuer la démarche seuls",
  "Non-résidents britanniques et dirigeants de sociétés UK résidant à l’étranger",
  "Fondateurs créant une nouvelle société au Royaume-Uni ayant besoin d’un code personnel",
  "Demandeurs souhaitant clarifier quelle procédure de vérification s’applique à leur situation",
] as const;

const INCLUDES = [
  "Revue d’éligibilité et de conformité",
  "Vérification préalable de votre passeport et de votre justificatif de domicile",
  "Lien sécurisé vers l’application de vérification d’identité",
  "Aide à la résolution des blocages éventuels lors de la vérification",
  "Conseils sur l’utilisation de votre code personnel pour chaque fonction",
  "Accompagnement par un conseiller par e-mail et WhatsApp (aucun envoi de documents sur WhatsApp)",
] as const;

const EXCLUDES = [
  "Frais gouvernementaux ou de Companies House (la vérification directe sur GOV.UK est gratuite)",
  "Vérification pour des personnes supplémentaires — chaque personne fait l’objet d’une prestation distincte",
  "Création de société, dépôts statutaires ou déclarations de confirmation (Confirmation Statements)",
  "Toute garantie de réussite de la vérification",
] as const;

export const FAQS = [
  [
    "Comment obtenir mon code personnel Companies House ?",
    "Vous obtenez un code personnel une fois votre identité vérifiée, soit directement et gratuitement via GOV.UK One Login, soit via une voie autorisée. Avec notre service assisté, nous vérifions vos documents, vous transmettons un lien sécurisé et vous accompagnons jusqu’à l’approbation.",
  ],
  [
    "De quels documents ai-je besoin pour le service assisté de Seven Oak ?",
    "Pour ce service, vous avez besoin d’un passeport en cours de validité et d’un justificatif de domicile résidentiel à votre nom datant de moins de trois mois. D’autres voies de vérification peuvent accepter des pièces différentes ; ces critères s’appliquent à notre service assisté.",
  ],
  [
    "Puis-je vérifier mon identité depuis l’extérieur du Royaume-Uni ?",
    "Oui. La vérification s’effectue intégralement à distance ; les dirigeants et PSC résidant à l’étranger peuvent donc généralement accomplir la démarche depuis leur pays, sous réserve de l’acceptation des pièces et des contrôles appliqués.",
  ],
  ["Quel est le délai après une vérification approuvée ?", TIMING],
  [
    "Combien coûte ce service ?",
    `Notre service assisté coûte ${PRICE} par personne. Il s’agit des honoraires de service de Seven Oak et non d’une taxe gouvernementale.`,
  ],
  [
    "La vérification directe sur GOV.UK est-elle gratuite ?",
    "Oui. Vous pouvez vérifier votre identité directement auprès de Companies House via GOV.UK One Login sans frais. Notre assistance payante est facultative et s’adresse aux personnes souhaitant un accompagnement guidé.",
  ],
  [
    "Les dirigeants et les PSC ont-ils besoin de codes personnels distincts ?",
    "Chaque personne physique possède un code personnel unique. Si une même personne est à la fois dirigeant (director) et bénéficiaire effectif (PSC), elle utilise le même code personnel pour les deux rôles ; elle n’a pas besoin d’un second code.",
  ],
  [
    "Un même code personnel peut-il servir pour plusieurs sociétés ?",
    "Oui. Le code est rattaché à la personne et non à la société : il est donc réutilisé pour l’ensemble des mandats et sociétés de cette personne. Il est distinct du code d’authentification de la société (Company Authentication Code).",
  ],
  [
    "Que se passe-t-il si la vérification dans l’application échoue ?",
    "Nous vous expliquons la cause du refus et ce qui est nécessaire, comme un document plus net ou un nouvel essai. La vérification ne peut aboutir tant que les contrôles requis ne sont pas satisfaits, et son succès ne peut être garanti.",
  ],
  [
    "Quelle est la différence entre la vérification d’identité et le KYC ?",
    "Nos contrôles KYC et de lutte contre le blanchiment (AML) correspondent à nos propres vérifications d’entrée en relation en tant que prestataire. La vérification d’identité Companies House est une obligation légale distincte pour les dirigeants et PSC, permettant d’obtenir un code personnel.",
  ],
  [
    "Que faire si je possède déjà un code personnel ?",
    "Vous n’avez pas besoin de vérifier votre identité une nouvelle fois. Conservez précieusement votre code et utilisez-le chaque fois que Companies House vous demande de confirmer votre identité vérifiée.",
  ],
  [
    "Quand dois-je fournir mon code personnel ?",
    "Les nouveaux dirigeants le fournissent lors de la constitution de la société ou de leur nomination. Les dirigeants et PSC existants le communiquent dans le délai fixé par Companies House, qui est souvent rattaché à la prochaine déclaration de confirmation (Confirmation Statement). Ne publiez jamais votre code publiquement.",
  ],
] as const;

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow">{children}</p>
      <div className="mt-4 h-px w-16 rule-gold" />
    </div>
  );
}

function StepIcon({ index }: { index: number }) {
  const paths = [
    <path key="0" d="M4 8h16v10H4zM4 11h16M7 15h4" />,
    <path key="1" d="M7 4h7l4 4v12H7zM14 4v4h4M10 12h5M10 15h5" />,
    <path
      key="2"
      d="M8 3h8v18H8zM11 18h2M10 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9.5 13c.6-1.3 4.4-1.3 5 0"
    />,
    <path key="3" d="M5 12l4 4 10-10" />,
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index]}
    </svg>
  );
}

function Timeline() {
  return (
    <ol
      className="relative mt-12 grid gap-0 md:grid-cols-4"
      aria-label="Comment fonctionne le service assisté"
    >
      <div
        className="absolute left-[1.45rem] top-6 bottom-6 w-px bg-border md:left-6 md:right-6 md:top-[1.45rem] md:bottom-auto md:h-px md:w-auto"
        aria-hidden="true"
      />
      {STEPS.map(([number, title, body], i) => (
        <li key={number} className="relative flex gap-5 pb-10 md:block md:pb-0 md:pr-6">
          <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-gold bg-background text-gold">
            <StepIcon index={i} />
          </span>
          <div className="md:mt-6">
            <p className="font-display text-sm text-gold">Étape {number}</p>
            <h3 className="mt-1 font-sans text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

const linkCls = "text-gold-soft underline-offset-4 hover:underline hover:text-gold transition-colors";

export default function CompaniesHouseVerificationPageFr() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.sevenoakprestige.com/fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Vérification d’identité Companies House",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Assistance à la vérification d’identité Companies House",
        serviceType: "Identity verification assistance",
        description: DESCRIPTION,
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          name: "Seven Oak Prestige Ltd",
          identifier: "16903092",
        },
        areaServed: "Worldwide",
        offers: {
          "@type": "Offer",
          price: "74",
          priceCurrency: "GBP",
          url: CHECKOUT,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* ── HERO SECTION ── */}
        <section className="section-dark border-b border-border px-6 pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">Pour les dirigeants, PSC et non-résidents UK</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="mt-7 max-w-3xl font-display text-[2.1rem] font-bold leading-[1.1] text-foreground sm:text-5xl">
                {H1}
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed text-foreground/90">
                Un accompagnement guidé pour vérifier votre identité auprès de Companies House et
                obtenir votre code personnel — comprenant la revue de vos documents, un lien de
                vérification sécurisé et le suivi d’un conseiller jusqu’à l’approbation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center"
                >
                  Obtenir l’Assistance Vérification — {PRICE}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center justify-center"
                >
                  Poser une question
                </a>
              </div>
              <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Seven Oak Prestige est une société privée indépendante, distincte de Companies House
                et de tout organisme gouvernemental. {PRICE} correspond à nos honoraires de service
                et non à des frais publics. Vous pouvez également{" "}
                <a href={GOV_VERIFY} target="_blank" rel="noreferrer" className={linkCls}>
                  vérifier votre identité directement et gratuitement sur GOV.UK
                </a>
                .
              </p>
            </div>

            <aside
              className="border border-border bg-ink p-7 sm:p-9"
              aria-label="Tarif du service et délais"
            >
              <p className="eyebrow">Service assisté</p>
              <p className="mt-5 font-display text-5xl font-bold text-gold-soft">{PRICE}</p>
              <p className="mt-2 text-sm text-muted-foreground">Frais de service par personne</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-foreground/90">
                <li>À distance — aucun déplacement au Royaume-Uni requis</li>
                <li>Lien de vérification sécurisé, sans formulaire public ouvert</li>
                <li>Accompagnement par un conseiller jusqu’à l’approbation</li>
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
                {TIMING}
              </p>
            </aside>
          </div>
        </section>

        {/* ── WHO MUST VERIFY THEIR IDENTITY? ── */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Obligation légale</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Qui Doit Vérifier Son Identité ?
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {WHO_MUST.map(([t, b]) => (
                <div key={t} className="py-6">
                  <h3 className="font-sans text-base font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              ))}
              <p className="py-5 text-xs text-muted-foreground">
                Les échéances exactes dépendent de votre rôle. Consultez le{" "}
                <a href={GOV_VERIFY} target="_blank" rel="noreferrer" className={linkCls}>
                  guide officiel GOV.UK
                </a>
                .
              </p>
            </div>
          </div>
        </Section>

        {/* ── WHAT IS A COMPANIES HOUSE PERSONAL CODE? ── */}
        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow>Définitions clés</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Qu’est-ce qu’un Code Personnel Companies House ?
              </h2>
            </div>
            <div>
              <p className="font-display text-2xl leading-snug text-foreground">
                Un code unique délivré par Companies House à une personne physique une fois son
                identité vérifiée.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Vous l’utilisez pour confirmer votre identité vérifiée lors de la constitution d’une
                société, de votre nomination en tant que dirigeant ou de la confirmation de votre
                statut de dirigeant ou PSC. Une personne dispose d’un seul code, réutilisé pour
                l’ensemble de ses fonctions et sociétés.
              </p>
              <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">
                Il ne doit pas être confondu avec le{" "}
                <a href={GOV_AUTH_CODE} target="_blank" rel="noreferrer" className={linkCls}>
                  code d’authentification de la société (Company Authentication Code)
                </a>
                , qui appartient à la société et sert aux dépôts en ligne. Conservez votre code
                personnel de manière confidentielle et ne le publiez jamais.
              </p>
            </div>
          </div>
        </Section>

        {/* ── WHO THIS SERVICE IS FOR ── */}
        <Section className="border-t border-border">
          <Eyebrow>Profils concernés</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            À Qui S’Adresse Ce Service
          </h2>
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {AUDIENCES.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 bg-background p-6 text-sm leading-relaxed text-foreground/90"
              >
                <span className="font-display text-xl font-bold text-gold">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Vous créez une nouvelle société depuis l’étranger ? Consultez notre page{" "}
            <Link href="/fr/services/uk-company-formation-for-non-residents" className={linkCls}>
              création de société UK pour non-résidents
            </Link>{" "}
            ou nos{" "}
            <Link href="/fr#pricing" className={linkCls}>
              forfaits de création
            </Link>{" "}
            — le forfait Elite inclut cette assistance pour un dirigeant.
          </p>
        </Section>

        {/* ── WHAT THE £74 SERVICE COVERS ── */}
        <Section className="section-parchment border-t border-border">
          <Eyebrow>Périmètre clair</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Ce Que Couvre le Service à {PRICE}
          </h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">Inclus</h3>
              <ul className="mt-5 space-y-3">
                {INCLUDES.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">Non inclus</h3>
              <ul className="mt-5 space-y-3">
                {EXCLUDES.map((x) => (
                  <li key={x} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span
                      className="mt-2 h-px w-2 shrink-0 bg-muted-foreground"
                      aria-hidden="true"
                    />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── FOUR STEPS TO YOUR PERSONAL CODE ── */}
        <Section className="border-t border-border" id="how-it-works">
          <Eyebrow>Fonctionnement</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Quatre Étapes Vers Votre Code Personnel
          </h2>
          <Timeline />
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Companies House délivre le code personnel. La vérification est réalisée via une voie
            dûment autorisée ; Seven Oak vous accompagne tout au long de cette démarche.
          </p>
        </Section>

        {/* ── DOCUMENTS & TIMING ── */}
        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Avant de commencer</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Documents Requis pour le Service Assisté
              </h2>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                <li className="py-5">
                  <h3 className="font-sans text-base font-semibold text-foreground">
                    Passeport en cours de validité
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Requis pour ce service assisté.
                  </p>
                </li>
                <li className="py-5">
                  <h3 className="font-sans text-base font-semibold text-foreground">
                    Justificatif de domicile résidentiel
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    À votre nom propre, émis au cours des trois derniers mois (relevé bancaire ou
                    facture d’énergie, par exemple). Sous réserve d’acceptation.
                  </p>
                </li>
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Ces exigences s’appliquent à notre service ; d’autres parcours de vérification
                peuvent accepter d’autres pièces. Veuillez transmettre vos documents uniquement via
                le canal sécurisé que nous vous communiquons — jamais sur WhatsApp.
              </p>
            </div>
            <div>
              <Eyebrow>Traitement</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Délais à Prévoir
              </h2>
              <p className="mt-8 border-l-2 border-gold pl-5 leading-relaxed text-foreground/90">
                {TIMING}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Le délai court à compter de l’approbation des contrôles et non du paiement. Des
                pièces non conformes, de nouveaux essais ou des vérifications complémentaires
                peuvent rallonger le délai, et la réussite de la vérification ne peut être garantie.
              </p>
            </div>
          </div>
        </Section>

        {/* ── YOUR OPTIONS (FREE GOV.UK VS PAID ASSISTANCE) ── */}
        <Section className="border-t border-border">
          <Eyebrow>Vos options</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Vérification Gratuite sur GOV.UK ou Assistance Payante
          </h2>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Directement via GOV.UK One Login — gratuit
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Vérifiez votre identité vous-même en ligne via le service officiel. Convient aux
                personnes disposant des documents acceptés et souhaitant effectuer la démarche en
                autonomie.
              </p>
              <a
                href={GOV_VERIFY}
                target="_blank"
                rel="noreferrer"
                className={`mt-4 inline-block text-sm font-semibold ${linkCls}`}
              >
                Guide officiel sur GOV.UK
              </a>
            </div>
            <div className="bg-background p-7">
              <h3 className="font-sans text-base font-semibold text-foreground">
                Service assisté Seven Oak — {PRICE}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Facultatif. Une revue des documents, un lien de vérification sécurisé et un
                conseiller pour vous aider en cas de difficulté — particulièrement utile pour les
                demandeurs résidant à l’étranger.
              </p>
            </div>
          </div>
          <h3 className="mt-12 font-sans text-lg font-semibold text-foreground">
            La vérification d’identité est distincte du KYC
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Les contrôles KYC et de lutte contre le blanchiment (AML) sont effectués par des
            prestataires comme nous lors de l’entrée en relation client. La vérification d’identité
            Companies House est une obligation légale distincte pour les dirigeants et PSC, donnant
            lieu à la délivrance de votre code personnel. Consultez notre page{" "}
            <Link href="/fr/security" className={linkCls}>
              Protection des Données &amp; AML
            </Link>
            .
          </p>
        </Section>

        {/* ── DATA PROTECTION ── */}
        <Section className="section-dark border-t border-border">
          <Eyebrow>Protection des données</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Vos Informations Sont Traitées en Toute Sécurité
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Les pièces d’identité sont demandées via un canal sécurisé et utilisées uniquement aux
            fins d’onboarding et de vérification. Nous ne vous demandons jamais de téléverser un
            passeport via un formulaire public.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <span>Enregistrement ICO n° ZC181349</span>
            <Link
              href="/fr/privacy"
              className="text-gold-soft hover:text-foreground transition-colors"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="/fr/security"
              className="text-gold-soft hover:text-foreground transition-colors"
            >
              Sécurité
            </Link>
            <Link
              href="/fr/resources/guides"
              className="text-gold-soft hover:text-foreground transition-colors"
            >
              Guides Dirigeants &amp; PSC
            </Link>
          </div>
        </Section>

        {/* ── FAQs ── */}
        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <Eyebrow>Questions fréquentes</Eyebrow>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Vos Questions sur le Code Personnel
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {FAQS.map(([q, a], index) => (
                <details key={q} open={index === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-sans text-base font-semibold text-foreground transition-colors hover:text-gold">
                    <span>{q}</span>
                    <Plus
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="max-w-2xl pb-5 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FINAL CTA ── */}
        <section className="section-dark border-t border-border px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Assistance vérification d’identité — {PRICE}</p>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                Obtenez une Aide Guidée pour Votre Code Personnel
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Payez en toute sécurité, transmettez vos pièces via notre canal sécurisé et
                finalisez votre vérification avec l’appui d’un conseiller dédié.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={CHECKOUT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center"
                >
                  Obtenir l’Assistance Vérification — {PRICE}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center justify-center"
                >
                  Poser une question
                </a>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Consultez nos{" "}
                <Link href="/fr/terms" className={linkCls}>
                  Conditions Générales
                </Link>{" "}
                et notre{" "}
                <Link href="/fr/refund" className={linkCls}>
                  Politique de Remboursement
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

