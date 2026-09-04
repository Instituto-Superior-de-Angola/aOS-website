import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, KeyRound, Hammer } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { Codigo } from '@/components/Codigo';
import { Distintivo } from '@/components/Distintivo';
import { EDICOES, ESTADO_EDICAO } from '@/lib/edicoes';
import { MARCA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Descarregar',
  description:
    'Estado das imagens do angolanOS, instruções de verificação criptográfica e como compilar a sua própria ISO a partir do código-fonte.',
};

export default function PaginaDescarregar() {
  return (
    <>
      <CabecalhoPagina
        kicker="Descarregar"
        titulo="Imagens do sistema"
        descricao="O aOS encontra-se na Fase 0 do roteiro. Ainda não existem imagens públicas para descarregar — mas o código-fonte e o ambiente de compilação já estão disponíveis, e qualquer pessoa pode construir a sua própria imagem."
      />

      <div className="contentor py-16">
        {/* Aviso de estado ------------------------------------------------- */}
        <div className="flex gap-5 rounded-2xl border border-orange-200 bg-orange-50/70 p-7">
          <AlertTriangle size={22} className="mt-0.5 shrink-0 text-aos-laranja-escuro" aria-hidden />
          <div>
            <h2 className="font-display text-lg font-bold">Ainda não há imagens públicas</h2>
            <p className="mt-2.5 max-w-3xl text-sm leading-7 text-tinta-suave">
              A primeira imagem distribuída fora da equipa nuclear é o <strong>aOS 0.9 Alpha</strong>, prevista para
              Outubro de 2027, no fecho do ciclo FUNDECIT Tipo 1. Publicar aqui uma ISO antes disso seria enganar quem
              a instalasse em máquinas do Estado. Acompanhe o{' '}
              <Link href="/registo-de-alteracoes" className="font-medium text-aos-vermelho underline">
                registo de alterações
              </Link>{' '}
              para saber quando mudar.
            </p>
          </div>
        </div>

        {/* Estado por edição ----------------------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Estado por edição</h2>
          <div className="mt-7 overflow-x-auto rounded-xl border border-linha">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead className="bg-superficie">
                <tr className="border-b border-linha">
                  <th scope="col" className="px-6 py-3.5 font-display text-2xs font-bold uppercase tracking-kicker text-tinta-tenue">Edição</th>
                  <th scope="col" className="px-6 py-3.5 font-display text-2xs font-bold uppercase tracking-kicker text-tinta-tenue">Metapacote</th>
                  <th scope="col" className="px-6 py-3.5 font-display text-2xs font-bold uppercase tracking-kicker text-tinta-tenue">Estado</th>
                </tr>
              </thead>
              <tbody>
                {EDICOES.map((edicao) => {
                  const estado = ESTADO_EDICAO[edicao.estado];
                  return (
                    <tr key={edicao.id} className="border-b border-linha last:border-0">
                      <td className="px-6 py-4">
                        <Link href={`/edicoes#${edicao.id}`} className="font-medium text-tinta hover:text-aos-vermelho">
                          {edicao.nome}
                        </Link>
                      </td>
                      <td className="px-6 py-4 font-mono text-2xs text-tinta-tenue">{edicao.metapacote}</td>
                      <td className="px-6 py-4">
                        <Distintivo className={estado.classe}>{estado.rotulo}</Distintivo>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Compilar a partir do código ------------------------------------- */}
        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradiente-aos text-white">
              <Hammer size={19} aria-hidden />
            </span>
            <h2 className="mt-5 text-2xl font-bold">Compilar a sua própria imagem</h2>
            <p className="mt-3 text-sm leading-7 text-tinta-suave">
              O ambiente de compilação assenta em virtualização KVM/QEMU com Vagrant e <code className="font-mono text-2xs">sbuild</code>,
              para garantir que a mesma entrada produz sempre a mesma imagem. Precisa de um hospedeiro Linux com KVM,
              Vagrant e o plugin libvirt.
            </p>
            <Link
              href="/documentacao#reprodutibilidade"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-aos-vermelho hover:underline"
            >
              Roteiro de reprodutibilidade <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <div className="space-y-4">
            <Codigo legenda="Preparar o ambiente">{`git clone ${MARCA.repositorio}.git
cd projecto_angolanOS/src/build_system/
vagrant up`}</Codigo>
            <Codigo legenda="Compilar a ISO">{`# Edição padrão (desktop)
make build-iso

# Outra edição
make build-iso EDITION=defesa`}</Codigo>
          </div>
        </section>

        {/* Verificação ------------------------------------------------------ */}
        <section className="mt-16 rounded-2xl border border-linha bg-superficie p-8 sm:p-10">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-tinta text-white">
            <KeyRound size={19} aria-hidden />
          </span>
          <h2 className="mt-5 text-2xl font-bold">Verificar antes de instalar</h2>
          <p className="prosa mt-3">
            Quando as imagens forem publicadas, cada ISO será acompanhada da respectiva soma de verificação assinada
            pela <strong>Autoridade Certificadora do angolanOS</strong>. Nunca instale uma imagem cuja assinatura não
            tenha verificado — sobretudo em equipamento do Estado. Os passos serão os seguintes:
          </p>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <Codigo legenda="1. Verificar a assinatura do ficheiro de somas">{`gpg --verify aos-1.0-desktop-amd64.sha256.asc \\
        aos-1.0-desktop-amd64.sha256`}</Codigo>
            <Codigo legenda="2. Verificar a integridade da imagem">{`sha256sum -c aos-1.0-desktop-amd64.sha256`}</Codigo>
          </div>

          <p className="mt-6 text-sm leading-7 text-tinta-suave">
            A chave pública da Autoridade Certificadora será distribuída em{' '}
            <span className="font-mono text-2xs">{MARCA.mirror}</span> e replicada nos servidores de chaves públicos.
            O arranque verificado (UEFI Secure Boot) usa a Chave Mestra Nacional, selada em HSM — o aOS não recorre a{' '}
            <em>shim</em> de terceiros.
          </p>
        </section>
      </div>
    </>
  );
}
