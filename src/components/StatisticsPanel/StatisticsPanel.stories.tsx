import StatisticsPanel from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatisticsPanel> = {
  component: StatisticsPanel,
};

export default meta;

type Story = StoryObj<typeof StatisticsPanel>;

export const Canvas: Story = {
  render: args => <StatisticsPanel {...args} />,
  args: {
    statisticsCards: Array(3).fill({
      eyebrow: 'Eyebrow',
      statistics: 'Statistics',
      description: 'Description',
    }),
    alignment: 'center',
    background: 'white',
    padding: 'large',
    layout: 'Container',
    variant: 'Dark',
  },
};
