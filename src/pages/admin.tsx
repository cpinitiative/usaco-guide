import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useEffect, useState } from 'react';

const babel = require(`@babel/core`);
const objRestSpread = require(`@babel/plugin-proposal-object-rest-spread`);

const mdxToJs = require(`gatsby-plugin-mdx/utils/mdx`);
const htmlAttrToJSXAttr = require(`gatsby-plugin-mdx/utils/babel-plugin-html-attr-to-jsx-attr`);
const removeExportKeywords = require(`gatsby-plugin-mdx/utils/babel-plugin-remove-export-keywords`);
const BabelPluginPluckImports = require(`gatsby-plugin-mdx/utils/babel-plugin-pluck-imports`);

import Markdown from '../components/markdown/Markdown';

const renderMarkdown = markdown => {
  const [body, setBody] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        let code = await mdxToJs(markdown, {
          defaultLayouts: {},
          extensions: [`.mdx`],
          mediaTypes: [`text/markdown`, `text/x-markdown`],
          rehypePlugins: [require('rehype-katex')],
          remarkPlugins: [
            require('remark-external-links'),
            require('remark-math'),
          ],
          plugins: [],
          root: process.cwd(),
          gatsbyRemarkPlugins: [],
          globalScope: `export default {}`,
          shouldBlockNodeFromTransformation: () => false,
        });
        const instance = new BabelPluginPluckImports();
        const result = babel.transform(code, {
          configFile: false,
          plugins: [
            instance.plugin,
            objRestSpread,
            htmlAttrToJSXAttr,
            removeExportKeywords,
          ],
          presets: [
            require(`@babel/preset-react`),
            [
              require(`@babel/preset-env`),
              {
                useBuiltIns: `entry`,
                corejs: 2,
                modules: false,
              },
            ],
          ],
        });

        const identifiers = Array.from(instance.state.identifiers);
        const imports = Array.from(instance.state.imports);
        if (!identifiers.includes(`React`)) {
          identifiers.push(`React`);
          imports.push(`import * as React from 'react'`);
        }

        let body = result.code
          .replace(
            /export\s*default\s*function\s*MDXContent\s*/,
            `return function MDXContent`
          )
          .replace(
            /export\s*{\s*MDXContent\s+as\s+default\s*};?/,
            `return MDXContent;`
          );
        console.log(body);
      } catch (e) {
        console.error('handling gracefully', e);
      }
    })();
  }, [markdown]);
  if (body === null) return null;
  return <Markdown body={body} />;
};

export default function AdminPage(props: PageProps) {
  const [markdown, setMarkdown] = useState('');

  return (
    <Layout>
      <SEO title="Admin Page" />

      <div className="h-screen flex">
        <div className="flex-1">
          <textarea
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            className="w-full border border-gray-200 h-screen overflow-y-auto"
            style={{ resize: 'none' }}
          />
        </div>
        <div className="flex-1 p-4 h-screen overflow-y-auto">
          {renderMarkdown(markdown)}
        </div>
      </div>
    </Layout>
  );
}
