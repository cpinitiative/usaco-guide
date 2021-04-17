module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: [
        'http://localhost/',
        'http://localhost/dashboard/',
        'http://localhost/general/',
        'http://localhost/general/using-this-guide/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
