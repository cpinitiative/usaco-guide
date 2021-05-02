module.exports = {
  plugins: [
    require('postcss-import'),
    require(`tailwindcss`),
    require('postcss-nested'),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
  ],
};
