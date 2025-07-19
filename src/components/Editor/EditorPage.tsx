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

import { PageProps } from 'gatsby';
import { useAtomValue, useSetAtom } from 'jotai';
import React, { lazy } from 'react';
import Split from 'react-split';
import {
  filesListAtom,
  monacoEditorInstanceAtom,
  openOrCreateExistingFileAtom,
  tokenAtom,
} from '../../atoms/editor';
import QuizGeneratorProvider from '../../context/QuizGeneratorContext';
import { LazyLoad } from '../../utils/lazyLoad';
import Layout from '../layout';
import SEO from '../seo';

// Lazy load heavy components
const EditorOutput = lazy(() =>
  import('./EditorOutput').then(module => ({ default: module.EditorOutput }))
);
const EditorSidebar = lazy(() =>
  import('./EditorSidebar/EditorSidebar').then(module => ({
    default: module.EditorSidebar,
  }))
);
const EditorTopNav = lazy(() =>
  import('./EditorTopNav').then(module => ({ default: module.EditorTopNav }))
);
const MainEditorInterface = lazy(() =>
  import('./MainEditorInterface').then(module => ({
    default: module.MainEditorInterface,
  }))
);

// From https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function getQueryVariable(query, variable) {
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

export default function EditorPage(props: PageProps): JSX.Element {
  const editor = useAtomValue(monacoEditorInstanceAtom);
  const openOrCreateExistingFile = useSetAtom(openOrCreateExistingFileAtom);
  const setToken = useSetAtom(tokenAtom);

  React.useEffect(() => {
    const code = new URLSearchParams(props.location.search).get('code');
    if (!code) return;
    fetch('/api/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setToken(json.token);
      });
    history.replaceState({}, '', '/editor');
  }, [props.location.search, setToken]);

  const filesList = useAtomValue(filesListAtom);
  React.useEffect(() => {
    const defaultFilePath =
      props.location?.search?.length > 0
        ? getQueryVariable(props.location.search.slice(1), 'filepath')
        : null;
    if (defaultFilePath && filesList !== null) {
      openOrCreateExistingFile(defaultFilePath);
    }
  }, [filesList, openOrCreateExistingFile, props.location.search]);

  return (
    <QuizGeneratorProvider>
      <Layout>
        <SEO title="Editor" image={undefined} pathname={undefined} />

        <div className="flex h-screen min-w-[768px] flex-col">
          <LazyLoad>
            <EditorTopNav />
          </LazyLoad>

          {typeof window !== 'undefined' && (
            <Split
              className="relative h-full flex-1 overflow-hidden [&>.gutter.gutter-horizontal]:cursor-ew-resize [&>.gutter.gutter-horizontal]:bg-gray-100 dark:[&>.gutter.gutter-horizontal]:bg-gray-900 [&>div,&>.gutter.gutter-horizontal]:float-left [&>div,&>.gutter.gutter-horizontal]:h-full"
              onDrag={() => {
                if (editor.monaco !== null) editor.monaco.layout();
              }}
              minSize={[600, 10]}
            >
              <div className="flex items-stretch">
                <LazyLoad>
                  <EditorSidebar
                    className="h-full shrink-0"
                    loading={
                      !!new URLSearchParams(props.location.search).get('code')
                    }
                  />
                </LazyLoad>
                <LazyLoad>
                  <MainEditorInterface className="h-full w-0 flex-1" />
                </LazyLoad>
              </div>
              <div className="flex flex-col">
                <div className="relative flex-1 overflow-y-auto">
                  <LazyLoad>
                    <EditorOutput />
                  </LazyLoad>
                </div>
              </div>
            </Split>
          )}
        </div>
      </Layout>
    </QuizGeneratorProvider>
  );
}
