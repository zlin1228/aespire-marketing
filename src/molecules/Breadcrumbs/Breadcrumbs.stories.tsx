import Breadcrumbs from 'molecules/Breadcrumbs';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

/**
 * Breadcrumbs serve as an effective visual aid, indicating the location of the user within the website’s hierarchy, making them a great source of contextual information for landing pages. Also, breadcrumbs allow for easy navigation to higher-level pages.
 */
export const Canvas: Story = {
  render: args => <Breadcrumbs {...args} />,
  args: {
    breadcrumbs: [
      { label: 'label', link: 'https://www.youraspire.com/link' },
      { label: 'Label 2', link: 'https://www.youraspire.com/link/link' },
      { label: 'LABEL 3', link: 'https://www.youraspire.com/link/link/link' },
    ],
    isDarkTheme: false,
  },
};
