/* eslint-disable tailwindcss/no-arbitrary-value */
/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { cva } from 'class-variance-authority';

export const buttonStyles = cva([
  'flex',
  'h-10',
  'w-10',
  'items-center',
  'justify-center',
  'bg-gray-900',
  'transition',
  'hover:bg-gray-300',
  'sm:h-11',
  'sm:w-11',
  'xl:h-14',
  'xl:w-14',
]);

export const buttonIconStyles = cva(['fill-white'], {
  variants: {
    icon: {
      prev: ['-translate-x-[2px]'],
      next: ['translate-x-[2px]'],
    },
  },
});

export const dotStyles = cva(['h-2', 'w-2', 'bg-gray-300', 'transition', 'group-hover:bg-primary-600'], {
  variants: {
    states: {
      active: ['bg-primary-600'],
    },
  },
});
