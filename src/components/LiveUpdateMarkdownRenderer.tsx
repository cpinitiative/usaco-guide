import * as React from 'react';
import { useEffect, useState } from 'react';

import { transform } from 'buble-jsx-only';
import mdx from '@mdx-js/mdx';
import { MDXProvider, mdx as createElement } from '@mdx-js/react';
import * as rehypeKatex from 'rehype-katex';
import * as remarkExternalLinks from 'remark-external-links';
import * as remarkMath from 'remark-math';

import { components } from './markdown/MDXProvider';
import { Problem } from '../models/problem';

export default function ({ markdown }) {
  const [fn, setFn] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const fullScope = {
          mdx: createElement,
          MDXProvider,
          components,
          Problem,
          props: [],
        };

        const jsx = (
          await mdx(markdown, {
            remarkPlugins: [remarkExternalLinks, remarkMath],
            rehypePlugins: [rehypeKatex],
            skipExport: true,
          })
        ).trim();

        let code;
        try {
          code = transform(jsx, {
            objectAssign: 'Object.assign',
          }).code;
        } catch (err) {
          console.error(err);
          throw err;
        }

        code = code.replace('export const', 'const');

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

        setFn(fn.bind(null, {}, React, ...values));
      } catch (e) {
        console.log('error', e);
      }
    })();
  }, [markdown]);
  return fn;
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
