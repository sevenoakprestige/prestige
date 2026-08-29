import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaGlobe, FaBuilding, FaUserTie, FaShieldAlt } from "react-icons/fa";

export default function IndiaHero() {
    return (
        <section className="relative overflow-hidden px-4 py-20 lg:py-32">
            <div className="premium-section-bg"></div>

            <div className="relative mx-auto max-w-7xl text-center">
                <div className="mb-6 flex justify-center">
                    <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-sm font-semibold text-[#d4af37] tracking-wider">
                        UK COMPANY FORMATION FOR INDIAN FOUNDERS
                    </span>
                </div>
                
                <h1 className="hero-heading mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    UK Company Formation for Indian Residents
                </h1>
                
                <p className="hero-text mx-auto mb-4 max-w-3xl text-lg sm:text-xl">
                    Build and operate your UK business from India with specialist support for company formation, Companies House verification, UK business addresses, banking readiness, VAT, EORI and ongoing compliance.
                </p>
                <p className="hero-text mx-auto mb-10 max-w-3xl text-md sm:text-lg">
                    Supporting Indian entrepreneurs building SaaS, IT, Amazon FBA, TikTok Shop, technology, import/export, consulting, education, healthcare and global businesses.
                </p>

                <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-14 bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 text-base font-bold text-black shadow-lg shadow-[#d4af37]/20 hover:scale-105 hover:from-[#f3d066] hover:to-[#d4af37] transition-all">
                        <Link href="#pricing">Start My UK Company</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="hero-secondary-btn h-14 border-2 border-[#d4af37]/50 px-8 text-base font-bold hover:bg-[#d4af37]/10 transition-all">
                        <Link 
                            href="https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20am%20based%20in%20India%20and%20have%20reviewed%20your%20UK%20Company%20Formation%20for%20Indian%20Residents%20page.%20I%20would%20like%20advice%20on%20the%20most%20suitable%20package%2C%20company%20structure%2C%20Companies%20House%20verification%2C%20banking%20and%20compliance%20setup%20for%20my%20business.%20Please%20advise%20me%20on%20the%20next%20steps.%20Reference%3A%20INDIA-LANDING-2026" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="mr-2 h-5 w-5 text-emerald-500" />
                            Chat on WhatsApp 24/7
                        </Link>
                    </Button>
                </div>
                
                <p className="mb-12 text-sm text-muted-foreground font-medium">
                    No requirement to travel to the UK simply to incorporate.
                </p>

                <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 border-t border-border/50 pt-10">
                    <div className="flex items-center gap-2">
                        <FaGlobe className="text-[#d4af37]" />
                        <span className="text-sm font-semibold">100% Remote Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaBuilding className="text-[#d4af37]" />
                        <span className="text-sm font-semibold">UK-Registered Advisory Firm</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUserTie className="text-[#d4af37]" />
                        <span className="text-sm font-semibold">India-Focused Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaShieldAlt className="text-[#d4af37]" />
                        <span className="text-sm font-semibold">Compliance-Led Approach</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
