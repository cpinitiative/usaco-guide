module.exports = {
  stories: ['../src/stories/Logo.stories.tsx'],
  addons: [
    // "storybook-addon-gatsby",
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // '@storybook/addon-a11y',
  ],
  core: {
    builder: 'webpack5',
  },
  features: {
    babelModeV7: true,
  },
  // https://github.com/storybookjs/storybook/issues/12585
  // react docgen typescript plugin hampers hot reloading time, so we'll disable it in development
  ...(process.env.NODE_ENV === 'development'
    ? { typescript: { reactDocgen: 'react-docgen' } }
    : {}),
};
