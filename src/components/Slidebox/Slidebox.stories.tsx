import MockImage from '../../../static/images/slidebox-mock-image.png';

import Slidebox from '.';

import type { Meta, StoryObj } from '@storybook/react';
import type { ContentfulComponentSlideboxCard } from 'graphqlTypes';

const meta: Meta<typeof Slidebox> = {
  component: Slidebox,
};

export default meta;

const slides = Array(6).fill({
  eyebrow: 'Scheduling',
  heading: 'Scheduling Software',
  subheading: {
    raw: JSON.stringify({
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Take the headaches out of job scheduling. Move jobs from won to scheduled, create recurring jobs, and update the schedule instantly. Monitor performance metrics for every service, property, and division.',
          nodeType: 'text',
        },
      ],
      nodeType: 'document',
    }),
  },
  button: {
    label: 'Learn more',
    endIcon: 'ArrowRight',
    hierarchy: 'linkDark',
    href: 'https://www.youraspire.com/',
    iconColor: 'gray-900',
  },
  media: {
    image: {
      file: {
        url: MockImage,
      },
    },
  },
} as ContentfulComponentSlideboxCard);

type Story = StoryObj<typeof Slidebox>;

export const Canvas: Story = {
  render: args => <Slidebox {...args} />,
  args: {
    background: 'white',
    padding: 'large',
    layout: 'Container',
    fullWidth: true,
    slides,
  },
};
