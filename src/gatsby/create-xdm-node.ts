import { createContentDigest } from 'gatsby-core-utils';
import graymatter from 'gray-matter';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkExternalLinks from 'remark-external-links';
import remarkFrontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkSlug from 'remark-slug';
import customRehypeKatex from '../mdx-plugins/rehype-math';
import rehypeSnippets from '../mdx-plugins/rehype-snippets';
import remarkHtmlNodes from '../mdx-plugins/remark-html-nodes.js';
import remarkToC from '../mdx-plugins/remark-toc';
import getGatsbyImage from './wrapped-gatsby-img-plugin';
import { xdm } from './xdm';

// todo: migrate to resolver for even better development performance

export async function createXdmNode({ id, node, content }, api) {
  let xdmNode: any = {
    id,
    children: [],
    parent: node.id,
    internal: {
      content: content,
      type: `Xdm`,
    },
  };

  let compiledResult;
  const tableOfContents = {};

  const gatsbyImage = getGatsbyImage({
    ...api,
    xdmNode,
  });

  try {
    compiledResult = await xdm.compile(content, {
      remarkPlugins: [
        gfm,
        remarkMath,
        remarkExternalLinks,
        remarkFrontmatter,
        remarkMdxFrontmatter,
        [remarkToC, { tableOfContents }],
        remarkSlug,
        [
          remarkAutolinkHeadings,
          {
            linkProperties: {
              ariaHidden: 'true',
              tabIndex: -1,
              className: 'anchor before',
            },
            content: {
              type: 'mdxJsxFlowElement',
              name: 'HeaderLink',
            },
          },
        ],
        gatsbyImage,
        remarkHtmlNodes,
      ],
      rehypePlugins: [customRehypeKatex, rehypeSnippets],
    });
    compiledResult = String(compiledResult);
  } catch (e) {
    // add the path of the file to simplify debugging error messages
    e.message += `${node.absolutePath}: ${e.message}`;
    throw e;
  }
  compiledResult = compiledResult.replace(
    /import .* from "react\/jsx-runtime";/,
    ''
  );
  compiledResult = compiledResult.replace(
    `function MDXContent(_props) {`,
    'function MDXContent(_Fragment, _jsx, _jsxs, _props) {'
  );
  compiledResult = compiledResult.replace(
    'export default MDXContent',
    'return MDXContent'
  );
  compiledResult = compiledResult.replace('export const ', 'const ');

  // // extract all the exports
  // const { frontmatter, ...nodeExports } = extractExports(
  //   code,
  //   node.absolutePath
  // )

  const { data: frontmatter } = graymatter(content);
  xdmNode = {
    ...xdmNode,
    body: compiledResult,
    frontmatter,
    isIncomplete: content.indexOf('<IncompleteSection') !== -1,
    toc: tableOfContents,
  };

  // xdmNode.exports = nodeExports

  // Add path to the markdown file path
  if (node.internal.type === `File`) {
    xdmNode.fileAbsolutePath = node.absolutePath;
  }

  xdmNode.internal.contentDigest = createContentDigest(xdmNode);

  return xdmNode;
}
