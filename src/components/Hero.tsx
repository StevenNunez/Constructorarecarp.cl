"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with parallax effect or just clean overlay */}
            <div className="absolute inset-0 z-0 hero-gradient"></div>

            {/* Animated Shapes for premium feel */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold mb-6 tracking-wide">
                        Excelencia en cada detalle
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                        Construimos el Futuro <br />
                        de <span className="text-primary underline decoration-primary/30 underline-offset-8">Coquimbo</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        Especialistas en terminaciones finas y construcción especializada con la solidez y calidad que su proyecto regional merece.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        href="#services"
                        className="group relative bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-2xl shadow-primary/30 flex items-center gap-2 overflow-hidden"
                    >
                        <span className="relative z-10">Nuestros Servicios </span>
                        <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform rounded-full opacity-0 group-hover:opacity-100 duration-500 origin-center"></div>
                    </Link>
                </motion.div>
            </div>
            <div className="absolute bottom-0.5 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-60">
                <span className="text-white text-[10px] uppercase font-bold tracking-[0.2em]">Deslizar</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
}