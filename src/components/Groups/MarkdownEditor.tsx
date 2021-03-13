import SimpleMDE from 'react-simplemde-editor';
import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export default function MarkdownEditor({ value, onChange }) {
  const { darkMode } = useContext(UserDataContext);

  return (
    <div
      className={'mt-4 ' + (darkMode ? 'dark-mde-container' : 'mde-container')}
    >
      <SimpleMDE
        onChange={onChange}
        value={value}
        options={{
          toolbar: [
            'bold',
            'italic',
            'strikethrough',
            '|',
            'heading-1',
            'heading-2',
            'heading-3',
            '|',
            'link',
            'image',
            '|',
            'quote',
            {
              name: 'custom',
              action: function customFunction(editor) {
                editor.codemirror.replaceSelection('```java\n\n```');
              },
              className: 'fa fa-code',
              title: 'Custom Button',
            },
            '|',
            'ordered-list',
            'unordered-list',
            'table',
          ],
          shortcuts: {
            toggleSideBySide: null,
            toggleFullScreen: null,
          },
        }}
      />
    </div>
  );
}
