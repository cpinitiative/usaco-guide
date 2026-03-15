import * as React from 'react';

export default class GlobalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null; info: any }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Caught error:', error, info);
    this.setState({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mt-8 px-4">
          <div className="text-center text-2xl font-bold md:text-4xl">
            You have encountered an error
          </div>
          <pre className="mx-auto mt-4 max-w-5xl overflow-x-auto font-mono">
            {this.state.error?.stack}
            {'\n\n'}
            Component Stack:{this.state.info?.componentStack}
          </pre>
          <p className="mt-8 text-center">
            Try{' '}
            <a
              href="mailto:usacoguide@gmail.com"
              target="_blank"
              className="text-blue-600 underline dark:text-blue-400"
              rel="noreferrer"
            >
              emailing us
            </a>
            ,{' '}
            <a
              href="https://github.com/cpinitiative/usaco-guide/issues"
              target="_blank"
              className="text-blue-600 underline dark:text-blue-400"
              rel="noreferrer"
            >
              opening a GitHub issue
            </a>
            , or reloading the page. Include steps to reproduce + the stack
            trace above.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
