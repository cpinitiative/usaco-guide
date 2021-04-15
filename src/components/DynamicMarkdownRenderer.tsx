import * as React from 'react';
import { useEffect,useState } from 'react';
import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs
} from 'react/jsx-runtime';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkExternalLinks from 'remark-external-links';
import remarkFrontmatter from 'remark-frontmatter';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import remarkSlug from 'remark-slug';
import { compile as xdmCompile } from 'xdm';
import { MarkdownProblemListsProvider } from '../context/MarkdownProblemListsContext.js';
import customRehypeKatex from '../mdx-plugins/rehype-math.js';
import rehypeSnippets from '../mdx-plugins/rehype-snippets.js';
import remarkHtmlNodes from '../mdx-plugins/remark-html-nodes.js';
import remarkToC from "../mdx-plugins/remark-toc.js";

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
  const [fn, setFn] = useState(null);
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
            remarkHtmlNodes,
          ],
          rehypePlugins: [customRehypeKatex, rehypeSnippets],
        });

        let code = String(compiledResult);
        code = code.replace(/import .* from "react\/jsx-runtime";/, '');
        code = code.replace(
          `function MDXContent(_props) {`,
          'function MDXContent(_Fragment, _jsx, _jsxs, _props) {'
        );
        code = code.replace('export default MDXContent', 'return MDXContent');
        code = code.replace('export const ', 'const ');

        // console.log(code);

        setFn(new Function(code));
        setMarkdownError(null);

        console.timeEnd('compile');
      } catch (e) {
        console.log('editor error caught:', e);
        setFn(null);
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
        <pre className="mt-2 text-red-700">
          {markdownError.stack || markdownError.toString()}
        </pre>
        <pre className="mt-2 text-red-700">
          This error has also been logged into the console.
        </pre>
      </div>
    );
  }

  if (problemError) {
    console.error(problemError);
    return (
      <div>
        An error occurred while generating the problem solution info. This
        likely means that the JSON data for problems is incorrect.
        <pre className="mt-2 text-red-700">
          {problemError.stack || problemError.toString()}
        </pre>
        <pre className="mt-2 text-red-700">
          This error has also been logged into the console.
        </pre>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <MarkdownProblemListsProvider value={markdownProblemListsProviderValue}>
        {fn && fn(_Fragment, _jsx, _jsxs, { components })}
      </MarkdownProblemListsProvider>
    </ErrorBoundary>
  );
}
