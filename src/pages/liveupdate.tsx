// import * as React from "react";
//
// export default function Placeholder() {
//   return <div>This placeholder greatly speeds up build times. Uncomment this code and comment out everything below it. Make sure to undo before pushing.</div>
// }

import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import useStickyState from '../hooks/useStickyState';
import Split from 'react-split';
import styled from 'styled-components';
import { useRef } from 'react';

const RawMarkdownRenderer = React.lazy(
  () => import('../components/DynamicMarkdownRenderer')
);

const Editor = React.lazy(() =>
  import('@monaco-editor/react').then(module => ({
    default: module.ControlledEditor,
  }))
);

const StyledSplit = styled(Split)`
  & > div,
  & > .gutter.gutter-horizontal {
    float: left;
    height: 100%;
  }

  & > .gutter.gutter-horizontal {
    cursor: ew-resize;
  }
`;

export default function LiveUpdatePage(props: PageProps) {
  const [markdown, setMarkdown] = useStickyState(
    '',
    'guide:liveupdate:markdown'
  );

  const editor = useRef();

  return (
    <Layout>
      <SEO title="MDX Renderer" />
      <div className="h-screen flex flex-col">
        <TopNavigationBar hideClassesPromoBar={true} />

        {typeof window !== 'undefined' && (
          <React.Suspense
            fallback={
              <div className="text-center mt-6 font-bold text-2xl">Loading</div>
            }
          >
            <StyledSplit
              className="h-full relative flex-1 overflow-hidden"
              onDrag={() => {
                if (editor.current !== undefined) editor.current.layout();
              }}
            >
              <div className="h-full" style={{ minWidth: '300px' }}>
                <Editor
                  theme="dark"
                  language="markdown"
                  value={markdown}
                  onChange={(e, v) => setMarkdown(v)}
                  options={{ wordWrap: 'on' }}
                  editorDidMount={(_, e) => {
                    editor.current = e;
                    setTimeout(() => {
                      e.layout();
                      e.focus();
                    }, 0);
                  }}
                />
              </div>
              <div
                className="overflow-y-auto relative"
                style={{ maxWidth: 'calc(100% - 310px)' }}
              >
                <div className="markdown p-4">
                  <RawMarkdownRenderer markdown={markdown} />
                </div>
              </div>
            </StyledSplit>
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
}
