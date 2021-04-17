module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: [
        'http://localhost/',
        'http://localhost/dashboard',
        'https://usaco.guide/general/',
        'https://usaco.guide/general/using-this-guide',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
