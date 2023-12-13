import { cva } from 'class-variance-authority';

const headingStyles = cva(['flex', 'flex-col', 'gap-6', 'max-w-full', 'items-center', 'text-center']);

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
      lg: ['text-display-md', 'md:text-display-md-tablet', 'lg:text-display-lg'],
      md: ['text-display-sm', 'md:text-display-md-tablet', 'lg:text-display-md'],
    },
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

export const buttonContainer = cva(['flex', 'gap-3', 'md:flex-row', 'flex-col', 'sm:w-fit', 'w-full']);

export const switcherTabItem = cva(
  [
    'flex',
    'flex-col',
    'gap-4',
    'p-4',
    'w-[calc(50%-12px)]',
    'border',
    'cursor-pointer',
    'transition-all',
    'duration-500',
    'ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: [
          'text-gray-900',
          'border-gray-300',
          'hover:border-primary-600',
          'hover:bg-offsetSwitcher-overlay-light',
        ],
        dark: ['text-white', 'border-white', 'hover:border-primary-200', 'hover:bg-offsetSwitcher-overlay-dark'],
      },
      isActive: {
        light: ['border-primary-600', 'bg-offsetSwitcher-overlay-light'],
        dark: ['border-primary-200', 'bg-offsetSwitcher-overlay-dark'],
      },
    },
  },
);

export const switcherContent = cva(
  [
    'flex',
    'flex-col',
    'gap-4',
    'transition-all',
    'duration-1000',
    'ease-in-out',
    'translate-y-[20px]',
    'opacity-0',
    'h-0',
    'invisible',
    'overflow-hidden',
    'text-md',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-700'],
        dark: ['text-gray-200'],
      },
      active: {
        true: ['translate-y-0', 'opacity-100', 'h-fit', 'visible'],
      },
    },
  },
);

export const switcherContentTitle = cva(['text-xl', 'md:text-display-sm-tablet', 'lg:text-display-xs', 'font-bold'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});

export const dropdownTitle = cva(['font-semibold', 'text-sm'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

export const switchTabIcon = cva(['w-[40px]', 'h-[40px]', 'transition-all', 'duration-500', 'ease-in-out'], {
  variants: {
    theme: {
      light: ['opacity-40', 'grayscale'],
      dark: ['opacity-20', 'brightness-0', 'invert'],
    },
    isActive: {
      light: ['opacity-100', 'filter-none'],
      dark: ['opacity-100'],
    },
  },
});

export default headingStyles;
