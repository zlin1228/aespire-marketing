import { cva } from 'class-variance-authority';

export const headerStyles = cva(['bg-white', 'sticky', 'top-0', 'z-50']);

export const bottomBarWrapper = cva(
  [
    'relative',
    'container',
    'h-full',
    'max-w-full',
    'md:max-w-md',
    'lg:max-w-full',
    'xl:max-w-xl',
    'flex',
    'items-center',
    'justify-between',
    'gap-4',
    'px-4',
    'sm:px-8',
    'mx-auto',
  ],
  {
    variants: {
      additionalScreenStyles: {
        true: ['flex', 'h-fit', 'items-center', 'justify-between', 'border-b', 'border-gray-100', 'bg-white', 'py-4'],
        false: [],
      },
    },
  },
);

export const mobileNavWrapper = cva([
  'relative',
  'container',
  'w-full',
  'h-full',
  'max-w-full',
  'md:max-w-md',
  'lg:max-w-full',
  'xl:max-w-xl',
  'flex',
  'flex-col',
  'px-4',
  'sm:px-8',
  'mx-auto',
]);
