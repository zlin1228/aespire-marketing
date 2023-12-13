import twMerge from 'twMerge';

import Tooltip from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

/**
 * Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning or function of an icon, or display the alt text of an image.
 * alignment only applies to top and bottom directions
 */
export const Canvas: Story = {
  render: args => (
    <div className={twMerge(['p-32'])}>
      <Tooltip {...args} />
    </div>
  ),
  args: {
    hasCaret: true,
    direction: 'top',
    alignment: 'none',
    heading: 'This is a tooltip',
    subheading:
      'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.',
  },
};
