import twMerge from 'twMerge';

import Form from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

/**
 * Web forms are interactive elements found on websites that allow users to input and submit information. They are commonly used for various purposes, such as contact forms, sign-up forms, surveys, and more. A web form typically consists of fields where users can enter text, select options from drop-down menus, check boxes, or radio buttons, and sometimes upload files.
 */
export const Canvas: Story = {
  render: args => (
    <div className={twMerge(['lg:p-32'])}>
      <Form {...args} />
    </div>
  ),
  args: {
    formId: '0',
    iconId: 'form',
    heading: 'Request a Consultation',
    subheading:
      'Aspire makes a real difference in our clients’ lives. Consider us your business partner, not just a vendor.',
  },
};
