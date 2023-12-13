import { cva } from 'class-variance-authority';

const heroStyles = cva(['flex', 'flex-col', 'gap-8', 'pt-16', 'pb-12']);

export const headingStyles = cva([
  'flex',
  'flex-col',
  'pt-8',
  'sm:pt-12',
  'lg:pt-16',
  'pb-12',
  'gap-6',
  'w-full',
  'max-w-full',
  'items-center',
  'text-center',
  'w-full',
  'max-w-full',
  'lg:max-w-[800px]',
  'mx-auto',
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

export const headingContent = cva(
  ['font-extrabold', 'text-display-lg-mobile', 'lg:text-display-sm', 'md:text-display-md', 'lg:text-display-lg'],
  {
    variants: {
      theme: {
        light: ['text-gray-900'],
        dark: ['text-white'],
      },
    },
  },
);
export const headingSubhead = cva(['font-normal', 'text-lg', 'md:text-xl'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

export default heroStyles;
