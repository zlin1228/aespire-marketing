import { cva } from 'class-variance-authority';

const containStyles = cva(['flex', 'flex-col', 'lg:flex-row', 'gap-8', 'justify-between', 'items-end']);

export const headingStyles = cva([
  'flex',
  'flex-col',
  'gap-6',
  'items-center',
  'text-center',
  'md:items-start',
  'md:text-left',
  'lg:max-w-[calc(50%-32px)]',
  'xl:max-w-[592px]',
]);

export const headingEyebrow = cva(
  [
    'relative',
    'w-fit',
    'uppercase',
    'text-xs',
    'sm:text-eyebrow',
    'font-extrabold',
    "after:content-['']",
    'after:absolute',
    'after:w-full',
    'after:h-1',
    'after:-bottom-2',
    'after:left-0',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-900', 'after:bg-green-500'],
        dark: ['text-white', 'after:bg-green-300'],
      },
    },
  },
);
export const headingContent = cva(['font-extrabold'], {
  variants: {
    size: {
      lg: ['text-display-sm', 'md:text-display-md'],
      md: ['text-display-sm'],
      sm: ['text-display-sm'],
    },
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});
export const headingSubhead = cva(['text-md', 'lg:text-xl', 'font-normal'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});
export const assetItemStyles = cva(['flex', 'flex-col', 'min-w-[50%]', 'items-center', 'justify-between']);
export const assetTitle = cva(['text-md', 'lg:text-xl', 'font-bold'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-gray-200'],
    },
  },
});
export const rowItemTitle = cva(
  [
    'flex',
    'text-md',
    'md:text-xl',
    'font-semibold',
    'w-full',
    'md:w-[50%]',
    'p-4',
    'justify-center',
    'md:justify-start',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-900'],
        dark: ['text-gray-200'],
      },
    },
  },
);

export default containStyles;
