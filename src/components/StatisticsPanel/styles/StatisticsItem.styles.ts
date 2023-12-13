import { cva } from 'class-variance-authority';

export const containerStyles = cva(['flex', 'flex-col', 'gap-2'], {
  variants: {
    alignment: {
      Left: '',
      Centered: 'items-center',
    },
  },
});

export const headingStyles = cva(
  [
    'font-extrabold',
    'border-b-4',
    'w-fit',
    'xs:text-display-lg-mobile',
    'sm:text-display-lg-tablet',
    'xl:text-display-lg',
  ],
  {
    variants: {
      theme: {
        light: ['text-gray-900', 'border-green-500'],
        dark: ['text-white', 'border-green-300'],
      },
    },
  },
);

export const subheadStyles = cva(['text-md', 'md:text-lg', 'xl:text-xl'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});
