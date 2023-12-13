import { cva } from 'class-variance-authority';

const containStyles = cva(['flex', 'gap-8', 'flex-col', 'lg:flex-row', 'w-full', 'justify-between', 'items-center'], {
  variants: {
    reverse: {
      true: ['lg:flex-row-reverse'],
    },
  },
});

export const headingStyles = cva(['flex', 'flex-col', 'gap-4', 'w-full', 'lg:w-[521px]']);

export const headingEyebrow = cva(
  [
    'relative',
    'w-fit',
    'uppercase',
    'text-eyebrow-mobile',
    'text-xs',
    'md:text-md',
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

export const headingEyebrowIcon = cva([
  'flex',
  'items-center',
  'justify-center',
  'w-[40px]',
  'h-[40px]',
  'md:w-[70px]',
  'md:h-[70px]',
  'bg-primary-600',
  'mb-2',
]);

export const headingContent = cva(['font-extrabold', 'lg:max-w-sm'], {
  variants: {
    size: {
      lg: ['text-display-lg-mobile', 'md:text-display-sm-tablet', 'lg:text-display-lg'],
      md: ['text-display-md-mobile', 'md:text-display-sm-tablet', 'lg:text-display-md'],
      sm: ['text-display-sm-mobile', 'md:text-display-sm-tablet', 'lg:text-display-sm'],
    },
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});

export const headingSubhead = cva(
  ['flex', 'flex-col', 'gap-4', 'items-start', 'text-md', 'md:text-lg', 'font-normal'],
  {
    variants: {
      theme: {
        light: ['text-gray-700'],
        dark: ['text-gray-200'],
      },
    },
  },
);

export const buttonContainer = cva(['flex', 'gap-3', 'md:flex-row', 'flex-col', 'md:w-fit', 'w-full']);

export const switcherTab = cva(
  [
    'flex',
    'text-lg',
    'font-bold',
    'p-4',
    'gap-2',
    'border-l-2',
    'border-gray-200',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-900'],
        dark: ['text-white'],
      },
      active: {
        true: ['border-l-4', 'border-yellow-400', 'bg-yellow-25'],
      },
    },
  },
);

export const switcherTabMobile = cva(
  [
    'flex',
    'text-md',
    'font-bold',
    'p-4',
    'gap-2',
    'border-b-4',
    'border-gray-200',
    'cursor-pointer',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'min-w-max',
    'justify-center',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-500'],
        dark: ['text-white'],
      },
      active: {
        true: ['border-yellow-400', 'text-gray-900'],
      },
    },
  },
);

export const switcherContent = cva(
  [
    'flex',
    'flex-col',
    'gap-6',
    'transition-all',
    'duration-1000',
    'ease-in-out',
    'translate-y-[20px]',
    'opacity-0',
    'h-0',
    'invisible',
    'overflow-hidden',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-900'],
        dark: ['text-white'],
      },
      active: {
        true: ['translate-y-0', 'opacity-100', 'h-fit', 'visible'],
      },
    },
  },
);

export default containStyles;
