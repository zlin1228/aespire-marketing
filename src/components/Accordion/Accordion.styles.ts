import { cva } from 'class-variance-authority';

const headingStyles = cva(['flex', 'flex-col', 'gap-6', 'w-full', 'max-w-full', 'items-center', 'text-center']);

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
export const headingContent = cva(['font-extrabold', 'md:max-w-[692px]', 'text-display-sm', 'lg:text-display-md'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});
export const headingSubhead = cva(['font-normal', 'md:max-w-[864px]', 'text-md', 'md:text-lg', 'lg:text-xl'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

export const formContainer = cva(['flex', 'w-full', 'p-4', 'md:p-6', 'lg:w-[592px]', 'bg-white', 'shadow-lg']);

export const buttonContainer = cva(['flex', 'gap-3', 'md:flex-row', 'flex-col', 'md:w-fit', 'w-full']);

export const accordionItemTitle = cva(['text-lg', 'font-semibold'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-gray-200'],
    },
  },
});

export const accordionItemBody = cva(['text-md', 'font-regular'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

export const accordionItem = cva(['transition-all', 'duration-200', 'ease-in-out', 'overflow-hidden'], {
  variants: {
    isOpen: {
      true: ['opacity-100'],
      false: ['opacity-0'],
    },
  },
});

export default headingStyles;
