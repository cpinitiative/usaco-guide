import '../src/styles/main.css';
import '../src/styles/components.css';
import '../src/styles/tailwindcss-utils.css';
import '../src/styles/anchor.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
