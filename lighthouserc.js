module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: [
        'http://localhost/',
        'http://localhost/dashboard',
        'https://localhost/general/',
        'https://localhost/general/using-this-guide',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
