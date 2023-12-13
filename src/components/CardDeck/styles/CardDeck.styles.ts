import { cva } from 'class-variance-authority';

export const containerStyles = cva(
  ['max-w-full', 'md:max-w-md', 'lg:max-w-lg', 'xl:max-w-xl', 'flex', 'flex-col', 'gap-8', 'mx-auto'],
  {
    variants: {
      layout: {
        Centered: ['sm:gap-12', 'xl:gap-16'],
        Contained: ['sm:gap-12', 'xl:gap-16', 'p-4', 'sm:p-10', 'shadow-xl', 'bg-white'],
        Offset: ['xl:grid', 'xl:grid-cols-[488px_1fr]', 'xl:gap-12', 'items-start'],
      },
    },
  },
);

export const headingWrapperStyles = cva([
  'flex',
  'flex-col',
  'items-center',
  'w-full',
  'gap-8',
  'mx-auto',
  'sm:gap-12',
  'xl:gap-16',
]);

export const gridStyles = cva(['w-full', 'flex', 'flex-col', 'gap-8'], {
  variants: {
    layout: {
      Centered: ['xl:grid', 'xl:grid-cols-3'],
      Contained: ['xl:grid', 'xl:grid-cols-3'],
      Offset: ['sm:!grid', 'sm:!grid-cols-2'],
    },
    grid: {
      0: ['!grid-cols-1'],
      1: ['!grid-cols-1'],
      2: ['!grid-cols-2'],
      3: ['!grid-cols-3'],
      4: ['!grid-cols-4'],
      5: ['!grid-cols-3'],
      6: ['!grid-cols-3'],
      7: ['!grid-cols-4'],
      8: ['!grid-cols-4'],
      9: ['!grid-cols-3'],
      10: ['!grid-cols-3'],
    },
  },
});
