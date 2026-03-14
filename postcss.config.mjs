const config = {
  plugins: [
    "@tailwindcss/postcss",
    ...(process.env.NODE_ENV === "production" ? ["cssnano"] : []),
  ],
};

export default config;
