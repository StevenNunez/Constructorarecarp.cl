"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ClipboardCheck, Phone, Send, Info, MessageSquare } from "lucide-react";

const infoItems = [
    { icon: <MapPin className="text-primary" />, title: "Oficina Central", detail: "El Romero Sitio 2814 Block B, La Serena, Chile" },
    { icon: <ClipboardCheck className="text-primary" />, title: "Identificación Fiscal", detail: "RUT: 77.471.664-5" },
    { icon: <Mail className="text-primary" />, title: "Correo Electrónico", detail: "cristianpc@constructorarecarp.cl" },
];

export default function Contact() {
    const [whatsappMessage, setWhatsappMessage] = useState('');
    const whatsappNumber = '56945130703';

    const handleWhatsappSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (whatsappMessage.trim()) {
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
            setWhatsappMessage('');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* WhatsApp Direct Input at the top of the section as requested */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-2xl"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <form onSubmit={handleWhatsappSubmit} className="relative flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 backdrop-blur-sm">
                            <div className="flex items-center gap-3 shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg shadow-green-500/30">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-black uppercase tracking-wider text-slate-900 leading-none mb-1">WhatsApp Directo</p>
                                    <p className="text-xs text-slate-500 font-medium">Respuesta instantánea</p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-grow">
                                <input
                                    type="text"
                                    placeholder="Escribe tu mensaje aquí..."
                                    value={whatsappMessage}
                                    onChange={(e) => setWhatsappMessage(e.target.value)}
                                    className="flex-grow bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                    aria-label="Mensaje de WhatsApp"
                                />
                                <button type="submit" className="h-12 w-12 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-green-500/20">
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900">
                            Póngase en <span className="text-primary italic">Contacto</span>
                        </h2>
                        <p className="text-slate-500 mb-12 text-xl font-light leading-relaxed">
                            ¿Tiene un proyecto en mente? Nuestro equipo de expertos está listo para asesorarle y entregarle un presupuesto detallado que se ajuste a su visión.
                        </p>

                        <div className="space-y-10">
                            {infoItems.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 uppercase tracking-tighter mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-lg">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Attendance Badge */}
                        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white flex items-center gap-6 border border-slate-700">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Info size={24} className="text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-lg leading-tight mb-1">Horario de Atención</p>
                                <p className="text-slate-400 text-sm">Lunes a Viernes: 08:30 - 18:00 hrs.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-200 relative"
                    >
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

                        <h3 className="text-2xl font-bold mb-10 text-slate-900 flex items-center gap-3">
                            <Send size={20} className="text-primary" />
                            Envíenos un Mensaje
                        </h3>

                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Nombre Completo</label>
                                    <input
                                        className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-sm outline-none transition-all placeholder:text-slate-300 text-slate-900"
                                        placeholder="Ej: Juan Pérez"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Teléfono</label>
                                    <input
                                        className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-sm outline-none transition-all placeholder:text-slate-300 text-slate-900"
                                        placeholder="+56 9 1234 5678"
                                        type="tel"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Servicio de Interés</label>
                                <select className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-sm outline-none appearance-none cursor-pointer text-slate-900">
                                    <option>Terminaciones y Acabados</option>
                                    <option>Construcción Especializada</option>
                                    <option>Obras de Hormigón</option>
                                    <option>Otros Proyectos</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Mensaje del Proyecto</label>
                                <textarea
                                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary shadow-sm outline-none transition-all placeholder:text-slate-300 min-h-[160px] text-slate-900"
                                    placeholder="Describa brevemente su necesidad..."
                                ></textarea>
                            </div>

                            <button type="button" className="w-full group relative bg-primary hover:bg-red-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-4 overflow-hidden">
                                <span className="relative z-10 uppercase tracking-widest">Enviar Solicitud</span>
                                <ArrowUpRight size={20} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ArrowUpRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    );
}
