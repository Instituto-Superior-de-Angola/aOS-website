import type { Metadata } from 'next';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { Distintivo } from '@/components/Distintivo';
import { LANCAMENTOS, ESTADO_LANCAMENTO, TIPO_ALTERACAO } from '@/lib/releases';
import { formatarData } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Registo de Alterações',
  description:
    'Histórico de versões do angolanOS, do estado actual de desenvolvimento aos marcos planeados até ao aOS 3.0 LTS.',
  alternates: { canonical: '/registo-de-alteracoes' },
  openGraph: {
    title: 'Registo de Alterações — angolanOS',
    description: 'Histórico de versões do angolanOS, do estado actual de desenvolvimento aos marcos planeados.',
    url: '/registo-de-alteracoes',
  },
};

export default function PaginaRegistoAlteracoes() {
  return (
    <>
      <CabecalhoPagina
        kicker="Registo de Alterações"
        titulo="Histórico de versões"
        descricao="Cada versão do aOS é registada aqui com as alterações que a compõem, classificadas pelos mesmos tipos de commit usados no repositório. As entradas marcadas como planeadas são metas do roteiro aprovado, não versões distribuídas."
      />

      <div className="contentor py-16">
        {/* Nota metodológica ---------------------------------------------- */}
        <p className="rounded-xl border border-linha bg-superficie px-6 py-5 text-sm leading-7 text-tinta-suave">
          <strong className="font-semibold text-tinta">Como ler este registo.</strong> Os tipos{' '}
          <code className="font-mono text-2xs">feat</code>, <code className="font-mono text-2xs">fix</code>,{' '}
          <code className="font-mono text-2xs">sec</code>, <code className="font-mono text-2xs">docs</code>,{' '}
          <code className="font-mono text-2xs">perf</code> e <code className="font-mono text-2xs">chore</code>{' '}
          correspondem aos Conventional Commits definidos no ficheiro <code className="font-mono text-2xs">.gitmessage</code>{' '}
          do projecto. As datas das versões planeadas são compromissos do roteiro e podem ser revistas pelos Círculos
          de Governança.
        </p>

        {/* Cronologia ------------------------------------------------------ */}
        <ol className="mt-14 space-y-14">
          {LANCAMENTOS.map((lancamento) => {
            const estado = ESTADO_LANCAMENTO[lancamento.estado];
            return (
              <li key={lancamento.versao} id={`v${lancamento.versao}`} className="scroll-mt-24">
                <div className="grid gap-8 lg:grid-cols-[14rem_1fr]">
                  {/* Coluna da versão */}
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <div className="flex items-baseline gap-2.5">
                      <h2 className="font-display text-2xl font-bold">aOS {lancamento.versao}</h2>
                    </div>
                    <p className="mt-1.5 font-display text-sm font-medium text-aos-vermelho">{lancamento.titulo}</p>
                    <p className="mt-3 font-mono text-2xs text-tinta-tenue">
                      {lancamento.estado === 'planeado' ? 'Previsto para ' : ''}
                      {formatarData(lancamento.data)}
                    </p>
                    <Distintivo className={`mt-4 ${estado.classe}`}>{estado.rotulo}</Distintivo>
                    <p className="mt-4 text-2xs uppercase tracking-kicker text-tinta-tenue">{lancamento.fase}</p>
                  </div>

                  {/* Coluna do conteúdo */}
                  <div className="rounded-2xl border border-linha bg-papel p-7 shadow-cartao sm:p-8">
                    <p className="text-sm leading-7 text-tinta-suave">{lancamento.resumo}</p>

                    <ul className="mt-7 space-y-px overflow-hidden rounded-lg bg-linha ring-1 ring-linha">
                      {lancamento.alteracoes.map((alteracao, i) => {
                        const tipo = TIPO_ALTERACAO[alteracao.tipo];
                        return (
                          <li key={i} className="flex flex-col gap-2 bg-papel px-5 py-4 sm:flex-row sm:items-start sm:gap-4">
                            <span className="flex shrink-0 items-center gap-1.5">
                              <span
                                className={`rounded px-1.5 py-0.5 font-mono text-2xs font-medium ring-1 ring-inset ${tipo.classe}`}
                              >
                                {tipo.rotulo}
                              </span>
                              <span className="font-mono text-2xs text-tinta-tenue">({alteracao.escopo})</span>
                            </span>
                            <span className="text-sm leading-6 text-tinta-suave">{alteracao.descricao}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
