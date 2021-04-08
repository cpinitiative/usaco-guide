import '../src/styles/main.css';
import '../src/styles/components.css';
import '../src/styles/tailwindcss-utils.css';
import '../src/styles/anchor.css';
import { DarkModeContext } from '../src/context/DarkModeContext';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light-theme-ignore-this-class',
    stylePreview: true,
    classTarget: 'html',
  },
};

// create a component that uses the dark mode hook
function ThemeWrapper(props) {
  // render your custom theme provider
  return (
    <DarkModeContext.Provider value={useDarkMode()}>
      {props.children}
    </DarkModeContext.Provider>
  );
}

export const decorators = [
  renderStory => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
