import type { MetadataRoute } from 'next';
import { MARCA, CORES } from '@/lib/marca';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${MARCA.nome} (${MARCA.sigla})`,
    short_name: MARCA.nome,
    description: MARCA.descricao,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: CORES.laranja,
    lang: 'pt-AO',
    icons: [
      { src: '/logo-aos.png', sizes: '350x350', type: 'image/png', purpose: 'any' },
    ],
  };
}
