"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageSquare, Calculator, BookOpen, Menu, X, Globe, ChevronDown, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/constants/translations";

const AshokChakra = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" className="text-saffron" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="text-chakra-blue" />
        {[...Array(24)].map((_, i) => (
            <line
                key={i}
                x1="12" y1="5" x2="12" y2="2.5"
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-navy"
                transform={`rotate(${i * 15} 12 12)`}
            />
        ))}
    </svg>
);

export function Navbar() {
    const { t, language, setLanguage, languageNames } = useLanguage();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const pathname = usePathname();
    const langRef = useRef<HTMLDivElement>(null);

    // Close language dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { href: "/", label: t.nav.home, icon: ShieldCheck },
        { href: "/chat", label: t.nav.ai, icon: MessageSquare },
        { href: "/calculator", label: t.nav.calc, icon: Calculator },
        { href: "/plan", label: t.nav.plan, icon: TrendingUp },
        { href: "/learn", label: t.nav.learn, icon: BookOpen },
    ];

    const handleLanguageSelect = (lang: Language) => {
        setLanguage(lang);
        setLangDropdownOpen(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 glass-strong border-b border-border/40">
                {/* Tricolor stripe */}
                <div className="h-[2px] w-full flex">
                    <div className="flex-1 bg-saffron" />
                    <div className="flex-1 bg-white" />
                    <div className="flex-1 bg-india-green" />
                </div>

                <div className="container flex h-14 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-saffron to-saffron/80 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:shadow-saffron/20 transition-all">
                            <AshokChakra />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-sm font-bold tracking-tight text-foreground">{t.nav.brand}</span>
                            <span className="block text-[9px] text-muted-foreground font-medium -mt-0.5 tracking-wider uppercase">Government of India</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ href, label, icon: Icon }) => (
                            <Link key={href} href={href}>
                                <button
                                    className={cn(
                                        "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                        pathname === href
                                            ? "bg-saffron/10 text-saffron"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                >
                                    <Icon className="h-3.5 w-3.5" />
                                    {label}
                                </button>
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        {/* Language Dropdown */}
                        <div ref={langRef} className="relative">
                            <button
                                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-border/50"
                            >
                                <Globe className="h-3 w-3" />
                                <span className="max-w-[60px] truncate">{languageNames[language]}</span>
                                <ChevronDown className={cn("h-3 w-3 transition-transform", langDropdownOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                                {langDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -5, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -5, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 top-full mt-1.5 w-56 max-h-80 overflow-y-auto rounded-xl glass-strong border border-border/60 shadow-2xl z-50"
                                    >
                                        <div className="p-1.5 grid grid-cols-2 gap-0.5">
                                            {(Object.entries(languageNames) as [Language, string][]).map(([code, name]) => (
                                                <button
                                                    key={code}
                                                    onClick={() => handleLanguageSelect(code)}
                                                    className={cn(
                                                        "px-2.5 py-2 rounded-lg text-xs font-medium transition-all text-left truncate",
                                                        language === code
                                                            ? "bg-saffron/10 text-saffron"
                                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                                    )}
                                                >
                                                    {name}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/chat" className="hidden sm:block">
                            <Button size="sm" className="h-8 bg-gradient-to-r from-saffron to-saffron/90 hover:from-saffron/90 hover:to-saffron/80 text-white border-0 shadow-sm text-xs font-semibold">
                                {t.nav.getStarted}
                            </Button>
                        </Link>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-muted/50 text-muted-foreground"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-x-0 top-[calc(2px+3.5rem)] z-40 md:hidden"
                    >
                        <div className="glass-strong border-b border-border/40 shadow-2xl mx-2 rounded-xl mt-1 overflow-hidden">
                            <div className="p-3 space-y-1">
                                {navLinks.map(({ href, label, icon: Icon }) => (
                                    <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
                                        <button
                                            className={cn(
                                                "flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all",
                                                pathname === href
                                                    ? "bg-saffron/10 text-saffron"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                            )}
                                        >
                                            <Icon className="h-4 w-4" />
                                            {label}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
