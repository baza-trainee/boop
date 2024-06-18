import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: 'var(--font-raleway)',
        groppled: 'var(--font-groppled)',
        redhat: 'var(--font-redhat)',
      },
      colors: {
        bgWhite: 'var(--bgWhite)',
        bgViolet: 'var(--bgWhite)',
        bgYellow: 'var(--bgYellow)',
        beige: 'var(--beige)',
        violet: 'var(--violet)',
        textViolet: 'var(--textViolet)',
        red: 'var(--red)',
        yellow: 'var(--yellow)',
      },
      screens: {
        xs: '320px',
        sm: '430px',
        md: '768px',
        lg: '1280px',
        xl: '1368px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
};
export default config;
