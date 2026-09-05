import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { Codigo } from '@/components/Codigo';
import { MARCA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Documentação',
  description:
    'Documentação técnica do angolanOS: arquitectura da distribuição, infraestrutura de chaves, builds reproduzíveis, ontologia e modelo de governança.',
  alternates: { canonical: '/documentacao' },
  openGraph: {
    title: 'Documentação — angolanOS',
    description: 'Documentação técnica do angolanOS: arquitectura, infraestrutura de chaves, builds reproduzíveis e governação.',
    url: '/documentacao',
  },
};

type Documento = { titulo: string; descricao: string; caminho: string };

const SECCOES: { id: string; titulo: string; introducao: string; documentos: Documento[] }[] = [
  {
    id: 'arquitectura',
    titulo: 'Arquitectura',
    introducao:
      'Como o sistema está construído: a base Debian, as camadas nacionais acrescentadas e as decisões que as justificam.',
    documentos: [
      {
        titulo: 'Arquitectura da distribuição',
        descricao: 'Estrutura geral do sistema, edições, núcleo partilhado e estratégia de empacotamento.',
        caminho: 'docs/arquitectura/ARQUITECTURA_DISTRIBUICAO.md',
      },
      {
        titulo: 'Infraestrutura de chaves',
        descricao: 'Cadeia de confiança criptográfica, Autoridade Certificadora nacional e gestão de HSM.',
        caminho: 'docs/arquitectura/INFRAESTRUTURA_CHAVES.md',
      },
    ],
  },
  {
    id: 'reprodutibilidade',
    titulo: 'Builds reproduzíveis',
    introducao:
      'Uma distribuição estatal só é auditável se qualquer terceiro puder reconstruir as suas imagens e obter exactamente o mesmo resultado.',
    documentos: [
      {
        titulo: 'Roteiro de reprodutibilidade',
        descricao: 'Requisitos de determinismo, ambiente de compilação isolado e verificação por terceiros.',
        caminho: 'docs/arquitectura/ROTEIRO_REPRODUTIBILIDADE.md',
      },
      {
        titulo: 'Instruções de builds reproduzíveis',
        descricao: 'Regras operacionais aplicadas a cada pacote submetido ao repositório.',
        caminho: '.github/instructions/reproducible-builds.md',
      },
    ],
  },
  {
    id: 'governanca',
    titulo: 'Governança',
    introducao:
      'Quem decide o quê, com que mandato e sob que auditoria. O programa é coordenado pelo ISA com os Círculos de Governança D1 a D4.',
    documentos: [
      {
        titulo: 'Modelo de governança',
        descricao: 'Círculos D1 a D4, articulação institucional e processo de decisão técnica.',
        caminho: 'docs/governanca/MODELO_GOVERNANCA_AOS.md',
      },
      {
        titulo: 'Linhas de investigação do ISA',
        descricao: 'Programa científico que sustenta o desenvolvimento do sistema.',
        caminho: 'docs/investigacao/LINHAS_INVESTIGACAO_ISA.md',
      },
    ],
  },
  {
    id: 'ontologia',
    titulo: 'Ontologia e terminologia',
    introducao:
      'O vocabulário formal do sistema — indispensável para que humanos e agentes automáticos descrevam o aOS da mesma maneira.',
    documentos: [
      {
        titulo: 'Ontologia do aOS',
        descricao: 'Definição formal das entidades do sistema operativo e das suas relações.',
        caminho: 'docs/ontologia/ONTOLOGIA_AOS.md',
      },
      {
        titulo: 'Glossário e taxonomia',
        descricao: 'Termos canónicos em português de Angola e respectivas equivalências.',
        caminho: 'docs/ontologia/GLOSSARIO_TAXONOMIA.md',
      },
    ],
  },
];

export default function PaginaDocumentacao() {
  return (
    <>
      <CabecalhoPagina
        kicker="Documentação"
        titulo="Documentação técnica"
        descricao="Toda a documentação do aOS vive no repositório, versionada junto do código que descreve. Esta página é o índice; as fontes canónicas são os ficheiros ligados abaixo."
      />

      <div className="contentor py-16">
        {/* Início rápido --------------------------------------------------- */}
        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-bold">Começar</h2>
            <p className="prosa mt-3">
              O ambiente de desenvolvimento é uma VM Debian Bookworm gerida por Vagrant sobre KVM/QEMU. É deliberadamente
              portátil: guarda os volumes dentro da árvore do próprio projecto, o que permite trabalhar a partir de uma
              pen USB.
            </p>
          </div>
          <Codigo legenda="Ambiente de desenvolvimento">{`git clone ${MARCA.repositorio}.git
cd projecto_angolanOS/src/build_system/

vagrant up        # iniciar a VM de compilação
vagrant ssh       # aceder ao terminal da VM
vagrant halt      # parar a VM`}</Codigo>
        </section>

        {/* Secções --------------------------------------------------------- */}
        <div className="mt-20 space-y-16">
          {SECCOES.map((seccao) => (
            <section key={seccao.id} id={seccao.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold">{seccao.titulo}</h2>
              <p className="prosa mt-3">{seccao.introducao}</p>

              <ul className="mt-7 grid gap-4 md:grid-cols-2">
                {seccao.documentos.map((documento) => (
                  <li key={documento.caminho}>
                    <a
                      href={`${MARCA.repositorio}/blob/main/${documento.caminho}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-xl border border-linha bg-papel p-6 shadow-cartao transition hover:-translate-y-0.5 hover:border-aos-laranja/40 hover:shadow-elevado"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-bold group-hover:text-aos-vermelho">{documento.titulo}</h3>
                        <ExternalLink size={15} className="mt-0.5 shrink-0 text-tinta-tenue" aria-hidden />
                      </div>
                      <p className="mt-2.5 flex-1 text-sm leading-6 text-tinta-suave">{documento.descricao}</p>
                      <p className="mt-5 break-all font-mono text-2xs text-tinta-tenue">{documento.caminho}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
