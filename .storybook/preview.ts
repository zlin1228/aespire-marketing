import { themes } from '@storybook/theming';

import 'styles/global.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      sort: 'requiredFirst',
      matchers: {
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Guides', ['Get Started', '*'], 'Atoms', 'Molecules', 'Components'],
      },
      showPanel: true,
    },
  },
};

export default preview;
