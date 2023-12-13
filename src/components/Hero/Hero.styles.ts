/* eslint-disable tailwindcss/no-arbitrary-value */
import { cva } from 'class-variance-authority';

export const containerStyles = cva([
  'mx-auto',
  'flex',
  'max-w-full',
  'flex-col',
  'justify-center',
  'gap-8',
  'px-4',
  'pb-12',
  'pt-12',
  'sm:px-8',
  'md:max-w-md',
  'md:gap-12',
  'md:pb-18',
  'lg:max-w-full',
  'xl:max-w-xl',
  'xl:gap-16',
  'xl:pb-24',
]);

export const wrapperStyles = cva(['flex', 'relative', 'z-30'], {
  variants: {
    alignment: {
      'Left Aligned': ['xl:grid', 'xl:grid-cols-2', 'flex-col', 'gap-8'],
      'Center Aligned': ['flex', 'flex-col', 'gap-12'],
    },
    isNotFoundPage: {
      true: ['flex-col-reverse', 'gap-8', 'xl:gap-16'],
      false: [],
    },
    isFullHeightImage: {
      true: ['static'],
      false: [],
    },
  },
});

export const contentStyles = cva(['flex', 'flex-col', 'gap-8', 'md:gap-10', 'xl:gap-12', 'z-20'], {
  variants: {
    alignment: {
      'Left Aligned': [],
      'Center Aligned': ['items-center', 'max-w-[678px]', 'mx-auto'],
    },
    isNotFoundPage: {
      true: ['w-full', '!max-w-[800px]'],
      false: [],
    },
  },
});

export const textStyles = cva(['w-full', 'flex', 'flex-col', 'gap-8', 'items-center', 'text-center'], {
  variants: {
    alignment: {
      'Left Aligned': ['xl:items-start', 'xl:text-left'],
      'Center Aligned': ['items-center', 'text-center'],
    },
  },
});

export const imageContainerStyles = cva(['relative'], {
  variants: {
    alignment: {
      'Center Aligned': [],
      'Left Aligned': [],
    },
    isNotFoundPage: {
      true: ['xl:max-w-[800px]', 'mx-auto', 'sm:max-w-[566px]', 'max-w-[240px]'],
      false: [],
    },
    isFullHeightImage: {
      true: ['relative'],
      false: [],
    },
  },
});

export const videoEmbedStyles = cva(['w-full', 'aspect-video']);

export const imageStyles = cva(['h-auto', 'w-full'], {
  variants: {
    isFullHeightImage: {
      true: ['xl:w-auto', 'absolute', 'xl:right-0', 'xl:bottom-0', 'xl:object-cover', 'h-auto', 'xxl:h-full', 'z-10'],
      false: [],
    },
    hidden: {
      true: ['opacity-0'],
      false: [],
    },
  },
});

export const formStyles = cva(['px-4', 'py-8', 'lg:py-8', 'bg-white', 'shadow-xl']);

export const resourcesGridStyles = cva([
  'flex',
  'flex-col',
  'gap-6',
  'xl:grid',
  'xl:grid-cols-[488px_1fr]',
  'xl:gap-8',
  'z-10',
]);
