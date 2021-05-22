/*eslint-disable */
// We register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other .js file. It automatically reads TypeScript config from
// tsconfig.json.
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
  },
});

module.exports = require('./gatsby-config.ts');
