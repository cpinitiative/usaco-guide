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
import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import markdownParser from 'prettier/parser-markdown';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Split from 'react-split';
import styled from 'styled-components';
import problemsSchema from '../../content/problems.schema.json';
import ButtonGroup from '../components/ButtonGroup';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useDarkMode } from '../context/DarkModeContext';
import { EditorContext } from '../context/EditorContext';
import { MarkdownProblemListsProvider } from '../context/MarkdownProblemListsContext';
import { ProblemSuggestionModalProvider } from '../context/ProblemSuggestionModalContext';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/userLang';
import UserDataContext from '../context/UserDataContext/UserDataContext';
import useStickyState from '../hooks/useStickyState';
import { ProblemMetadata, PROBLEM_DIFFICULTY_OPTIONS } from '../models/problem';
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
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
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
  const markdownStorageKey = 'guide:editor:markdown';
  const problemsStorageKey = 'guide:editor:problems';
  const [markdown, setMarkdown] = useStickyState('', markdownStorageKey);
  const [problems, setProblems] = useStickyState('', problemsStorageKey);
  const editor = useRef<any>();
  const [tab, setTab] = useState<'problems' | 'content'>('content');

  const loadContent = async filePath => {
    setMarkdown('Loading file from Github...');

    const githubURL = encodeURI(
      `https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/${filePath}`
    );

    const result = await fetch(githubURL);
    const text = await result.text();
    setMarkdown(text);

    const githubProblemsURL = encodeURI(
      `https://raw.githubusercontent.com/cpinitiative/usaco-guide/master/${filePath.replace(
        /\.mdx$/,
        '.problems.json'
      )}`
    );
    const problemResult = await fetch(githubProblemsURL);
    const problemText = await problemResult.text();
    setProblems(problemText);
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

  const userSettings = React.useContext(UserDataContext);
  const isDarkMode = useDarkMode();
  const [
    markdownProblemListsProviderValue,
    setMarkdownProblemListsProviderValue,
  ] = useState([]);
  useEffect(() => {
    try {
      const parsedProblems = JSON.parse(problems || '{}');
      const problemsList = Object.keys(parsedProblems)
        .filter(key => key !== 'MODULE_ID')
        .map(key => ({
          listId: key,
          problems: parsedProblems[key],
        }));
      setMarkdownProblemListsProviderValue(problemsList);
    } catch (e) {
      console.log(e);
    }
  }, [problems]);

  const handleAddProblem = (
    listId: string,
    problemMetadata: ProblemMetadata
  ) => {
    const parsedOldFileData = JSON.parse(problems);
    const tableToEdit = parsedOldFileData[listId];

    // sort the table such that the suggested problem is inserted below the bottommost
    // problem with the same difficulty as the suggested problem.
    parsedOldFileData[listId] = ([
      ...tableToEdit.map((el, i) => ({ index: i, data: el })),
      { index: tableToEdit.length, data: problemMetadata },
    ] as { index: number; data: ProblemMetadata }[])
      .sort((a, b) => {
        const difficultyDiff =
          PROBLEM_DIFFICULTY_OPTIONS.indexOf(a.data.difficulty) -
          PROBLEM_DIFFICULTY_OPTIONS.indexOf(b.data.difficulty);
        return difficultyDiff !== 0 ? difficultyDiff : a.index - b.index;
      })
      .map(prob => prob.data);

    // Use pretty JSON.stringify because it inserts a newline before all objects, which forces prettier to then convert
    // these objects into multiline ones.
    const newContent = JSON.stringify(parsedOldFileData, null, 2) + '\n';
    const formattedNewContent = prettier.format(newContent, {
      endOfLine: 'lf',
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      useTabs: false,
      trailingComma: 'es5',
      arrowParens: 'avoid',
      parser: 'json',
      plugins: [babelParser],
    });
    setProblems(formattedNewContent);
  };

  return (
    <Layout>
      <SEO title="Editor" />

      <div className="h-screen flex flex-col">
        <div className="block py-3 px-3 shadow dark:bg-gray-900 flex items-center justify-around">
          <a
            href="/dashboard"
            target="_blank"
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="/general/contributing#adding-a-solution"
            target="_blank"
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            How to add a solution &rarr;
          </a>

          <button
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={() =>
              setTab(old => (old === 'content' ? 'problems' : 'content'))
            }
          >
            Switch to Editing {tab === 'content' ? 'Problems' : 'Content'}
          </button>

          <button
            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={() => {
              const prettierConfig = {};
              if (tab == 'content') {
                setMarkdown(old =>
                  prettier.format(old, {
                    endOfLine: 'lf',
                    semi: true,
                    singleQuote: true,
                    tabWidth: 2,
                    trailingComma: 'es5',
                    arrowParens: 'avoid',
                    useTabs: true,
                    proseWrap: 'always',
                    parser: 'mdx',
                    plugins: [markdownParser],
                  })
                );
              } else {
                setProblems(old =>
                  prettier.format(old, {
                    endOfLine: 'lf',
                    semi: true,
                    singleQuote: true,
                    tabWidth: 2,
                    useTabs: false,
                    trailingComma: 'es5',
                    arrowParens: 'avoid',
                    parser: 'json',
                    plugins: [babelParser],
                  })
                );
              }
            }}
          >
            Prettify {tab === 'content' ? 'Content' : 'Problems'}
          </button>

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
              rel="noreferrer"
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
              {/* https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html */}
              <div className="h-full" style={{ minWidth: '300px' }}>
                <Editor
                  theme="vs-dark"
                  path={
                    tab === 'content'
                      ? 'inmemory://usaco-guide/module.mdx'
                      : 'inmemory://usaco-guide/module.problems.json'
                  }
                  language={tab === 'content' ? 'markdown' : 'json'}
                  value={tab === 'content' ? markdown : problems}
                  onChange={(v, e) =>
                    tab === 'content' ? setMarkdown(v) : setProblems(v)
                  }
                  options={{ wordWrap: 'on', rulers: [80] }}
                  beforeMount={monaco => {
                    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                      validate: true,
                      schemas: [
                        {
                          fileMatch: ['*.json'],
                          uri: 'https://usaco.guide/problems.schema.json',
                          schema: problemsSchema,
                        },
                      ],
                    });
                  }}
                  onMount={e => {
                    editor.current = e;
                    e.getModel().updateOptions({ insertSpaces: false });

                    setTimeout(() => {
                      e.layout();
                      e.focus();
                    }, 0);
                  }}
                />
              </div>
              <div
                className="flex flex-col"
                style={{ maxWidth: 'calc(100% - 310px)' }}
              >
                <div className="border-b border-gray-200 dark:border-gray-700 py-2 px-2 flex-shrink-0 flex items-center justify-between">
                  <ButtonGroup
                    options={['cpp', 'java', 'py']}
                    value={userSettings.lang}
                    onChange={v => userSettings.setLang(v)}
                    labelMap={LANGUAGE_LABELS}
                  />
                  {/* Settings button */}
                  <button
                    onClick={() =>
                      userSettings.setTheme(isDarkMode ? 'light' : 'dark')
                    }
                    className="p-1 border-2 border-transparent text-gray-400 dark:text-dark-med-emphasis rounded-full hover:text-gray-300 dark:hover:text-dark-high-emphasis focus:outline-none focus:text-gray-500 focus:bg-gray-100 dark:focus:bg-gray-700 transition"
                  >
                    {isDarkMode ? (
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="overflow-y-auto relative flex-1">
                  <div className="markdown p-4">
                    <EditorContext.Provider
                      value={{
                        addProblem: handleAddProblem,
                        inEditor: true,
                      }}
                    >
                      <MarkdownProblemListsProvider
                        value={markdownProblemListsProviderValue}
                      >
                        <ProblemSuggestionModalProvider>
                          <RawMarkdownRenderer markdown={markdown} />
                        </ProblemSuggestionModalProvider>
                      </MarkdownProblemListsProvider>
                    </EditorContext.Provider>
                  </div>
                </div>
              </div>
            </StyledSplit>
          </React.Suspense>
        )}
      </div>
    </Layout>
  );
}
