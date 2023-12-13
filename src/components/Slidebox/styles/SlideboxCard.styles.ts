import { cva } from 'class-variance-authority';

export const containerStyles = cva(
  [
    'min-h-[333px]',
    'flex',
    'flex-col-reverse',
    'xl:gap-10',
    'xl:grid',
    'xl:grid-cols-[1fr_584px]',
    'items-center',
    'cursor-grab',
  ],
  {
    variants: {
      theme: {
        light: ['bg-blue-50'],
        dark: ['bg-blue-800'],
      },
    },
  },
);

export const headingStyles = cva(
  ['xl:text-display-xs', 'xs:text-display-xs-mobile', 'md:text-display-xs-tablet', 'font-extrabold'],
  {
    variants: {
      theme: {
        light: ['text-gray-900'],
        dark: ['text-white'],
      },
    },
  },
);

export const subheadingStyles = cva(['xl:text-xl', 'text-md', 'md:text-lg'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-white'],
    },
  },
});

export const textWrapperStyles = cva([
  'flex',
  'h-fit',
  'w-full',
  'flex-col',
  'items-start',
  'justify-center',
  'gap-6',
  'p-6',
  'md:p-10',
  'xl:pr-10',
  'xl:pl-0',
  'xl:py-0',
  'md:gap-8',
  'xl:gap-10',
]);
