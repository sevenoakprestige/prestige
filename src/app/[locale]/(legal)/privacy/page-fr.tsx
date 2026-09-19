import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicyFr() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="mx-auto max-w-4xl px-4 pt-32 pb-4 sm:px-6 lg:px-8">
                <Link
                    href="/fr"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-[#d4af37]"
                >
                    <FaArrowLeft className="h-4 w-4" />
                    Retour à l'accueil
                </Link>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Politique de confidentialité
                        </h1>
                        <p className="text-lg text-foreground/70">Conforme au RGPD</p>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Company Info */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                        <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                        <p className="text-sm text-foreground/70">Dernière mise à jour : 2025</p>
                        <p className="text-sm text-foreground/70">
                            Email :{' '}
                            <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">
                                contact@sevenoakprestige.com
                            </a>
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. Introduction</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles conformément au RGPD britannique, à la loi sur la protection des données de 2018 et au RGPD de l'UE, le cas échéant.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. Données que nous collectons</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Nous pouvons collecter des informations personnelles et professionnelles, y compris des documents d'identification à des fins de conformité.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. Comment nous utilisons vos données</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Vos données sont utilisées pour fournir des services, vérifier l'identité, traiter les paiements et améliorer notre site web.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. Base légale du traitement</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Nous traitons les données sur la base de la nécessité du contrat, des obligations légales, des intérêts légitimes et du consentement.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. Partage des données</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Nous pouvons partager des données avec les autorités, les processeurs de paiement et nos partenaires de conformité. Nous ne vendons jamais de données.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. Transferts internationaux</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Les transferts de données en dehors du Royaume-Uni / de l'UE sont sécurisés et conformes au RGPD.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. Sécurité des données</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Nous appliquons le chiffrement, des serveurs sécurisés et des contrôles d'accès.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. Conservation des données</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Les données sont conservées pour un minimum de 5 ans ou tel que requis par la loi.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. Vos droits</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Vous pouvez accéder, corriger, supprimer ou vous opposer au traitement de vos données.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. Cookies</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Les cookies sont utilisés pour l'analyse et les fonctionnalités du site web.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. Âge minimum</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Les services sont destinés aux personnes âgées de 18 ans ou plus.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. Modifications de cette politique</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Les mises à jour seront publiées sur cette page.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante :{' '}
                                <a href="mailto:contact@sevenoakprestige.com" className="font-semibold text-[#d4af37] hover:underline">
                                    contact@sevenoakprestige.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
