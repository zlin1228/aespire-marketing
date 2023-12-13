/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';

export const containerStyles = cva([
  'flex',
  'flex-col',
  'md:grid',
  'md:grid-cols-[202px_1fr]',
  'xl:grid-cols-[592px_1fr]',
]);

export const logoStyles = cva([
  'absolute',
  'bottom-4',
  'right-4',
  'max-w-[200px]',
  'md:max-w-[103px]',
  'xl:bottom-8',
  'xl:right-8',
  'xl:max-w-[200px]',
]);

export const imageStyles = cva(['h-full', 'max-h-[192px]', 'w-full', 'object-cover', 'md:max-h-full']);

export const textContainerStyles = cva([
  'flex',
  'flex-col',
  'items-start',
  'gap-10',
  'bg-white',
  'p-6',
  'md:px-6',
  'md:py-8',
  'xl:p-10',
]);

export const headingStyles = cva([
  'text-display-xs-mobile',
  'font-extrabold',
  'md:text-display-xs-tablet',
  'xl:text-display-xs',
  'text-gray-900',
]);

export const subheadStyles = cva(['text-md', 'text-gray-700', 'md:text-lg', 'xl:text-xl']);

export const buttonStyles = cva([
  'flex',
  'aspect-auto',
  'items-center',
  'gap-3',
  'text-md',
  'font-semibold',
  'text-gray-900',
  'sm:text-lg',
]);
