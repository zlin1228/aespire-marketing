/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';

export const containerStyles = cva(
  ['grid', 'min-h-[374px]', 'bg-cover', 'bg-left-top', 'md:grid-cols-[1fr_202px]', 'xl:grid-cols-[1fr_466px]'],
  {
    variants: {
      contained: {
        true: ['flex', 'min-h-fit', 'xl:grid'],
        false: [],
      },
      hasImage: {
        true: ['grid', 'md:flex', 'md:flex-col', 'lg:flex-row', 'xl:flex'],
        false: [],
      },
    },
  },
);

export const containerMobileStyles = cva(
  ['grid', 'min-h-[672px]', 'bg-cover', 'bg-left-top', 'md:grid-cols-[1fr_202px]', 'xl:grid-cols-[1fr_466px]'],
  {
    variants: {
      contained: {
        true: ['flex', 'min-h-fit', 'xl:grid'],
        false: [],
      },
      hasImage: {
        true: ['grid', 'md:flex', 'md:flex-col', 'lg:flex-row', 'xl:flex'],
        false: [],
      },
    },
  },
);

export const wrapperStyles = cva(
  ['flex', 'flex-col', 'gap-6', 'p-6', 'md:py-8', 'xl:px-16', 'xl:py-12', 'xl:min-w-[672px]'],
  {
    variants: {
      contained: {
        true: ['md:py-10', 'md:px-12'],
        false: [],
      },
    },
  },
);

export const iconStyles = cva([], {
  variants: {
    theme: {
      Light: ['fill-primary-50'],
      Dark: ['fill-primary-600'],
    },
  },
});

export const headingStyles = cva(
  ['text-display-sm-mobile', 'font-semibold', 'text-white', 'md:text-display-sm-tablet', 'xl:text-display-sm'],
  {
    variants: {
      theme: {
        Dark: ['text-white'],
        Light: ['text-gray-900'],
      },
    },
  },
);
