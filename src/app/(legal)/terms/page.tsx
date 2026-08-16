import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Terms & Conditions – Seven Oak Prestige',
    description: 'Read the Terms and Conditions for Seven Oak Prestige Ltd. Understand your rights and obligations when using our UK company formation, address, and advisory services.',
    openGraph: {
        title: 'Terms & Conditions – Seven Oak Prestige',
        description: 'Terms and Conditions governing the use of Seven Oak Prestige company formation and business address services.',
        url: 'https://www.sevenoakprestige.com/terms',
    },
    robots: { index: false, follow: true },
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="mx-auto max-w-4xl px-4 pt-32 pb-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-[#d4af37]"
                >
                    <FaArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Terms & Conditions
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Agreement Info */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                        <p className="text-sm text-foreground/70">Last updated: 12 August 2026</p>
                        <h2 className="mt-4 mb-3 text-xl font-bold text-foreground">AGREEMENT TO OUR LEGAL TERMS</h2>
                        <div className="space-y-4 leading-relaxed text-foreground/80">
                            <p>
                                We are Seven Oak Prestige Ltd (“Seven Oak Prestige”, “Company”, “we”, “us”, or “our”), a private limited company incorporated in England and Wales under company number 16903092, with its registered office at:
                            </p>
                            <p>
                                124 City Road London EC1V 2NX United Kingdom
                            </p>
                            <p>
                                We provide company formation, registered office and business address services, corporate administration, compliance support, business advisory services, banking and payment-provider application assistance, and other related business support services (collectively, the “Services”).
                            </p>
                            <p>
                                We operate our website and any related websites, platforms, client portals, applications, communications and services that refer or link to these Terms and Conditions.
                            </p>
                            <p>
                                You can contact us by:<br />
                                Email: <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a><br />
                                Telephone: +44 20 4578 0726
                            </p>
                            <p>
                                These Terms and Conditions constitute a legally binding agreement between you, whether acting personally or on behalf of a company or other organisation (“you”, “your” or “Client”), and Seven Oak Prestige Ltd concerning your access to and use of our Services.
                            </p>
                            <p>
                                By purchasing, accessing or using our Services, you confirm that you have read, understood and agreed to be bound by these Terms and Conditions.
                            </p>
                            <p>
                                If you do not agree with these Terms and Conditions, you must not purchase or continue to use our Services.
                            </p>
                            <p>
                                We may amend these Terms and Conditions from time to time. Any revised version will become effective when published, unless otherwise stated. The “Last updated” date at the top of this document indicates when the latest revision was made.
                            </p>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. OUR SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Our Services are primarily intended to assist entrepreneurs, companies and other business clients with UK corporate formation, administration, compliance preparation and related business support.</p>
                                <p>Our Services may be accessed by clients located outside the United Kingdom.</p>
                                <p>Where you access or purchase our Services from another jurisdiction, you are responsible for determining whether using our Services is lawful in your country or jurisdiction and for complying with any applicable local laws.</p>
                                <p>We reserve the right to refuse or discontinue Services where we reasonably believe that providing them would breach applicable laws, regulations, sanctions, regulatory requirements, internal compliance standards or the requirements of one of our professional or third-party service providers.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. NATURE OF OUR SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Seven Oak Prestige Ltd provides business support and advisory services.</p>
                                <p>Unless expressly stated otherwise in writing, we are not acting as your solicitor, barrister, accountant, tax adviser, financial adviser, investment adviser, bank or regulated financial institution.</p>
                                <p>Information provided through our website, consultations, communications, guides or other materials is general business information and should not automatically be treated as legal, tax, accounting, investment or regulated financial advice.</p>
                                <p>Where specialist professional advice is required, you should obtain advice from an appropriately qualified professional.</p>
                                <p>Our assistance with an application, registration, compliance process, banking application or third-party service does not constitute a guarantee of approval or acceptance.</p>
                                <p>Final decisions made by Companies House, HMRC, banks, electronic money institutions, payment processors, card acquirers, regulators and other third parties are outside our control.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. INTELLECTUAL PROPERTY RIGHTS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Unless otherwise stated, Seven Oak Prestige Ltd owns or licenses the intellectual property contained within our Services, including website content, text, graphics, branding, logos, documents, templates, reports, photographs, videos, databases, software and other materials.</p>
                                <p>These materials are protected by applicable copyright, trademark and intellectual property laws.</p>
                                <p>Subject to these Terms, you are granted a limited, non-exclusive, non-transferable and revocable licence to access and use our Services for your personal or internal business purposes.</p>
                                <p>You may not reproduce, republish, sell, license, distribute, modify, commercially exploit or publicly display our proprietary materials without our prior written consent.</p>
                                <p>Nothing in these Terms transfers ownership of our intellectual property to you.</p>
                                <p>Any unauthorised use of our intellectual property may result in suspension or termination of your access to the Services and may result in legal action.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. USER REPRESENTATIONS AND IDENTIFICATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>By purchasing or using our Services, you represent and warrant that:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>the information you provide is true, accurate, complete and current;</li>
                                    <li>documents supplied to us are genuine and have not been fraudulently altered;</li>
                                    <li>you have authority to act on behalf of any company or person you represent;</li>
                                    <li>you are legally capable of entering into a contract with us;</li>
                                    <li>you will comply with these Terms and applicable laws;</li>
                                    <li>you will not use our Services for unlawful or fraudulent purposes;</li>
                                    <li>you will promptly notify us if information previously supplied becomes inaccurate or changes materially.</li>
                                </ul>
                                <p>Our Services intended for company formation, corporate administration, financial-service applications or contractual engagements are intended for persons aged 18 or over.</p>
                                <p>We may request identification, proof of address, evidence of source of funds, source of wealth, business activity information, company documents or other information necessary to satisfy our compliance requirements or the requirements of third-party providers.</p>
                                <p>If information provided is materially false, misleading, fraudulent, incomplete or inconsistent, we may suspend or terminate the Services.</p>
                                <p>Where required or permitted by law, suspected fraud, money laundering, sanctions violations, identity fraud or other unlawful conduct may be reported to appropriate authorities.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. CLIENT REGISTRATION AND ACCOUNTS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Certain Services may require you to create an online account or client profile.</p>
                                <p>You are responsible for maintaining the confidentiality of your login credentials.</p>
                                <p>You are responsible for activity undertaken through your account unless you notify us promptly of suspected unauthorised access.</p>
                                <p>You must provide accurate contact details and keep them up to date.</p>
                                <p>We may suspend an account where we reasonably suspect unauthorised use, fraudulent activity, security concerns or violation of these Terms.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. PRODUCTS AND SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>All products and Services are subject to availability and eligibility.</p>
                                <p>The precise Services included in your purchase will be those described on our website, invoice, proposal, order confirmation, service agreement or other written communication issued by us.</p>
                                <p>We reserve the right to amend, replace, withdraw or discontinue a product or Service.</p>
                                <p>Prices may change at any time, although a price change will not normally affect a completed purchase unless an obvious pricing error has occurred.</p>
                                <p>Additional work outside the scope originally purchased may be subject to additional fees.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. PURCHASES AND PAYMENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You agree to provide accurate and complete billing and payment information.</p>
                                <p>Prices will be displayed or communicated to you before purchase.</p>
                                <p>Unless otherwise stated, payments are charged in the currency displayed at checkout, on the relevant invoice or in the relevant proposal.</p>
                                <p>We may accept payment through payment cards, bank transfers or third-party payment providers made available by us.</p>
                                <p>Payment processing may be carried out by independent payment service providers and may be subject to their own terms.</p>
                                <p>You authorise us and our payment providers to process payments relating to Services you order.</p>
                                <p>Where a Service operates on a recurring subscription, you authorise recurring charges according to the billing frequency disclosed at the time of purchase until the Service is properly cancelled.</p>
                                <p>Failure to use a Service does not itself constitute cancellation.</p>
                                <p>If a payment fails, remains overdue, is reversed or is subject to an unjustified chargeback after Services have been provided, we may suspend the relevant Services and seek recovery of amounts lawfully due to us.</p>
                                <p>Nothing in these Terms restricts your lawful right to dispute an unauthorised or genuinely incorrect transaction through your payment provider.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. REFUNDS AND CANCELLATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <h3 className="font-semibold text-foreground">8.1 Statutory rights</h3>
                                <p>Nothing in these Terms excludes or restricts any mandatory consumer rights that apply to you under applicable law.</p>
                                <p>Where you are legally entitled to a cooling-off or cancellation period, those statutory rights will apply.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.2 Requesting immediate performance</h3>
                                <p>Where you expressly request that we begin providing a Service during an applicable statutory cancellation period, you acknowledge that work may begin immediately.</p>
                                <p>If you subsequently exercise a statutory right to cancel after work has begun, we may be entitled to retain or charge an amount proportionate to Services already performed, where permitted by applicable law.</p>
                                <p>Where a Service has been fully performed following your express request to begin during the cancellation period, your statutory cancellation right may cease where permitted by law.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.3 Non-refundable third-party and government fees</h3>
                                <p>Government filing fees, Companies House fees, identity-verification charges, courier charges, postage charges, third-party provider fees and other external costs already incurred on your behalf are non-refundable once paid or incurred, except where applicable law requires otherwise.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.4 Bespoke and commenced services</h3>
                                <p>Where we have begun substantial work on a bespoke advisory, compliance, registration or application service at your request, any refund will take account of work already completed and non-recoverable expenses already incurred.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.5 Company formation</h3>
                                <p>Once your company incorporation application has been submitted to Companies House, government filing charges and work already completed cannot normally be refunded.</p>
                                <p>If Companies House rejects an application because additional information or corrections are required, this does not automatically entitle you to a refund where we remain capable of correcting and resubmitting the application.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.6 Banking and payment-provider assistance</h3>
                                <p>Fees paid for banking, EMI, payment-provider or merchant-account assistance relate to the advisory and application-support work we perform and not to the outcome of the third-party application.</p>
                                <p>Once substantive advisory work, application preparation, document review, provider assessment, meetings or submissions have commenced, the Service will be regarded as commenced.</p>
                                <p>A rejection, additional-information request, delayed review or decision by a bank, EMI, payment provider or other third party does not automatically create a right to a refund.</p>
                                
                                <h3 className="mt-4 font-semibold text-foreground">8.7 Subscription services</h3>
                                <p>Where a subscription or recurring address service is provided, cancellation must be requested by email at: <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>You must provide sufficient notice before the next renewal date where a notice period was disclosed when purchasing the Service.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. COMPANY FORMATION SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Where you instruct us to establish a UK company, you authorise us to submit information and documents supplied by you to Companies House and, where applicable, other relevant service providers.</p>
                                <p>You are responsible for ensuring that information supplied to us is correct.</p>
                                <p>Although we may review information for obvious inconsistencies, you remain responsible for confirming matters such as:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>proposed company name;</li>
                                    <li>director information;</li>
                                    <li>shareholder information;</li>
                                    <li>persons with significant control;</li>
                                    <li>share structure;</li>
                                    <li>registered office;</li>
                                    <li>service addresses;</li>
                                    <li>SIC codes;</li>
                                    <li>company email address; and</li>
                                    <li>other incorporation information.</li>
                                </ul>
                                <p>Company formation timeframes provided by us are estimates unless expressly guaranteed in writing.</p>
                                <p>We are not responsible for delays caused by Companies House, identity verification requirements, technical failures, inaccurate information, regulatory reviews or circumstances outside our reasonable control.</p>
                                <p>Registration of a company does not by itself guarantee eligibility for a bank account, merchant account, payment gateway, credit facility, tax registration, licence or any other third-party service.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. REGISTERED OFFICE AND BUSINESS ADDRESS SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Where we provide a registered office, director service address, correspondence address, virtual business address or mail-handling facility, you must use the address only in accordance with the Service purchased.</p>
                                <p>You must not use our address for any unlawful, misleading, fraudulent or unauthorised activity.</p>
                                <p>You must not represent that you physically occupy premises where only an address or mail-handling service has been purchased.</p>
                                <p>We may require satisfactory identity verification and business information before activating an address service.</p>
                                <p>We reserve the right to refuse or terminate an address service where:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>required identification has not been provided;</li>
                                    <li>suspicious or prohibited activity is identified;</li>
                                    <li>excessive or prohibited mail is received;</li>
                                    <li>the address is used outside the agreed scope;</li>
                                    <li>fees remain unpaid;</li>
                                    <li>use of the address may expose us or our providers to legal, regulatory or reputational risk; or</li>
                                    <li>continued provision would breach applicable law or a third-party provider’s requirements.</li>
                                </ul>
                                <p>When cancelling an address service, you must promptly remove the address from Companies House and any other public or private records where you are no longer entitled to use it.</p>
                                <p>Continued unauthorised use of an address following termination may result in additional charges and appropriate remedial action.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. BANKING AND PAYMENT PROVIDER ASSISTANCE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We may provide advisory and administrative support in connection with applications to banks, electronic money institutions, payment service providers, merchant acquirers and other financial-service providers.</p>
                                <p>Our Services may include:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>assessing potential provider suitability;</li>
                                    <li>reviewing business information;</li>
                                    <li>reviewing websites and supporting documentation;</li>
                                    <li>assisting with application preparation;</li>
                                    <li>helping clients understand compliance questions;</li>
                                    <li>providing general banking-readiness guidance;</li>
                                    <li>assisting with requests for additional information; and</li>
                                    <li>facilitating introductions where appropriate.</li>
                                </ul>
                                <p>Seven Oak Prestige Ltd does not control the underwriting, compliance or approval process of third-party financial institutions.</p>
                                <p>We do not guarantee:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>account approval;</li>
                                    <li>merchant-account approval;</li>
                                    <li>availability of particular currencies;</li>
                                    <li>credit facilities;</li>
                                    <li>payment limits;</li>
                                    <li>account functionality;</li>
                                    <li>processing volumes;</li>
                                    <li>onboarding timeframes;</li>
                                    <li>transaction acceptance;</li>
                                    <li>continuation of an account after opening; or</li>
                                    <li>any specific decision by a financial institution.</li>
                                </ul>
                                <p>Eligibility criteria may change without notice and providers may decline applications without providing detailed reasons.</p>
                                <p>You must provide truthful and complete information in all applications.</p>
                                <p>We will not knowingly assist a client in providing false, misleading or deceptive information to a financial institution.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. COMPLIANCE, KYC AND DUE DILIGENCE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We may conduct identification, verification, sanctions, fraud-prevention and other due-diligence checks where necessary for our Services, risk management, contractual obligations or legal requirements.</p>
                                <p>We may request information concerning:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>identity;</li>
                                    <li>residential address;</li>
                                    <li>nationality;</li>
                                    <li>residence;</li>
                                    <li>business activities;</li>
                                    <li>customers and suppliers;</li>
                                    <li>expected transactions;</li>
                                    <li>source of funds;</li>
                                    <li>source of wealth;</li>
                                    <li>ownership and control;</li>
                                    <li>websites;</li>
                                    <li>contracts;</li>
                                    <li>invoices;</li>
                                    <li>bank statements; and</li>
                                    <li>other supporting evidence.</li>
                                </ul>
                                <p>We may use third-party verification providers to perform appropriate checks.</p>
                                <p>We reserve the right to decline or discontinue a relationship where satisfactory due diligence cannot be completed.</p>
                                <p>We may retain relevant records for the period required or permitted by applicable law, legitimate business requirements and our published Privacy Policy.</p>
                                <p>Data-subject rights, including rights relating to access or deletion, are subject to exceptions and limitations provided by applicable data-protection laws.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">13. CLIENT RESPONSIBILITIES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You are responsible for:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>supplying accurate and complete information;</li>
                                    <li>responding to information requests within reasonable deadlines;</li>
                                    <li>reviewing documents before submission where requested;</li>
                                    <li>maintaining valid identification and contact details;</li>
                                    <li>ensuring your business activities are lawful;</li>
                                    <li>obtaining licences or regulatory approvals applicable to your business;</li>
                                    <li>complying with tax obligations;</li>
                                    <li>maintaining required company records;</li>
                                    <li>making statutory filings when they are not expressly included in your purchased Service; and</li>
                                    <li>informing us promptly of material changes relevant to Services we provide.</li>
                                </ul>
                                <p>You must not instruct us to submit information you know to be inaccurate, misleading or fraudulent.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">14. PROHIBITED ACTIVITIES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You must not use our Services:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>for fraud, deception or misrepresentation;</li>
                                    <li>for money laundering or terrorist financing;</li>
                                    <li>to evade sanctions or regulatory restrictions;</li>
                                    <li>to conceal unlawful beneficial ownership;</li>
                                    <li>to impersonate another person;</li>
                                    <li>to submit forged or manipulated documents;</li>
                                    <li>to obtain money or services by deception;</li>
                                    <li>to mislead banks, payment providers, regulators, customers or other third parties;</li>
                                    <li>to facilitate criminal activity;</li>
                                    <li>to sell prohibited or unlawful goods or services;</li>
                                    <li>to evade taxes, fines, court orders or lawful enforcement action;</li>
                                    <li>to infringe intellectual property rights;</li>
                                    <li>to compromise our systems or cybersecurity;</li>
                                    <li>to distribute malware, spyware or other harmful material;</li>
                                    <li>to harass or threaten our employees, contractors or service providers; or</li>
                                    <li>for any activity prohibited by applicable law.</li>
                                </ul>
                                <p>We may immediately suspend or terminate Services where we reasonably suspect prohibited activity.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">15. CLIENT CONTENT AND DOCUMENTS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You retain ownership of documents, materials and information you provide to us.</p>
                                <p>You grant us permission to use, reproduce, transmit and process those materials to the extent reasonably necessary to provide the Services you have requested.</p>
                                <p>You warrant that you have the right to provide those materials to us.</p>
                                <p>You remain responsible for ensuring that documents and information you supply do not unlawfully infringe the rights of third parties.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">16. THIRD-PARTY PROVIDERS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Our Services may involve or refer you to third-party providers including Companies House, HMRC, banks, electronic money institutions, payment processors, identity-verification providers, accountants, address providers, couriers, telecommunications providers and software platforms.</p>
                                <p>Such third parties are independent from Seven Oak Prestige Ltd unless expressly stated otherwise.</p>
                                <p>Their services are subject to their own eligibility requirements, terms, privacy policies and compliance procedures.</p>
                                <p>We are not responsible for decisions, delays, service interruptions, account closures, policy changes or other acts or omissions of independent third parties outside our reasonable control.</p>
                                <p>A reference or introduction to a third party does not constitute a guarantee or endorsement of its continued suitability.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">17. SERVICE MANAGEMENT</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We reserve the right to manage and protect our Services, including by:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>monitoring compliance with these Terms;</li>
                                    <li>restricting or suspending access where necessary;</li>
                                    <li>declining instructions;</li>
                                    <li>requesting additional verification;</li>
                                    <li>removing unlawful or harmful content;</li>
                                    <li>protecting our systems and intellectual property; and</li>
                                    <li>reporting suspected illegal conduct where required or permitted by law.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">18. PRIVACY AND PERSONAL DATA</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We take privacy and data protection seriously.</p>
                                <p>Personal information is processed in accordance with our Privacy Policy and applicable UK data-protection legislation.</p>
                                <p>Our Privacy Policy should be read alongside these Terms and Conditions.</p>
                                <p>Where third-party service providers process your information in connection with Services requested by you, their separate privacy policies may also apply.</p>
                                <p>By providing information about another individual, you confirm that you have lawful authority to provide that information where required.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">19. INTELLECTUAL PROPERTY COMPLAINTS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We respect the intellectual property rights of others.</p>
                                <p>If you believe content made available through our Services infringes intellectual property rights you own or control, please contact: <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>Your notification should contain sufficient information for us to identify and investigate the material concerned.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">20. TERM AND TERMINATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>These Terms remain in effect while you use our Services.</p>
                                <p>We may suspend, restrict or terminate Services where:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>you materially breach these Terms;</li>
                                    <li>fees remain unpaid;</li>
                                    <li>required due diligence cannot be completed;</li>
                                    <li>information provided is materially false or misleading;</li>
                                    <li>we reasonably suspect fraud or unlawful activity;</li>
                                    <li>continued provision creates unacceptable legal, regulatory or compliance risk; or</li>
                                    <li>we are required to do so by law or by a provider necessary to deliver the Service.</li>
                                </ul>
                                <p>Termination does not affect rights or obligations accrued before termination.</p>
                                <p>Fees properly due for Services already supplied remain payable.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">21. MODIFICATIONS AND INTERRUPTIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We may update, modify, suspend or discontinue parts of our website or Services from time to time.</p>
                                <p>We endeavour to maintain reliable Services but cannot guarantee uninterrupted availability.</p>
                                <p>We are not responsible for temporary service interruption caused by maintenance, telecommunications failures, third-party outages, cybersecurity incidents, government systems, force majeure events or circumstances outside our reasonable control.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">22. GOVERNING LAW</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>These Terms and any contractual or non-contractual dispute or claim arising from them shall be governed by the laws of England and Wales, except where mandatory consumer protection legislation provides otherwise.</p>
                                <p>The courts of England and Wales shall have jurisdiction, subject to any mandatory rights a consumer may have to bring proceedings in another applicable jurisdiction.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">23. DISPUTE RESOLUTION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Before commencing formal legal proceedings, both parties should use reasonable efforts to resolve a dispute informally.</p>
                                <p>A complaint or notice of dispute should be sent to: <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a> and should contain sufficient details of the issue and the resolution requested.</p>
                                <p>We will attempt to review the matter and respond within a reasonable period.</p>
                                <p>Nothing in this section prevents either party from seeking urgent injunctive relief or exercising rights that cannot lawfully be excluded.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">24. CORRECTIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Our website or other communications may occasionally contain typographical errors, inaccuracies or omissions concerning pricing, descriptions, availability or other information.</p>
                                <p>We reserve the right to correct genuine errors or omissions and update information where appropriate.</p>
                                <p>Where a material pricing error affects an order, we may contact you before providing the Service and offer you the opportunity to proceed at the correct price or cancel.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">25. DISCLAIMER</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Our Services are provided with reasonable care and skill subject to these Terms and applicable law.</p>
                                <p>We do not guarantee that every commercial objective sought by a Client will be achieved.</p>
                                <p>In particular, we cannot guarantee decisions made by Companies House, HMRC, banks, electronic money institutions, payment processors, regulators, government authorities or other independent third parties.</p>
                                <p>Business and compliance information may change over time and information presented on our website or in general guidance materials should not be treated as permanently current.</p>
                                <p>Nothing in these Terms excludes warranties, duties or rights that cannot lawfully be excluded.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">26. LIMITATION OF LIABILITY</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nothing in these Terms excludes or limits liability where doing so would be unlawful, including liability for fraud or fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot legally be excluded.</p>
                                <p>Subject to those exclusions, Seven Oak Prestige Ltd will not be liable for indirect or consequential losses that were not reasonably foreseeable when the contract was entered into.</p>
                                <p>We will not be responsible for losses resulting from:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>inaccurate information supplied by you;</li>
                                    <li>your failure to comply with legal or regulatory requirements;</li>
                                    <li>decisions of independent third-party providers;</li>
                                    <li>rejection of a banking or payment-provider application;</li>
                                    <li>changes in third-party eligibility requirements;</li>
                                    <li>delays attributable to Companies House, HMRC or other public authorities;</li>
                                    <li>suspension or closure of accounts by independent financial institutions;</li>
                                    <li>unlawful activity undertaken by you; or</li>
                                    <li>circumstances outside our reasonable control.</li>
                                </ul>
                                <p>Where legally permissible, our aggregate liability arising from a particular Service will not exceed the total amount paid by you to Seven Oak Prestige Ltd for that Service giving rise to the claim.</p>
                                <p>Nothing in this clause affects mandatory consumer rights.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">27. INDEMNIFICATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>To the extent permitted by law, you agree to indemnify Seven Oak Prestige Ltd against reasonable losses, liabilities, claims and costs arising directly from:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>fraudulent or unlawful conduct by you;</li>
                                    <li>materially false information supplied by you;</li>
                                    <li>documents you were not authorised to provide;</li>
                                    <li>infringement of third-party intellectual property rights by materials supplied by you; or</li>
                                    <li>your material breach of these Terms.</li>
                                </ul>
                                <p>This provision does not require you to indemnify us for losses caused by our own negligence, breach of contract or unlawful conduct.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">28. ELECTRONIC COMMUNICATIONS, TRANSACTIONS AND SIGNATURES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Communications between you and us may take place electronically, including through email, online forms, messaging platforms and client portals.</p>
                                <p>You consent to receiving contractual notices, invoices, policies, confirmations and other communications electronically where legally permitted.</p>
                                <p>You agree that electronic records and electronic signatures may be used in connection with our Services where legally valid.</p>
                                <p>You are responsible for ensuring that the email address and telephone number supplied to us remain current.</p>
                            </div>
                        </section>

                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">29. COMPLAINTS AND CONTACT INFORMATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We aim to provide a professional and transparent service.</p>
                                <p>If you are dissatisfied with a Service, please contact us so that we can investigate the matter.</p>
                                <p>Complaints should be sent by email with the subject line “Complaint” to: <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>Please provide your name, company name where applicable, order or invoice reference, details of the complaint and the resolution you are seeking.</p>
                                <p>We will acknowledge and investigate complaints and aim to provide a substantive response within a reasonable period.</p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact Information</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>For questions regarding these Terms and Conditions or any of our Services, please contact:</p>
                                <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                                <p>
                                    Company Number: 16903092<br />
                                    124 City Road<br />
                                    London EC1V 2NX<br />
                                    United Kingdom
                                </p>
                                <p>
                                    Telephone: +44 20 4578 0726<br />
                                    Email:{' '}
                                    <a href="mailto:contact@sevenoakprestige.com" className="font-semibold text-[#d4af37] hover:underline">
                                        contact@sevenoakprestige.com
                                    </a>
                                </p>
                                <p className="pt-4 text-sm text-foreground/60 border-t border-border/40">
                                    © 2026 Seven Oak Prestige Ltd. All rights reserved
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
