import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { Distintivo } from '@/components/Distintivo';
import { EDICOES, ESTADO_EDICAO } from '@/lib/edicoes';

export const metadata: Metadata = {
  title: 'Edições',
  description:
    'As seis edições do angolanOS — Desktop Pública, Servidor Estatal, Defesa, Educação, Live Forense e Embarcado — partilham um único núcleo Debian endurecido.',
  alternates: { canonical: '/edicoes' },
  openGraph: {
    title: 'Edições — angolanOS',
    description: 'As seis edições do angolanOS — Desktop, Servidor, Defesa, Educação, Forense e Embarcado — partilham um núcleo Debian comum.',
    url: '/edicoes',
  },
};

export default function PaginaEdicoes() {
  return (
    <>
      <CabecalhoPagina
        kicker="Edições"
        titulo="Um núcleo, seis sistemas"
        descricao="O aOS partilha um único núcleo Debian Estável endurecido entre seis edições. O que distingue cada uma é o perfil de segurança, o conjunto de pacotes e o modo de operação — nunca a base de confiança."
      />

      <div className="contentor space-y-5 py-16">
        {EDICOES.map((edicao) => {
          const estado = ESTADO_EDICAO[edicao.estado];
          return (
            <article
              key={edicao.id}
              id={edicao.id}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-linha bg-papel shadow-cartao"
            >
              <div className="grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] sm:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold sm:text-3xl">{edicao.nome}</h2>
                    <Distintivo className={estado.classe}>{estado.rotulo}</Distintivo>
                  </div>
                  <p className="mt-3 font-display text-base font-medium text-aos-vermelho">{edicao.resumo}</p>
                  <p className="mt-5 text-sm leading-7 text-tinta-suave">{edicao.descricao}</p>

                  <dl className="mt-8 grid gap-5 border-t border-linha pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="text-2xs uppercase tracking-kicker text-tinta-tenue">Destinatários</dt>
                      <dd className="mt-1.5 text-sm text-tinta-suave">{edicao.publico}</dd>
                    </div>
                    <div>
                      <dt className="text-2xs uppercase tracking-kicker text-tinta-tenue">Modo de operação</dt>
                      <dd className="mt-1.5 text-sm text-tinta-suave">{edicao.ambiente}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-2xs uppercase tracking-kicker text-tinta-tenue">Metapacote</dt>
                      <dd className="mt-1.5 font-mono text-sm text-tinta">{edicao.metapacote}</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl bg-superficie p-7 ring-1 ring-inset ring-linha">
                  <h3 className="font-display text-2xs font-bold uppercase tracking-kicker text-tinta-tenue">
                    O que distingue esta edição
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {edicao.destaques.map((destaque) => (
                      <li key={destaque} className="flex gap-3 text-sm leading-6 text-tinta-suave">
                        <Check size={16} className="mt-0.5 shrink-0 text-aos-laranja" aria-hidden />
                        <span>{destaque}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
