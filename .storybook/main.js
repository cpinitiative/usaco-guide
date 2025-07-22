const React = require('react');
const webpack = require('webpack');

module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-a11y',
    'storybook-addon-gatsby',
    '@storybook/addon-docs',
  ],

  core: {
    builder: 'webpack5',
  },

  // This code was added from https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/
  // because doing import { navigate } from "gatsby" was causing some weird React.Fragment error
  // unclear if this slows down build times. If it does, maybe go to ProblemsListItemDropdown.tsx
  // remove the import navigate statement and get rid of this code.
  webpackFinal: async config => {
    // Add environment variable support
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          GATSBY_ALGOLIA_INDEX_NAME:
            process.env.GATSBY_ALGOLIA_INDEX_NAME || 'dev',
          GATSBY_ALGOLIA_APP_ID: process.env.GATSBY_ALGOLIA_APP_ID || '',
          GATSBY_ALGOLIA_SEARCH_KEY:
            process.env.GATSBY_ALGOLIA_SEARCH_KEY || '',
        }),
      })
    );

    // Find the Babel loader rule
    const babelRule = config.module.rules.find(
      rule =>
        rule.use &&
        Array.isArray(rule.use) &&
        rule.use.some(
          useEntry =>
            typeof useEntry === 'object' &&
            useEntry.loader &&
            useEntry.loader.includes('babel-loader')
        )
    );

    if (babelRule) {
      // Find the use entry for babel-loader
      const babelUse = babelRule.use.find(
        useEntry =>
          typeof useEntry === 'object' &&
          useEntry.loader &&
          useEntry.loader.includes('babel-loader')
      );

      if (babelUse && babelUse.options) {
        babelUse.options.plugins = babelUse.options.plugins || [];
        // Add your plugin
        babelUse.options.plugins.push(
          require.resolve('babel-plugin-remove-graphql-queries')
        );
        // Remove problematic plugin
        babelUse.options.plugins = babelUse.options.plugins.filter(
          excludePlugins(['@babel/plugin-transform-classes'])
        );
      }
    }

    // Gatsby transpile workaround (optional, if you still need it)
    const gatsbyRule = config.module.rules.find(
      rule =>
        rule.exclude &&
        Array.isArray(rule.exclude) &&
        rule.exclude.some(ex => ex.toString().includes('node_modules'))
    );
    if (gatsbyRule) {
      gatsbyRule.exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/];
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      gatsby: require.resolve('./__mocks__/gatsby.js'),
    };

    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-typescript'),
            ],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
            ],
          },
        },
      ],
      exclude: /node_modules/,
    });
    config.resolve.extensions.push('.js', '.jsx');
    // Find the existing CSS rule and modify it to include PostCSS
    const cssRule = config.module.rules.find(
      rule => rule.test && rule.test.toString().includes('css')
    );

    if (cssRule) {
      // Add postcss-loader to the existing CSS processing pipeline
      if (cssRule.use && Array.isArray(cssRule.use)) {
        cssRule.use.push('postcss-loader');
      } else if (cssRule.use && typeof cssRule.use === 'object') {
        cssRule.use = [cssRule.use, 'postcss-loader'];
      }
    }
    return config;
  },

  // https://github.com/storybookjs/storybook/issues/12585
  // react docgen typescript plugin hampers hot reloading time, so we'll disable it in development
  ...(process.env.NODE_ENV === 'development'
    ? { typescript: { reactDocgen: 'react-docgen' } }
    : {}),
};

function excludePlugins(excludePaths) {
  return plugin => {
    const name = typeof plugin === 'string' ? plugin : plugin[0];
    if (typeof name !== 'string') {
      throw new Error(`Not a string: ${name}`);
    }
    return !excludePaths.some(path => name.includes(path));
  };
}
