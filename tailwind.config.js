const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
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
        cyan: colors.cyan,
        teal: colors.teal,
        orange: colors.orange,
        gray: colors.gray,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        'light-blue': colors.sky,
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        solid: '0 0 0 2px currentColor',
        outline: `0 0 0 3px rgba(156, 163, 175, .5)`,
        'outline-gray': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-blue': `0 0 0 3px rgba(191, 219, 254, .5)`,
        'outline-green': `0 0 0 3px rgba(167, 243, 208, .5)`,
        'outline-yellow': `0 0 0 3px rgba(253, 230, 138, .5)`,
        'outline-red': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-pink': `0 0 0 3px rgba(251, 207, 232, .5)`,
        'outline-purple': `0 0 0 3px rgba(221, 214, 254, .5)`,
        'outline-indigo': `0 0 0 3px rgba(199, 210, 254, .5)`,
      },
      typography: theme => ({
        light: {
          css: [
            {
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),

      animation: {
        blob1: 'blob 9s infinite',
        blob2: 'blob 9s infinite 2s',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1)',
          },
          '33%': {
            transform: 'scale(1.1) translateX(8rem) translateY(3rem)',
          },
          '66%': {
            transform: 'scale(0.9) translateX(-8rem) translateY(-3rem)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
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
      './src/components/**/*.{js,ts,tsx}',
      './src/context/**/*.{js,ts,tsx}',
      './src/hooks/**/*.{js,ts,tsx}',
      './src/models/**/*.{js,ts,tsx}',
      './src/pages/**/*.{js,ts,tsx}',
      './src/stories/**/*.{js,ts,tsx}',
      './src/templates/**/*.{js,ts,tsx}',
      './content/**/*.{mdx,ts,tsx}',
      './gatsby-browser.tsx',
      './.storybook/preview.js',
    ],
  },
};
