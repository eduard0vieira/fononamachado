import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_URL } from "@/lib/perfil";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const OG_IMAGE = {
  url: "/images/nathalia.png",
  width: 1200,
  height: 630,
  alt: "Nathália Machado, fonoaudióloga em São Miguel Arcanjo — SP",
};

export const metadata: Metadata = {
  /** Base para resolver canonical e imagens relativas do OG */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nathália Machado | Fonoaudióloga em São Miguel Arcanjo — SP",
    template: "%s | Nathália Machado Fonoaudióloga",
  },
  description:
    "Fonoaudióloga em São Miguel Arcanjo — SP (CRFa 2-23700). Atendimento particular, com horário agendado, em linguagem infantil, linguagem adulto, motricidade orofacial e disfagia. Atendimento domiciliar e pacientes de Pilar do Sul e região.",
  keywords: [
    "fonoaudióloga em São Miguel Arcanjo",
    "fonoaudiologia São Miguel Arcanjo SP",
    "fonoaudióloga Pilar do Sul",
    "fonoaudiologia infantil",
    "atraso de fala tratamento",
    "criança que fala pouco",
    "troca de letras na fala",
    "comunicação alternativa autismo",
    "motricidade orofacial",
    "criança respira pela boca",
    "ceceio",
    "disfagia",
    "dificuldade para engolir",
    "engasgo ao comer",
    "fonoaudióloga domiciliar",
    "Nathália Machado",
    "CRFa 2-23700",
  ],
  authors: [{ name: "Nathália Machado", url: SITE_URL }],
  creator: "Nathália Machado",
  publisher: "Nathália Machado",
  category: "Saúde",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nathália Machado — Fonoaudióloga",
    title: "Nathália Machado | Fonoaudióloga em São Miguel Arcanjo — SP",
    description:
      "Atendimento particular em linguagem infantil e adulta, motricidade orofacial e disfagia, com opção de atendimento domiciliar. CRFa 2-23700.",
    locale: "pt_BR",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathália Machado | Fonoaudióloga em São Miguel Arcanjo",
    description:
      "Linguagem infantil e adulta, motricidade orofacial e disfagia em São Miguel Arcanjo — SP. Atendimento domiciliar disponível.",
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
