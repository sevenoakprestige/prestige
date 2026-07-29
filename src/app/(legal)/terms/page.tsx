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
                            Terms & Conditions
                        </h1>
                        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                    </div>

                    {/* Company Info */}
                    <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                        <p className="text-sm text-foreground/70">Last Updated: June 2026</p>
                        <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                        <p className="text-sm text-foreground/70">Company Number: 16903092</p>
                        <p className="text-sm text-foreground/70">
                            Registered Office: 124 City Road, London EC1V 2NX, United Kingdom
                        </p>
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
                            <h2 className="mb-3 text-2xl font-bold text-foreground">1. Introduction</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    These Terms & Conditions (“Terms”) govern the use of the Seven Oak Prestige Ltd website and all services provided by Seven Oak Prestige Ltd (“Seven Oak Prestige”, “Company”, “we”, “our”, or “us”).
                                </p>
                                <p>
                                    By accessing our website, purchasing our services, or engaging with our team, you agree to be bound by these Terms. If you do not agree with these Terms, you must discontinue use of our website and services immediately.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">2. Our Services</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    Seven Oak Prestige Ltd provides business support services including, but not limited to:
                                </p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>UK Company Formation</li>
                                    <li>Registered Office Address Services</li>
                                    <li>Director Service Address Services</li>
                                    <li>Virtual Business Address Services</li>
                                    <li>Mail Handling and Mail Scanning Services</li>
                                    <li>Compliance and Administrative Support</li>
                                    <li>Business Banking, EMI Referral and Onboarding Assistance</li>
                                    <li>General Business Support Services</li>
                                </ul>
                                <p>
                                    Seven Oak Prestige Ltd is not a law firm, accountancy firm, regulated financial institution, tax adviser, or investment adviser.
                                </p>
                                <p>
                                    Any information provided by us is for general guidance only and should not be relied upon as legal, financial, accounting, taxation, or investment advice. Clients should seek independent professional advice where appropriate.
                                </p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">3. Client Responsibilities</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>Clients agree to:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Provide complete, accurate, and truthful information.</li>
                                    <li>Submit all requested documentation promptly.</li>
                                    <li>Cooperate with compliance and verification requests.</li>
                                    <li>Ensure all information remains accurate throughout the engagement.</li>
                                    <li>Use our services solely for lawful business purposes.</li>
                                </ul>
                                <p>
                                    We reserve the right to refuse, suspend, or terminate services where inaccurate information, non-compliance, fraudulent activity, or unlawful conduct is identified.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">4. Identity Verification & Compliance</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    As part of our legal and regulatory obligations, we may require identity verification and supporting documentation before or during the provision of our services.
                                </p>
                                <p>We reserve the right to:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Request additional documentation or information at any stage.</li>
                                    <li>Delay service delivery until satisfactory verification has been completed.</li>
                                    <li>Refuse or terminate services where compliance requirements are not met.</li>
                                    <li>Decline applications that do not satisfy our compliance obligations.</li>
                                </ul>
                                <p>
                                    Submission of documents does not guarantee approval, onboarding, or acceptance.
                                </p>
                                <p>
                                    Compliance decisions are made at our sole discretion in accordance with applicable UK laws, regulatory obligations, and internal compliance procedures.
                                </p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">5. Company Formation Services</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    Company incorporation applications are submitted to Companies House based on the information supplied by the client.
                                </p>
                                <p>Seven Oak Prestige Ltd does not control:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Companies House processing times;</li>
                                    <li>Approval decisions;</li>
                                    <li>Identity verification requirements;</li>
                                    <li>Requests for additional documentation; or</li>
                                    <li>Any changes to Companies House procedures.</li>
                                </ul>
                                <p>
                                    Acceptance of any incorporation application remains subject to Companies House requirements and applicable verification procedures.
                                </p>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">6. Banking, EMI & Fintech Services</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    Where we provide banking or EMI referrals, onboarding assistance, merchant account guidance, payment provider support, or fintech application assistance:
                                </p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Approval is never guaranteed.</li>
                                    <li>Approval decisions remain solely at the discretion of the relevant institution.</li>
                                    <li>Additional verification or documentation may be requested at any time.</li>
                                    <li>Requirements may change without notice.</li>
                                </ul>
                                <p>
                                    The refusal of a banking, EMI, merchant account, or fintech application does not entitle a client to a refund.
                                </p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">7. Registered Office, Director Address & Virtual Address Services</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    Our address services are provided solely for legitimate business purposes.
                                </p>
                                <p>Clients must not use our addresses for:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Illegal activities;</li>
                                    <li>Fraudulent activities;</li>
                                    <li>Misleading representations;</li>
                                    <li>Activities that could damage our reputation or regulatory standing.</li>
                                </ul>
                                <p>
                                    We reserve the right to suspend or terminate address services immediately where misuse is suspected.
                                </p>
                                <p>
                                    Mail handling and scanning services operate in accordance with our internal procedures and fair usage policy.
                                </p>
                                <p>
                                    We also reserve the right to refuse or discontinue mail handling services where we reasonably believe they are being misused.
                                </p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">8. Payments</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    All fees must be paid in full before services commence unless otherwise agreed in writing.
                                </p>
                                <p>
                                    Payments are non-transferable and must be made using approved payment methods.
                                </p>
                                <p>
                                    Failure to complete payment may result in suspension, delay, or cancellation of services.
                                </p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">9. Refund Policy</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    Refund requests are considered in accordance with our Refund Policy.
                                </p>
                                <p>
                                    Unless otherwise required by applicable law, refunds will generally not be available where:
                                </p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>A company formation application has been submitted;</li>
                                    <li>Identity verification or compliance due diligence has commenced;</li>
                                    <li>Address services have been activated;</li>
                                    <li>Company documents have been issued; or</li>
                                    <li>Services have been substantially performed.</li>
                                </ul>
                                <p>
                                    Where a refund is approved, reasonable administrative deductions may apply where permitted.
                                </p>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">10. Data Protection & Privacy</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    Seven Oak Prestige Ltd is committed to protecting personal data and complying with all applicable UK data protection legislation.
                                </p>
                                <p>
                                    We are registered with the UK Information Commissioner’s Office (ICO) under Registration Number ZC181349.
                                </p>
                                <p>
                                    Personal data is processed in accordance with our Privacy Policy and may be used for:
                                </p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Delivering our services;</li>
                                    <li>Identity verification;</li>
                                    <li>Compliance obligations;</li>
                                    <li>Fraud prevention;</li>
                                    <li>Risk management; and</li>
                                    <li>Legal or regulatory requirements.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">11. Intellectual Property</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    All website content, branding, logos, documents, graphics, designs, text, software, and materials produced by Seven Oak Prestige Ltd remain our intellectual property unless otherwise stated.
                                </p>
                                <p>
                                    No content may be copied, reproduced, distributed, modified, or used without our prior written consent.
                                </p>
                            </div>
                        </section>

                        {/* Section 12 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">12. Limitation of Liability</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>To the fullest extent permitted by law:</p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>Seven Oak Prestige Ltd shall not be liable for any indirect, incidental, consequential, special, or economic loss.</li>
                                    <li>Our total liability arising from any claim shall not exceed the amount paid by the client for the relevant service.</li>
                                    <li>We accept no responsibility for decisions made by Companies House, banks, payment institutions, fintech providers, government authorities, or any third party.</li>
                                </ul>
                                <p>
                                    Nothing in these Terms excludes or limits liability where such exclusion is prohibited by applicable law.
                                </p>
                            </div>
                        </section>

                        {/* Section 13 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">13. Suspension & Termination</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    We reserve the right to refuse, suspend, or terminate any service immediately where:
                                </p>
                                <ul className="ml-6 list-outside list-disc space-y-2">
                                    <li>False or misleading information has been provided;</li>
                                    <li>Compliance requirements are not satisfied;</li>
                                    <li>Fraudulent or unlawful activity is suspected;</li>
                                    <li>Our services are used contrary to these Terms.</li>
                                </ul>
                                <p>
                                    Where services are terminated due to a breach of these Terms, no refund shall be payable.
                                </p>
                            </div>
                        </section>

                        {/* Section 14 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">14. Amendments</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    We reserve the right to amend these Terms & Conditions at any time.
                                </p>
                                <p>
                                    The latest version published on our website shall take immediate effect upon publication.
                                </p>
                            </div>
                        </section>

                        {/* Section 15 */}
                        <section className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">15. Governing Law</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p>
                                    These Terms & Conditions shall be governed by and construed in accordance with the laws of England and Wales.
                                </p>
                                <p>
                                    Any dispute arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                                </p>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/5 to-transparent p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-bold text-foreground">Contact Information</h2>
                            <div className="space-y-4 leading-relaxed text-foreground/80">
                                <p className="font-semibold text-foreground">Seven Oak Prestige Ltd</p>
                                <p>
                                    124 City Road<br />
                                    London EC1V 2NX<br />
                                    United Kingdom
                                </p>
                                <p>
                                    Email:{' '}
                                    <a href="mailto:contact@sevenoakprestige.com" className="font-semibold text-[#d4af37] hover:underline">
                                        contact@sevenoakprestige.com
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
