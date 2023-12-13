import { cva } from 'class-variance-authority';

const headingStyles = cva(['flex', 'flex-col', 'gap-6'], {
  variants: {
    alignment: {
      Left: ['items-start', 'text-left', 'max-w-[800px]'],
      start: ['items-start', 'text-left', 'max-w-[800px]'],
      center: ['items-center', 'text-center', 'max-w-[864px]', 'mx-auto'],
      Center: ['items-center', 'text-center', 'max-w-[864px]', 'mx-auto'],
    },
  },
});

export const headingEyebrow = cva(
  [
    'relative',
    'w-fit',
    'text-eyebrow-mobile',
    'md:text-eyebrow',
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
      lg: ['text-display-lg-mobile', 'sm:text-display-lg-tablet', 'lg:text-display-lg'],
      md: ['text-display-md-mobile', 'sm:text-display-md-tablet', 'lg:text-display-md'],
    },
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
    isNotFoundPage: {
      true: ['text-display-xl-mobile', 'md:text-display-xl-tablet', 'xl:text-display-xl'],
      false: [],
    },
  },
});
export const headingSubhead = cva(
  ['flex', 'flex-col', 'gap-4', 'text-md', 'md:text-lg', 'lg:text-xl', 'font-normal', 'md:max-w-sm'],
  {
    variants: {
      theme: {
        light: ['text-gray-700'],
        dark: ['text-gray-200'],
      },
      isNotFoundPage: {
        true: ['text-lg', 'md:text-xl', '!max-w-full'],
        false: [],
      },
    },
  },
);

export const buttonContainer = cva(['flex', 'gap-3', 'md:flex-row', 'flex-col', 'md:w-fit', 'w-full'], {
  variants: {
    isNotFoundPage: {
      true: ['pt-4'],
      false: [],
    },
  },
});

export default headingStyles;
