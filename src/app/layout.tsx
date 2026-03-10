import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://constructorarecarp.cl";
const siteName = "Constructora Recarp SpA";
const siteTitle = `${siteName} | Excelencia en Construcción en Coquimbo`;
const siteDescription =
  "Constructora Recarp SpA, especialistas en terminaciones finas y construcción especializada en la Región de Coquimbo. Obras de hormigón armado, estructuras metálicas y acabados de alta gama.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "constructora coquimbo",
    "empresa constructora la serena",
    "terminaciones finas",
    "obras de hormigón armado",
    "estructuras metálicas",
    "construcción especializada",
    "Constructora Recarp",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
