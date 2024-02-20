import MonacoEditor from '@monaco-editor/react';
import React from 'react';
// can only be run on client, use only in lazy components
export default function BaseEditor(props) {
  // prevents light/dark mode flicker
  const darkMode = document.documentElement.classList.contains('dark');
  return <MonacoEditor {...props} theme={darkMode ? 'vs-dark' : 'light'} />;
}
