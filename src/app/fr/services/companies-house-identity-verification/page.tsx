import { Metadata } from "next";
import Link from "next/link";
import VerificationFaqFR from "@/components/VerificationFaqFR";
import Footer from "@/components/Footer";

const PATH = "/fr/services/companies-house-identity-verification";
const CHECKOUT = "https://buy.stripe.com/bJe8wHbwY5nv8gde3Ofw40h";
const WHATSAPP =
  "https://wa.me/447447488755?text=Bonjour%20Seven%20Oak%20Prestige%2C%20je%20voudrais%20des%20renseignements%20sur%20la%20vérification%20d'identité%20Companies%20House%20et%20mon%20code%20personnel.";

const AUDIENCES = [
  "Nouveaux directeurs d'entreprises britanniques ayant besoin d'un code personnel Companies House",
  "Directeurs existants qui doivent encore vérifier leur identité",
  "Personnes exerçant un contrôle important (PSC)",
  "Non-résidents britanniques ayant besoin d'aide pour le processus de vérification",
  "Demandeurs incapables ou incertains de savoir comment suivre un processus de vérification de manière indépendante",
];

const INCLUDES = [
  "Examen initial de l'éligibilité et des documents",
  "Conseils sur le processus de vérification d'identité",
  "Soumission sécurisée des informations d'identité requises",
  "Coordination du processus de vérification",
  "Assistance si des éclaircissements ou des informations supplémentaires sont requis",
  "Confirmation une fois la vérification terminée",
  "Code personnel Companies House délivré au demandeur après une vérification réussie",
  "Assistance sur la façon dont le code personnel est utilisé pour une nomination de directeur ou de PSC",
];

const STEPS = [
  ["01", "Commencer le service — £74", "Validez la commande et fournissez vos informations de base."],
  ["02", "Soumettre l'identification requise", "Nous confirmons la documentation nécessaire et vous guidons dans les étapes de vérification."],
  ["03", "Terminer la vérification d'identité", "La vérification est traitée selon le chemin approprié à votre situation."],
  ["04", "Recevoir votre code personnel", "Après une vérification réussie, votre code personnel Companies House est émis et envoyé à l'adresse e-mail utilisée."],
];

const REQUIREMENTS = [
  "Un passeport valide ou un autre document d'identité éligible",
  "Vos données personnelles actuelles",
  "Une adresse e-mail à laquelle vous avez accès",
  "Votre date de naissance",
  "Votre adresse résidentielle actuelle",
  "Des informations complémentaires si nécessaire",
];

