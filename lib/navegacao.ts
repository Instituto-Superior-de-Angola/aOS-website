export type Ligacao = { titulo: string; href: string; descricao?: string };

/** Navegação principal do cabeçalho. */
export const NAVEGACAO: Ligacao[] = [
  { titulo: 'Edições', href: '/edicoes', descricao: 'Um núcleo, seis sistemas' },
  { titulo: 'Descarregar', href: '/descarregar', descricao: 'Imagens e verificação' },
  { titulo: 'Registo de Alterações', href: '/registo-de-alteracoes', descricao: 'Histórico de versões' },
  { titulo: 'Contribuir', href: '/contribuir', descricao: 'Como participar' },
  { titulo: 'Documentação', href: '/documentacao', descricao: 'Arquitectura e normas' },
  { titulo: 'Comunidade', href: '/comunidade', descricao: 'Governança e contactos' },
];

/** Estrutura do rodapé. */
export const RODAPE: { titulo: string; ligacoes: Ligacao[] }[] = [
  {
    titulo: 'O Sistema',
    ligacoes: [
      { titulo: 'Edições', href: '/edicoes' },
      { titulo: 'Descarregar', href: '/descarregar' },
      { titulo: 'Registo de alterações', href: '/registo-de-alteracoes' },
      { titulo: 'Roteiro', href: '/#roteiro' },
    ],
  },
  {
    titulo: 'Participar',
    ligacoes: [
      { titulo: 'Guia de contribuição', href: '/contribuir' },
      { titulo: 'Línguas nacionais', href: '/contribuir#linguas' },
      { titulo: 'Código de conduta', href: '/comunidade#conduta' },
      { titulo: 'Comunidade', href: '/comunidade' },
    ],
  },
  {
    titulo: 'Técnico',
    ligacoes: [
      { titulo: 'Documentação', href: '/documentacao' },
      { titulo: 'Arquitectura', href: '/documentacao#arquitectura' },
      { titulo: 'Segurança', href: '/seguranca' },
      { titulo: 'Builds reproduzíveis', href: '/documentacao#reprodutibilidade' },
    ],
  },
];
