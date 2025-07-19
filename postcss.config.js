module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
  ],
};
