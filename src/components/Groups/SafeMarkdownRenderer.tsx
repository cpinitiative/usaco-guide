import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export default function SafeMarkdownRenderer({ children }) {
  return (
    <div className="prose dark:prose-light max-w-none">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
