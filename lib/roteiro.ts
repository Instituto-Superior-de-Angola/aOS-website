export type Fase = {
  id: string;
  nome: string;
  periodo: string;
  estado: 'concluida' | 'corrente' | 'futura';
  objectivo: string;
  marcos: string[];
};

/** Roteiro aprovado do programa aOS (ver README.md do repositório principal). */
export const FASES: Fase[] = [
  {
    id: 'fase-0',
    nome: 'Fase 0 — Fundação',
    periodo: 'Mai — Out 2026',
    estado: 'corrente',
    objectivo: 'Constituir a equipa nuclear, as instalações e a base de compilação reproduzível.',
    marcos: [
      'Equipa nuclear e instalações do ISA',
      'Ambiente de compilação KVM/QEMU reproduzível',
      'Normas de contribuição, governança e ontologia',
    ],
  },
  {
    id: 'fase-1',
    nome: 'Fase 1 — Base técnica',
    periodo: 'Nov 2026 — Out 2027',
    estado: 'futura',
    objectivo: 'Consolidar a base técnica instalada e lançar uma alpha pública.',
    marcos: ['Mirror APT nacional em produção', 'Tema Mwangolé', 'Lançamento do aOS 0.9 Alpha'],
  },
  {
    id: 'fase-2',
    nome: 'Fase 2 — Estabilização',
    periodo: 'Nov 2027 — Out 2028',
    estado: 'futura',
    objectivo: 'Estabilizar o sistema e lançar a primeira versão apta a produção.',
    marcos: ['Secure Boot com HSM nacional', 'Traduções nucleares validadas pelo ILN', 'Lançamento do aOS 1.0'],
  },
  {
    id: 'fase-3',
    nome: 'Fase 3 — Certificação',
    periodo: 'Nov 2028 — Out 2029',
    estado: 'futura',
    objectivo: 'Certificar a edição Defesa e concluir as edições especializadas.',
    marcos: ['Certificação para informação «Reservada»', 'Edições Live Forense e Embarcado'],
  },
  {
    id: 'fase-4',
    nome: 'Fase 4 — Massificação',
    periodo: 'Nov 2029 — Abr 2031',
    estado: 'futura',
    objectivo: 'Massificar a adopção no Estado e lançar o ciclo de suporte alargado.',
    marcos: ['Mais de 100.000 postos migrados', 'Lançamento do aOS 3.0 LTS'],
  },
];
