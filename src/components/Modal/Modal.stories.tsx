import Button from 'molecules/Button';

import { contentfulProps } from 'utils/emptyTypes';

import Modal from '.';

import type { Meta, StoryObj } from '@storybook/react';
import type { ContentfulComponentModal } from 'graphqlTypes';
import type { ButtonProps } from 'molecules/Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const modalArgs: ContentfulComponentModal = { formId: '0', ...contentfulProps };
const buttonArgs: ButtonProps = {
  children: 'Button',
  disabled: false,
  hierarchy: 'primary',
  size: 'md',
  modal: modalArgs,
};

/**
 * Instead of opening a new page or taking you away from what you're doing, a small window pops up on the screen when you click on a video thumbnail or button. Inside that window, the video starts playing without interrupting your browsing. It's a convenient and engaging way to watch videos without leaving the page you're on. Alternatively a form can be used as content.
 */
export const Canvas: Story = {
  render: args => (
    <div {...args}>
      <Button {...buttonArgs} />
    </div>
  ),
};
