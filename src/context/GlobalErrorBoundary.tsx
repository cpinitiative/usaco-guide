import * as Sentry from '@sentry/gatsby';
import * as React from 'react';

const GlobalErrorBoundary = ({ children }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <div className="mt-8 px-4">
          <div className="text-2xl md:text-4xl font-bold text-center">
            You have encountered an error
          </div>
          <pre className="font-mono max-w-5xl mx-auto overflow-x-auto mt-4">
            {error.toString()}
            {componentStack}
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
            </a>{' '}
            or{' '}
            <a
              href="https://github.com/cpinitiative/usaco-guide/issues"
              target="_blank"
              className="text-blue-600 underline dark:text-blue-400"
              rel="noreferrer"
            >
              opening a Github issue
            </a>
            . Include steps to reproduce + the stack trace above.
          </p>
          <div className="text-center mt-4">
            <button
              className="btn"
              onClick={() => {
                resetError();
              }}
            >
              Click here to reset the application (or try reloading the page)
            </button>
          </div>
        </div>
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default GlobalErrorBoundary;

// the error boundary below didn't report issues to gatsby
// export default class GlobalErrorBoundary extends React.Component {
//   static contextType = NotificationSystemContext;
//
//   componentDidCatch(error, info) {
//     console.error('Caught error:', error, info);
//     this.context.showErrorNotification(error);
//   }
//
//   render() {
//     return this.props.children;
//   }
// }
