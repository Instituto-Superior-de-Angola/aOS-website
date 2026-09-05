import type { MetadataRoute } from 'next';
import { MARCA } from '@/lib/marca';

const PAGINAS: { caminho: string; prioridade: number; frequencia: 'weekly' | 'monthly' }[] = [
  { caminho: '', prioridade: 1.0, frequencia: 'weekly' },
  { caminho: '/edicoes', prioridade: 0.9, frequencia: 'monthly' },
  { caminho: '/descarregar', prioridade: 0.9, frequencia: 'weekly' },
  { caminho: '/registo-de-alteracoes', prioridade: 0.8, frequencia: 'weekly' },
  { caminho: '/contribuir', prioridade: 0.8, frequencia: 'monthly' },
  { caminho: '/documentacao', prioridade: 0.7, frequencia: 'monthly' },
  { caminho: '/comunidade', prioridade: 0.7, frequencia: 'monthly' },
  { caminho: '/seguranca', prioridade: 0.6, frequencia: 'monthly' },
  { caminho: '/privacidade', prioridade: 0.3, frequencia: 'monthly' },
  { caminho: '/termos', prioridade: 0.3, frequencia: 'monthly' },
  { caminho: '/eliminacao-de-dados', prioridade: 0.3, frequencia: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return PAGINAS.map(({ caminho, prioridade, frequencia }) => ({
    url: `${MARCA.url}${caminho}`,
    lastModified: agora,
    changeFrequency: frequencia,
    priority: prioridade,
  }));
}
