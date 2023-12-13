import Button from 'molecules/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    onClick: {
      action: 'clicked',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:
 * - Modal windows
 * - Forms
 * - Cards
 * - Toolbars
 */
export const Canvas: Story = {
  render: args => <Button {...args} />,
  args: {
    children: 'Button',
    disabled: false,
    hierarchy: 'primary',
    size: 'md',
  },
};
