import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'group',
    'relative',
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-2',
    'font-semibold',
    'disabled:cursor-not-allowed',
    'focus:border-green-300',
  ],
  {
    variants: {
      hierarchy: {
        primary: ['bg-yellow-400', 'text-gray-900', 'hover:bg-yellow-500', 'disabled:bg-yellow-50'],
        primaryDark: ['bg-yellow-400', 'text-gray-900', 'hover:bg-yellow-500', 'disabled:bg-yellow-50'],
        secondary: [
          'bg-white',
          'text-gray-900',
          'border',
          'border-solid',
          'border-gray-900',
          'hover:bg-gray-50',
          'disabled:bg-gray-50',
          'disabled:text-gray-500',
          'disabled:border-gray-300',
        ],
        secondaryDark: [
          'bg-transparent',
          'text-white',
          'border',
          'border-solid',
          'border-white',
          'disabled:text-gray-500',
          'disabled:border-gray-300',
        ],
        tertiary: ['bg-gray-900', 'text-white', 'hover:bg-gray-700', 'disabled:bg-gray-300'],
        link: ['text-gray-900', 'hover:text-gray-700', 'disabled:text-gray-500', '!pl-0'],
        linkDark: ['text-white', 'hover:text-gray-200', 'disabled:text-gray-400', '!pl-0'],
        paginationLink: ['text-gray-900', 'hover:text-gray-700', 'disabled:text-gray-500'],
      },
      size: {
        sm: ['px-4', 'py-2', 'text-md'],
        md: ['px-5', 'py-3', 'text-md'],
        lg: ['px-6', 'py-4', 'text-lg'],
      },
      iconOnly: {
        true: ['aspect-square'],
        false: [],
      },
      noPadding: {
        true: ['p-0'],
        false: [],
      },
      isFullWidth: {
        true: ['w-full', '!pl-4'],
        false: [],
      },
    },
    defaultVariants: {
      hierarchy: 'primary',
      size: 'md',
      iconOnly: false,
    },
  },
);

export const iconSizes = {
  sm: 18,
  md: 20,
  lg: 24,
};

export const iconVariants = cva(['fill-current'], {
  variants: {
    // only necessary if icon color different from text color
    color: {
      white: ['fill-white', 'group-disabled:fill-gray-300'],
      black: ['fill-black', 'group-disabled:fill-gray-300'],
      primary500: ['fill-primary-500', 'group-disabled:fill-gray-300'],
    },
    hierarchy: {
      primary: [],
      primaryDark: [],
      secondary: [],
      secondaryDark: [],
      tertiary: [],
      link: ['transition-all', 'duration-100', 'ease-in-out', 'group-hover:fill-yellow-400'],
      linkDark: ['transition-all', 'duration-100', 'ease-in-out', 'group-hover:fill-yellow-400'],
      paginationLink: [],
    },
  },
});

export const underlineVariants = cva(
  [
    'absolute',
    'bottom-0',
    'h-1',
    'w-full',
    'scale-x-0',
    'transition-transform',
    'duration-1000',
    'ease-in-out',
    'group-hover:scale-x-100',
  ],
  {
    variants: {
      hierarchy: {
        primary: ['group-hover:bg-black'],
        primaryDark: ['group-hover:bg-white'],
        secondary: ['group-hover:bg-yellow-400'],
        secondaryDark: ['group-hover:bg-yellow-400'],
        tertiary: ['group-hover:bg-yellow-400'],
        link: ['appearance-none'],
        linkDark: ['appearance-none'],
        paginationLink: ['appearance-none'],
      },
    },
  },
);
export default buttonVariants;
