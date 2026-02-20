"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Región Coquimbo", href: "#region" },
    { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-12 w-32 md:h-14 md:w-40 transition-transform group-hover:scale-105">
                        <img
                            src="/logo.png"
                            alt="Constructora Recarp Logo"
                            className="object-contain h-full w-full"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold transition-colors hover:text-primary",
                                    isScrolled ? "text-slate-700" : "text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
                        <Link
                            href="#contact"
                            className="bg-primary text-white px-6 py-2.5 rounded shadow-lg shadow-red-500/20 hover:bg-red-700 hover:scale-105 transition-all flex items-center gap-2 font-bold text-sm"
                        >
                            Cotizar <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            "p-2",
                            isScrolled ? "text-slate-600" : "text-white"
                        )}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 mt-4 overflow-hidden rounded-2xl shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-primary text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg shadow-red-500/20 mt-2"
                            >
                                Cotizar Ahora
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
