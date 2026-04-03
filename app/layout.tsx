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
  title: {
    default: "Il Potere Tech — Suporte em TI | Bragança Paulista & Região",
    template: "%s | Il Potere Tech"
  },
  description: "Suporte técnico especializado para clínicas, escritórios de advocacia e contabilidades em Bragança Paulista. TI humana, sem fidelidade e com suporte 24h para emergências.",
  keywords: ["suporte TI Bragança Paulista", "TI para clínicas", "TI para advogados", "gestão de TI", "infraestrutura de rede", "segurança digital", "suporte técnico especializado"],
  authors: [{ name: "Il Potere Tech" }],
  creator: "Il Potere Tech",
  publisher: "Il Potere Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ilpotere.tech",
    siteName: "Il Potere Tech",
    title: "Il Potere Tech — Suporte em TI que Funciona",
    description: "Foque no seu negócio, nós cuidamos da tecnologia. Suporte em TI em Bragança Paulista sem amarras de fidelidade.",
    images: [
      {
        url: "/og-image.png", // User would need to provide/generate this
        width: 1200,
        height: 630,
        alt: "Il Potere Tech — Tecnologia que Funciona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Il Potere Tech — Suporte em TI em Bragança Paulista",
    description: "TI humanizada e eficiente para pequenas empresas. Sem fidelidade.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
