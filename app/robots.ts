import type { MetadataRoute } from 'next';
import { MARCA } from '@/lib/marca';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Motores de pesquisa e agentes de modelos de linguagem são admitidos:
      // a finalidade do sítio é a divulgação pública do projecto.
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${MARCA.url}/sitemap.xml`,
    host: MARCA.url,
  };
}
