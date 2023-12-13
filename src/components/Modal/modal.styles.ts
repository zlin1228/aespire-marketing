import { cva } from 'class-variance-authority';

const modalStyles = cva(
  [
    'fixed',
    'inset-0',
    'w-screen',
    'h-screen',
    'backdrop-blur-md',
    'z-40',
    'bg-gray-900',
    'opacity-80',
    'cursor-default',
  ],
  {
    variants: {
      isOpen: {
        true: ['visible'],
        false: ['hidden'],
      },
    },
  },
);

export const modalWrapper = cva(
  ['fixed', 'inset-0', 'w-screen', 'h-screen', 'z-50', 'backdrop-blur-md', 'flex', 'justify-center', 'items-center'],
  {
    variants: {
      isOpen: {
        true: ['visible'],
        false: ['hidden'],
      },
    },
  },
);

export const modalContainer = cva(['relative', 'max-w-[80vw]', 'max-h-[80vh]', 'md:max-w-xl', 'h-fit']);

export const modalColumn = cva(
  ['flex', 'flex-col', 'max-w-[80vw]', 'max-h-[calc(100vh-20%)]', 'h-[calc(100vh-20%)]', 'overflow-scroll'],
  {
    variants: {
      type: {
        embed: ['w-[50rem]'],
        form: ['min-w-[40vw]'],
      },
    },
  },
);

export const closeModalButton = cva([
  'fill-white',
  'absolute',
  'w-fit',
  'right-0',
  '-top-8',
  'z-[100]',
  'bg-primary-900',
]);

export const modalVideoEmbed = cva(['aspect-video', 'w-full']);

export const modalContentRow = cva(['flex'], {
  variants: {
    type: {
      container: ['flex-col', 'lg:flex-row', 'pt-8', 'justify-between', 'gap-12'],
      content: ['flex-col', 'max-w-fit', 'gap-4'],
      cta: ['flex-col', 'min-w-max'],
    },
  },
});

export const modalContent = cva([], {
  variants: {
    type: {
      heading: [
        'text-white',
        'text-display-xs-mobile',
        'sm:text-display-xs-tablet',
        'md:text-display-xs',
        'font-extrabold',
      ],
      subhead: ['text-moss-50', 'text-md', 'font-normal'],
    },
  },
});

export default modalStyles;
