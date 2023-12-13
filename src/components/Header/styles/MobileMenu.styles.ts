import { cva } from 'class-variance-authority';

export const containerStyles = ['max-w-full', 'md:max-w-md', 'lg:max-w-full', 'xl:max-w-xl', 'px-4', 'sm:px-8'];

export const mobileMenuContainer = cva([
  'h-full',
  'flex',
  'flex-col',
  'justify-between',
  'bg-gray-50',
  'overflow-hidden',
]);

export const mobileMenuWrapper = cva(['relative', 'w-full', 'flex', 'flex-col', 'max-h-[calc(100vh-150px)]']);

export const mobileMenuLabelStyles = cva([
  'w-full',
  'flex',
  'items-center',
  'justify-between',
  'py-4',
  'text-md',
  'font-bold',
  'text-gray-500',
  'bg-white',
]);

export const mobileMenuLabelWrapperStyles = cva([
  'flex',
  'items-center',
  'justify-between',
  'text-md',
  'font-bold',
  'text-gray-500',
  'bg-white',
  'w-full',
  'mx-auto',
  ...containerStyles,
]);

export const mobileMenuButtonStyles = cva([
  'border-[1px]',
  'border-gray-400',
  'bg-white',
  'px-4',
  'py-[6px]',
  'text-sm',
  'font-semibold',
  'text-gray-500',
  'transition-all',
  'hover:bg-blue-50',
]);
