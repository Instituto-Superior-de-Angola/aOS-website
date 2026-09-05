import type { Metadata } from 'next';
import Link from 'next/link';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { SeccaoLegal, Destaque, ListaLegal, DataRevisao } from '@/components/Legal';
import { MARCA, ISA, GA_ID } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Como o sítio do angolanOS trata dados pessoais: medição de audiência sujeita a consentimento, direitos dos titulares ao abrigo da Lei n.º 22/11 e formas de contacto.',
  alternates: { canonical: '/privacidade' },
  openGraph: {
    title: 'Política de Privacidade — angolanOS',
    description: 'Tratamento de dados pessoais no sítio do angolanOS.',
    url: '/privacidade',
  },
};

export default function PaginaPrivacidade() {
  return (
    <>
      <CabecalhoPagina
        kicker="Privacidade"
        titulo="Política de Privacidade"
        descricao="Este sítio recolhe o mínimo indispensável. Não exige registo, não tem área reservada e não vende nem partilha dados com terceiros para fins comerciais. Este documento descreve exactamente o que é recolhido e o que pode exigir."
      />

      <div className="contentor max-w-4xl space-y-9 py-16">
        <Destaque>
          <strong className="font-semibold text-tinta">Em resumo.</strong> Não lhe pedimos dados. A
          única recolha é a medição de audiência, que só é activada se a autorizar. Se recusar, o
          sítio funciona integralmente na mesma. Não há publicidade, não há perfis de utilizador e
          não há partilha comercial de dados.
        </Destaque>

        <SeccaoLegal numero="1" titulo="Responsável pelo tratamento">
          <p>
            O responsável pelo tratamento dos dados recolhidos neste sítio é o{' '}
            <strong className="font-semibold text-tinta">{ISA.nome} ({ISA.sigla})</strong>,{' '}
            {ISA.natureza.toLowerCase()} criada pelo {ISA.criacao}, com sede em {ISA.morada}.
          </p>
          <p>
            Para qualquer questão sobre esta política ou sobre o tratamento dos seus dados, contacte{' '}
            <a href={`mailto:${MARCA.email}`} className="font-medium text-aos-vermelho underline">
              {MARCA.email}
            </a>{' '}
            ou{' '}
            <a href={`mailto:${ISA.email}`} className="font-medium text-aos-vermelho underline">
              {ISA.email}
            </a>
            .
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="2" titulo="Enquadramento legal">
          <p>
            O tratamento rege-se pela <strong className="font-semibold text-tinta">Lei n.º 22/11,
            de 17 de Junho</strong> — Lei da Protecção de Dados Pessoais da República de Angola —
            e é supervisionado pela Agência de Protecção de Dados (APD).
          </p>
          <p>
            Se nos consultar a partir do Espaço Económico Europeu, procuramos observar
            adicionalmente os princípios do Regulamento Geral sobre a Protecção de Dados, na medida
            em que lhe seja aplicável.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="3" titulo="Que dados são recolhidos" id="dados">
          <p>
            <strong className="font-semibold text-tinta">Dados que nos fornece directamente:</strong>{' '}
            nenhum. Este sítio não tem formulários, registo, subscrição nem comentários. Se optar por
            nos escrever por correio electrónico, tratamos apenas o conteúdo da sua mensagem e o
            endereço de resposta, para lhe responder.
          </p>
          <p>
            <strong className="font-semibold text-tinta">Dados recolhidos automaticamente:</strong>{' '}
            medição de audiência através do Google Analytics (identificador de medição{' '}
            <code className="font-mono text-2xs">{GA_ID}</code>), e apenas se a autorizar. Nesse
            caso são tratados:
          </p>
          <ListaLegal
            itens={[
              'Páginas consultadas, momento e duração da visita.',
              'Origem da visita (motor de pesquisa, ligação directa ou referência externa).',
              'Tipo de dispositivo, sistema operativo, navegador e idioma.',
              'Localização aproximada, ao nível do país ou da região, derivada do endereço IP.',
            ]}
          />
          <p>
            O endereço IP é <strong className="font-semibold text-tinta">anonimizado</strong> antes
            do armazenamento, através do parâmetro de anonimização activado na configuração. Não
            recolhemos nome, endereço de correio electrónico nem qualquer identificador directo.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="4" titulo="Cookies e consentimento" id="cookies">
          <p>
            Este sítio não instala qualquer cookie de medição antes de decisão sua. O estado por
            omissão é <strong className="font-semibold text-tinta">negado</strong>: o pedido de
            consentimento aparece na primeira visita e a medição só é activada se carregar em
            «Aceitar».
          </p>
          <p>
            Se recusar, nenhum cookie de medição é instalado e o sítio mantém-se integralmente
            funcional. A sua decisão fica guardada localmente no seu navegador para não lhe voltar a
            ser pedida.
          </p>
          <Destaque>
            <strong className="font-semibold text-tinta">Mudar de ideias.</strong> A decisão está
            guardada no armazenamento local do navegador, sob a chave{' '}
            <code className="font-mono text-2xs">aos-consentimento-v1</code>. Basta limpar os dados
            deste sítio nas definições do navegador para que o pedido de consentimento volte a
            aparecer e possa decidir de novo.
          </Destaque>
        </SeccaoLegal>

        <SeccaoLegal numero="5" titulo="Finalidade e fundamento de licitude">
          <p>
            A medição de audiência serve exclusivamente para compreender que conteúdos são
            consultados e melhorar a documentação do projecto. Não é usada para publicidade,
            construção de perfis, decisões automatizadas nem revenda.
          </p>
          <p>
            O fundamento de licitude é o{' '}
            <strong className="font-semibold text-tinta">seu consentimento</strong>, livremente
            prestado e revogável a qualquer momento, nos termos descritos na secção anterior.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="6" titulo="Subcontratantes e transferências internacionais">
          <p>
            A medição de audiência é operada pela Google, que actua como subcontratante e pode
            tratar os dados em servidores situados fora de Angola, designadamente nos Estados Unidos
            da América. Esta transferência só ocorre se tiver dado consentimento.
          </p>
          <p>
            O alojamento do sítio é assegurado pela Vercel Inc., que trata dados técnicos de
            entrega (registos de servidor) pelo período necessário à operação e segurança do
            serviço.
          </p>
          <p>
            Não existem outros destinatários. Nenhum dado é vendido, cedido ou partilhado para fins
            comerciais.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="7" titulo="Prazo de conservação">
          <p>
            Os dados de medição são conservados pelo período de retenção configurado no Google
            Analytics, findo o qual são eliminados automaticamente. As mensagens de correio
            electrónico são conservadas durante o tempo necessário ao tratamento do assunto e ao
            cumprimento de obrigações legais aplicáveis.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="8" titulo="Os seus direitos" id="direitos">
          <p>
            Enquanto titular dos dados, assistem-lhe, ao abrigo da Lei n.º 22/11, os seguintes
            direitos:
          </p>
          <ListaLegal
            itens={[
              <><strong className="font-semibold text-tinta">Acesso</strong> — saber que dados seus são tratados e obter cópia.</>,
              <><strong className="font-semibold text-tinta">Rectificação</strong> — corrigir dados inexactos ou incompletos.</>,
              <><strong className="font-semibold text-tinta">Eliminação</strong> — obter o apagamento dos seus dados. Ver a <Link href="/eliminacao-de-dados" className="font-medium text-aos-vermelho underline">página de eliminação de dados</Link>.</>,
              <><strong className="font-semibold text-tinta">Oposição</strong> — opor-se ao tratamento, incluindo revogar o consentimento para a medição.</>,
              <><strong className="font-semibold text-tinta">Informação</strong> — ser informado sobre as finalidades e destinatários.</>,
              <><strong className="font-semibold text-tinta">Reclamação</strong> — apresentar queixa junto da Agência de Protecção de Dados (APD).</>,
            ]}
          />
          <p>
            Para exercer qualquer destes direitos, escreva para{' '}
            <a href={`mailto:${MARCA.email}`} className="font-medium text-aos-vermelho underline">
              {MARCA.email}
            </a>
            . Respondemos no prazo máximo de 30 dias.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="9" titulo="Segurança">
          <p>
            O sítio é servido exclusivamente por ligação cifrada (HTTPS) e aplica cabeçalhos de
            segurança que restringem as origens de conteúdo executável. Não existe base de dados de
            utilizadores nem área autenticada, o que reduz materialmente a superfície de risco.
          </p>
          <p>
            Se identificar uma vulnerabilidade, consulte a{' '}
            <Link href="/seguranca" className="font-medium text-aos-vermelho underline">
              política de segurança
            </Link>{' '}
            antes de a divulgar publicamente.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="10" titulo="Ligações externas">
          <p>
            Este sítio remete para recursos externos, designadamente o repositório de código, o
            portal do {ISA.sigla} e documentação técnica de terceiros. Não somos responsáveis pelas
            práticas de privacidade desses sítios; recomendamos a leitura das respectivas políticas.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="11" titulo="Menores">
          <p>
            Este sítio dirige-se a um público técnico e institucional e não recolhe conscientemente
            dados de menores. Se tomar conhecimento de que um menor nos forneceu dados pessoais,
            contacte-nos para que procedamos à sua eliminação.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="12" titulo="Alterações a esta política">
          <p>
            Esta política pode ser revista para reflectir alterações ao sítio ou ao enquadramento
            legal. A data da última revisão consta no fim desta página. Alterações substanciais
            serão assinaladas de forma visível, e o histórico completo pode ser consultado no{' '}
            <a
              href={MARCA.repositorioWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-aos-vermelho underline"
            >
              repositório do sítio
            </a>
            , onde cada alteração está registada.
          </p>
        </SeccaoLegal>

        <DataRevisao iso="2026-09-05" />
      </div>
    </>
  );
}
