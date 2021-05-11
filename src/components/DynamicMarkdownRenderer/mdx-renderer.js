import { compile as xdmCompile } from 'xdm/lib/compile';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkExternalLinks from 'remark-external-links';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkToC from '../../mdx-plugins/remark-toc';
import customRehypeKatex from '../../mdx-plugins/rehype-math';
import rehypeSnippets from '../../mdx-plugins/rehype-snippets';

// See: https://github.com/mdx-js/mdx/blob/main/packages/runtime/src/index.js
const compile = async ({ markdown, problems }) => {
  try {
    console.time('compile');

    const parsedProblems = JSON.parse(problems || '{}');
    const problemsList = Object.keys(parsedProblems)
      .filter(key => key !== 'MODULE_ID')
      .map(key => ({
        listId: key,
        problems: parsedProblems[key],
      }));

    const tableOfContents = {};
    const compiledResult = await xdmCompile(
      markdown.replace(/<!--/g, '{/* ').replace(/-->/g, '*/}'),
      {
        remarkPlugins: [
          gfm,
          remarkMath,
          remarkExternalLinks,
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }],
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
        ],
        rehypePlugins: [customRehypeKatex, rehypeSnippets],
        outputFormat: 'function-body',
      }
    );

    const code = String(compiledResult);

    postMessage({
      compiledResult: code,
      problemsList,
    });

    console.timeEnd('compile');
  } catch (e) {
    console.timeEnd('compile');
    console.log('editor error caught:', e);

    postMessage({
      error: e,
    });
  }
};

onmessage = e => {
  compile(e.data);
};
