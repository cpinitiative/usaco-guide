module.exports = {
  plugins: [require('@tailwindcss/ui')],
  purge: {
    content: ['./src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
  },
};
