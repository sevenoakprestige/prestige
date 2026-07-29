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
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border/20 bg-background/80 backdrop-blur-xl">
                <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-[#d4af37]"
                    >
                        <FaArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
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

                    {/* Company Info */}
                    <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                        <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                        <p className="text-sm text-foreground/70">
                            Email:{' '}
                            <a href="mailto:contact@sevenoakprestige.com" className="text-[#d4af37] hover:underline">
                                contact@sevenoakprestige.com
                            </a>
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                By purchasing any service from this website, you acknowledge and agree that you have read, understood, and accepted this Refund & Cancellation Policy in full prior to payment.
                            </p>
                            <p className="leading-relaxed text-foreground/80">
                                All purchases are considered agreements for the provision of digital, administrative, and compliance-based services that begin processing immediately upon order confirmation.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. Nature of Services</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                Our services include, but are not limited to:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Company incorporation and business formation services</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Registered office and director address services</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Compliance, AML, and KYC verification processing</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Government filing and administrative submissions</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Tax registrations and identification applications</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Fintech onboarding and application assistance</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Digital documentation preparation and delivery</span></li>
                            </ul>
                            <p className="leading-relaxed text-foreground/80">
                                Due to the nature of these services, they are considered consumed upon commencement of processing activities.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. Service Commencement & Consumption</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                Service delivery is deemed to have commenced immediately upon any of the following actions:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Order confirmation and onboarding initiation</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Creation or activation of client service records</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Initiation of identity verification (KYC/AML) procedures</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Preparation or drafting of incorporation or compliance documents</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Activation of registered office or service address</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Submission preparation or communication with third-party authorities or providers</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Allocation of internal administrative or compliance resources</span></li>
                            </ul>
                            <p className="leading-relaxed text-foreground/80">
                                Once service commencement occurs, the service is considered partially or fully performed and non-reversible in nature due to administrative consumption of resources.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. Strictly Non-Refundable Services</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                To the maximum extent permitted by applicable law, the following services are strictly non-refundable once commenced:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Company incorporation and formation services</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Registered office and director service addresses</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Government filing submissions and preparation work</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Tax identification applications (including EIN, VAT, and equivalent)</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Fintech and financial institution onboarding support</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Compliance checks, AML screening, and KYC verification processes</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Any digital documents that have been generated, prepared, or issued</span></li>
                            </ul>
                            <p className="leading-relaxed text-foreground/80">
                                These services involve immediate allocation of time, compliance processing, and administrative costs which cannot be reversed.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. Identity Verification (KYC/AML) Requirement</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                All services are subject to mandatory identity verification requirements in compliance with applicable anti-money laundering (AML) and regulatory obligations.
                            </p>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                Where a client fails, delays, or is unable to complete required verification:
                            </p>
                            <ul className="ml-6 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>The service shall be deemed non-completable due to client-side compliance failure</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Any work already performed shall remain chargeable and non-refundable</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>The inability to proceed shall not constitute service non-delivery</span></li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. Refund Eligibility (Strict Pre-Commencement Only)</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                Refunds may only be considered where no service commencement has occurred, meaning:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>No onboarding or account creation has begun</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>No verification or compliance process has been initiated</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>No documents have been prepared</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>No services have been activated or allocated</span></li>
                            </ul>
                            <p className="leading-relaxed text-foreground/80">
                                Where eligible, refunds may be subject to administrative, processing, and transaction fees.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. Third-Party Outcomes Disclaimer</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                We are not responsible for decisions, actions, or outcomes of third-party entities including but not limited to:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Financial institutions (e.g. banks, fintech providers, payment processors)</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Government agencies or company registries</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Compliance or verification providers</span></li>
                            </ul>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                All third-party decisions are outside our control and do not constitute service failure.
                            </p>
                            <p className="leading-relaxed text-foreground/80">
                                No refunds shall be issued based on third-party rejection, delay, or refusal.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. Service Non-Delivery Exclusions</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                A refund shall not be applicable where non-delivery results from:
                            </p>
                            <ul className="ml-6 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Failure to provide required documentation or information</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Inability to complete KYC/AML verification requirements</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Non-compliance with regulatory obligations</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Client inactivity or delayed responses</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Third-party refusal or rejection</span></li>
                            </ul>
                        </section>

                        {/* Section 9 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. Chargebacks and Payment Disputes</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                By completing a purchase, you agree to first contact us directly to resolve any issue before initiating a chargeback.
                            </p>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                Unjustified or fraudulent chargebacks may result in:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Immediate termination of all services</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Suspension of ongoing processing</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Submission of all contractual agreements, logs, and service evidence to payment processors</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Challenge of the dispute with full evidentiary documentation</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Recovery action for outstanding fees where applicable</span></li>
                            </ul>
                            <p className="leading-relaxed text-foreground/80">
                                We maintain full transaction, communication, and service delivery records for dispute resolution purposes.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. Evidence of Service Delivery</h2>
                            <p className="mb-4 leading-relaxed text-foreground/80">
                                For dispute resolution purposes, service commencement and delivery may be evidenced through:
                            </p>
                            <ul className="ml-6 mb-4 space-y-2 text-foreground/80">
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Onboarding records</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Internal processing logs</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Compliance/KYC initiation records</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Document preparation timestamps</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Communication history</span></li>
                                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d4af37]"></span><span>Third-party submission or engagement records</span></li>
                            </ul>
                            <p className="leading-relaxed text-foreground/80">
                                These records serve as proof of service execution and consumption.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. Policy Acceptance</h2>
                            <p className="leading-relaxed text-foreground/80">
                                By completing payment, you explicitly confirm acceptance of this Refund & Cancellation Policy and acknowledge that services may commence immediately.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact</h2>
                            <p className="leading-relaxed text-foreground/80">
                                For any questions regarding this Refund Policy, please contact us at:{' '}
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
