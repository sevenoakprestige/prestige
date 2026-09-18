import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsAndConditionsFr() {
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
                            Conditions Générales
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Agreement Info */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                        <p className="text-sm text-foreground/70">Dernière mise à jour : 12 Août 2026</p>
                        <h2 className="mt-4 mb-3 text-xl font-bold text-foreground">ACCORD CONCERNANT NOS CONDITIONS LÉGALES</h2>
                        <div className="space-y-4 leading-relaxed text-foreground/80">
                            <p>
                                Nous sommes Seven Oak Prestige Ltd ("Seven Oak Prestige", "Société", "nous", ou "notre"), une société à responsabilité limitée constituée en Angleterre et au Pays de Galles sous le numéro 16903092, dont le siège social est situé à :
                            </p>
                            <p>
                                124 City Road, Londres, EC1V 2NX, Royaume-Uni
                            </p>
                            <p>
                                Nous fournissons des services de création de société, d'adresse de siège social et d'adresse commerciale, d'administration d'entreprise, de soutien à la conformité, de conseil aux entreprises, d'assistance pour les demandes d'ouverture de compte bancaire et de prestataire de paiement, et d'autres services de soutien aux entreprises associés (collectivement, les "Services").
                            </p>
                            <p>
                                Nous exploitons notre site Web et tous les sites Web, plateformes, portails clients, applications, communications et services associés qui font référence ou sont liés à ces Conditions Générales.
                            </p>
                            <p>
                                Vous pouvez nous contacter par :<br />
                                Email : <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a><br />
                                Téléphone : +44 20 4578 0726
                            </p>
                            <p>
                                Ces Conditions Générales constituent un accord juridiquement contraignant entre vous, que vous agissiez personnellement ou au nom d'une société ou d'une autre organisation ("vous", "votre" ou "Client"), et Seven Oak Prestige Ltd concernant votre accès et votre utilisation de nos Services.
                            </p>
                            <p>
                                En achetant, en accédant ou en utilisant nos Services, vous confirmez que vous avez lu, compris et accepté d'être lié par ces Conditions Générales.
                            </p>
                            <p>
                                Si vous n'êtes pas d'accord avec ces Conditions Générales, vous ne devez pas acheter ni continuer à utiliser nos Services.
                            </p>
                            <p>
                                Nous pouvons modifier ces Conditions Générales de temps à autre. Toute version révisée entrera en vigueur dès sa publication, sauf indication contraire. La date de "Dernière mise à jour" figurant en haut de ce document indique quand la dernière révision a été effectuée.
                            </p>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. NOS SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nos Services sont principalement destinés à aider les entrepreneurs, les entreprises et d'autres clients professionnels dans la création de société au Royaume-Uni, l'administration, la préparation de la conformité et le soutien commercial associé.</p>
                                <p>Nos Services peuvent être utilisés par des clients situés en dehors du Royaume-Uni.</p>
                                <p>Lorsque vous accédez ou achetez nos Services depuis une autre juridiction, il vous incombe de déterminer si l'utilisation de nos Services est légale dans votre pays ou juridiction et de vous conformer aux lois locales applicables.</p>
                                <p>Nous nous réservons le droit de refuser ou d'interrompre les Services lorsque nous avons des raisons de croire que leur fourniture enfreindrait les lois applicables, la réglementation, les sanctions, les exigences réglementaires, les normes de conformité internes ou les exigences de l'un de nos prestataires de services professionnels ou tiers.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. NATURE DE NOS SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Seven Oak Prestige Ltd fournit des services de soutien et de conseil aux entreprises.</p>
                                <p>Sauf indication écrite contraire explicite, nous n'agissons pas en tant que votre avocat, expert-comptable, conseiller fiscal, conseiller financier, conseiller en investissement, banque ou institution financière réglementée.</p>
                                <p>Les informations fournies via notre site Web, nos consultations, nos communications, nos guides ou d'autres documents sont des informations commerciales générales et ne doivent pas être automatiquement considérées comme des conseils juridiques, fiscaux, comptables, d'investissement ou financiers réglementés.</p>
                                <p>Lorsqu'un avis professionnel spécialisé est requis, vous devez consulter un professionnel dûment qualifié.</p>
                                <p>Notre assistance pour une demande, une inscription, un processus de conformité, une demande bancaire ou un service tiers ne constitue pas une garantie d'approbation ou d'acceptation.</p>
                                <p>Les décisions finales prises par la Companies House, le HMRC, les banques, les institutions de monnaie électronique, les processeurs de paiement, les acquéreurs de cartes, les régulateurs et autres tiers échappent à notre contrôle.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. DROITS DE PROPRIÉTÉ INTELLECTUELLE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Sauf indication contraire, Seven Oak Prestige Ltd possède ou détient sous licence la propriété intellectuelle contenue dans nos Services, y compris le contenu du site Web, les textes, graphiques, l'image de marque, les logos, documents, modèles, rapports, photographies, vidéos, bases de données, logiciels et autres éléments matériels.</p>
                                <p>Ces éléments sont protégés par les lois applicables en matière de droits d'auteur, de marques et de propriété intellectuelle.</p>
                                <p>Sous réserve de ces Conditions, il vous est accordé une licence limitée, non exclusive, non transférable et révocable d'accès et d'utilisation de nos Services à des fins commerciales internes ou personnelles.</p>
                                <p>Vous ne pouvez pas reproduire, republier, vendre, concéder sous licence, distribuer, modifier, exploiter commercialement ou afficher publiquement notre matériel exclusif sans notre consentement écrit préalable.</p>
                                <p>Rien dans ces Conditions ne vous transfère la propriété de notre propriété intellectuelle.</p>
                                <p>Toute utilisation non autorisée de notre propriété intellectuelle peut entraîner la suspension ou la résiliation de votre accès aux Services et peut donner lieu à des poursuites judiciaires.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. REPRÉSENTATIONS DE L'UTILISATEUR ET IDENTIFICATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>En achetant ou en utilisant nos Services, vous déclarez et garantissez que :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>les informations que vous fournissez sont vraies, exactes, complètes et à jour ;</li>
                                    <li>les documents qui nous sont fournis sont authentiques et n'ont pas été modifiés de manière frauduleuse ;</li>
                                    <li>vous avez le pouvoir d'agir au nom de toute entreprise ou personne que vous représentez ;</li>
                                    <li>vous êtes légalement capable de conclure un contrat avec nous ;</li>
                                    <li>vous respecterez ces Conditions et les lois applicables ;</li>
                                    <li>vous n'utiliserez pas nos Services à des fins illégales ou frauduleuses ;</li>
                                    <li>vous nous informerez rapidement si les informations précédemment fournies deviennent inexactes ou changent de manière substantielle.</li>
                                </ul>
                                <p>Nos Services destinés à la création d'entreprises, à l'administration d'entreprises, aux applications de services financiers ou aux engagements contractuels sont destinés aux personnes âgées de 18 ans ou plus.</p>
                                <p>Nous pouvons demander une pièce d'identité, un justificatif de domicile, des preuves de l'origine des fonds, de l'origine du patrimoine, des informations sur les activités commerciales, des documents de l'entreprise ou d'autres informations nécessaires pour satisfaire à nos exigences de conformité ou aux exigences de fournisseurs tiers.</p>
                                <p>Si les informations fournies sont substantiellement fausses, trompeuses, frauduleuses, incomplètes ou incohérentes, nous pouvons suspendre ou résilier les Services.</p>
                                <p>Lorsque la loi l'exige ou le permet, les suspicions de fraude, de blanchiment d'argent, de violation de sanctions, d'usurpation d'identité ou de tout autre comportement illégal peuvent être signalées aux autorités compétentes.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. INSCRIPTION DES CLIENTS ET COMPTES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Certains Services peuvent vous obliger à créer un compte en ligne ou un profil client.</p>
                                <p>Vous êtes responsable du maintien de la confidentialité de vos informations de connexion.</p>
                                <p>Vous êtes responsable de l'activité réalisée par le biais de votre compte, sauf si vous nous informez rapidement d'une suspicion d'accès non autorisé.</p>
                                <p>Vous devez fournir des coordonnées exactes et les tenir à jour.</p>
                                <p>Nous pouvons suspendre un compte si nous suspectons raisonnablement une utilisation non autorisée, une activité frauduleuse, des problèmes de sécurité ou une violation de ces Conditions.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. PRODUITS ET SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Tous les produits et Services sont soumis à disponibilité et aux conditions d'éligibilité.</p>
                                <p>Les Services exacts inclus dans votre achat seront ceux décrits sur notre site Web, votre facture, votre proposition, la confirmation de commande, le contrat de service ou toute autre communication écrite émise par nous.</p>
                                <p>Nous nous réservons le droit de modifier, de remplacer, de retirer ou d'interrompre un produit ou Service.</p>
                                <p>Les prix peuvent changer à tout moment, bien qu'un changement de prix n'affecte normalement pas un achat terminé à moins qu'une erreur de tarification évidente ne se soit produite.</p>
                                <p>Des travaux supplémentaires en dehors du périmètre initialement acheté peuvent être soumis à des frais supplémentaires.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. ACHATS ET PAIEMENTS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Vous acceptez de fournir des informations de facturation et de paiement exactes et complètes.</p>
                                <p>Les prix seront affichés ou communiqués avant l'achat.</p>
                                <p>Sauf indication contraire, les paiements sont facturés dans la devise affichée lors du paiement, sur la facture concernée ou dans la proposition appropriée.</p>
                                <p>Nous pouvons accepter les paiements par cartes de paiement, virements bancaires ou fournisseurs de paiement tiers que nous mettons à disposition.</p>
                                <p>Le traitement des paiements peut être effectué par des prestataires de services de paiement indépendants et peut être soumis à leurs propres conditions.</p>
                                <p>Vous nous autorisez, ainsi que nos fournisseurs de paiement, à traiter les paiements relatifs aux Services que vous commandez.</p>
                                <p>Lorsqu'un Service fonctionne sur un abonnement récurrent, vous autorisez les frais récurrents conformément à la fréquence de facturation divulguée au moment de l'achat jusqu'à ce que le Service soit correctement annulé.</p>
                                <p>Le défaut d'utilisation d'un Service ne constitue pas en soi une annulation.</p>
                                <p>Si un paiement échoue, reste en souffrance, est annulé ou fait l'objet d'une rétrofacturation injustifiée après que les Services ont été fournis, nous pouvons suspendre les Services concernés et demander le recouvrement des montants qui nous sont légalement dus.</p>
                                <p>Rien dans ces Conditions ne limite votre droit légal de contester une transaction non autorisée ou véritablement incorrecte par l'intermédiaire de votre fournisseur de paiement.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. REMBOURSEMENTS ET ANNULATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <h3 className="font-semibold text-foreground">8.1 Droits statutaires</h3>
                                <p>Rien dans ces Conditions n'exclut ni ne restreint aucun droit de protection des consommateurs obligatoire qui vous est applicable en vertu de la loi applicable.</p>
                                <p>Lorsque vous avez légalement droit à un délai de rétractation ou d'annulation, ces droits statutaires s'appliqueront.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.2 Demande d'exécution immédiate</h3>
                                <p>Lorsque vous demandez expressément que nous commencions à fournir un Service pendant une période d'annulation légale applicable, vous reconnaissez que les travaux peuvent commencer immédiatement.</p>
                                <p>Si vous exercez par la suite un droit légal d'annulation après que les travaux ont commencé, nous pouvons être autorisés à conserver ou à facturer un montant proportionnel aux Services déjà effectués, lorsque la loi applicable le permet.</p>
                                <p>Lorsqu'un Service a été entièrement exécuté à votre demande expresse de le commencer pendant la période d'annulation, votre droit de rétractation légal peut cesser si la loi le permet.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.3 Frais tiers et gouvernementaux non remboursables</h3>
                                <p>Les frais de dépôt gouvernementaux, les frais de Companies House, les frais de vérification d'identité, les frais de messagerie, les frais de port, les frais de fournisseurs tiers et d'autres coûts externes déjà engagés en votre nom ne sont pas remboursables une fois payés ou engagés, sauf si la loi applicable l'exige autrement.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.4 Services sur mesure et commencés</h3>
                                <p>Lorsque nous avons commencé un travail substantiel sur un service de conseil sur mesure, de conformité, d'inscription ou d'application à votre demande, tout remboursement tiendra compte des travaux déjà réalisés et des dépenses non récupérables déjà engagées.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.5 Création de société</h3>
                                <p>Une fois votre demande de constitution de société soumise à la Companies House, les frais de dépôt gouvernementaux et les travaux déjà réalisés ne peuvent normalement pas être remboursés.</p>
                                <p>Si la Companies House rejette une candidature parce que des informations supplémentaires ou des corrections sont nécessaires, cela ne vous donne pas automatiquement droit à un remboursement lorsque nous restons en mesure de corriger et de soumettre à nouveau la candidature.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.6 Assistance bancaire et fournisseur de paiement</h3>
                                <p>Les frais payés pour l'assistance bancaire, l'EMI, le fournisseur de paiement ou le compte marchand concernent les travaux de conseil et de soutien aux candidatures que nous effectuons et non le résultat de la candidature tierce.</p>
                                <p>Une fois que les travaux de conseil de fond, la préparation de la candidature, la révision des documents, l'évaluation du fournisseur, les réunions ou les soumissions auront commencé, le Service sera considéré comme commencé.</p>
                                <p>Un rejet, une demande d'informations supplémentaires, un retard d'examen ou une décision d'une banque, d'une EMI, d'un fournisseur de paiement ou de tout autre tiers ne crée pas automatiquement un droit à un remboursement.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.7 Services d'abonnement</h3>
                                <p>Lorsqu'un abonnement ou un service d'adresse récurrente est fourni, l'annulation doit être demandée par e-mail à : <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>Vous devez donner un préavis suffisant avant la prochaine date de renouvellement lorsqu'une période de préavis a été divulguée lors de l'achat du Service.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. SERVICES DE CRÉATION DE SOCIÉTÉ</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Lorsque vous nous chargez de créer une société au Royaume-Uni, vous nous autorisez à soumettre les informations et les documents que vous avez fournis à la Companies House et, le cas échéant, à d'autres prestataires de services concernés.</p>
                                <p>Vous êtes responsable de vous assurer que les informations qui nous sont fournies sont exactes.</p>
                                <p>Bien que nous puissions examiner les informations à la recherche d'incohérences évidentes, vous restez responsable de la confirmation d'éléments tels que :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>le nom de l'entreprise proposé ;</li>
                                    <li>les informations sur les administrateurs ;</li>
                                    <li>les informations sur les actionnaires ;</li>
                                    <li>les personnes exerçant un contrôle important ;</li>
                                    <li>la structure de l'actionnariat ;</li>
                                    <li>le siège social ;</li>
                                    <li>les adresses de service ;</li>
                                    <li>les codes SIC ;</li>
                                    <li>l'adresse e-mail de l'entreprise ; et</li>
                                    <li>d'autres informations relatives à l'incorporation.</li>
                                </ul>
                                <p>Les délais de création de société que nous fournissons sont des estimations, sauf garantie expresse par écrit.</p>
                                <p>Nous ne sommes pas responsables des retards causés par la Companies House, des exigences de vérification d'identité, des défaillances techniques, des informations inexactes, des examens réglementaires ou de circonstances échappant à notre contrôle raisonnable.</p>
                                <p>L'enregistrement d'une société ne garantit pas en soi l'éligibilité à un compte bancaire, à un compte marchand, à une passerelle de paiement, à une facilité de crédit, à un enregistrement fiscal, à une licence ou à tout autre service tiers.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. SERVICES DE SIÈGE SOCIAL ET D'ADRESSE COMMERCIALE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Lorsque nous fournissons un siège social, une adresse de service de directeur, une adresse de correspondance, une adresse commerciale virtuelle ou un service de traitement du courrier, vous devez utiliser l'adresse uniquement conformément au Service acheté.</p>
                                <p>Vous ne devez pas utiliser notre adresse pour une activité illégale, trompeuse, frauduleuse ou non autorisée.</p>
                                <p>Vous ne devez pas déclarer que vous occupez physiquement des locaux où seule une adresse ou un service de traitement du courrier a été acheté.</p>
                                <p>Nous pouvons exiger une vérification d'identité satisfaisante et des informations commerciales avant d'activer un service d'adresse.</p>
                                <p>Nous nous réservons le droit de refuser ou de résilier un service d'adresse lorsque :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>l'identification requise n'a pas été fournie ;</li>
                                    <li>une activité suspecte ou interdite est identifiée ;</li>
                                    <li>un courrier excessif ou interdit est reçu ;</li>
                                    <li>l'adresse est utilisée en dehors de la portée convenue ;</li>
                                    <li>les frais restent impayés ;</li>
                                    <li>l'utilisation de l'adresse peut nous exposer, nous ou nos fournisseurs, à des risques juridiques, réglementaires ou de réputation ; ou</li>
                                    <li>la poursuite de la fourniture du service enfreindrait la loi applicable ou les exigences d'un fournisseur tiers.</li>
                                </ul>
                                <p>Lors de l'annulation d'un service d'adresse, vous devez rapidement supprimer l'adresse de la Companies House et de tout autre registre public ou privé où vous n'êtes plus autorisé à l'utiliser.</p>
                                <p>L'utilisation continue non autorisée d'une adresse à la suite d'une résiliation peut entraîner des frais supplémentaires et des mesures correctives appropriées.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. ASSISTANCE BANCAIRE ET FOURNISSEUR DE PAIEMENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous pouvons fournir un soutien consultatif et administratif dans le cadre des demandes adressées aux banques, aux établissements de monnaie électronique, aux prestataires de services de paiement, aux acquéreurs de marchands et à d'autres prestataires de services financiers.</p>
                                <p>Nos services peuvent inclure :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>évaluer l'adéquation potentielle du fournisseur ;</li>
                                    <li>examiner les informations commerciales ;</li>
                                    <li>examiner les sites Web et les documents justificatifs ;</li>
                                    <li>aider à la préparation des candidatures ;</li>
                                    <li>aider les clients à comprendre les questions de conformité ;</li>
                                    <li>fournir des conseils généraux sur la préparation bancaire ;</li>
                                    <li>aider à traiter les demandes d'informations complémentaires ; et</li>
                                    <li>faciliter les mises en relation le cas échéant.</li>
                                </ul>
                                <p>Seven Oak Prestige Ltd ne contrôle pas le processus de souscription, de conformité ou d'approbation des institutions financières tierces.</p>
                                <p>Nous ne garantissons pas :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>l'approbation du compte ;</li>
                                    <li>l'approbation du compte marchand ;</li>
                                    <li>la disponibilité de certaines devises ;</li>
                                    <li>les facilités de crédit ;</li>
                                    <li>les limites de paiement ;</li>
                                    <li>la fonctionnalité du compte ;</li>
                                    <li>les volumes de traitement ;</li>
                                    <li>les délais d'intégration ;</li>
                                    <li>l'acceptation des transactions ;</li>
                                    <li>la poursuite d'un compte après son ouverture ; ou</li>
                                    <li>toute décision spécifique d'une institution financière.</li>
                                </ul>
                                <p>Les critères d'éligibilité peuvent changer sans préavis et les fournisseurs peuvent rejeter les candidatures sans fournir de raisons détaillées.</p>
                                <p>Vous devez fournir des informations véridiques et complètes dans toutes les demandes.</p>
                                <p>Nous n'aiderons pas sciemment un client à fournir des informations fausses, trompeuses ou mensongères à une institution financière.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. CONFORMITÉ, KYC ET DILIGENCE RAISONNABLE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous pouvons procéder à l'identification, la vérification, la recherche de sanctions, la prévention de la fraude et à d'autres contrôles de diligence raisonnable si nécessaire pour nos Services, la gestion des risques, les obligations contractuelles ou les exigences légales.</p>
                                <p>Nous pouvons demander des informations concernant :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>l'identité ;</li>
                                    <li>l'adresse résidentielle ;</li>
                                    <li>la nationalité ;</li>
                                    <li>la résidence ;</li>
                                    <li>les activités commerciales ;</li>
                                    <li>les clients et les fournisseurs ;</li>
                                    <li>les transactions attendues ;</li>
                                    <li>l'origine des fonds ;</li>
                                    <li>l'origine de la richesse ;</li>
                                    <li>la propriété et le contrôle ;</li>
                                    <li>les sites Web ;</li>
                                    <li>les contrats ;</li>
                                    <li>les factures ;</li>
                                    <li>les relevés bancaires ; et</li>
                                    <li>d'autres preuves justificatives.</li>
                                </ul>
                                <p>Nous pouvons faire appel à des prestataires de vérification tiers pour effectuer les vérifications appropriées.</p>
                                <p>Nous nous réservons le droit de refuser ou d'interrompre une relation lorsqu'une diligence raisonnable satisfaisante ne peut être effectuée.</p>
                                <p>Nous pouvons conserver les dossiers pertinents pour la période requise ou autorisée par la loi applicable, nos exigences commerciales légitimes et notre Politique de Confidentialité publiée.</p>
                                <p>Les droits des personnes concernées, y compris les droits d'accès ou de suppression, sont soumis aux exceptions et limitations prévues par les lois applicables sur la protection des données.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">13. RESPONSABILITÉS DU CLIENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Vous êtes responsable de :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>fournir des informations exactes et complètes ;</li>
                                    <li>répondre aux demandes d'informations dans des délais raisonnables ;</li>
                                    <li>l'examen des documents avant la soumission sur demande ;</li>
                                    <li>conserver une pièce d'identité valide et des coordonnées à jour ;</li>
                                    <li>vous assurer que vos activités commerciales sont légales ;</li>
                                    <li>obtenir les licences ou approbations réglementaires applicables à votre entreprise ;</li>
                                    <li>vous conformer à vos obligations fiscales ;</li>
                                    <li>conserver les registres de l'entreprise requis ;</li>
                                    <li>effectuer des déclarations statutaires lorsqu'elles ne sont pas expressément incluses dans le Service que vous avez acheté ; et</li>
                                    <li>nous informer rapidement des changements importants concernant les Services que nous fournissons.</li>
                                </ul>
                                <p>Vous ne devez pas nous demander de soumettre des informations que vous savez être inexactes, trompeuses ou frauduleuses.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">14. ACTIVITÉS INTERDITES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Vous ne devez pas utiliser nos Services :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>à des fins de fraude, de tromperie ou de fausse déclaration ;</li>
                                    <li>pour le blanchiment d'argent ou le financement du terrorisme ;</li>
                                    <li>pour échapper à des sanctions ou à des restrictions réglementaires ;</li>
                                    <li>pour dissimuler la propriété effective illégale ;</li>
                                    <li>pour usurper l'identité d'une autre personne ;</li>
                                    <li>pour soumettre des documents falsifiés ou manipulés ;</li>
                                    <li>pour obtenir de l'argent ou des services par tromperie ;</li>
                                    <li>pour tromper les banques, les fournisseurs de paiement, les régulateurs, les clients ou d'autres tiers ;</li>
                                    <li>pour faciliter une activité criminelle ;</li>
                                    <li>pour vendre des biens ou des services interdits ou illégaux ;</li>
                                    <li>pour éluder des impôts, des amendes, des décisions de justice ou une mesure d'exécution légale ;</li>
                                    <li>pour enfreindre les droits de propriété intellectuelle ;</li>
                                    <li>pour compromettre nos systèmes ou notre cybersécurité ;</li>
                                    <li>pour distribuer des logiciels malveillants, des logiciels espions ou tout autre matériel nuisible ;</li>
                                    <li>pour harceler ou menacer nos employés, sous-traitants ou prestataires de services ; ou</li>
                                    <li>pour toute activité interdite par la loi applicable.</li>
                                </ul>
                                <p>Nous pouvons immédiatement suspendre ou résilier nos Services si nous soupçonnons raisonnablement une activité interdite.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">15. CONTENU ET DOCUMENTS DU CLIENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Vous conservez la propriété des documents, du matériel et des informations que vous nous fournissez.</p>
                                <p>Vous nous accordez la permission d'utiliser, de reproduire, de transmettre et de traiter ce matériel dans la mesure raisonnablement nécessaire pour fournir les Services que vous avez demandés.</p>
                                <p>Vous garantissez que vous avez le droit de nous fournir ce matériel.</p>
                                <p>Vous restez responsable de vous assurer que les documents et les informations que vous fournissez n'enfreignent pas illégalement les droits des tiers.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">16. FOURNISSEURS TIERS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nos Services peuvent impliquer ou vous orienter vers des fournisseurs tiers, notamment la Companies House, HMRC, les banques, les institutions de monnaie électronique, les processeurs de paiement, les fournisseurs de vérification d'identité, les comptables, les fournisseurs d'adresses, les services de messagerie, les fournisseurs de télécommunications et les plateformes logicielles.</p>
                                <p>Ces tiers sont indépendants de Seven Oak Prestige Ltd, sauf indication contraire explicite.</p>
                                <p>Leurs services sont soumis à leurs propres conditions d'éligibilité, modalités, politiques de confidentialité et procédures de conformité.</p>
                                <p>Nous ne sommes pas responsables des décisions, retards, interruptions de service, fermetures de compte, changements de politique ou d'autres actes ou omissions de tiers indépendants indépendants de notre volonté raisonnable.</p>
                                <p>Une référence ou une introduction à un tiers ne constitue pas une garantie ou une approbation de sa pertinence continue.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">17. GESTION DES SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous nous réservons le droit de gérer et de protéger nos Services, notamment par les moyens suivants :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>surveiller le respect de ces Conditions ;</li>
                                    <li>restreindre ou suspendre l'accès lorsque cela est nécessaire ;</li>
                                    <li>refuser les instructions ;</li>
                                    <li>demander des vérifications supplémentaires ;</li>
                                    <li>supprimer tout contenu illégal ou nuisible ;</li>
                                    <li>protéger nos systèmes et notre propriété intellectuelle ; et</li>
                                    <li>signaler les comportements illégaux présumés lorsque la loi l'exige ou le permet.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">18. CONFIDENTIALITÉ ET DONNÉES PERSONNELLES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous prenons la confidentialité et la protection des données au sérieux.</p>
                                <p>Les informations personnelles sont traitées conformément à notre Politique de Confidentialité et à la législation britannique applicable sur la protection des données.</p>
                                <p>Notre Politique de Confidentialité doit être lue conjointement avec ces Conditions Générales.</p>
                                <p>Lorsque des prestataires de services tiers traitent vos informations dans le cadre des Services que vous avez demandés, leurs propres politiques de confidentialité peuvent également s'appliquer.</p>
                                <p>En fournissant des informations sur une autre personne, vous confirmez que vous avez l'autorité légale pour fournir ces informations lorsque cela est requis.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">19. PLAINTES RELATIVES À LA PROPRIÉTÉ INTELLECTUELLE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous respectons les droits de propriété intellectuelle d'autrui.</p>
                                <p>Si vous pensez que le contenu mis à disposition via nos Services enfreint les droits de propriété intellectuelle que vous possédez ou contrôlez, veuillez contacter : <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>Votre notification doit contenir suffisamment d'informations pour nous permettre d'identifier et d'examiner le matériel concerné.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">20. DURÉE ET RÉSILIATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Ces Conditions restent en vigueur pendant que vous utilisez nos Services.</p>
                                <p>Nous pouvons suspendre, restreindre ou résilier les Services lorsque :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>vous enfreignez matériellement ces Conditions ;</li>
                                    <li>les frais restent impayés ;</li>
                                    <li>la diligence raisonnable requise ne peut pas être effectuée ;</li>
                                    <li>les informations fournies sont matériellement fausses ou trompeuses ;</li>
                                    <li>nous soupçonnons raisonnablement une fraude ou une activité illégale ;</li>
                                    <li>la poursuite de la fourniture crée un risque juridique, réglementaire ou de conformité inacceptable ; ou</li>
                                    <li>nous y sommes tenus par la loi ou par un prestataire nécessaire pour fournir le Service.</li>
                                </ul>
                                <p>La résiliation n'affecte pas les droits ou obligations acquis avant la résiliation.</p>
                                <p>Les frais légitimement dus pour les Services déjà fournis restent payables.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">21. MODIFICATIONS ET INTERRUPTIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous pouvons mettre à jour, modifier, suspendre ou interrompre certaines parties de notre site Web ou de nos Services de temps à autre.</p>
                                <p>Nous nous efforçons de maintenir des Services fiables, mais ne pouvons pas garantir une disponibilité ininterrompue.</p>
                                <p>Nous ne sommes pas responsables des interruptions de service temporaires causées par la maintenance, les pannes de télécommunications, les pannes de tiers, les incidents de cybersécurité, les systèmes gouvernementaux, les événements de force majeure ou les circonstances indépendantes de notre volonté raisonnable.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">22. LOI APPLICABLE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Les présentes Conditions et tout litige ou réclamation contractuel ou non contractuel en découlant seront régis par les lois de l'Angleterre et du Pays de Galles, sauf disposition contraire de la législation obligatoire sur la protection des consommateurs.</p>
                                <p>Les tribunaux d'Angleterre et du Pays de Galles seront compétents, sous réserve de tout droit obligatoire qu'un consommateur pourrait avoir de porter plainte dans une autre juridiction applicable.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">23. RÉSOLUTION DES LITIGES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Avant d'engager des procédures judiciaires formelles, les deux parties doivent déployer des efforts raisonnables pour résoudre un litige de manière informelle.</p>
                                <p>Une plainte ou un avis de litige doit être envoyé à : <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a> et doit contenir des détails suffisants sur le problème et la résolution demandée.</p>
                                <p>Nous tenterons d'examiner la question et de répondre dans un délai raisonnable.</p>
                                <p>Rien dans la présente section n'empêche l'une ou l'autre des parties de demander une injonction urgente ou d'exercer des droits qui ne peuvent être légalement exclus.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">24. CORRECTIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Notre site Web ou d'autres communications peuvent occasionnellement contenir des erreurs typographiques, des inexactitudes ou des omissions concernant les prix, les descriptions, la disponibilité ou d'autres informations.</p>
                                <p>Nous nous réservons le droit de corriger les erreurs ou omissions manifestes et de mettre à jour les informations le cas échéant.</p>
                                <p>Lorsqu'une erreur de tarification importante affecte une commande, nous pouvons vous contacter avant de fournir le Service et vous offrir la possibilité de procéder au prix correct ou d'annuler.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">25. AVIS DE NON-RESPONSABILITÉ</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nos Services sont fournis avec un soin et une compétence raisonnables, sous réserve des présentes Conditions et de la loi applicable.</p>
                                <p>Nous ne garantissons pas que chaque objectif commercial recherché par un Client sera atteint.</p>
                                <p>En particulier, nous ne pouvons garantir les décisions prises par la Companies House, le HMRC, les banques, les institutions de monnaie électronique, les processeurs de paiement, les régulateurs, les autorités gouvernementales ou tout autre tiers indépendant.</p>
                                <p>Les informations commerciales et de conformité peuvent évoluer avec le temps et les informations présentées sur notre site Web ou dans les documents d'orientation généraux ne doivent pas être considérées comme étant toujours d'actualité.</p>
                                <p>Rien dans ces Conditions n'exclut les garanties, devoirs ou droits qui ne peuvent être légalement exclus.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">26. LIMITATION DE RESPONSABILITÉ</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Rien dans ces Conditions n'exclut ni ne limite la responsabilité lorsque cela serait illégal, y compris la responsabilité en cas de fraude ou de fausse déclaration frauduleuse, de décès ou de blessure corporelle causés par négligence, ou toute autre responsabilité qui ne peut être légalement exclue.</p>
                                <p>Sous réserve de ces exclusions, Seven Oak Prestige Ltd ne sera pas responsable des pertes indirectes ou consécutives qui n'étaient pas raisonnablement prévisibles lors de la conclusion du contrat.</p>
                                <p>Nous ne serons pas responsables des pertes résultant de :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>des informations inexactes que vous avez fournies ;</li>
                                    <li>de votre non-respect des exigences légales ou réglementaires ;</li>
                                    <li>des décisions de fournisseurs tiers indépendants ;</li>
                                    <li>du rejet d'une demande bancaire ou de prestataire de paiement ;</li>
                                    <li>des changements dans les conditions d'éligibilité des tiers ;</li>
                                    <li>des retards imputables à la Companies House, au HMRC ou à d'autres autorités publiques ;</li>
                                    <li>la suspension ou la fermeture de comptes par des institutions financières indépendantes ;</li>
                                    <li>une activité illégale entreprise par vous ; ou</li>
                                    <li>des circonstances indépendantes de notre volonté raisonnable.</li>
                                </ul>
                                <p>Dans la mesure permise par la loi, notre responsabilité globale découlant d'un Service particulier ne dépassera pas le montant total que vous avez payé à Seven Oak Prestige Ltd pour le Service à l'origine de la réclamation.</p>
                                <p>Rien dans cette clause n'affecte les droits impératifs des consommateurs.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">27. INDEMNISATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Dans la mesure permise par la loi, vous acceptez d'indemniser Seven Oak Prestige Ltd contre les pertes, responsabilités, réclamations et coûts raisonnables découlant directement de :</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>une conduite frauduleuse ou illégale de votre part ;</li>
                                    <li>des informations matériellement fausses que vous avez fournies ;</li>
                                    <li>des documents que vous n'étiez pas autorisé à fournir ;</li>
                                    <li>une violation des droits de propriété intellectuelle de tiers par des documents que vous avez fournis ; ou</li>
                                    <li>votre violation matérielle de ces Conditions.</li>
                                </ul>
                                <p>Cette disposition ne vous oblige pas à nous indemniser pour les pertes causées par notre propre négligence, rupture de contrat ou conduite illégale.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">28. COMMUNICATIONS ÉLECTRONIQUES, TRANSACTIONS ET SIGNATURES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Les communications entre vous et nous peuvent se faire de manière électronique, y compris par courrier électronique, formulaires en ligne, plateformes de messagerie et portails clients.</p>
                                <p>Vous consentez à recevoir des avis contractuels, des factures, des politiques, des confirmations et d'autres communications par voie électronique lorsque la loi le permet.</p>
                                <p>Vous acceptez que les dossiers électroniques et les signatures électroniques puissent être utilisés dans le cadre de nos Services lorsque cela est légalement valide.</p>
                                <p>Vous êtes responsable de vous assurer que l'adresse e-mail et le numéro de téléphone que vous nous avez fournis restent actuels.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">29. PLAINTES ET COORDONNÉES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nous visons à fournir un service professionnel et transparent.</p>
                                <p>Si vous êtes insatisfait d'un Service, veuillez nous contacter afin que nous puissions examiner la question.</p>
                                <p>Les plaintes doivent être envoyées par e-mail avec pour objet "Plainte" à l'adresse suivante : <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>Veuillez indiquer votre nom, le nom de votre société le cas échéant, la référence de la commande ou de la facture, les détails de la plainte et la résolution que vous recherchez.</p>
                                <p>Nous accuserons réception des plaintes, les examinerons et nous efforcerons de fournir une réponse substantielle dans un délai raisonnable.</p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Coordonnées</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Pour toute question concernant ces Conditions Générales ou l'un de nos Services, veuillez contacter :</p>
                                <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                                <p>
                                    Numéro de société : 16903092<br />
                                    124 City Road<br />
                                    Londres EC1V 2NX<br />
                                    Royaume-Uni
                                </p>
                                <p>
                                    Téléphone : +44 20 4578 0726<br />
                                    Email :{' '}
                                    <a href="mailto:contact@sevenoakprestige.com" className="font-semibold text-[#d4af37] hover:underline">
                                        contact@sevenoakprestige.com
                                    </a>
                                </p>
                                <p className="pt-4 text-sm text-foreground/60 border-t border-border/40">
                                    © 2026 Seven Oak Prestige Ltd. Tous droits réservés.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
