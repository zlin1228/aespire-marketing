import ColorCards from 'theme/colors/storybook/Colors';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ColorCards> = {
  title: 'Atoms/Colors',
  component: ColorCards,
  parameters: { options: { showPanel: false } },
};

export default meta;

type Story = StoryObj<typeof ColorCards>;

/**
 * Our design system leverages a purposeful set of color styles as the perfect starting point for any brand or project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind.
 */
export const Canvas: Story = {
  render: args => <ColorCards {...args} />,
};
