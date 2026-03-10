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
    "constructora recarp",
    "recarp spa",
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
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Constructora Recarp SpA - Construcción en Coquimbo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // PASO 4: Descomenta y reemplaza con tu código real de Google Search Console
  // Ver instrucciones en los comentarios al final de este archivo
  // verification: {
  //   google: "TU_CODIGO_DE_VERIFICACION_AQUI",
  // },
};

// Datos estructurados JSON-LD (Schema.org) para Google
// Esto le dice a Google qué tipo de empresa eres y dónde estás ubicada
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionCompany",
  name: "Constructora Recarp SpA",
  alternateName: "Recarp",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Coquimbo",
    addressCountry: "CL",
  },
  areaServed: {
    "@type": "State",
    name: "Región de Coquimbo",
  },
  serviceType: [
    "Construcción de obras civiles",
    "Terminaciones finas",
    "Obras de hormigón armado",
    "Estructuras metálicas",
    "Construcción especializada",
  ],
  knowsAbout: [
    "Hormigón armado",
    "Estructuras metálicas",
    "Terminaciones finas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
