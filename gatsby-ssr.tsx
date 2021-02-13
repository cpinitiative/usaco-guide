import * as React from 'react';
import MDXProvider from './src/components/markdown/MDXProvider';
import { UserDataProvider } from './src/context/UserDataContext/UserDataContext';
import { FirebaseProvider } from './src/context/FirebaseContext';
import { darkModeKey } from './src/context/UserDataContext/properties/darkMode';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined');

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>
    <MDXProvider>
      <UserDataProvider>{element}</UserDataProvider>
    </MDXProvider>
  </FirebaseProvider>
);

// https://joshwcomeau.com/gatsby/dark-mode/
const MagicScriptTag = () => {
  // Note: see also src/context/UserDataContext/properties/darkMode.ts if any of the below code needs to be changed.
  const codeToRunOnClient = `
  (function(){
    var dark = false;
    var pref = window.localStorage.getItem('${darkModeKey}');
    if (typeof pref === 'string' && pref === 'true') dark = true;
    else if (typeof pref !== 'string') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      if (hasMediaQueryPreference) {
        dark = mql.matches;
      }
    }
    if (dark) document.documentElement.classList.add('dark');
  })()
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
