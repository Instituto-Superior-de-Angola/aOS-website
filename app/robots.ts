import type { MetadataRoute } from 'next';
import { MARCA } from '@/lib/marca';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `https://${MARCA.dominio}/sitemap.xml`,
  };
}
