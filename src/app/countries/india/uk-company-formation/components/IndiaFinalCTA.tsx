import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function IndiaFinalCTA() {
    return (
        <section className="py-20 lg:py-28 relative overflow-hidden border-t border-border/30">
            <div className="premium-section-bg"></div>
            
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 text-foreground">
                    Ready to Start Your UK Company From India?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Speak with our UK advisory team and find the right company formation package and compliance setup for your business.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-8">
                    <Button asChild size="lg" className="h-14 bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-8 text-base font-bold text-black shadow-lg shadow-[#d4af37]/20 hover:scale-105 hover:from-[#f3d066] hover:to-[#d4af37] transition-all w-full sm:w-auto">
                        <Link href="#pricing">Start My UK Company</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="hero-secondary-btn h-14 border-2 border-[#d4af37]/50 px-8 text-base font-bold hover:bg-[#d4af37]/10 transition-all w-full sm:w-auto">
                        <Link 
                            href="https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20am%20based%20in%20India%20and%20have%20reviewed%20your%20UK%20Company%20Formation%20for%20Indian%20Residents%20page.%20I%20would%20like%20advice%20on%20the%20most%20suitable%20package%2C%20company%20structure%2C%20Companies%20House%20verification%2C%20banking%20and%20compliance%20setup%20for%20my%20business.%20Please%20advise%20me%20on%20the%20next%20steps.%20Reference%3A%20INDIA-LANDING-2026" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="mr-2 h-5 w-5 text-[#25D366]" />
                            Chat on WhatsApp 24/7
                        </Link>
                    </Button>
                </div>
                
                <p className="text-sm font-mono text-muted-foreground bg-muted/50 inline-block px-4 py-2 rounded-full border border-border/50">
                    Reference: INDIA-LANDING-2026
                </p>
            </div>
        </section>
    );
}
