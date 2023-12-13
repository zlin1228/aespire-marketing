/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';

export const mediaStyles = cva(['aspect-video', 'rounded-2xl', 'overflow-hidden']);

export const headingStyles = cva(
  [
    'mx-auto',
    'max-w-[864px]',
    'text-center',
    'text-display-md-mobile',
    'font-extrabold',
    'md:text-display-md-tablet',
    'xl:text-display-md',
  ],
  {
    variants: {
      theme: {
        light: ['!text-gray-900'],
        dark: ['!text-white'],
      },
    },
  },
);

export const subheadStyles = cva(
  [
    'mx-auto',
    'max-w-[864px]',
    'text-center',
    'xs:text-display-xs-mobile',
    'font-semibold',
    'md:text-display-sm-tablet',
    'xl:text-display-sm',
  ],
  {
    variants: {
      theme: {
        light: ['!text-gray-900'],
        dark: ['!text-white'],
      },
    },
  },
);

export const listStyles = cva(
  [
    'm-0',
    'flex',
    'flex-col',
    'items-center',
    'justify-between',
    'gap-8',
    'border-t',
    'border-[rgba(255,_255,_255,_0.08)]',
    'pt-8',
    'md:pt-14',
    'xl:flex-row',
  ],
  {
    variants: {
      theme: {
        light: ['border-[rgba(0,_0,_0,_0.08)]'],
        dark: ['border-[rgba(255,_255,_255,_0.08)]'],
      },
    },
  },
);

export const listItemStyles = cva(['flex', 'flex-col', 'items-center', 'px-4'], {
  variants: {
    size: {
      sm: ['gap-3'],
      lg: ['gap-8'],
    },
  },
});

export const listItemImageStyles = cva([], {
  variants: {
    size: {
      sm: ['h-6', 'w-6'],
      lg: ['h-16', 'w-16'],
    },
  },
});

export const listItemTextStyles = cva(['text-center', 'text-md', 'font-semibold', 'md:text-lg'], {
  variants: {
    theme: {
      light: ['text-gray-900'],
      dark: ['text-white'],
    },
  },
});
