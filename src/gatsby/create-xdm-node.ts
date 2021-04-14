import { xdm } from "./xdm";

console.log(xdm.compileSync(":)"));

// export function createXdmNode({ id, node, content }) {
//   console.log("creating xdm node");
//   const xdm = require("xdm");
//   console.log(xdm);
// }

// // import { compile as xdmCompile } from "xdm";
// // import remarkMath from 'remark-math';
// // import remarkExternalLinks from 'remark-external-links';
// // import remarkFrontmatter from 'remark-frontmatter';
// // import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
// // import customRehypeKatex from '../mdx-plugins/rehype-math';
// // import rehypeSnippets from '../mdx-plugins/rehype-snippets';
// // import { createContentDigest } from "gatsby-core-utils";
//
// async function createXdmNode({ id, node, content }) {
//   const xdm = await import("xdm");
//   // console.log(eval(`(async function() { return await import("xdm"); }())`));
//   console.log(xdm);
//
//   // let compiledResult;
//   // // try {
//   // //   compiledResult = await xdmCompile(content, {
//   // //     remarkPlugins: [
//   // //       remarkMath,
//   // //       remarkExternalLinks,
//   // //       remarkFrontmatter,
//   // //       remarkMdxFrontmatter,
//   // //     ],
//   // //     rehypePlugins: [customRehypeKatex, rehypeSnippets],
//   // //   });
//   // // } catch (e) {
//   // //   // add the path of the file to simplify debugging error messages
//   // //   e.message += `${node.absolutePath}: ${e.message}`
//   // //   throw e
//   // // }
//   //
//   // // extract all the exports
//   // // const { frontmatter, ...nodeExports } = extractExports(
//   // //   code,
//   // //   node.absolutePath
//   // // )
//   //
//   // const xdmNode = {
//   //   id,
//   //   children: [],
//   //   parent: node.id,
//   //   internal: {
//   //     content: content,
//   //     type: `Xdm`,
//   //   },
//   //   body: compiledResult,
//   // }
//   //
//   // // xdmNode.frontmatter = {
//   // //   title: ``, // always include a title
//   // //   ...frontmatter,
//   // // }
//   //
//   // // xdmNode.exports = nodeExports
//   //
//   // // Add path to the markdown file path
//   // if (node.internal.type === `File`) {
//   //   xdmNode.fileAbsolutePath = node.absolutePath
//   // }
//   //
//   // xdmNode.internal.contentDigest = createContentDigest(xdmNode)
//   //
//   // return xdmNode
// }
//
// module.exports = createXdmNode;