import { cva } from 'class-variance-authority';

export const cardStyles = cva(['relative', 'w-full', 'flex', 'flex-col'], {
  variants: {
    backgroundColor: {
      White: ['bg-white'],
      'Yellow 25': ['bg-yellow-25'],
      'Green 600': ['bg-green-600'],
      'Green 800': ['bg-green-800'],
      Black: ['bg-black'],
    },
    layout: {
      Stacked: ['flex', 'flex-col'],
      SideBySide: ['flex-col', 'sm:flex-row', 'xl:flex-col'],
    },
  },
});

export const outerBodyStyles = cva(['w-full', 'flex', 'flex-col', 'gap-6'], {
  variants: {
    padding: {
      none: ['p-0', 'pt-3'],
      sm: ['p-6'],
      lg: ['p-6', 'sm:p-10'],
    },
    alignment: {
      start: ['items-start'],
      center: ['items-center'],
    },
  },
});

export const innerBodyStyles = cva(['flex', 'flex-col', 'justify-between', 'gap-4'], {
  variants: {
    alignment: {
      start: ['items-start'],
      center: ['items-center'],
    },
  },
});

export const textStyles = cva(['flex', 'flex-col', 'justify-between'], {
  variants: {
    padding: {
      none: ['gap-4'],
      sm: ['gap-4'],
      lg: ['gap-6'],
    },
    alignment: {
      start: ['items-start'],
      center: ['items-center'],
    },
  },
});

export const headingStyles = cva(['font-bold'], {
  variants: {
    size: {
      sm: ['text-xl', 'text-gray-900'],
      lg: ['text-display-xs-mobile', 'sm:text-display-xs-tablet', 'xl:text-display-xs', 'text-gray-900'],
    },
    alignment: {
      start: ['items-start'],
      center: ['text-center'],
    },
  },
});

export const subheadStyles = cva(['flex', 'flex-col', 'gap-4', 'text-md', 'text-gray-700'], {
  variants: {
    alignment: {
      start: ['items-start'],
      center: ['text-center'],
    },
  },
});
