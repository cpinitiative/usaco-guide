module.exports = {
  plugins: [require('@tailwindcss/ui')],
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx',
      './content/**/*.mdx',
      './gatsby-browser.tsx',
    ],
  },
};
