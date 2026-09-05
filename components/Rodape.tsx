import Link from 'next/link';
import Image from 'next/image';
import { Logotipo } from './Logotipo';
import { RODAPE } from '@/lib/navegacao';
import { MARCA, ISA } from '@/lib/marca';

export function Rodape() {
  return (
    <footer className="mt-24 border-t border-noite-600 bg-noite-900 text-white/70">
      <div className="contentor grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logotipo invertido />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
            {MARCA.descricao}. Projecto de investigação aplicada desenvolvido no{' '}
            {ISA.nome}.
          </p>
          <p className="mt-5 font-mono text-2xs text-white/40">{MARCA.dominio}</p>
        </div>

        {RODAPE.map((coluna) => (
          <div key={coluna.titulo}>
            <h2 className="font-display text-2xs font-bold uppercase tracking-kicker text-white/45">
              {coluna.titulo}
            </h2>
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

      {/* Faixa institucional ------------------------------------------------- */}
      <div className="border-t border-noite-600">
        <div className="contentor flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={ISA.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
            aria-label={`${ISA.nome} — sítio oficial`}
          >
            <Image
              src="/logo-isa.png"
              alt=""
              width={150}
              height={50}
              className="h-10 w-auto opacity-70 transition group-hover:opacity-100"
            />
            <span className="text-2xs leading-5 text-white/45">
              Instituição de acolhimento
              <br />
              <span className="text-white/70 group-hover:text-white">{ISA.nome}</span>
            </span>
          </a>

          <address className="text-2xs not-italic leading-5 text-white/40">
            {ISA.morada}
            <br />
            <a href={`mailto:${MARCA.email}`} className="transition hover:text-white/70">
              {MARCA.email}
            </a>
            {' · '}
            <a href={ISA.telefoneUrl} className="transition hover:text-white/70">
              {ISA.telefone}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-noite-600">
        <div className="contentor flex flex-col gap-3 py-6 text-2xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {ISA.nome}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={MARCA.repositorio} className="transition hover:text-white/70" target="_blank" rel="noopener noreferrer">
              Código-fonte
            </a>
            <Link href="/seguranca" className="transition hover:text-white/70">
              Segurança
            </Link>
            <a href="/feed.xml" className="transition hover:text-white/70">
              RSS
            </a>
            <span>Licença {MARCA.licenca}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
