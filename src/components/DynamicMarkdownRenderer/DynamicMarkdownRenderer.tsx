import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line
// @ts-ignore
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Worker from 'worker-loader!./mdx-renderer.js';
import { MarkdownProblemListsProvider } from '../../context/MarkdownProblemListsContext';
import { getProblemInfo } from '../../models/problem';
import { components } from '../markdown/MDXComponents';

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
          <p className="mt-2 text-red-700 font-mono text-sm">
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
  const [markdownError, setMarkdownError] = useState(null);
  const [problemError, setProblemError] = useState(null);
  const workerRef = useRef(null);
  const currentlyCompilingRef = useRef<string>(null);
  const waitingToBeCompiledRef = useRef<string>(null);

  const requestMarkdownCompilation = () => {
    if (workerRef.current === null) return;
    if (currentlyCompilingRef.current !== null) return;
    const markdown = waitingToBeCompiledRef.current;
    if (markdown === null) return;
    currentlyCompilingRef.current = markdown;
    waitingToBeCompiledRef.current = null;
    workerRef.current.postMessage({ markdown });
  };

  React.useEffect(() => {
    const worker = new Worker();
    worker.onmessage = ({ data }) => {
      currentlyCompilingRef.current = null;
      if (data.compiledResult) {
        setMdxContent(
          new Function(data.compiledResult)({
            Fragment,
            jsx,
            jsxs,
          }).default({ components })
        );
        setMarkdownError(null);
      } else {
        setMarkdownError(data.error);
        setMdxContent(null);
      }
      requestMarkdownCompilation();
    };
    workerRef.current = worker;
    requestMarkdownCompilation();
    return () => worker.terminate();
  }, []);

  useEffect(() => {
    waitingToBeCompiledRef.current = markdown;
    requestMarkdownCompilation();
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
        <p className="mt-2 text-red-700 dark:text-red-400 font-mono text-sm">
          {markdownError.message || markdownError.toString()}
        </p>
        <p className="mt-2 text-red-700 dark:text-red-400 font-mono text-sm">
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
        <p className="mt-2 text-red-700 dark:text-red-400 font-mono text-sm">
          {problemError.toString()}
        </p>
        <p className="mt-2 text-red-700 dark:text-red-400 font-mono text-sm">
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
