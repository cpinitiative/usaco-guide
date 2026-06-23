import * as React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';

const SimpleMDE = React.lazy(() => import('react-simplemde-editor'));

export default function MarkdownEditor({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options?: any;
}) {
  const darkMode = useDarkMode();
  return (
    <div className={darkMode ? 'dark-mde-container' : 'mde-container'}>
      <React.Suspense fallback={<div>Loading editor...</div>}>
        <SimpleMDE onChange={onChange} value={value} options={options} />
      </React.Suspense>
    </div>
  );
}
