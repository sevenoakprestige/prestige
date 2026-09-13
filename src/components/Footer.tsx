'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from "./ui/button";

export default function Footer() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/447447488755', '_blank');
    };

    // Determine which logo to show
    const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'dark';
    const logoSrc = currentTheme === 'dark'
        ? '/assets/logo/seven_oak_prestige_dark_mode.png'
        : '/assets/logo/seven_oak_prestige_light_mode.png';

    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-dark border-t border-border px-6 py-20 scroll-mt-20">
            {/* Main Footer */}
            <div>
                <div className="mx-auto max-w-7xl grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]">
                    {/* Column 1: Company Info */}
                    <div className="text-sm">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-5">
                            {mounted && (
                                <Image
                                    src={logoSrc}
                                    alt="Seven Oak Prestige Logo"
                                    width={44}
                                    height={44}
                                    className="object-contain"
                                />
                            )}
                            <span className="font-serif text-sm font-bold text-gold md:text-base lg:text-lg">
                                SEVEN OAK PRESTIGE
                            </span>
                        </div>

                        {/* Company Registration */}
                        <div className="mt-5 space-y-1 text-muted-foreground leading-relaxed">
                            <p>Registered in England & Wales</p>
                            <p>124 City Road, London EC1V 2NX</p>
                            <p>United Kingdom</p>
                            <p className="mt-3">Company No. 16903092</p>
                            <p>ICO Registration No: ZC181349</p>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-3 text-muted-foreground">
                            <a href="mailto:contact@sevenoakprestige.com" className="flex items-center gap-3 hover:text-gold-soft transition-colors">
                                <FaEnvelope className="text-gold shrink-0 text-base" />
                                <span>contact@sevenoakprestige.com</span>
                            </a>
                            <a href="https://wa.me/447447488755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold-soft transition-colors">
                                <FaWhatsapp className="text-gold shrink-0 text-base" />
                                <span>+44 7447 488755</span>
                            </a>
                            <div className="flex items-center gap-3 hover:text-gold-soft transition-colors">
                                <FaMapMarkerAlt className="text-gold shrink-0 text-base" />
                                <span className="italic">Visits by appointment only</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div className="text-sm">
                        <p className="eyebrow">Our Services</p>
                        <ul className="mt-5 space-y-3 text-muted-foreground">
                            <li>
                                <Link href="/services/uk-company-formation-for-non-residents" className="transition-colors hover:text-gold-soft">UK Company Formation</Link>
                            </li>
                            <li>
                                <Link href="/services/registered-office-service" className="transition-colors hover:text-gold-soft">Registered Office Address</Link>
                            </li>
                            <li>
                                <Link href="/services/director-service-address" className="transition-colors hover:text-gold-soft">Director Service Address</Link>
                            </li>
                            <li>
                                <Link href="/services/virtual-business-address" className="transition-colors hover:text-gold-soft">Virtual Business Address</Link>
                            </li>
                            <li>
                                <Link href="/services/fintech-banking-guidance" className="transition-colors hover:text-gold-soft">Fintech & Banking Guidance</Link>
                            </li>
                            <li>
                                <Link href="/services/vat-registration-uk" className="transition-colors hover:text-gold-soft">VAT Registration</Link>
                            </li>
                            <li>
                                <Link href="/services/eori-registration-uk" className="transition-colors hover:text-gold-soft">EORI Registration</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="text-sm">
                        <p className="eyebrow">Legal</p>
                        <ul className="mt-5 space-y-3 text-muted-foreground">
                            <li>
                                <Link href="/terms" className="transition-colors hover:text-gold-soft">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/refund" className="transition-colors hover:text-gold-soft">Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="transition-colors hover:text-gold-soft">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/security" className="transition-colors hover:text-gold-soft">Trust & Security</Link>
                            </li>
                        </ul>

                        <p className="eyebrow mt-8">Useful</p>
                        <ul className="mt-5 space-y-3 text-muted-foreground">
                            <li>
                                <Link href="/about" className="transition-colors hover:text-gold-soft">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="transition-colors hover:text-gold-soft">Blog</Link>
                            </li>
                            <li>
                                <Link href="/consultation" className="transition-colors hover:text-gold-soft">Book Consultation</Link>
                            </li>
                            <li>
                                <Link href="/site-map" className="transition-colors hover:text-gold-soft">Sitemap</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch + Socials */}
                    <div className="text-sm">
                        <p className="eyebrow">Get in Touch</p>
                        <p className="mt-5 text-muted-foreground mb-6 leading-relaxed">
                            Have questions about our services? Reach out to our team for a free consultation.
                        </p>
                        <Button
                            onClick={handleWhatsAppClick}
                            className="w-full"
                        >
                            <FaWhatsapp size={18} />
                            WhatsApp Now
                        </Button>

                        <div className="mt-6">
                            <p className="eyebrow mt-10 mb-5">Follow Us</p>
                            <div className="flex items-center gap-4 mt-3">
                                <Link
                                    href="https://www.facebook.com/sevenoakprestige"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={22} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/sevenoakprestige"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={22} />
                                </Link>
                            </div>
                        </div>

                        {/* Google Reviews Widget */}
                        <div className="mt-8">
                            <Link 
                                href="https://g.page/r/Cb2OqO7UHlpqEAE/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 transition-transform hover:scale-105"
                            >
                                {/* Google G Logo SVG */}
                                <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                
                                <div className="flex flex-col justify-center">
                                    <span className="text-lg font-medium text-white leading-none mb-1">Google Reviews</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-white leading-none">5.00</span>
                                        <div className="flex text-[#FBBC05] gap-0.5">
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                            <FaStar size={16} />
                                        </div>
                                        <span className="text-sm text-gray-300 ml-1"></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications & Badges Bar */}
            <div className="mt-20 border-t border-border/40 pt-10 pb-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0">
                        {/* ICO Logo */}
                        <div title="Information Commissioner's Office" className="transition-transform hover:scale-105">
                            <img
                                src="/assets/footer/ico-header-logo.svg"
                                alt="ICO Registered"
                                width={80}
                                height={47}
                                className="object-contain"
                            />
                        </div>
                        {/* Mindful Employer */}
                        <div title="Mindful Employer" className="transition-transform hover:scale-105">
                            <img
                                src="/assets/footer/mindful-employer--white.png"
                                alt="Mindful Employer"
                                width={100}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        {/* Living Wage */}
                        <div title="Living Wage Employer" className="transition-transform hover:scale-105">
                            <img
                                src="/assets/footer/living-wage--white.webp"
                                alt="Living Wage Employer"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        {/* Green Mark */}
                        <div title="Green Mark Certified" className="transition-transform hover:scale-105">
                            <img
                                src="/assets/footer/green-mark--white.png"
                                alt="Green Mark Certified"
                                width={55}
                                height={55}
                                className="object-contain"
                            />
                        </div>
                        <div title="Carbon Neutral Britain" className="transition-transform hover:scale-105">
                            <img
                                src="/assets/footer/cnb--white.png"
                                alt="Carbon Neutral Britain"
                                width={55}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                        {/* Living Hours */}
                        <div title="Living Hours" className="transition-transform hover:scale-105">
                            <img
                                src="/assets/footer/living-hours-white.png"
                                alt="Living Hours"
                                width={60}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/40 py-8 text-xs text-muted-foreground">
                <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p>
                        © {currentYear} Seven Oak Prestige Ltd. All rights reserved.
                    </p>
                    <p className="max-w-2xl text-center md:text-right opacity-60 leading-relaxed">
                        Seven Oak Prestige Ltd is not a law firm, accountancy firm, or regulated financial institution. All information provided is for general guidance only.
                    </p>
                </div>
            </div>
        </footer>
    );
}
