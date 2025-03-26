import classNames from 'classnames';
import { useAtomValue, useSetAtom } from 'jotai';
import * as React from 'react';
import problemsSchema from '../../../content/problems.schema.json';
import {
  activeFileAtom,
  baseTabAtom,
  editingSolutionAtom,
  monacoEditorInstanceAtom,
  saveFileAtom,
  tabAtom,
  trueFileAtom,
  trueFilePathAtom,
} from '../../atoms/editor';
import { DarkModeContext } from '../../context/DarkModeContext';
import { formatMarkdown, formatProblems } from '../../utils/prettierFormatter';
import EditorTabBar from './EditorTabBar';
import { conf as mdxConf, language as mdxLang } from './mdx-lang';
const Editor = React.lazy(() => import('./BaseEditor'));

export const MainEditorInterface = ({ className }): JSX.Element => {
  const activeFile = useAtomValue(activeFileAtom);
  const saveFile = useSetAtom(saveFileAtom);
  const setMonacoEditorInstance = useSetAtom(monacoEditorInstanceAtom);
  const setTab = useSetAtom(baseTabAtom);
  const isEditingSolution = useAtomValue(editingSolutionAtom);
  const tab = useAtomValue(tabAtom);
  const darkMode = React.useContext(DarkModeContext);

  const setMarkdown = (x: string | ((prev: string) => Promise<string>)) => {
    if (!activeFile) return;
    if (typeof x === 'string') {
      saveFile({
        path: activeFile.path,
        update: async prev => ({
          ...prev,
          markdown: x,
        }),
      });
    } else {
      saveFile({
        path: activeFile.path,
        update: async prev => ({
          ...prev,
          markdown: await x(prev.markdown),
        }),
      });
    }
  };
  const setProblems = (x: string | ((prev: string) => Promise<string>)) => {
    if (!activeFile) return;
    if (typeof x === 'string') {
      saveFile({
        path: activeFile.path,
        update: async prev => ({
          ...prev,
          problems: x,
        }),
      });
    } else {
      saveFile({
        path: activeFile.path,
        update: async prev => ({
          ...prev,
          problems: await x(prev.problems!),
        }),
      });
    }
  };

  const handleFormatCode = () => {
    if (tab === 'content') {
      setMarkdown(old => formatMarkdown(old));
    } else {
      setProblems(old => formatProblems(old));
    }
  };
  const tabs = isEditingSolution
    ? [{ label: 'solution.mdx', value: 'content' }]
    : [
        { label: 'module.mdx', value: 'content' },
        {
          label: 'module.problems.json',
          value: 'problems',
        },
      ];
  return (
    <div className={classNames('tw-forms-disable-all-descendants', className)}>
      <EditorTabBar
        tabs={tabs}
        activeTab={tab}
        onTabSelect={tab =>
          setTab(tab.value === 'content' ? 'content' : 'problems')
        }
        onFormatCode={handleFormatCode}
      />
      <Editor
        theme={darkMode ? 'vs-dark' : 'light'}
        path={useAtomValue(trueFilePathAtom)}
        language={tab === 'content' ? 'custom-mdx' : 'json'}
        value={useAtomValue(trueFileAtom)}
        onChange={v =>
          tab === 'content' ? setMarkdown(v ?? '') : setProblems(v ?? '')
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
          e.addAction({
            id: 'insert-code',
            label: 'Insert Code',
            contextMenuGroupId: 'navigation',
            run: function (ed) {
              ed.trigger('keyboard', 'paste', {
                text: `
<LanguageSection>

<CPPSection>

\`\`\`cpp
// code here
\`\`\`

</CPPSection>

<PySection>

\`\`\`py
# code here
\`\`\`

</PySection>

<JavaSection>

\`\`\`java
// code here
\`\`\`

</JavaSection>

</LanguageSection>
  `,
              });
            },
          });

          setTimeout(() => {
            e.layout();
            e.focus();
          }, 0);
        }}
      />
    </div>
  );
};
