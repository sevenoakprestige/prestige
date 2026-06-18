'use client';

export default function ConsultationFooter() {
    return (
        <footer className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            {/* Background decoration - matching other consultation sections */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#d4af37]/5 blur-3xl"></div>
            </div>

            {/* Top border with gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

            <div className="mx-auto max-w-3xl">
                {/* Decorative top divider */}
                <div className="mb-8 flex justify-center">
                    <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>

                {/* Contact card */}
                <div className="relative rounded-2xl border border-[#d4af37]/20 bg-gradient-to-br from-background/80 to-background/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/40 hover:shadow-xl sm:p-10">
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-50"></div>

                    <div className="text-center space-y-3">
                        <p className="text-lg font-semibold text-foreground">
                            Isaac Jackson
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Founder & Strategic Advisor
                        </p>
                        <p className="text-sm font-medium text-foreground">
                            Seven Oak Prestige Ltd
                        </p>

                        {/* Small divider */}
                        <div className="flex justify-center pt-2 pb-1">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent"></div>
                        </div>

                        <p className="text-sm pt-1">
                            <a
                                href="mailto:contact@sevenoakprestige.com"
                                className="footer-link hover:text-[#d4af37] transition-colors inline-flex items-center gap-2"
                            >
                                <span className="text-[#d4af37]">✉</span>
                                contact@sevenoakprestige.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Decorative bottom divider */}
                <div className="mt-8 flex justify-center">
                    <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f3d066]"></div>
                </div>
            </div>
        </footer>
    );
}
