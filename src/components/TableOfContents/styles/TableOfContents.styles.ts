import { cva } from 'class-variance-authority';

export const listItemStyles = cva(['py-2', 'pl-4'], {
  variants: {
    state: {
      active: ['border-l-4', 'border-green-500'],
      inactive: ['border-l-2', 'border-gray-200'],
    },
  },
});

export const buttonStyles = cva(['text-left', 'text-md', 'hover:text-primary-600'], {
  variants: {
    state: {
      active: ['font-semibold', 'text-gray-900'],
      inactive: ['text-gray-700'],
    },
  },
});
