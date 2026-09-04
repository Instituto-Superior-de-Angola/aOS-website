import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, Languages, GraduationCap, ShieldAlert, ArrowRight } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { Codigo } from '@/components/Codigo';
import { LINGUAS } from '@/lib/linguas';
import { MARCA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Contribuir',
  description:
    'Como contribuir para o angolanOS: perfis procurados, padrão de commits, fluxo de submissão, tradução para as línguas nacionais e divulgação responsável de vulnerabilidades.',
};

const PERFIS = [
  {
    icone: Code2,
    titulo: 'Engenharia de sistemas e software',
    texto: 'Empacotamento Debian, integração contínua, hardenização do kernel, criptografia e infraestrutura.',
  },
  {
    icone: Languages,
    titulo: 'Linguística e tradução',
    texto: 'Especialistas em línguas bantu para o esforço de localização profunda, em articulação com o ILN.',
  },
  {
    icone: GraduationCap,
    titulo: 'Educação e UX/UI',
    texto: 'Desenho das interfaces adaptadas e da suite escolar da edição Educação.',
  },
];

const TIPOS_COMMIT: [string, string][] = [
  ['feat', 'Nova funcionalidade — nova língua bantu, novo componente de sistema'],
  ['fix', 'Correcção de erro'],
  ['sec', 'Correcção de segurança ou hardenização — CVEs, SELinux'],
  ['docs', 'Apenas documentação'],
  ['style', 'Formatação e estilo de código ou de tema (Tema Mwangolé)'],
  ['refactor', 'Refactorização de código'],
  ['perf', 'Melhoria de desempenho'],
  ['test', 'Adição ou correcção de testes'],
  ['chore', 'Build, CI/CD, mirror APT e restante infraestrutura'],
];

const ESCOPOS = ['kernel', 'init', 'apt', 'installer', 'theme', 'locale', 'build', 'iso', 'desktop', 'server', 'defesa'];

const PASSOS = [
  {
    titulo: 'Derive o repositório',
    texto: 'Crie um fork, ou uma branch dedicada se tiver permissões de escrita — por exemplo `feat/locale-umbundu` ou `sec/selinux-profile`.',
  },
  {
    titulo: 'Escreva o código e os commits',
    texto: 'Siga o padrão de commits em português e as regras de estilo. Todos os scripts `.sh` começam com `#!/bin/bash`, incluem `set -euo pipefail` e passam no shellcheck.',
  },
  {
    titulo: 'Valide localmente',
    texto: 'Corra as validações do projecto antes de submeter. Se estiver a empacotar software, garanta que o build é reproduzível.',
  },
  {
    titulo: 'Submeta o Merge Request',
    texto: 'Um engenheiro fará a revisão por pares. Código em `infra/pki_hsm/` e `docs/arquitectura/` exige aprovação de dois mantenedores principais.',
  },
];

