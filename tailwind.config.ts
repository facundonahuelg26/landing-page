import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    // fontFamily: {
    //   mulish: ['Mulish', 'sans-serif'],
    //   reey: ['reey', 'sans-serif']
    // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: { light: '#09090b', DEFAULT: '#000000' },
      primary: '#6D95FD',
      // primary: {
      //   light: '#00cce9',
      //   DEFAULT: '#ff0080',
      //   dark: '#005099'
      // },
      secondary: {
        light: '#e9ecf5',
        DEFAULT: '#f0f8ff',
        dark: '#101729'
      },
      tertiary: '#A1A1A1',
      blue: { light: '#00cce9', DEFAULT: '#005099' },
      gray: {
        light: '#f1f1f1',
        DEFAULT: '#d4d4d4',
        dark: '#46474B'
      }
    },

    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
export default config
