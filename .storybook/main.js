const React = require('react');

module.exports = {
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

  core: {
    builder: 'webpack5',
  },

  // This code was added from https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/
  // because doing import { navigate } from "gatsby" was causing some weird React.Fragment error
  // unclear if this slows down build times. If it does, maybe go to ProblemsListItemDropdown.tsx
  // remove the import navigate statement and get rid of this code.
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ];
    // Use correct react-dom depending on React version.
    if (parseInt(React.version) <= 18) {
      // no clue why uncommenting this is needed to fix react is not defined in canvas
      // config.externals = ["react-dom/client"];
    }

    // Remove core-js to prevent issues with Storybook
    // but doing so breaks FocusProblem.stories.tsx >:-( so I'll just comment it out
    //config.module.rules[0].exclude = [/core-js/];

    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries')
    );
    config.resolve.mainFields = ['browser', 'module', 'main'];

    // Storybook bug: https://github.com/storybookjs/storybook/issues/12019#issuecomment-702207045
    // Note: This may be fixed by newer versions of Storybook.
    const { options } = config.module.rules[0].use[0];
    options.plugins = options.plugins.filter(
      excludePlugins(['@babel/plugin-transform-classes'])
    );

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
