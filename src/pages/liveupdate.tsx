// import * as React from "react";
//
// export default function Placeholder() {
//   return <div>This placeholder greatly speeds up build times. Uncomment this code and comment out everything below it. Make sure to undo before pushing.</div>
// }

import * as React from 'react';
import { Suspense } from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useState } from 'react';

const RawMarkdownRenderer = React.lazy(() =>
  import('../components/LiveUpdateMarkdownRenderer')
);

const Editor = React.lazy(() => import('@monaco-editor/react'));

export default function LiveUpdatePage(props: PageProps) {
  const [markdown, setMarkdown] = useState('');

  return (
    <Layout>
      <SEO title="MDX Renderer" />
      <div className="h-screen grid grid-cols-2">
        <div className="col-span-1">
          <Suspense fallback={<div>Loading...</div>}>
            <Editor theme="dark" language="markdown" value={markdown} />
          </Suspense>
        </div>
        <div className="col-span-1"></div>
      </div>
    </Layout>
  );
}
