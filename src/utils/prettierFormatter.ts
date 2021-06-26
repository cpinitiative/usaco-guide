import babelParser from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

export const formatProblems = (content: string): string =>
  prettier.format(content, {
    endOfLine: 'lf',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    parser: 'json',
    plugins: [babelParser],
  });
