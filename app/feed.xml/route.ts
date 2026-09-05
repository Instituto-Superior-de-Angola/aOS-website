import { LANCAMENTOS } from '@/lib/releases';
import { MARCA, ISA } from '@/lib/marca';

/**
 * Feed RSS do registo de alterações.
 *
 * Publica apenas versões lançadas ou em desenvolvimento; as entradas marcadas
 * como planeadas são metas do roteiro e não factos, pelo que não são
 * distribuídas como notícias.
 */
export const dynamic = 'force-static';

function escapar(texto: string) {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function GET() {
  const itens = LANCAMENTOS.filter((l) => l.estado !== 'planeado')
    .map((l) => {
      const url = `${MARCA.url}/registo-de-alteracoes#v${l.versao}`;
      const alteracoes = l.alteracoes
        .map((a) => `${a.tipo}(${a.escopo}): ${a.descricao}`)
        .join(' | ');
      return `    <item>
      <title>${escapar(`aOS ${l.versao} — ${l.titulo}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${l.data}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapar(`${l.resumo} ${alteracoes}`)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapar(`${MARCA.nome} — Registo de Alterações`)}</title>
    <link>${MARCA.url}/registo-de-alteracoes</link>
    <atom:link href="${MARCA.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapar(`Versões e alterações do ${MARCA.nome}, ${MARCA.descricao.toLowerCase()}.`)}</description>
    <language>pt-AO</language>
    <copyright>${escapar(ISA.nome)}</copyright>
${itens}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
