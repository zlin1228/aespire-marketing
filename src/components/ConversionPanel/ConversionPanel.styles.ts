import { cva } from 'class-variance-authority';

const headingStyles = cva(['flex', 'flex-col', 'gap-6', 'max-w-full'], {
  variants: {
    alignment: {
      start: ['items-start', 'text-left'],
      center: ['items-center', 'text-center'],
    },
    contained: {
      light: ['m-auto max-w-full border-t-[3px] border-green-500 bg-white px-4 py-8 md:max-w-[704px] lg:max-w-full'],
      dark: ['m-auto max-w-full bg-gray-900 px-4 py-8 md:max-w-[704px] lg:max-w-full'],
    },
  },
});

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
export const headingContent = cva(['font-extrabold', 'md:max-w-[864px]'], {
  variants: {
    size: {
      lg: ['text-display-sm', 'md:text-display-md', 'lg:text-display-lg'],
      md: ['text-display-xs', 'sm:text-display-sm'],
    },
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});
export const headingSubhead = cva(['flex', 'flex-col', 'gap-4', 'font-normal', 'md:max-w-[864px]'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
    size: {
      lg: ['text-md', 'md:text-lg', 'lg:text-xl'],
      md: ['text-md', 'lg:text-lg'],
    },
  },
});

export const formContainer = cva(['flex', 'w-full', 'p-4', 'md:p-6', 'lg:w-[592px]', 'bg-white', 'shadow-lg']);

export const buttonContainer = cva(['flex', 'gap-3', 'md:flex-row', 'flex-col', 'md:w-fit', 'w-full']);

export default headingStyles;
