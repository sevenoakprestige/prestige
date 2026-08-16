import type { Metadata } from 'next';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Refund & Cancellation Policy – Seven Oak Prestige',
    description: 'Read the Seven Oak Prestige Refund and Cancellation Policy. Understand our service terms, non-refundable services, and eligibility conditions before purchasing.',
    openGraph: {
        title: 'Refund & Cancellation Policy – Seven Oak Prestige',
        description: 'Refund and cancellation terms for Seven Oak Prestige Ltd company formation and business services.',
        url: 'https://www.sevenoakprestige.com/refund',
    },
    alternates: {
        canonical: 'https://www.sevenoakprestige.com/refund',
    },
};

export default function RefundPolicy() {
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
                            Refund & Cancellation Policy
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Agreement Info */}
                    <div className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                        <p className="text-sm font-medium text-[#d4af37]">Last updated: 12 August 2026</p>
                        <div className="mt-4 space-y-4 leading-relaxed text-foreground/80">
                            <p>This Refund & Cancellation Policy provides a summary of the circumstances in which you may cancel Services purchased from Seven Oak Prestige Ltd and when a refund may or may not be available.</p>
                            <p>This Policy should be read together with our Terms and Conditions, particularly Section 8 – Refunds and Cancellation.</p>
                            <p>Where there is any conflict between this Policy and our Terms and Conditions, our Terms and Conditions will apply, subject always to any statutory rights that cannot legally be excluded or restricted.</p>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. DEFINITIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Unless otherwise stated, words and expressions used in this Policy have the same meaning as in our Terms and Conditions.</p>
                                <p>“Services” includes company formation, registered office services, business address services, compliance services, corporate administration, banking and payment-provider assistance, advisory services and any other products or services supplied by Seven Oak Prestige Ltd.</p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. YOUR STATUTORY RIGHTS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Nothing in this Policy removes or restricts any mandatory rights available to you under applicable consumer law.</p>
                                <p>Where you purchase Services as a consumer through our website, telephone, email or another distance-selling method, you may have a statutory right to cancel certain Services within 14 calendar days from the date the contract is entered into.</p>
                                <p>Different rules may apply where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you specifically ask us to begin providing the Service during the cancellation period;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>work has already commenced;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the Service has been fully performed;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a bespoke or personalised Service has been supplied;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>government or third-party fees have already been incurred; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>another statutory exception applies.</span></li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. WHEN CAN YOU CANCEL AND RECEIVE A REFUND?</h2>
                            <h3 className="mb-2 mt-6 text-xl font-bold text-foreground">3.1 Services where work has not started</h3>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You may request cancellation of an eligible Service within 14 calendar days of purchase.</p>
                                <p>Subject to your statutory rights, you will normally be eligible for a refund where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>your written cancellation request is received within the applicable cancellation period; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we have not begun providing or preparing the Service; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we have not incurred any government, third-party or external costs in connection with your order.</span></li>
                                </ul>
                                <p>Where a contractual or discretionary refund is approved, a 5% payment and administrative processing fee will normally be deducted from the amount refunded, where permitted by applicable law.</p>
                                <p>Any statutory refund entitlement will be handled in accordance with applicable consumer law and will not be reduced by a charge that we are not legally permitted to impose.</p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. SERVICES STARTED DURING THE 14-DAY CANCELLATION PERIOD</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Many of our Services are time-sensitive.</p>
                                <p>By asking us to begin providing a Service immediately or before expiry of any statutory cancellation period, you expressly request early performance of the Service.</p>
                                <p>This may include, for example:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>reviewing your documents;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>conducting an advisory assessment;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>carrying out KYC or compliance checks;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>preparing a company formation application;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>reviewing a website or business model;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>preparing an application for a bank or payment provider;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>conducting provider research;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>preparing supporting documentation;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>scheduling or conducting consultations;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>setting up an address service; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>submitting information to a third party.</span></li>
                                </ul>
                                <p>If you subsequently cancel after work has commenced, we may deduct a reasonable and proportionate amount representing the Services already provided, together with any non-refundable costs already incurred, where permitted by law.</p>
                                <p>Any remaining contractual refund will also be subject to the 5% processing fee, where legally permitted.</p>
                                <p>If the Service has already been fully performed following your express request for us to begin during the cancellation period, your statutory right to cancel may cease where permitted by applicable law.</p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. COMPANY FORMATION SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You may request cancellation of a company formation Service before the application has been submitted to Companies House.</p>
                                <p>Where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>your cancellation request is received within 14 calendar days of purchase; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we have not started preparing the incorporation; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>no third-party or verification cost has been incurred,</span></li>
                                </ul>
                                <p>you may be eligible for a refund.</p>
                                <p>If we have already started preparing the incorporation but have not yet submitted the application, any refund may be reduced to account for work completed, verification costs and other expenses already incurred.</p>
                                <p>Once the company incorporation application has been submitted to Companies House, the company formation Service is considered substantially committed and:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the Companies House filing fee is non-refundable;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>identity-verification or third-party fees already incurred are non-refundable;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>fees relating to work already performed are non-refundable; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a refund will not normally be available merely because the application is rejected, queried or delayed by Companies House.</span></li>
                                </ul>
                                <p>The standard Companies House online incorporation fee is currently £100, although government fees may change from time to time. (<a href="https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">GOV.UK</a>)</p>
                                <p>If Companies House requests a correction or additional information, we will normally seek to correct or resubmit the application where reasonably possible rather than treat the application as cancelled.</p>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. REGISTERED OFFICE, SERVICE ADDRESS AND VIRTUAL BUSINESS ADDRESS SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You may request cancellation of an address Service within 14 calendar days of purchase.</p>
                                <p>You may be eligible for a refund where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we have not started setting up the Service;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>our address has not been used or submitted to Companies House;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>our address has not been provided to a bank, payment provider, marketplace, customer or other third party; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we have not incurred third-party costs.</span></li>
                                </ul>
                                <p>Where setup has already commenced, we may deduct the reasonable cost of work undertaken and any external costs already incurred.</p>
                                <p>Where our address has already been used at Companies House or with another third party, cancellation will not become effective until you have removed or replaced our address wherever you are no longer entitled to use it.</p>
                                <p>You remain responsible for any subscription or renewal fees that become due while our address continues to be used without authorisation.</p>
                                <p>Where a contractual refund remains payable after permitted deductions, the 5% processing fee will apply.</p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. BANKING, EMI AND PAYMENT-PROVIDER ASSISTANCE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Fees paid for banking, EMI, merchant account or payment-provider assistance are for the advisory, preparation, assessment and application-support Services we provide.</p>
                                <p>They are not fees for guaranteeing that a financial institution will approve an application.</p>
                                <p>Our work may be considered to have commenced once we perform any substantive activity, including:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>reviewing the client’s business;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>assessing banking or payment-provider eligibility;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>reviewing the website;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>reviewing documents;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>conducting compliance or banking-readiness assessments;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>researching suitable providers;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>preparing an application;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>providing application answers or recommendations;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>communicating with a provider;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>arranging or conducting meetings; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>submitting an application.</span></li>
                                </ul>
                                <p>Once substantive work has commenced, any cancellation or refund will take into account the work already performed.</p>
                                <p>Once an application has been submitted to a bank, electronic money institution, payment provider or other financial institution, the advisory Service will normally be considered substantially performed.</p>
                                <p>A rejection by a bank, EMI, payment processor or other financial institution does not constitute a failure by Seven Oak Prestige Ltd to provide the Service and does not automatically entitle the Client to a refund.</p>
                                <p>The same applies where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>additional information is requested;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>compliance checks take longer than expected;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the provider changes its eligibility requirements;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the application is placed under review;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the provider does not disclose its reason for rejection;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the applicant’s nationality or residency affects eligibility;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the applicant’s industry or business model affects eligibility; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a provider subsequently suspends or closes an approved account.</span></li>
                                </ul>
                                <p>Where we agree to issue a discretionary refund, deductions may be made for work already completed and a 5% processing fee will apply where permitted by law.</p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. ADVISORY, COMPLIANCE AND BESPOKE SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Our advisory and bespoke Services frequently involve work beginning shortly after purchase.</p>
                                <p>Examples include:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>compliance reviews;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>banking-readiness reviews;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>business assessments;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>company structuring;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>VAT or EORI assistance;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>document preparation;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>website compliance reviews;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>consultations;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>corporate advisory;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>business plans;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>reports;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>research; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>customised application support.</span></li>
                                </ul>
                                <p>Where work has commenced, we may deduct a reasonable amount representing the proportion of the Service already performed.</p>
                                <p>Where the Service has been substantially or fully delivered, no refund will normally be available except where required by law.</p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. GOVERNMENT AND THIRD-PARTY FEES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>The following are generally non-refundable once paid, incurred or committed:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Companies House filing fees;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>government filing charges;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>identity-verification fees;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>compliance-verification charges;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>registered office provider charges;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>courier and postage charges;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>certification or legalisation fees;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>telecommunications charges;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>payment-provider costs;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>external professional fees; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>any other third-party costs incurred specifically for your order.</span></li>
                                </ul>
                                <p>These amounts may therefore be deducted from any refund otherwise due.</p>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. THE 5% REFUND PROCESSING FEE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Except where prohibited by applicable law, all discretionary and contractual refunds processed by Seven Oak Prestige Ltd are subject to a 5% refund processing and administrative fee.</p>
                                <p>The fee contributes towards payment-processing costs and administrative work involved in receiving, reconciling and reversing the transaction.</p>
                                <p>For example, where an eligible contractual refund is calculated at £500, the processing fee would be:</p>
                                <p className="font-mono text-sm bg-background/50 p-2 rounded-md border border-border/20">£500 × 5% = £25</p>
                                <p>The amount returned would therefore be:</p>
                                <p className="font-mono text-sm bg-background/50 p-2 rounded-md border border-border/20">£475</p>
                                <p>This processing fee is separate from:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>government fees;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>third-party charges;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>work already performed;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>bespoke work charges; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>other amounts lawfully deductible under this Policy.</span></li>
                                </ul>
                                <p>Where applicable consumer legislation requires us to provide a refund without such a deduction, the statutory requirement will take precedence.</p>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. WHEN CAN YOU CANCEL WITHOUT RECEIVING A REFUND?</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You may cancel a Service at any time, but cancellation does not necessarily create a right to a refund.</p>
                                <p>No refund will normally be available where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the Service has already been fully performed;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>work has been substantially completed;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a company formation application has already been submitted;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a banking or payment-provider application has already been substantially prepared or submitted;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>government or third-party costs have already been incurred;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you cancel after expiry of an applicable cancellation period and there is no contractual refund right;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a subscription Service is cancelled only to prevent its next renewal;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you fail to provide information reasonably required for us to continue the Service; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the Service has become impossible to complete because of your actions or omissions.</span></li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 12 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. RENEWABLE AND SUBSCRIPTION SERVICES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Services such as registered office, service address, virtual business address, mail handling or other recurring Services may renew automatically where this was disclosed when purchased.</p>
                                <p>You may request cancellation before your next renewal date in accordance with the notice requirements applicable to your Service.</p>
                                <p>Cancellation prevents future renewals but does not normally entitle you to a refund for a current subscription period that has already commenced.</p>
                                <p>Failure to use the Service does not constitute cancellation.</p>
                                <p>Failure of a recurring payment does not constitute cancellation.</p>
                            </div>
                        </section>

                        {/* Section 13 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">13. WHEN MAY WE CANCEL AND PROVIDE A REFUND?</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We may cancel an order or Service where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we cannot provide the Service;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we identify a material pricing error;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the Service has become unavailable;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a necessary third-party provider is unable to provide the Service;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a prolonged event outside our reasonable control makes performance impossible; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>we determine before substantive work begins that we cannot accept the engagement.</span></li>
                                </ul>
                                <p>Where we cancel for reasons unrelated to your conduct, we will normally refund amounts relating to Services not supplied.</p>
                                <p>External costs already incurred may be deducted where legally permitted.</p>
                                <p>Where the refund is being made solely because we are unable to provide the Service, we may waive the 5% processing fee at our discretion, and we will not apply the fee where doing so would conflict with your statutory rights.</p>
                            </div>
                        </section>

                        {/* Section 14 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">14. COMPLIANCE-RELATED TERMINATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We may immediately suspend or terminate a Service where continuing to provide it would expose Seven Oak Prestige Ltd, our staff or our service providers to legal, regulatory, sanctions, fraud, money-laundering, reputational or compliance risk.</p>
                                <p>Depending upon the circumstances and the work already performed, we may provide a proportionate refund for the unused element of the Service.</p>
                                <p>No refund will normally be provided for work already completed or external expenses already incurred.</p>
                            </div>
                        </section>

                        {/* Section 15 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">15. WHEN MAY WE CANCEL WITHOUT A REFUND?</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Subject to applicable law, we may terminate a Service without providing a refund where the termination results from your material breach of our Terms and Conditions.</p>
                                <p>This may include circumstances where:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you refuse or repeatedly fail to provide required KYC or identification documents;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you provide forged, manipulated or fraudulent documents;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>information supplied by you is materially false or misleading;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you conceal material information relevant to the Service;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you engage in illegal or fraudulent activity;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you use our Services for money laundering, sanctions evasion or other prohibited purposes;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you abuse or threaten our staff or service providers;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you knowingly provide false information to a bank, payment provider, Companies House or another authority;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you use our address outside the scope authorised by us;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you fail to remove our address after an address Service has terminated;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you fail to provide information necessary to complete the Service within a reasonable deadline;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>your actions make completion of the Service impossible; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>you otherwise materially breach our Terms and Conditions.</span></li>
                                </ul>
                                <p>No refund will be provided for Services already performed or costs already incurred.</p>
                            </div>
                        </section>

                        {/* Section 16 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">16. FAILURE TO PROVIDE INFORMATION</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>We rely on clients supplying information and documentation promptly.</p>
                                <p>Where we request information necessary to provide a Service and you fail to supply it within the deadline communicated to you, we may suspend or terminate the Service.</p>
                                <p>Examples include failure to provide:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>identification;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>proof of residential address;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>company information;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Companies House authentication information;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>director or shareholder details;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>compliance information;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>supporting documents;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>source-of-funds evidence; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>information required by a bank or payment provider.</span></li>
                                </ul>
                                <p>Where we have already begun providing the Service, fees relating to work completed and costs incurred will not normally be refunded.</p>
                            </div>
                        </section>

                        {/* Section 17 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">17. APPLICATION REJECTIONS</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>A rejection by a government authority or third-party provider does not automatically entitle you to a refund.</p>
                                <p>This includes rejection by:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Companies House;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>HMRC;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a bank;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>an electronic money institution;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a merchant acquirer;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>a payment processor;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>an identity-verification provider; or</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>another independent organisation.</span></li>
                                </ul>
                                <p>Our obligation is to provide the Service purchased from Seven Oak Prestige Ltd with reasonable care and skill.</p>
                                <p>We cannot guarantee the decisions of independent organisations.</p>
                            </div>
                        </section>

                        {/* Section 18 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">18. CHARGEBACKS AND PAYMENT DISPUTES</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>You should contact us first if you believe a payment or refund is incorrect.</p>
                                <p>Nothing in this Policy prevents you from exercising legitimate rights available through your bank or payment provider.</p>
                                <p>However, initiating a chargeback does not automatically cancel a contract or remove your obligation to pay for Services properly supplied.</p>
                                <p>Where a chargeback is demonstrably fraudulent, abusive or made after Services have been properly delivered, we reserve the right to provide evidence of the transaction and Services supplied to the relevant payment provider and to pursue amounts lawfully due.</p>
                            </div>
                        </section>

                        {/* Section 19 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">19. HOW TO SEND A CANCELLATION REQUEST</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Cancellation requests must be made in writing.</p>
                                <p>The easiest method is by email to:</p>
                                <p><a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a></p>
                                <p>Please use the subject line:</p>
                                <p className="font-semibold text-foreground">Cancellation Request</p>
                                <p>Your request should contain:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>your full name;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>your company name, where applicable;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the Service purchased;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>order or invoice number, where available;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>date of purchase; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>confirmation that you wish to cancel.</span></li>
                                </ul>
                                <p>We may request additional information to verify your identity or locate your order.</p>
                                <p>A cancellation request is treated as received when it reaches our designated email system, subject to reasonable verification of the request.</p>
                            </div>
                        </section>

                        {/* Section 20 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">20. HOW REFUNDS ARE PAID</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Approved refunds will normally be made using the original method of payment unless another method is agreed or required.</p>
                                <p>Refund processing times may depend on your bank, card issuer or payment provider.</p>
                                <p>Where legally required, refunds will be issued within the applicable statutory timeframe.</p>
                                <p>Contractual or discretionary refunds will be calculated after deducting, where applicable:</p>
                                <ul className="ml-6 space-y-2 list-none">
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Services already performed;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>government fees;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>third-party costs;</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>bespoke or customised work already completed; and</span></li>
                                    <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>the 5% refund processing fee, where legally permitted.</span></li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 21 */}
                        <section className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card/25 p-8 backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/45 hover:shadow-[0_20px_50px_rgba(212,175,55,0.06)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">21. FORCE MAJEURE</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Neither party will be responsible for failure or delay caused by events genuinely outside its reasonable control.</p>
                                <p>Where such an event prevents us from providing a material Service for a prolonged period, either party may be entitled to cancel the affected Service.</p>
                                <p>Where appropriate, we will refund the proportion of fees relating to Services not provided, after accounting for any non-refundable costs already incurred.</p>
                            </div>
                        </section>

                        {/* Section 22 / Contact */}
                        <section className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">22. CONTACT US</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Questions regarding cancellations or refunds should be sent to:</p>
                                <p className="leading-loose">
                                    Seven Oak Prestige Ltd<br />
                                    124 City Road<br />
                                    London<br />
                                    EC1V 2NX<br />
                                    United Kingdom<br />
                                    Telephone: +44 20 4578 0726<br />
                                    Email: <a href="mailto:contact@sevenoakprestige.com" className="font-semibold text-[#d4af37] hover:underline">contact@sevenoakprestige.com</a>
                                </p>
                                <p>For cancellation requests, please use the email subject:</p>
                                <p className="font-semibold text-foreground">Cancellation Request</p>
                                <p>For complaints, please use:</p>
                                <p className="font-semibold text-foreground">Complaint</p>
                                <p className="pt-4 text-sm text-foreground/60">© 2026 Seven Oak Prestige Ltd. All rights reserved.</p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}
