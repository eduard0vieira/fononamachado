import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nathália Machado | Fonoaudióloga em São Miguel Arcanjo - SP',
  description:
    'Nathália Machado, Fonoaudióloga (CRFa 2-23700) em São Miguel Arcanjo - SP. Atendimentos em Linguagem Adulto e Infantil, Motricidade Orofacial e Disfagia. Agende sua consulta.',
  keywords: [
    'fonoaudióloga',
    'fonoaudiologia',
    'São Miguel Arcanjo',
    'linguagem infantil',
    'motricidade orofacial',
    'disfagia',
    'Nathália Machado',
  ],
  authors: [{ name: 'Nathália Machado' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://fononamachado.github.io/' },
  openGraph: {
    type: 'website',
    url: 'https://fononamachado.github.io/',
    title: 'Nathália Machado | Fonoaudióloga em São Miguel Arcanjo',
    description:
      'Atendimentos em Linguagem Adulto e Infantil, Motricidade Orofacial e Disfagia. São Miguel Arcanjo - SP.',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathália Machado | Fonoaudióloga em São Miguel Arcanjo',
    description: 'Atendimentos em Linguagem, Motricidade Orofacial e Disfagia em São Miguel Arcanjo - SP.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
