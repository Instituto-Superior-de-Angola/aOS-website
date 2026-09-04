export type Lingua = { codigo: string; nome: string; nota: string };

/**
 * Línguas suportadas pelo esforço de localização profunda.
 * Códigos conforme ISO 639-2/3, tal como usados em `src/locales/`.
 */
export const LINGUAS: Lingua[] = [
  { codigo: 'pt_AO', nome: 'Português de Angola', nota: 'Língua oficial e base terminológica do Estado' },
  { codigo: 'umb', nome: 'Umbundu', nota: 'Planalto central' },
  { codigo: 'kmb', nome: 'Kimbundu', nota: 'Luanda, Bengo, Malanje' },
  { codigo: 'kng', nome: 'Kikongo', nota: 'Zaire, Uíge, Cabinda' },
  { codigo: 'cjk', nome: 'Tchokwe', nota: 'Lunda e Moxico' },
  { codigo: 'luw', nome: 'Luvale', nota: 'Moxico e Lunda-Sul' },
  { codigo: 'ngo', nome: 'Nganguela', nota: 'Cuando Cubango e Bié' },
];
