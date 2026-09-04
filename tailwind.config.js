/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ---------------------------------------------------------------
         * Paleta institucional aOS — amostrada directamente do logotipo
         * (docs/assets/imagens/logo-aos.png). A engrenagem descreve um
         * gradiente de laranja (topo) a vermelho (base); a ave e o
         * contorno são preto puro sobre branco.
         * ------------------------------------------------------------- */
        aos: {
          /* Acento primário: laranja da engrenagem (topo do gradiente) */
          laranja: '#F35B07',
          'laranja-claro': '#FF7A2E',
          'laranja-escuro': '#D24A04',

          /* Acento secundário: vermelho da engrenagem (base do gradiente) */
          vermelho: '#C9331E',
          'vermelho-claro': '#E14A32',
          'vermelho-escuro': '#A32616',

          /* Dourado da bandeira nacional — usar com parcimónia */
          ouro: '#E8B21E',
          'ouro-escuro': '#B8871A',

          /* Preto da silhueta do logotipo */
          preto: '#0B0B0C',
        },

        /* Tokens semânticos de superfície e texto (tema claro) */
        papel: '#FFFFFF',
        superficie: '#FAF9F8',
        subtil: '#F3F1EF',
        linha: '#E4E0DC',
        'linha-forte': '#CFC9C3',
        tinta: '#131315',
        'tinta-suave': '#43434A',
        'tinta-tenue': '#6E6E77',

        /* Superfícies escuras (herói, rodapé, blocos de código) */
        'noite-900': '#0B0B0C',
        'noite-800': '#141416',
        'noite-700': '#1E1E21',
        'noite-600': '#2A2A2F',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        kicker: '0.14em',
      },
      maxWidth: {
        prosa: '68ch',
      },
      backgroundImage: {
        /* Gradiente canónico da marca — mesma direcção do logotipo */
        'gradiente-aos': 'linear-gradient(135deg, #F35B07 0%, #C9331E 100%)',
        'grelha-tenue':
          'linear-gradient(to right, rgba(243, 91, 7, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(243, 91, 7, 0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        cartao: '0 1px 2px rgba(11, 11, 12, 0.05)',
        elevado: '0 1px 3px rgba(11, 11, 12, 0.07), 0 12px 32px -16px rgba(11, 11, 12, 0.18)',
      },
      keyframes: {
        subir: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        subir: 'subir 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

module.exports = config;
