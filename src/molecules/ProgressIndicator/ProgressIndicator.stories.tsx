import twMerge from 'twMerge';

import ProgressIndicator from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressIndicator> = {
  component: ProgressIndicator,
};

export default meta;

type Story = StoryObj<typeof ProgressIndicator>;

/**
 * Progress bars indicate the percentage completed of a task. They can be helpful to prompt the user to complete an action or process.
 * size only applies to circle and semicircle types
 * percentLocation only applies to bar type
 */
export const Canvas: Story = {
  render: args => (
    <div className={twMerge(['p-32'])}>
      <ProgressIndicator {...args} />
    </div>
  ),
  args: {
    type: 'bar',
    size: 'md',
    heading: '',
    defaultProgress: 40,
    outlinesPercent: false,
    showsPercent: true,
    percentLocation: 'center',
  },
};
