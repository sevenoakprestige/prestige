"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { usePathname } from "next/navigation";
import { TbMenu3 } from "react-icons/tb";
import { FaWhatsapp, FaBuilding, FaMapMarkerAlt, FaUserTie, FaCity, FaShieldAlt, FaUniversity } from "react-icons/fa";
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Company Checker", href: "#checker" },
    { name: "Pricing", href: "#pricing" },
    { name: "Consultation", href: "/consultation" },
    { name: "Blogs", href: "/blog" },
    { name: "Countries", href: "/countries" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
];

const menuCategories = [
    {
        title: "Address Services",
        links: [
            { name: "UK Registered Office", href: "/services/registered-office-service" },
            { name: "UK Service Address", href: "/services/director-service-address" },
            { name: "UK Business Address", href: "/services/virtual-business-address" },
        ]
    },
    {
        title: "Company Services",
        links: [
            { name: "UK Company Formation", href: "/services/uk-company-formation-for-non-residents" },
            { name: "Companies House Verification", href: "/services/companies-house-verification" },
            { name: "VAT Registration", href: "/services/vat-registration-uk" },
            { name: "EORI Registration", href: "/services/eori-registration-uk" },
            { name: "Fintech & Payment Guidance", href: "/services/fintech-banking-guidance" },
        ]
    }
];

const resourceCategories = [
    {
        title: "Executive Frameworks",
        links: [
            { name: "UK Business Banking Readiness Assessment", href: "/resources/uk-business-banking-readiness-assessment" },
            { name: "UK Corporate Compliance Framework", href: "#compliance-framework" },
            { name: "International Founder Framework", href: "#founder-framework" },
            { name: "UK Company Growth Framework", href: "#growth-framework" },
        ]
    }
];