export default function PaginaContribuir() {
  return (
    <>
      <CabecalhoPagina
        kicker="Contribuir"
        titulo="Participe na construção do aOS"
        descricao="O angolanOS é um esforço nacional aberto. Precisa de engenheiros, linguistas, professores e peritos de segurança — e cada contribuição segue as mesmas regras, venha de onde vier."
      />

      <div className="contentor py-16">
        {/* Perfis ---------------------------------------------------------- */}
        <section>
          <h2 className="text-2xl font-bold">Quem pode contribuir</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {PERFIS.map(({ icone: Icone, titulo, texto }) => (
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

        {/* Commits --------------------------------------------------------- */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">Padrão de commits</h2>
          <p className="prosa mt-3">
            Usamos Conventional Commits adaptados a uma distribuição estatal, escritos em português. O formato é
            obrigatório e é validado automaticamente.
          </p>

          <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <Codigo legenda="Formato">{`<tipo>(<escopo>): <Descrição Curta>`}</Codigo>
              <Codigo legenda="Exemplos">{`feat(locale): Adicionar catálogo base do Umbundu
sec(kernel): Restringir chamadas de sistema no perfil defesa
chore(apt): Automatizar assinatura do mirror nacional`}</Codigo>
              <p className="text-sm leading-6 text-tinta-suave">
                A descrição curta tem no máximo 50 caracteres e é escrita em português.
              </p>
              <div>
                <p className="text-2xs uppercase tracking-kicker text-tinta-tenue">Escopos válidos</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ESCOPOS.map((escopo) => (
                    <li key={escopo} className="rounded-md bg-subtil px-2.5 py-1 font-mono text-2xs text-tinta-suave ring-1 ring-inset ring-linha">
                      {escopo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-linha">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-superficie">
                  <tr className="border-b border-linha">
                    <th scope="col" className="px-5 py-3 font-display text-2xs font-bold uppercase tracking-kicker text-tinta-tenue">Tipo</th>
                    <th scope="col" className="px-5 py-3 font-display text-2xs font-bold uppercase tracking-kicker text-tinta-tenue">Utilização</th>
                  </tr>
                </thead>
                <tbody>
                  {TIPOS_COMMIT.map(([tipo, uso]) => (
                    <tr key={tipo} className="border-b border-linha last:border-0">
                      <td className="whitespace-nowrap px-5 py-3 align-top font-mono text-2xs text-aos-vermelho">{tipo}</td>
                      <td className="px-5 py-3 text-sm leading-6 text-tinta-suave">{uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fluxo ----------------------------------------------------------- */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold">Como submeter código</h2>
          <ol className="mt-7 grid gap-5 sm:grid-cols-2">
            {PASSOS.map((passo, i) => (
              <li key={passo.titulo} className="flex gap-5 rounded-xl border border-linha bg-papel p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradiente-aos font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{passo.titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-tinta-suave">{passo.texto}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7">
            <Codigo legenda="Validações locais obrigatórias">{`# Sintaxe de todos os ficheiros de tradução
.github/skills/validate-po-files.sh

# Shellcheck em todos os scripts
.github/hooks/pre-commit-shellcheck.sh

# Build local rápido de um pacote Debian
debuild -us -uc`}</Codigo>
          </div>
        </section>

        {/* Línguas --------------------------------------------------------- */}
        <section id="linguas" className="mt-20 scroll-mt-24 rounded-2xl border border-linha bg-superficie p-8 sm:p-10">
          <h2 className="text-2xl font-bold">Contribuir com tradução</h2>
          <p className="prosa mt-3">
            As traduções vivem em ficheiros <code className="font-mono text-2xs">po/gettext</code> na pasta{' '}
            <code className="font-mono text-2xs">src/locales/</code>, organizados por código ISO 639-2/3. Respeite as
            regras de concordância e pluralização das classes nominais de cada língua — uma tradução literal do
            português produz frases gramaticalmente inválidas em Bantu.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LINGUAS.map((lingua) => (
              <li key={lingua.codigo} className="rounded-lg border border-linha bg-papel px-4 py-3.5">
                <p className="font-mono text-2xs uppercase tracking-widest text-aos-laranja">{lingua.codigo}</p>
                <p className="mt-1.5 font-display text-sm font-semibold">{lingua.nome}</p>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-sm leading-7 text-tinta-suave">
            Nova terminologia nuclear é auditada pelo grupo de validação linguística, coordenado com o{' '}
            <strong>Instituto de Línguas Nacionais (ILN)</strong>. As traduções da Administração Pública são revistas
            semestralmente.
          </p>
        </section>

        {/* Segurança ------------------------------------------------------- */}
        <section className="mt-20 flex flex-col gap-5 rounded-2xl border border-red-200 bg-red-50/60 p-8 sm:flex-row sm:p-10">
          <ShieldAlert size={24} className="mt-0.5 shrink-0 text-aos-vermelho" aria-hidden />
          <div>
            <h2 className="text-2xl font-bold">Encontrou uma vulnerabilidade?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-tinta-suave">
              <strong className="font-semibold text-tinta">Não abra uma issue pública.</strong> Uma vulnerabilidade
              divulgada antes da correcção põe em risco sistemas do Estado. Comunique-a de forma confidencial pelo
              canal de divulgação responsável.
            </p>
            <Link
              href="/seguranca"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-aos-vermelho hover:underline"
            >
              Política de segurança <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-tinta-tenue">
          O guia completo está em{' '}
          <a href={`${MARCA.repositorio}/blob/main/CONTRIBUTING.md`} className="font-medium text-aos-vermelho underline" target="_blank" rel="noopener noreferrer">
            CONTRIBUTING.md
          </a>{' '}
          no repositório do projecto.
        </p>
      </div>
    </>
  );
}
