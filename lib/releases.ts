export type EstadoLancamento = 'lancado' | 'desenvolvimento' | 'planeado';

export type Alteracao = {
  /** Tipos alinhados com os Conventional Commits definidos em `.gitmessage`. */
  tipo: 'feat' | 'fix' | 'sec' | 'docs' | 'perf' | 'chore';
  escopo: string;
  descricao: string;
};

export type Lancamento = {
  versao: string;
  titulo: string;
  data: string;
  estado: EstadoLancamento;
  fase: string;
  resumo: string;
  alteracoes: Alteracao[];
};

/**
 * Registo de alterações do aOS.
 *
 * O projecto encontra-se na Fase 0 do roteiro (fundação institucional e base de
 * compilação). Ainda não existe qualquer imagem pública lançada: as entradas
 * marcadas como `planeado` correspondem a marcos do roteiro aprovado e não a
 * versões distribuídas. As datas dessas entradas são metas, não factos.
 */
export const LANCAMENTOS: Lancamento[] = [
  {
    versao: '0.1.0',
    titulo: 'Fundação técnica',
    data: '2026-09-04',
    estado: 'desenvolvimento',
    fase: 'Fase 0 — Fundação',
    resumo:
      'Primeira base de compilação reproduzível do projecto. Ainda não produz imagens públicas: estabelece o ambiente, as normas e a estrutura sobre a qual as edições serão construídas.',
    alteracoes: [
      { tipo: 'feat', escopo: 'build', descricao: 'Ambiente de compilação KVM/QEMU com Vagrant e sbuild, portátil entre hospedeiros.' },
      { tipo: 'feat', escopo: 'build', descricao: 'Alvos de compilação de ISO por edição através do Makefile do projecto.' },
      { tipo: 'feat', escopo: 'apt', descricao: 'Estrutura do mirror APT nacional com reprepro e assinatura GPG própria.' },
      { tipo: 'feat', escopo: 'locale', descricao: 'Esqueleto gettext para pt_AO e para as seis línguas bantu mapeadas por ISO 639-2/3.' },
      { tipo: 'docs', escopo: 'build', descricao: 'Ontologia do sistema, modelo de governança e roteiro de reprodutibilidade.' },
      { tipo: 'chore', escopo: 'build', descricao: 'Validação automática de ficheiros .po, shellcheck e varrimento de segredos em pré-commit.' },
    ],
  },
  {
    versao: '0.9.0',
    titulo: 'Alpha pública',
    data: '2027-10-31',
    estado: 'planeado',
    fase: 'Fase 1 — Base técnica',
    resumo:
      'Primeira imagem distribuída fora da equipa nuclear. Destina-se a avaliação técnica, não a produção.',
    alteracoes: [
      { tipo: 'feat', escopo: 'iso', descricao: 'Imagem instalável da edição Desktop Pública.' },
      { tipo: 'feat', escopo: 'installer', descricao: 'Instalador em português de Angola com selecção de língua nacional.' },
      { tipo: 'feat', escopo: 'theme', descricao: 'Tema Mwangolé aplicado ao arranque, sessão e ambiente de trabalho.' },
      { tipo: 'feat', escopo: 'apt', descricao: 'Mirror APT nacional em produção, servindo actualizações assinadas.' },
      { tipo: 'sec', escopo: 'kernel', descricao: 'Perfil de kernel endurecido e políticas AppArmor para o perfil desktop.' },
    ],
  },
  {
    versao: '1.0.0',
    titulo: 'Primeira versão estável',
    data: '2028-10-31',
    estado: 'planeado',
    fase: 'Fase 2 — Estabilização',
    resumo:
      'Versão apta a implantação real na Administração Pública, com compromisso de suporte e actualizações de segurança.',
    alteracoes: [
      { tipo: 'feat', escopo: 'iso', descricao: 'Edições Desktop Pública, Servidor Estatal e Educação em versão estável.' },
      { tipo: 'sec', escopo: 'kernel', descricao: 'UEFI Secure Boot com a Chave Mestra Nacional selada em HSM.' },
      { tipo: 'feat', escopo: 'locale', descricao: 'Traduções nucleares da Administração Pública validadas por falantes nativos.' },
      { tipo: 'perf', escopo: 'build', descricao: 'Builds reproduzíveis bit a bit verificáveis por terceiros.' },
    ],
  },
  {
    versao: '2.0.0',
    titulo: 'Edições especializadas',
    data: '2029-10-31',
    estado: 'planeado',
    fase: 'Fase 3 — Certificação',
    resumo:
      'Certificação da edição Defesa e entrada em serviço das edições Live Forense e Embarcado.',
    alteracoes: [
      { tipo: 'sec', escopo: 'defesa', descricao: 'Edição Defesa certificada para informação classificada «Reservada».' },
      { tipo: 'feat', escopo: 'iso', descricao: 'Edições Live Forense e Embarcado em versão estável.' },
      { tipo: 'sec', escopo: 'kernel', descricao: 'Partições seladas com LUKS2 e dm-verity nas edições sensíveis.' },
    ],
  },
  {
    versao: '3.0.0',
    titulo: 'LTS de massificação',
    data: '2031-04-30',
    estado: 'planeado',
    fase: 'Fase 4 — Massificação',
    resumo:
      'Versão de suporte alargado que sustenta a meta nacional de mais de 100.000 postos de trabalho migrados.',
    alteracoes: [
      { tipo: 'feat', escopo: 'iso', descricao: 'Ciclo de suporte alargado (LTS) para todas as seis edições.' },
      { tipo: 'feat', escopo: 'build', descricao: 'Plano de continuidade operacional de três níveis (Verde, Amarelo, Vermelho).' },
      { tipo: 'docs', escopo: 'build', descricao: 'Programa nacional de formação e certificação de administradores aOS.' },
    ],
  },
];

export const ESTADO_LANCAMENTO: Record<EstadoLancamento, { rotulo: string; classe: string }> = {
  lancado: { rotulo: 'Lançado', classe: 'bg-emerald-50 text-emerald-800 ring-emerald-200' },
  desenvolvimento: { rotulo: 'Em desenvolvimento', classe: 'bg-orange-50 text-aos-laranja-escuro ring-orange-200' },
  planeado: { rotulo: 'Planeado', classe: 'bg-subtil text-tinta-tenue ring-linha-forte' },
};

export const TIPO_ALTERACAO: Record<Alteracao['tipo'], { rotulo: string; classe: string }> = {
  feat: { rotulo: 'feat', classe: 'text-emerald-700 bg-emerald-50 ring-emerald-200' },
  fix: { rotulo: 'fix', classe: 'text-sky-700 bg-sky-50 ring-sky-200' },
  sec: { rotulo: 'sec', classe: 'text-aos-vermelho bg-red-50 ring-red-200' },
  docs: { rotulo: 'docs', classe: 'text-tinta-suave bg-subtil ring-linha-forte' },
  perf: { rotulo: 'perf', classe: 'text-violet-700 bg-violet-50 ring-violet-200' },
  chore: { rotulo: 'chore', classe: 'text-tinta-tenue bg-subtil ring-linha-forte' },
};