export default function Navbar() {
    const { theme, resolvedTheme } = useTheme();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);
    const [mounted, setMounted] = React.useState(false);
    const [expandedMobileCategory, setExpandedMobileCategory] = React.useState<string | null>(null);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Close sheet when route changes
    React.useEffect(() => {
        setIsOpen(false);
        setExpandedMobileCategory(null);
    }, [pathname]);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    if (pathname.startsWith("/studio")) {
        return null;
    }

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full px-4 pt-3 transition-transform duration-300 md:px-6",
                isVisible ? "translate-y-0" : "-translate-y-full"
            )}
        >
            <div className="mx-auto max-w-7xl rounded-xl border border-border/20 bg-background/80 px-4 py-2 backdrop-blur-xl shadow-lg shadow-black/5 supports-[backdrop-filter]:bg-background/60 md:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="flex items-center">
                            <Image
                                src={
                                    mounted && (resolvedTheme === "dark" || theme === "dark")
                                        ? "/assets/logo/seven_oak_prestige_dark_mode.png"
                                        : "/assets/logo/seven_oak_prestige_light_mode.png"
                                }
                                alt="Seven Oak Prestige Logo"
                                width={70}
                                height={70}
                                priority
                            />

                            <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d066] bg-clip-text text-sm font-bold text-transparent md:inline-block md:text-base lg:text-lg">
                                SEVEN OAK PRESTIGE
                            </span>
                        </div>

                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-1">
                            {links.filter((link) => link.name !== "Company Checker").map((link) => (
                                <li key={link.href}>
                                    {link.name === "Services" || link.name === "Resources" ? (
                                        <div className="group relative">
                                            <Link
                                                href={link.href.startsWith("#") && pathname !== "/" ? "/" + link.href : link.href}
                                                className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                                            >
                                                <span className="relative z-10">{link.name}</span>
                                                <MdKeyboardArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:rotate-180" />
                                                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#d4af37] to-[#f3d066] transition-transform group-hover:scale-x-100" />
                                            </Link>
                                            
                                            {/* Dropdown Mega Menu */}
                                            <div className={cn("absolute left-1/2 -translate-x-1/2 top-full hidden pt-4 group-hover:block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50", link.name === "Services" ? "w-[600px]" : "w-[400px]")}>
                                                <div className={cn("rounded-2xl border border-[#d4af37]/20 bg-background p-8 shadow-2xl backdrop-blur-2xl supports-[backdrop-filter]:bg-background/95 grid gap-12", link.name === "Services" ? "grid-cols-2" : "grid-cols-1")}>
                                                    {(link.name === "Services" ? menuCategories : resourceCategories).map((category) => (
                                                        <div key={category.title}>
                                                            <h3 className="mb-5 text-lg font-bold text-foreground">{category.title}</h3>
                                                            <ul className="flex flex-col gap-3.5">
                                                                {category.links.map((sublink) => (
                                                                    <li key={sublink.href}>
                                                                        <Link
                                                                            href={sublink.href}
                                                                            className="group/link flex items-center gap-2.5 text-sm text-foreground/80 transition-colors hover:text-foreground"
                                                                        >
                                                                            <span className="text-foreground/40 font-medium transition-transform group-hover/link:translate-x-1 group-hover/link:text-[#d4af37]">›</span>
                                                                            <span className="group-hover/link:text-[#d4af37] transition-colors">{sublink.name}</span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href.startsWith("#") && pathname !== "/" ? "/" + link.href : link.href}
                                            className="group relative block px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                                        >
                                            <span className="relative z-10">{link.name}</span>
                                            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#d4af37] to-[#f3d066] transition-transform group-hover:scale-x-100" />
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="https://wa.me/447447488755"
                                    className="ml-2 flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] px-4 py-2 text-sm font-bold text-black shadow-lg shadow-[#d4af37]/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#d4af37]/60 active:scale-95"
                                >
                                    <FaWhatsapp className="h-4 w-4" />
                                    <span>WhatsApp</span>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <ModeToggle />
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="flex items-center gap-4 lg:hidden">
                        <Link
                            href="https://wa.me/447447488755"
                            className="flex items-center justify-center rounded-lg bg-gradient-to-r from-[#d4af37] to-[#f3d066] p-2 text-black shadow-md shadow-[#d4af37]/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/60 active:scale-95"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="h-4 w-4" />
                        </Link>
                        <ModeToggle />
                        <Sheet key={pathname} open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="rounded-lg p-2 text-foreground transition-colors hover:bg-foreground/5 hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20"
                                    aria-label="Toggle menu"
                                >
                                    <TbMenu3 size={22} />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="border-l border-[#d4af37]/20 bg-background/95 backdrop-blur-xl"
                            >
                                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                                <nav className="mt-8 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-120px)] pb-8">
                                    {links.map((link) => {
                                        if (link.name === "Services" || link.name === "Resources") {
                                            const categories = link.name === "Services" ? menuCategories : resourceCategories;
                                            const isExpanded = expandedMobileCategory === link.name;
                                            return (
                                                <div key={link.name} className="group flex flex-col mb-1">
                                                    <button 
                                                        onClick={() => setExpandedMobileCategory(isExpanded ? null : link.name)}
                                                        className="flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                                                    >
                                                        <span className="relative z-10">{link.name}</span>
                                                        <MdKeyboardArrowDown className={cn("h-5 w-5 transition-transform duration-300 text-[#d4af37] opacity-80", isExpanded && "rotate-180")} />
                                                    </button>
                                                    
                                                    <div className={cn("grid transition-all duration-300 ease-in-out", isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                                                        <div className="overflow-hidden">
                                                            <div className="flex flex-col pl-2 gap-1 border-l-2 border-[#d4af37]/20 ml-6 pb-2 pt-1">
                                                                {categories.flatMap(cat => cat.links).map(sublink => (
                                                                    <Link
                                                                        key={sublink.href}
                                                                        href={sublink.href}
                                                                        className="group relative overflow-hidden rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        <div className="flex items-center justify-between">
                                                                            <span className="relative z-10">{sublink.name}</span>
                                                                            <MdArrowOutward className="h-3 w-3 text-[#d4af37] opacity-60 group-hover:opacity-100 transition-opacity" />
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href.startsWith("#") && pathname !== "/" ? "/" + link.href : link.href}
                                                className="group relative overflow-hidden rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
                                                onClick={(e) => {
                                                    // Close the sheet
                                                    setIsOpen(false);

                                                    // Handle anchor links only when on the home page
                                                    if (link.href.startsWith("#") && pathname === "/") {
                                                        e.preventDefault();
                                                        const element = document.querySelector(`${link.href}`);
                                                        if (element) {
                                                            setTimeout(() => {
                                                                element.scrollIntoView({ behavior: "smooth" });
                                                            }, 100);
                                                        }
                                                    }
                                                }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="relative z-10">{link.name}</span>
                                                    <MdArrowOutward className="h-3 w-3 text-[#d4af37] opacity-60 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <span className="absolute inset-y-0 left-0 w-1 origin-left scale-y-0 bg-gradient-to-b from-[#d4af37] to-[#f3d066] transition-transform group-hover:scale-y-100" />
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}