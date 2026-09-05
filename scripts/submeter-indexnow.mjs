#!/usr/bin/env node
/**
 * Notifica os motores que participam no protocolo IndexNow (Bing, Yandex,
 * Seznam, Naver) das páginas novas ou alteradas.
 *
 * O Google NÃO participa neste protocolo. A submissão ao Google faz-se pelo
 * Search Console, que exige autenticação da conta — ver README.
 *
 * Uso: node scripts/submeter-indexnow.mjs
 */

import { readFileSync } from 'node:fs';

const marca = readFileSync(new URL('../lib/marca.ts', import.meta.url), 'utf8');
const ler = (campo) => marca.match(new RegExp(`${campo}: '([^']+)'`))?.[1];

const chave = marca.match(/INDEXNOW_KEY = '([^']+)'/)?.[1];
const dominio = ler('dominio');
const url = ler('url');

if (!chave || !dominio || !url) {
  console.error('✖ Não foi possível ler a chave ou o domínio de lib/marca.ts');
  process.exit(1);
}

// As páginas submetidas são as declaradas no sitemap.
const sitemap = readFileSync(new URL('../app/sitemap.ts', import.meta.url), 'utf8');
const caminhos = [...sitemap.matchAll(/caminho: '([^']*)'/g)].map((m) => m[1]);
const urlList = caminhos.map((c) => `${url}${c}`);

const corpo = {
  host: dominio,
  key: chave,
  keyLocation: `${url}/${chave}.txt`,
  urlList,
};

console.log(`A submeter ${urlList.length} endereços de ${dominio} ao IndexNow…`);

const resposta = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(corpo),
});

// 200 = aceite; 202 = aceite, chave ainda em validação.
if (resposta.status === 200 || resposta.status === 202) {
  console.log(`✔ Submissão aceite (HTTP ${resposta.status}).`);
  for (const u of urlList) console.log(`   ${u}`);
} else {
  console.error(`✖ Recusada (HTTP ${resposta.status}): ${await resposta.text()}`);
  process.exit(1);
}
