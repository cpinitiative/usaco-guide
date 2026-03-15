import type { Preview } from '@storybook/react';
import { DarkModeContext } from '../src/context/DarkModeContext';
import '../src/styles/main.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    // This allows Storybook to mock the Next.js router (useRouter, usePathname, etc.)
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="storybook-container grid grid-cols-1 md:grid-cols-2">
        {/* Light Mode */}
        <div className="light bg-white p-4">
          <p className="mb-4 font-bold text-gray-800">Light Mode</p>
          <DarkModeContext.Provider value={false}>
            <Story />
          </DarkModeContext.Provider>
        </div>

        {/* Dark Mode: The .dark class is scoped to THIS div */}
        <div className="dark bg-gray-900 p-4">
          <p className="mb-4 font-bold text-white">Dark Mode</p>
          <DarkModeContext.Provider value={true}>
            <Story />
          </DarkModeContext.Provider>
        </div>
      </div>
    ),
  ],
};

export default preview;
