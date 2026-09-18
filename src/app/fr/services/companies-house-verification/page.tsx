"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function CompaniesHouseVerificationFR() {
    return (
        <>
            {/* ── HERO SECTION ── */}
            <section className="section-dark relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-0 sm:pt-40 lg:pt-48">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/services/pvc.webp" alt="Service de Vérification Companies House" fill className="object-cover object-center" priority quality={85} />
                    {/* Gradient overlay to make left text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20"></div>
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="max-w-2xl text-left">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
                            </span>
                            <span className="text-sm font-medium text-gold">Vérification d'Identité</span>
                        </div>

                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
                            COMPANIES HOUSE
                        </span>
                        <div className="mb-6 h-px w-24 rule-gold" />

                        <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                            Vérification <span className="text-gold">Companies House</span>
                        </h1>

                        <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl font-light">
                            Assistance Identité et Conformité PVC / ACSP
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="https://wa.me/447447488755" className="btn-ghost">
                                Nous Contacter
                            </Link>
                            <Link href="https://buy.stripe.com/14A7sD6cEaHP1RP6Bmfw40g" target="_blank" className="btn-gold">
                                Ajouter à la Commande
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT IS PVC/ACSP ── */}
            <section className="section-parchment relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">CONFORMITÉ</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Qu'est-ce que la Vérification Companies House ?</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/40 sm:p-10">
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            <p>La Companies House exige désormais une vérification d'identité pour les administrateurs de société et les personnes ayant un contrôle significatif (PSC). Cela fait partie des efforts du gouvernement britannique pour améliorer la transparence des entreprises et prévenir la fraude.</p>
                            <p>Le processus de vérification peut être effectué par l'intermédiaire d'un fournisseur de services aux entreprises agréé (ACSP) ou directement auprès de la Companies House via son système de code de vérification personnel (PVC).</p>
                            <p>Notre service fournit des conseils et un soutien tout au long du processus de vérification, garantissant que votre identité est vérifiée correctement et en toute conformité.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHAT'S INCLUDED ── */}
            <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-3 block">NOTRE SOUTIEN</span>
                        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">Ce Qui Est Inclus</h2>
                        <div className="mx-auto h-px w-24 rule-gold mb-6" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {[
                            "Conseils sur la Vérification d'Identité",
                            "Soutien à la Vérification ACSP",
                            "Aide à la Demande de Code PVC",
                            "Conformité des Directeurs et PSC",
                            "Aide à la Préparation des Documents",
                            "Aide à la Vérification des Non-Résidents",
                        ].map((item, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border bg-card/25 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-card/40">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold transition-transform duration-500 group-hover:scale-110">
                                        <FaCheck className="h-4 w-4" />
                                    </div>
                                    <span className="text-base font-semibold text-foreground">{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-display mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">Besoin d'Aide Pour la Vérification ?</h2>
                    <p className="mb-10 text-lg leading-relaxed text-foreground/80 sm:text-xl lg:text-2xl">Obtenez de l'aide pour la vérification d'identité à la Companies House et la conformité ACSP.</p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                        <Link href="https://wa.me/447447488755" className="btn-gold">
                            <FaWhatsapp className="h-5 w-5" />
                            <span>Nous Contacter</span>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-foreground/70">WhatsApp: <span className="font-semibold text-gold">+44 7447 488755</span></p>
                </div>
            </section>

            <Footer />
        </>
    );
}
