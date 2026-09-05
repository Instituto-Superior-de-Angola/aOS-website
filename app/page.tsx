import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Landmark, Languages, Coins, GitBranch, Server, Lock, Package } from 'lucide-react';
import { Botao } from '@/components/Botao';
import { Distintivo } from '@/components/Distintivo';
import { EDICOES, ESTADO_EDICAO } from '@/lib/edicoes';
import { FASES } from '@/lib/roteiro';
import { LINGUAS } from '@/lib/linguas';
import { MARCA } from '@/lib/marca';

const PILARES = [
  {
    icone: Landmark,
    titulo: 'Independência tecnológica',
    texto:
      'Um Estado só controla a informação que processa se puder inspeccionar e reconstruir o código que a processa. O aOS reduz a dependência de licenças proprietárias estrangeiras.',
  },
  {
    icone: ShieldCheck,
    titulo: 'Segurança e controlo',
    texto:
      'Cadeia de confiança criptográfica própria, ancorada num HSM nacional, e capacidade total de auditoria sobre cada linha de código distribuída.',
  },
  {
    icone: Languages,
    titulo: 'Integração sociocultural',
    texto:
      'Inclusão digital através do suporte profundo às línguas nacionais bantu, respeitando as classes nominais e as regras de concordância de cada uma.',
  },
  {
    icone: Coins,
    titulo: 'Retorno económico',
    texto:
      'Poupança em custos de licenciamento e criação de emprego tecnológico qualificado dentro do país, em vez de exportação de receita.',
  },
];

const CAMADAS = [
  {
    icone: Package,
    titulo: 'Base Debian Estável',
    texto: 'O aOS não reescreve a roda. Assenta em Debian Estável e concentra o esforço nacional nas camadas que exigem controlo próprio.',
  },
  {
    icone: Server,
    titulo: 'Mirror APT nacional',
    texto: `Repositório autoalojado em ${MARCA.mirror}, assinado pela Autoridade Certificadora do angolanOS, servindo todas as actualizações do Estado.`,
  },
  {
    icone: Lock,
    titulo: 'Arranque verificado',
    texto: 'UEFI Secure Boot gerido por autoridade nacional, sem shim de terceiros. A Chave Mestra Nacional nunca sai do HSM.',
  },
  {
    icone: GitBranch,
    titulo: 'Builds reproduzíveis',
    texto: 'Compilação determinística em chroot isolado. Qualquer auditor externo pode reconstruir a imagem e obter o mesmo resultado, bit a bit.',
  },
];

