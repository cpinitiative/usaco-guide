import * as React from 'react';
import { useEffect, useState } from 'react';

import { transform } from '@babel/standalone';
import mdx from '@mdx-js/mdx';
import { MDXProvider, mdx as createElement } from '@mdx-js/react';
import * as rehypeKatex from 'rehype-katex';
import * as remarkExternalLinks from 'remark-external-links';
import * as remarkMath from 'remark-math';
import grayMatter from 'gray-matter';

import { components } from './markdown/MDXProvider';
import { Problem } from '../models/problem';
import customRehypeKatex from '../mdx-plugins/rehype-math.js';

class ErrorBoundary extends React.Component {
  state: {
    error: null | object;
  };

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ error });
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      this.setState({ error: null });
    }
  }

  render() {
    // @ts-ignore
    if (this.state.error) {
      // You can render any custom fallback UI
      return (
        <div>
          An error occurred:
          <pre className="mt-2 text-red-700">{this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function ({ markdown, debounce = 1000 }) {
  const [fn, setFn] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // See: https://github.com/mdx-js/mdx/blob/main/packages/runtime/src/index.js
    const compile = async () => {
      try {
        const fullScope = {
          mdx: createElement,
          MDXProvider,
          components,
          Problem,
          props: [],
        };

        console.time('compile');

        const { data, content: frontMatterCodeResult } = grayMatter(markdown);

        const content = `${frontMatterCodeResult}

export const _frontmatter = ${JSON.stringify(data)}`;

        const jsx = (
          await mdx(content, {
            remarkPlugins: [remarkExternalLinks, remarkMath],
            rehypePlugins: [customRehypeKatex],
            skipExport: true,
          })
        ).trim();

        let code;
        try {
          code = transform(jsx, {
            presets: ['react'],
            compact: true,
          }).code;
        } catch (err) {
          console.log('transform error');
          console.error(err);
          throw err;
        }

        code = code.replace(/export const/g, 'const');

        const keys = Object.keys(fullScope);
        const values = Object.values(fullScope);

        // eslint-disable-next-line no-new-func
        const fn = new Function(
          '_fn',
          'React',
          ...keys,
          `${code}
          return React.createElement(MDXProvider, { components },
            React.createElement(MDXContent, props)
          );`
        );

        setFn(fn.bind(null, {}, React, ...values)());
        setError(null);

        console.timeEnd('compile');
      } catch (e) {
        console.log('liveupdate error caught:', e);
        setFn(null);
        setError(e);
      }
    };
    if (debounce > 0) {
      let id = setTimeout(compile, debounce);
      return () => clearTimeout(id);
    } else {
      compile();
    }
  }, [markdown]);
  if (error) {
    console.error(error);
    return (
      <div>
        An error occurred:
        <pre className="mt-2 text-red-700">
          {error.stack || error.toString()}
        </pre>
        <pre className="mt-2 text-red-700">
          This error has also been logged into the console.
        </pre>
      </div>
    );
  }
  return <ErrorBoundary>{fn}</ErrorBoundary>;
}

// Backup...
// import * as React from 'react';
// import { useEffect, useState } from 'react';
//
// import * as babel from '@babel/core';
// import * as objRestSpread from '@babel/plugin-proposal-object-rest-spread';
//
// import * as mdxToJs from 'gatsby-plugin-mdx/utils/mdx';
// import * as htmlAttrToJSXAttr from 'gatsby-plugin-mdx/utils/babel-plugin-html-attr-to-jsx-attr';
// import * as removeExportKeywords from 'gatsby-plugin-mdx/utils/babel-plugin-remove-export-keywords';
// import * as BabelPluginPluckImports from 'gatsby-plugin-mdx/utils/babel-plugin-pluck-imports';
// import * as rehypeKatex from 'rehype-katex';
// import * as remarkExternalLinks from 'remark-external-links';
// import * as remarkMath from 'remark-math';
// import * as babelPresetReact from '@babel/preset-react';
// import * as babelPresetEnv from '@babel/preset-env';
//
// import Markdown from '../components/markdown/Markdown';
//
// export default function ({ markdown }) {
//   const [body, setBody] = useState(null);
//   useEffect(() => {
//     (async () => {
//       try {
//         let code = await mdxToJs(markdown, {
//           defaultLayouts: {},
//           extensions: [`.mdx`],
//           mediaTypes: [`text/markdown`, `text/x-markdown`],
//           rehypePlugins: [rehypeKatex],
//           remarkPlugins: [remarkExternalLinks, remarkMath],
//           plugins: [],
//           root: process.cwd(),
//           gatsbyRemarkPlugins: [],
//           globalScope: `export default {}`,
//           shouldBlockNodeFromTransformation: () => false,
//         });
//         const instance = new BabelPluginPluckImports();
//         const result = babel.transform(code, {
//           configFile: false,
//           plugins: [
//             instance.plugin,
//             objRestSpread,
//             htmlAttrToJSXAttr,
//             removeExportKeywords,
//           ],
//           presets: [
//             babelPresetReact,
//             [
//               babelPresetEnv,
//               {
//                 useBuiltIns: `entry`,
//                 corejs: 2,
//                 modules: false,
//               },
//             ],
//           ],
//         });
//
//         const identifiers = Array.from(instance.state.identifiers);
//         const imports = Array.from(instance.state.imports);
//         if (!identifiers.includes(`React`)) {
//           identifiers.push(`React`);
//           imports.push(`import * as React from 'react'`);
//         }
//
//         let body = result.code
//           .replace(
//             /export\s*default\s*function\s*MDXContent\s*/,
//             `return function MDXContent`
//           )
//           .replace(
//             /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
//             `return MDXContent;`
//           );
//         setBody(body);
//       } catch (e) {
//         console.error('handling gracefully', e);
//       }
//     })();
//   }, [markdown]);
//   if (body === null) return null;
//   return <Markdown body={body} />;
// }
