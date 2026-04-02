import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Outfit, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Il Potere Tech — Suporte em TI | Bragança Paulista, SP',
  description:
    'Suporte técnico para pequenas empresas em Bragança Paulista. Remoto 24h para emergências, visitas presenciais no horário comercial. Sem fidelidade, sem surpresas.',
  keywords: 'suporte TI, Bragança Paulista, suporte técnico, informática, TI empresarial',
}

export const viewport: Viewport = {
  themeColor: '#8B2635',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${outfit.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
