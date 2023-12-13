import { cva } from 'class-variance-authority';

const richTextContent = cva([], {
  variants: {
    theme: {
      light: ['text-gray-700'],
      dark: ['text-gray-200'],
    },
  },
});

export const listStyles = cva(['flex', 'w-full', 'flex-col', 'gap-4', 'text-md']);

export const listItemStyles = cva(['flex', 'gap-3']);

export const listCheckStyles = cva(['mt-[3px]', 'min-h-[20px]', 'min-w-[20px]']);

export const linkStyles = cva(['text-green-600']);

export const headingStyles = cva(['font-bold', 'text-gray-900'], {
  variants: {
    type: {
      h1: ['text-rtc-h1'],
      h2: ['text-rtc-h2'],
      h3: ['text-rtc-h3'],
      h4: ['text-rtc-h4'],
      h5: ['text-rtc-h5'],
      h6: ['text-rtc-h6'],
    },
  },
});

export default richTextContent;
