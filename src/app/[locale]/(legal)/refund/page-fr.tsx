import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function RefundPolicyFr() {
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
                            Politique de remboursement et d'annulation
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Agreement Info */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                        <p className="text-sm font-medium text-[#d4af37]">Dernière mise à jour : 12 Août 2026</p>
                        <div className="mt-4 space-y-4 leading-relaxed text-foreground/80">
                            <p>Cette politique de remboursement et d'annulation résume les circonstances dans lesquelles vous pouvez annuler les services achetés auprès de Seven Oak Prestige Ltd et quand un remboursement peut ou non être disponible.</p>
                            <p>Cette politique doit être lue conjointement avec nos conditions générales, en particulier la section 8 – Remboursements et annulations.</p>
                            <p>En cas de conflit entre cette politique et nos conditions générales, nos conditions générales s'appliqueront, sous réserve des droits légaux qui ne peuvent légalement être exclus ou restreints.</p>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. DÉFINITIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Sauf indication contraire, les mots et expressions utilisés dans cette politique ont la même signification que dans nos conditions générales.</p>
                                <p>« Services » comprend la création de sociétés, les services de siège social, les services d'adresse commerciale, les services de conformité, l'administration d'entreprise, l'assistance bancaire et avec les fournisseurs de paiement, les services de conseil et tout autre produit ou service fourni par Seven Oak Prestige Ltd.</p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. VOS DROITS LÉGAUX</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Rien dans cette politique ne supprime ou ne restreint les droits obligatoires dont vous disposez en vertu de la législation applicable en matière de consommation.</p>
                                <p>Lorsque vous achetez des Services en tant que consommateur via notre site Web, par téléphone, par e-mail ou par toute autre méthode de vente à distance, vous pouvez avoir le droit légal d'annuler certains Services dans un délai de 14 jours calendaires à compter de la date de conclusion du contrat.</p>
                                <p>Différentes règles peuvent s'appliquer lorsque :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>vous nous demandez spécifiquement de commencer à fournir le Service pendant la période d'annulation ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>les travaux ont déjà commencé ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>le Service a été entièrement exécuté ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>un Service sur mesure ou personnalisé a été fourni ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>des frais gouvernementaux ou de tiers ont déjà été engagés ; ou</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>une autre exception légale s'applique.</span></li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. QUAND POUVEZ-VOUS ANNULER ET RECEVOIR UN REMBOURSEMENT ?</h2>
                            <h3 className="mb-2 mt-6 text-xl font-bold text-foreground">3.1 Services dont l'exécution n'a pas commencé</h3>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Vous pouvez demander l'annulation d'un Service éligible dans les 14 jours calendaires suivant l'achat.</p>
                                <p>Sous réserve de vos droits légaux, vous serez normalement éligible à un remboursement lorsque :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>votre demande écrite d'annulation est reçue pendant la période d'annulation applicable ; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>nous n'avons pas commencé à fournir ou à préparer le Service ; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>nous n'avons engagé aucun coût gouvernemental, tiers ou externe lié à votre commande.</span></li>
                                </ul>
                                <p>Lorsqu'un remboursement contractuel ou discrétionnaire est approuvé, des frais de paiement et de traitement administratif de 5 % seront normalement déduits du montant remboursé, si la loi applicable le permet.</p>
                                <p>Tout droit légal au remboursement sera traité conformément à la loi applicable sur la protection des consommateurs et ne sera pas réduit par des frais que nous ne sommes pas légalement autorisés à imposer.</p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. SERVICES COMMENCÉS PENDANT LE DÉLAI D'ANNULATION DE 14 JOURS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Beaucoup de nos services sont sensibles au temps.</p>
                                <p>En nous demandant de commencer à fournir un Service immédiatement ou avant l'expiration de tout délai d'annulation légal, vous demandez expressément l'exécution anticipée du Service.</p>
                                <p>Cela peut inclure, par exemple :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>l'examen de vos documents ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la réalisation d'une évaluation consultative ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la réalisation de vérifications KYC ou de conformité ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la préparation d'une demande de création de société ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>l'examen d'un site web ou d'un modèle économique ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la préparation d'une demande auprès d'une banque ou d'un prestataire de paiement ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la recherche de fournisseurs ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la préparation des documents justificatifs ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la programmation ou la réalisation de consultations ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la mise en place d'un service d'adresse ; ou</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>la soumission d'informations à un tiers.</span></li>
                                </ul>
                                <p>Si vous annulez par la suite après le début des travaux, nous pourrons déduire un montant raisonnable et proportionnel représentant les Services déjà fournis, ainsi que tous les frais non remboursables déjà engagés, si la loi le permet.</p>
                                <p>Tout remboursement contractuel restant sera également soumis aux frais de traitement de 5 %, si la loi le permet.</p>
                                <p>Si le Service a déjà été entièrement exécuté à la suite de votre demande expresse pour que nous commencions pendant le délai d'annulation, votre droit légal d'annuler peut cesser si la loi applicable le permet.</p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. SERVICES DE CRÉATION DE SOCIÉTÉS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Vous pouvez demander l'annulation d'un service de création de société avant que la demande n'ait été soumise à la Companies House.</p>
                                <p>Où :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>votre demande d'annulation est reçue dans les 14 jours calendaires suivant l'achat ; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>nous n'avons pas commencé à préparer l'incorporation ; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>aucun frais de tiers ou de vérification n'a été engagé,</span></li>
                                </ul>
                                <p>vous pourriez avoir droit à un remboursement.</p>
                                <p>Si nous avons déjà commencé à préparer l'incorporation mais n'avons pas encore soumis la demande, tout remboursement peut être réduit pour tenir compte des travaux terminés, des coûts de vérification et des autres dépenses déjà engagées.</p>
                                <p>Une fois que la demande de constitution de société a été soumise à la Companies House, le service de création de société est considéré comme substantiellement engagé et :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>les frais de dépôt à la Companies House ne sont pas remboursables ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>les frais de vérification d'identité ou de tiers déjà engagés ne sont pas remboursables ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>les frais liés aux travaux déjà exécutés ne sont pas remboursables ; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>un remboursement ne sera normalement pas disponible simplement parce que la demande est rejetée, interrogée ou retardée par la Companies House.</span></li>
                                </ul>
                                <p>Les frais d'incorporation en ligne standard de la Companies House sont actuellement de 100 £, bien que les frais gouvernementaux puissent changer de temps à autre. (<a href="https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">GOV.UK</a>)</p>
                                <p>Si la Companies House demande une correction ou des informations supplémentaires, nous chercherons normalement à corriger ou à soumettre à nouveau la demande lorsque cela est raisonnablement possible plutôt que de considérer la demande comme annulée.</p>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. SERVICES D'ADRESSE (SIÈGE SOCIAL, ADRESSE DU DIRECTEUR ET ADRESSE COMMERCIALE)</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Les services d'adresse impliquent la fourniture de services continus et l'engagement de ressources et de capacités par nous pour vous à compter de la date de début de l'accord, et sont généralement fournis sur une base annuelle fixe ou un abonnement à durée déterminée.</p>
                                <p>Vous pouvez demander l'annulation d'un service d'adresse à tout moment, et le service ne sera pas renouvelé à l'expiration de son terme actuel.</p>
                                <p>Sous réserve de la loi applicable en matière de consommation, si vous demandez l'annulation d'un service d'adresse pendant sa durée :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>les frais pour le service d'adresse ne sont normalement pas remboursables, qu'ils soient payés en totalité à l'avance, mensuellement ou pour une autre période, car le service, la capacité et les coûts administratifs associés ont déjà été alloués et fournis;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>vous n'aurez pas droit à un remboursement au prorata simplement parce que vous choisissez de ne pas utiliser le service pour le reste de sa durée, ou si vous changez l'adresse de votre entreprise avec la Companies House avant la fin du terme; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>tous les frais de vérification d'identité associés ne sont pas remboursables une fois la vérification commencée.</span></li>
                                </ul>
                                <p>Si, conformément à la loi applicable, un remboursement discrétionnaire ou légal est accordé, il pourra être soumis à des déductions pour les frais administratifs, les vérifications d'identité terminées et l'utilisation du service au prorata, ainsi qu'aux frais de traitement de 5 %.</p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. RENSEIGNEMENTS ET DEMANDES BANCAIRES OU DE PAIEMENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous offrons une assistance pour ouvrir des comptes bancaires professionnels et des comptes de fournisseurs de paiement (« Services bancaires »).</p>
                                <p>Si vous annulez un Service bancaire avant que nous ayons commencé un examen consultatif, la préparation d'un document ou l'introduction à une banque ou un fournisseur de paiement, vous pourriez avoir droit à un remboursement, sous réserve de nos frais de traitement de 5 % (si la loi le permet).</p>
                                <p>Si nous avons commencé à effectuer un travail ou à introduire une demande auprès d'une banque ou d'un fournisseur, la possibilité d'un remboursement dépendra du travail déjà effectué.</p>
                                <p><strong>L'approbation bancaire n'est pas garantie.</strong> Une fois que nous avons fourni un service, effectué une évaluation, préparé des documents ou soumis une demande, les frais associés à ces travaux ne sont normalement pas remboursables, et ne deviendront pas remboursables pour la seule raison que l'institution bancaire ou le fournisseur de paiement rejette votre demande, la retarde, ou demande des informations supplémentaires.</p>
                                <p>Si une banque ou un fournisseur rejette une demande pour des raisons telles qu'un manque de substance commerciale adéquate, un document manquant ou le fait que la structure, le pays de résidence ou le secteur d'activité de l'entreprise ne correspond pas à l'appétit de risque de l'institution, cela ne donne pas droit à un remboursement du Service.</p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. VÉRIFICATION D'IDENTITÉ ET CONFORMITÉ (KYC/AML)</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous sommes légalement tenus d'effectuer des vérifications d'identité et de lutte contre le blanchiment d'argent (« AML ») sur nos clients et sur tout dirigeant ou bénéficiaire d'une entreprise.</p>
                                <p>Si nous commençons à fournir un service, mais que nous devons par la suite le suspendre ou l'annuler parce que :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>vous ne fournissez pas de preuve d'identité acceptable, un justificatif de domicile ou d'autres documents de conformité demandés dans le délai spécifié;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>vous échouez à nos vérifications de conformité internes ou à celles de tiers;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>vous figurez sur une liste de sanctions ou une base de données réglementaire restreinte; ou</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>nous avons des motifs raisonnables de soupçonner qu'une demande ou une entreprise pourrait être impliquée dans des activités illégales, frauduleuses ou réglementées sans autorisation,</span></li>
                                </ul>
                                <p>nous nous réservons le droit de retenir un montant suffisant de tout paiement effectué pour couvrir nos frais de conformité, nos frais de vérification d'identité, les frais de tiers et les frais administratifs encourus jusqu'à la date de résiliation. Dans certains cas, cela peut signifier qu'aucun remboursement ne sera versé.</p>
                                <p>Si des vérifications de l'identité des dirigeants doivent être refaites ou effectuées plusieurs fois, nous pouvons facturer ces coûts supplémentaires séparément.</p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. SERVICES NON REMBOURSABLES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Sauf dans la mesure où la loi l'exige, les éléments suivants ne sont normalement pas remboursables :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les frais de l'entreprise House, d'HMRC ou d'autres agences gouvernementales.</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les frais de vérification d'identité numérique et de conformité déjà payés à nos partenaires de conformité.</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les frais payés à des prestataires de services tiers, fournisseurs de logiciels ou autres affiliés dans le cadre d'un Service.</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les services entièrement personnalisés ou sur mesure, une fois le travail commencé.</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les frais liés à des consultations qui ont déjà eu lieu ou à des conseils qui ont déjà été donnés.</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les frais de renouvellement pour des services continus (comme l'adresse ou la conformité) après l'expiration de toute période d'annulation applicable et si les services ont continué d'être mis à votre disposition.</span></li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. FRAIS ET TAUX DE CHANGE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Lorsqu'un remboursement est émis :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Il sera normalement traité en utilisant la même méthode et la même devise que pour le paiement original.</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Tout remboursement approuvé au titre d'un contrat ou à titre discrétionnaire pourra faire l'objet de déductions des frais de transaction ou de passerelle de paiement (tels que Stripe ou PayPal) qui nous ont été facturés mais qui ne nous sont pas remboursés, ou des frais de traitement de 5 % que nous pourrions appliquer (là où la loi le permet).</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Si vous avez payé dans une devise autre que la Livre Sterling (£/GBP), vous pourrez subir des variations de taux de change ou des frais facturés par votre fournisseur de carte ou votre banque. Nous ne remboursons pas les pertes résultant de la conversion de devises ou des frais bancaires internationaux, sauf si la loi nous y oblige.</span></li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. COMMENT DEMANDER UNE ANNULATION ET UN REMBOURSEMENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Pour demander une annulation et, le cas échéant, un remboursement, veuillez nous contacter par e-mail en utilisant l'adresse ci-dessous.</p>
                                <p>Vous devez inclure :</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Votre nom complet et, le cas échéant, le nom de votre entreprise ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Le numéro de référence de votre commande, le numéro de facture ou l'identifiant du compte ;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Les détails du ou des Service(s) que vous souhaitez annuler ; et</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>La raison de l'annulation (optionnel, mais utile pour améliorer nos services).</span></li>
                                </ul>
                                <p>Nous chercherons à examiner et à répondre à votre demande dans un délai de 5 à 10 jours ouvrables. Si votre demande est approuvée, les remboursements peuvent prendre de 5 à 14 jours supplémentaires pour apparaître sur votre compte, selon votre fournisseur de paiement.</p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact</h2>
                            <p className="leading-relaxed text-foreground/80">
                                Si vous avez des questions concernant cette politique ou si vous souhaitez discuter d'une annulation, veuillez nous contacter à l'adresse suivante :{' '}
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
