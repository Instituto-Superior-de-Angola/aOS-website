import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Trash2, Clock, ShieldCheck } from 'lucide-react';
import { CabecalhoPagina } from '@/components/CabecalhoPagina';
import { SeccaoLegal, Destaque, ListaLegal, DataRevisao } from '@/components/Legal';
import { MARCA, ISA } from '@/lib/marca';

export const metadata: Metadata = {
  title: 'Eliminação de Dados',
  description:
    'Como solicitar a eliminação dos seus dados relativos ao sítio do angolanOS: o que existe, como pedir, prazos de resposta e como eliminar dados por si mesmo.',
  alternates: { canonical: '/eliminacao-de-dados' },
  openGraph: {
    title: 'Eliminação de Dados — angolanOS',
    description: 'Como solicitar a eliminação dos seus dados relativos ao sítio do angolanOS.',
    url: '/eliminacao-de-dados',
  },
};

const PASSOS = [
  {
    icone: Mail,
    titulo: 'Envie o pedido',
    texto: (
      <>
        Escreva para{' '}
        <a href={`mailto:${MARCA.email}?subject=Pedido%20de%20elimina%C3%A7%C3%A3o%20de%20dados`} className="font-medium text-aos-vermelho underline">
          {MARCA.email}
        </a>{' '}
        com o assunto «Pedido de eliminação de dados».
      </>
    ),
  },
  {
    icone: ShieldCheck,
    titulo: 'Confirmação',
    texto: <>Podemos pedir elementos adicionais para confirmar que o pedido parte de si — apenas os estritamente necessários, que não conservamos depois.</>,
  },
  {
    icone: Trash2,
    titulo: 'Execução',
    texto: <>Eliminamos os dados identificáveis que existam e pedimos ao subcontratante de medição a eliminação dos registos associados.</>,
  },
  {
    icone: Clock,
    titulo: 'Resposta',
    texto: <>Confirmamos por escrito o que foi eliminado, no prazo máximo de 30 dias a contar da recepção do pedido.</>,
  },
];

