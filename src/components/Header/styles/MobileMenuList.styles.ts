import { cva } from 'class-variance-authority';

const containerStyles = [
  'w-full',
  'max-w-full',
  'md:max-w-md',
  'lg:max-w-full',
  'xl:max-w-xl',
  'mx-auto',
  'px-4',
  'sm:px-8',
];

export const mobileMenuListStyles = cva(
  [
    'overflow-y-auto',
    'grow',
    'flex',
    'h-fit',
    'flex-col',
    'gap-4',
    'h-[calc(100dvh-279px)]',
    'md:h-[calc(100dvh-247px)]',
    'py-4',
    ...containerStyles,
  ],
  {
    variants: {
      layout: {
        column: [],
        grid: ['md:grid', 'md:grid-cols-[repeat(2_,_1fr)]', 'md:gap-4', 'md:h-fit'],
      },
    },
  },
);

export const mobileMenuListLabelStyles = cva([
  'text-md',
  'font-semibold',
  'text-gray-900',
  'border-b',
  'border-transparent',
  'transition-all',
  'duration-100',
]);

export const mobileSubMenuListStyles = cva(['flex', 'flex-col', 'gap-4'], {
  variants: {
    layout: {
      column: [],
      grid: ['md:grid', 'md:grid-cols-[repeat(2_,_1fr)]', 'md:gap-4', 'md:h-fit'],
    },
  },
});
