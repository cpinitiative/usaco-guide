import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
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
    '@storybook/addon-a11y',
    'storybook-addon-gatsby',
  ],

  async webpackFinal(config) {
    if (!config.resolve) {
      config.resolve = {};
    }
    config.resolve.fallback = {
      os: false,
      path: false,
      fs: false,
      crypto: false,
      vm: false,
      tty: false,

      module: false,
      perf_hooks: false,
      v8: false
    };
    return config;
  },

  // https://github.com/storybookjs/storybook/issues/12585
  // react docgen typescript plugin hampers hot reloading time, so we'll disable it in development
  ...(process.env.NODE_ENV === 'development'
    ? { typescript: { reactDocgen: 'react-docgen' } }
    : {}),

  docs: {
    autodocs: true
  }
};

export default config;
