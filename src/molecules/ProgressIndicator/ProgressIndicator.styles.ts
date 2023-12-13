import { cva } from 'class-variance-authority';

const progressIndicatorStyles = cva(['relative', 'flex', 'flex-col', 'justify-center', 'items-center'], {
  variants: {
    type: {
      bar: ['w-72', 'h-2', 'bg-gray-200'],
      circle: ['rounded-full'],
      semicircle: ['rounded-t-full'],
    },
    size: {
      xs: ['w-16', 'h-16'],
      sm: ['w-40', 'h-40'],
      md: ['w-48', 'h-48'],
      lg: ['w-64', 'h-64'],
      xl: ['w-70', 'h-70'],
      none: [],
    },
    showsPercent: {
      true: [],
      false: [],
    },
    outlinesPercent: {
      true: [],
      false: [],
    },
    percentLocation: {
      top: [],
      center: [],
      bottom: [],
      circleCenter: [],
    },
  },
});

export const progressBar = cva([
  'w-full',
  'h-full',
  'absolute',
  'inset-0',
  'bg-primary-600',
  'transition-transform',
  'ease-in-out',
  'duration-300',
  'origin-left',
]);

export const percentText = cva(['font-bold', 'text-gray-900', 'px-2', 'py-1', 'w-fit', 'h-fit'], {
  variants: {
    outlinesPercent: {
      true: ['shadow-xs', 'border-solid', 'border-gray-200'],
      false: [],
    },
    percentLocation: {
      top: ['absolute', 'bottom-3', 'left-1'],
      center: ['absolute', '-right-16', '-top-3'],
      bottom: ['absolute', 'top-3', 'right-1'],
      circleCenter: [],
    },
    size: {
      xs: ['text-sm'],
      sm: ['text-display-xs'],
      md: ['text-display-sm'],
      lg: ['text-display-md'],
      xl: ['text-display-lg'],
      none: ['text-sm'],
    },
    type: { bar: [], circle: [], semicircle: [] },
  },
});

export const headingText = cva(['text-xs', 'font-semibold', 'text-gray-700'], {
  variants: {
    isXs: {
      true: ['absolute'],
      false: ['pt-8'],
    },
    type: { bar: [], circle: ['-bottom-12'], semicircle: ['-bottom-4'] },
  },
});

export const progressCircleSVG = cva(['transition-all', 'origin-center', 'absolute'], {
  variants: {
    type: { bar: [], circle: ['-rotate-90'], semicircle: ['rotate-90'] },
  },
});

export default progressIndicatorStyles;
