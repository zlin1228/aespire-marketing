import twMerge from 'twMerge';

import Dropdown from 'molecules/Dropdown/index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

/**
 * Dropdowns are used to group together actions in a subview. They’re useful for hiding menus or when you have multiple actions that cannot be separate buttons.
 */
export const Canvas: Story = {
  render: args => (
    <div className={twMerge(['md:p-32', 'w-[400px]'])}>
      <Dropdown {...args} />
    </div>
  ),
  args: {
    type: 'menu',
    label: 'Account',
    items: [{ label: 'A' }, { label: 'B' }, { label: 'C' }],
  },
};
