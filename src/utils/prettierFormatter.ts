import * as prettier from 'prettier';
import * as babelPlugin from 'prettier/plugins/babel';
import * as estreePlugin from 'prettier/plugins/estree';
import * as markdownPlugin from 'prettier/plugins/markdown';

export const formatProblems = (content: string): Promise<string> =>
  prettier.format(content, {
    endOfLine: 'lf',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    parser: 'json',
    plugins: [estreePlugin as any, babelPlugin],
  });

export const formatMarkdown = (content: string): Promise<string> =>
  prettier.format(content, {
    endOfLine: 'lf',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    useTabs: true,
    proseWrap: 'always',
    parser: 'mdx',
    plugins: [markdownPlugin],
  });

export const formatMetadata = (content: string): Promise<string> =>
  prettier.format(content, {
    parser: 'json',
    plugins: [estreePlugin as any, babelPlugin],
  });
