import { cva } from 'class-variance-authority';

const tooltipVariants = cva(
  [
    'opacity-0',
    'invisible',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'group-hover:opacity-100',
    'group-hover:visible',
    'absolute',
    'w-fit',
    'min-w-[150px]',
    'shadow-lg',
    'px-3',
    'py-2',
    'bg-gray-900',
    'text-center',
    'text-xs',
  ],
  {
    variants: {
      direction: {
        top: ['bottom-6', '-left-3'],
        left: ['right-6', 'top-0'],
        right: ['left-6', 'top-0'],
        bottom: ['top-6'],
      },
      alignment: {
        left: [],
        center: ['-left-32'],
        right: ['-left-60'],
        none: [],
      },
    },
  },
);

export const tooltipContainer = cva(['group', 'relative', 'w-min']);

export const contentVariants = cva(['text-white', 'text-xs'], {
  variants: {
    text: {
      heading: ['font-bold', 'pb-1'],
      subheading: ['font-semibold'],
    },
  },
});

export const caretVariants = cva(['absolute', 'fill-gray-900'], {
  variants: {
    direction: {
      top: [],
      left: ['-right-2', 'top-1', '-rotate-90'],
      right: ['-left-2', 'top-1', 'rotate-90'],
      bottom: ['-top-2', 'rotate-180'],
    },
    alignment: {
      left: ['left-1'],
      center: ['left-1/2'],
      right: ['right-1'],
      none: [],
    },
  },
});

export const helpIcon = cva([
  'fill-gray-400',
  'transition-all',
  'duration-300',
  'ease-in-out',
  'group-hover:fill-gray-700',
]);

export default tooltipVariants;
