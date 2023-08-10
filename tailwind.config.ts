/* eslint-disable @typescript-eslint/no-var-requires */
import { type Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-mode="dark"]'],
    theme: {
      fontFamily: {
        'geologica': ['Geologica','sans-serif'],
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        DEFAULT: '#ffffff',
        'dark': '#121212',
      },

      'secondary': {
        DEFAULT: '#f1f1f1',
        'dark': '#171717',
      },

      'btn': {
        DEFAULT: '#4c879a',
      },

      'btn-secondary': {
        DEFAULT: '#5fa9c1',
      },

      'text-primary': {
        DEFAULT: '#121212',
        'dark': '#ffffff',
      },
      
      'text-secondary': {
        DEFAULT: '#919191',
        'dark': '#919191',
      },

      'text-btn': {
        DEFAULT: '#ffffff',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    
    extend: {},
  },
  plugins: [],
} satisfies Config;
