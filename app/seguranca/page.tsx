import type { Metadata } from 'next';
import { Lock, Mail, ShieldCheck, KeySquare } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { MARCA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Segurança',
  description:
    'Política de segurança do angolanOS: divulgação responsável de vulnerabilidades, cadeia de confiança criptográfica e regras de endurecimento.',
};

const PRINCIPIOS = [
  {
    icone: KeySquare,
    titulo: 'Cadeia de confiança nacional',
    texto:
      'O arranque verificado assenta na Chave Mestra Nacional, gerada e selada em Hardware Security Module. Não é usado shim de terceiros — a autoridade que assina o que arranca nas máquinas do Estado é angolana.',
  },
  {
    icone: Lock,
    titulo: 'Isolamento das edições sensíveis',
    texto:
      'As edições Defesa e Live Forense operam sem rede ou com rede restrita. Nenhuma dependência de rede externa pode ser introduzida nestes perfis, em nenhuma fase do ciclo de vida.',
  },
  {
    icone: ShieldCheck,
    titulo: 'Dupla aprovação em código crítico',
    texto:
      'Alterações a `infra/pki_hsm/` e a `docs/arquitectura/` exigem aprovação de dois mantenedores principais. Nenhuma pessoa isolada consegue alterar a raiz de confiança.',
  },
];

export default function PaginaSeguranca() {
  return (
    <>
      <CabecalhoPagina
        kicker="Segurança"
        titulo="Política de segurança"
        descricao="O aOS destina-se a processar informação do Estado, incluindo informação classificada. As regras abaixo não são recomendações — são condições de aceitação de qualquer contribuição."
      />

      <div className="contentor py-16">
        {/* Divulgação responsável ------------------------------------------ */}
        <section className="rounded-2xl border border-red-200 bg-red-50/60 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-aos-vermelho" aria-hidden />
            <h2 className="text-2xl font-bold">Comunicar uma vulnerabilidade</h2>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-tinta-suave">
            <strong className="font-semibold text-tinta">Nunca abra uma issue pública</strong> para relatar uma falha de
            segurança. Escreva para o endereço abaixo, descrevendo o problema, o impacto estimado e os passos para o
            reproduzir. A equipa acusa a recepção e mantém o contacto até à correcção.
          </p>
          <p className="mt-6 font-mono text-base text-aos-vermelho">{MARCA.emailSeguranca}</p>
          <p className="mt-6 text-sm leading-7 text-tinta-suave">
            Pedimos que aguarde a publicação da correcção antes de divulgar publicamente os detalhes. O aOS corre em
            sistemas do Estado: uma divulgação prematura transfere o risco para quem não o pode mitigar.
          </p>
        </section>

        {/* Princípios ------------------------------------------------------ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Princípios de endurecimento</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {PRINCIPIOS.map(({ icone: Icone, titulo, texto }) => (
              <div key={titulo} className="rounded-xl border border-linha bg-papel p-6 shadow-cartao">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradiente-aos text-white">
                  <Icone size={19} aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-base font-bold">{titulo}</h3>
                <p className="mt-2.5 text-sm leading-6 text-tinta-suave">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regras ---------------------------------------------------------- */}
        <section className="mt-16 rounded-2xl border border-linha bg-superficie p-8 sm:p-10">
          <h2 className="text-2xl font-bold">Regras para contribuidores</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-tinta-suave">
            <li className="border-l-2 border-aos-laranja pl-5">
              <strong className="font-semibold text-tinta">Nunca submeta segredos.</strong> Chaves privadas GPG ou SSH,
              credenciais e material criptográfico não entram no repositório em circunstância alguma. O varrimento
              automático de segredos corre em cada commit.
            </li>
            <li className="border-l-2 border-aos-laranja pl-5">
              <strong className="font-semibold text-tinta">Não introduza dependências de rede</strong> nas edições
              Defesa e Live Forense, que operam sob isolamento estrito.
            </li>
            <li className="border-l-2 border-aos-laranja pl-5">
              <strong className="font-semibold text-tinta">Scripts seguros por omissão.</strong> Todo o ficheiro{' '}
              <code className="font-mono text-2xs">.sh</code> começa com <code className="font-mono text-2xs">#!/bin/bash</code>,
              declara <code className="font-mono text-2xs">set -euo pipefail</code>, passa no shellcheck e trata
              explicitamente os erros de qualquer operação sobre disco ou ficheiros.
            </li>
            <li className="border-l-2 border-aos-laranja pl-5">
              <strong className="font-semibold text-tinta">Builds reproduzíveis.</strong> Uma imagem que não pode ser
              reconstruída de forma idêntica por um terceiro não pode ser auditada — e o que não é auditável não é
              soberano.
            </li>
          </ul>

          <a
            href={`${MARCA.repositorio}/blob/main/SECURITY.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex font-display text-sm font-semibold text-aos-vermelho hover:underline"
          >
            Ler o SECURITY.md do repositório
          </a>
        </section>
      </div>
    </>
  );
}
