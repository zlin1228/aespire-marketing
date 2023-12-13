import { cva } from 'class-variance-authority';

export const eyebrowStyles = cva(
  [
    'mx-auto',
    'w-fit',
    'border-b-4',
    'pb-1',
    'text-center',
    'text-eyebrow',
    'uppercase',
    'tracking-[3.2px]',
    'font-extrabold',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-900', 'border-green-500'],
        dark: ['text-white', 'border-green-300'],
      },
    },
  },
);
