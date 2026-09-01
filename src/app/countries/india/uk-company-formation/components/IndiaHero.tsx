import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaUserTie, FaBuilding, FaGlobe, FaShieldAlt, FaLock } from "react-icons/fa";
import Image from "next/image";

export default function IndiaHero() {
    return (
        <section className="relative overflow-hidden px-4 py-20 lg:py-28">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/london-hero.jpg"
                    alt="London at Night"
                    fill
                    quality={100}
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-[#001328]/80"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:w-7/12 text-left">
                        <div className="mb-6 inline-block">
                            <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-bold text-[#d4af37] tracking-wider uppercase">
                                UK COMPANY FORMATION FOR INDIAN FOUNDERS
                            </span>
                        </div>
                        
                        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                            UK Company Formation for Indian Residents
                        </h1>
                        
                        <p className="mb-8 text-lg text-gray-200 sm:text-xl max-w-2xl leading-relaxed">
                            Set up a UK limited company remotely from India with Companies House filing, UK registered office support, identity-verification guidance and practical post-incorporation assistance.
                        </p>

                        <div className="mb-12 flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="h-14 bg-[#d4af37] hover:bg-[#f3d066] px-8 text-base font-bold text-black transition-all">
                                <Link href="#pricing">Start My UK Company</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="h-14 border border-white/20 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 transition-all">
                                <Link 
                                    href="https://wa.me/447447488755?text=Hello%20Seven%20Oak%20Prestige%2C%20I%20am%20based%20in%20India%20and%20have%20reviewed%20your%20UK%20Company%20Formation%20page." 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Book a Consultation
                                </Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/10">
                            <div className="flex items-center gap-3 w-[calc(50%-1rem)]">
                                <div className="text-[#d4af37]"><FaUserTie className="w-5 h-5" /></div>
                                <span className="text-sm font-medium text-gray-300">No UK-resident director generally required</span>
                            </div>
                            <div className="flex items-center gap-3 w-[calc(50%-1rem)]">
                                <div className="text-[#d4af37]"><FaBuilding className="w-5 h-5" /></div>
                                <span className="text-sm font-medium text-gray-300">UK registered office required</span>
                            </div>
                            <div className="flex items-center gap-3 w-[calc(50%-1rem)]">
                                <div className="text-[#d4af37]"><FaGlobe className="w-5 h-5" /></div>
                                <span className="text-sm font-medium text-gray-300">Remote formation support</span>
                            </div>
                            <div className="flex items-center gap-3 w-[calc(50%-1rem)]">
                                <div className="text-[#d4af37]"><FaShieldAlt className="w-5 h-5" /></div>
                                <span className="text-sm font-medium text-gray-300">Banking support available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="lg:w-5/12 w-full">
                        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Check Your UK Company Setup</h3>
                            <form className="space-y-4">
                                <div>
                                    <input 
                                        type="text" 
                                        placeholder="Full name" 
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                                <div className="flex border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#001328] focus-within:border-transparent bg-white">
                                    <div className="flex items-center px-3 border-r border-gray-300 bg-gray-50 text-gray-700 rounded-l-md">
                                        <span className="text-lg mr-2">🇮🇳</span> <span className="text-sm">+91</span>
                                    </div>
                                    <input 
                                        type="tel" 
                                        placeholder="WhatsApp number" 
                                        className="w-full px-4 py-3 rounded-r-md focus:outline-none bg-white text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        placeholder="Email address" 
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <select defaultValue="" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#001328] focus:border-transparent text-gray-900 placeholder-gray-500 appearance-none">
                                        <option value="" disabled>Business activity</option>
                                        <option value="saas">SaaS & Technology</option>
                                        <option value="services">IT Services & Agency</option>
                                        <option value="ecommerce">E-Commerce</option>
                                        <option value="trade">Import, Export & Trade</option>
                                        <option value="professional">Professional Services</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="pt-2">
                                    <Button type="button" className="w-full h-14 bg-[#001328] hover:bg-[#001328]/90 text-white font-bold text-lg rounded-md transition-colors">
                                        Request a Setup Review
                                    </Button>
                                </div>
                                <div className="flex items-start gap-2 mt-4 text-xs text-gray-500">
                                    <div className="mt-0.5 text-[#d4af37] shrink-0"><FaLock className="w-3 h-3" /></div>
                                    <p>We use your details only to assess your enquiry and contact you about your UK company setup.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