export const metadata: Metadata = {
  title: "Aide à la Vérification d'Identité Companies House & Code Personnel",
  description: "Obtenez de l'aide pour vérifier votre identité à la Companies House et obtenir votre code personnel. Service assisté pour directeurs, PSC et non-résidents britanniques.",
  openGraph: {
    title: "Aide à la Vérification d'Identité Companies House & Code Personnel | Seven Oak Prestige",
    description: "Assistance guidée pour la vérification de l'identité de la Companies House pour les directeurs, les PSC et les non-résidents britanniques. Frais de service de 74 £.",
    type: "website",
    url: PATH,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: PATH,
    languages: {
      "en-US": "https://www.sevenoakprestige.com/services/companies-house-identity-verification",
      "fr-FR": "https://www.sevenoakprestige.com/fr/services/companies-house-identity-verification",
    },
  },
};

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-24 ${className}`}>
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

export default function IdentityVerificationPageFR() {
  return (
    <div className="bg-background pt-16 lg:pt-20">
      <main>
        <section className="section-dark border-b border-border px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Aide à la vérification d'identité Companies House</p>
              <div className="mt-4 h-px w-24 rule-gold" />
              <h1 className="font-display mt-8 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.35rem] text-foreground">
                Aide à la Vérification d'Identité Companies House
              </h1>
              <p className="mt-6 font-display text-2xl text-gold-soft">Besoin de votre code personnel Companies House ?</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-foreground/90">
                Nous offrons une aide guidée pour la vérification d'identité aux directeurs et PSC qui doivent suivre le processus de vérification de la Companies House, y compris les demandeurs internationaux et non-résidents.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={CHECKOUT} className="btn-gold">Commencer la Vérification — £74</a>
                <a href={WHATSAPP} className="btn-ghost">Poser une Question</a>
              </div>
            </div>
            <aside className="border border-border bg-ink p-7 sm:p-9" aria-label="Service fee and timing">
              <p className="eyebrow">Service Assisté</p>
              <p className="mt-5 font-display text-5xl text-gold-soft">£74</p>
              <p className="mt-2 text-sm text-muted-foreground">Frais de service</p>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm leading-relaxed text-foreground/90">
                  Le code personnel est généralement délivré dans les 48 heures suivant la réussite des contrôles de vérification requis.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <Section>
          <Eyebrow>Demandeurs éligibles</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">À Qui S'adresse Ce Service</h2>
          <ul className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {AUDIENCES.map((item, index) => (
              <li key={item} className={`flex gap-4 bg-background p-7 text-sm leading-relaxed text-foreground/90 ${index === AUDIENCES.length - 1 ? "md:col-span-2" : ""}`}>
                <span className="font-display text-xl text-gold">0{index + 1}</span>{item}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="section-parchment border-t border-border">
          <Eyebrow>Étendue claire du service</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Ce Que Comprend le Service de £74</h2>
          <ul className="mt-12 grid gap-x-12 gap-y-5 border-y border-border py-8 sm:grid-cols-2">
            {INCLUDES.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/90"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}</li>)}
          </ul>
          <p className="mt-7 max-w-3xl text-xs leading-relaxed text-muted-foreground">Seven Oak vous aide dans le processus de vérification. Le code personnel est émis après une vérification réussie de l'identité ; la finalisation reste soumise aux contrôles applicables et à toute preuve supplémentaire requise.</p>
        </Section>

        <Section className="border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Eyebrow>Terminologie officielle</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Qu'est-ce Qu'un Code Personnel Companies House ?</h2></div>
            <div>
              <p className="font-display text-2xl leading-snug">Un code unique de 11 caractères délivré après une vérification d'identité réussie.</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">Les administrateurs et les PSC utilisent le code personnel pour confirmer leur identité vérifiée lorsque la Companies House l'exige. Les nouveaux directeurs en ont besoin lors de la constitution d'une société ou de leur nomination, tandis que les directeurs existants l'utilisent dans le cadre de leurs dépôts requis.</p>
              <p className="mt-5 border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">Le code personnel appartient à la personne et peut être réutilisé pour ses fonctions correspondantes au sein de l'entreprise. Gardez-le en sécurité.</p>
            </div>
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><Eyebrow>Candidats internationaux</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Vérification d'Identité pour les Non-Résidents</h2></div>
            <div><p className="text-lg leading-relaxed text-foreground/90">Les non-résidents du Royaume-Uni peuvent procéder à la vérification d'identité à la Companies House, mais le processus disponible peut dépendre des documents d'identité qu'ils possèdent et de leur situation.</p><p className="mt-5 leading-relaxed text-muted-foreground">Notre service d'assistance est conçu pour les directeurs internationaux et les PSC qui souhaitent une aide pratique pour terminer le processus et obtenir leur code personnel. Nous examinons l'itinéraire disponible et expliquons si des preuves supplémentaires sont nécessaires.</p></div>
          </div>
        </Section>

        <Section className="border-t border-border">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Quatre Étapes Claires</h2>
          <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([number, title, body]) => <li key={number} className="bg-background p-7"><span className="font-display text-2xl text-gold">{number}</span><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p></li>)}
          </ol>
          <p className="mt-8 max-w-3xl border-l-2 border-gold pl-5 text-sm leading-relaxed text-foreground/85">Délai typique : jusqu'à 48 heures après la réussite des contrôles de vérification requis.</p>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div><Eyebrow>Avant de commencer</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Ce Dont Vous Pourriez Avoir Besoin</h2><p className="mt-6 text-sm leading-relaxed text-muted-foreground">Les exigences peuvent varier selon le demandeur et le parcours de vérification.</p></div>
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {REQUIREMENTS.map((item) => <li key={item} className="flex gap-3 bg-background p-6 text-sm leading-relaxed text-foreground/90"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
        </Section>

        <Section className="section-dark border-t border-border">
          <Eyebrow>Protection des données</Eyebrow>
          <h2 className="font-display mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Vos Informations Sont Traitées en Toute Sécurité</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {["Soumission sécurisée des documents", "Informations d'identité utilisées à des fins d'intégration et de vérification", "Processus clair et soutien de conseillers", "Conditions de confidentialité et de protection des données disponibles avant le paiement"].map((item) => <div key={item} className="bg-ink p-7 text-sm leading-relaxed text-foreground/90">{item}</div>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <span>N° d'enregistrement ICO : ZC181349</span>
            <Link href="/privacy" className="text-gold-soft hover:text-foreground">Politique de Confidentialité</Link>
            <Link href="/data-protection" className="text-gold-soft hover:text-foreground">Protection des Données & AML</Link>
          </div>
        </Section>

        <Section className="section-parchment border-t border-border">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]"><div><Eyebrow>Foire aux questions</Eyebrow><h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Questions sur le Code Personnel, Résolues</h2></div><VerificationFaqFR /></div>
        </Section>

        <section className="section-dark border-t border-border px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="eyebrow">Aide à la Vérification d'Identité — £74</p><h2 className="font-display mb-6 mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Besoin de Votre Code Personnel Companies House ?</h2><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Suivez le processus de vérification assistée avec des conseils clairs du début à la fin.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href={CHECKOUT} className="btn-gold">Commencer la Vérification — £74</a><a href={WHATSAPP} className="btn-ghost">Poser une Question</a></div></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
