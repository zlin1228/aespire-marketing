import AuthorImage from '../../../static/images/avatar-mock-image.png';
import SliderImage from '../../../static/images/quote-slider-mock-image.png';

import QuoteSlider from '.';

import type { Meta, StoryObj } from '@storybook/react';
import type { ContentfulCardQuote } from 'graphqlTypes';

const meta: Meta<typeof QuoteSlider> = {
  component: QuoteSlider,
};

export default meta;

type Story = StoryObj<typeof QuoteSlider>;

export const Canvas: Story = {
  render: args => <QuoteSlider {...args} />,

  args: {
    background: 'white',
    padding: 'large',
    contained: false,
    quoteCards: Array(3).fill({
      theme: 'Dark',
      quote: {
        raw: JSON.stringify({
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              content: [
                {
                  nodeType: 'text',
                  value:
                    'I’ve seen our gross margins increase 18% since using Aspire. That’s significant. On the bottom line, we’ve seen a 2–3X improvement.',
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        }),
      },
      author: {
        name: 'Smiles Davis',
        title: 'Owner',
        company: 'Smiles Pave',
        thumbnail: {
          file: {
            url: AuthorImage,
          },
        },
      },
      image: {
        file: {
          url: SliderImage,
        },
      },
    } as ContentfulCardQuote),
  },
};
