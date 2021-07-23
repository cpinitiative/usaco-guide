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
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import * as React from 'react';
import Split from 'react-split';
import styled from 'styled-components';
import {
  monacoEditorInstanceAtom,
  openOrCreateExistingFileAtom,
} from '../../atoms/editor';
import QuizGeneratorProvider from '../../context/QuizGeneratorContext';
import Layout from '../layout';
import SEO from '../seo';
import { EditorOutput } from './EditorOutput';
import { EditorSidebar } from './EditorSidebar/EditorSidebar';
import { EditorTopNav } from './EditorTopNav';
import { MainEditorInterface } from './MainEditorInterface';

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
  const openOrCreateExistingFile = useUpdateAtom(openOrCreateExistingFileAtom);

  React.useEffect(() => {
    const defaultFilePath =
      props.location?.search?.length > 0
        ? getQueryVariable(props.location.search.slice(1), 'filepath')
        : null;
    if (defaultFilePath) {
      openOrCreateExistingFile(defaultFilePath);
    }
  }, []);

  return (
    <QuizGeneratorProvider>
      <Layout>
        <SEO title="Editor" />

        <div className="h-screen flex flex-col min-w-[768px]">
          <EditorTopNav />

          {typeof window !== 'undefined' && (
            <React.Suspense
              fallback={
                <div className="text-center mt-6 font-bold text-2xl">
                  Loading
                </div>
              }
            >
              <StyledSplit
                className="h-full relative flex-1 overflow-hidden"
                onDrag={() => {
                  if (editor.monaco !== null) editor.monaco.layout();
                }}
                minSize={[600, 10]}
              >
                {/* https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html */}
                <div className="flex items-stretch">
                  <EditorSidebar className="h-full flex-shrink-0" />
                  <MainEditorInterface className="h-full w-0 flex-1" />
                </div>
                <div className="flex flex-col">
                  <div className="overflow-y-auto relative flex-1">
                    <EditorOutput />
                  </div>
                </div>
              </StyledSplit>
            </React.Suspense>
          )}
        </div>
      </Layout>
    </QuizGeneratorProvider>
  );
}
