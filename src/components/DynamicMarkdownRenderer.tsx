import * as React from 'react';
import { useEffect, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkExternalLinks from 'remark-external-links';
import remarkFrontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkSlug from 'remark-slug';
import { compile as xdmCompile } from 'xdm';
import { MarkdownProblemListsProvider } from '../context/MarkdownProblemListsContext';
import customRehypeKatex from '../mdx-plugins/rehype-math.js';
import rehypeSnippets from '../mdx-plugins/rehype-snippets.js';
import remarkToC from '../mdx-plugins/remark-toc.js';
import { getProblemInfo } from '../models/problem';
import { components } from './markdown/MDXComponents';
class ErrorBoundary extends React.Component {
  state: {
    error: null | any;
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

export default function DynamicMarkdownRenderer({
  markdown,
  problems,
  debounce = 200,
}): JSX.Element {
  const [mdxContent, setMdxContent] = useState(null);
  const [markdownError, setMarkdownError] = useState(null);
  const [problemError, setProblemError] = useState(null);

  useEffect(() => {
    // See: https://github.com/mdx-js/mdx/blob/main/packages/runtime/src/index.js
    const compile = async () => {
      try {
        console.time('compile');

        const tableOfContents = {};
        const compiledResult = await xdmCompile(markdown, {
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
        });

        const code = String(compiledResult);

        // console.log(code);

        setMdxContent(
          new Function(code)({
            Fragment,
            jsx,
            jsxs,
          }).default({ components })
        );
        setMarkdownError(null);

        console.timeEnd('compile');
      } catch (e) {
        console.log('editor error caught:', e);
        setMdxContent(null);
        setMarkdownError(e);
      }
    };
    if (debounce > 0) {
      const id = setTimeout(compile, debounce);
      return () => clearTimeout(id);
    } else {
      compile();
    }
  }, [markdown]);

  const [
    markdownProblemListsProviderValue,
    setMarkdownProblemListsProviderValue,
  ] = useState([]);
  useEffect(() => {
    try {
      const parsedProblems = JSON.parse(problems || '{}');
      const problemsList = Object.keys(parsedProblems)
        .filter(key => key !== 'MODULE_ID')
        .map(key => ({
          listId: key,
          problems: parsedProblems[key].map(problemMetadata =>
            getProblemInfo(problemMetadata)
          ),
        }));
      setMarkdownProblemListsProviderValue(problemsList);
      setProblemError(null);
    } catch (e) {
      setProblemError(e);
    }
  }, [problems]);

  if (markdownError) {
    console.error(markdownError);
    return (
      <div>
        An error occurred:
        <p className="mt-2 text-red-700 font-mono text-sm">
          {markdownError.stack || markdownError.toString()}
        </p>
        <p className="mt-2 text-red-700 font-mono text-sm">
          This error has also been logged to the console.
        </p>
      </div>
    );
  }

  if (problemError) {
    console.error(problemError);
    return (
      <div>
        An error occurred while generating the problem solution info. This
        typically indicates an error in the problems JSON file:
        <p className="mt-2 text-red-700 font-mono text-sm">
          {problemError.stack || problemError.toString()}
        </p>
        <p className="mt-2 text-red-700 font-mono text-sm">
          This error has also been logged to the console.
        </p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <MarkdownProblemListsProvider value={markdownProblemListsProviderValue}>
        {mdxContent}
      </MarkdownProblemListsProvider>
    </ErrorBoundary>
  );
}