export default function PaginaInicial() {
  const faseCorrente = FASES.find((f) => f.estado === 'corrente');

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Herói                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-noite-900 text-white">
        <div
          aria-hidden
          className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F35B07 0%, transparent 65%)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-52 -left-32 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C9331E 0%, transparent 65%)' }}
        />

        <div className="contentor relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-subir">
            {faseCorrente && (
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] px-3.5 py-1.5 ring-1 ring-inset ring-white/15">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aos-laranja opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aos-laranja" />
                </span>
                <span className="font-display text-2xs font-semibold uppercase tracking-kicker text-white/75">
                  {faseCorrente.nome} · {faseCorrente.periodo}
                </span>
              </div>
            )}

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              O sistema operativo{' '}
              <span className="texto-gradiente">angolano</span>{' '}
              para a Administração Pública.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
              O <strong className="font-semibold text-white">angolanOS</strong> é uma distribuição GNU/Linux
              auditável e falada nas línguas de Angola, construída sobre Debian Estável. Destina-se à Administração
              Pública, à Educação e aos sectores de Defesa e Segurança.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Botao href="/descarregar">
                Estado das imagens <ArrowRight size={16} aria-hidden />
              </Botao>
              <Botao href="/contribuir" variante="fantasma" className="text-white ring-white/20 hover:bg-white/10">
                Como contribuir
              </Botao>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                { valor: '6', rotulo: 'Edições' },
                { valor: '7', rotulo: 'Línguas nacionais' },
                { valor: '100k+', rotulo: 'Postos até 2031' },
              ].map((e) => (
                <div key={e.rotulo}>
                  <dt className="sr-only">{e.rotulo}</dt>
                  <dd className="font-display text-3xl font-bold text-white">{e.valor}</dd>
                  <p className="mt-1.5 text-2xs uppercase tracking-kicker text-white/40">{e.rotulo}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden justify-center lg:flex">
            <div
              aria-hidden
              className="absolute inset-0 m-auto h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(circle, #F35B07 0%, transparent 70%)' }}
            />
            <Image
              src="/logo-aos.png"
              alt="Logotipo do angolanOS"
              width={380}
              height={380}
              priority
              className="relative drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Aviso honesto de estado do projecto                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-linha bg-orange-50/60">
        <div className="contentor flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-tinta-suave">
            <strong className="font-semibold text-tinta">Pré-lançamento.</strong> O aOS ainda não distribui imagens
            públicas. A primeira alpha está prevista para Outubro de 2027.
          </p>
          <Link
            href="/registo-de-alteracoes"
            className="inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold text-aos-vermelho hover:underline"
          >
            Ver o registo de alterações <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Pilares                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="contentor py-20 sm:py-24">
        <p className="kicker">Porquê um sistema operativo nacional</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Quatro razões de Estado</h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-linha ring-1 ring-linha sm:grid-cols-2">
          {PILARES.map(({ icone: Icone, titulo, texto }) => (
            <div key={titulo} className="bg-papel p-8 transition hover:bg-superficie">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradiente-aos text-white">
                <Icone size={19} aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-bold">{titulo}</h3>
              <p className="mt-2.5 text-sm leading-6 text-tinta-suave">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Edições                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section id="edicoes" className="border-y border-linha bg-superficie py-20 sm:py-24">
        <div className="contentor">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Edições</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Um núcleo, seis sistemas</h2>
              <p className="prosa mt-4">
                Todas as edições partilham o mesmo núcleo endurecido e o mesmo mirror APT. O que muda é o perfil de
                segurança, o conjunto de pacotes e o modo de operação.
              </p>
            </div>
            <Link href="/edicoes" className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-aos-vermelho hover:underline">
              Comparar edições <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EDICOES.map((edicao) => {
              const estado = ESTADO_EDICAO[edicao.estado];
              return (
                <Link
                  key={edicao.id}
                  href={`/edicoes#${edicao.id}`}
                  className="group flex flex-col rounded-xl border border-linha bg-papel p-6 shadow-cartao transition hover:-translate-y-0.5 hover:border-aos-laranja/40 hover:shadow-elevado"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold group-hover:text-aos-vermelho">{edicao.nome}</h3>
                    <Distintivo className={estado.classe}>{estado.rotulo}</Distintivo>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-6 text-tinta-suave">{edicao.resumo}</p>
                  <p className="mt-5 border-t border-linha pt-4 font-mono text-2xs text-tinta-tenue">{edicao.metapacote}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Arquitectura                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="contentor py-20 sm:py-24">
        <p className="kicker">Arquitectura</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Pragmatismo estratégico, não vaidade técnica</h2>
        <p className="prosa mt-4">
          O controlo não está em reescrever o kernel. Está em deter a distribuição, as chaves e o repositório —
          e em poder provar, a qualquer momento, o que corre nas máquinas do Estado.
        </p>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {CAMADAS.map(({ icone: Icone, titulo, texto }, i) => (
            <li key={titulo} className="flex gap-5 rounded-xl border border-linha bg-papel p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-subtil text-aos-vermelho ring-1 ring-inset ring-linha">
                <Icone size={18} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-2xs text-tinta-tenue">Camada {i + 1}</p>
                <h3 className="mt-1 text-base font-bold">{titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-tinta-suave">{texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Línguas                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y border-linha bg-noite-900 py-20 text-white sm:py-24">
        <div className="contentor grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-display text-2xs font-bold uppercase tracking-kicker text-aos-laranja">Localização profunda</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Um computador que fala a sua língua</h2>
            <p className="mt-5 text-base leading-7 text-white/65">
              Traduzir não é substituir palavras. As línguas bantu organizam-se por classes nominais, com regras de
              concordância e pluralização próprias que o gettext não conhece por omissão. O aOS trata cada língua como
              um sistema gramatical, não como uma tabela de <em>strings</em>.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/45">
              As traduções nucleares da Administração Pública são revistas semestralmente em articulação com o
              linguistas das próprias comunidades falantes.
            </p>
            <Link
              href="/contribuir#linguas"
              className="mt-8 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-aos-laranja-claro hover:underline"
            >
              Contribuir com tradução <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <ul className="grid gap-px self-start overflow-hidden rounded-xl bg-noite-600 ring-1 ring-noite-600 sm:grid-cols-2">
            {LINGUAS.map((lingua) => (
              <li key={lingua.codigo} className="bg-noite-800 p-5">
                <p className="font-mono text-2xs uppercase tracking-widest text-aos-laranja">{lingua.codigo}</p>
                <p className="mt-2 font-display text-base font-semibold text-white">{lingua.nome}</p>
                <p className="mt-1 text-xs text-white/40">{lingua.nota}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Roteiro                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section id="roteiro" className="contentor py-20 sm:py-24">
        <p className="kicker">Roteiro</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">De 2026 a 2031</h2>
        <p className="prosa mt-4">
          O programa está estruturado em cinco fases, das quais a primeira decorre actualmente. Cada fase tem entregas
          verificáveis e é auditada pelos Círculos de Governança.
        </p>

        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl bg-linha ring-1 ring-linha">
          {FASES.map((fase) => (
            <li
              key={fase.id}
              className={`grid gap-5 p-7 sm:grid-cols-[13rem_1fr] ${fase.estado === 'corrente' ? 'bg-orange-50/70' : 'bg-papel'}`}
            >
              <div>
                <h3 className="font-display text-base font-bold">{fase.nome}</h3>
                <p className="mt-1.5 font-mono text-2xs text-tinta-tenue">{fase.periodo}</p>
                {fase.estado === 'corrente' && (
                  <Distintivo className="mt-3 bg-gradiente-aos text-white ring-transparent">Em curso</Distintivo>
                )}
              </div>
              <div>
                <p className="text-sm leading-6 text-tinta-suave">{fase.objectivo}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {fase.marcos.map((marco) => (
                    <li key={marco} className="rounded-md bg-subtil px-2.5 py-1 text-2xs text-tinta-suave ring-1 ring-inset ring-linha">
                      {marco}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Chamada final                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="contentor">
        <div className="overflow-hidden rounded-2xl bg-gradiente-aos px-8 py-14 text-center text-white sm:px-14">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Um sistema operativo nacional constrói-se com pessoas.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/85">
            Engenheiros, linguistas, professores e peritos de segurança. Se sabe empacotar Debian, falar Umbundu ou
            auditar um perfil SELinux, há trabalho à sua espera.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Botao href="/contribuir" variante="secundario">
              Ler o guia de contribuição
            </Botao>
            <Botao href={MARCA.repositorio} variante="fantasma" externo className="text-white ring-white/35 hover:bg-white/15">
              Ver o código no GitHub
            </Botao>
          </div>
        </div>
      </section>
    </>
  );
}
