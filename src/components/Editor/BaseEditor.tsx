import MonacoEditor from '@monaco-editor/react';
import React from 'react';
export default function BaseEditor(props) {
  // prevents light/dark mode flicker
  const darkMode = document.documentElement.classList.contains('dark');
  return <MonacoEditor {...props} theme={darkMode ? 'vs-dark' : 'light'} />;
}
