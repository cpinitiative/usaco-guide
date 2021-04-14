import { createContentDigest } from 'gatsby-core-utils';
import graymatter from 'gray-matter';
import remarkExternalLinks from 'remark-external-links';
import remarkMath from 'remark-math';
import customRehypeKatex from '../mdx-plugins/rehype-math';
import rehypeSnippets from '../mdx-plugins/rehype-snippets';
import { xdm } from './xdm';

export async function createXdmNode({ id, node, content }) {
  const { content: markdown, data: frontmatter } = graymatter(content);

  let compiledResult;
  try {
    compiledResult = await xdm.compile(markdown, {
      remarkPlugins: [
        remarkMath,
        remarkExternalLinks,
        // remarkFrontmatter,
        // remarkMdxFrontmatter,
      ],
      rehypePlugins: [customRehypeKatex, rehypeSnippets],
    });
  } catch (e) {
    // add the path of the file to simplify debugging error messages
    e.message += `${node.absolutePath}: ${e.message}`;
    throw e;
  }

  // // extract all the exports
  // const { frontmatter, ...nodeExports } = extractExports(
  //   code,
  //   node.absolutePath
  // )

  const xdmNode: any = {
    id,
    children: [],
    parent: node.id,
    internal: {
      content: content,
      type: `Xdm`,
    },
    body: String(compiledResult),
    frontmatter,
  };

  // xdmNode.exports = nodeExports

  // Add path to the markdown file path
  if (node.internal.type === `File`) {
    xdmNode.fileAbsolutePath = node.absolutePath;
  }

  xdmNode.internal.contentDigest = createContentDigest(xdmNode);

  return xdmNode;
}
