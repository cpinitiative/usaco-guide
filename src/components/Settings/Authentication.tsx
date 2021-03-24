import * as React from 'react';

export default function Authentication() {
  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Sign In Methods
        </h3>
      </div>
      <div className="h-4" />
      <p>
        Currently, we only support Sign In with Google. Github authentication is
        coming soon!
      </p>
    </div>
  );
}
