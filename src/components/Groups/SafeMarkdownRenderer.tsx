import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function SafeMarkdownRenderer({ children }) {
  return (
    <div className="prose dark:prose-light max-w-none">
      <ReactMarkdown plugins={[gfm]}>{children}</ReactMarkdown>
    </div>
  );
}
