#!/usr/bin/env node
/**
 * Varrimento de segredos no código do website.
 *
 * Espelha a regra do repositório principal: nenhuma chave privada, credencial
 * ou token entra no repositório. Corre em CI e falha o build se encontrar algo.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const RAIZ = new URL('..', import.meta.url).pathname;
const IGNORAR = new Set(['node_modules', '.next', '.git', 'out', 'public']);
const EXTENSOES = new Set(['.ts', '.tsx', '.js', '.mjs', '.json', '.yml', '.yaml', '.css', '.md']);

const PADROES = [
  { nome: 'Chave privada PEM', expressao: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { nome: 'Bloco de chave PGP privada', expressao: /-----BEGIN PGP PRIVATE KEY BLOCK-----/ },
  { nome: 'Token do GitHub', expressao: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/ },
  { nome: 'Token da Vercel', expressao: /\bvercel_[A-Za-z0-9]{20,}\b/ },
  { nome: 'Chave de acesso AWS', expressao: /\bAKIA[0-9A-Z]{16}\b/ },
  { nome: 'Chave de API genérica', expressao: /\b(api[_-]?key|secret|password|passwd)\s*[:=]\s*['"][^'"\s]{12,}['"]/i },
];

const achados = [];

function percorrer(directorio) {
  for (const entrada of readdirSync(directorio)) {
    if (IGNORAR.has(entrada)) continue;
    const caminho = join(directorio, entrada);
    if (statSync(caminho).isDirectory()) {
      percorrer(caminho);
      continue;
    }
    if (!EXTENSOES.has(extname(caminho))) continue;

    const linhas = readFileSync(caminho, 'utf8').split('\n');
    linhas.forEach((linha, i) => {
      for (const padrao of PADROES) {
        // O próprio ficheiro de padrões não é um achado.
        if (caminho.endsWith('verificar-segredos.mjs')) continue;
        if (padrao.expressao.test(linha)) {
          achados.push(`${caminho.replace(RAIZ, '')}:${i + 1} — ${padrao.nome}`);
        }
      }
    });
  }
}

percorrer(RAIZ);

if (achados.length > 0) {
  console.error('✖ Possíveis segredos encontrados no código\n');
  for (const achado of achados) console.error(`  - ${achado}`);
  console.error('\nRemova o segredo, revogue-o e reescreva o histórico antes de submeter.');
  process.exit(1);
}

console.log('✔ Nenhum segredo detectado no código do website.');
