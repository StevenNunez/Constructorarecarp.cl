"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function Region() {
    return (
        <section id="region" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-3xl relative"
                >
                    {/* Abstract Patterns */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Sello Regional</span>
                            <div className="h-[1px] w-12 bg-white/40"></div>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Comprometidos <br /> con la <span className="opacity-70 italic underline decoration-white/30 underline-offset-4">Región de Coquimbo</span>
                        </h2>

                        <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                            Conocemos el terreno, el clima y los desafíos de nuestra zona. Desde La Serena hasta los valles interiores, Constructora Recarp SpA es sinónimo de cercanía y excelencia técnica local.
                        </p>

                        <div className="flex flex-wrap gap-8 items-center bg-black/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 self-start">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-xl">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="font-black text-2xl uppercase tracking-tighter">Presencia Regional</p>
                                    <p className="text-white/60 font-medium">IV Región, Chile</p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform opacity-70 hover:opacity-100">
                                Ver Cobertura <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <img
                            src="/obraestanciasauce.png"
                            alt="Región de Coquimbo"
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent opacity-60"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
