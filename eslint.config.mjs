import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  // next-env.d.ts é gerado pelo Next durante o build e contém uma referência
  // triple-slash que a regra do TypeScript proíbe. Como só existe depois do
  // build, o lint passava ou falhava consoante a ordem dos comandos.
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default config;
