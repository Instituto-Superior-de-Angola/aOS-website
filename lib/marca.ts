/**
 * Identidade do angolanOS (aOS) e da instituição de acolhimento.
 *
 * As cores são amostradas do logotipo oficial e replicam os tokens definidos em
 * `tailwind.config.js`. Qualquer alteração tem de ser feita nos dois sítios — o
 * script `scripts/verificar-identidade-visual.mjs` falha o CI se divergirem.
 */

export const MARCA = {
  nome: 'angolanOS',
  sigla: 'aOS',
  descricao: 'Distribuição GNU/Linux angolana para a Administração Pública',
  dominio: 'angolanos.isa.ao',
  url: 'https://angolanos.isa.ao',
  repositorio: 'https://github.com/Instituto-Superior-de-Angola/projecto_angolanOS',
  repositorioWebsite: 'https://github.com/Instituto-Superior-de-Angola/aOS-website',
  mirror: 'repo.angolanos.isa.ao',
  email: 'angolanos@isa.ao',
  emailSeguranca: 'seguranca.angolanos@isa.ao',
  licenca: 'GPL-3.0',
} as const;

/**
 * Instituição de acolhimento do projecto.
 *
 * Dados institucionais conforme o portal oficial do ISA (https://isa.ao).
 * O aOS é desenvolvido no ISA; não existem, à data, protocolos firmados com
 * outras entidades, pelo que nenhuma é mencionada como parceira.
 */
export const ISA = {
  nome: 'Instituto Superior de Angola',
  sigla: 'ISA',
  natureza: 'Instituição privada de ensino superior',
  criacao: 'Decreto Executivo n.º 26/11, de 23 de Fevereiro',
  url: 'https://isa.ao',
  centro: 'Centro de Estudos e Investigação Científica do ISA (CEIC-ISA)',
  centroUrl: 'https://isa.ao/investigacao',
  repositorio: 'https://ri.isa.ao',
  linha: 'Inteligência Artificial, Cibersegurança e Telecomunicações',
  morada: 'Estrada da Pedreira, 02. Bairro 17 de Setembro, Sequele, Icolo e Bengo, Luanda',
  email: 'investigacao@isa.ao',
  telefone: '+244 942 046 176',
  telefoneUrl: 'tel:+244942046176',
} as const;

/** Paleta canónica do aOS. Fonte de verdade partilhada com o Tailwind. */
export const CORES = {
  laranja: '#F35B07',
  vermelho: '#C9331E',
  ouro: '#E8B21E',
  preto: '#0B0B0C',
} as const;

/** Verde institucional do ISA, usado apenas em contexto institucional. */
export const COR_ISA = '#008055';

/** Gradiente canónico da marca, na mesma direcção do logotipo. */
export const GRADIENTE = `linear-gradient(135deg, ${CORES.laranja} 0%, ${CORES.vermelho} 100%)`;

/**
 * Chave do protocolo IndexNow, verificada por `public/<chave>.txt`.
 *
 * O IndexNow notifica Bing, Yandex, Seznam e Naver de conteúdo novo ou
 * alterado. O Google não participa neste protocolo: a submissão ao Google
 * faz-se pelo Search Console, que exige autenticação da conta.
 */
export const INDEXNOW_KEY = 'f5972f42ed8ab9937535595a192e3fa1';

/** Identificador de medição do Google Analytics. */
export const GA_ID = 'G-CD7C54JGXH';
