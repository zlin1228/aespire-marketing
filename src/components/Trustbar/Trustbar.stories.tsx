import Logo from '../../../static/darkLogo.png';

import Trusrbar from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Trusrbar> = {
  component: Trusrbar,
};

export default meta;

type Story = StoryObj<typeof Trusrbar>;

const logos = Array(13).fill({
  file: {
    url: Logo,
  },
});

export const Canvas: Story = {
  render: args => <Trusrbar {...args} />,

  args: {
    background: 'yellow25',
    padding: 'large',
    contained: false,
    variant: 'Static',
    eyebrow: 'Join 4,000+ companies already growing',
    logos,
  },
};
