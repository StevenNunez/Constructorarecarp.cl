"use client";

import { motion } from "framer-motion";
import { Hammer, Paintbrush, Ruler, Calculator, ShieldCheck, Zap } from "lucide-react";

const services = [
    {
        title: "Actividades Especializadas",
        description: "Ejecución de procesos técnicos complejos que requieren experiencia específica, garantizando la integridad estructural y normativa.",
        icon: <Hammer className="w-8 h-8" />,
        color: "bg-red-50 text-primary",
        features: ["Estructuras metálicas", "Obras de hormigón armado", "Instalaciones técnicas"]
    },
    {
        title: "Terminaciones y Acabados",
        description: "Toque final de distinción a sus edificaciones. Especialistas en revestimientos, pintura y detalles de alta gama.",
        icon: <Paintbrush className="w-8 h-8" />,
        color: "bg-pink-50 text-accent",
        features: ["Revestimientos de piedra", "Yeso y pintura decorativa", "Acabados de lujo"]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D32F2F 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Nuestras <span className="text-primary">Especialidades</span></h2>
                        <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full"></div>
                        <p className="text-slate-500 max-w-2xl mx-auto text-xl font-light">
                            Soluciones integrales respaldadas por mano de obra calificada y materiales de primera calidad para obras residenciales e industriales.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Card Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                {service.icon}
                            </div>

                            <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-grow">
                                {service.description}
                            </p>

                            <div className="grid gap-4">
                                {service.features.map((feature, fidx) => (
                                    <div key={fidx} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <ShieldCheck size={14} />
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
