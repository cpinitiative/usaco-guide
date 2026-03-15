module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn start',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/dashboard/',
        'http://localhost:3000/general/',
      ],
    },
    assert: {},
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
