import * as React from 'react';
import { DarkModeContext } from '../src/context/DarkModeContext';
import '../src/styles/main.css';
import './storybook.css';

import { action } from 'storybook/actions';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions

window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    grid: {
      cellSize: 16,
      opacity: 0.5,
      cellAmount: 4,
      offsetX: 24,
      offsetY: 72,
    },
  },
};

export const decorators = [
  Story => (
    <div className="storybook-container grid font-sans">
      <div className="h-full">
        <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
          <p className="text-2xl font-bold text-gray-800">Light Mode</p>
          <div className="h-4" />
          <DarkModeContext.Provider value={false}>
            <Story />
          </DarkModeContext.Provider>
        </div>
      </div>
      <div className="bg-dark-surface text-dark-high-emphasis dark h-full">
        <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
          <p className="text-2xl font-bold text-gray-100">Dark Mode</p>
          <div className="h-4" />
          <DarkModeContext.Provider value={true}>
            <Story />
          </DarkModeContext.Provider>
        </div>
      </div>
    </div>
  ),
];
