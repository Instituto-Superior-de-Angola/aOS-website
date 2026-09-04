import Link from 'next/link';
import { Logotipo } from './Logotipo';
import { RODAPE } from '@/lib/navegacao';
import { MARCA } from '@/lib/marca';

export function Rodape() {
  return (
    <footer className="mt-24 border-t border-noite-600 bg-noite-900 text-white/70">
      <div className="contentor grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logotipo invertido />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
            {MARCA.descricao}. Um programa do {MARCA.promotor}, apoiado pela {MARCA.financiador}.
          </p>
          <p className="mt-5 font-mono text-2xs text-white/40">{MARCA.dominio}</p>
        </div>

        {RODAPE.map((coluna) => (
          <div key={coluna.titulo}>
            <h2 className="font-display text-2xs font-bold uppercase tracking-kicker text-white/45">{coluna.titulo}</h2>
            <ul className="mt-4 space-y-2.5">
              {coluna.ligacoes.map((l) => (
                <li key={l.href + l.titulo}>
                  <Link href={l.href} className="text-sm text-white/65 transition hover:text-aos-laranja-claro">
                    {l.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-noite-600">
        <div className="contentor flex flex-col gap-3 py-6 text-2xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {MARCA.promotor} — Ciência, Inovação e Soberania Digital.</p>
          <div className="flex items-center gap-5">
            <a href={MARCA.repositorio} className="transition hover:text-white/70" target="_blank" rel="noopener noreferrer">
              Código-fonte
            </a>
            <Link href="/seguranca" className="transition hover:text-white/70">
              Segurança
            </Link>
            <span>Licença GPL-3.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
