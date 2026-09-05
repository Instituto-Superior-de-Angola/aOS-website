'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Logotipo } from './Logotipo';
import { NAVEGACAO } from '@/lib/navegacao';
import { cn } from '@/lib/utils';

export function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const caminho = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-papel/85 backdrop-blur-md">
      <div className="contentor flex h-[4.25rem] items-center justify-between gap-4">
        <Logotipo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAVEGACAO.map((item) => {
            const activo = caminho === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={activo ? 'page' : undefined}
                className={cn(
                  'whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition',
                  activo ? 'text-aos-vermelho' : 'text-tinta-suave hover:bg-subtil hover:text-tinta',
                )}
              >
                {item.titulo}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/descarregar"
            className="hidden items-center gap-2 rounded-lg bg-gradiente-aos px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
          >
            <Download size={15} aria-hidden />
            Descarregar
          </Link>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            className="rounded-md p-2 text-tinta-suave hover:bg-subtil lg:hidden"
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          >
            {aberto ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {aberto && (
        <nav id="menu-movel" className="border-t border-linha bg-papel lg:hidden" aria-label="Navegação principal (móvel)">
          <div className="contentor flex flex-col py-3">
            {NAVEGACAO.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setAberto(false)}
                className="flex flex-col gap-0.5 rounded-md px-2 py-3 hover:bg-subtil"
              >
                <span className="font-display text-sm font-semibold text-tinta">{item.titulo}</span>
                {item.descricao && <span className="text-xs text-tinta-tenue">{item.descricao}</span>}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