export default function PaginaEliminacaoDados() {
  return (
    <>
      <CabecalhoPagina
        kicker="Eliminação de Dados"
        titulo="Eliminar os seus dados"
        descricao="Esta página explica que dados podem existir associados à sua visita, como pedir a sua eliminação e como pode fazê-lo por si mesmo, de imediato, sem depender de nós."
      />

      <div className="contentor max-w-4xl space-y-9 py-16">
        <Destaque>
          <strong className="font-semibold text-tinta">Antes de mais.</strong> Este sítio não tem
          contas de utilizador, registo nem base de dados de pessoas. Se nunca aceitou a medição de
          audiência nem nos escreveu, é muito provável que{' '}
          <strong className="font-semibold text-tinta">não exista qualquer dado seu</strong> para
          eliminar.
        </Destaque>

        <SeccaoLegal numero="1" titulo="Que dados podem existir">
          <ListaLegal
            itens={[
              <><strong className="font-semibold text-tinta">Dados de medição de audiência</strong> — apenas se autorizou a medição. São dados agregados e com endereço IP anonimizado, sem identificadores directos.</>,
              <><strong className="font-semibold text-tinta">Correspondência</strong> — se nos escreveu, o conteúdo da mensagem e o endereço de resposta.</>,
              <><strong className="font-semibold text-tinta">Preferência de consentimento</strong> — guardada exclusivamente no seu navegador, e nunca transmitida para nós.</>,
              <><strong className="font-semibold text-tinta">Contribuições públicas</strong> — se submeteu código ou comentários no repositório público, ver a secção 4.</>,
            ]}
          />
        </SeccaoLegal>

        <SeccaoLegal numero="2" titulo="Eliminar por si mesmo, de imediato" id="imediato">
          <p>
            Para os dados que residem no seu equipamento, não precisa de nós nem de esperar por
            resposta:
          </p>
          <ListaLegal
            itens={[
              <><strong className="font-semibold text-tinta">Preferência de consentimento e cookies:</strong> limpe os dados deste sítio nas definições do navegador. Isso remove a chave <code className="font-mono text-2xs">aos-consentimento-v1</code> e os cookies de medição, se existirem. O pedido de consentimento voltará a aparecer.</>,
              <><strong className="font-semibold text-tinta">Impedir medição futura:</strong> recuse o consentimento quando o pedido reaparecer, ou active a opção de não rastreio do seu navegador.</>,
            ]}
          />
          <p>
            Feito isto, deixa de haver qualquer recolha associada às suas visitas seguintes.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="3" titulo="Pedir a eliminação dos restantes dados" id="pedido">
          <p>
            Para os dados que não estão no seu equipamento — correspondência e registos de medição
            já recolhidos — apresente o pedido. O processo é o seguinte:
          </p>

          <ol className="mt-6 grid gap-5 sm:grid-cols-2">
            {PASSOS.map(({ icone: Icone, titulo, texto }, i) => (
              <li key={titulo} className="flex gap-4 rounded-xl border border-linha bg-papel p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradiente-aos text-white">
                  <Icone size={17} aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-2xs text-tinta-tenue">Passo {i + 1}</p>
                  <h3 className="mt-1 font-display text-base font-bold">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-tinta-suave">{texto}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6">
            O pedido é <strong className="font-semibold text-tinta">gratuito</strong> e não carece
            de justificação. Não é necessário indicar motivo.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="4" titulo="Contribuições no repositório público" id="repositorio">
          <p>
            Se contribuiu com código, o seu nome e endereço de correio electrónico constam do
            histórico de versões, por ser essa a natureza de um registo de autoria. Este histórico é
            público, replicado por terceiros e{' '}
            <strong className="font-semibold text-tinta">não pode ser alterado sem reescrever o
            histórico do projecto</strong>, o que invalidaria as assinaturas e as cópias existentes.
          </p>
          <p>
            Dizemo-lo com franqueza para não criar expectativa infundada: podemos remover dados de
            contacto de ficheiros de documentação e deixar de os utilizar, mas não podemos garantir
            a eliminação de registos de autoria já distribuídos publicamente. Se esta situação lhe
            for aplicável, contacte-nos e procuraremos a solução possível em cada caso.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="5" titulo="Limites e conservação obrigatória">
          <p>
            Podemos ter de conservar determinados dados quando exista obrigação legal ou necessidade
            de exercício de direitos em processo. Nesse caso, indicamos expressamente que dados são
            conservados e com que fundamento, e eliminamos tudo o resto.
          </p>
        </SeccaoLegal>

        <SeccaoLegal numero="6" titulo="Se não concordar com a resposta">
          <p>
            Assiste-lhe o direito de apresentar reclamação junto da{' '}
            <strong className="font-semibold text-tinta">Agência de Protecção de Dados (APD)</strong>,
            autoridade de controlo competente ao abrigo da Lei n.º 22/11, de 17 de Junho.
          </p>
          <p>
            Pode também dirigir-se ao responsável pelo tratamento, o {ISA.nome}, através de{' '}
            <a href={`mailto:${ISA.email}`} className="font-medium text-aos-vermelho underline">
              {ISA.email}
            </a>
            .
          </p>
        </SeccaoLegal>

        <p className="text-sm leading-7 text-tinta-suave">
          Consulte também a{' '}
          <Link href="/privacidade" className="font-medium text-aos-vermelho underline">
            Política de Privacidade
          </Link>{' '}
          para a descrição completa do tratamento, e os{' '}
          <Link href="/termos" className="font-medium text-aos-vermelho underline">
            Termos de Serviço
          </Link>
          .
        </p>

        <DataRevisao iso="2026-09-05" />
      </div>
    </>
  );
}
