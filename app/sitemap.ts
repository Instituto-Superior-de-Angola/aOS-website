import type { MetadataRoute } from 'next';
import { MARCA } from '@/lib/marca';

const CAMINHOS = [
  '',
  '/edicoes',
  '/descarregar',
  '/registo-de-alteracoes',
  '/contribuir',
  '/documentacao',
  '/comunidade',
  '/seguranca',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return CAMINHOS.map((caminho) => ({
    url: `https://${MARCA.dominio}${caminho}`,
    lastModified: agora,
    changeFrequency: caminho === '' ? 'weekly' : 'monthly',
    priority: caminho === '' ? 1 : 0.7,
  }));
}
