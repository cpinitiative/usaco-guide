module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: [
        'http://localhost/',
        'http://localhost/dashboard/',
        'http://localhost/general/',
        'http://localhost/silver/prefix-sums-2/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
