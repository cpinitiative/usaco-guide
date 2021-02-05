const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-surface': '#121212',
        'dark-high-emphasis': 'rgba(255,255,255,0.87)',
        'dark-med-emphasis': 'rgba(255, 255, 255, 0.60)',
        'dark-disabled-emphasis': 'rgba(255, 255, 255, 0.38)',
        teal: colors.teal,
        orange: colors.orange,
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: {
    safelist: ['dark'],
    content: [
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx',
      './content/**/*.mdx',
      './gatsby-browser.tsx',
    ],
  },
};
