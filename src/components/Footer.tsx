"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-4 gap-16 mb-20 relative z-10">
                    <div className="md:col-span-2">
                        <img
                            src="/logo.png"
                            alt="Constructora Recarp Logo"
                            className="h-16 w-auto mb-10 object-contain"
                        />
                        <p className="text-slate-500 max-w-sm text-lg font-light leading-relaxed">
                            Líderes en acabados de alta gama y construcción especializada en la Región de Coquimbo. Solidez técnica y estética que perdura en el tiempo.
                        </p>

                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-primary">Navegación</h4>
                        <ul className="space-y-6">
                            {[
                                { name: "Sobre Nosotros", href: "#about" },
                                { name: "Nuestros Servicios", href: "#services" },
                                { name: "Cobertura", href: "#region" },
                                { name: "Solicitar Presupuesto", href: "#contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-lg font-light flex items-center gap-2 group">
                                        <span className="w-2 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-10 text-primary">Corporativo</h4>
                        <div className="space-y-6 text-slate-400 text-lg font-light">
                            <p>Constructora Recarp SpA</p>
                            <p className="flex flex-col">
                                <span className="text-xs uppercase font-bold text-slate-600 mb-1">RUT</span>
                                77.471.664-5
                            </p>
                            <p className="flex flex-col">
                                <span className="text-xs uppercase font-bold text-slate-600 mb-1">Dirección</span>
                                El Romero Sitio 2814 Block B, La Serena
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                    <p className="text-slate-600 text-sm font-medium">
                        © {new Date().getFullYear()} Constructora Recarp SpA.
                        <br />
                        Todos los derechos reservados.
                        <br />
                        {" "}Desarrollado por <a href="https://www.teolabs.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>Teo Labs</a>
                    </p>

                    <div className="flex gap-8 text-slate-600 text-[10px] uppercase font-bold tracking-widest">
                        <a href="#" className="hover:text-primary transition-colors"></a>
                        <a href="#" className="hover:text-primary transition-colors"></a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 hover:-translate-y-2 transition-transform"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>

                {/* Decorative background logo */}
                <div className="absolute bottom-4 right-4 opacity-[0.05] pointer-events-none select-none z-0">
                    <h1 className="text-[8rem] lg:text-[12rem] font-black leading-none uppercase tracking-tighter">RECARP</h1>
                </div>
            </div>
        </footer>
    );
}
