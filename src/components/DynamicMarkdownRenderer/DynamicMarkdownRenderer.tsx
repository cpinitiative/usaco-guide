import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line
// @ts-ignore
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { MarkdownProblemListsProvider } from '../../context/MarkdownProblemListsContext';
import { compileMdxForEditor } from '../../lib/compileMdxForEditor';
import { components } from '../markdown/MDXComponents';

class ErrorBoundary extends React.Component<{ children?: React.ReactNode }> {
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
          <p className="mt-2 font-mono text-sm text-red-700">
            {this.state.error.toString()}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function DynamicMarkdownRenderer({
  markdown,
  problems,
}: {
  markdown: string;
  problems: string;
}): JSX.Element {
  const [mdxContent, setMdxContent] = useState(null);
  const [
    markdownProblemListsProviderValue,
    setMarkdownProblemListsProviderValue,
  ] = useState([]);
  const [error, setError] = useState<Error | null>(null);
  const compileSeqRef = useRef(0);

  useEffect(() => {
    const seq = ++compileSeqRef.current;
    const nextMarkdown = markdown ?? '';
    const nextProblems = problems ?? '';

    setMdxContent(null);

    (async () => {
      try {
        const { compiledResult, problemsList } = await compileMdxForEditor({
          markdown: nextMarkdown,
          problems: nextProblems,
        });

        const content = new Function(compiledResult)({
          Fragment,
          jsx,
          jsxs,
        }).default({ components });

        if (compileSeqRef.current !== seq) return;
        setError(null);
        setMdxContent(content);
        setMarkdownProblemListsProviderValue(problemsList);
      } catch (e) {
        if (compileSeqRef.current !== seq) return;
        const err =
          e instanceof Error ? e : new Error('Unknown Error: ' + String(e));
        setError(err);
        setMdxContent(null);
      }
    })();
  }, [markdown, problems]);

  if (error) {
    console.error(error);
    return (
      <div>
        An error occurred:
        <p className="mt-2 font-mono text-sm text-red-700 dark:text-red-400">
          {error.message || error.toString()}
        </p>
        <p className="mt-2 font-mono text-sm text-red-700 dark:text-red-400">
          This error has also been logged to the console.
        </p>
      </div>
    );
  }

  if (!mdxContent) {
    return <p className="text-sm text-gray-600 dark:text-gray-300">Compiling…</p>;
  }

  return (
    <ErrorBoundary>
      <MarkdownProblemListsProvider value={markdownProblemListsProviderValue}>
        {mdxContent}
      </MarkdownProblemListsProvider>
    </ErrorBoundary>
  );
}
