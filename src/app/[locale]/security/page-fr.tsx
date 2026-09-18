import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confiance & Sécurité | Seven Oak Prestige",
  description: "Comment nous protégeons vos données et comment vous pouvez nous vérifier. Pratiques de sécurité et position réglementaire clairement énoncées.",
};

const CH_IDV_GUIDANCE = "https://www.gov.uk/guidance/verifying-your-identity-for-companies-house";
const COMPANIES_HOUSE = "https://find-and-update.company-information.service.gov.uk/company/16903092";
const ICO_REGISTER = "https://ico.org.uk/ESDWebPages/Search";

const PRACTICES = [
  [
    "Chiffrement en transit et au repos",
    "Le site et nos canaux clients sont servis via HTTPS/TLS, et les documents que vous nous envoyez sont stockés de manière chiffrée au repos par nos fournisseurs d'hébergement et de stockage.",
  ],
  [
    "Contrôle d'accès",
    "Les fichiers clients ne sont accessibles qu'aux conseillers travaillant sur votre dossier, sur des comptes individuels avec authentification à deux facteurs activée.",
  ],
  [
    "Hébergement sécurisé",
    "Nous nous appuyons sur des fournisseurs d'infrastructures cloud établis au Royaume-Uni/UE plutôt que sur des serveurs auto-gérés, et nous ne stockons pas les données de cartes de paiement — les paiements par carte sont traités directement par Stripe.",
  ],
  [
    "Sauvegardes et suppression",
    "Les dossiers sont sauvegardés régulièrement. Les dossiers LBC (lutte contre le blanchiment d'argent) sont conservés pendant cinq ans après la fin de notre relation, comme l'exige la loi britannique ; les autres documents sont supprimés sur demande ou lorsqu'ils ne sont plus nécessaires.",
  ],
  [
    "Réponse aux incidents",
    "Si un incident de données affectait vos informations, nous enquêterions, le contiendrions, informerions les clients concernés et le signalerions à l'ICO si la loi l'exige.",
  ],
];

const REGULATORY = [
  [
    "Companies House",
    "Companies House est le registre des sociétés du Royaume-Uni. Chaque constitution que nous préparons est déposée dans ce cadre officiel, et le dossier de votre société est publiquement vérifiable une fois enregistré.",
  ],
  [
    "Loi sur la Criminalité Économique et la Transparence des Entreprises (ECCTA)",
    "L'ECCTA a introduit des obligations plus strictes en matière de vérification d'identité et de transparence pour les sociétés britanniques, leurs directeurs et les personnes exerçant un contrôle important. Nous préparons chaque dossier pour répondre à ces exigences telles qu'elles s'appliquent à vous.",
  ],
  [
    "Qui prépare et dépose votre société",
    "Seven Oak Prestige prépare et soumet votre constitution à Companies House. Votre dossier reste avec un conseiller nommé — il n'y a pas de transfert à un intermédiaire anonyme — et chaque dépôt est effectué conformément aux exigences de Companies House.",
  ],
  [
    "Lutte contre le blanchiment d'argent (LBC / AML)",
    "Les règles LBC britanniques nous obligent à identifier et vérifier chaque client et bénéficiaire effectif avant qu'une société ne soit formée. Cela vous protège autant que cela protège le registre — c'est la raison pour laquelle nous ne pouvons pas ignorer les vérifications de documents.",
  ],
];

const IDV_STEPS = [
  ["Vous soumettez vos documents", "Un passeport valide ou une carte d'identité nationale, ainsi que les détails de votre adresse résidentielle."],
  [
    "Onfido ou Credas les vérifie",
    "Nous utilisons nos partenaires de vérification KYC et AML, Onfido et Credas, pour vérifier le document et le faire correspondre à vous. Le partenaire utilisé dépend de votre type de document et de votre pays.",
  ],
  [
    "La vérification est enregistrée pour votre dépôt",
    "Nous utilisons le résultat vérifié pour le dépôt à Companies House que nous préparons en votre nom, et le conservons dans nos dossiers LBC.",
  ],
];

function Row({ items }: { items: string[][] }) {
  return (
    <dl className="mt-10 divide-y divide-border border-t border-border">
      {items.map(([t, b]) => (
        <div key={t} className="py-7">
          <dt className="font-sans text-base font-semibold text-foreground/90">{t}</dt>
          <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{b}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function SecurityPageFr() {
  return (
    <div className="bg-background pt-8 pb-16">
      <section className="border-b border-border px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Confiance &amp; Sécurité</p>
          <div className="mt-4 h-px w-16 rule-gold" />
          <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
            Comment nous protégeons vos données — et comment vous pouvez nous vérifier.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Nous n'affichons pas de badges ou de certifications que nous n'avons pas obtenus. Au lieu de cela, cette page décrit exactement ce que nous faisons, afin que vous puissiez juger par vous-même.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold-soft">
            <a href={COMPANIES_HOUSE} target="_blank" rel="noreferrer" className="hover:text-gold">
              Dossier Companies House →
            </a>
            <a href={CH_IDV_GUIDANCE} target="_blank" rel="noreferrer" className="hover:text-gold">
              Directives GOV.UK sur la vérification d'identité →
            </a>
            <a href={ICO_REGISTER} target="_blank" rel="noreferrer" className="hover:text-gold">
              Recherche dans le registre de l'ICO →
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Pratiques de sécurité</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Énoncées clairement, sans aucune exagération.
          </h2>
          <Row items={PRACTICES} />
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Position réglementaire</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Les règles selon lesquelles nous travaillons, en langage clair.
          </h2>
          <Row items={REGULATORY} />
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Vérification d'identité</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">Comment nous vérifions votre identité.</h2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3">
            {IDV_STEPS.map(([t, b], i) => (
              <li key={t}>
                <span className="font-display text-4xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-sans text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Confidentialité &amp; protection des données</p>
          <h2 className="mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
            Vos données sont utilisées pour votre dépôt — rien d'autre.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Seven Oak Prestige Ltd est le responsable du traitement des informations que vous nous fournissez et est enregistré auprès de l'Information Commissioner's Office (ICO) du Royaume-Uni en tant que responsable du traitement des données ; notre référence d'enregistrement est disponible sur demande. Nous traitons les données personnelles conformément au RGPD britannique et au Data Protection Act 2018. Nous ne vendons pas vos données et ne les utilisons pas pour le marketing par des tiers.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-gold-soft">
            <Link href="/privacy" className="hover:text-gold">
              Politique de Confidentialité →
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Conditions Générales →
            </Link>
            <Link href="/data-protection" className="hover:text-gold">
              Protection des Données &amp; LBC →
            </Link>
            <Link href="/refund" className="hover:text-gold">
              Politique de Remboursement →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
