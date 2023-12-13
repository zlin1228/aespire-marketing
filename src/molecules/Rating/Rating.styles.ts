import { cva } from 'class-variance-authority';

const ratingStyles = cva(['flex', 'flex-col', 'gap-5', 'p-4', 'md:p-6', 'w-full'], {
  variants: {
    background: {
      transparent: ['bg-transparent', '!p-0'],
      'transparent dark': ['bg-transparent', '!p-0'],
      white: ['bg-white', '!px-0'],
      primary25: ['bg-primary-25', 'shadow-lg'],
      blue50: ['bg-blue-50', 'border', 'border-blue-100'],
      primary700: ['bg-primary-700', 'border', 'border-primary-600'],
      gray700: ['bg-gray-700', 'border', 'border-gray-600'],
    },
  },
});

export const ratingContainer = cva(['relative'], {
  variants: {
    alignment: {
      'Left Aligned': ['w-full'],
      'Center Aligned': ['flex', 'justify-center'],
    },
  },
});

export const ratingRow = cva(['flex'], {
  variants: {
    type: {
      star: ['flex-row', 'sm:w-fit', 'justify-center', 'sm:justify-start'],
      content: ['flex-col', 'sm:flex-row', 'gap-3'],
      images: ['flex-col', 'sm:flex-row', 'gap-6', 'w-full'],
    },
  },
});

export const ratingContent = cva(['text-sm', 'sm:text-md', 'font-normal', 'text-center', 'sm:text-left'], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

export const ratingImageStyles = cva([
  'w-auto',
  'h-auto',
  'max-w-[140px]',
  'max-h-[40px]',
  'mx-auto',
  'xl:mx-0',
  'object-contain',
]);

export default ratingStyles;
