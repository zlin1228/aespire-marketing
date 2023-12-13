import Icon from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * The Icon molecule allows you to quickly and easily reference icons from your SVG sprite sheet for use within React components.
 * The sprite sheet can be found in your static directory, which by default is located at `src/static`.
 *
 * ## Usage
 *
 * Choose the icon to display and it's size via the corresponding props.
 * To set the color or otherwise style the icon, pass in a classname with the appropriate fill, stroke, etc. tailwind classes.
 * You can also override the height and width by setting them directly if your icon is not square.
 */
export const Canvas: Story = {
  render: args => <Icon {...args} />,
  args: {
    icon: 'arrow-right',
    size: 24,
  },
};
