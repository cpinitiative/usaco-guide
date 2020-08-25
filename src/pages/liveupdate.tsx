// import * as React from "react";
//
// export default function Placeholder() {
//   return <div>This placeholder greatly speeds up build times. Uncomment this code and comment out everything below it. Make sure to undo before pushing.</div>
// }

import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useState } from 'react';

const RawMarkdownRenderer = React.lazy(() =>
  import('../components/LiveUpdateMarkdownRenderer')
);

export default function LiveUpdatePage(props: PageProps) {
  const [markdown, setMarkdown] = useState('');

  return (
    <Layout>
      <SEO title="Admin Page" />

      <div className="h-screen flex">
        <div className="flex-1">
          <textarea
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            className="w-full border border-gray-200 h-screen overflow-y-auto p-4 bg-gray-50 font-mono tracking-tight"
            placeholder="Enter mdx here..."
            style={{ resize: 'none' }}
          />
        </div>
        <div className="flex-1 p-4 h-screen overflow-y-auto">
          <div className="markdown">
            {typeof window !== 'undefined' && (
              <React.Suspense fallback={'Loading'}>
                <RawMarkdownRenderer markdown={markdown} />
              </React.Suspense>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
