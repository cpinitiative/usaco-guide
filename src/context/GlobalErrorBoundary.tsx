import * as React from 'react';
import { githubRepoUrl } from '../config';

export default class GlobalErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null; info: React.ErrorInfo | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Caught error:', error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      const isDev = process.env.NODE_ENV !== 'production';
      return (
        <div className="mt-8 px-4">
          <div className="text-center text-2xl font-bold md:text-4xl">
            You have encountered an error
          </div>
          {isDev && (
            <>
              <pre className="mx-auto mt-4 max-w-5xl overflow-x-auto font-mono">
                {this.state.error?.stack}
                {'\n\n'}
                Component Stack:{this.state.info?.componentStack}
              </pre>
            </>
          )}
          <div className="mx-auto mt-4 max-w-2xl rounded-md bg-blue-50 p-4 dark:bg-blue-900">
            <p className="text-center text-blue-800 dark:text-blue-200">
              Something went wrong. Please try reloading the page. If the
              problem persists,{' '}
              <a
                href="mailto:usacoguide@gmail.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact us
              </a>{' '}
              or open a{' '}
              <a
                href={githubRepoUrl('/issues')}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub issue
              </a>
              .
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

