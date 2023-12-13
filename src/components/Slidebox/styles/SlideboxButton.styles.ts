import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  ['whitespace-nowrap', 'border-b-4', 'px-6', 'py-4', 'text-md', 'md:text-lg', 'font-bold'],
  {
    variants: {
      active: {
        light: ['border-yellow-400', 'text-gray-900'],
        dark: ['border-yellow-400', 'text-white'],
      },
      inactive: {
        light: ['border-gray-200', 'text-gray-500'],
        dark: ['border-transparent', 'text-gray-400'],
      },
    },
  },
);
