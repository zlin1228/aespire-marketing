import { cva } from 'class-variance-authority';

export const topBarContainer = cva(['bg-gray-900', 'py-4']);

export const topBarWrapper = cva([
  'relative',
  'container',
  'max-w-full',
  'md:max-w-md',
  'lg:max-w-full',
  'xl:max-w-xl',
  'flex',
  'items-center',
  'justify-end',
  'px-4',
  'sm:px-8',
  'mx-auto',
]);
