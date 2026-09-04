import type { Metadata } from 'next';
import './globals.css';
import { Cabecalho } from '@/components/Cabecalho';
import { Rodape } from '@/components/Rodape';
import { MARCA } from '@/lib/marca';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${MARCA.dominio}`),
  title: {
    default: `${MARCA.nome} (${MARCA.sigla}) — ${MARCA.descricao}`,
    template: `%s — ${MARCA.nome}`,
  },
  description:
    'O angolanOS é a distribuição GNU/Linux soberana da República de Angola: segura, auditável e localizada nas línguas nacionais. Um programa do Instituto Superior de Angola.',
  keywords: ['angolanOS', 'aOS', 'Angola', 'GNU/Linux', 'soberania digital', 'Debian', 'línguas bantu', 'software livre'],
  authors: [{ name: MARCA.promotor }],
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    siteName: MARCA.nome,
    title: `${MARCA.nome} (${MARCA.sigla})`,
    description: MARCA.descricao,
    images: ['/logo-aos.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-AO">
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
      </body>
    </html>
  );
}
