import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function IndiaFinalCTA() {
    return (
        <section className="py-16 lg:py-20 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/london-hero.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#001328]/50 to-[#001328]"></div>
            </div>
            
            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
                    Ready to Start Your UK Company from India?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Our specialists will guide you through a smooth and compliant setup journey.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-12 bg-[#d4af37] px-8 text-sm font-bold text-black hover:bg-[#f3d066] transition-all w-full sm:w-auto rounded-md">
                        <Link href="#pricing">Start My UK Company</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-12 border border-foreground/30 bg-transparent px-8 text-sm font-bold text-foreground hover:bg-foreground/10 transition-all w-full sm:w-auto rounded-md">
                        <Link 
                            href="https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20am%20based%20in%20India%20and%20have%20reviewed%20your%20UK%20Company%20Formation%20page." 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Speak to an India Specialist
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
