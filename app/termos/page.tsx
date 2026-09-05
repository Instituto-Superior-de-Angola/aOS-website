import type { Metadata } from 'next';
import Link from 'next/link';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { SeccaoLegal, Destaque, ListaLegal, DataRevisao } from '@/components/Legal';
import { MARCA, ISA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description:
    'Condições de utilização do sítio do angolanOS, licenciamento do software sob GPL-3.0, exclusão de garantias e limitação de responsabilidade.',
  alternates: { canonical: '/termos' },
  openGraph: {
    title: 'Termos de Serviço — angolanOS',
    description: 'Condições de utilização do sítio e do software angolanOS.',
    url: '/termos',
  },
};

export default function PaginaTermos() {
  return (
    <>
      <CabecalhoPagina
        kicker="Termos"
        titulo="Termos de Serviço"
        descricao="Condições aplicáveis à consulta deste sítio e à utilização do software e da documentação do angolanOS. A consulta do sítio implica a aceitação destes termos."
      />

      <div className="contentor max-w-4xl space-y-9 py-16">
        <Destaque>
          <strong className="font-semibold text-tinta">Em resumo.</strong> O sítio é informativo e de
          acesso livre. O software é distribuído sob licença livre {MARCA.licenca}, sem garantias. O
          projecto está em fase de pré-lançamento: nada aqui publicado constitui compromisso de
          disponibilização, prazo ou desempenho.
        </Destaque>

        <SeccaoLegal numero="1" titulo="Identificação e objecto">
          <p>
            Este sítio, acessível em{' '}
            <code className="font-mono text-2xs">{MARCA.dominio}</code>, é editado pelo{' '}
            <strong className="font-semibold text-tinta">{ISA.nome} ({ISA.sigla})</strong>, com sede
            em {ISA.morada}, e destina-se a divulgar o projecto de investigação {MARCA.nome}.
          </p>
          <p>
            Os presentes termos regem a consulta do sítio e o acesso à documentação nele publicada.
            A utilização do software é regida adicionalmente pela respectiva licença, referida na
            secção 4.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="2" titulo="Estado do projecto e ausência de compromisso" id="estado">
          <p>
            O {MARCA.nome} encontra-se em{' '}
            <strong className="font-semibold text-tinta">fase de fundação técnica</strong>. Não
            existem, à data, imagens do sistema disponíveis para instalação.
          </p>
          <p>
            As datas, versões e metas indicadas no{' '}
            <Link href="/registo-de-alteracoes" className="font-medium text-aos-vermelho underline">
              registo de alterações
            </Link>{' '}
            e no roteiro constituem objectivos de planeamento e{' '}
            <strong className="font-semibold text-tinta">não são compromissos contratuais</strong>.
            Podem ser revistos em função do desenvolvimento do projecto.
          </p>
          <p>
            Nada neste sítio deve ser interpretado como proposta comercial, garantia de
            disponibilização ou compromisso de adopção por qualquer entidade.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="3" titulo="Condições de utilização do sítio">
          <p>É permitido consultar, citar e ligar livremente ao conteúdo deste sítio. Não é permitido:</p>
          <ListaLegal
            itens={[
              'Utilizar o sítio para fins ilícitos ou contrários à ordem pública.',
              'Tentar obter acesso não autorizado à infraestrutura que o serve, ou perturbar o seu funcionamento.',
              'Extrair conteúdo de forma automatizada em volume que degrade o serviço para outros utilizadores.',
              'Reproduzir o conteúdo de modo a sugerir aprovação, patrocínio ou associação institucional inexistente.',
            ]}
          />
          <p>
            A investigação de segurança conduzida de boa-fé é bem-vinda e não é abrangida pela
            proibição de acesso não autorizado, desde que respeite a{' '}
            <Link href="/seguranca" className="font-medium text-aos-vermelho underline">
              política de segurança
            </Link>{' '}
            e a divulgação responsável.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="4" titulo="Propriedade intelectual e licenciamento" id="licenca">
          <p>
            O <strong className="font-semibold text-tinta">código-fonte</strong> do {MARCA.nome} e
            deste sítio é distribuído sob a licença{' '}
            <strong className="font-semibold text-tinta">{MARCA.licenca}</strong>, cujos termos
            prevalecem sobre os presentes em tudo o que respeite ao software. Pode usá-lo, estudá-lo,
            modificá-lo e redistribuí-lo nas condições dessa licença.
          </p>
          <p>
            A <strong className="font-semibold text-tinta">documentação e os textos</strong> deste
            sítio podem ser reproduzidos e adaptados com indicação da fonte e ligação ao original.
          </p>
          <p>
            O <strong className="font-semibold text-tinta">logotipo do {MARCA.nome} e a marca do{' '}
            {ISA.sigla}</strong> não estão abrangidos por essas permissões. O seu uso fora do
            projecto carece de autorização escrita, designadamente quando possa sugerir associação
            institucional, aprovação ou origem.
          </p>
          <p>
            Os componentes de software de terceiros incorporados na distribuição mantêm as
            respectivas licenças de origem.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="5" titulo="Exclusão de garantias" id="garantias">
          <p>
            O sítio e o software são disponibilizados{' '}
            <strong className="font-semibold text-tinta">no estado em que se encontram</strong>, sem
            garantia de qualquer natureza, expressa ou implícita, incluindo garantias de
            comercialização, adequação a uma finalidade específica ou ausência de defeitos.
          </p>
          <p>
            Não se garante que o conteúdo esteja isento de erros nem que o sítio esteja
            permanentemente disponível. O conteúdo técnico descreve um sistema em desenvolvimento e
            pode não corresponder ao estado corrente do código.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="6" titulo="Limitação de responsabilidade">
          <p>
            Na medida máxima permitida pela lei aplicável, o {ISA.sigla} não responde por danos
            directos, indirectos, incidentais ou consequenciais decorrentes da utilização ou da
            impossibilidade de utilização do sítio, do software ou da documentação.
          </p>
          <p>
            Compete a quem instale ou opere o software avaliar a sua adequação ao fim pretendido,
            designadamente em contextos críticos, e adoptar as medidas de segurança e de salvaguarda
            de dados apropriadas.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="7" titulo="Contribuições de terceiros">
          <p>
            Quem submeta contribuições ao projecto declara ser titular dos direitos necessários ou
            dispor de autorização para o fazer, e aceita que a contribuição seja distribuída sob a
            licença {MARCA.licenca}. As regras aplicáveis constam do{' '}
            <Link href="/contribuir" className="font-medium text-aos-vermelho underline">
              guia de contribuição
            </Link>
            .
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="8" titulo="Protecção de dados">
          <p>
            O tratamento de dados pessoais é descrito na{' '}
            <Link href="/privacidade" className="font-medium text-aos-vermelho underline">
              Política de Privacidade
            </Link>
            , que faz parte integrante destes termos. Os pedidos de eliminação são tratados nos
            termos da{' '}
            <Link href="/eliminacao-de-dados" className="font-medium text-aos-vermelho underline">
              página de eliminação de dados
            </Link>
            .
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="9" titulo="Lei aplicável e foro">
          <p>
            Estes termos regem-se pela lei da República de Angola. Para a resolução de litígios
            emergentes da sua interpretação ou aplicação é competente o foro da comarca de Luanda,
            com expressa renúncia a qualquer outro.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="10" titulo="Alterações e contacto">
          <p>
            Estes termos podem ser revistos. A versão em vigor é sempre a publicada nesta página,
            com a data de revisão indicada abaixo; o histórico de alterações é público no{' '}
            <a
              href={MARCA.repositorioWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aos-vermelho underline"
            >
              repositório do sítio
            </a>
            .
          </p>
          <p>
            Para questões sobre estes termos, contacte{' '}
            <a href={`mailto:${MARCA.email}`} className="font-medium text-aos-vermelho underline">
              {MARCA.email}
            </a>
            .
          </p>
        </SeccaoLegal>

        <DataRevisao iso="2026-09-05" />
      </div>
    </>
  );
}
