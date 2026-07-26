import { useAtomValue, useSetAtom, WritableAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { lazy } from 'react';
import Split from 'react-split';
import {
  activeFileAtom,
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

export default function EditorPage(): JSX.Element {
  const router = useRouter();
  const { query } = router;
  const editor = useAtomValue(monacoEditorInstanceAtom);
  const activeFile = useAtomValue(activeFileAtom);
  const setActiveFile = useSetAtom(activeFileAtom);
  const openOrCreateExistingFile = useSetAtom(openOrCreateExistingFileAtom);
  const setToken = useSetAtom(
    tokenAtom as WritableAtom<string | null, [string | null], void>
  );
  const lock = React.useRef(false);

  React.useEffect(() => {
    const code = query.code as string;
    if (!code || lock.current) return;
    lock.current = true;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('/api/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
      signal,
    })
      .then(res => res.json())
      .then(json => {
        if (json.token) {
          setToken(json.token);
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error('Token exchange failed', err);
        }
      })
      .finally(() => {
        router.replace('/editor', undefined, { shallow: true });
      });

    return () => {
      controller.abort();
    };
  }, [query.code, setToken, router]);

  const filesList = useAtomValue(filesListAtom);
  React.useEffect(() => {
    const defaultFilePath = query.filepath as string;
    if (defaultFilePath && filesList !== null) {
      openOrCreateExistingFile(defaultFilePath);
    }
  }, [filesList, openOrCreateExistingFile, query.filepath]);

  React.useEffect(() => {
    if (activeFile) return;
    if (!filesList || filesList.length === 0) return;
    setActiveFile(filesList[0]);
  }, [activeFile, filesList, setActiveFile]);

  const isAuthenticating = !!query.code;

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <QuizGeneratorProvider>
      <Layout>
        <SEO title="Editor" image={undefined} />

        <div className="flex h-screen min-w-0 flex-col">
          <LazyLoad>
            <EditorTopNav />
          </LazyLoad>

          {mounted && (
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
                    loading={!!query.code}
                  />
                </LazyLoad>
                <LazyLoad>
                  <MainEditorInterface
                    className="h-full w-0 flex-1"
                    loading={isAuthenticating}
                  />
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
