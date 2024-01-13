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
import { Octokit } from 'octokit';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Split from 'react-split';
import styled from 'styled-components';
import {
  filesListAtom,
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
  const [token, setToken] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [githubInfo, setGithubInfo] = useState<any>(null);
  const octokit = useRef<any>(null);
  useEffect(() => {
    setCode(new URLSearchParams(props.location.search).get('code'));
    history.replaceState({}, '', '/editor');
  }, []);
  useEffect(() => {
    if (!code) return setToken(null);
    console.log('fetching');
    fetch('/api/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    }).then(async res => setToken((await res.json()).token));
  }, [code]);
  useEffect(() => {
    if (token === null) return setGithubInfo(null);
    octokit.current = new Octokit({ auth: token });
    octokit.current
      .request('GET /user', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then(res => setGithubInfo(res.data));
    console.log('github info', githubInfo);
  }, [token]);
  const getGuideSha = useCallback(async () => {
    const matchingRefs = await octokit.current.request(
      'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
      {
        owner: 'cpinitiative',
        repo: 'usaco-guide',
        ref: 'heads/master',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    console.log(matchingRefs);
    return matchingRefs.data[0].object.sha;
  }, []);
  const createBranch = useCallback(
    ({ branchName, sha }) => {
      octokit.current
        .request('POST /repos/{owner}/{repo}/git/refs', {
          owner: githubInfo.login,
          repo: 'usaco-guide',
          ref: `refs/heads/${branchName}`,
          sha: sha,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        })
        .then(
          () => alert(`Created branch ${branchName}!`),
          () => alert(`branch ${branchName} already exists!`)
        );
    },
    [githubInfo]
  );
  const filesList = useAtomValue(filesListAtom); // null if hasn't been loaded from storage yet
  React.useEffect(() => {
    const defaultFilePath =
      props.location?.search?.length > 0
        ? getQueryVariable(props.location.search.slice(1), 'filepath')
        : null;
    if (defaultFilePath && filesList !== null) {
      openOrCreateExistingFile(defaultFilePath);
    }
  }, [filesList]);

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
                  <EditorSidebar
                    className="h-full flex-shrink-0"
                    token={token}
                    user={githubInfo ? githubInfo.login : null}
                    handleCreateBranch={async (branchName: string) => {
                      createBranch({
                        branchName,
                        sha: await getGuideSha(),
                      });
                    }}
                    handleLogOut={() => setCode(null)}
                    loading={!!code}
                  />
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
