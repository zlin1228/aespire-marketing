import Heading from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;

type Story = StoryObj<typeof Heading>;

/**
 * Basic content component
 */
export const Canvas: Story = {
  render: args => <Heading {...args} />,
  args: {
    eyebrow: 'GET STARTED',
    heading: "Find the solution that's right for you",
    headingSize: 'lg',
    subheading:
      "Aspire is here to help you achieve your goals. Tell us what you’re looking for and we'll match you with a solution that meets your needs.",
    alignment: 'center',
    buttons: [
      { children: 'Get Started', disabled: false, hierarchy: 'primary', size: 'lg' },
      { children: 'Book Demo', disabled: false, hierarchy: 'secondary', size: 'lg' },
    ],
    background: 'primary25',
    padding: 'large',
    contained: true,
  },
};
