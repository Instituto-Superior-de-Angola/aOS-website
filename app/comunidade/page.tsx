import type { Metadata } from 'next';
import Link from 'next/link';
import { FolderGit2, Mail, Users, Scale } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { MARCA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Comunidade',
  description:
    'Governança, articulação institucional, código de conduta e canais de contacto do programa angolanOS.',
};

const INSTITUICOES = [
  { nome: 'ISA', papel: 'Instituto Superior de Angola — coordenação do programa' },
  { nome: 'MINTTICS', papel: 'Ministério das Telecomunicações, TI e Comunicação Social' },
  { nome: 'MESCTI', papel: 'Ministério do Ensino Superior, Ciência, Tecnologia e Inovação' },
  { nome: 'INFOSI', papel: 'Instituto Nacional de Fomento da Sociedade da Informação' },
  { nome: 'Casa de Segurança', papel: 'Requisitos de defesa e informação classificada' },
  { nome: 'ILN', papel: 'Instituto de Línguas Nacionais — validação linguística' },
  { nome: '9 universidades parceiras', papel: 'Investigação aplicada e formação de quadros' },
];

const CANAIS = [
  {
    icone: FolderGit2,
    titulo: 'Repositório do projecto',
    texto: 'Código, issues e merge requests. É aqui que o trabalho técnico acontece.',
    accao: 'github.com/Instituto-Superior-de-Angola',
    href: MARCA.repositorio,
    externo: true,
  },
  {
    icone: Mail,
    titulo: 'Contacto institucional',
    texto: 'Parcerias, adopção do sistema por organismos públicos e pedidos de informação.',
    accao: MARCA.emailGeral,
    href: `mailto:${MARCA.emailGeral}`,
    externo: true,
  },
  {
    icone: Scale,
    titulo: 'Divulgação de vulnerabilidades',
    texto: 'Canal confidencial para comunicar falhas de segurança antes da divulgação pública.',
    accao: 'Política de segurança',
    href: '/seguranca',
    externo: false,
  },
];

export default function PaginaComunidade() {
  return (
    <>
      <CabecalhoPagina
        kicker="Comunidade"
        titulo="Quem constrói o aOS"
        descricao="O angolanOS é um programa de Estado executado em regime aberto. A coordenação cabe ao ISA, mas o trabalho é feito por uma rede de instituições, universidades e contribuidores individuais."
      />

      <div className="contentor py-16">
        {/* Governança ------------------------------------------------------ */}
        <section>
          <div className="flex items-center gap-3">
            <Users size={20} className="text-aos-vermelho" aria-hidden />
            <h2 className="text-2xl font-bold">Articulação institucional</h2>
          </div>
          <p className="prosa mt-3">
            A governança organiza-se em Círculos D1 a D4, que separam a decisão estratégica da decisão técnica e
            garantem que nenhuma alteração sensível depende de uma única pessoa.
          </p>

          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-linha ring-1 ring-linha sm:grid-cols-2 lg:grid-cols-4">
            {INSTITUICOES.map((instituicao) => (
              <li key={instituicao.nome} className="bg-papel p-6">
                <p className="font-display text-base font-bold text-tinta">{instituicao.nome}</p>
                <p className="mt-2 text-sm leading-6 text-tinta-suave">{instituicao.papel}</p>
              </li>
            ))}
          </ul>

          <Link
            href="/documentacao#governanca"
            className="mt-7 inline-flex font-display text-sm font-semibold text-aos-vermelho hover:underline"
          >
            Ler o modelo de governança completo
          </Link>
        </section>

        {/* Canais ---------------------------------------------------------- */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">Canais de contacto</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {CANAIS.map(({ icone: Icone, titulo, texto, accao, href, externo }) => {
              const conteudo = (
                <>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-subtil text-aos-vermelho ring-1 ring-inset ring-linha">
                    <Icone size={18} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold">{titulo}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-6 text-tinta-suave">{texto}</p>
                  <p className="mt-5 break-all font-mono text-2xs text-aos-vermelho">{accao}</p>
                </>
              );

              const classes =
                'flex h-full flex-col rounded-xl border border-linha bg-papel p-6 shadow-cartao transition hover:-translate-y-0.5 hover:border-aos-laranja/40 hover:shadow-elevado';

              return externo ? (
                <a key={titulo} href={href} className={classes} target="_blank" rel="noopener noreferrer">
                  {conteudo}
                </a>
              ) : (
                <Link key={titulo} href={href} className={classes}>
                  {conteudo}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Código de conduta ----------------------------------------------- */}
        <section id="conduta" className="mt-20 scroll-mt-24 rounded-2xl bg-noite-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold text-white">Código de conduta</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">
            Este projecto serve todos os angolanos e espera-se que a sua comunidade o reflicta. Exigimos respeito,
            cortesia e boa-fé em todas as interacções — issues, revisões de código e reuniões. Comportamentos de
            assédio, discriminação ou desqualificação pessoal não são tolerados e podem levar à exclusão do projecto.
          </p>
          <a
            href={`${MARCA.repositorio}/blob/main/CODE_OF_CONDUCT.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex font-display text-sm font-semibold text-aos-laranja-claro hover:underline"
          >
            Ler o código de conduta na íntegra
          </a>
        </section>
      </div>
    </>
  );
}
