import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { FirebaseProvider } from './src/context/FirebaseContext';
import { darkModeKey } from './src/context/UserDataContext/properties/darkMode';

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <MDXProvider>
      <UserDataProvider>{element}</UserDataProvider>
    </MDXProvider>
  </FirebaseProvider>
);

// https://joshwcomeau.com/gatsby/dark-mode/
const MagicScriptTag = () => {
  const codeToRunOnClient = `(function(){if(window.localStorage.getItem('${darkModeKey}')==='true')document.documentElement.classList.add('mode-dark');})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
