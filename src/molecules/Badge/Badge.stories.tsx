import Badge from 'molecules/Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * Badges help highlight important information, such as notifications or new and unread messages. They’re primarily used for communicating secondary or additional information to text.
 */
export const Canvas: Story = {
  render: args => <Badge {...args} />,
  args: {
    label: 'Label',
    hierarchy: 'primary',
    size: 'md',
  },
};
