import { cva } from 'class-variance-authority';
import twMerge from 'twMerge';

import type { Meta, StoryObj } from '@storybook/react';
import type { VariantProps } from 'class-variance-authority';
import type { FC } from 'react';

const sectionWrapper = cva(['grid', 'grid-cols-4', 'gap-8']);

const textClasses = [
  'text-display-2xl',
  'text-display-2xl-tablet',
  'text-display-2xl-mobile',
  'text-display-xl',
  'text-display-xl-tablet',
  'text-display-xl-mobile',
  'text-display-lg',
  'text-display-lg-tablet',
  'text-display-lg-mobile',
  'text-display-md',
  'text-display-md-tablet',
  'text-display-md-mobile',
  'text-display-sm',
  'text-display-sm-tablet',
  'text-display-sm-mobile',
  'text-display-xs',
  'text-display-xs-tablet',
  'text-display-xs-mobile',
  'text-xl',
  'text-lg',
  'text-md',
  'text-sm',
  'text-xs',
  'text-eyebrow',
];

const fontWeights = [
  { class: 'font-normal', label: 'Regular' },
  { class: 'font-semibold', label: 'Medium' },
  { class: 'font-bold', label: 'Semibold' },
  { class: 'font-extrabold', label: 'Bold' },
];

const TypographyGrid: FC<VariantProps<typeof sectionWrapper>> = () => (
  <div className={twMerge(sectionWrapper())}>
    {textClasses.map(textClass =>
      fontWeights.map(font =>
        textClass !== 'text-eyebrow' ? (
          <span key={font.label} className={twMerge([textClass, font.class])}>
            <p>{textClass.replace('text-', '')}</p>
            <p>{font.label}</p>
          </span>
        ) : null,
      ),
    )}
    <span className={twMerge(['text-eyebrow', 'font-extrabold'])}>
      <p>EYEBROW DESKTOP</p>
    </span>
  </div>
);

const meta: Meta<typeof TypographyGrid> = {
  title: 'Atoms/Typography',
  component: TypographyGrid,
  parameters: { options: { showPanel: false } },
};

export default meta;

type Story = StoryObj<typeof TypographyGrid>;

/**
 * Our design system leverages a purposeful set of typographic styles. We’ve stress-tested this typographic scale across dozens of projects to make sure it’s robust enough to use across (almost) any project, while remaining as accessible as possible for everyone.
 */
export const Canvas: Story = {
  render: args => <TypographyGrid {...args} />,
};
