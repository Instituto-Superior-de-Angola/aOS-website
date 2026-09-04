/**
 * Identidade institucional do angolanOS (aOS).
 *
 * As cores são amostradas do logotipo oficial e replicam os tokens definidos em
 * `tailwind.config.js`. Qualquer alteração tem de ser feita nos dois sítios — o
 * script `scripts/verificar-identidade-visual.mjs` falha o CI se divergirem.
 */

export const MARCA = {
  nome: 'angolanOS',
  sigla: 'aOS',
  descricao: 'Distribuição GNU/Linux Soberana da República de Angola',
  promotor: 'Instituto Superior de Angola (ISA)',
  dominio: 'aos.gov.ao',
  repositorio: 'https://github.com/Instituto-Superior-de-Angola/projecto_angolanOS',
  repositorioWebsite: 'https://github.com/Instituto-Superior-de-Angola/aOS-website',
  mirror: 'repo.aos.gov.ao',
  emailGeral: 'aos@isa.ao',
  emailSeguranca: 'seguranca-aos@isa.ao',
} as const;

/** Paleta canónica. Fonte de verdade partilhada com o Tailwind. */
export const CORES = {
  laranja: '#F35B07',
  vermelho: '#C9331E',
  ouro: '#E8B21E',
  preto: '#0B0B0C',
} as const;

/** Gradiente canónico da marca, na mesma direcção do logotipo. */
export const GRADIENTE = `linear-gradient(135deg, ${CORES.laranja} 0%, ${CORES.vermelho} 100%)`;
