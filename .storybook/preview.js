import * as React from 'react';
import { DarkModeContext } from '../src/context/DarkModeContext';
import '../src/styles/main.css';
import './storybook.css';

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
  renderStory => (
    <div className="grid storybook-container font-sans">
      <div className="h-full">
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          <p className="text-gray-800 text-2xl font-bold">Light Mode</p>
          <div className="h-4" />
          <DarkModeContext.Provider value={false}>
            {renderStory()}
          </DarkModeContext.Provider>
        </div>
      </div>
      <div className="bg-dark-surface text-dark-high-emphasis dark h-full">
        <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
          <p className="text-gray-100 text-2xl font-bold">Dark Mode</p>
          <div className="h-4" />
          <DarkModeContext.Provider value={true}>
            {renderStory()}
          </DarkModeContext.Provider>
        </div>
      </div>
    </div>
  ),
];
