import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
// @ts-ignore
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Worker from 'worker-loader!./mdx-renderer.js';
import { MarkdownProblemListsProvider } from '../../context/MarkdownProblemListsContext';
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
  const [
    markdownProblemListsProviderValue,
    setMarkdownProblemListsProviderValue,
  ] = useState([]);
  const [error, setError] = useState(null);
  const workerRef = useRef(null);
  const currentlyCompilingRef =
    useRef<{
      markdown: string;
      problems: string;
    }>(null);
  const waitingToBeCompiledRef =
    useRef<{
      markdown: string;
      problems: string;
    }>(null);

  const requestMarkdownCompilation = () => {
    if (workerRef.current === null) return;
    if (currentlyCompilingRef.current !== null) return;
    const data = waitingToBeCompiledRef.current;
    if (data === null) return;
    currentlyCompilingRef.current = data;
    waitingToBeCompiledRef.current = null;
    workerRef.current.postMessage(data);
  };

  React.useEffect(() => {
    const worker = new Worker();
    worker.onmessage = ({ data }) => {
      currentlyCompilingRef.current = null;
      ReactDOM.unstable_batchedUpdates(() => {
        if (data.compiledResult) {
          setMdxContent(
            new Function(data.compiledResult)({
              Fragment,
              jsx,
              jsxs,
            }).default({ components })
          );
          setMarkdownProblemListsProviderValue(data.problemsList);
          setError(null);
        } else {
          setError(data.error);
          setMdxContent(null);
        }
      });
      requestMarkdownCompilation();
    };
    workerRef.current = worker;
    requestMarkdownCompilation();
    return () => worker.terminate();
  }, []);

  useEffect(() => {
    waitingToBeCompiledRef.current = {
      markdown: markdown ?? '',
      problems,
    };
    requestMarkdownCompilation();
  }, [markdown, problems]);

  if (error) {
    console.error(error);
    return (
      <div>
        An error occurred:
        <p className="mt-2 text-red-700 dark:text-red-400 font-mono text-sm">
          {error.message || error.toString()}
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
