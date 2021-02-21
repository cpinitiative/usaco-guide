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
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import useStickyState from '../hooks/useStickyState';
import Split from 'react-split';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import SettingsModal from '../components/SettingsModal';

const RawMarkdownRenderer = React.lazy(
  () => import('../components/DynamicMarkdownRenderer')
);

const Editor = React.lazy(() => import('@monaco-editor/react'));

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
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

export default function LiveUpdatePage(props: PageProps) {
  const filePath =
    props.location?.search?.length > 0
      ? getQueryVariable(props.location.search.slice(1), 'filepath')
      : null;
  const markdownStorageKey = 'guide:liveupdate:markdown';

  const [markdown, setMarkdown] = useStickyState('', markdownStorageKey);
  const editor = useRef();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const loadContent = async filePath => {
    setMarkdown('Loading file from Github...');

    const githubURL = encodeURI(
      `https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/${filePath}`
    );

    const result = await fetch(githubURL);
    const text = await result.text();

    setMarkdown(text);
  };
  React.useEffect(() => {
    if (filePath) {
      if (window.localStorage.getItem(markdownStorageKey)?.length > 0) {
        if (
          confirm(
            'Load file from Github? Your local changes (if any) will be lost.'
          )
        ) {
          loadContent(filePath);
        }
      } else {
        loadContent(filePath);
      }
    }
  }, [filePath]);

  const handleReloadContent = () => {
    if (confirm('Reload file from Github? Your local changes will be lost.')) {
      loadContent(filePath);
    }
  };

  return (
    <Layout>
      <SEO title="MDX Renderer" />
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      <div className="h-screen flex flex-col">
        <div className="block py-3 px-3 shadow dark:bg-gray-900 flex items-center justify-around">
          <a
            href="/dashboard"
            target="_blank"
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Dashboard
          </a>
          <button
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsSettingsOpen(true)}
          >
            Settings
          </button>
          <a
            href="/general/contributing#adding-a-solution"
            target="_blank"
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            How to add a solution &rarr;
          </a>
          {filePath && (
            <button
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              onClick={handleReloadContent}
            >
              Reload Content from Github
            </button>
          )}
          {filePath && (
            <a
              href={`https://github.com/cpinitiative/usaco-guide/blob/master/${encodeURI(
                filePath
              )}`}
              target="_blank"
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              View File on Github &rarr;
            </a>
          )}
        </div>

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
                  theme="vs-dark"
                  language="markdown"
                  value={markdown}
                  onChange={(v, e) => setMarkdown(v)}
                  options={{ wordWrap: 'on' }}
                  onMount={e => {
                    editor.current = e;
                    editor.getModel().updateOptions({ insertSpaces: false });
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
