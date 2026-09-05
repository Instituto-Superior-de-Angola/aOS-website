import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FolderGit2, Mail, Users, Scale, MapPin, Phone, GraduationCap } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { MARCA, ISA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Comunidade',
  description:
    'O angolanOS é desenvolvido no Instituto Superior de Angola. Conheça a instituição de acolhimento, o código de conduta e os canais de participação no projecto.',
  alternates: { canonical: '/comunidade' },
  openGraph: {
    title: 'Comunidade — angolanOS',
    description: 'Instituição de acolhimento, governação e canais de participação no projecto angolanOS.',
    url: '/comunidade',
  },
};

const CANAIS = [
  {
    icone: FolderGit2,
    titulo: 'Repositório do projecto',
    texto: 'Código, issues e propostas de alteração. É aqui que o trabalho técnico acontece.',
    accao: 'github.com/Instituto-Superior-de-Angola',
    href: MARCA.repositorio,
    externo: true,
  },
  {
    icone: Mail,
    titulo: 'Contacto do projecto',
    texto: 'Questões sobre o aOS, colaboração técnica e pedidos de informação.',
    accao: MARCA.email,
    href: `mailto:${MARCA.email}`,
    externo: true,
  },
  {
    icone: Scale,
    titulo: 'Divulgação de vulnerabilidades',
    texto: 'Canal para comunicar falhas de segurança antes da divulgação pública.',
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
        descricao="O angolanOS é um projecto de investigação aplicada desenvolvido no Instituto Superior de Angola, em regime aberto. O código é público e as contribuições externas seguem as mesmas regras das internas."
      />

      <div className="contentor py-16">
        {/* Instituição de acolhimento --------------------------------------- */}
        <section id="isa" className="scroll-mt-24">
          <div className="flex items-center gap-3">
            <GraduationCap size={20} className="text-aos-vermelho" aria-hidden />
            <h2 className="text-2xl font-bold">Instituição de acolhimento</h2>
          </div>

          <div className="mt-7 grid gap-8 rounded-2xl border border-linha bg-superficie p-8 sm:p-10 lg:grid-cols-[1fr_18rem]">
            <div>
              <Image
                src="/logo-isa.png"
                alt={ISA.nome}
                width={190}
                height={64}
                className="h-14 w-auto"
              />
              <p className="prosa mt-6">
                O <strong className="font-semibold text-tinta">{ISA.nome} ({ISA.sigla})</strong> é
                uma {ISA.natureza.toLowerCase()}, criada pelo {ISA.criacao}. O aOS é desenvolvido no
                âmbito do {ISA.centro}, na linha de investigação de {ISA.linha}.
              </p>
              <p className="prosa mt-4">
                O projecto está na fase de fundação técnica. Não existem, à data, protocolos
                firmados com outras entidades; serão identificados nesta página à medida que forem
                estabelecidos.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={ISA.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-tinta px-4 py-2.5 font-display text-sm font-semibold text-white transition hover:bg-noite-700"
                >
                  Portal do ISA
                </a>
                <a
                  href={ISA.centroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 font-display text-sm font-semibold text-tinta ring-1 ring-inset ring-linha-forte transition hover:bg-subtil"
                >
                  Investigação no ISA
                </a>
              </div>
            </div>

            <dl className="space-y-5 border-linha lg:border-l lg:pl-8">
              <div>
                <dt className="flex items-center gap-2 text-2xs uppercase tracking-kicker text-tinta-tenue">
                  <MapPin size={13} aria-hidden /> Campus
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-tinta-suave">{ISA.morada}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-2xs uppercase tracking-kicker text-tinta-tenue">
                  <Mail size={13} aria-hidden /> Investigação
                </dt>
                <dd className="mt-1.5 text-sm">
                  <a href={`mailto:${ISA.email}`} className="text-aos-vermelho hover:underline">
                    {ISA.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-2xs uppercase tracking-kicker text-tinta-tenue">
                  <Phone size={13} aria-hidden /> Telefone
                </dt>
                <dd className="mt-1.5 text-sm">
                  <a href={ISA.telefoneUrl} className="text-aos-vermelho hover:underline">
                    {ISA.telefone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Governação técnica ----------------------------------------------- */}
        <section className="mt-20">
          <div className="flex items-center gap-3">
            <Users size={20} className="text-aos-vermelho" aria-hidden />
            <h2 className="text-2xl font-bold">Como as decisões são tomadas</h2>
          </div>
          <p className="prosa mt-3">
            A governação separa a decisão estratégica da decisão técnica, para que nenhuma alteração
            sensível dependa de uma única pessoa.
          </p>

          <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-linha ring-1 ring-linha sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: '01', t: 'Estratégico', d: 'Objectivos, prioridades e afectação de recursos.' },
              { n: '02', t: 'Arquitectural', d: 'Cadeia de confiança, modelo de continuidade e composição das edições.' },
              { n: '03', t: 'Manutenção', d: 'Inclusão e actualização de pacotes; promoção no repositório.' },
              { n: '04', t: 'Contribuição', d: 'Propostas de alteração, internas ou externas ao projecto.' },
            ].map((x) => (
              <li key={x.n} className="bg-papel p-6">
                <p className="font-mono text-2xs text-aos-laranja">{x.n}</p>
                <p className="mt-2 font-display text-base font-bold">{x.t}</p>
                <p className="mt-2 text-sm leading-6 text-tinta-suave">{x.d}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-sm leading-7 text-tinta-suave">
            Alterações a código crítico — custódia de chaves, cadeia de arranque, perfis de segurança
            e processo de compilação — exigem revisão de dois pares independentes, nenhum deles autor
            da alteração.
          </p>
        </section>

        {/* Canais ------------------------------------------------------------ */}
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

        {/* Código de conduta -------------------------------------------------- */}
        <section id="conduta" className="mt-20 scroll-mt-24 rounded-2xl bg-noite-900 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold text-white">Código de conduta</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">
            Este projecto destina-se a servir instituições públicas e espera-se que a sua comunidade o
            reflicta. Exigimos respeito, cortesia e boa-fé em todas as interacções — issues, revisões
            de código e reuniões. Comportamentos de assédio, discriminação ou desqualificação pessoal
            não são tolerados e podem levar à exclusão do projecto.
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
