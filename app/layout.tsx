import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Cabecalho } from '@/components/Cabecalho';
import { Rodape } from '@/components/Rodape';
import { MARCA, ISA, GA_ID, CORES } from '@/lib/marca';

export const metadata: Metadata = {
  metadataBase: new URL(MARCA.url),
  title: {
    default: `${MARCA.nome} (${MARCA.sigla}) — ${MARCA.descricao}`,
    template: `%s — ${MARCA.nome}`,
  },
  description:
    'O angolanOS (aOS) é uma distribuição GNU/Linux angolana para a Administração Pública: auditável, construída sobre Debian e localizada nas línguas nacionais. Projecto de investigação do Instituto Superior de Angola.',
  applicationName: MARCA.nome,
  keywords: [
    'angolanOS',
    'aOS',
    'Angola',
    'GNU/Linux',
    'Debian',
    'sistema operativo',
    'Administração Pública',
    'software livre',
    'línguas bantu',
    'Umbundu',
    'Kimbundu',
    'compilação reproduzível',
    'Instituto Superior de Angola',
    'ISA',
  ],
  authors: [{ name: ISA.nome, url: ISA.url }],
  creator: ISA.nome,
  publisher: ISA.nome,
  category: 'technology',
  alternates: {
    canonical: '/',
    types: { 'text/plain': `${MARCA.url}/llms.txt` },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: '/',
    siteName: MARCA.nome,
    title: `${MARCA.nome} (${MARCA.sigla}) — ${MARCA.descricao}`,
    description:
      'Distribuição GNU/Linux angolana para a Administração Pública: auditável, construída sobre Debian e localizada nas línguas nacionais.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${MARCA.nome} — ${MARCA.descricao}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${MARCA.nome} (${MARCA.sigla})`,
    description: MARCA.descricao,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: CORES.laranja,
  colorScheme: 'light',
};

/**
 * Dados estruturados schema.org.
 *
 * Declaram-se duas entidades: o software (para resultados de pesquisa sobre o
 * sistema operativo) e a organização que o acolhe (para associar o projecto ao
 * ISA nos grafos de conhecimento).
 */
const dadosEstruturados = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${MARCA.url}/#software`,
      name: MARCA.nome,
      alternateName: MARCA.sigla,
      applicationCategory: 'OperatingSystem',
      operatingSystem: 'GNU/Linux',
      description: MARCA.descricao,
      url: MARCA.url,
      inLanguage: ['pt-AO', 'umb', 'kmb', 'kng', 'cjk', 'luw', 'nba'],
      license: 'https://www.gnu.org/licenses/gpl-3.0.html',
      isAccessibleForFree: true,
      codeRepository: MARCA.repositorio,
      author: { '@id': `${ISA.url}/#organizacao` },
      publisher: { '@id': `${ISA.url}/#organizacao` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AOA' },
    },
    {
      '@type': 'CollegeOrUniversity',
      '@id': `${ISA.url}/#organizacao`,
      name: ISA.nome,
      alternateName: ISA.sigla,
      url: ISA.url,
      email: ISA.email,
      telephone: ISA.telefone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Estrada da Pedreira, 02, Bairro 17 de Setembro, Sequele',
        addressLocality: 'Icolo e Bengo',
        addressRegion: 'Luanda',
        addressCountry: 'AO',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${MARCA.url}/#website`,
      url: MARCA.url,
      name: MARCA.nome,
      inLanguage: 'pt-AO',
      publisher: { '@id': `${ISA.url}/#organizacao` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-AO">
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${MARCA.nome} — Registo de Alterações`} href="/feed.xml" />
        <script
          type="application/ld+json"
          // Conteúdo estático definido em código; não provém de entrada de utilizador.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-tinta focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Rodape />

        {/* Google Analytics — carregado após a interactividade da página. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
