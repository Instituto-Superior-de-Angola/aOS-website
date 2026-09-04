#!/usr/bin/env node
/**
 * Conformidade com a identidade visual do aOS.
 *
 * A paleta é amostrada do logotipo oficial e está declarada em dois sítios:
 * `lib/marca.ts` (usado em TypeScript) e `tailwind.config.js` (usado nas classes
 * utilitárias). Este script falha o CI se divergirem, ou se alguém introduzir
 * uma cor hexadecimal fora da paleta directamente nos componentes.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const RAIZ = new URL('..', import.meta.url).pathname;

/** Paleta canónica, amostrada de docs/assets/imagens/logo-aos.png. */
const PALETA = {
  laranja: '#F35B07',
  vermelho: '#C9331E',
  ouro: '#E8B21E',
  preto: '#0B0B0C',
};

const erros = [];

// --- 1. A paleta tem de constar de lib/marca.ts e de tailwind.config.js -----
const marca = readFileSync(join(RAIZ, 'lib/marca.ts'), 'utf8');
const tailwind = readFileSync(join(RAIZ, 'tailwind.config.js'), 'utf8');

for (const [nome, valor] of Object.entries(PALETA)) {
  if (!marca.includes(valor)) erros.push(`lib/marca.ts não declara ${nome} (${valor}).`);
  if (!tailwind.includes(valor)) erros.push(`tailwind.config.js não declara ${nome} (${valor}).`);
}

// --- 2. O logotipo oficial tem de existir e não pode ser substituído --------
try {
  const logotipo = statSync(join(RAIZ, 'public/logo-aos.png'));
  if (logotipo.size === 0) erros.push('public/logo-aos.png está vazio.');
} catch {
  erros.push('public/logo-aos.png não existe — o logotipo oficial é obrigatório.');
}

// --- 3. Nenhuma cor hexadecimal fora da paleta nos componentes e páginas ----
/** Cores neutras e de estado permitidas fora da paleta da marca. */
const EXCEPCOES = new Set(['#FFFFFF', '#FFF', '#000000', '#000']);
const PERMITIDAS = new Set([...Object.values(PALETA).map((c) => c.toUpperCase()), ...EXCEPCOES]);

function percorrer(directorio) {
  for (const entrada of readdirSync(directorio)) {
    const caminho = join(directorio, entrada);
    if (statSync(caminho).isDirectory()) {
      percorrer(caminho);
      continue;
    }
    if (!['.ts', '.tsx'].includes(extname(caminho))) continue;

    const conteudo = readFileSync(caminho, 'utf8');
    for (const cor of conteudo.match(/#[0-9a-fA-F]{3,8}\b/g) ?? []) {
      if (!PERMITIDAS.has(cor.toUpperCase())) {
        erros.push(`${caminho.replace(RAIZ, '')}: cor ${cor} fora da paleta institucional.`);
      }
    }
  }
}

for (const pasta of ['app', 'components']) percorrer(join(RAIZ, pasta));

// --- Resultado --------------------------------------------------------------
if (erros.length > 0) {
  console.error('✖ Identidade visual: falhas encontradas\n');
  for (const erro of erros) console.error(`  - ${erro}`);
  process.exit(1);
}

console.log('✔ Identidade visual conforme com o logotipo e a paleta institucional.');
