'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CHAVE = 'aos-consentimento-v1';

type Decisao = 'aceite' | 'recusado';

/** Comunica a decisão ao Google Consent Mode. */
function aplicar(decisao: Decisao) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.('consent', 'update', {
    analytics_storage: decisao === 'aceite' ? 'granted' : 'denied',
  });
}

/**
 * Pedido de consentimento para medição de audiência.
 *
 * O Consent Mode é inicializado em `app/layout.tsx` com `analytics_storage`
 * negado por omissão: nenhum cookie de medição é instalado antes de decisão
 * explícita. Este componente apenas regista a decisão e comunica-a.
 */
export function Consentimento() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let guardado: string | null = null;
    try {
      guardado = window.localStorage.getItem(CHAVE);
    } catch {
      // Armazenamento indisponível (janela privada, bloqueio de terceiros).
      // Sem forma de registar a decisão, mantém-se o estado negado por omissão
      // e não se importuna o visitante em cada navegação.
      return;
    }

    if (guardado === 'aceite' || guardado === 'recusado') {
      aplicar(guardado);
      return;
    }
    setVisivel(true);
  }, []);

  function decidir(decisao: Decisao) {
    try {
      window.localStorage.setItem(CHAVE, decisao);
    } catch {
      // A decisão vale para esta sessão ainda que não possa ser persistida.
    }
    aplicar(decisao);
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimento para medição de audiência"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-noite-600 bg-noite-900/95 backdrop-blur-md"
    >
      <div className="contentor flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-6 text-white/70">
          Usamos medição de audiência para saber que páginas são consultadas. Não recolhemos dados
          que o identifiquem nem usamos publicidade. Sem a sua autorização não é instalado qualquer
          cookie de medição.{' '}
          <Link href="/privacidade" className="font-medium text-aos-laranja-claro underline">
            Política de privacidade
          </Link>
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => decidir('recusado')}
            className="rounded-lg px-4 py-2.5 font-display text-sm font-semibold text-white/80 ring-1 ring-inset ring-white/20 transition hover:bg-white/10"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => decidir('aceite')}
            className="rounded-lg bg-gradiente-aos px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:brightness-110"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
