import type { compile as mdxCompile } from '@mdx-js/mdx';

type ProblemsListEntry = { listId: string; problems: any };

type LoadedCompilerDeps = {
  compile: typeof mdxCompile;
  rehypeAutolinkHeadings: any;
  rehypeExternalLinks: any;
  rehypeRaw: any;
  rehypeSlug: any;
  remarkFrontmatter: any;
  remarkGfm: any;
  remarkMath: any;
  remarkMdxFrontmatter: any;
  customRehypeKatex: any;
  rehypeSnippets: any;
  remarkExtractImages: any;
  remarkToC: any;
};

let depsPromise: Promise<LoadedCompilerDeps> | null = null;

async function loadCompilerDeps(): Promise<LoadedCompilerDeps> {
  if (!depsPromise) {
    depsPromise = (async () => {
      const [
        { compile },
        { default: rehypeAutolinkHeadings },
        { default: rehypeExternalLinks },
        { default: rehypeRaw },
        { default: rehypeSlug },
        { default: remarkFrontmatter },
        { default: remarkGfm },
        { default: remarkMath },
        { default: remarkMdxFrontmatter },
        { default: customRehypeKatex },
        { default: rehypeSnippets },
        { default: remarkExtractImages },
        { default: remarkToC },
      ] = await Promise.all([
        import('@mdx-js/mdx'),
        import('rehype-autolink-headings'),
        import('rehype-external-links'),
        import('rehype-raw'),
        import('rehype-slug'),
        import('remark-frontmatter'),
        import('remark-gfm'),
        import('remark-math'),
        import('remark-mdx-frontmatter'),
        import('../mdx-plugins/rehype-math'),
        import('../mdx-plugins/rehype-snippets'),
        import('../mdx-plugins/remark-extract-images'),
        import('../mdx-plugins/remark-toc'),
      ]);

      return {
        compile,
        rehypeAutolinkHeadings,
        rehypeExternalLinks,
        rehypeRaw,
        rehypeSlug,
        remarkFrontmatter,
        remarkGfm,
        remarkMath,
        remarkMdxFrontmatter,
        customRehypeKatex,
        rehypeSnippets,
        remarkExtractImages,
        remarkToC,
      };
    })();
  }
  return depsPromise;
}

function toProblemsList(problems: string): ProblemsListEntry[] {
  const parsedProblems = JSON.parse(problems || '{}');
  return Object.keys(parsedProblems)
    .filter(key => key !== 'MODULE_ID')
    .map(key => ({
      listId: key,
      problems: parsedProblems[key],
    }));
}

export async function compileMdxForEditor({
  markdown,
  problems,
}: {
  markdown: string;
  problems: string;
}): Promise<{
  compiledResult: string;
  problemsList: ProblemsListEntry[];
}> {
  const deps = await loadCompilerDeps();

  const problemsList = toProblemsList(problems);
  const tableOfContents: any = {};

  const compiled = await deps.compile(
    markdown.replace(/<!--/g, '{/* ').replace(/-->/g, '*/}'),
    {
      remarkPlugins: [
        deps.remarkGfm,
        deps.remarkMath,
        deps.remarkFrontmatter,
        [deps.remarkMdxFrontmatter, { name: 'frontmatter' }],
        [deps.remarkToC, { tableOfContents }],
        [deps.remarkExtractImages],
      ],
      rehypePlugins: [
        deps.rehypeSlug,
        [
          deps.rehypeRaw,
          {
            passThrough: [
              'mdxjsEsm',
              'mdxFlowExpression',
              'mdxTextExpression',
              'mdxJsxFlowElement',
              'mdxJsxTextElement',
            ],
          },
        ],
        deps.customRehypeKatex,
        deps.rehypeSnippets,
        [deps.rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] }],
        [
          deps.rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: {
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
      outputFormat: 'function-body',
      jsxImportSource: 'react',
    }
  );

  return {
    compiledResult: String(compiled),
    problemsList,
  };
}
