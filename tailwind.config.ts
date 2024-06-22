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
      backgroundImage: {
        'footer-bg': "url('/images/footer-bg-image.svg')",
        footer: "url('/images/footer.svg')",
        blueOverlayGradient: 'var(--blueOverlayGradient)',
        redOverlayGradient: 'var(--redOverlayGradient)',
        yellowOverlayGradient: 'var(--yellowOverlayGradient)',
        blueCardGradient: 'var(--blueCardGradient)',
        redCardGradient: 'var(--redCardGradient)',
        yellowCardGradient: 'var(--yellowCardGradient)',
      },
      backdropBlur: {
        custom: '5px',
      },
      colors: {
        bgWhite: 'var(--bgWhite)',
        bgYellow: 'var(--bgYellow)',
        bgViolet: 'var(--bgViolet)',
        beige: 'var(--beige)',
        violet: 'var(--violet)',
        lightViolet: 'var(--lightViolet)',
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
  plugins: [require('tailwind-scrollbar')],
};
export default config;
