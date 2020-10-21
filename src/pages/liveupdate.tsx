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
import Editor from '@monaco-editor/react';

const RawMarkdownRenderer = React.lazy(() =>
  import('../components/LiveUpdateMarkdownRenderer')
);

export default function LiveUpdatePage(props: PageProps) {
  const [markdown, setMarkdown] = useState('');

  return (
    <Layout>
      <SEO title="MDX Renderer" />
      <div className="h-screen grid grid-cols-2">
        <div className="col-span-1">
          <Editor theme="dark" language="markdown" value={markdown} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </Layout>
  );
}
