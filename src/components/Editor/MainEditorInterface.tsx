import classNames from 'classnames';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import babelParser from 'prettier/parser-babel';
import markdownParser from 'prettier/parser-markdown';
import prettier from 'prettier/standalone';
import * as React from 'react';
import { useState } from 'react';
import problemsSchema from '../../../content/problems.schema.json';
import {
  activeFileAtom,
  monacoEditorInstanceAtom,
  saveFileAtom,
} from '../../atoms/editor';
import EditorTabBar from './EditorTabBar';
import { conf as mdxConf, language as mdxLang } from './mdx-lang';

const Editor = React.lazy(() => import('@monaco-editor/react'));

export const MainEditorInterface = ({ className }): JSX.Element => {
  const activeFile = useAtomValue(activeFileAtom);
  const saveFile = useUpdateAtom(saveFileAtom);
  const setMonacoEditorInstance = useUpdateAtom(monacoEditorInstanceAtom);
  const [_tab, setTab] = useState<'problems' | 'content'>('content');
  const isEditingSolution =
    activeFile && activeFile.path.startsWith('solutions');
  const tab = isEditingSolution ? 'content' : _tab;

  const markdown: string | null = activeFile?.markdown;
  const setMarkdown = (x: string | ((prev: string) => string)) => {
    if (typeof x === 'string') {
      saveFile({
        path: activeFile.path,
        update: prev => ({
          ...prev,
          markdown: x,
        }),
      });
    } else {
      saveFile({
        path: activeFile.path,
        update: prev => ({
          ...prev,
          markdown: x(prev.markdown),
        }),
      });
    }
  };
  const problems: string | null = activeFile?.problems;
  const setProblems = (x: string | ((prev: string) => string)) => {
    if (typeof x === 'string') {
      saveFile({
        path: activeFile.path,
        update: prev => ({
          ...prev,
          problems: x,
        }),
      });
    } else {
      saveFile({
        path: activeFile.path,
        update: prev => ({
          ...prev,
          problems: x(prev.problems),
        }),
      });
    }
  };

  const handleFormatCode = () => {
    if (tab === 'content') {
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
  };

  return (
    <div className={classNames('tw-forms-disable-all-descendants', className)}>
      <EditorTabBar
        tabs={[
          { label: 'module.mdx', value: 'module.mdx' },
          ...(!isEditingSolution
            ? [
                {
                  label: 'module.problems.json',
                  value: 'module.problems.json',
                },
              ]
            : []),
        ]}
        activeTab={tab === 'content' ? 'module.mdx' : 'module.problems.json'}
        onTabSelect={tab =>
          setTab(tab.value === 'module.mdx' ? 'content' : 'problems')
        }
        onFormatCode={handleFormatCode}
      />
      <Editor
        theme="vs-dark"
        path={
          activeFile === null
            ? 'NONE'
            : tab === 'content'
            ? activeFile.path
            : activeFile.path.replace(/\.mdx$/, '.problems.json')
        }
        language={tab === 'content' ? 'custom-mdx' : 'json'}
        value={
          activeFile === null
            ? 'Open a file to begin'
            : tab === 'content'
            ? markdown
            : problems
        }
        onChange={(v, e) =>
          tab === 'content' ? setMarkdown(v) : setProblems(v)
        }
        options={{
          wordWrap: 'on',
          rulers: [80],
          minimap: { enabled: false },
        }}
        beforeMount={monaco => {
          // sort of MDX (basically markdown with mdx comments)
          monaco.languages.register({ id: 'custom-mdx' });
          monaco.languages.setMonarchTokensProvider('custom-mdx', mdxLang);
          monaco.languages.setLanguageConfiguration('custom-mdx', mdxConf);
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
          setMonacoEditorInstance(e);
          e.getModel().updateOptions({ insertSpaces: false });

          setTimeout(() => {
            e.layout();
            e.focus();
          }, 0);
        }}
      />
    </div>
  );
};
