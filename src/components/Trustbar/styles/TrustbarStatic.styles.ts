/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';

export const imageStyles = cva(['h-10', 'w-full', 'min-w-[120px]', 'md:max-w-[140px]', 'object-contain']);

export const containerStyles = cva([
  'flex',
  'flex-wrap',
  'items-center',
  'justify-evenly',
  'gap-8',
  'overflow-hidden',
  'md:justify-center',
  'md:gap-10',
]);
