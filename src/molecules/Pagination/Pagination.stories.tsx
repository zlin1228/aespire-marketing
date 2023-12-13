import Pagination from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

/**
 * Primarily used in resource hub pages and slider components,
 */
export const Canvas: Story = {
  render: args => <Pagination {...args} />,
  args: {
    isSimplePagination: true,
    baseUrl: 'https://localhost:6006',
    numItems: 4,
    curItem: 2,
  },
};
