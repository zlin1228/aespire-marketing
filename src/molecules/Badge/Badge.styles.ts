import { cva } from 'class-variance-authority';

export const iconSizes = {
  sm: 18,
  md: 20,
  lg: 24,
};

export const containerStyles = cva(['flex', 'items-center'], {
  variants: {
    hierarchy: {
      primary: ['bg-primary-600', 'text-white'],
      blue: ['bg-blue-50', 'text-blue-600'],
      green: ['bg-green-25', 'text-green-700'],
      yellow: ['bg-yellow-400', 'text-gray-900'],
      darkGray: ['bg-gray-900', 'text-white'],
      lightGray: ['bg-gray-100', 'text-gray-700'],
    },
    padding: {
      none: [],
      left: ['pl-1'],
      right: ['pr-1'],
    },
  },
});

export const iconStyles = cva(['fill-current'], {
  variants: {
    color: {
      white: ['fill-white', 'group-disabled:fill-gray-300'],
      black: ['fill-black', 'group-disabled:fill-gray-300'],
      primary500: ['fill-primary-500', 'group-disabled:fill-gray-300'],
    },
  },
});

export const badgeVariants = cva(
  ['inline-flex', 'justify-center', 'items-center', 'gap-2', 'font-semibold', 'text-gray-700'],
  {
    variants: {
      hierarchy: {
        primary: ['bg-primary-600', 'text-white'],
        blue: ['bg-blue-50', 'text-blue-600'],
        green: ['bg-green-25', 'text-green-700'],
        yellow: ['bg-yellow-400', 'text-gray-900'],
        darkGray: ['bg-gray-900', 'text-white'],
        lightGray: ['bg-gray-100', 'text-gray-700'],
      },
      size: {
        sm: ['px-2', 'py-1', 'text-xs'],
        md: ['px-2', 'py-1', 'text-xs', 'md:text-sm'],
        lg: ['px-2', 'py-[2px]', 'md:px-3', 'md:py-1', 'text-xs', 'md:text-sm'],
      },
    },
    defaultVariants: {
      hierarchy: 'primary',
      size: 'md',
    },
  },
);
