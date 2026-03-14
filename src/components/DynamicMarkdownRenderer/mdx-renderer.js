import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import remarkFrontmatter from "remark-frontmatter";
import gfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import { compile as mdxCompile } from "@mdx-js/mdx";
import customRehypeKatex from "../../mdx-plugins/rehype-math";
import rehypeSnippets from "../../mdx-plugins/rehype-snippets";
import remarkToC from "../../mdx-plugins/remark-toc";

// See: https://github.com/mdx-js/mdx/blob/main/packages/runtime/src/index.js
const compile = async ({ markdown, problems }) => {
  try {
    console.time("compile");

    const parsedProblems = JSON.parse(problems || "{}");
    const problemsList = Object.keys(parsedProblems)
      .filter((key) => key !== "MODULE_ID")
      .map((key) => ({
        listId: key,
        problems: parsedProblems[key],
      }));

    const tableOfContents = {};
    const compiledResult = await mdxCompile(
      markdown.replace(/<!--/g, "{/* ").replace(/-->/g, "*/}"),
      {
        remarkPlugins: [
          gfm,
          remarkMath,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "frontmatter" }],
          [remarkToC, { tableOfContents }],
        ],
        rehypePlugins: [
          rehypeSlug,
          customRehypeKatex,
          rehypeSnippets,
          [rehypeExternalLinks, { target: "_blank", rel: ["nofollow"] }],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "prepend",
              properties: {
                ariaHidden: "true",
                tabIndex: -1,
                className: "anchor before",
              },
              content: {
                type: "mdxJsxFlowElement",
                name: "HeaderLink",
              },
            },
          ],
        ],
        outputFormat: "function-body",
        jsxImportSource: "react",
      },
    );

    const code = String(compiledResult);

    postMessage({
      compiledResult: code,
      problemsList,
    });

    console.timeEnd("compile");
  } catch (e) {
    console.timeEnd("compile");
    console.log("editor error caught:", e);

    postMessage({
      error: e,
    });
  }
};

onmessage = (e) => {
  compile(e.data);
};
