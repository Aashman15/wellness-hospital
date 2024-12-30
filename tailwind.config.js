/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '14px',
      sm: '18px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '30px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '48px',
      '8xl': '64px',
      '9xl': '72px',
    },
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        dark: '#241f1f',
        white: '#ffffff',
        primary: '#ff7061',
        gray: {
          DEFAULT: '#5c5c5c',
          light: '#fafafa',
          medium: '#d9d9d9',
          dark: '#303030',
          darker: '#424242',
          neutral: '#969696',
        },
        blue: {
          DEFAULT: '#3399db',
          dark: '#2678bd',
          deeper: '#1a599e',
          deep: '#1a5999',
          light: '#85d4f5',
          lighter: '#adebfa',
          pale: '#d6f5fc',
        },
        green: {
          DEFAULT: '#2ecc70',
          light: '#5ee087',
          pale: '#defce0',
        },
        red: {
          DEFAULT: '#db4745',
          light: '#ffd1d1',
          salmon: '#ff9c87',
        },
        steel: '#1c4a4a',
        black: '#000000',
        silver: '#b0b0b0',
        sky: {
          light: '#d1e0f0',
          pale: '#d1def0',
        },
        ice: {
          light: '#e3faff',
          white: '#f5f7fa',
        },
      },
      backgroundImage: {
        'nav-hero': "url('./src/assets/images/nav-hero-bg.png')",
      },
    },
  },
  plugins: [],
};
