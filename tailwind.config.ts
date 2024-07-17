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
      },
      backdropBlur: {
        custom: '5px',
      },
      colors: {
        bgWhite: 'var(--bgWhite)',
        bgYellow: 'var(--bgYellow)',
        bgViolet: 'var(--bgViolet)',
        bgVioletTransparent: 'var(--bgVioletTransparent)',
        bgBurgerMenu: 'rgba(243, 244, 238, 1)',
        golden: 'rgba(255, 171, 11, 0.1)',
        beige: 'var(--beige)',
        violet: 'var(--violet)',
        lightViolet: 'var(--lightViolet)',
        lightVioletSecond: 'var(--lightVioletSecond)',
        mainViolet: 'var(--mainViolet)',
        textViolet: 'var(--textViolet)',
        darkGrey: 'var(--darkGrey)',
        red: 'var(--red)',
        yellow: 'var(--yellow)',
        customOverlay: 'rgba(202, 196, 226, 0.5)',
      },
      screens: {
        xs: '390px',
        sm: '430px',
        custom: '650px',
        md: '768px',
        ml: '1024px',
        lg: '1280px',
        xl: '1366px',
        '2xl': '1440px',
        '3xl': '1536px',
        '4xl': '1920px',
      },
      maxWidth: {
        'screen-3xl': '1920px',
      },
      scale: {
        '-1': '-1',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

export default config;
