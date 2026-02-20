import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Constructora Recarp SpA | Excelencia en Construcción",
  description: "Especialistas en terminaciones y actividades de construcción especializada en Coquimbo, Chile. Calidad y solidez para sus proyectos.",
  keywords: ["construcción", "Coquimbo", "terminaciones", "hormigón armado", "estructuras metálicas", "Recarp"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
