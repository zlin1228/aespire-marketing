import { cva } from 'class-variance-authority';
import twMerge from 'twMerge';

import type { Meta, StoryObj } from '@storybook/react';
import type { VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

const sectionWrapper = cva(['flex', 'gap-8']);

const ShadowContainer: FC<VariantProps<typeof sectionWrapper>> = () => (
  <div className={twMerge(['flex', 'flex-col', 'gap-8'])}>
    <h2 className={twMerge(['text-display-sm', 'font-semibold'])}>Shadows</h2>
    <div className={twMerge(sectionWrapper())}>
      <div className={twMerge(['w-24', 'h-24', 'shadow-xs'])} />
      <div className={twMerge(['w-24', 'h-24', 'shadow-sm'])} />
      <div className={twMerge(['w-24', 'h-24', 'shadow-md'])} />
      <div className={twMerge(['w-24', 'h-24', 'shadow-lg'])} />
      <div className={twMerge(['w-24', 'h-24', 'shadow-xl'])} />
      <div className={twMerge(['w-24', 'h-24', 'shadow-2xl'])} />
      <div className={twMerge(['w-24', 'h-24', 'shadow-3xl'])} />
    </div>
    <h2 className={twMerge(['text-display-sm', 'font-semibold'])}>Blurs</h2>
    <div className={twMerge(sectionWrapper())}>
      <div className={twMerge(['w-24', 'h-24', 'bg-primary-400', 'blur-sm'])} />
      <div className={twMerge(['w-24', 'h-24', 'bg-primary-400', 'blur-md'])} />
      <div className={twMerge(['w-24', 'h-24', 'bg-primary-400', 'blur-lg'])} />
      <div className={twMerge(['w-24', 'h-24', 'bg-primary-400', 'blur-xl'])} />
    </div>
  </div>
);
const meta: Meta<typeof ShadowContainer> = {
  title: 'Atoms/Shadows',
  component: ShadowContainer,
  parameters: { options: { showPanel: false } },
};

export default meta;

type Story = StoryObj<typeof ShadowContainer>;

/**
 * Shadows allow you to add depth and realism to designs by positioning elements on a z-axis. Background blurs are often used stylistically in modern UI design. However, just like shadows, they allow you to add depth and realism to designs by positioning elements on a z-axis.
 */
export const Canvas: Story = {
  render: args => <ShadowContainer {...args} />,
};
