"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MapPin, Building2 } from "lucide-react";

const stats = [
    { icon: <MapPin className="text-primary" />, label: "Región IV", value: "Cobertura Total" },
    { icon: <ShieldCheck className="text-primary" />, label: "Expertos", value: "Terminaciones Finas" },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Trayectoria y Confianza</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
                            Constructora Recarp SpA: <br />
                            <span className="text-slate-400 font-light italic"></span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
                            Ubicados en el corazón de La Serena, en <b className="text-slate-800">El Romero Sitio 2814 Block B</b>, nos hemos consolidado como un referente regional. Nuestro enfoque se centra en la excelencia operativa y la atención meticulosa a cada detalle de obra.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-primary/30 transition-colors group">
                                    <div className="mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                    <p className="text-2xl font-black text-slate-900 mb-1">{stat.label}</p>
                                    <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                                <CheckCircle2 size={20} />
                            </div>
                            <p className="text-sm font-semibold text-slate-700">
                                Compromiso inquebrantable con los plazos y la calidad certificados por nuestra trayectoria regional.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 group">
                            <img
                                src="/aeropuerto.png"
                                alt="Proyectos Recarp - Trabajos en el Aeropuerto arturo merino"
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-3xl shadow-3xl hidden lg:flex flex-col items-center justify-center z-20 border-8 border-white"
                        >
                            <p className="text-5xl font-black text-white leading-none">100%</p>
                            <p className="text-white/90 font-bold uppercase tracking-tighter text-xs mt-2 text-center">Compromiso <br /> Local</p>
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-slate-100 rounded-full z-0"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
