export type Edicao = {
  id: string;
  nome: string;
  resumo: string;
  descricao: string;
  publico: string;
  ambiente: string;
  destaques: string[];
  /** Estado de disponibilidade pública da imagem. */
  estado: 'planeada' | 'desenvolvimento' | 'disponivel';
  /** Nome do metapackage Debian correspondente. */
  metapacote: string;
};

/**
 * As seis edições partilham um único núcleo Debian Estável endurecido.
 * A pasta `edicoes/` do repositório principal contém os manifestos.
 */
export const EDICOES: Edicao[] = [
  {
    id: 'desktop',
    nome: 'Desktop Pública',
    resumo: 'O posto de trabalho civil da Administração Pública.',
    descricao:
      'Ambiente gráfico completo com o Tema Mwangolé, suite de produtividade, assinatura digital e integração com os serviços do Estado. É a edição de referência para ministérios, autarquias e institutos públicos.',
    publico: 'Administração Pública, cidadãos e empresas',
    ambiente: 'Ambiente de trabalho gráfico com Tema Mwangolé',
    destaques: [
      'Suite de produtividade e correio institucional pré-configurados',
      'Interface nas línguas nacionais bantu e em português de Angola',
      'Actualizações servidas pelo mirror APT nacional',
      'Assinatura e autenticação digital do Estado',
    ],
    estado: 'desenvolvimento',
    metapacote: 'aos-desktop',
  },
  {
    id: 'servidor',
    nome: 'Servidor Estatal',
    resumo: 'A base das nuvens governamentais.',
    descricao:
      'Perfil mínimo, sem ambiente gráfico, destinado a centros de dados do Estado e à nuvem soberana. Endurecimento por omissão, auditoria integral e gestão remota através de infraestrutura declarativa.',
    publico: 'INFOSI, centros de dados e nuvem soberana',
    ambiente: 'Sem interface gráfica, administração remota',
    destaques: [
      'Perfil de kernel endurecido para carga de servidor',
      'Auditoria integral e registo remoto por omissão',
      'Provisionamento declarativo (IaC) a partir de `infra/`',
      'Suporte a virtualização KVM e contentores',
    ],
    estado: 'desenvolvimento',
    metapacote: 'aos-servidor',
  },
  {
    id: 'defesa',
    nome: 'Defesa',
    resumo: 'Edição isolada para informação classificada.',
    descricao:
      'Sistema em regime air-gapped, sem qualquer dependência de rede externa, destinado ao tratamento de informação classificada até ao grau «Reservado». Cadeia de arranque selada em HSM nacional e partições verificadas com dm-verity.',
    publico: 'Forças Armadas, Casa de Segurança e órgãos de defesa',
    ambiente: 'Air-gapped, certificação em curso',
    destaques: [
      'Sem dependências de rede externa em todo o ciclo de vida',
      'UEFI Secure Boot com Chave Mestra Nacional em HSM',
      'Partições seladas com LUKS2 e dm-verity',
      'Perfis SELinux/AppArmor restritivos por omissão',
    ],
    estado: 'planeada',
    metapacote: 'aos-defesa',
  },
  {
    id: 'educacao',
    nome: 'Educação',
    resumo: 'A sala de aula digital angolana.',
    descricao:
      'Suite escolar integrada para o Sistema Nacional de Educação, do ensino primário ao superior. Funciona com hardware modesto e em modo offline, com conteúdos curriculares nas línguas nacionais.',
    publico: 'Escolas, institutos médios e universidades',
    ambiente: 'Ambiente gráfico leve, operação offline',
    destaques: [
      'Requisitos de hardware reduzidos para parques escolares antigos',
      'Conteúdos e interface nas línguas nacionais bantu',
      'Funciona sem ligação permanente à Internet',
      'Ferramentas de gestão de turma e de sala de informática',
    ],
    estado: 'planeada',
    metapacote: 'aos-educacao',
  },
  {
    id: 'live_forense',
    nome: 'Live Forense',
    resumo: 'Perícia digital sem tocar no disco.',
    descricao:
      'Imagem executada inteiramente em memória, com montagem de dispositivos apenas em modo de leitura, para recolha e análise de prova digital pela Polícia Nacional e pelo INFOSI.',
    publico: 'Polícia Nacional, INFOSI e peritos forenses',
    ambiente: 'Live em memória, sem escrita em disco',
    destaques: [
      'Montagem forçada em modo de leitura de todos os dispositivos',
      'Cadeia de custódia e somas de verificação automáticas',
      'Conjunto de ferramentas de aquisição e análise',
      'Nenhum vestígio escrito no equipamento examinado',
    ],
    estado: 'planeada',
    metapacote: 'aos-live-forense',
  },
  {
    id: 'embarcado',
    nome: 'Embarcado',
    resumo: 'Sistema imutável para terminais e IoT.',
    descricao:
      'Imagem imutável com actualizações atómicas e reversão automática, destinada a terminais BUE, quiosques de atendimento público e equipamento IoT do Estado.',
    publico: 'Terminais BUE, quiosques públicos e IoT do Estado',
    ambiente: 'Sistema de ficheiros imutável, actualizações atómicas',
    destaques: [
      'Raiz imutável com reversão automática em caso de falha',
      'Arranque verificado de ponta a ponta',
      'Consumo de recursos mínimo',
      'Gestão remota de frota de equipamentos',
    ],
    estado: 'planeada',
    metapacote: 'aos-embarcado',
  },
];

export const ESTADO_EDICAO: Record<Edicao['estado'], { rotulo: string; classe: string }> = {
  disponivel: { rotulo: 'Disponível', classe: 'bg-emerald-50 text-emerald-800 ring-emerald-200' },
  desenvolvimento: { rotulo: 'Em desenvolvimento', classe: 'bg-orange-50 text-aos-laranja-escuro ring-orange-200' },
  planeada: { rotulo: 'Planeada', classe: 'bg-subtil text-tinta-tenue ring-linha-forte' },
};
