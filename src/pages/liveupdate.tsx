// import * as React from 'react';
//
// export default function Placeholder() {
//   return (
//     <div data-testid="build-placeholder">
//       This placeholder greatly speeds up build times. Uncomment this code and
//       comment out everything below it. Make sure to undo before pushing.
//     </div>
//   );
// }

import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import useStickyState from '../hooks/useStickyState';
import Split from 'react-split';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import Async from 'react-async';

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

const getGithubUrl = (suffix: string) => {
  const githubUrlPrefix =
    'https://github.com/cpinitiative/usaco-guide/blob/master/';
  return encodeURI(githubUrlPrefix + suffix);
};

const getRawGithubUrl = (suffix: string) => {
  const rawGithubUrlPrefix =
    'https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/';
  return encodeURI(rawGithubUrlPrefix + suffix);

  // https://www.scrapingbee.com/blog/web-scraping-javascript/
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // getContents();
};

export default function LiveUpdatePage(props: PageProps) {
  const [markdown, setMarkdown] = useStickyState(
    '',
    'guide:liveupdate:markdown'
  );
  const [done, setDone] = useState(false);

  const editor = useRef();
  const { state = {} } = props.location;
  // https://dmitripavlutin.com/check-if-object-has-property-javascript/
  // console.log("WHOOPS",state)
  // console.log(state && 'githubUrl' in state);
  const suffix = state && 'suffix' in state ? state.suffix : null; // oops is there a better way to do this
  // console.log("SUFFIX",suffix)
  // if (suffix) {
  //   getGithubContents(suffix)
  //   // console.log(getGithubUrl(suffix))
  //   // console.log(getRawGithubUrl(suffix))
  // }

  const getGithubContents = async () => {
    if (!suffix) return '';
    const data = await fetch(getRawGithubUrl(suffix));
    const text = await data.text();
    return text;
    // console.log('FOUND TEXT', text); // ok what do I do with this
  };

  console.log('CONTENTS', getGithubContents());
  // https://css-tricks.com/fetching-data-in-react-using-react-async/
  const loading = (
    <div className="text-center mt-6 font-bold text-2xl">Loading</div>
  );
  return (
    <Layout>
      <SEO title="MDX Renderer" />
      <div className="h-screen flex flex-col">
        <TopNavigationBar hideClassesPromoBar={true} />

        {typeof window !== 'undefined' && (
          <Async promiseFn={getGithubContents}>
            <Async.Loading>loading</Async.Loading>
            <Async.Fulfilled>
              {data => {
                const dataString = data as string;
                if (!done && dataString) {
                  setMarkdown(dataString);
                  setDone(true);
                }
                return (
                  <React.Suspense fallback={loading}>
                    <StyledSplit
                      className="h-full relative flex-1 overflow-hidden"
                      onDrag={() => {
                        if (editor.current !== undefined)
                          editor.current.layout();
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
                );
              }}
            </Async.Fulfilled>
            <Async.Rejected>
              {error => `Something went wrong: ${error.message}`}
            </Async.Rejected>
          </Async>
        )}
      </div>
    </Layout>
  );
}
