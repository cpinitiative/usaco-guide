module.exports = {
  plugins: [
    require('postcss-import'),
    'tailwindcss/nesting',
    require(`tailwindcss`),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
  ],
};
