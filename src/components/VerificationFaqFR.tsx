"use client";

import { useState } from "react";

const FAQS_FR = [
  {
    q: "Qu'est-ce que le code personnel de la Companies House ?",
    a: "C'est un code unique de 11 caractères délivré à une personne après une vérification réussie de son identité par la Companies House. Il vous est personnel et doit être conservé en sécurité.",
  },
  {
    q: "Qui doit vérifier son identité ?",
    a: "Les exigences de vérification d'identité de la Companies House s'appliquent aux administrateurs concernés et aux personnes exerçant un contrôle important (PSC), le moment dépendant de la création d'une société, d'une nomination ou d'un dépôt obligatoire.",
  },
  {
    q: "Les non-résidents britanniques peuvent-ils utiliser ce service ?",
    a: "Oui, sous réserve d'un examen initial. La voie de vérification appropriée dépend de vos documents d'identité et de votre situation, des informations supplémentaires peuvent donc être nécessaires.",
  },
  {
    q: "Combien de temps dure le processus ?",
    a: "Le code personnel est généralement délivré dans les 48 heures suivant la réussite des contrôles de vérification requis. Des preuves supplémentaires, des problèmes techniques ou un traitement externe peuvent allonger le délai.",
  },
  {
    q: "De quels documents aurai-je besoin ?",
    a: "Vous pouvez avoir besoin d'un passeport en cours de validité ou d'un autre document d'identité éligible, de vos données personnelles actuelles, de votre date de naissance et de votre adresse de résidence. Les exigences varient selon le demandeur et le parcours de vérification.",
  },
  {
    q: "Que se passe-t-il si des informations supplémentaires sont requises ?",
    a: "Nous vous expliquons quelles précisions ou pièces justificatives sont nécessaires et vous aidons à y répondre. La vérification ne peut pas être terminée tant que les vérifications correspondantes ne sont pas satisfaites.",
  },
  {
    q: "Puis-je utiliser le même code personnel pour plusieurs entreprises ?",
    a: "Oui. Le code personnel appartient à l'individu et est réutilisé pour ses différents rôles pertinents au sein de l'entreprise ; vous n'obtenez pas un code personnel différent pour chaque entreprise.",
  },
  {
    q: "Quand les directeurs et les PSC doivent-ils fournir le code ?",
    a: "Les nouveaux directeurs ont besoin du code lors de la constitution d'une société ou de leur nomination. Les directeurs existants et les PSC l'utilisent dans le cadre du dépôt applicable à la Companies House ou de l'exigence de vérification.",
  },
];

export default function VerificationFaqFR() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {FAQS_FR.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-gold-soft"
              >
                <span className="font-sans text-base font-semibold sm:text-lg">{item.q}</span>
                <span className={`mt-1 shrink-0 text-gold transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                </span>
              </button>
            </h3>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
